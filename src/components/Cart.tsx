import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Minus, Plus, X, CreditCard } from 'lucide-react';
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
  const { t } = useLanguage();
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
                        {items.map((cartItem) => (
                          <motion.div
                            key={cartItem.item.id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="border rounded-lg p-4 space-y-3"
                          >
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h4 className="font-medium text-sm">
                                  {cartItem.item.name[useLanguage().language]}
                                </h4>
                                <p className="text-primary font-semibold">
                                  ${cartItem.item.price}
                                </p>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeItem(cartItem.item.id)}
                                className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                              >
                                <X className="h-3 w-3" />
                              </Button>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity - 1)}
                                  className="h-8 w-8 p-0"
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center font-medium">
                                  {cartItem.quantity}
                                </span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(cartItem.item.id, cartItem.quantity + 1)}
                                  className="h-8 w-8 p-0"
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                              <span className="font-semibold">
                                ${(cartItem.item.price * cartItem.quantity).toFixed(2)}
                              </span>
                            </div>
                          </motion.div>
                        ))}
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