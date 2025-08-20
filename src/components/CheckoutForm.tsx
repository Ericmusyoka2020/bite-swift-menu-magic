import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Send } from 'lucide-react';
import { useForm } from '@formspree/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { OrderSuccess } from './OrderSuccess';

interface CheckoutFormProps {
  onBack: () => void;
}

export const CheckoutForm: React.FC<CheckoutFormProps> = ({ onBack }) => {
  const { t } = useLanguage();
  const { items, total, clearCart } = useCart();
  const [tableNumber, setTableNumber] = useState('');
  const [guestName, setGuestName] = useState('');
  const [notes, setNotes] = useState('');
  const [state, handleSubmit] = useForm("xgvzjrdn");
  const [showSuccess, setShowSuccess] = useState(false);

  // Auto-fill table number from URL parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const table = urlParams.get('table');
    if (table) {
      setTableNumber(table);
    }
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const orderData = {
      tableNumber,
      guestName,
      notes,
      items: items.map(item => ({
        name: item.item.name.en,
        price: item.item.price,
        quantity: item.quantity,
        total: item.item.price * item.quantity
      })),
      total: total.toFixed(2),
      timestamp: new Date().toISOString()
    };

    // Create form data for Formspree
    const formData = new FormData();
    formData.append('tableNumber', tableNumber);
    formData.append('guestName', guestName);
    formData.append('notes', notes);
    formData.append('orderDetails', JSON.stringify(orderData));
    formData.append('total', total.toFixed(2));

    await handleSubmit(formData);
  };

  if (showSuccess) {
    return <OrderSuccess />;
  }

  if (state.succeeded) {
    clearCart();
    return <OrderSuccess />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed inset-0 bg-background z-50 overflow-y-auto"
    >
      <div className="max-w-2xl mx-auto p-4 py-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="p-2"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <CardTitle>{t('checkout')}</CardTitle>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Order Summary */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">{t('orderSummary')}</h3>
              <div className="space-y-2">
                {items.map((cartItem) => (
                  <div key={cartItem.item.id} className="flex justify-between text-sm">
                    <span>
                      {cartItem.quantity}x {cartItem.item.name[useLanguage().language]}
                    </span>
                    <span>${(cartItem.item.price * cartItem.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>{t('total')}</span>
                <span className="text-primary">${total.toFixed(2)}</span>
              </div>
            </div>

            <Separator />

            {/* Checkout Form */}
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-1">
                  {t('tableNumber')} *
                </label>
                <Input
                  type="text"
                  value={tableNumber}
                  onChange={(e) => setTableNumber(e.target.value)}
                  required
                  placeholder="e.g., 12"
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-1">
                  {t('guestName')}
                </label>
                <Input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-1">
                  {t('notes')}
                </label>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any special requests or dietary requirements..."
                  rows={3}
                />
              </div>

              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  type="submit"
                  className="w-full gap-2 gradient-hero text-white"
                  size="lg"
                  disabled={state.submitting || !tableNumber}
                >
                  <Send className="h-4 w-4" />
                  {state.submitting ? t('submitting') : t('placeOrder')}
                </Button>
              </motion.div>
              
              {state.errors && Object.keys(state.errors).length > 0 && (
                <div className="text-destructive text-sm">
                  {t('orderError')}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};