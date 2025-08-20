import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { CartProvider } from '../contexts/CartContext';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { MenuSection } from '../components/MenuSection';

const Index = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <div className="min-h-screen bg-gradient-subtle">
          <Header />
          <main>
            <HeroSection />
            <div id="menu-section">
              <MenuSection />
            </div>
          </main>
        </div>
      </CartProvider>
    </LanguageProvider>
  );
};

export default Index;
