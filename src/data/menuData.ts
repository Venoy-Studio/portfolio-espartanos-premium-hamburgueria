import { BurgerItem, ContactInfo, DrinkItem, FAQItem, ReviewItem } from '../types';

export const contactData: ContactInfo = {
  name: 'Espartanos Burger · Taverna na Brasa',
  slogan: 'Forjado a Ferro, Fogo e Brasa Viva · O Banquete dos 300',
  phone: '(21) 98765-4321',
  phoneClean: '5521987654321',
  email: 'taverna@espartanosburger.com.br',
  address: 'Av. das Américas, 4200 - Bloco 8, Barra da Tijuca',
  neighborhood: 'Barra da Tijuca',
  cityState: 'Rio de Janeiro - RJ',
  cep: '22640-102',
  hoursWeekday: 'Terça a Domingo: 18h00 às 00h30',
  hoursWeekend: 'Sexta e Sábado: 18h00 às 01h30 (Fogueira até tarde)',
  deliveryTime: '30 a 45 min',
  instagramHandle: '@espartanos.taverna',
  instagramUrl: 'https://instagram.com',
  orderUrl: 'https://wa.me/5521987654321',
  whatsappMessageBase: 'Saudações, Taverna Espartanos! Gostaria de convocar um banquete:',
};

export const heroBurgers: BurgerItem[] = [
  {
    id: 'super-esparta',
    number: '01 / 04',
    name: 'Super Esparta (O Martelo de Leônidas)',
    titleLine1: 'SUPER',
    titleLine2: 'ESPARTA',
    price: 41.00,
    category: 'artesanais',
    badge: '👑 Campeão do Banquete',
    image: '/assets/hero_chicken_fries_transparent-0m7LGxjD.png',
    alt: 'Hambúrguer Super Esparta com batatas douradas na tábua de madeira rústica',
    description: 'Pão brioche gold tostado na chapa com manteiga de garrafa, 2 blends brutais de 90g Angus selados na brasa viva, queijo gouda derretido, provolone defumado, gorgonzola nobre, cascata de cheddar cremoso Polenghi, cebola caramelizada artesanal, bacon fatiado crocante estalando e maionese secreta da taverna. Acompanha porção de batatas rústicas na tábua.',
    ingredients: [
      'Pão brioche artesanal',
      'Duplo blend 180g Angus',
      '4 Queijos Nobres',
      'Gouda & Provolone',
      'Gorgonzola da Taverna',
      'Cheddar cremoso Polenghi',
      'Cebola caramelizada',
      'Bacon fatiado crocante',
      'Maionese Espartanos'
    ],
    caloriesOrHighlight: '4 Queijos Nobres & 180g Angus na Brasa',
    isHeroFeatured: true,
    preparationTime: '15-20 min'
  },
  {
    id: 'esparta-300',
    number: '02 / 04',
    name: 'Esparta 300 (O Machado Bárbaro)',
    titleLine1: 'ESPARTA',
    titleLine2: '300',
    price: 50.00,
    category: 'artesanais',
    badge: '⚔️ O Mais Brutal dos 300',
    image: '/assets/burger_bbq_bacon_transparent-CaAKYJFr.png',
    alt: 'Hambúrguer Esparta 300 com disco de provolone empanado e queijo coalho',
    description: 'Criado para saciar a fome dos guerreiros mais vorazes: pão brioche amanteigado, blend maciço de 180g Angus grelhado no fogo direto, fatia grossa de queijo coalho chapeado com crosta dourada, disco artesanal de queijo provolone empanado na farinha Panko ultra crocante, cheddar Polenghi, tiras generosas de bacon defumado e geleia de pimenta.',
    ingredients: [
      'Blend 180g Angus na brasa',
      'Disco de provolone empanado',
      'Queijo coalho chapeado',
      'Cheddar fatiado Polenghi',
      'Bacon defumado em tiras',
      'Geleia de pimenta biquinho'
    ],
    caloriesOrHighlight: 'Provolone Empanado & Coalho Chapeado',
    isHeroFeatured: true,
    preparationTime: '18 min'
  },
  {
    id: 'esparta-gouda',
    number: '03 / 04',
    name: 'Esparta Gouda (O Escudo de Bronze)',
    titleLine1: 'ESPARTA',
    titleLine2: 'GOUDA',
    price: 38.00,
    category: 'artesanais',
    badge: '🛡️ Crocância dos Deuses',
    image: '/assets/burger_smash_cheddar_transparent-DOjPXNxt.png',
    alt: 'Hambúrguer Esparta Gouda com queijo derretido e onion rings na brasa',
    description: 'Pão brioche selado com gergelim negro e branco, blend 180g Angus de extrema suculência, queijo gouda legítimo derretido até a borda, banho de cheddar Polenghi cremoso, coroa de onion rings crocantes e molho barbecue rústico com fumaça líquida de macieira.',
    ingredients: [
      'Pão brioche gergelim',
      'Blend 180g Angus',
      'Queijo Gouda derretido',
      'Cheddar Polenghi',
      'Onion Rings estalando',
      'Barbecue rústico defumado'
    ],
    caloriesOrHighlight: 'Blend 180g & Onion Rings Crocantes',
    isHeroFeatured: true,
    preparationTime: '15 min'
  },
  {
    id: 'esparta-picante',
    number: '04 / 04',
    name: 'Esparta Picante (O Fogo de Valhalla)',
    titleLine1: 'ESPARTA',
    titleLine2: 'PICANTE',
    price: 36.00,
    category: 'artesanais',
    badge: '🔥 Agridoce & Fogo Nórdico',
    image: '/assets/burger_bbq_bacon_transparent-CaAKYJFr.png',
    alt: 'Hambúrguer Esparta Picante no pão australiano com queijo coalho e bacon',
    description: 'Pão australiano macio e escuro com leve toque de malte e mel, blend suculento 180g Angus com crostinha Maillard, generoso queijo de coalho chapeado na grelha, tiras de bacon crocante e a picância viciante da nossa geleia artesanal de pimenta.',
    ingredients: [
      'Pão australiano de malte',
      'Blend 180g Angus grelhado',
      'Queijo coalho tostado na brasa',
      'Bacon fatiado crocante',
      'Geleia de pimenta da taverna'
    ],
    caloriesOrHighlight: 'Pão Australiano & Queijo Coalho',
    isHeroFeatured: true,
    preparationTime: '15 min'
  }
];

