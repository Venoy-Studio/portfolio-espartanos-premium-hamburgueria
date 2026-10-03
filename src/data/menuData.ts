import { BurgerItem, ContactInfo, DrinkItem, FAQItem, ReviewItem } from '../types';

export const contactData: ContactInfo = {
  name: 'Espartanos Premium Hamburgueria',
  slogan: 'A Força de Esparta em Cada Mordida · Artesanal na Brasa',
  phone: '(21) 98765-4321',
  phoneClean: '5521987654321',
  email: 'contato@espartanosburger.com.br',
  address: 'Av. das Américas, 4200 - Bloco 8, Barra da Tijuca',
  neighborhood: 'Barra da Tijuca',
  cityState: 'Rio de Janeiro - RJ',
  cep: '22640-102',
  hoursWeekday: 'Terça a Domingo: 18h00 às 00h30',
  hoursWeekend: 'Sexta e Sábado: 18h00 às 01h30',
  deliveryTime: '30 a 45 min',
  instagramHandle: '@espartanos.premium',
  instagramUrl: 'https://instagram.com',
  orderUrl: 'https://wa.me/5521987654321',
  whatsappMessageBase: 'Olá Espartanos Burger! Gostaria de fazer um pedido:',
};

export const heroBurgers: BurgerItem[] = [
  {
    id: 'super-esparta',
    number: '01 / 04',
    name: 'Super Esparta',
    titleLine1: 'SUPER',
    titleLine2: 'ESPARTA',
    price: 41.00,
    category: 'artesanais',
    badge: 'Mais Pedido · Campeão',
    image: '/assets/hero_chicken_fries_transparent-0m7LGxjD.png',
    alt: 'Hambúrguer Super Esparta com batatas douradas na tábua de madeira',
    description: 'Pão brioche gold tostado na manteiga, 2 suculentos blends de 90g Angus, queijo gouda derretido, provolone defumado, gorgonzola italiano, cheddar Polenghi cremoso, cebola caramelizada artesanal, bacon fatiado crocante e maionese secreta da casa. Acompanha porção de batatas rústicas.',
    ingredients: [
      'Pão brioche gold',
      '2 blends 90g Angus',
      'Queijo Gouda',
      'Provolone defumado',
      'Gorgonzola italiano',
      'Cheddar cremoso Polenghi',
      'Cebola caramelizada',
      'Bacon fatiado crocante',
      'Maionese Espartanos'
    ],
    caloriesOrHighlight: '4 Queijos Nobres & Duplo Blend 180g',
    isHeroFeatured: true,
    preparationTime: '15-20 min'
  },
  {
    id: 'esparta-gouda',
    number: '02 / 04',
    name: 'Esparta Gouda',
    titleLine1: 'ESPARTA',
    titleLine2: 'GOUDA',
    price: 38.00,
    category: 'artesanais',
    badge: 'Crocância Máxima',
    image: '/assets/burger_smash_cheddar_transparent-DOjPXNxt.png',
    alt: 'Hambúrguer Esparta Gouda com queijo gouda derretido e onion rings crocantes',
    description: 'Pão brioche com gergelim negro e branco selado na chapa, blend artesanal de 180g Angus no ponto perfeito, generosa fatia de queijo gouda derretido, banho de cheddar cremoso Polenghi, anéis de cebola onion rings ultra crocantes e molho barbecue defumado em lenha de macieira.',
    ingredients: [
      'Pão brioche gergelim',
      'Blend 180g Angus',
      'Queijo Gouda nobre',
      'Cheddar Polenghi',
      'Onion Rings sequinhas',
      'Barbecue artesanal'
    ],
    caloriesOrHighlight: 'Blend 180g & Onion Rings',
    isHeroFeatured: true,
    preparationTime: '15 min'
  },
  {
    id: 'esparta-gorgo',
    number: '03 / 04',
    name: 'Esparta Gorgô',
    titleLine1: 'ESPARTA',
    titleLine2: 'GORGÔ',
    price: 36.00,
    category: 'artesanais',
    badge: 'Sabor Marcante',
    image: '/assets/burger_truffle_swiss_transparent-RjoH8K_7.png',
    alt: 'Hambúrguer Esparta Gorgô com queijo gorgonzola e bacon em cubos',
    description: 'Para apreciadores de personalidade forte: pão brioche amanteigado, blend de 180g moído na hora e selado na brasa, creme especial de queijo gorgonzola nobre, cubos generosos de bacon defumado crocante e maionese suave de ervas frescas da casa.',
    ingredients: [
      'Pão brioche gergelim',
      'Blend 180g Angus',
      'Gorgonzola importado',
      'Bacon em cubos dourados',
      'Maionese da casa'
    ],
    caloriesOrHighlight: 'Intensidade & Bacon em Cubos',
    isHeroFeatured: true,
    preparationTime: '15 min'
  },
  {
    id: 'esparta-picante',
    number: '04 / 04',
    name: 'Esparta Picante',
    titleLine1: 'ESPARTA',
    titleLine2: 'PICANTE',
    price: 36.00,
    category: 'artesanais',
    badge: 'Agridoce & Defumado',
    image: '/assets/burger_bbq_bacon_transparent-CaAKYJFr.png',
    alt: 'Hambúrguer Esparta Picante no pão australiano com queijo coalho e pimenta',
    description: 'Pão australiano com leve toque de mel, blend 180g Angus grelhado no fogo, generosa fatia de queijo de coalho chapeado com crostinha dourada, bacon fatiado crocante e a incomparável geleia de pimenta biquinho artesanal levemente picante.',
    ingredients: [
      'Pão australiano macio',
      'Blend 180g Angus',
      'Queijo coalho chapeado',
      'Bacon fatiado',
      'Geleia de pimenta artesanal'
    ],
    caloriesOrHighlight: 'Pão Australiano & Queijo Coalho',
    isHeroFeatured: true,
    preparationTime: '15 min'
  }
];

