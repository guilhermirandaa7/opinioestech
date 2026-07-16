// ============================================================
// PÁGINA INICIAL — monta hero em destaque, grade de análises,
// cards de categoria e menu, a partir de PRODUTOS (dados.js)
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

function textoVeredito(nota) {
  if (nota >= 8.5) return "Recomendado";
  if (nota >= 7.0) return "Vale a pena";
  if (nota >= 5.5) return "Depende";
  return "Evite";
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
      <div class="card-capa">${capaHTML(produto)}</div>
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

// Carrossel de análises em destaque no hero (roda sozinho)
function montarDestaque(lista) {
  const el = document.getElementById("hero-destaque");
  if (!el) return;
  const rot = lista.slice(0, 8); // as 8 análises mais recentes
  if (!rot.length) { el.style.display = "none"; return; }

  let i = 0;
  const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function cartao(p) {
    const nota = notaGeral(p);
    const classe = classeNota(nota);
    return `
      <a class="hd-link" href="produto.html?id=${p.id}">
        <div class="hd-pedestal">
          <div class="hd-chip ${classe}">
            <div class="n">${nota.toFixed(1)}<small>/10</small></div>
            <div class="v">${textoVeredito(nota)}</div>
          </div>
          ${capaHTML(p)}
        </div>
        <div class="hd-legenda">
          <span class="rot">Análise em destaque</span>
          <span class="nome">${p.nome}</span>
        </div>
      </a>`;
  }

  el.innerHTML =
    `<div class="hd-wrap"></div>` +
    `<div class="hd-dots">` +
    rot.map((_, idx) =>
      `<button class="hd-dot" data-i="${idx}" aria-label="Ver destaque ${idx + 1}"></button>`
    ).join("") +
    `</div>`;

  const wrap = el.querySelector(".hd-wrap");
  const dots = [...el.querySelectorAll(".hd-dot")];

  function render() {
    wrap.innerHTML = cartao(rot[i]);
    dots.forEach((d) => d.classList.toggle("ativo", +d.dataset.i === i));
  }

  function troca() {
    if (reduz) { render(); return; }
    wrap.classList.add("saindo");
    setTimeout(() => { render(); wrap.classList.remove("saindo"); }, 260);
  }

  let timer;
  function reagenda() {
    if (reduz) return;
    clearInterval(timer);
    timer = setInterval(() => { i = (i + 1) % rot.length; troca(); }, 4500);
  }

  dots.forEach((d) =>
    d.addEventListener("click", () => { i = +d.dataset.i; troca(); reagenda(); })
  );
  el.addEventListener("mouseenter", () => clearInterval(timer));
  el.addEventListener("mouseleave", reagenda);

  render();
  reagenda();
}

// Cards de categoria, com imagem representativa e contagem
function montarCategorias() {
  const el = document.getElementById("grade-categorias");
  if (!el) return;
  const categorias = [...new Set(PRODUTOS.map((p) => p.categoria))].sort();
  el.innerHTML = categorias
    .map((cat) => {
      const daCat = PRODUTOS.filter((p) => p.categoria === cat);
      const capa = capaHTML(daCat[0]);
      const qtd = daCat.length;
      return `
        <a class="categoria-card" href="index.html?categoria=${encodeURIComponent(cat)}">
          <div class="cc-img">${capa}</div>
          <div>
            <h3>${cat}</h3>
            <p>${qtd} ${qtd === 1 ? "análise" : "análises"}</p>
            <span class="cc-ver">Ver ${cat.toLowerCase()}
              <svg class="icone" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg></span>
          </div>
        </a>`;
    })
    .join("");
}

function montarMenu(filtroCategoria) {
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

// Esconde hero e blocos de vitrine quando a grade é o foco (busca/categoria)
function esconderVitrine() {
  ["hero", "secao-categorias", "secao-confianca"].forEach((cls) => {
    const alvo = document.querySelector("." + cls) || document.getElementById(cls);
    if (alvo) alvo.style.display = "none";
  });
}

function montarPagina() {
  const grade = document.getElementById("grade-produtos");
  const params = new URLSearchParams(location.search);
  const filtroCategoria = params.get("categoria");
  const termo = (params.get("busca") || "").trim();

  // Preenche o campo de busca com o termo atual
  const campo = document.getElementById("campo-busca");
  if (campo && termo) campo.value = termo;

  let lista = [...PRODUTOS].sort((a, b) => b.data.localeCompare(a.data));

  if (termo) {
    const t = termo.toLowerCase();
    lista = lista.filter((p) =>
      `${p.nome} ${p.categoria} ${p.selo} ${p.resumo}`.toLowerCase().includes(t)
    );
    document.getElementById("titulo-secao").textContent = `Resultados para "${termo}"`;
    document.getElementById("subtitulo-secao").textContent =
      `${lista.length} ${lista.length === 1 ? "análise encontrada" : "análises encontradas"}.`;
    esconderVitrine();
  } else if (filtroCategoria) {
    lista = lista.filter((p) => p.categoria === filtroCategoria);
    document.getElementById("titulo-secao").textContent = filtroCategoria;
    document.getElementById("subtitulo-secao").textContent =
      `Todas as nossas análises de ${filtroCategoria.toLowerCase()}.`;
    esconderVitrine();
  } else {
    montarDestaque(lista);
    montarCategorias();
  }

  grade.innerHTML = lista.length
    ? lista.map(criarCard).join("")
    : `<p>Nenhuma análise encontrada${termo ? ` para "${termo}"` : ""}. <a href="index.html">Ver todas</a>.</p>`;

  montarMenu(filtroCategoria);
}

montarPagina();
