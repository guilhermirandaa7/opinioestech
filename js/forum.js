// ============================================================
// FÓRUM — categorias, discussões e respostas
//
// IMPORTANTE: por enquanto as mensagens são salvas no navegador
// de cada visitante (localStorage). Ou seja, cada pessoa só vê
// o que ela mesma escreveu, além das discussões de exemplo.
// Um fórum "de verdade" precisa de um servidor — próximo passo
// quando o site for publicado.
// ============================================================

// Discussões de exemplo, para o fórum não nascer vazio
const DISCUSSOES_EXEMPLO = [
  {
    id: "ex-monitor-1440p",
    categoria: "Monitores",
    titulo: "Vale a pena sair do 1080p para o 1440p em 2026?",
    posts: [
      {
        autor: "Opiniões Tech (equipe)",
        data: "2026-07-10T10:00:00",
        texto:
          "Abrimos essa discussão porque é a dúvida mais comum de quem monta PC hoje. Nossa visão: se a placa de vídeo aguenta, 1440p é o ponto ideal de nitidez e desempenho pelo preço. E para você, valeu a troca?"
      }
    ]
  },
  {
    id: "ex-switch-teclado",
    categoria: "Teclados",
    titulo: "Switch azul, marrom ou vermelho: qual você usa e por quê?",
    posts: [
      {
        autor: "Opiniões Tech (equipe)",
        data: "2026-07-08T15:30:00",
        texto:
          "O barulho do switch azul divide opiniões até hoje. Conta pra gente qual switch você usa no dia a dia e se trocaria."
      }
    ]
  },
  {
    id: "ex-headset-sem-fio",
    categoria: "Headsets",
    titulo: "Headset sem fio barato: existe algum que preste?",
    posts: [
      {
        autor: "Opiniões Tech (equipe)",
        data: "2026-07-05T09:00:00",
        texto:
          "Abaixo de R$ 300 o mercado de headsets sem fio é um campo minado. Alguém tem uma boa experiência para compartilhar?"
      }
    ]
  }
];

const CATEGORIAS_EXTRAS = ["Off-Topic", "Sugestões do site"];
const CHAVE_LS = "opinioestech-forum";

// ---------- dados ----------

function carregarLocais() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_LS)) || { novas: [], respostas: {} };
  } catch {
    return { novas: [], respostas: {} };
  }
}

function salvarLocais(dados) {
  localStorage.setItem(CHAVE_LS, JSON.stringify(dados));
}

function todasDiscussoes() {
  const locais = carregarLocais();
  const todas = [...DISCUSSOES_EXEMPLO, ...locais.novas].map((d) => ({
    ...d,
    posts: [...d.posts, ...(locais.respostas[d.id] || [])]
  }));
  return todas;
}

function listaCategorias() {
  const doSite = [...new Set(PRODUTOS.map((p) => p.categoria))].sort();
  return { produtos: doSite, outras: CATEGORIAS_EXTRAS };
}

// ---------- utilidades ----------

function escaparHTML(texto) {
  const div = document.createElement("div");
  div.textContent = texto;
  return div.innerHTML;
}

function formatarData(iso) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit"
  });
}

const AVISO_LOCAL = `
  <div class="aviso-local"><svg class="icone" viewBox="0 0 24 24"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg> Versão de demonstração: as mensagens ficam salvas
  apenas no seu navegador. Quando o site for publicado com um sistema de
  comentários, todos os visitantes verão as discussões.</div>`;

// ---------- telas ----------

function telaCategorias(el) {
  document.title = "Fórum | Opiniões Tech";
  const { produtos, outras } = listaCategorias();
  const discussoes = todasDiscussoes();

  const cartao = (cat) => {
    const qtd = discussoes.filter((d) => d.categoria === cat).length;
    return `
      <a class="cat-card" href="forum.html?c=${encodeURIComponent(cat)}">
        <h3>${cat}</h3>
        <span class="contagem"><svg class="icone" viewBox="0 0 24 24"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg> ${qtd} ${qtd === 1 ? "discussão" : "discussões"}</span>
      </a>`;
  };

  el.innerHTML = `
    <h2>Fórum de discussões</h2>
    <p class="subtitulo">Dê sua opinião sobre cada tipo de produto e troque experiências.</p>
    ${AVISO_LOCAL}
    <p class="rotulo-secao">Produtos</p>
    <div class="grade-forum">${produtos.map(cartao).join("")}</div>
    <p class="rotulo-secao">Outros</p>
    <div class="grade-forum">${outras.map(cartao).join("")}</div>`;
}