export const allMenuItems: BurgerItem[] = [
  ...heroBurgers,
  {
    id: 'esparta-300',
    name: 'Esparta 300 (Guerreiro Supremo)',
    price: 50.00,
    category: 'artesanais',
    badge: 'O Mais Brutal · 300g',
    image: '/assets/burger_bbq_bacon_transparent-CaAKYJFr.png',
    alt: 'Hambúrguer Esparta 300 com queijos nobres e provolone empanado',
    description: 'Inspirado nos 300 de Esparta: pão brioche artesanal, blend 180g Angus, queijo cheddar fatiado Polenghi, queijo coalho na chapa, disco de provolone empanado ultra crocante, tiras de bacon e geleia de pimenta.',
    ingredients: [
      'Blend 180g Angus',
      'Cheddar Polenghi',
      'Queijo Coalho Chapeado',
      'Provolone Empanado Crocante',
      'Bacon fatiado crocante',
      'Geleia de pimenta'
    ],
    caloriesOrHighlight: 'Provolone Empanado & Coalho',
    preparationTime: '20 min'
  },
  {
    id: 'rei-de-esparta',
    name: 'Rei de Esparta (Duplo 360g)',
    price: 41.00,
    category: 'artesanais',
    badge: 'Duplo 180g · 360g Carne',
    image: '/assets/hero_chicken_fries_transparent-0m7LGxjD.png',
    alt: 'Hambúrguer Rei de Esparta com 2 blends de 180g e farofa de bacon',
    description: 'Pão brioche amanteigado, 2 suculentos blends de 180g (total 360g de carne Angus), dobro de cheddar fatiado Polenghi, cascata de cheddar cremoso, chuva de farofa crocante de bacon artesanal e maionese Espartanos.',
    ingredients: [
      '2 Blends 180g (360g Angus)',
      'Duplo Cheddar fatiado',
      'Cascata de Cheddar cremoso',
      'Farofa crocante de bacon',
      'Maionese Espartanos'
    ],
    caloriesOrHighlight: '360g de Carne Angus Certificada',
    preparationTime: '18 min'
  },
  {
    id: 'esparta-brutal',
    name: 'Esparta Brutal',
    price: 39.00,
    category: 'artesanais',
    badge: 'Pão Australiano',
    image: '/assets/burger_smash_cheddar_transparent-DOjPXNxt.png',
    alt: 'Hambúrguer Esparta Brutal no pão australiano com cheddar e cebola caramelizada',
    description: 'Pão australiano especial, 2 blends smash de 90g com crostinha Maillard, cheddar cremoso Polenghi, farofa de bacon defumado, queijo cheddar fatiado, cebola caramelizada e fatias generosas de bacon.',
    ingredients: [
      'Pão australiano macio',
      '2 Blends 90g',
      'Duplo Cheddar Polenghi',
      'Farofa de Bacon',
      'Bacon fatiado crocante',
      'Cebola caramelizada'
    ],
    caloriesOrHighlight: 'Australiano & Duplo Smash',
    preparationTime: '15 min'
  },
  {
    id: 'esparta-catu',
    name: 'Esparta Catupiry',
    price: 36.00,
    category: 'artesanais',
    badge: 'Catupiry Original Empanado',
    image: '/assets/burger_truffle_swiss_transparent-RjoH8K_7.png',
    alt: 'Hambúrguer com blend 180g e disco de Catupiry empanado',
    description: 'Pão brioche com gergelim, blend artesanal 180g Angus na brasa, disco crocante de Catupiry Original empanado e derretendo por dentro, cebola caramelizada, bacon fatiado crocante e maionese temperada da casa.',
    ingredients: [
      'Pão brioche gergelim',
      'Blend 180g Angus',
      'Disco de Catupiry empanado',
      'Cebola caramelizada',
      'Bacon crocante',
      'Maionese temperada'
    ],
    caloriesOrHighlight: 'Cremosidade do Catupiry Real',
    preparationTime: '16 min'
  },
  {
    id: 'esparta-provo',
    name: 'Esparta Provô',
    price: 36.00,
    category: 'artesanais',
    badge: 'Provolone Nobre',
    image: '/assets/burger_smash_cheddar_transparent-DOjPXNxt.png',
    alt: 'Hambúrguer artesanal com disco de provolone empanado e cheddar',
    description: 'Pão brioche selado, blend 180g Angus, disco de queijo provolone empanado dourado e crocante, cobertura de cheddar cremoso Polenghi, bacon fatiado e maionese artesanal.',
    ingredients: [
      'Blend 180g Angus',
      'Provolone empanado sequinho',
      'Cheddar cremoso',
      'Bacon fatiado',
      'Maionese Espartanos'
    ],
    caloriesOrHighlight: 'Provolone Empanado & Cheddar',
    preparationTime: '15 min'
  },
  {
    id: 'esparta-guerreiro',
    name: 'Esparta Guerreiro',
    price: 36.00,
    category: 'smash',
    badge: 'Smash Duplo Perfeito',
    image: '/assets/hero_chicken_fries_transparent-0m7LGxjD.png',
    alt: 'Hambúrguer smash duplo com farofa de bacon e cebola caramelizada',
    description: 'Pão brioche gold fofinho, 2 blends smash de 90g prensados com crosta intensa, muito cheddar Polenghi cremoso, chuva de farofa de bacon, cebola caramelizada e bacon crocante.',
    ingredients: [
      'Pão brioche gold',
      '2 Blends smash 90g',
      'Cheddar cremoso Polenghi',
      'Farofa de Bacon',
      'Cebola caramelizada',
      'Bacon fatiado'
    ],
    caloriesOrHighlight: 'Smash Duplo Crocante',
    preparationTime: '12 min'
  },
  // Acompanhamentos
  {
    id: 'batata-cheddar-p',
    name: 'Batata com Cheddar e Bacon — P',
    price: 20.00,
    category: 'acompanhamentos',
    badge: 'Serve até 2 pessoas',
    image: '/assets/hero_chicken_fries_transparent-0m7LGxjD.png',
    alt: 'Batata palito McCain dourada com cheddar cremoso Polenghi e bacon',
    description: 'Batata palito importada McCain sequinha e crocante por fora e macia por dentro, coberta com autêntico cheddar cremoso Polenghi derretido e bacon em cubos dourados.',
    ingredients: [
      'Batata palito McCain 300g',
      'Cheddar Polenghi cremoso',
      'Bacon crocante em cubos'
    ],
    caloriesOrHighlight: 'Serve até 2 guerreiros',
    preparationTime: '10 min'
  },
  {
    id: 'batata-cheddar-g',
    name: 'Batata com Cheddar e Bacon — G (Tábua)',
    price: 32.00,
    category: 'acompanhamentos',
    badge: 'Para Compartilhar · 4 Pessoas',
    image: '/assets/hero_chicken_fries_transparent-0m7LGxjD.png',
    alt: 'Porção grande de batata com cheddar Polenghi e bacon crocante',
    description: 'Generosa porção de 600g de batatas McCain crocantes, cascata dupla de cheddar Polenghi e chuva generosa de bacon crocante.',
    ingredients: [
      'Batata palito McCain 600g',
      'Dose dupla de cheddar Polenghi',
      'Bacon crocante em abundância'
    ],
    caloriesOrHighlight: 'Serve até 4 pessoas',
    preparationTime: '12 min'
  },
  {
    id: 'onion-rings',
    name: 'Onion Rings Espartanas (10 unid.)',
    price: 15.00,
    category: 'acompanhamentos',
    badge: 'Crocantes & Douradas',
    image: '/assets/burger_smash_cheddar_transparent-DOjPXNxt.png',
    alt: 'Anéis de cebola onion rings crocantes com molho barbecue',
    description: '10 unidades de onion rings sequinhas, com empanamento temperado super crocante. Acompanha potinho de molho barbecue defumado da casa.',
    ingredients: [
      '10 anéis de cebola empanados',
      'Molho barbecue defumado 50ml'
    ],
    caloriesOrHighlight: '10 unidades crocantes',
    preparationTime: '8 min'
  },
  // Combos
  {
    id: 'combo-pp',
    name: 'Combo Individual Guerreiro (PP)',
    price: 25.00,
    category: 'combos',
    badge: 'Individual Econômico',
    image: '/assets/burger_bbq_bacon_transparent-CaAKYJFr.png',
    alt: 'Combo individual com burger artesanal, batata e bebida',
    description: '1 Hambúrguer artesanal à escolha + porção individual de batata frita coberta com bacon, calabresa e molho cheddar cremoso + 1 Guaracamp estupidamente gelado.',
    ingredients: [
      '1 Hambúrguer artesanal',
      'Batata frita com cheddar, bacon e calabresa',
      '1 Guaracamp gelado 285ml'
    ],
    caloriesOrHighlight: 'Burger + Batata com Bacon + Bebida',
    preparationTime: '15 min'
  },
  {
    id: 'combo-p',
    name: 'Combo Banquete de Esparta (Para Dois)',
    price: 40.00,
    category: 'combos',
    badge: 'Casal / Para Dois',
    image: '/assets/hero_chicken_fries_transparent-0m7LGxjD.png',
    alt: 'Combo para dois com 2 burgers, batata frita reforçada e bebidas',
    description: '2 Hambúrgueres artesanais montados na hora + 1 porção grande de batata frita com bacon crocante, calabresa fatiada e molho cheddar Polenghi + 2 Guaracamps bem gelados.',
    ingredients: [
      '2 Hambúrgueres artesanais',
      '1 Batata grande com cheddar, bacon e calabresa',
      '2 Guaracamps gelados'
    ],
    caloriesOrHighlight: '2 Burgers + Batata Gigante + 2 Bebidas',
    preparationTime: '18 min'
  }
];

