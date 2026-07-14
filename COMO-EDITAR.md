# Como editar o Opiniões Tech

## Estrutura do site

```
analises-tech/
├── index.html        → página inicial (lista de análises)
├── produto.html      → modelo da página de análise (uma só para todos os produtos)
├── forum.html        → fórum de discussões por categoria
├── css/estilo.css    → todo o visual do site (cores, fontes, espaçamentos)
├── img/              → ilustrações/fotos dos produtos
└── js/
    ├── dados.js      → ⭐ AS ANÁLISES FICAM AQUI (é o arquivo que você mais vai editar)
    ├── app.js        → monta a página inicial a partir de dados.js
    ├── produto.js    → monta a página do produto a partir de dados.js
    └── forum.js      → lógica do fórum (categorias, discussões, respostas)

As cores do site ficam no topo de `css/estilo.css` (bloco `:root`).
Para mudar o vermelho da marca, altere `--marca`.

## Sobre o fórum

O fórum funciona em modo demonstração: as mensagens são salvas no navegador
de cada visitante (localStorage), então cada pessoa vê só o que ela mesma
escreveu, além das discussões de exemplo (que ficam em `js/forum.js`).
Para um fórum real — onde todos veem as mensagens de todos — é preciso um
serviço externo. Opções gratuitas quando o site for publicado:

- **Giscus** (https://giscus.app): usa as Discussions de um repositório GitHub
- **Utterances**: parecido, baseado em issues do GitHub
- Futuramente: um backend próprio (bom projeto para aprender programação)
```

## Como adicionar uma nova análise

1. Abra `js/dados.js`
2. Copie um bloco inteiro de produto — de `{` até `},`
3. Cole antes do `];` do final
4. Preencha os campos:
   - `id`: identificador único, sem espaços nem acentos (ex.: `"mouse-razer-viper"`) — vira o endereço da página
   - `imagem`: caminho de uma imagem na pasta `img/` (SVG, PNG ou JPG). Se deixar de fora, o site usa o emoji do campo `icone`
   - `notas`: pode criar as categorias de nota que quiser (ex.: `"Bateria": 8.0`)
   - `links`: cole aqui seus links de afiliado quando tiver as contas aprovadas
5. Salve e recarregue o navegador — a análise aparece sozinha na página inicial, e a categoria entra no menu automaticamente

## Como ver o site

Abra o PowerShell na pasta do site e rode:

```
python -m http.server 8750 --directory C:/Users/Guilherme/analises-tech
```

Depois acesse `http://localhost:8750` no navegador.

## Sobre os links de afiliado

Os links atuais são só buscas nas lojas (não geram comissão). Para monetizar:

1. **Amazon Associados**: cadastre-se em https://associados.amazon.com.br — depois de aprovado, gere links com sua tag (ex.: `?tag=seusite-20`) e substitua no campo `links.amazon`
2. **Mercado Livre**: programa de afiliados em https://www.mercadolivre.com.br/afiliados
3. **Magalu**: parceiro Magalu em https://www.parceiromagalu.com.br

O atributo `rel="sponsored"` nos botões já está configurado (boa prática exigida pelo Google para links de afiliado).

## Próximos passos possíveis

- Publicar de graça no GitHub Pages, Netlify ou Cloudflare Pages
- Trocar os emojis por fotos reais dos produtos (crie uma pasta `img/` e use `<img>`)
- Registrar um domínio próprio (ex.: opinioestech.com.br)