function telaDiscussoes(el, categoria) {
  document.title = `${categoria} — Fórum | Opiniões Tech`;
  const lista = todasDiscussoes()
    .filter((d) => d.categoria === categoria)
    .sort((a, b) => b.posts[b.posts.length - 1].data.localeCompare(a.posts[a.posts.length - 1].data));

  const item = (d) => `
    <a class="discussao" href="forum.html?c=${encodeURIComponent(categoria)}&d=${d.id}">
      <h3>${escaparHTML(d.titulo)}</h3>
      <span class="meta-disc">${d.posts.length} ${d.posts.length === 1 ? "mensagem" : "mensagens"}
        · última em ${formatarData(d.posts[d.posts.length - 1].data)}</span>
    </a>`;

  el.innerHTML = `
    <a class="voltar" href="forum.html">← Todas as categorias</a>
    <h2 style="margin-top:14px">${categoria}</h2>
    <p class="subtitulo">${lista.length} ${lista.length === 1 ? "discussão" : "discussões"} nesta categoria.</p>
    ${lista.map(item).join("") || "<p>Nenhuma discussão ainda. Comece a primeira!</p>"}

    <div class="painel" style="margin-top:26px">
      <h2>Nova discussão</h2>
      <form class="formulario" id="form-nova">
        <input name="titulo" placeholder="Título da discussão" required maxlength="120">
        <input name="autor" placeholder="Seu nome" required maxlength="40">
        <textarea name="texto" placeholder="Escreva sua mensagem..." required maxlength="2000"></textarea>
        <button class="botao" type="submit">Publicar discussão</button>
      </form>
    </div>`;

  document.getElementById("form-nova").addEventListener("submit", (evento) => {
    evento.preventDefault();
    const form = evento.target;
    const locais = carregarLocais();
    const nova = {
      id: "d-" + Date.now(),
      categoria,
      titulo: form.titulo.value.trim(),
      posts: [{
        autor: form.autor.value.trim(),
        data: new Date().toISOString(),
        texto: form.texto.value.trim()
      }]
    };
    locais.novas.push(nova);
    salvarLocais(locais);
    location.href = `forum.html?c=${encodeURIComponent(categoria)}&d=${nova.id}`;
  });
}

function telaDiscussao(el, categoria, idDiscussao) {
  const discussao = todasDiscussoes().find((d) => d.id === idDiscussao);
  if (!discussao) {
    el.innerHTML = `<h2>Discussão não encontrada</h2>
      <p><a href="forum.html">← Voltar ao fórum</a></p>`;
    return;
  }
  document.title = `${discussao.titulo} — Fórum | Opiniões Tech`;

  const post = (p) => `
    <div class="post">
      <span class="autor">${escaparHTML(p.autor)}</span>
      <span class="quando">${formatarData(p.data)}</span>
      <p>${escaparHTML(p.texto)}</p>
    </div>`;

  el.innerHTML = `
    <a class="voltar" href="forum.html?c=${encodeURIComponent(categoria)}">← ${categoria}</a>
    <h2 style="margin:14px 0 18px">${escaparHTML(discussao.titulo)}</h2>
    ${discussao.posts.map(post).join("")}

    <div class="painel" style="margin-top:26px">
      <h2>Responder</h2>
      <form class="formulario" id="form-resposta">
        <input name="autor" placeholder="Seu nome" required maxlength="40">
        <textarea name="texto" placeholder="Escreva sua resposta..." required maxlength="2000"></textarea>
        <button class="botao" type="submit">Enviar resposta</button>
      </form>
    </div>`;

  document.getElementById("form-resposta").addEventListener("submit", (evento) => {
    evento.preventDefault();
    const form = evento.target;
    const locais = carregarLocais();
    if (!locais.respostas[idDiscussao]) locais.respostas[idDiscussao] = [];
    locais.respostas[idDiscussao].push({
      autor: form.autor.value.trim(),
      data: new Date().toISOString(),
      texto: form.texto.value.trim()
    });
    salvarLocais(locais);
    location.reload();
  });
}

// ---------- roteador ----------

function montarForum() {
  const el = document.getElementById("conteudo-forum");
  const params = new URLSearchParams(location.search);
  const categoria = params.get("c");
  const idDiscussao = params.get("d");

  if (categoria && idDiscussao) telaDiscussao(el, categoria, idDiscussao);
  else if (categoria) telaDiscussoes(el, categoria);
  else telaCategorias(el);
}

montarForum();