export const drinksList: DrinkItem[] = [
  {
    id: 'coca-cola',
    name: 'Coca-Cola Original',
    brand: 'The Coca-Cola Company',
    volume: 'Lata 350ml / 2L',
    price: 8.00,
    image: '/assets/drink_coca-Dnxg9b5d.jpg',
    tag: 'Estupidamente Gelada',
    alt: 'Coca-Cola Sabor Original estupidamente gelada com gelo e limão'
  },
  {
    id: 'fanta',
    name: 'Fanta Laranja',
    brand: 'Fanta',
    volume: '1.5L / Lata 350ml',
    price: 8.00,
    image: '/assets/drink_fanta-eHDWk3on.jpg',
    tag: 'Frutada & Cítrica',
    alt: 'Fanta Laranja Original gelada com fatias de laranja'
  },
  {
    id: 'pink-moon',
    name: 'Pink Moon Chopp Red Draft',
    brand: 'Pink Moon Cervejaria',
    volume: 'Garrafa 600ml',
    price: 18.00,
    image: '/assets/drink_pink_moon-BTpfYTRf.jpg',
    tag: 'Chopp Artesanal',
    alt: 'Pink Moon Red Draft Chopp 600ml com frutas vermelhas e gelo'
  },
  {
    id: 'imperio',
    name: 'Cerveja Império Lager Puro Malte',
    brand: 'Império Cervejaria',
    volume: 'Garrafa Long Neck 355ml',
    price: 12.00,
    image: '/assets/drink_imperio-DNTM3Zjd.jpg',
    tag: 'Puro Malte Dourada',
    alt: 'Cerveja Império Puro Malte Lager 600ml gelada com lúpulo selecionado'
  }
];

