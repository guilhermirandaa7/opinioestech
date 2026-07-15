// ============================================================
// DIÁRIO DE TECNOLOGIA — lê noticias.json (gerado diariamente
// pelo GitHub Actions) e monta a lista de manchetes na home.
// ============================================================

(function () {
  const lista = document.getElementById("lista-noticias");
  if (!lista) return;

  function formatarData(iso) {
    try {
      return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long" });
    } catch { return ""; }
  }

  fetch("noticias.json?v=" + Date.now())
    .then((r) => { if (!r.ok) throw new Error("sem noticias"); return r.json(); })
    .then((dados) => {
      const itens = dados.itens || [];
      if (!itens.length) throw new Error("vazio");

      const info = document.getElementById("noticias-atualizado");
      if (info && dados.atualizado) {
        info.textContent = "Atualizado em " + new Date(dados.atualizado)
          .toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
      }

      lista.innerHTML = itens.map((it) => `
        <a class="noticia" href="${it.link}" target="_blank" rel="noopener">
          <span class="noticia-topo">
            <span class="noticia-fonte">${it.fonte}</span>
            <span class="noticia-data">${formatarData(it.data)}</span>
          </span>
          <span class="noticia-titulo">${it.titulo}</span>
        </a>`).join("");
    })
    .catch(() => {
      const secao = document.getElementById("secao-noticias");
      if (secao) secao.style.display = "none"; // sem dados ainda: esconde a seção
    });
})();
