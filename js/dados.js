// ============================================================
// BANCO DE DADOS DO SITE
// Para adicionar uma nova análise, copie um bloco { ... } e
// preencha os campos. O site gera as páginas automaticamente.
// ============================================================

const PRODUTOS = [
  {
    id: "logitech-g305",
    nome: "Logitech G305 Lightspeed",
    categoria: "Mouses",
    selo: "Melhor custo-benefício",
    icone: "🖱️",
    imagem: "img/logitech-g305.svg",
    cor: "#4f7cff",
    data: "2026-07-10",
    resumo:
      "Mouse sem fio leve com sensor HERO e ótima bateria. É a porta de entrada ideal para quem quer jogar sem fio gastando pouco.",
    notas: {
      "Jogos": 8.5,
      "Trabalho": 7.5,
      "Construção": 7.0,
      "Custo-benefício": 9.0
    },
    pros: [
      "Sensor HERO preciso, sem atrasos perceptíveis",
      "Bateria dura meses com uma pilha AA",
      "Leve (99 g) e formato confortável para mãos médias"
    ],
    contras: [
      "Sem bateria recarregável embutida",
      "Não tem Bluetooth, só o receptor USB",
      "Plástico do corpo parece simples"
    ],
    specs: {
      "Sensor": "HERO 12K",
      "DPI máximo": "12.000",
      "Peso": "99 g",
      "Conexão": "Wireless Lightspeed (USB)",
      "Bateria": "1x pilha AA (até 250 h)"
    },
    analise: [
      "O Logitech G305 é um dos mouses sem fio mais recomendados da faixa de entrada, e depois de semanas de uso fica fácil entender o porquê. O sensor HERO entrega precisão consistente em jogos competitivos, e a conexão Lightspeed não apresentou nenhuma falha ou atraso perceptível nos testes.",
      "O ponto forte é a bateria: com uma única pilha AA, a Logitech promete até 250 horas de uso contínuo — na prática, meses de uso normal. O peso de 99 g agrada, embora parte dele venha da pilha.",
      "Para trabalho, ele cumpre bem o papel, mas sente falta de botões extras e de conexão Bluetooth para alternar entre dispositivos. Se o seu foco é produtividade, vale olhar outras opções. Para jogos com orçamento limitado, é compra certa."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=logitech+g305",
      mercadolivre: "https://lista.mercadolivre.com.br/logitech-g305",
      magalu: "https://www.magazineluiza.com.br/busca/logitech+g305/"
    }
  },
  {
    id: "aoc-q27g3xmn",
    nome: "AOC Q27G3XMN",
    categoria: "Monitores",
    selo: "Melhor monitor até R$ 2.000",
    icone: "🖥️",
    imagem: "img/aoc-q27g3xmn.svg",
    cor: "#9b59ff",
    data: "2026-07-08",
    resumo:
      "Monitor 27\" QHD 180 Hz com Mini LED. Brilho alto e HDR de verdade em uma faixa de preço onde isso era impensável.",
    notas: {
      "Jogos": 8.5,
      "Trabalho": 8.0,
      "HDR": 8.0,
      "Custo-benefício": 9.0
    },
    pros: [
      "Mini LED com brilho altíssimo para o preço",
      "180 Hz com tempo de resposta rápido",
      "Cores vivas e HDR utilizável de verdade"
    ],
    contras: [
      "Sem ajuste de altura em algumas versões",
      "Blooming visível em cenas escuras",
      "Sem USB-C"
    ],
    specs: {
      "Tela": "27\" VA Mini LED",
      "Resolução": "2560 x 1440 (QHD)",
      "Taxa de atualização": "180 Hz",
      "Brilho (pico HDR)": "~1000 nits",
      "Conexões": "2x HDMI 2.0, 1x DisplayPort 1.4"
    },
    analise: [
      "O AOC Q27G3XMN ficou famoso mundialmente por entregar Mini LED — tecnologia de iluminação por zonas que melhora muito o contraste — em um preço de monitor comum. No Brasil ele chega um pouco mais caro, mas ainda assim briga de igual para igual com modelos bem mais custosos.",
      "Nos jogos, os 180 Hz combinados com o painel VA rápido garantem movimento fluido. O destaque real é o HDR: com quase 1000 nits de pico, explosões e cenas claras têm impacto que monitores comuns simplesmente não conseguem reproduzir.",
      "Os pontos fracos são o blooming (halos de luz ao redor de objetos claros em fundo escuro) e a ergonomia básica. Para quem busca imagem acima de tudo nessa faixa de preço, é a recomendação mais fácil do momento."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=aoc+q27g3xmn",
      mercadolivre: "https://lista.mercadolivre.com.br/aoc-q27g3xmn",
      magalu: "https://www.magazineluiza.com.br/busca/aoc+q27g3xmn/"
    }
  },
  {
    id: "havit-h2002d",
    nome: "Havit H2002d",
    categoria: "Headsets",
    selo: "Melhor headset barato",
    icone: "🎧",
    imagem: "img/havit-h2002d.svg",
    cor: "#2ecc8f",
    data: "2026-07-05",
    resumo:
      "Headset gamer de entrada com som surpreendente, microfone destacável e construção confortável. Difícil pedir mais pelo preço.",
    notas: {
      "Jogos": 7.5,
      "Música": 7.0,
      "Microfone": 6.5,
      "Custo-benefício": 9.5
    },
    pros: [
      "Som equilibrado, raro em headsets baratos",
      "Confortável mesmo em sessões longas",
      "Microfone destacável e conector P2/P3 universal"
    ],
    contras: [
      "Microfone apenas razoável para chamadas",
      "Sem software ou som surround",
      "Cabo não destacável"
    ],
    specs: {
      "Drivers": "53 mm",
      "Conexão": "P2 (3,5 mm) com adaptador",
      "Peso": "~275 g",
      "Microfone": "Destacável",
      "Compatibilidade": "PC, PS5, Xbox, celular"
    },
    analise: [
      "O Havit H2002d é o exemplo de que headset de entrada não precisa soar como lata. A assinatura sonora é equilibrada, com graves presentes sem engolir as vozes — algo raro na categoria, onde o comum é grave estourado para impressionar.",
      "O conforto também surpreende: as almofadas são macias e o arco distribui bem o peso. Em sessões longas de jogo ele não esquenta nem aperta como concorrentes diretos.",
      "O microfone destacável é utilizável para jogar em grupo, mas não espere qualidade para gravações ou reuniões importantes. Pelo preço em promoção, é praticamente imbatível como primeiro headset."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=havit+h2002d",
      mercadolivre: "https://lista.mercadolivre.com.br/havit-h2002d",
      magalu: "https://www.magazineluiza.com.br/busca/havit+h2002d/"
    }
  },
  {
    id: "redragon-kumara-k552",
    nome: "Redragon Kumara K552",
    categoria: "Teclados",
    selo: "Clássico de entrada",
    icone: "⌨️",
    imagem: "img/redragon-kumara-k552.svg",
    cor: "#ff6b4a",
    data: "2026-07-01",
    resumo:
      "O teclado mecânico que virou padrão de entrada no Brasil: compacto, resistente e com switches que aguentam anos de uso.",
    notas: {
      "Jogos": 8.0,
      "Digitação": 7.5,
      "Construção": 8.5,
      "Custo-benefício": 9.0
    },
    pros: [
      "Construção com placa de metal, muito resistente",
      "Switches mecânicos de verdade pelo preço de membrana",
      "Formato TKL compacto libera espaço na mesa"
    ],
    contras: [
      "Switches Outemu são barulhentos (versão blue)",
      "Sem software de personalização avançado",
      "Cabo fixo e sem apoio de pulso"
    ],
    specs: {
      "Formato": "TKL (sem teclado numérico)",
      "Switches": "Outemu Blue ou Red",
      "Iluminação": "RGB / Rainbow (conforme versão)",
      "Estrutura": "Placa de metal",
      "Conexão": "USB com fio"
    },
    analise: [
      "Praticamente todo mundo que entrou no mundo dos teclados mecânicos no Brasil passou por um Kumara. E ele segue relevante: estrutura com placa de metal que não flexiona, switches mecânicos genuínos e formato compacto que sobra espaço para o mouse.",
      "Nos jogos, a resposta dos switches é imediata e o teclado aguenta sessões intensas sem registrar toques fantasmas. Na digitação, a versão com switch blue é gostosa, mas barulhenta — evite se você divide o ambiente ou faz chamadas.",
      "Não há software sofisticado nem troca de switches a quente, recursos que hoje aparecem em modelos um pouco mais caros. Mas como primeiro mecânico, continua sendo a recomendação segura."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=redragon+kumara+k552",
      mercadolivre: "https://lista.mercadolivre.com.br/redragon-kumara",
      magalu: "https://www.magazineluiza.com.br/busca/redragon+kumara/"
    }
  }
];
