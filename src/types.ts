export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'lanches' | 'combos';
  subcategory?: 'minions' | 'cinema';
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
