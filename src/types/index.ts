export interface BurgerItem {
  id: string;
  name: string;
  titleLine1?: string;
  titleLine2?: string;
  number?: string;
  price: number;
  category: 'artesanais' | 'smash' | 'acompanhamentos' | 'combos' | 'bebidas';
  badge?: string;
  image: string;
  alt: string;
  description: string;
  ingredients: string[];
  caloriesOrHighlight?: string;
  isHeroFeatured?: boolean;
  preparationTime?: string;
}

export interface DrinkItem {
  id: string;
  name: string;
  brand: string;
  volume: string;
  price: number;
  image: string;
  tag: string;
  alt: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  comment: string;
  favoriteBurger: string;
  date: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CartItem {
  item: BurgerItem;
  quantity: number;
  notes?: string;
}

export interface ContactInfo {
  name: string;
  slogan: string;
  phone: string;
  phoneClean: string;
  email: string;
  address: string;
  neighborhood: string;
  cityState: string;
  cep: string;
  hoursWeekday: string;
  hoursWeekend: string;
  deliveryTime: string;
  instagramHandle: string;
  instagramUrl: string;
  orderUrl: string;
  whatsappMessageBase: string;
}
