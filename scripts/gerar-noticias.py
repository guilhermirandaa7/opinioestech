#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Curadoria de manchetes de tecnologia.
Busca os feeds RSS das fontes, junta as manchetes mais recentes e gera:
  - noticias.json  -> consumido pela home (js/noticias.js)
  - feed.xml       -> feed próprio, para o serviço de newsletter (RSS -> email)

Rodado diariamente pelo GitHub Actions (.github/workflows/noticias.yml).
Sem dependências externas: só biblioteca padrão do Python 3.
"""
import json, re, html, urllib.request
from datetime import datetime, timezone
from email.utils import parsedate_to_datetime, format_datetime
import xml.etree.ElementTree as ET

FONTES = [
    ("Tecnoblog",     "https://tecnoblog.net/feed/"),
    ("Canaltech",     "https://canaltech.com.br/rss/"),
    ("Olhar Digital", "https://olhardigital.com.br/feed/"),
]
MAX_ITENS = 18
UA = "Mozilla/5.0 (compatible; OpinioesTechBot/1.0; +https://guilhermirandaa7.github.io/opinioestech/)"

def baixar(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read()

def limpar(texto):
    if not texto:
        return ""
    texto = re.sub(r"<[^>]+>", "", texto)          # remove tags
    texto = html.unescape(texto).strip()
    return re.sub(r"\s+", " ", texto)

def parse_feed(fonte, xml_bytes):
    itens = []
    try:
        root = ET.fromstring(xml_bytes)
    except ET.ParseError:
        return itens
    for item in root.iter("item"):
        titulo = limpar(item.findtext("title"))
        link = (item.findtext("link") or "").strip()
        pub = item.findtext("pubDate")
        try:
            data = parsedate_to_datetime(pub) if pub else None
            if data and data.tzinfo is None:
                data = data.replace(tzinfo=timezone.utc)
        except Exception:
            data = None
        if titulo and link:
            itens.append({"titulo": titulo, "link": link, "fonte": fonte, "dt": data})
    return itens

def main():
    todas = []
    for fonte, url in FONTES:
        try:
            todas += parse_feed(fonte, baixar(url))
            print(f"ok  {fonte}")
        except Exception as e:
            print(f"falha {fonte}: {e}")

    # ordena por data (mais recente primeiro); sem data vai para o fim
    todas.sort(key=lambda x: x["dt"] or datetime.min.replace(tzinfo=timezone.utc), reverse=True)

    # dedupe por título e intercala fontes para não ficar tudo do mesmo site no topo
    vistos, por_fonte = set(), {f[0]: [] for f in FONTES}
    for it in todas:
        chave = it["titulo"].lower()
        if chave in vistos:
            continue
        vistos.add(chave)
        por_fonte[it["fonte"]].append(it)

    intercalado = []
    i = 0
    while len(intercalado) < MAX_ITENS and any(i < len(v) for v in por_fonte.values()):
        for f in por_fonte:
            if i < len(por_fonte[f]):
                intercalado.append(por_fonte[f][i])
                if len(intercalado) >= MAX_ITENS:
                    break
        i += 1

    agora = datetime.now(timezone.utc)
    dados = {
        "atualizado": agora.isoformat(timespec="seconds"),
        "itens": [{
            "titulo": it["titulo"],
            "link": it["link"],
            "fonte": it["fonte"],
            "data": (it["dt"] or agora).astimezone(timezone.utc).strftime("%Y-%m-%d"),
        } for it in intercalado],
    }
    with open("noticias.json", "w", encoding="utf-8") as f:
        json.dump(dados, f, ensure_ascii=False, indent=2)
    print(f"noticias.json: {len(dados['itens'])} manchetes")

    # feed.xml próprio (para o serviço de newsletter consumir)
    def esc(s): return html.escape(s, quote=True)
    itens_xml = "\n".join(
        f"""    <item>
      <title>{esc(it['titulo'])} — {esc(it['fonte'])}</title>
      <link>{esc(it['link'])}</link>
      <guid isPermaLink="true">{esc(it['link'])}</guid>
      <pubDate>{format_datetime(it['dt'] or agora)}</pubDate>
    </item>""" for it in intercalado)
    feed = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Opiniões Tech — Diário de Tecnologia</title>
    <link>https://guilhermirandaa7.github.io/opinioestech/</link>
    <description>Manchetes de tecnologia selecionadas todos os dias.</description>
    <language>pt-BR</language>
    <lastBuildDate>{format_datetime(agora)}</lastBuildDate>
{itens_xml}
  </channel>
</rss>
"""
    with open("feed.xml", "w", encoding="utf-8") as f:
        f.write(feed)
    print("feed.xml gerado")

if __name__ == "__main__":
    main()
