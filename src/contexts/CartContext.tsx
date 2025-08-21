import React, { createContext, useContext, useState } from 'react';
import { CartItem, MenuItem } from '../types';

interface CartContextType {
  items: CartItem[];
  addItem: (item: MenuItem, customizations?: Record<string, string>) => void;
  removeItem: (cartItemIndex: number) => void;
  updateQuantity: (cartItemIndex: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: MenuItem, customizations?: Record<string, string>) => {
    setItems((prevItems) => {
      // Create a unique key for the item with its customizations
      const customizationKey = customizations ? JSON.stringify(customizations) : '';
      const existingItem = prevItems.find((cartItem) => 
        cartItem.item.id === item.id && 
        JSON.stringify(cartItem.customizations || {}) === customizationKey
      );
      
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.item.id === item.id && 
          JSON.stringify(cartItem.customizations || {}) === customizationKey
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { item, quantity: 1, customizations: customizations || {} }];
    });
  };

  const removeItem = (cartItemIndex: number) => {
    setItems((prevItems) => prevItems.filter((_, index) => index !== cartItemIndex));
  };

  const updateQuantity = (cartItemIndex: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(cartItemIndex);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((item, index) =>
        index === cartItemIndex ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, cartItem) => {
    let itemPrice = cartItem.item.price;
    
    // Add customization prices
    if (cartItem.customizations && cartItem.item.customizations) {
      cartItem.item.customizations.forEach(customization => {
        const selectedOptionId = cartItem.customizations![customization.id];
        if (selectedOptionId) {
          const option = customization.options.find(opt => opt.id === selectedOptionId);
          if (option?.price) {
            itemPrice += option.price;
          }
        }
      });
    }
    
    return sum + itemPrice * cartItem.quantity;
  }, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};