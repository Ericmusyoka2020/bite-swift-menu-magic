export interface MenuOption {
  id: string;
  name: Record<string, string>;
  price?: number; // Additional price for this option
}

export interface MenuCustomization {
  id: string;
  name: Record<string, string>;
  required: boolean;
  options: MenuOption[];
}

export interface MenuItem {
  id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  dietary: string[];
  spicy?: boolean;
  customizations?: MenuCustomization[];
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  customizations?: Record<string, string>; // customization_id -> option_id
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