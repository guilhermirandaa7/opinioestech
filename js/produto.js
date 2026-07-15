// ============================================================
// PÁGINA DO PRODUTO — lê ?id= da URL e monta a análise completa
// ============================================================

function classeNota(nota) {
  if (nota >= 7.5) return "boa";
  if (nota >= 5.5) return "media";
  return "ruim";
}

// Nota geral = média das notas por categoria (1 casa decimal)
function notaGeral(produto) {
  const valores = Object.values(produto.notas);
  const media = valores.reduce((soma, n) => soma + n, 0) / valores.length;
  return Math.round(media * 10) / 10;
}

// Veredito em uma palavra, derivado da nota geral
function textoVeredito(nota) {
  if (nota >= 8.5) return "Recomendado";
  if (nota >= 7.0) return "Vale a pena";
  if (nota >= 5.5) return "Depende";
  return "Evite";
}

function montarProduto() {
  const id = new URLSearchParams(location.search).get("id");
  const produto = PRODUTOS.find((p) => p.id === id);

  if (!produto) {
    document.body.innerHTML =
      "<div class='container' style='padding:60px 20px'><h1>Análise não encontrada</h1>" +
      "<p><a href='index.html'>← Voltar para o início</a></p></div>";
    return;
  }

  document.title = `${produto.nome} — Análise | Opiniões Tech`;

  // Meta description específica do produto (SEO)
  let md = document.querySelector('meta[name="description"]');
  if (!md) { md = document.createElement("meta"); md.name = "description"; document.head.appendChild(md); }
  md.content = `${produto.nome}: ${produto.resumo}`;

  // Topo
  const capa = document.getElementById("capa");
  capa.style.background = produto.cor + "22";
  if (produto.imagem) {
    capa.innerHTML = `<img src="${produto.imagem}" alt="${produto.nome}">`;
  } else {
    capa.textContent = produto.icone;
  }
  document.getElementById("selo").textContent = produto.selo;
  document.getElementById("nome").textContent = produto.nome;
  document.getElementById("meta").textContent =
    `${produto.categoria} · Análise publicada em ${new Date(produto.data + "T12:00:00")
      .toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}`;

  // Selo de veredito (assinatura da marca)
  const geral = notaGeral(produto);
  const veredito = document.getElementById("veredito");
  veredito.className = "veredito " + classeNota(geral);
  veredito.innerHTML = `
    <span class="v-topo">Veredito</span>
    <span class="v-nota">${geral.toFixed(1)}</span>
    <span class="v-selo">${textoVeredito(geral)}</span>`;

  // Notas por categoria (barras)
  document.getElementById("notas").innerHTML = Object.entries(produto.notas)
    .map(
      ([rotulo, valor]) => `
      <div class="linha-nota">
        <span class="rotulo">${rotulo}</span>
        <div class="barra"><div class="${classeNota(valor)}" style="width:${valor * 10}%"></div></div>
        <span class="valor">${valor.toFixed(1)}</span>
      </div>`
    )
    .join("");

  // Prós e contras
  document.getElementById("lista-pros").innerHTML = produto.pros
    .map((p) => `<li>${p}</li>`)
    .join("");
  document.getElementById("lista-contras").innerHTML = produto.contras
    .map((c) => `<li>${c}</li>`)
    .join("");

  // Texto da análise
  document.getElementById("texto-analise").innerHTML = produto.analise
    .map((paragrafo) => `<p>${paragrafo}</p>`)
    .join("");

  // Especificações
  document.getElementById("tabela-specs").innerHTML = Object.entries(produto.specs)
    .map(([chave, valor]) => `<tr><td>${chave}</td><td>${valor}</td></tr>`)
    .join("");

  // Botões de compra (links de afiliado)
  const lojas = [
    { chave: "amazon", nome: "Comprar na Amazon", classe: "amazon" },
    { chave: "mercadolivre", nome: "Ver no Mercado Livre", classe: "mercadolivre" },
    { chave: "magalu", nome: "Ver no Magalu", classe: "magalu" }
  ];
  document.getElementById("botoes-compra").innerHTML = lojas
    .filter((loja) => produto.links[loja.chave])
    .map(
      (loja) =>
        `<a class="botao-compra ${loja.classe}" href="${produto.links[loja.chave]}"
            target="_blank" rel="noopener sponsored"><svg class="icone" viewBox="0 0 24 24"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg> ${loja.nome}</a>`
    )
    .join("");
}

montarProduto();