export const customerReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rodrigo Medeiros',
    location: 'Barra da Tijuca, RJ',
    rating: 5,
    comment: 'Melhor burger da Zona Oeste sem sombra de dúvida! O Super Esparta é inacreditável de suculento, os 4 queijos casam perfeitamente e a carne vem no ponto rosadinho exato. A embalagem térmica é impecável, chegou pelando de quente.',
    favoriteBurger: 'Super Esparta',
    date: 'Ontem',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-2',
    author: 'Camila Fernandes',
    location: 'Recreio dos Bandeirantes, RJ',
    rating: 5,
    comment: 'Pedi pelo WhatsApp e o atendimento foi super atencioso e rápido. O Esparta Picante com queijo coalho e geleia de pimenta no pão australiano é uma obra de arte! Batata super sequinha, zero óleo.',
    favoriteBurger: 'Esparta Picante',
    date: 'Há 3 dias',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'rev-3',
    author: 'Lucas Siqueira',
    location: 'Jacarepaguá, RJ',
    rating: 5,
    comment: 'O Esparta 300 é gigante de verdade, o provolone empanado vem estalando de crocante. Já virei cliente fiel de todas as sextas-feiras com a galera da empresa. Parabéns pelo padrão absurdo!',
    favoriteBurger: 'Esparta 300',
    date: 'Há 1 semana',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80'
  }
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Qual é o tempo médio de entrega no delivery?',
    answer: 'Nosso tempo médio de entrega é de 30 a 45 minutos. Montamos e grelhamos todos os burgers na hora, e despachamos em embalagens térmicas seladas que garantem temperatura e crocância até a sua mesa.'
  },
  {
    id: 'faq-2',
    question: 'Como faço para pedir direto pelo WhatsApp?',
    answer: 'É muito simples e rápido! Você pode escolher seus produtos aqui pelo cardápio, adicionar ao carrinho e clicar em "Finalizar no WhatsApp". Sua mensagem já vai formatada com os itens, total e endereço para confirmação imediata da nossa equipe.'
  },
  {
    id: 'faq-3',
    question: 'Quais são as formas de pagamento aceitas?',
    answer: 'Aceitamos Pix (com chave automática na finalização), Cartão de Crédito e Débito na entrega (todas as principais bandeiras), Vale-Refeição (VR, Sodexo, Ticket, Alelo) e Dinheiro (informar troco).'
  },
  {
    id: 'faq-4',
    question: 'Posso pedir para alterar ponto da carne ou retirar algum ingrediente?',
    answer: 'Sim! Nosso padrão da casa é o ponto suculento (rosado no centro e bem selado por fora). No momento de confirmar o pedido no carrinho ou WhatsApp, basta colocar sua preferência (ao ponto, bem passado, sem cebola, maionese à parte, etc.).'
  },
  {
    id: 'faq-5',
    question: 'Vocês têm opção de retirada no balcão?',
    answer: 'Com certeza! Nosso balcão fica na Av. das Américas, 4200 - Bloco 8, Barra da Tijuca. Fazendo o pedido antecipado pelo WhatsApp, deixamos seu pacote pronto no horário exato para você não perder tempo.'
  }
];
