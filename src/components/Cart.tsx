import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Minus, Plus, X, CreditCard, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { CheckoutForm } from './CheckoutForm';

interface CartProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onToggle }) => {
  const { t, language } = useLanguage();
  const { items, updateQuantity, removeItem, total, itemCount } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (showCheckout) {
    return <CheckoutForm onBack={() => setShowCheckout(false)} />;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          onClick={onToggle}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="h-full rounded-none border-0">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    {t('cart')}
                    {itemCount > 0 && (
                      <Badge className="ml-2">{itemCount}</Badge>
                    )}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onToggle}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="flex flex-col h-full pb-6">
                {items.length === 0 ? (
                  <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                      <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">
                        {t('emptyCart')}
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex-1 overflow-y-auto space-y-4">
                      <AnimatePresence>
                        {items.map((cartItem, index) => {
                          // Calculate item price with customizations
                          let itemPrice = cartItem.item.price;
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

                          return (
                            <motion.div
                              key={`${cartItem.item.id}-${index}`}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              className="flex items-start gap-3 p-3 bg-card rounded-lg border"
                            >
                              <img
                                src={cartItem.item.image}
                                alt={cartItem.item.name[language]}
                                className="w-12 h-12 object-cover rounded"
                              />
                              
                              <div className="flex-1 min-w-0 space-y-1">
                                <h4 className="font-medium text-sm text-foreground truncate">
                                  {cartItem.item.name[language]}
                                </h4>
                                
                                {/* Show customizations */}
                                {cartItem.customizations && cartItem.item.customizations && (
                                  <div className="space-y-1">
                                    {cartItem.item.customizations.map(customization => {
                                      const selectedOptionId = cartItem.customizations![customization.id];
                                      if (!selectedOptionId) return null;
                                      
                                      const option = customization.options.find(opt => opt.id === selectedOptionId);
                                      if (!option) return null;
                                      
                                      return (
                                        <p key={customization.id} className="text-xs text-muted-foreground">
                                          {customization.name[language]}: {option.name[language]}
                                          {option.price && ` (+$${option.price})`}
                                        </p>
                                      );
                                    })}
                                  </div>
                                )}
                                
                                <p className="text-xs text-muted-foreground">
                                  ${itemPrice}
                                </p>
                              </div>
                              
                              <div className="flex items-center gap-1">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(index, cartItem.quantity - 1)}
                                  className="h-6 w-6 p-0"
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                
                                <span className="w-8 text-center text-sm font-medium">
                                  {cartItem.quantity}
                                </span>
                                
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(index, cartItem.quantity + 1)}
                                  className="h-6 w-6 p-0"
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                                
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeItem(index)}
                                  className="h-6 w-6 p-0 ml-1 text-destructive hover:text-destructive"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                    
                    <div className="space-y-4 mt-6">
                      <Separator />
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>{t('total')}</span>
                        <span className="text-primary">${total.toFixed(2)}</span>
                      </div>
                      
                      <motion.div whileTap={{ scale: 0.95 }}>
                        <Button
                          onClick={() => setShowCheckout(true)}
                          className="w-full gap-2 gradient-hero text-white"
                          size="lg"
                        >
                          <CreditCard className="h-4 w-4" />
                          {t('checkout')}
                        </Button>
                      </motion.div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};