export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'lanches' | 'combos' | 'petiscos' | 'pizzas' | 'bebidas' | 'sobremesas' | 'guloseimas';
  subcategory?: 'minions' | 'cinema' | 'copa';
}

export interface AgendaItem {
  id: string;
  day: string;
  title: string;
  subtitle?: string;
  image: string;
  dateBadge?: string;
  hasFlags?: boolean;
}
