import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { LanguageSelector } from './LanguageSelector';
import { ThemeToggle } from './ThemeToggle';
import { Cart } from './Cart';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import logoImage from '../assets/biteswift-logo.jpg';

export const Header: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const { itemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <img 
                src={logoImage} 
                alt="BiteSwift Logo" 
                className="h-10 w-10 rounded-lg object-cover shadow-elegant"
              />
              <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                <h1 className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
                  BiteSwift
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  {t('tagline')}
                </p>
              </div>
            </motion.div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
              
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsCartOpen(true)}
                  className="relative gap-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span className="hidden sm:inline">{t('cart')}</span>
                  {itemCount > 0 && (
                    <Badge 
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs animate-bounce-soft"
                    >
                      {itemCount}
                    </Badge>
                  )}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      <Cart isOpen={isCartOpen} onToggle={() => setIsCartOpen(!isCartOpen)} />
    </>
  );
};