export const allMenuItems: BurgerItem[] = [
  ...heroBurgers,
  {
    id: 'rei-de-esparta',
    name: 'Rei de Esparta (Banquete Duplo 360g)',
    price: 41.00,
    category: 'artesanais',
    badge: '🥩 360g de Carne Angus',
    image: '/assets/hero_chicken_fries_transparent-0m7LGxjD.png',
    alt: 'Hambúrguer Rei de Esparta com 2 blends de 180g e farofa de bacon',
    description: 'O maior monumento da nossa taverna: 2 blends monumentais de 180g (totalizando 360g de carne Angus grelhada na brasa viva), dose dupla de cheddar fatiado Polenghi, cachoeira de cheddar cremoso derretido, tempestade de farofa crocante de bacon artesanal e maionese da casa no pão brioche.',
    ingredients: [
      '2 Blends 180g Angus (360g)',
      'Duplo Cheddar fatiado Polenghi',
      'Cachoeira de Cheddar cremoso',
      'Farofa crocante de bacon',
      'Maionese rústica'
    ],
    caloriesOrHighlight: '360g de Pura Força Carnívora',
    preparationTime: '18 min'
  },
  {
    id: 'esparta-brutal',
    name: 'Esparta Brutal (O Machado Duplo)',
    price: 39.00,
    category: 'artesanais',
    badge: '🍞 Pão Australiano Escuro',
    image: '/assets/burger_smash_cheddar_transparent-DOjPXNxt.png',
    alt: 'Hambúrguer Esparta Brutal no pão australiano com cheddar e cebola caramelizada',
    description: 'Pão australiano denso e saboroso, 2 smashs de 90g prensados na chapa incandescente até criar crosta grossa, duplo cheddar cremoso e fatiado Polenghi, cebola caramelizada na manteiga, fatias de bacon e farofa crocante.',
    ingredients: [
      'Pão australiano artesanal',
      '2 Blends smash 90g',
      'Duplo Cheddar Polenghi',
      'Cebola caramelizada',
      'Farofa de bacon defumado',
      'Fatias de bacon crocante'
    ],
    caloriesOrHighlight: 'Australiano & Duplo Smash na Crosta',
    preparationTime: '15 min'
  },
  {
    id: 'esparta-catu',
    name: 'Esparta Catupiry (Ouro dos Vikings)',
    price: 36.00,
    category: 'artesanais',
    badge: '🧀 Catupiry Real Empanado',
    image: '/assets/burger_truffle_swiss_transparent-RjoH8K_7.png',
    alt: 'Hambúrguer com blend 180g e disco de Catupiry empanado crocante',
    description: 'Pão brioche dourado, blend artesanal 180g Angus, disco empanado na farinha Panko de Catupiry Original transbordando cremosidade ao morder, cebola caramelizada, tiras de bacon crocante e maionese especial de ervas da taverna.',
    ingredients: [
      'Blend 180g Angus',
      'Disco de Catupiry Original empanado',
      'Cebola caramelizada',
      'Bacon crocante',
      'Maionese da taverna'
    ],
    caloriesOrHighlight: 'Cremosidade Absoluta',
    preparationTime: '16 min'
  },
  {
    id: 'esparta-provo',
    name: 'Esparta Provô (A Muralha de Queijo)',
    price: 36.00,
    category: 'artesanais',
    badge: '🔥 Provolone Grelhado',
    image: '/assets/burger_smash_cheddar_transparent-DOjPXNxt.png',
    alt: 'Hambúrguer artesanal com disco de provolone empanado e cheddar',
    description: 'Pão brioche selado, blend 180g Angus, disco de provolone temperado e empanado com casquinha estalando, cheddar cremoso Polenghi derretido por cima, bacon fatiado e maionese da casa.',
    ingredients: [
      'Blend 180g Angus',
      'Disco de provolone empanado',
      'Cheddar cremoso Polenghi',
      'Bacon fatiado defumado',
      'Maionese da casa'
    ],
    caloriesOrHighlight: 'Provolone Crocante & Cheddar',
    preparationTime: '15 min'
  },
  {
    id: 'esparta-gorgo',
    name: 'Esparta Gorgô (A Fúria Nórdica)',
    price: 36.00,
    category: 'artesanais',
    badge: '🧀 Gorgonzola Intenso',
    image: '/assets/burger_truffle_swiss_transparent-RjoH8K_7.png',
    alt: 'Hambúrguer Esparta Gorgô com queijo gorgonzola e bacon em cubos',
    description: 'Para quem aprecia sabor marcante e rústico: pão brioche artesanal, blend 180g Angus no ponto rosado, creme denso de queijo gorgonzola nobre italiano, chuva de cubos dourados de bacon crocante e maionese suave.',
    ingredients: [
      'Pão brioche artesanal',
      'Blend 180g Angus',
      'Creme de gorgonzola nobre',
      'Bacon em cubos generosos',
      'Maionese suave'
    ],
    caloriesOrHighlight: 'Gorgonzola Nobre & Bacon em Cubos',
    preparationTime: '15 min'
  },
  {
    id: 'esparta-guerreiro',
    name: 'Esparta Guerreiro (Smash de Batalha)',
    price: 36.00,
    category: 'smash',
    badge: '⚡ Smash Duplo',
    image: '/assets/hero_chicken_fries_transparent-0m7LGxjD.png',
    alt: 'Hambúrguer smash duplo com farofa de bacon e cebola caramelizada',
    description: 'Dois discos smash de 90g prensados com prensa pesada de ferro fundido, crosta crocante intensa, queijo cheddar cremoso Polenghi transbordando, farofa crocante de bacon e cebola caramelizada no pão brioche gold.',
    ingredients: [
      'Pão brioche gold',
      '2 Blends smash 90g',
      'Cheddar cremoso Polenghi',
      'Farofa de bacon',
      'Cebola caramelizada'
    ],
    caloriesOrHighlight: 'Smash Duplo Crocante',
    preparationTime: '12 min'
  },
  // Acompanhamentos
  {
    id: 'batata-cheddar-p',
    name: 'Tábua de Batatas com Cheddar & Bacon — P',
    price: 20.00,
    category: 'acompanhamentos',
    badge: 'Serve 1 a 2 Guerreiros',
    image: '/assets/hero_chicken_fries_transparent-0m7LGxjD.png',
    alt: 'Batata rústica dourada com cheddar cremoso Polenghi e bacon',
    description: 'Batatas palito importadas McCain fritas no ponto exato, cobertas com cheddar Polenghi cremoso derretido e cubos crocantes de bacon defumado.',
    ingredients: [
      'Batata palito McCain 300g',
      'Cheddar Polenghi derretido',
      'Bacon crocante em cubos'
    ],
    caloriesOrHighlight: 'Serve até 2 pessoas',
    preparationTime: '10 min'
  },
  {
    id: 'batata-cheddar-g',
    name: 'O Grande Banquete de Batatas — Tábua G (600g)',
    price: 32.00,
    category: 'acompanhamentos',
    badge: '⚔️ Para o Esquadrão · 4 Pessoas',
    image: '/assets/hero_chicken_fries_transparent-0m7LGxjD.png',
    alt: 'Porção grande de batata com cheddar Polenghi e bacon crocante',
    description: 'Generosa tábua de 600g de batatas estalando de crocantes, dose dupla de cheddar cremoso Polenghi e montanha de bacon crocante.',
    ingredients: [
      'Batatas McCain 600g',
      'Dose dupla de cheddar Polenghi',
      'Chuva de bacon crocante'
    ],
    caloriesOrHighlight: 'Serve até 4 guerreiros',
    preparationTime: '12 min'
  },
  {
    id: 'onion-rings',
    name: 'Anéis de Fogo (Onion Rings Rústicas - 10 unid.)',
    price: 15.00,
    category: 'acompanhamentos',
    badge: 'Crocância Máxima',
    image: '/assets/burger_smash_cheddar_transparent-DOjPXNxt.png',
    alt: 'Anéis de cebola onion rings crocantes com molho barbecue',
    description: '10 anéis de cebola gigantes empanados com tempero rústico. Acompanha potinho de barbecue defumado na lenha.',
    ingredients: [
      '10 anéis de cebola temperados',
      'Barbecue defumado artesanal'
    ],
    caloriesOrHighlight: '10 unidades estalando',
    preparationTime: '8 min'
  },
  // Combos
  {
    id: 'combo-pp',
    name: 'Combo Banquete Individual do Soldado (PP)',
    price: 25.00,
    category: 'combos',
    badge: '🔥 Ração Individual de Combate',
    image: '/assets/burger_bbq_bacon_transparent-CaAKYJFr.png',
    alt: 'Combo individual com burger artesanal, batata e bebida',
    description: '1 Hambúrguer artesanal suculento montado na hora + batata frita coberta com bacon, calabresa fatiada e cheddar cremoso + 1 Guaracamp estupidamente gelado.',
    ingredients: [
      '1 Burger artesanal na brasa',
      'Batata frita com cheddar, bacon e calabresa',
      '1 Guaracamp bem gelado 285ml'
    ],
    caloriesOrHighlight: 'Burger + Batata com Calabresa + Bebida',
    preparationTime: '15 min'
  },
  {
    id: 'combo-p',
    name: 'Banquete de Valhalla para Dois (Combo P)',
    price: 40.00,
    category: 'combos',
    badge: '🛡️ Banquete dos Reis · Para Dois',
    image: '/assets/hero_chicken_fries_transparent-0m7LGxjD.png',
    alt: 'Combo para dois com 2 burgers, batata frita reforçada e bebidas',
    description: '2 Hambúrgueres artesanais nobres grelhados na brasa + 1 tábua grande de batatas fritas com bacon crocante, calabresa defumada e queijo cheddar Polenghi + 2 Guaracamps trincando.',
    ingredients: [
      '2 Hambúrgueres artesanais',
      '1 Tábua grande de batata com cheddar, bacon e calabresa',
      '2 Guaracamps trincando'
    ],
    caloriesOrHighlight: '2 Burgers + Batata Gigante + 2 Bebidas',
    preparationTime: '18 min'
  }
];

