export interface MenuItem {
  id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  price: number;
  image: string;
  category: string;
  dietary: string[];
  spicy?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

export interface OrderDetails {
  tableNumber: string;
  guestName?: string;
  notes?: string;
  items: CartItem[];
  total: number;
}

export type Language = 'en' | 'he' | 'ar' | 'ru' | 'yi' | 'am' | 'fr' | 'es' | 'de';

export interface Translations {
  [key: string]: Record<Language, string>;
}