import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';

export const OrderSuccess: React.FC = () => {
  const { t } = useLanguage();

  const handleBackToMenu = () => {
    window.location.reload();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-background z-50 flex items-center justify-center p-4"
    >
      <Card className="max-w-md w-full">
        <CardContent className="text-center space-y-6 py-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
          >
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          </motion.div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">
              {t('orderPlaced')}
            </h2>
            <p className="text-muted-foreground">
              {t('orderConfirmation')}
            </p>
          </div>

          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              onClick={handleBackToMenu}
              className="gap-2 gradient-hero text-white"
              size="lg"
            >
              <Home className="h-4 w-4" />
              {t('backToMenu')}
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};