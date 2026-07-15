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
    imagem: "https://a-static.mlcdn.com.br/280x210/mouse-gamer-sem-fio-logitech-g305-lightspeed-12000-dpi-6-botoes-preto-910-005281/kabum/97092/a4d79fb68387a5d8251755e2c45bda89.jpg",
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
      amazon: "https://www.amazon.com.br/s?k=logitech+g305&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/logitech-g305",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/logitech+g305/"
    }
  },
  {
    id: "aoc-q27g3xmn",
    nome: "AOC Q27G3XMN",
    categoria: "Monitores",
    selo: "Melhor monitor até R$ 2.000",
    icone: "🖥️",
    imagem: "https://a-static.mlcdn.com.br/280x210/monitor-de-jogos-aoc-q27g3xmn-27-mini-led-2k-qhd-180hz-1ms/nocnocestadosunidos/buybox-cpb0c8zjkpwc/de8030b0e32a48fe9c14dbfb75c4b4a3.jpeg",
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
      amazon: "https://www.amazon.com.br/s?k=aoc+q27g3xmn&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/aoc-q27g3xmn",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/aoc+q27g3xmn/"
    }
  },
  {
    id: "havit-h2002d",
    nome: "Havit H2002d",
    categoria: "Headsets",
    selo: "Melhor headset barato",
    icone: "🎧",
    imagem: "https://a-static.mlcdn.com.br/280x210/headset-gamer-havit-drivers-53mm-microfone-plugavel-3-5mm-pc-ps4-xbox-one-preto-hv-h2002d/kabum/102770/be93e7ed81e88240e26c4ec35a651bb2.jpeg",
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
      amazon: "https://www.amazon.com.br/s?k=havit+h2002d&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/havit-h2002d",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/havit+h2002d/"
    }
  },
  {
    id: "redragon-kumara-k552",
    nome: "Redragon Kumara K552",
    categoria: "Teclados",
    selo: "Clássico de entrada",
    icone: "⌨️",
    imagem: "https://a-static.mlcdn.com.br/280x210/teclado-mecanico-gamer-redragon-kumara-anti-ghosting-led-vermelho-switch-red-abnt2-preto-k552-2-pt-red/kabum/93162/d8c7cfcf926037f90024d90462614148.jpeg",
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
      amazon: "https://www.amazon.com.br/s?k=redragon+kumara+k552&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/redragon-kumara",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/redragon+kumara/"
    }
  },

  // ===================== MOUSES =====================
  {
    id: "razer-deathadder-essential",
    imagem: "https://a-static.mlcdn.com.br/280x210/mouse-gamer-razer-deathadder-essential-com-fio-6400-dpi-branco-rz01-03850200-r3m1/kabum/921180/05e4ee24e535edd85ca744d76f3a3259.jpeg",
    nome: "Razer DeathAdder Essential",
    categoria: "Mouses",
    selo: "Ergonomia clássica",
    icone: "🖱️",
    cor: "#4f7cff",
    data: "2026-06-28",
    resumo: "O formato ergonômico mais copiado do mercado, com sensor óptico confiável e preço camarada. Um cabo de guerra entre conforto e simplicidade.",
    notas: { "Jogos": 8.0, "Trabalho": 7.5, "Construção": 7.5, "Custo-benefício": 8.5 },
    pros: [
      "Formato ergonômico excelente para mãos grandes",
      "Sensor óptico preciso para o dia a dia e jogos",
      "Preço acessível e ampla disponibilidade"
    ],
    contras: [
      "Com fio, sem versão sem fio nesta linha",
      "Iluminação limitada a uma cor de zona",
      "Um pouco pesado para padrões atuais de FPS"
    ],
    specs: {
      "Sensor": "Óptico 6.400 DPI",
      "Botões": "5 programáveis",
      "Peso": "96 g",
      "Conexão": "USB com fio",
      "Iluminação": "RGB de zona única"
    },
    analise: [
      "O DeathAdder Essential é a porta de entrada da Razer e entrega o que promete: um formato ergonômico consagrado que se encaixa naturalmente em mãos médias e grandes. Nos jogos, o sensor óptico não decepciona na faixa de preço, com rastreio consistente.",
      "As limitações são coerentes com o valor: cabo fixo, iluminação simples e peso acima do que atletas de FPS procuram. Para quem quer um primeiro mouse confortável e durável, é uma escolha segura."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=razer+deathadder+essential&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/razer-deathadder-essential",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/razer+deathadder+essential/"
    }
  },
  {
    id: "logitech-gpro-x-superlight",
    imagem: "https://a-static.mlcdn.com.br/280x210/mouse-gamer-sem-fio-logitech-g-pro-x-superlight-2-com-lightspeed-32000-dpi-sensor-hero-2-com-bateria-recarregavel-preto-910-006629/kabum/495544/54213b97bd5cd7a947f65887f2244289.jpeg",
    nome: "Logitech G Pro X Superlight",
    categoria: "Mouses",
    selo: "Escolha dos profissionais",
    icone: "🖱️",
    cor: "#4f7cff",
    data: "2026-06-20",
    resumo: "O mouse sem fio de referência para FPS competitivo: ultraleve, sensor de ponta e latência imperceptível. Caro, mas é o topo.",
    notas: { "Jogos": 9.5, "Trabalho": 7.5, "Construção": 8.5, "Custo-benefício": 7.0 },
    pros: [
      "Apenas 63 g com construção sólida",
      "Sensor HERO 25K extremamente preciso",
      "Conexão Lightspeed sem latência perceptível"
    ],
    contras: [
      "Preço elevado",
      "Poucos botões (foco em competitivo)",
      "Sem RGB (proposital, para poupar peso)"
    ],
    specs: {
      "Sensor": "HERO 25K",
      "DPI máximo": "25.600",
      "Peso": "63 g",
      "Conexão": "Lightspeed (USB)",
      "Bateria": "Até 70 h"
    },
    analise: [
      "O G Pro X Superlight é onipresente em torneios de FPS por bons motivos: é levíssimo, tem um sensor impecável e uma conexão sem fio que, na prática, se comporta como cabeada. O formato simétrico agrada a maioria das pegadas.",
      "O que pesa é o preço e a ausência de recursos supérfluos — não espere muitos botões nem iluminação. É um instrumento focado em desempenho, e nesse quesito não há praticamente do que reclamar."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=logitech+g+pro+x+superlight&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/logitech-g-pro-x-superlight",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/logitech+g+pro+x+superlight/"
    }
  },
  {
    id: "redragon-cobra-m711",
    imagem: "https://a-static.mlcdn.com.br/280x210/kit-gamer-redragon-teclado-mecanico-kumara-rgb-switch-outemu-blue-pt-mouse-cobra-m711-chroma-10000dpi-s118/kabum/120674/41abf9f96499ede5cfa233fcef374054.jpeg",
    nome: "Redragon Cobra M711",
    categoria: "Mouses",
    selo: "Barato que funciona",
    icone: "🖱️",
    cor: "#4f7cff",
    data: "2026-06-12",
    resumo: "Um dos mouses com fio mais vendidos do Brasil: RGB chamativo, sensor decente e preço de entrada. Cumpre o básico com folga.",
    notas: { "Jogos": 7.5, "Trabalho": 7.0, "Construção": 7.0, "Custo-benefício": 9.0 },
    pros: [
      "Sensor Pixart preciso para o preço",
      "RGB vistoso e 7 botões programáveis",
      "Software simples de configurar"
    ],
    contras: [
      "Cabo de borracha que enrola",
      "Plástico simples, sem sofisticação",
      "Peso mediano, sem opção de ajuste"
    ],
    specs: {
      "Sensor": "Pixart 10.000 DPI",
      "Botões": "7 programáveis",
      "Peso": "~105 g",
      "Conexão": "USB com fio",
      "Iluminação": "RGB"
    },
    analise: [
      "O Cobra M711 é um clássico de entrada: entrega sensor competente, botões de sobra e RGB por um preço que cabe em qualquer orçamento. Para quem está montando o primeiro setup, é difícil errar.",
      "Os cortes aparecem no acabamento — plástico simples e cabo que enrola — mas nada que comprometa o uso diário. É a definição de custo-benefício na categoria de entrada."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=redragon+cobra+m711&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/redragon-cobra-m711",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/redragon+cobra+m711/"
    }
  },
  {
    id: "razer-viper-mini",
    imagem: "https://a-static.mlcdn.com.br/280x210/mouse-gamer-razer-viper-mini-signature-edition-branco-30000dpi-49g-8khz/victoryimports/0000000000158/90da55b14776dd07bb1271d6fd33df74.jpeg",
    nome: "Razer Viper Mini",
    categoria: "Mouses",
    selo: "Leve para mãos pequenas",
    icone: "🖱️",
    cor: "#4f7cff",
    data: "2026-06-05",
    resumo: "Compacto e leve, ideal para mãos menores e pegada em garra. Cabo Speedflex maleável e ótimo custo para FPS de entrada.",
    notas: { "Jogos": 8.5, "Trabalho": 7.0, "Construção": 8.0, "Custo-benefício": 8.5 },
    pros: [
      "Apenas 61 g, muito ágil",
      "Cabo Speedflex leve e flexível",
      "Ótimo para mãos pequenas e pegada claw"
    ],
    contras: [
      "Pequeno demais para mãos grandes",
      "Com fio",
      "Switches podem apresentar clique duplo com o tempo"
    ],
    specs: {
      "Sensor": "Óptico 8.500 DPI",
      "Botões": "6 programáveis",
      "Peso": "61 g",
      "Conexão": "USB Speedflex",
      "Iluminação": "RGB"
    },
    analise: [
      "O Viper Mini resolve um problema real: mouses bons costumam ser grandes demais para mãos pequenas. Com 61 g e cabo leve, ele desliza com facilidade e favorece movimentos rápidos no FPS.",
      "O tamanho reduzido é faca de dois gumes — quem tem mãos grandes vai achar apertado. E, como em vários modelos da faixa, vale ficar de olho na durabilidade dos switches a longo prazo."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=razer+viper+mini&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/razer-viper-mini",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/razer+viper+mini/"
    }
  },
  {
    id: "logitech-g203-lightsync",
    imagem: "https://a-static.mlcdn.com.br/280x210/mouse-gamer-logitech-g203-lightsync-rgb-efeito-de-ondas-de-cores-6-botoes-programaveis-e-ate-8-000-dpi-preto-910-005793/kabum/112948/baee18890b2c3b5913146059d77f0c0c.jpg",
    nome: "Logitech G203 Lightsync",
    categoria: "Mouses",
    selo: "Simples e confiável",
    icone: "🖱️",
    cor: "#4f7cff",
    data: "2026-05-28",
    resumo: "Formato clássico, construção sólida e a confiabilidade da Logitech por um preço acessível. Um coringa para jogos e trabalho.",
    notas: { "Jogos": 8.0, "Trabalho": 7.5, "Construção": 8.0, "Custo-benefício": 8.5 },
    pros: [
      "Construção sólida e acabamento acima da faixa",
      "Software G HUB completo",
      "Formato confortável para a maioria"
    ],
    contras: [
      "Sensor bom, mas não de topo",
      "Um pouco pesado (85 g)",
      "Cabo de borracha comum"
    ],
    specs: {
      "Sensor": "Gaming 8.000 DPI",
      "Botões": "6 programáveis",
      "Peso": "85 g",
      "Conexão": "USB com fio",
      "Iluminação": "RGB Lightsync"
    },
    analise: [
      "O G203 é o tipo de mouse que simplesmente funciona: bem construído, confortável e com o suporte de software da Logitech. Para jogos casuais e produtividade, atende com sobra.",
      "Não é o mais leve nem tem o sensor mais avançado, mas a consistência e o acabamento compensam. É uma recomendação segura para quem quer durabilidade sem gastar muito."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=logitech+g203&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/logitech-g203",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/logitech+g203/"
    }
  },
  {
    id: "glorious-model-o",
    imagem: "https://a-static.mlcdn.com.br/280x210/mouse-gamer-glorious-model-o-rgb-wireless-branco/bestgames/2412/9897b891d8281200f76ed7b6ed921a12.jpeg",
    nome: "Glorious Model O",
    categoria: "Mouses",
    selo: "Leve com estilo",
    icone: "🖱️",
    cor: "#4f7cff",
    data: "2026-05-20",
    resumo: "O mouse 'colmeia' que popularizou o design perfurado ultraleve. Deslize excelente com os pés de PTFE e RGB bonito.",
    notas: { "Jogos": 8.5, "Trabalho": 7.0, "Construção": 7.5, "Custo-benefício": 8.0 },
    pros: [
      "Muito leve (~67 g) mesmo com fio",
      "Cabo Ascended leve, quase sem atrito",
      "Pés de PTFE deslizam muito bem"
    ],
    contras: [
      "Design perfurado acumula poeira",
      "Alguns podem estranhar os furos no corpo",
      "Sem versão sem fio nesta variante"
    ],
    specs: {
      "Sensor": "Pixart 3360, 12.000 DPI",
      "Botões": "6 programáveis",
      "Peso": "~67 g",
      "Conexão": "USB Ascended",
      "Iluminação": "RGB"
    },
    analise: [
      "O Model O trouxe o conceito de corpo perfurado para o mainstream, e o resultado é um mouse leve e ágil, com um cabo tão flexível que quase some. Os pés de PTFE dão um deslize premium.",
      "Os furos incomodam quem tem receio de sujeira e nem todo mundo curte a estética. Fora isso, é um dos melhores leves com fio da faixa intermediária."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=glorious+model+o&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/glorious-model-o",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/glorious+model+o/"
    }
  },
  {
    id: "logitech-mx-master-3s",
    imagem: "https://a-static.mlcdn.com.br/280x210/mouse-logitech-mx-master-3s-bluetooth-edition-conexao-por-bluetooth-rolagem-ultra-rapida-8k-dpi-clique-silencioso-grafite-910-007502/kabum/989639/ad55119c798577cebafa6df66265bb28.jpeg",
    nome: "Logitech MX Master 3S",
    categoria: "Mouses",
    selo: "Rei da produtividade",
    icone: "🖱️",
    cor: "#4f7cff",
    data: "2026-05-12",
    resumo: "Não é para jogos: é o melhor mouse de trabalho do mercado. Scroll magnético, ergonomia impecável e cliques silenciosos.",
    notas: { "Jogos": 5.5, "Trabalho": 9.5, "Construção": 9.0, "Custo-benefício": 7.5 },
    pros: [
      "Ergonomia excelente para longas jornadas",
      "Scroll MagSpeed magnético fantástico",
      "Multidispositivo e cliques silenciosos"
    ],
    contras: [
      "Pesado e assimétrico, ruim para FPS",
      "Preço alto",
      "Só para destros"
    ],
    specs: {
      "Sensor": "Darkfield 8.000 DPI",
      "Botões": "7 + roda horizontal",
      "Peso": "141 g",
      "Conexão": "Bluetooth / receptor USB",
      "Bateria": "Até 70 dias"
    },
    analise: [
      "O MX Master 3S é o padrão-ouro para quem trabalha o dia inteiro no computador. A ergonomia, o scroll magnético que troca de modo sozinho e os cliques silenciosos elevam a experiência de produtividade.",
      "Para jogos, esqueça: é pesado e assimétrico. Mas se o seu foco é edição, escritório ou programação, poucos mouses chegam perto. Vale cada centavo para o público certo."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=logitech+mx+master+3s&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/logitech-mx-master-3s",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/logitech+mx+master+3s/"
    }
  },
  {
    id: "razer-basilisk-v3",
    imagem: "https://a-static.mlcdn.com.br/280x210/mouse-gamer-razer-basilisk-v3-rgb-ergonomico-26k-dpi-11-botoes-preto-rz0104000100r3m1/kabum/290829/e1a6ab23056a0f30434eb73b54a26b43.jpeg",
    nome: "Razer Basilisk V3",
    categoria: "Mouses",
    selo: "Cheio de recursos",
    icone: "🖱️",
    cor: "#4f7cff",
    data: "2026-05-04",
    resumo: "Mouse com fio recheado de botões e uma roda de scroll que alterna entre modo tátil e livre. Ótimo para MMO, MOBA e produtividade.",
    notas: { "Jogos": 8.5, "Trabalho": 8.5, "Construção": 8.5, "Custo-benefício": 8.0 },
    pros: [
      "Roda de scroll inteligente (tátil/livre)",
      "11 botões programáveis",
      "RGB com faixa inferior bonita"
    ],
    contras: [
      "Pesado para FPS puro (~101 g)",
      "Só para destros",
      "Excesso de botões pode intimidar"
    ],
    specs: {
      "Sensor": "Focus+ 26.000 DPI",
      "Botões": "11 programáveis",
      "Peso": "101 g",
      "Conexão": "USB Speedflex",
      "Iluminação": "RGB Chroma"
    },
    analise: [
      "O Basilisk V3 aposta na versatilidade: são 11 botões e uma roda de scroll que troca entre passos táteis e rolagem livre com um toque. Para MMO, MOBA e trabalho, é uma mão na roda.",
      "O peso e a assimetria o tiram da conversa para FPS competitivo, mas para quase todo o resto ele brilha — especialmente pelo preço, que costuma ser justo para tudo que oferece."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=razer+basilisk+v3&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/razer-basilisk-v3",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/razer+basilisk+v3/"
    }
  },
  {
    id: "hyperx-pulsefire-haste",
    imagem: "https://a-static.mlcdn.com.br/280x210/mouse-gamer-hyperx-pulsefire-haste-2-rgb-26000dpi-6-botoes-branco-6n0a8aa/kabum/519394/963feb4a80437f36a78f355377b09034.jpeg",
    nome: "HyperX Pulsefire Haste",
    categoria: "Mouses",
    selo: "Leve custo-benefício",
    icone: "🖱️",
    cor: "#4f7cff",
    data: "2026-04-26",
    resumo: "Leve, com corpo perfurado e cabo flexível, entregando desempenho de FPS por um preço agressivo. Concorrente direto dos ultraleves.",
    notas: { "Jogos": 8.5, "Trabalho": 7.0, "Construção": 7.5, "Custo-benefício": 8.5 },
    pros: [
      "Cerca de 59 g, muito ágil",
      "Cabo HyperFlex leve",
      "Pés de PTFE já de fábrica"
    ],
    contras: [
      "Corpo perfurado acumula sujeira",
      "Com fio",
      "Sem muitos botões extras"
    ],
    specs: {
      "Sensor": "Pixart 3335, 16.000 DPI",
      "Botões": "6 programáveis",
      "Peso": "59 g",
      "Conexão": "USB HyperFlex",
      "Iluminação": "RGB"
    },
    analise: [
      "O Pulsefire Haste entrega a fórmula ultraleve por um preço abaixo dos concorrentes: corpo perfurado, cabo maleável e pés de PTFE que já saem bons de fábrica. Para FPS, é uma delícia de manejar.",
      "Como todo mouse perfurado, exige limpeza de vez em quando, e é focado no essencial — sem firula de botões. Ainda assim, é um dos leves com melhor custo-benefício do mercado."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=hyperx+pulsefire+haste&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/hyperx-pulsefire-haste",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/hyperx+pulsefire+haste/"
    }
  },
  {
    id: "attack-shark-x3",
    imagem: "https://a-static.mlcdn.com.br/280x210/mouse-gamer-sem-fio-attack-shark-x3-x3pro-26000dpi-pixart-paw3395-24g-conexao-tri-mode-leve/aliexpress/206860894/e9ea857cc7875337f13b3b1288d9a79f.jpeg",
    nome: "Attack Shark X3",
    categoria: "Mouses",
    selo: "Surpresa sem fio barata",
    icone: "🖱️",
    cor: "#4f7cff",
    data: "2026-04-18",
    resumo: "Ultraleve tri-mode (cabo, 2.4G e Bluetooth) que virou queridinho por entregar recursos de topo por pouco dinheiro. Pesa a fama de irregular.",
    notas: { "Jogos": 8.0, "Trabalho": 7.0, "Construção": 6.5, "Custo-benefício": 9.0 },
    pros: [
      "Três modos de conexão por um preço baixo",
      "Muito leve, com boa bateria",
      "Sensor PAW3395 de alto nível para a faixa"
    ],
    contras: [
      "Controle de qualidade irregular",
      "Software menos polido",
      "Suporte pós-venda limitado no Brasil"
    ],
    specs: {
      "Sensor": "PAW3395, 26.000 DPI",
      "Botões": "6 programáveis",
      "Peso": "~59 g",
      "Conexão": "Cabo / 2.4G / Bluetooth",
      "Bateria": "Recarregável"
    },
    analise: [
      "O Attack Shark X3 viralizou por um motivo simples: coloca um sensor de ponta e três modos de conexão em um mouse leve e barato. Para quem quer o máximo de recurso pelo mínimo, impressiona.",
      "O preço baixo cobra seu preço em consistência: relatos de controle de qualidade irregular e suporte limitado pedem cautela. É uma aposta ótima quando dá certo — só entre com expectativa realista."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=attack+shark+x3&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/attack-shark-x3",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/attack+shark+x3/"
    }
  },

  // ===================== MONITORES =====================
  {
    id: "lg-ultragear-24gn600",
    imagem: "https://a-static.mlcdn.com.br/280x210/monitor-gamer-lg-ultragear-24-full-hd-144hz-1ms-ips-g-sync-freesync-hdr10-preto-24g411a-b/kabum/986739/3c88ded099b840041c161370edce8e5b.jpeg",
    nome: "LG UltraGear 24GN600",
    categoria: "Monitores",
    selo: "144 Hz de entrada",
    icone: "🖥️",
    cor: "#9b59ff",
    data: "2026-06-27",
    resumo: "Monitor 24\" Full HD 144 Hz com painel IPS de cores fiéis. A porta de entrada ideal para quem quer fluidez sem gastar muito.",
    notas: { "Jogos": 8.0, "Trabalho": 7.5, "HDR": 5.5, "Custo-benefício": 8.5 },
    pros: [
      "Painel IPS com boas cores para a faixa",
      "144 Hz com 1 ms (MBR)",
      "Suporte a FreeSync e G-Sync Compatible"
    ],
    contras: [
      "HDR apenas nominal (HDR10 sem brilho real)",
      "Base simples, sem ajuste de altura",
      "Contraste típico de IPS"
    ],
    specs: {
      "Tela": "23,8\" IPS",
      "Resolução": "1920 x 1080 (Full HD)",
      "Taxa de atualização": "144 Hz",
      "Tempo de resposta": "1 ms (MBR)",
      "Conexões": "2x HDMI, 1x DisplayPort"
    },
    analise: [
      "O 24GN600 é um dos caminhos mais baratos para os 144 Hz com um painel IPS de cores agradáveis. Para FPS e jogos rápidos em Full HD, a fluidez faz uma diferença enorme frente aos 60 Hz.",
      "O HDR é só de nome e a ergonomia é básica, mas nada disso tira o brilho de um monitor que acerta o essencial pelo preço. É a recomendação padrão para o primeiro monitor gamer."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=lg+ultragear+24gn600&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/lg-ultragear-24gn600",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/lg+ultragear+24gn600/"
    }
  },
  {
    id: "aoc-24g2",
    imagem: "https://a-static.mlcdn.com.br/280x210/monitor-gamer-aoc-27-full-hd-144hz-agon-g50-ips-05ms-27g50f-57-hdmi-displayport-g-sync/magazineluiza/240475700/35210491b2ea5297f1235bc6d108106b.jpg",
    nome: "AOC 24G2",
    categoria: "Monitores",
    selo: "Queridinho custo-benefício",
    icone: "🖥️",
    cor: "#9b59ff",
    data: "2026-06-19",
    resumo: "Um dos monitores gamer mais recomendados do mundo: 24\" IPS 144 Hz com ergonomia completa. Raro ver tanto valor pelo preço.",
    notas: { "Jogos": 8.5, "Trabalho": 8.0, "HDR": 5.0, "Custo-benefício": 9.5 },
    pros: [
      "Ergonomia completa (altura, pivô, rotação)",
      "IPS 144 Hz com cores muito boas",
      "Bordas finas e visual limpo"
    ],
    contras: [
      "Sem HDR real",
      "Alto-falantes ausentes em algumas versões",
      "Contraste limitado do IPS"
    ],
    specs: {
      "Tela": "23,8\" IPS",
      "Resolução": "1920 x 1080 (Full HD)",
      "Taxa de atualização": "144 Hz",
      "Tempo de resposta": "1 ms (MPRT)",
      "Conexões": "2x HDMI, 1x DisplayPort, VGA"
    },
    analise: [
      "O AOC 24G2 é uma lenda do custo-benefício: junta painel IPS de 144 Hz, cores calibradas de fábrica surpreendentes e — o mais raro nessa faixa — ergonomia completa de suporte. É difícil pedir mais pelo dinheiro.",
      "Faltam recursos premium como HDR de verdade, mas isso é detalhe diante do pacote. Se você quer um único monitor que faz bem jogos e trabalho, ele é quase sempre a resposta certa."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=aoc+24g2&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/aoc-24g2",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/aoc+24g2/"
    }
  },
  {
    id: "samsung-odyssey-g5",
    imagem: "https://a-static.mlcdn.com.br/280x210/monitor-gamer-samsung-27-odyssey-g5-qhd-165hz-1ms/primetek/029316/69e7224344b9189b8f9910aa3c140ba1.jpeg",
    nome: "Samsung Odyssey G5",
    categoria: "Monitores",
    selo: "QHD curvo em conta",
    icone: "🖥️",
    cor: "#9b59ff",
    data: "2026-06-11",
    resumo: "27\" curvo QHD 144 Hz com painel VA de bom contraste. Imersão e nitidez por um preço competitivo, com ergonomia fraca.",
    notas: { "Jogos": 8.0, "Trabalho": 7.5, "HDR": 6.0, "Custo-benefício": 8.0 },
    pros: [
      "QHD 1440p com 144 Hz",
      "Painel VA com bom contraste e curvatura 1000R",
      "Ótimo para imersão em jogos single-player"
    ],
    contras: [
      "Base só com ajuste de inclinação",
      "HDR10 fraco, sem brilho de destaque",
      "Ghosting em cenas escuras (típico de VA)"
    ],
    specs: {
      "Tela": "27\" VA curvo (1000R)",
      "Resolução": "2560 x 1440 (QHD)",
      "Taxa de atualização": "144 Hz",
      "Tempo de resposta": "1 ms (MPRT)",
      "Conexões": "1x HDMI, 1x DisplayPort"
    },
    analise: [
      "O Odyssey G5 entrega o combo desejado por muitos: 1440p, 144 Hz e curvatura acentuada por um preço acessível. O contraste do painel VA valoriza jogos com cenas escuras e a nitidez do QHD dá gosto no trabalho.",
      "A ergonomia mínima e o HDR fraco são os limites do pacote, além do ghosting comum em painéis VA. Ainda assim, para quem quer dar o salto ao QHD sem estourar o orçamento, é uma escolha sólida."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=samsung+odyssey+g5&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/samsung-odyssey-g5",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/samsung+odyssey+g5/"
    }
  },
  {
    id: "dell-s2721dgf",
    imagem: "https://a-static.mlcdn.com.br/280x210/notebook-dell-inspiron-15-i15-i1300-a30p-intel-core-i5-8gb-ram-512gb-ssd-15-6-full-hd-windows-11-210-bngc/magazineluiza/240428300/c76ebca593d35e6912b954012e62c35f.jpg",
    nome: "Dell S2721DGF",
    categoria: "Monitores",
    selo: "Rápido e preciso",
    icone: "🖥️",
    cor: "#9b59ff",
    data: "2026-06-03",
    resumo: "27\" QHD 165 Hz IPS com cobertura de cores ampla e ergonomia completa. Um dos melhores all-rounders para jogos e criação.",
    notas: { "Jogos": 9.0, "Trabalho": 8.5, "HDR": 6.0, "Custo-benefício": 8.0 },
    pros: [
      "IPS rápido com 165 Hz e ótimo tempo de resposta",
      "Ampla cobertura de cores (bom para edição)",
      "Ergonomia completa e boa conectividade"
    ],
    contras: [
      "HDR400 apenas mediano",
      "Preço acima da média nacional",
      "Contraste típico de IPS"
    ],
    specs: {
      "Tela": "27\" IPS (Fast IPS)",
      "Resolução": "2560 x 1440 (QHD)",
      "Taxa de atualização": "165 Hz",
      "Tempo de resposta": "1 ms (GtG)",
      "Conexões": "2x HDMI, 1x DisplayPort, USB hub"
    },
    analise: [
      "O S2721DGF é um dos IPS rápidos mais elogiados: junta 165 Hz, resposta baixíssima e cores amplas que agradam tanto quem joga quanto quem edita. A ergonomia e a conectividade completam um pacote profissional.",
      "O HDR400 é só um bônus modesto e o preço no Brasil costuma pesar. Mas se você procura um monitor único para desempenho e criação com qualidade, ele está no topo da lista."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=dell+s2721dgf&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/dell-s2721dgf",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/dell+s2721dgf/"
    }
  },
  {
    id: "gigabyte-m27q",
    imagem: "https://a-static.mlcdn.com.br/280x210/monitor-gigabyte-m27q2-27-qhd-200hz-1ms-ips/nocnocestadosunidos/buybox-cpb0gkfqxr3r/c6a014a4afc590f4701f07b10c9ed345.jpeg",
    nome: "Gigabyte M27Q",
    categoria: "Monitores",
    selo: "KVM embutido",
    icone: "🖥️",
    cor: "#9b59ff",
    data: "2026-05-26",
    resumo: "27\" QHD 170 Hz com KVM integrado, que controla dois PCs com um teclado e mouse. Recheado de recursos para trabalho e jogo.",
    notas: { "Jogos": 8.5, "Trabalho": 9.0, "HDR": 6.0, "Custo-benefício": 8.0 },
    pros: [
      "KVM embutido (controla 2 PCs)",
      "170 Hz com cores vivas",
      "Hub USB-C com entrega de energia"
    ],
    contras: [
      "Subpixel BGR pode incomodar em textos",
      "HDR apenas ok",
      "Ergonomia mediana"
    ],
    specs: {
      "Tela": "27\" SS IPS",
      "Resolução": "2560 x 1440 (QHD)",
      "Taxa de atualização": "170 Hz",
      "Tempo de resposta": "0,5 ms (MPRT)",
      "Conexões": "2x HDMI, 1x DP, USB-C, KVM"
    },
    analise: [
      "O M27Q se destaca pela versatilidade: além dos 170 Hz e cores vibrantes, traz um KVM que deixa você controlar dois computadores com o mesmo teclado e mouse — recurso raro nessa faixa e ótimo para quem tem PC e notebook de trabalho.",
      "O arranjo de subpixels BGR pode deixar textos levemente menos nítidos para alguns olhos, e a ergonomia é apenas correta. Fora isso, é um dos QHD mais completos em recursos pelo preço."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=gigabyte+m27q&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/gigabyte-m27q",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/gigabyte+m27q/"
    }
  },
  {
    id: "lg-27gp850",
    imagem: "https://a-static.mlcdn.com.br/280x210/smart-tv-86-lg-4k-ultra-hd-qned-86qned73asa-webos-2025/magazineluiza/240989600/226b9c6bbbaebf45dd91c4d45f2373f2.jpg",
    nome: "LG UltraGear 27GP850",
    categoria: "Monitores",
    selo: "Alta taxa premium",
    icone: "🖥️",
    cor: "#9b59ff",
    data: "2026-05-18",
    resumo: "27\" QHD Nano IPS com 165 Hz (180 Hz em OC) e tempo de resposta de referência. Um dos painéis rápidos mais bem avaliados.",
    notas: { "Jogos": 9.0, "Trabalho": 8.5, "HDR": 6.5, "Custo-benefício": 7.5 },
    pros: [
      "Nano IPS com cores excelentes",
      "Resposta rápida de verdade (pouco ghosting)",
      "Overclock a 180 Hz"
    ],
    contras: [
      "HDR400 modesto",
      "Preço premium",
      "Sem USB-C"
    ],
    specs: {
      "Tela": "27\" Nano IPS",
      "Resolução": "2560 x 1440 (QHD)",
      "Taxa de atualização": "165 Hz (180 Hz OC)",
      "Tempo de resposta": "1 ms (GtG)",
      "Conexões": "2x HDMI, 2x DisplayPort"
    },
    analise: [
      "O 27GP850 é uma referência entre os IPS rápidos: o painel Nano IPS entrega cores vibrantes e um tempo de resposta que praticamente elimina o ghosting, algo que poucos concorrentes conseguem manter em alta taxa.",
      "É um produto premium, com preço à altura e HDR apenas ok. Mas para quem leva os jogos a sério e também valoriza cor para criação, ele entrega desempenho de elite sem precisar ir para o topo absoluto."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=lg+27gp850&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/lg-27gp850",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/lg+27gp850/"
    }
  },
  {
    id: "samsung-odyssey-g7",
    imagem: "https://a-static.mlcdn.com.br/280x210/adaptador-de-montagem-na-parede-para-monitor-samsung-odyssey-g7-tjyuze/nocnocestadosunidos/buybox-cpb0d49hg5vz/be1ab5cbf00915e76baa2e2f0d2e4729.jpeg",
    nome: "Samsung Odyssey G7",
    categoria: "Monitores",
    selo: "240 Hz curvo",
    icone: "🖥️",
    cor: "#9b59ff",
    data: "2026-05-10",
    resumo: "27\" QHD 240 Hz com curvatura agressiva 1000R e painel VA de alto contraste. Velocidade e imersão de sobra, com ergonomia mediana.",
    notas: { "Jogos": 9.0, "Trabalho": 7.5, "HDR": 7.0, "Custo-benefício": 7.5 },
    pros: [
      "240 Hz fluidíssimos",
      "Contraste alto do painel VA",
      "Curvatura 1000R muito imersiva"
    ],
    contras: [
      "Curvatura agressiva demais para trabalho",
      "HDR600 bom, mas com blooming",
      "Consumo e tamanho da base"
    ],
    specs: {
      "Tela": "27\" VA curvo (1000R)",
      "Resolução": "2560 x 1440 (QHD)",
      "Taxa de atualização": "240 Hz",
      "Tempo de resposta": "1 ms (GtG)",
      "Conexões": "1x HDMI, 2x DisplayPort"
    },
    analise: [
      "O Odyssey G7 é para quem quer velocidade: 240 Hz combinados ao contraste do VA entregam jogos rápidos e imersivos, com a curvatura 1000R envolvendo o campo de visão. O HDR600 dá um brilho extra bem-vindo.",
      "A curvatura acentuada divide opiniões no uso produtivo e o blooming aparece em cenas de alto contraste. Para o gamer competitivo que também curte single-player, porém, é um dos pacotes mais empolgantes."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=samsung+odyssey+g7&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/samsung-odyssey-g7",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/samsung+odyssey+g7/"
    }
  },
  {
    id: "viewsonic-vx2758",
    imagem: "https://a-static.mlcdn.com.br/280x210/projetor-viewsonic-pa503x-hdmi-4000-lumens/negociunoficial/13294/9a8074231109149ae44c27704d40a4ae.jpeg",
    nome: "ViewSonic VX2758-2KP-MHD",
    categoria: "Monitores",
    selo: "QHD honesto",
    icone: "🖥️",
    cor: "#9b59ff",
    data: "2026-05-02",
    resumo: "27\" QHD IPS 144 Hz com cores agradáveis e preço equilibrado. Um meio-termo confiável entre entrada e premium.",
    notas: { "Jogos": 8.0, "Trabalho": 8.0, "HDR": 5.0, "Custo-benefício": 8.0 },
    pros: [
      "QHD IPS com boas cores",
      "144 Hz com FreeSync",
      "Preço equilibrado"
    ],
    contras: [
      "Sem HDR relevante",
      "Ergonomia básica",
      "Alto-falantes fracos"
    ],
    specs: {
      "Tela": "27\" IPS",
      "Resolução": "2560 x 1440 (QHD)",
      "Taxa de atualização": "144 Hz",
      "Tempo de resposta": "1 ms (MPRT)",
      "Conexões": "1x HDMI, 1x DisplayPort"
    },
    analise: [
      "O VX2758-2KP é a definição de escolha sensata: entrega QHD, IPS e 144 Hz sem grandes firulas e sem grandes defeitos. As cores agradam e a fluidez é ótima para a maioria dos jogos.",
      "Não espere HDR nem ergonomia sofisticada. É um monitor sem drama, para quem quer nitidez e taxa alta com o mínimo de dor de cabeça e um preço justo."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=viewsonic+vx2758+2kp&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/viewsonic-vx2758",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/viewsonic+vx2758/"
    }
  },
  {
    id: "samsung-t350",
    imagem: "https://a-static.mlcdn.com.br/280x210/monitor-samsung-serie-t350-lf24t350fhnxza-24-fhd-ips/nocnocestadosunidos/buybox-cpb08j4jrrct/4013dcd7eaa383855f58aa286efde93f.jpeg",
    nome: "Samsung T350",
    categoria: "Monitores",
    selo: "Básico para trabalho",
    icone: "🖥️",
    cor: "#9b59ff",
    data: "2026-04-24",
    resumo: "Monitor 24\" Full HD 75 Hz IPS para escritório e uso doméstico. Design limpo e cores boas, sem pretensão gamer.",
    notas: { "Jogos": 5.5, "Trabalho": 8.0, "HDR": 4.0, "Custo-benefício": 8.0 },
    pros: [
      "Design fino e bordas mínimas",
      "IPS com cores agradáveis para o preço",
      "75 Hz com FreeSync ajudam no dia a dia"
    ],
    contras: [
      "Só 75 Hz, longe do ideal para jogos rápidos",
      "Base sem ajuste de altura",
      "Sem HDR"
    ],
    specs: {
      "Tela": "24\" IPS",
      "Resolução": "1920 x 1080 (Full HD)",
      "Taxa de atualização": "75 Hz",
      "Tempo de resposta": "5 ms",
      "Conexões": "1x HDMI, 1x D-Sub"
    },
    analise: [
      "O T350 não tenta ser gamer — é um monitor de trabalho bem resolvido, com painel IPS de cores boas, visual limpo e bordas finas que ficam bem em qualquer mesa de home office.",
      "Os 75 Hz e o tempo de resposta de 5 ms deixam claro o foco em produtividade, não em jogos rápidos. Para estudo, escritório e uso geral, é uma opção econômica e agradável."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=samsung+t350+monitor&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/samsung-t350-monitor",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/samsung+t350+monitor/"
    }
  },
  {
    id: "lg-ultragear-34gp63a",
    imagem: "https://a-static.mlcdn.com.br/280x210/monitor-gamer-lg-ultragear-24-full-hd-144hz-1ms-ips-g-sync-freesync-hdr10-preto-24g411a-b/kabum/986739/3c88ded099b840041c161370edce8e5b.jpeg",
    nome: "LG UltraGear 34GP63A",
    categoria: "Monitores",
    selo: "Ultrawide imersivo",
    icone: "🖥️",
    cor: "#9b59ff",
    data: "2026-04-16",
    resumo: "Ultrawide 34\" QHD 160 Hz com painel VA curvo. Tela panorâmica que transforma jogos e produtividade, por um preço justo para o formato.",
    notas: { "Jogos": 8.5, "Trabalho": 9.0, "HDR": 6.5, "Custo-benefício": 8.0 },
    pros: [
      "Formato ultrawide 21:9 muito imersivo",
      "160 Hz com bom contraste do VA",
      "Ótimo para multitarefa e jogos single-player"
    ],
    contras: [
      "Nem todo jogo suporta 21:9",
      "HDR10 apenas ok",
      "Ocupa bastante espaço na mesa"
    ],
    specs: {
      "Tela": "34\" VA curvo (ultrawide)",
      "Resolução": "3440 x 1440 (UWQHD)",
      "Taxa de atualização": "160 Hz",
      "Tempo de resposta": "1 ms (MBR)",
      "Conexões": "2x HDMI, 1x DisplayPort"
    },
    analise: [
      "O 34GP63A entrega a experiência ultrawide sem cobrar caro pelo formato: a tela 21:9 curva envolve o campo de visão nos jogos e é uma maravilha para trabalhar com várias janelas lado a lado. Os 160 Hz garantem fluidez.",
      "Vale lembrar que nem todo jogo suporta bem o 21:9 e o HDR é modesto. Mas para quem quer imersão e produtividade em uma tela só, o ultrawide é viciante — e este é um dos mais equilibrados em preço."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=lg+ultragear+34gp63a&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/lg-ultragear-34gp63a",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/lg+ultragear+34gp63a/"
    }
  },

  // ===================== HEADSETS =====================
  {
    id: "hyperx-cloud-ii",
    imagem: "https://a-static.mlcdn.com.br/280x210/fone-de-ouvido-gamer-hyperx-cloud-earbuds-ii-driver-14mm-nintendo-switch-e-mobile-preto-70n24aa/kabum/483040/b6752760d935fc7f050883e2128c45d5.jpeg",
    nome: "HyperX Cloud II",
    categoria: "Headsets",
    selo: "Conforto lendário",
    icone: "🎧",
    cor: "#2ecc8f",
    data: "2026-06-26",
    resumo: "Um dos headsets gamer mais recomendados de todos os tempos: conforto absurdo, construção robusta e som equilibrado.",
    notas: { "Jogos": 8.5, "Música": 7.5, "Microfone": 7.5, "Custo-benefício": 9.0 },
    pros: [
      "Conforto excepcional em sessões longas",
      "Construção com armação de alumínio",
      "Microfone destacável de boa qualidade"
    ],
    contras: [
      "Som surround virtual 7.1 apenas ok",
      "Almofadas esquentam com o tempo",
      "Cabo com controle um pouco volumoso"
    ],
    specs: {
      "Drivers": "53 mm",
      "Conexão": "USB (7.1) ou P3 3,5 mm",
      "Peso": "~320 g",
      "Microfone": "Destacável com cancelamento de ruído",
      "Compatibilidade": "PC, PS5, Xbox, celular"
    },
    analise: [
      "O Cloud II é um dos headsets mais vendidos da história por um motivo: o conforto é referência, a construção inspira confiança e o som equilibrado agrada tanto em jogos quanto em música. O microfone destacável ainda soa muito bem para chamadas.",
      "O surround 7.1 virtual é mais efeito do que precisão e as almofadas fecham bastante o ouvido, esquentando em uso prolongado. Fora isso, é uma compra segura que envelhece muito bem."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=hyperx+cloud+ii&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/hyperx-cloud-ii",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/hyperx+cloud+ii/"
    }
  },
  {
    id: "logitech-g435",
    imagem: "https://a-static.mlcdn.com.br/280x210/headset-e-mouse-wireless-gaming-g435-g305-logitech/fagcomerciodeeletronicosltdame/748d07d28d5a11efbe824201ac18501b/c1fe7f40a701187189fbc6223c87b8c7.jpeg",
    nome: "Logitech G435 Lightspeed",
    categoria: "Headsets",
    selo: "Sem fio leve",
    icone: "🎧",
    cor: "#2ecc8f",
    data: "2026-06-18",
    resumo: "Headset sem fio ultraleve com Bluetooth e Lightspeed, pensado para conforto e mobilidade. Microfone só razoável.",
    notas: { "Jogos": 7.5, "Música": 7.0, "Microfone": 6.0, "Custo-benefício": 8.0 },
    pros: [
      "Muito leve (~165 g)",
      "Sem fio duplo: Lightspeed e Bluetooth",
      "Boa bateria e visual jovem"
    ],
    contras: [
      "Microfone integrado apenas razoável",
      "Graves fracos para alguns gostos",
      "Sem cancelamento de ruído no mic"
    ],
    specs: {
      "Drivers": "40 mm",
      "Conexão": "Lightspeed (USB) e Bluetooth",
      "Peso": "165 g",
      "Microfone": "Integrado (dual beamforming)",
      "Bateria": "Até 18 h"
    },
    analise: [
      "O G435 aposta em leveza e liberdade: é confortável, tem dois modos sem fio e um design colorido que foge do padrão gamer sisudo. Para jogar e ouvir música com mobilidade, cumpre muito bem.",
      "O microfone integrado é o ponto fraco — serve para conversar, mas não impressiona — e os graves são contidos. Como headset sem fio leve de entrada, ainda assim entrega bom valor."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=logitech+g435&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/logitech-g435",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/logitech+g435/"
    }
  },
  {
    id: "razer-kraken-x",
    imagem: "https://a-static.mlcdn.com.br/280x210/fone-de-ouvido-razer-kraken-kitty-v2-bt-sem-fio-rgb-bluetooth-5-2/nocnocestadosunidos/buybox-cpb0d7ymgsdx/8f65749d124563027760b25287c7a6b9.jpeg",
    nome: "Razer Kraken X",
    categoria: "Headsets",
    selo: "Leve e barato",
    icone: "🎧",
    cor: "#2ecc8f",
    data: "2026-06-10",
    resumo: "Headset com fio leve e confortável, com som 7.1 virtual no PC. Uma entrada econômica no ecossistema Razer.",
    notas: { "Jogos": 7.5, "Música": 6.5, "Microfone": 6.5, "Custo-benefício": 8.0 },
    pros: [
      "Muito leve (~250 g)",
      "Confortável para o preço",
      "7.1 virtual via software no PC"
    ],
    contras: [
      "Plástico simples",
      "Microfone mediano",
      "Graves modestos"
    ],
    specs: {
      "Drivers": "40 mm",
      "Conexão": "P3 3,5 mm",
      "Peso": "250 g",
      "Microfone": "Flexível com cardioide",
      "Compatibilidade": "PC, consoles, celular"
    },
    analise: [
      "O Kraken X é a porta de entrada leve da Razer: confortável, simples de usar e com um som que dá conta do recado para a maioria dos jogos. O 7.1 virtual no PC ajuda a posicionar sons em competitivos.",
      "O acabamento é básico e o microfone não passa de mediano. Mas, como headset econômico e leve para longas sessões, ele entrega o essencial sem tropeços."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=razer+kraken+x&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/razer-kraken-x",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/razer+kraken+x/"
    }
  },
  {
    id: "redragon-zeus-x",
    imagem: "https://a-static.mlcdn.com.br/280x210/headset-gamer-redragon-zeus-x-chroma-mk-ii-rgb-som-surround-7-1-drivers-53mm-usb-preto-e-vermelho-h510-rgb/kabum/227818/da1fb35a9059a21e6679f0eeeaaced72.jpeg",
    nome: "Redragon Zeus X",
    categoria: "Headsets",
    selo: "RGB custo-benefício",
    icone: "🎧",
    cor: "#2ecc8f",
    data: "2026-06-02",
    resumo: "Headset USB com drivers grandes, RGB e som 7.1 virtual por um preço agressivo. Robusto, porém pesado.",
    notas: { "Jogos": 7.5, "Música": 7.0, "Microfone": 7.0, "Custo-benefício": 8.5 },
    pros: [
      "Drivers de 53 mm com som encorpado",
      "7.1 virtual e RGB por pouco dinheiro",
      "Microfone destacável"
    ],
    contras: [
      "Pesado e aperta em cabeças maiores",
      "Só USB (sem P3 em algumas versões)",
      "Software simples"
    ],
    specs: {
      "Drivers": "53 mm",
      "Conexão": "USB",
      "Peso": "~370 g",
      "Microfone": "Destacável",
      "Iluminação": "RGB"
    },
    analise: [
      "O Zeus X entrega muito por pouco: drivers grandes com som cheio, 7.1 virtual, RGB e microfone destacável formam um pacote atraente para quem quer imersão gastando pouco.",
      "O peso e a pressão nas laterais podem incomodar em sessões longas ou cabeças maiores, e a conexão USB limita o uso fora do PC. Para o gamer de PC com orçamento apertado, ainda assim é uma boa pedida."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=redragon+zeus+x&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/redragon-zeus-x",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/redragon+zeus+x/"
    }
  },
  {
    id: "jbl-quantum-100",
    imagem: "https://a-static.mlcdn.com.br/280x210/fone-de-ouvido-jbl-quantum-100-m2-headset-gamer-preto-compativel-com-windows-sonic/fastshop2/jblqtum100ptob/0f3ec174a46deae130b35f69af268115.jpeg",
    nome: "JBL Quantum 100",
    categoria: "Headsets",
    selo: "Som de marca barato",
    icone: "🎧",
    cor: "#2ecc8f",
    data: "2026-05-25",
    resumo: "Headset de entrada com a assinatura sonora JBL e microfone destacável. Leve e simples, ótimo primeiro headset.",
    notas: { "Jogos": 7.0, "Música": 7.5, "Microfone": 6.5, "Custo-benefício": 8.5 },
    pros: [
      "Som JBL agradável, bom para música",
      "Leve e confortável",
      "Microfone destacável e conector P3 universal"
    ],
    contras: [
      "Construção plástica simples",
      "Sem surround ou software",
      "Microfone apenas ok"
    ],
    specs: {
      "Drivers": "40 mm",
      "Conexão": "P3 3,5 mm",
      "Peso": "~213 g",
      "Microfone": "Destacável",
      "Compatibilidade": "PC, consoles, celular"
    },
    analise: [
      "O Quantum 100 leva a assinatura sonora da JBL para a faixa de entrada, com um som que agrada especialmente em música. É leve, confortável e traz microfone destacável com conector universal.",
      "A construção é simples e não há recursos extras como surround ou software. Mas para um primeiro headset que soa bem e serve em PC, console e celular, é uma escolha de ótimo valor."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=jbl+quantum+100&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/jbl-quantum-100",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/jbl+quantum+100/"
    }
  },
  {
    id: "corsair-hs55",
    imagem: "https://a-static.mlcdn.com.br/280x210/headset-gamer-corsair-hs55-surround-v2-branco-ca-9011390-ww/kabum/690576/e93d4432e7d45cce86fa22bdd37d4a48.jpeg",
    nome: "Corsair HS55 Stereo",
    categoria: "Headsets",
    selo: "Equilíbrio geral",
    icone: "🎧",
    cor: "#2ecc8f",
    data: "2026-05-17",
    resumo: "Headset leve e bem construído, com bom conforto e microfone acima da média da faixa. Aposta no equilíbrio.",
    notas: { "Jogos": 7.5, "Música": 7.5, "Microfone": 7.5, "Custo-benefício": 8.0 },
    pros: [
      "Confortável e bem-acabado",
      "Microfone com boa captação",
      "Som equilibrado e limpo"
    ],
    contras: [
      "Sem RGB ou firulas",
      "Graves contidos",
      "Cabo fixo"
    ],
    specs: {
      "Drivers": "50 mm",
      "Conexão": "P3 3,5 mm",
      "Peso": "~258 g",
      "Microfone": "Flip-to-mute destacável",
      "Compatibilidade": "PC, PS5, Xbox, Switch"
    },
    analise: [
      "O HS55 é o headset do bom senso: leve, bem construído e com um som limpo e equilibrado. O microfone se destaca positivamente, captando a voz com clareza melhor que muitos concorrentes diretos.",
      "Faltam extras como RGB e os graves são comedidos, mas isso combina com a proposta sóbria. Para quem quer um headset confiável e sem drama, é uma recomendação fácil."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=corsair+hs55&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/corsair-hs55",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/corsair+hs55/"
    }
  },
  {
    id: "hyperx-cloud-stinger-2",
    imagem: "https://a-static.mlcdn.com.br/280x210/headset-gamer-hyperx-cloud-stinger-2-drivers-50mm-branco-playstation-75x29aa/kabum/505107/7b34ee0e3a6437035d4c9fef52e33456.jpeg",
    nome: "HyperX Cloud Stinger 2",
    categoria: "Headsets",
    selo: "Entrada confiável",
    icone: "🎧",
    cor: "#2ecc8f",
    data: "2026-05-09",
    resumo: "Sucessor de um clássico de entrada: leve, confortável e com som direcionado a jogos. Microfone flip-to-mute prático.",
    notas: { "Jogos": 7.5, "Música": 6.5, "Microfone": 7.0, "Custo-benefício": 8.5 },
    pros: [
      "Leve e confortável",
      "Microfone flip-to-mute conveniente",
      "Som com foco em passos e efeitos"
    ],
    contras: [
      "Só P3, sem versão USB nesta variante",
      "Graves modestos para música",
      "Plástico simples"
    ],
    specs: {
      "Drivers": "50 mm",
      "Conexão": "P3 3,5 mm",
      "Peso": "~275 g",
      "Microfone": "Flip-to-mute",
      "Compatibilidade": "PC, consoles, celular"
    },
    analise: [
      "O Cloud Stinger 2 mantém a receita que fez o original ser tão recomendado: leveza, conforto e um som que valoriza efeitos e passos nos jogos. O microfone flip-to-mute é prático no dia a dia.",
      "Para música ele fica devendo em graves e o acabamento é básico. Mas como headset de entrada focado em jogos, segue sendo uma das apostas mais seguras da categoria."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=hyperx+cloud+stinger+2&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/hyperx-cloud-stinger-2",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/hyperx+cloud+stinger+2/"
    }
  },
  {
    id: "logitech-gpro-x-headset",
    imagem: "https://a-static.mlcdn.com.br/280x210/headset-gamer-sem-fio-logitech-g-pro-x-2-lightspeed-driver-50mm-bluetooth-usb-e-3-5mm-para-pc-playstation-e-switch-rosa-magenta-981-001274/kabum/495543/300f59e7e138f7b04b11d2cfdf65dc32.jpeg",
    nome: "Logitech G Pro X Gaming",
    categoria: "Headsets",
    selo: "Microfone de destaque",
    icone: "🎧",
    cor: "#2ecc8f",
    data: "2026-05-01",
    resumo: "Headset com fio focado em qualidade de microfone (Blue VO!CE) e construção premium. Excelente para quem fala muito.",
    notas: { "Jogos": 8.0, "Música": 7.5, "Microfone": 9.0, "Custo-benefício": 7.5 },
    pros: [
      "Microfone excelente com tecnologia Blue VO!CE",
      "Construção metálica premium",
      "Som equilibrado e detalhado"
    ],
    contras: [
      "Almofadas apertam em cabeças maiores",
      "Preço acima da média",
      "Com fio"
    ],
    specs: {
      "Drivers": "50 mm",
      "Conexão": "USB e P3 3,5 mm",
      "Peso": "~320 g",
      "Microfone": "Destacável (Blue VO!CE)",
      "Compatibilidade": "PC, consoles, celular"
    },
    analise: [
      "O G Pro X se diferencia pelo microfone: com o processamento Blue VO!CE, a voz sai limpa e profissional, algo que faz diferença para quem transmite ou joga em equipe. A construção metálica reforça a sensação premium.",
      "As almofadas podem apertar cabeças maiores e o preço não é dos mais amigáveis. Mas se qualidade de voz é prioridade, poucos headsets nessa faixa entregam tanto."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=logitech+g+pro+x+headset&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/logitech-g-pro-x-headset",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/logitech+g+pro+x+headset/"
    }
  },
  {
    id: "redragon-diomedes",
    imagem: "https://a-static.mlcdn.com.br/280x210/fone-headset-gamer-diomedes-h388-3-5mm-redragon-preto/bftechchapeco/1415p/65a41bc6673e938ef2931582805825bd.jpeg",
    nome: "Redragon Diomedes",
    categoria: "Headsets",
    selo: "Grave reforçado",
    icone: "🎧",
    cor: "#2ecc8f",
    data: "2026-04-23",
    resumo: "Headset com drivers grandes e grave marcante, mirando imersão barata. Diverte, mas peca no equilíbrio e no conforto.",
    notas: { "Jogos": 7.0, "Música": 6.5, "Microfone": 6.5, "Custo-benefício": 7.5 },
    pros: [
      "Grave forte e imersivo",
      "Preço acessível",
      "Microfone destacável"
    ],
    contras: [
      "Som pouco equilibrado (grave domina)",
      "Conforto mediano em sessões longas",
      "Construção simples"
    ],
    specs: {
      "Drivers": "53 mm",
      "Conexão": "USB / P3",
      "Peso": "~340 g",
      "Microfone": "Destacável",
      "Iluminação": "RGB"
    },
    analise: [
      "O Diomedes aposta no grave: quem gosta de explosões e trilhas com impacto vai se divertir com a assinatura sonora encorpada, tudo por um preço camarada e com RGB de brinde.",
      "O reverso é a falta de equilíbrio — o grave às vezes atropela vozes e detalhes — e o conforto cai em uso prolongado. É uma opção divertida para quem prioriza impacto sobre fidelidade."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=redragon+diomedes&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/redragon-diomedes",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/redragon+diomedes/"
    }
  },
  {
    id: "astro-a10",
    imagem: "https://a-static.mlcdn.com.br/280x210/headset-gamer-astro-a10-ps4-xbox-one-pc-mac-nintendo-switch-2-0-branco-e-azul/magazineluiza/227721300/6d5050931bc7a1fc596b2e5ab023015f.jpg",
    nome: "Astro A10 (Gen 2)",
    categoria: "Headsets",
    selo: "Durabilidade jovem",
    icone: "🎧",
    cor: "#2ecc8f",
    data: "2026-04-15",
    resumo: "Headset resistente com design flexível e som encorpado. Feito para aguentar tranco, com microfone flip-to-mute.",
    notas: { "Jogos": 7.5, "Música": 7.0, "Microfone": 7.0, "Custo-benefício": 8.0 },
    pros: [
      "Construção resistente e flexível",
      "Som com boa presença",
      "Microfone flip-to-mute"
    ],
    contras: [
      "Um pouco pesado",
      "Sem surround ou software",
      "Visual pode não agradar a todos"
    ],
    specs: {
      "Drivers": "32 mm",
      "Conexão": "P3 3,5 mm",
      "Peso": "~246 g",
      "Microfone": "Flip-to-mute",
      "Compatibilidade": "PC, consoles, celular"
    },
    analise: [
      "O A10 Gen 2 é feito para durar: a estrutura flexível aguenta quedas e torções que derrubariam concorrentes, e o som tem presença suficiente para jogos e música casual. O microfone flip-to-mute é prático.",
      "É um pouco pesado e não traz recursos extras, mas a robustez e o som agradável fazem dele uma boa escolha para o público mais jovem ou para quem quer algo à prova de tranco."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=astro+a10&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/astro-a10",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/astro+a10/"
    }
  },

  // ===================== TECLADOS =====================
  {
    id: "hyperx-alloy-origins-core",
    imagem: "https://a-static.mlcdn.com.br/280x210/teclado-mecanico-gamer-hyperx-alloy-origins-core-switch-hyperx-red-abnt2-rgb-hx-kb6rdx-br/oficinadosbits2/38895/69ffe92b772741b4291d4ce4dca02165.jpeg",
    nome: "HyperX Alloy Origins Core",
    categoria: "Teclados",
    selo: "TKL premium",
    icone: "⌨️",
    cor: "#ff6b4a",
    data: "2026-06-25",
    resumo: "Teclado TKL com corpo de alumínio, switches próprios e RGB caprichado. Sólido como uma rocha e ótimo para digitar e jogar.",
    notas: { "Jogos": 8.5, "Digitação": 8.5, "Construção": 9.0, "Custo-benefício": 8.0 },
    pros: [
      "Corpo de alumínio extremamente rígido",
      "Switches HyperX com boa resposta",
      "RGB vibrante e software completo"
    ],
    contras: [
      "Sem apoio de pulso incluso",
      "Keycaps ABS (podem lustrar com o tempo)",
      "Switches proprietários limitam troca"
    ],
    specs: {
      "Formato": "TKL (sem numérico)",
      "Switches": "HyperX (Red/Aqua)",
      "Iluminação": "RGB por tecla",
      "Estrutura": "Alumínio",
      "Conexão": "USB-C destacável"
    },
    analise: [
      "O Alloy Origins Core é um TKL que passa confiança: o corpo de alumínio praticamente não flexiona, os switches próprios da HyperX respondem bem e o RGB é dos mais bonitos da faixa. Cabo USB-C destacável é um plus.",
      "Sente-se falta de um apoio de pulso e os keycaps de ABS podem brilhar com o uso, além de os switches proprietários limitarem customização. Ainda assim, é um dos TKL mais bem construídos pelo preço."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=hyperx+alloy+origins+core&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/hyperx-alloy-origins-core",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/hyperx+alloy+origins+core/"
    }
  },
  {
    id: "logitech-gpro-x-teclado",
    imagem: "https://a-static.mlcdn.com.br/280x210/teclado-gamer-logitech-g-pro-x-tkl-rapid-switches-magnetico-analogicos-modo-rapid-trigger-layout-us-magenta-920-013133/kabum/703014/289882fc86b1b323492850ee33a11111.jpeg",
    nome: "Logitech G Pro X",
    categoria: "Teclados",
    selo: "Switches trocáveis",
    icone: "⌨️",
    cor: "#ff6b4a",
    data: "2026-06-17",
    resumo: "TKL competitivo com switches hot-swap: dá para trocar cada switch sem solda. Compacto, robusto e pensado para pro players.",
    notas: { "Jogos": 8.5, "Digitação": 8.0, "Construção": 8.5, "Custo-benefício": 7.5 },
    pros: [
      "Switches hot-swap (troca sem solda)",
      "Construção sólida e compacta",
      "Cabo destacável para transporte"
    ],
    contras: [
      "Preço alto para um TKL",
      "Keycaps ABS",
      "Poucos switches inclusos"
    ],
    specs: {
      "Formato": "TKL (sem numérico)",
      "Switches": "GX hot-swap (Blue/Red/Brown)",
      "Iluminação": "RGB Lightsync",
      "Estrutura": "Aço/plástico",
      "Conexão": "Micro-USB destacável"
    },
    analise: [
      "O G Pro X é pensado para quem quer ajustar tudo: os switches são hot-swap, então dá para trocar o tipo de acionamento tecla por tecla sem solda. Compacto e robusto, viaja bem para campeonatos.",
      "O preço é elevado para um TKL e os keycaps de ABS destoam do restante premium. Mas a flexibilidade de trocar switches à vontade é um diferencial e tanto para entusiastas."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=logitech+g+pro+x+teclado&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/logitech-g-pro-x-teclado",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/logitech+g+pro+x+teclado/"
    }
  },
  {
    id: "razer-blackwidow-v3",
    imagem: "https://a-static.mlcdn.com.br/280x210/teclado-mecanico-gamer-razer-blackwidow-v3-chroma-rgb-switch-green-edicao-especial-layout-us-rz03-03543300-r3u1/kabum/921187/eba9f6d7906e9ef044b47030a8acc383.jpeg",
    nome: "Razer BlackWidow V3",
    categoria: "Teclados",
    selo: "Clássico full-size",
    icone: "⌨️",
    cor: "#ff6b4a",
    data: "2026-06-09",
    resumo: "Teclado full-size com switches Razer barulhentos e satisfatórios, apoio de pulso e RGB. Tradicional e robusto.",
    notas: { "Jogos": 8.5, "Digitação": 8.0, "Construção": 8.5, "Custo-benefício": 7.5 },
    pros: [
      "Switches Razer com ótimo feedback",
      "Apoio de pulso magnético incluso",
      "Construção robusta com placa de aço"
    ],
    contras: [
      "Switches Green muito barulhentos",
      "Full-size ocupa bastante mesa",
      "Keycaps ABS"
    ],
    specs: {
      "Formato": "Full-size",
      "Switches": "Razer (Green/Yellow)",
      "Iluminação": "RGB Chroma",
      "Estrutura": "Placa de aço",
      "Conexão": "USB"
    },
    analise: [
      "O BlackWidow V3 é um full-size tradicional que faz o básico muito bem: switches Razer com feedback gostoso, construção sólida e um apoio de pulso magnético confortável que já vem na caixa.",
      "Os switches Green são deliciosamente barulhentos — o que pode ser um problema em ambientes compartilhados — e o formato completo pede mesa. Para quem quer um teclado robusto e clássico, entrega bem."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=razer+blackwidow+v3&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/razer-blackwidow-v3",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/razer+blackwidow+v3/"
    }
  },
  {
    id: "redragon-draconic-k530",
    imagem: "https://a-static.mlcdn.com.br/280x210/mouse-gamer-redragon-infernal-dragon-ryu-rgb-16000dpi-8-botoes-preto-id711/kabum/171048/fb3e6a20ef44afbbea37b16cbd0c19f6.jpeg",
    nome: "Redragon Draconic K530",
    categoria: "Teclados",
    selo: "Compacto sem fio",
    icone: "⌨️",
    cor: "#ff6b4a",
    data: "2026-06-01",
    resumo: "Teclado 60% com Bluetooth e cabo, mecânico e baratíssimo. Ideal para quem quer economizar espaço e testar o formato compacto.",
    notas: { "Jogos": 7.5, "Digitação": 7.5, "Construção": 7.5, "Custo-benefício": 9.0 },
    pros: [
      "Formato 60% economiza muito espaço",
      "Bluetooth + cabo por preço baixo",
      "Switches mecânicos e keycaps decentes"
    ],
    contras: [
      "Sem setas dedicadas (usa camada Fn)",
      "Software limitado",
      "Curva de adaptação ao 60%"
    ],
    specs: {
      "Formato": "60% compacto",
      "Switches": "Outemu (Red/Brown/Blue)",
      "Iluminação": "RGB",
      "Conexão": "Bluetooth 5.0 e USB-C",
      "Bateria": "Recarregável"
    },
    analise: [
      "O Draconic K530 popularizou o formato 60% no Brasil: é mecânico, tem Bluetooth e cabo, e custa pouco. Para quem quer liberar espaço na mesa ou usar com tablet e notebook, é uma porta de entrada acessível.",
      "O formato 60% exige adaptação — setas e teclas de função ficam em camadas Fn — e o software é básico. Mas pelo preço e pela versatilidade sem fio, é imbatível como primeiro compacto."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=redragon+draconic+k530&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/redragon-draconic-k530",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/redragon+draconic+k530/"
    }
  },
  {
    id: "keychron-k6",
    imagem: "https://a-static.mlcdn.com.br/280x210/teclado-mecanico-keychron-k3-v2-ultrafino-84-teclas-bluetooth/nocnocestadosunidos/buybox-cpb08lsj4rhh/8037755c82b15b34e1ce351f062a804f.jpeg",
    nome: "Keychron K6",
    categoria: "Teclados",
    selo: "Multiplataforma",
    icone: "⌨️",
    cor: "#ff6b4a",
    data: "2026-05-24",
    resumo: "Teclado 65% sem fio para Windows e Mac, com hot-swap opcional. Queridinho de quem quer digitar bem em qualquer sistema.",
    notas: { "Jogos": 7.0, "Digitação": 8.5, "Construção": 8.0, "Custo-benefício": 8.0 },
    pros: [
      "Compatível com Mac e Windows",
      "Bluetooth para até 3 dispositivos",
      "Versão hot-swap disponível"
    ],
    contras: [
      "Perfil alto pede apoio de pulso",
      "RGB/branco depende da versão",
      "Foco em digitação, não em jogos rápidos"
    ],
    specs: {
      "Formato": "65% compacto",
      "Switches": "Gateron (hot-swap opcional)",
      "Iluminação": "RGB ou White (por versão)",
      "Conexão": "Bluetooth e USB-C",
      "Bateria": "4000 mAh"
    },
    analise: [
      "O Keychron K6 é um dos compactos favoritos de quem digita muito: funciona nativamente em Mac e Windows, conecta em vários aparelhos por Bluetooth e ainda oferece versão hot-swap para trocar switches.",
      "O perfil é alto e pede apoio de pulso, e o foco é claramente digitação e produtividade — não FPS competitivo. Para trabalho e uso híbrido, porém, é uma delícia."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=keychron+k6&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/keychron-k6",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/keychron+k6/"
    }
  },
  {
    id: "redragon-vishnu-k596",
    imagem: "https://a-static.mlcdn.com.br/280x210/teclado-gamer-redragon-vishnu-k596-switch-red-rgb-sem-fio-cor-preto/baro/2011/4161f7ce5611629b7f7b9699f2ecdba9.jpeg",
    nome: "Redragon Vishnu K596",
    categoria: "Teclados",
    selo: "Sem fio com macros",
    icone: "⌨️",
    cor: "#ff6b4a",
    data: "2026-05-16",
    resumo: "TKL sem fio com teclas de macro dedicadas e bateria interna. Muitos recursos por um preço que surpreende.",
    notas: { "Jogos": 8.0, "Digitação": 7.5, "Construção": 7.5, "Custo-benefício": 8.5 },
    pros: [
      "Sem fio (2.4G) e com fio",
      "Teclas de macro dedicadas",
      "Bateria interna recarregável"
    ],
    contras: [
      "Um pouco largo para um TKL",
      "Software simples",
      "Keycaps ABS"
    ],
    specs: {
      "Formato": "TKL + macros",
      "Switches": "Redragon mecânicos",
      "Iluminação": "RGB",
      "Conexão": "2.4G sem fio e USB",
      "Bateria": "Recarregável"
    },
    analise: [
      "O Vishnu K596 entrega uma lista de recursos generosa: é sem fio, tem teclas de macro à esquerda e bateria interna, tudo por um preço bem competitivo. Para quem quer liberdade de cabos com extras, é atraente.",
      "O corpo fica um pouco largo para um TKL por causa das macros e o software é básico. Mas o conjunto de recursos pelo preço faz dele uma opção sem fio de ótimo valor."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=redragon+vishnu+k596&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/redragon-vishnu-k596",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/redragon+vishnu+k596/"
    }
  },
  {
    id: "logitech-g213-prodigy",
    imagem: "https://a-static.mlcdn.com.br/280x210/teclado-usb-gamer-prodigy-rgb-logitech-g213-preto-920-009438/bftechchapeco/5539p/21fbb3a61792fbf618a9492196d73f75.jpg",
    nome: "Logitech G213 Prodigy",
    categoria: "Teclados",
    selo: "Membrana resistente",
    icone: "⌨️",
    cor: "#ff6b4a",
    data: "2026-05-08",
    resumo: "Teclado de membrana com toque 'mecha-dome', resistência a respingos e RGB por zonas. Silencioso e durável, não é mecânico.",
    notas: { "Jogos": 7.0, "Digitação": 6.5, "Construção": 7.5, "Custo-benefício": 7.5 },
    pros: [
      "Resistente a respingos",
      "Mais silencioso que um mecânico",
      "Apoio de pulso integrado"
    ],
    contras: [
      "Não é mecânico (toque mais mole)",
      "RGB só por zonas, não por tecla",
      "Grande e pesado"
    ],
    specs: {
      "Formato": "Full-size",
      "Switches": "Membrana Mech-Dome",
      "Iluminação": "RGB por 5 zonas",
      "Estrutura": "Plástico reforçado",
      "Conexão": "USB"
    },
    analise: [
      "O G213 é uma alternativa de membrana bem-feita: mais silencioso que um mecânico, resistente a respingos e com apoio de pulso integrado. Para quem não curte barulho ou quer algo à prova de acidentes, faz sentido.",
      "O toque não tem a precisão nem o retorno de um switch mecânico e o RGB é limitado a zonas. É um teclado honesto para uso geral, desde que você não faça questão do feel mecânico."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=logitech+g213&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/logitech-g213",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/logitech+g213/"
    }
  },
  {
    id: "razer-huntsman-mini",
    imagem: "https://a-static.mlcdn.com.br/280x210/teclado-gamer-razer-huntsman-v3-pro-mini-60-analogico-preto/nocnocestadosunidos/buybox-cpb0cg7c1nvp/701bdbc6ec41f6b1619e11782e13a9e0.jpeg",
    nome: "Razer Huntsman Mini",
    categoria: "Teclados",
    selo: "60% óptico rápido",
    icone: "⌨️",
    cor: "#ff6b4a",
    data: "2026-04-30",
    resumo: "Teclado 60% com switches ópticos velozes e keycaps PBT de qualidade. Compacto premium para quem quer resposta rápida.",
    notas: { "Jogos": 8.5, "Digitação": 8.0, "Construção": 8.5, "Custo-benefício": 7.0 },
    pros: [
      "Switches ópticos rápidos e precisos",
      "Keycaps PBT duráveis (não lustram)",
      "Construção compacta e sólida"
    ],
    contras: [
      "Sem setas dedicadas (60%)",
      "Preço alto para o tamanho",
      "Curva de adaptação"
    ],
    specs: {
      "Formato": "60% compacto",
      "Switches": "Ópticos Razer (Linear/Clicky)",
      "Iluminação": "RGB Chroma",
      "Keycaps": "PBT Doubleshot",
      "Conexão": "USB-C destacável"
    },
    analise: [
      "O Huntsman Mini é um 60% premium: os switches ópticos acionam muito rápido, os keycaps de PBT resistem ao brilho e a construção é firme. Para FPS e para quem ama mesa limpa, é um prato cheio.",
      "O formato compacto tira as setas dedicadas e o preço é salgado para o tamanho. Mas em resposta, durabilidade dos keycaps e acabamento, ele entrega uma experiência de ponta."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=razer+huntsman+mini&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/razer-huntsman-mini",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/razer+huntsman+mini/"
    }
  },
  {
    id: "redragon-fizz-k617",
    imagem: "https://a-static.mlcdn.com.br/280x210/teclado-magnetico-gamer-fizz-rgb-switch-magnetic-polling-rate-8k-redragon-preto-k617rgb-m/bftechchapeco/7631/d981390980951913271b6fda022a2a3a.jpeg",
    nome: "Redragon Fizz K617",
    categoria: "Teclados",
    selo: "Mini mecânico barato",
    icone: "⌨️",
    cor: "#ff6b4a",
    data: "2026-04-22",
    resumo: "Teclado 60% mecânico com keycaps bicolores e preço muito baixo. Bonito, compacto e surpreendente para o valor.",
    notas: { "Jogos": 7.5, "Digitação": 7.5, "Construção": 7.0, "Custo-benefício": 9.0 },
    pros: [
      "Preço muito baixo para um mecânico 60%",
      "Keycaps bicolores atraentes",
      "Compacto e leve"
    ],
    contras: [
      "RGB e software simples",
      "Sem sem-fio (só cabo)",
      "Estabilizadores medianos"
    ],
    specs: {
      "Formato": "60% compacto",
      "Switches": "Outemu (Red/Blue)",
      "Iluminação": "RGB",
      "Keycaps": "ABS bicolor",
      "Conexão": "USB-C"
    },
    analise: [
      "O Fizz K617 mostra que dá para ter um 60% mecânico bonito por muito pouco: keycaps bicolores, RGB e um formato compacto que agrada de cara. Para o primeiro compacto, o preço é imbatível.",
      "Os estabilizadores são apenas ok e o software é básico, além de não ter opção sem fio. Ainda assim, como porta de entrada barata ao mundo dos teclados compactos, entrega muito pelo que custa."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=redragon+fizz+k617&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/redragon-fizz-k617",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/redragon+fizz+k617/"
    }
  },
  {
    id: "corsair-k55-rgb",
    imagem: "https://a-static.mlcdn.com.br/280x210/teclado-gamer-corsair-core-k55-rgb-icue-rgb-usb-2-0-preto-ch-9226c65-br/kabum/593793/2ccb31b0d2c18c776bc4fd7e0fea723b.jpeg",
    nome: "Corsair K55 RGB Pro",
    categoria: "Teclados",
    selo: "Membrana com macros",
    icone: "⌨️",
    cor: "#ff6b4a",
    data: "2026-04-14",
    resumo: "Teclado de membrana silencioso com teclas de macro, RGB e resistência a respingos. Foco em conforto e recursos, não em toque mecânico.",
    notas: { "Jogos": 6.5, "Digitação": 6.5, "Construção": 7.0, "Custo-benefício": 7.5 },
    pros: [
      "Silencioso e confortável",
      "6 teclas de macro dedicadas",
      "Resistente a respingos e apoio de pulso"
    ],
    contras: [
      "Membrana, sem a precisão de mecânico",
      "Plástico simples",
      "RGB por zonas"
    ],
    specs: {
      "Formato": "Full-size + macros",
      "Switches": "Membrana",
      "Iluminação": "RGB por zonas",
      "Estrutura": "Plástico",
      "Conexão": "USB"
    },
    analise: [
      "O K55 RGB Pro é uma opção de membrana recheada: traz teclas de macro dedicadas, RGB, apoio de pulso e resistência a respingos. É silencioso e confortável para uso geral e para quem não quer barulho.",
      "Por ser membrana, falta a precisão e o retorno de um mecânico, e o acabamento é básico. Mas para quem valoriza silêncio, macros e um preço acessível, cumpre a proposta."
    ],
    links: {
      amazon: "https://www.amazon.com.br/s?k=corsair+k55+rgb+pro&tag=opinioestech-20",
      mercadolivre: "https://lista.mercadolivre.com.br/corsair-k55-rgb-pro",
      magalu: "https://www.magazinevoce.com.br/magazineopiniaotech/busca/corsair+k55+rgb+pro/"
    }
  }
];
