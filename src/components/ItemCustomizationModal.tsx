import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useLanguage } from '../contexts/LanguageContext';
import { MenuItem, MenuCustomization } from '../types';

interface ItemCustomizationModalProps {
  item: MenuItem;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (item: MenuItem, customizations: Record<string, string>) => void;
}

export const ItemCustomizationModal: React.FC<ItemCustomizationModalProps> = ({
  item,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  const { t, language } = useLanguage();
  const [selectedCustomizations, setSelectedCustomizations] = useState<Record<string, string>>({});

  const handleCustomizationChange = (customizationId: string, optionId: string) => {
    setSelectedCustomizations(prev => ({
      ...prev,
      [customizationId]: optionId
    }));
  };

  const calculateTotalPrice = () => {
    let total = item.price;
    
    item.customizations?.forEach(customization => {
      const selectedOptionId = selectedCustomizations[customization.id];
      if (selectedOptionId) {
        const option = customization.options.find(opt => opt.id === selectedOptionId);
        if (option?.price) {
          total += option.price;
        }
      }
    });
    
    return total;
  };

  const canAddToCart = () => {
    return item.customizations?.every(customization => {
      if (customization.required) {
        return selectedCustomizations[customization.id];
      }
      return true;
    }) ?? true;
  };

  const handleAddToCart = () => {
    if (canAddToCart()) {
      onAddToCart(item, selectedCustomizations);
      setSelectedCustomizations({});
      onClose();
    }
  };

  const getSelectedOptionName = (customization: MenuCustomization) => {
    const selectedOptionId = selectedCustomizations[customization.id];
    if (!selectedOptionId) return null;
    
    const option = customization.options.find(opt => opt.id === selectedOptionId);
    return option?.name[language] || null;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
            {item.name[language]}
          </DialogTitle>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>

        <div className="space-y-6">
          {/* Item Image */}
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={item.image}
              alt={item.name[language]}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Item Description */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {item.description[language]}
          </p>

          {/* Dietary badges */}
          <div className="flex flex-wrap gap-1">
            {item.dietary.map((diet) => (
              <Badge key={diet} variant="secondary" className="text-xs">
                {t(diet)}
              </Badge>
            ))}
            {item.spicy && (
              <Badge variant="destructive" className="text-xs">
                {t('spicy')} 🌶️
              </Badge>
            )}
          </div>

          {/* Customizations */}
          {item.customizations?.map((customization) => (
            <div key={customization.id} className="space-y-3">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-foreground">
                  {customization.name[language]}
                </h3>
                {customization.required && (
                  <Badge variant="destructive" className="text-xs">
                    {t('required')}
                  </Badge>
                )}
              </div>
              
              <RadioGroup
                value={selectedCustomizations[customization.id] || ''}
                onValueChange={(value) => handleCustomizationChange(customization.id, value)}
                className="space-y-2"
              >
                {customization.options.map((option) => (
                  <div key={option.id} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.id} id={option.id} />
                    <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                      <div className="flex justify-between items-center">
                        <span>{option.name[language]}</span>
                        {option.price && (
                          <span className="text-sm text-primary font-medium">
                            +${option.price}
                          </span>
                        )}
                      </div>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}

          {/* Price and Add to Cart */}
          <div className="space-y-4 pt-4 border-t">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">{t('total')}</span>
              <span className="text-2xl font-bold text-primary">
                ${calculateTotalPrice()}
              </span>
            </div>

            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleAddToCart}
                disabled={!canAddToCart()}
                className="w-full gap-2 gradient-hero"
                size="lg"
              >
                <Plus className="h-4 w-4" />
                {t('addToCart')}
              </Button>
            </motion.div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};