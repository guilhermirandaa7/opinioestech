# Guia de edição — Opiniões Tech

Este guia é para **você editar o site sozinho**, no seu PC, com o VS Code.
Está tudo já instalado (VS Code, Git e Python). Não precisa instalar mais nada.

- 📁 Pasta do site no PC: `D:\OPINIÃOTECH`
- 🌐 Site no ar: https://guilhermirandaa7.github.io/opinioestech/
- 💾 Código no GitHub: https://github.com/guilhermirandaa7/opinioestech

> **Regra número 1:** só o que você **publicar** (passo 4) aparece no site.
> Editar no PC não muda o site no ar até você enviar. Isso é bom: dá pra
> testar à vontade sem medo.

---

## Passo 1 — Abrir o projeto no VS Code

1. Abra o **VS Code**.
2. Menu **Arquivo → Abrir Pasta...** e escolha `D:\OPINIÃOTECH`.
3. Do lado esquerdo aparecem todos os arquivos do site.

Atalho: dá pra abrir direto pelo terminal com `code D:\OPINIÃOTECH`.

---

## Passo 2 — Ver o site no seu PC antes de publicar

Assim você confere as mudanças **antes** de mandar pro ar.

**Jeito rápido:** abra a pasta `D:\OPINIÃOTECH` no Windows e dê **duplo clique** em
`index.html`. Ele abre no navegador. Depois de editar, é só apertar **F5** para recarregar.

**Jeito recomendado (atualiza sozinho):** instale a extensão **Live Server** no VS Code:
1. Ícone de extensões na barra esquerda (ou `Ctrl+Shift+X`).
2. Procure por **Live Server** e clique em **Install**.
3. Com o `index.html` aberto, clique em **Go Live** (canto inferior direito).
4. O site abre no navegador e recarrega sozinho toda vez que você salva.

---

## Passo 3 — O que editar (e onde)

### 🟢 Fácil e seguro: as análises (textos, notas, prós, contras, links)

Quase todo o **conteúdo** está em **um único arquivo**: `js/dados.js`.
Cada produto é um bloco assim (edite só o que está **entre aspas** ou os **números**):

```javascript
{
  id: "logitech-g305",                       // apelido único (sem espaços/acentos)
  nome: "Logitech G305 Lightspeed",          // ← nome que aparece
  categoria: "Mouses",                       // agrupa e cria o menu
  selo: "Melhor custo-benefício",            // etiqueta laranja
  imagem: "img/logitech-g305.svg",           // caminho da foto (ver abaixo)
  data: "2026-07-10",                        // AAAA-MM-DD (ordena as mais novas primeiro)
  resumo: "Mouse sem fio leve...",           // frase do card
  notas: {
    "Jogos": 8.5,                            // ← mude os números (0 a 10)
    "Custo-benefício": 9.0
  },
  pros: [
    "Sensor preciso",                        // cada item entre aspas, separado por vírgula
    "Bateria dura meses"
  ],
  contras: [
    "Sem Bluetooth"
  ],
  specs: {
    "Sensor": "HERO 12K",                    // "nome": "valor"
    "Peso": "99 g"
  },
  analise: [
    "Primeiro parágrafo da análise...",      // cada parágrafo entre aspas
    "Segundo parágrafo..."
  ],
  links: {
    amazon: "https://www.amazon.com.br/s?k=logitech+g305",
    mercadolivre: "https://lista.mercadolivre.com.br/logitech-g305",
    magalu: "https://www.magazineluiza.com.br/busca/logitech+g305/"
  }
},
```

**Trocar um texto ou uma nota:** ache o produto, mude o que está entre aspas (ou o número) e salve.

**Adicionar uma análise nova:**
1. Selecione um bloco `{ ... },` inteiro (da chave `{` até a vírgula depois de `}`).
2. Copie (`Ctrl+C`) e cole (`Ctrl+V`) logo abaixo.
3. Troque os dados. **Importante:** dê um `id` diferente e único.
4. Salve. O site cria a página e o card sozinho.

**Nota geral:** você não digita — o site calcula a média das notas por categoria.