export const drinksList: DrinkItem[] = [
  {
    id: 'imperio',
    name: 'Cerveja Império Lager Puro Malte',
    brand: 'A Ceva Dourada da Taverna',
    volume: 'Long Neck 355ml',
    price: 12.00,
    image: '/assets/drink_imperio-DNTM3Zjd.jpg',
    tag: '🍻 Trincando na Neve',
    alt: 'Cerveja Império Puro Malte Lager 600ml gelada com lúpulo selecionado'
  },
  {
    id: 'pink-moon',
    name: 'Pink Moon Chopp Red Draft',
    brand: 'O Hidromel Vermelho dos Deuses',
    volume: 'Garrafa 600ml',
    price: 18.00,
    image: '/assets/drink_pink_moon-BTpfYTRf.jpg',
    tag: '⚡ Chopp Artesanal',
    alt: 'Pink Moon Red Draft Chopp 600ml com frutas vermelhas e gelo'
  },
  {
    id: 'coca-cola',
    name: 'Coca-Cola Original',
    brand: 'Estupidamente Gelada',
    volume: 'Lata 350ml / 2L',
    price: 8.00,
    image: '/assets/drink_coca-Dnxg9b5d.jpg',
    tag: '❄️ Ponto Zero Grau',
    alt: 'Coca-Cola Sabor Original estupidamente gelada com gelo e limão'
  },
  {
    id: 'fanta',
    name: 'Fanta Laranja',
    brand: 'Cítrica & Refrescante',
    volume: '1.5L / Lata 350ml',
    price: 8.00,
    image: '/assets/drink_fanta-eHDWk3on.jpg',
    tag: '🍊 Gelada com Gelo',
    alt: 'Fanta Laranja Original gelada com fatias de laranja'
  }
];

