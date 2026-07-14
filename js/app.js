// ============================================================
// PÁGINA INICIAL — monta os cards a partir de PRODUTOS (dados.js)
// ============================================================

// Nota geral = média das notas por categoria, com 1 casa decimal
function notaGeral(produto) {
  const valores = Object.values(produto.notas);
  const media = valores.reduce((soma, n) => soma + n, 0) / valores.length;
  return Math.round(media * 10) / 10;
}

function classeNota(nota) {
  if (nota >= 7.5) return "boa";
  if (nota >= 5.5) return "media";
  return "ruim";
}

// Usa a imagem do produto se existir; senão, cai no emoji
function capaHTML(produto) {
  return produto.imagem
    ? `<img src="${produto.imagem}" alt="${produto.nome}">`
    : produto.icone;
}

function criarCard(produto) {
  const nota = notaGeral(produto);
  return `
    <a class="card" href="produto.html?id=${produto.id}">
      <div class="card-capa" style="background:${produto.cor}22">${capaHTML(produto)}</div>
      <div class="card-corpo">
        <span class="selo">${produto.selo}</span>
        <h3>${produto.nome}</h3>
        <p class="resumo">${produto.resumo}</p>
        <div class="card-rodape">
          <span class="categoria">${produto.categoria}</span>
          <span class="nota ${classeNota(nota)}">${nota.toFixed(1)}</span>
        </div>
      </div>
    </a>`;
}

function montarPagina() {
  const grade = document.getElementById("grade-produtos");
  const filtroCategoria = new URLSearchParams(location.search).get("categoria");

  let lista = [...PRODUTOS].sort((a, b) => b.data.localeCompare(a.data));
  if (filtroCategoria) {
    lista = lista.filter((p) => p.categoria === filtroCategoria);
    document.getElementById("titulo-secao").textContent = filtroCategoria;
    document.getElementById("subtitulo-secao").textContent =
      `Todas as nossas análises de ${filtroCategoria.toLowerCase()}.`;
  }

  grade.innerHTML = lista.length
    ? lista.map(criarCard).join("")
    : "<p>Nenhuma análise nesta categoria ainda.</p>";

  // Monta o menu de categorias automaticamente
  const nav = document.getElementById("menu-categorias");
  const categorias = [...new Set(PRODUTOS.map((p) => p.categoria))].sort();
  nav.innerHTML =
    `<a href="index.html" class="${filtroCategoria ? "" : "ativo"}">Início</a>` +
    categorias
      .map(
        (c) =>
          `<a href="index.html?categoria=${encodeURIComponent(c)}"
              class="${c === filtroCategoria ? "ativo" : ""}">${c}</a>`
      )
      .join("") +
    `<a href="forum.html">Fórum</a>`;
}

montarPagina();