### 🟢 Imagens

1. Coloque o arquivo de imagem (PNG, JPG ou SVG) na pasta `img/`.
2. No `dados.js`, aponte o caminho:
   ```javascript
   imagem: "img/nome-da-sua-foto.png",
   ```
   Dica: use nomes **sem espaços e sem acentos** (ex.: `mouse-x.png`, não `Mouse Ção.png`).

### 🟡 Com cuidado: textos fixos das páginas

Título do hero, rodapé, etc. estão nos arquivos `.html`
(`index.html`, `produto.html`, `forum.html`). Você pode editar, mas mexa **só no
texto visível** entre as tags. Exemplo, em `index.html`:

```html
<h1>Compre certo, <em>sem erro</em>.</h1>
```
Troque `Compre certo` e `sem erro` pelo que quiser, sem apagar os `<h1>`, `<em>` etc.

### 🔴 Delicado: cores, espaçamento e posição

Tudo isso vive em `css/estilo.css`. Dá pra mudar, mas é o mais fácil de bagunçar
sem querer (um `{` ou `;` fora do lugar desalinha a página). As cores principais
ficam logo no topo do arquivo, em `:root`, com nomes em português:

```css
--amber: #f5820d;    /* cor de destaque da marca */
--bg:    #f4f5fa;    /* fundo da página */
```
Se for mexer em layout/posição, **faça backup antes** ou me chame — é onde mais
compensa pedir ajuda.

---

## Passo 4 — Publicar (colocar no ar)

Pelo VS Code, tudo por clique:

1. Abra o painel **Controle do Código-Fonte** (ícone de ramificação na barra esquerda, ou `Ctrl+Shift+G`).
2. Ele lista os arquivos que você mudou.
3. Escreva uma mensagem curta na caixa de cima (ex.: *"nova análise do teclado X"*).
4. Clique em **✓ Confirmar** (Commit). Se perguntar se quer confirmar todas as mudanças, aceite.
5. Clique em **Sincronizar alterações** (Sync / Push) para enviar ao GitHub.
6. Pronto! Em **1 a 2 minutos** o site no ar atualiza sozinho.
   (Se você ainda ver a versão antiga no navegador, aperte **Ctrl+F5**.)

> Alternativa por comando (se preferir o terminal do VS Code, `Ctrl+'`):
> ```bash
> git add -A
> git commit -m "descrição da mudança"
> git push
> ```

---

## Se algo der errado — como voltar atrás

O Git guarda o histórico, então **nada se perde de verdade**.

- **Desfazer o que você mudou mas ainda NÃO publicou:** no painel Controle do
  Código-Fonte, passe o mouse no arquivo e clique no ícone **↩ Descartar alterações**.
  Ele volta pra última versão publicada.
- **Desfazer digitação enquanto edita:** `Ctrl+Z` normal.
- **Voltar o site inteiro para uma versão anterior já publicada:** isso é mais
  técnico — me chame que eu reverto em segundos.

---

## Regras de ouro (para não quebrar o site)

1. Em `dados.js`, altere só **texto entre aspas** e **números**.
2. **Não apague** vírgulas `,`, chaves `{ }` nem colchetes `[ ]`.
3. Todo texto fica **entre aspas duplas** `"assim"`. Se o seu texto tiver aspas
   dentro, use `\"` (ex.: `"tela de 27\" polegadas"`).
4. **Salve** (`Ctrl+S`) e **veja no navegador** (Passo 2) antes de publicar.
5. Se o VS Code sublinhar algo em vermelho, provavelmente faltou uma vírgula ou aspas.

---

## Mapa rápido dos arquivos

| Quero mudar... | Arquivo |
|---|---|
| Análises: textos, notas, prós/contras, specs, links | `js/dados.js` |
| Imagens dos produtos / logo | pasta `img/` |
| Título do hero, rodapé, textos fixos | `index.html`, `produto.html`, `forum.html` |
| Cores, espaçamento, layout | `css/estilo.css` |
| Discussões de exemplo do fórum | `js/forum.js` |

Qualquer dúvida ou mudança maior, é só me chamar. 🚀