export const customerReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rodrigo "Thor" Medeiros',
    location: 'Barra da Tijuca, RJ',
    rating: 5,
    comment: 'Bicho, o Super Esparta é um verdadeiro martelo na fome! O blend vem vermelho no centro e a crosta estalando na lenha. Comi rezando pros deuses nórdicos. Chegou aqui na Barra fervendo de quente.',
    favoriteBurger: 'Super Esparta',
    date: 'Ontem',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-2',
    author: 'Camila Fernandes',
    location: 'Recreio dos Bandeirantes, RJ',
    rating: 5,
    comment: 'Atendimento pelo WhatsApp super rápido e sem frescura de robô travado. O Esparta Picante com queijo coalho e geleia de pimenta no pão australiano é a melhor combinação da cidade. Batata sequinha e crocante!',
    favoriteBurger: 'Esparta Picante',
    date: 'Há 2 dias',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-3',
    author: 'Lucas "Bárbaro" Siqueira',
    location: 'Jacarepaguá, RJ',
    rating: 5,
    comment: 'O Esparta 300 com o disco de provolone empanado crocante é uma arma pesada. Nunca comi um burger tão brutal e saboroso. A galera aqui do escritório virou fã incondicional!',
    favoriteBurger: 'Esparta 300',
    date: 'Há 5 dias',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Como funciona a forja do blend e o ponto da carne?',
    answer: 'Nossos burgers são forjados com 100% carne bovina Angus fresca selecionada diariamente. O padrão da casa é o ponto perfeito do guerreiro: crosta tostada e caramelizada por fora, centro suculento e rosado por dentro. Se preferir bem passado ou ao ponto mais passado, basta nos avisar no WhatsApp!'
  },
  {
    id: 'faq-2',
    question: 'Quanto tempo leva para o banquete chegar no meu acampamento?',
    answer: 'Nosso exército de entregadores entrega em média entre 30 e 45 minutos. Nossos pacotes contam com caixas térmicas com respiro inteligente, para que a carne chegue quente e o pão e batatas não fiquem moles com vapor.'
  },
  {
    id: 'faq-3',
    question: 'Como faço para pedir direto no WhatsApp da Taverna?',
    answer: 'Você pode selecionar seus itens aqui pela página, clicar em "Finalizar no WhatsApp" no seu carrinho e o sistema cria a mensagem completa formatada com itens, total e endereço. Aí é só confirmar com o nosso taverneiro!'
  },
  {
    id: 'faq-4',
    question: 'Quais tributos (formas de pagamento) são aceitos?',
    answer: 'Aceitamos Pix (com chave direta na hora), Cartão de Crédito e Débito no balcão ou na entrega, Vale-Refeição (VR, Sodexo, Ticket, Alelo) e Dinheiro em espécie (favor avisar se precisa de troco).'
  },
  {
    id: 'faq-5',
    question: 'Posso retirar meu burger direto no balcão da Taverna?',
    answer: 'Sim, nobre guerreiro! Nosso balcão fica na Av. das Américas, 4200 - Bloco 8, Barra da Tijuca. Avisando pelo WhatsApp com 15 minutos de antecedência, seu banquete estará te esperando quentinho na embalagem.'
  }
];
