import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Plus } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { menuItems } from '../data/menuItems';
import { MenuItem } from '../types';
import { ItemCustomizationModal } from './ItemCustomizationModal';

const categories = ['starters', 'mainCourse', 'drinks', 'desserts'];

export const MenuSection: React.FC = () => {
  const { t, language } = useLanguage();
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('starters');
  const [searchTerm, setSearchTerm] = useState('');
  const [showVegetarian, setShowVegetarian] = useState(false);
  const [showSpicy, setShowSpicy] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showCustomization, setShowCustomization] = useState(false);

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = item.category === selectedCategory;
    const matchesSearch = item.name[language]
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesVegetarian = !showVegetarian || item.dietary.includes('vegetarian');
    const matchesSpicy = !showSpicy || item.spicy;

    return matchesCategory && matchesSearch && matchesVegetarian && matchesSpicy;
  });

  const handleAddToCart = (item: MenuItem, customizations?: Record<string, string>) => {
    addItem(item, customizations);
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.customizations && item.customizations.length > 0) {
      setSelectedItem(item);
      setShowCustomization(true);
    } else {
      handleAddToCart(item);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-4">
          {t('menu')}
        </h2>
        
        {/* Search and Filters */}
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t('searchDishes')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant={showVegetarian ? "default" : "outline"}
              size="sm"
              onClick={() => setShowVegetarian(!showVegetarian)}
              className="gap-2"
            >
              <Filter className="h-3 w-3" />
              {t('vegetarian')}
            </Button>
            <Button
              variant={showSpicy ? "default" : "outline"}
              size="sm"
              onClick={() => setShowSpicy(!showSpicy)}
              className="gap-2"
            >
              <Filter className="h-3 w-3" />
              {t('spicy')}
            </Button>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="capitalize"
          >
            {t(category)}
          </Button>
        ))}
      </div>

      {/* Menu Items Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.name[language]}
                      </h3>
                      <span className="text-xl font-bold text-primary">
                        ${item.price}
                      </span>
                    </div>
                    
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
                    
                    <motion.div whileTap={{ scale: 0.95 }}>
                      <Button
                        onClick={() => handleItemClick(item)}
                        className="w-full gap-2 gradient-hero"
                        size="lg"
                      >
                        <Plus className="h-4 w-4" />
                        {item.customizations && item.customizations.length > 0 
                          ? t('customize') 
                          : t('addToCart')
                        }
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            {t('noItemsFound')}
          </p>
        </div>
      )}

      {/* Customization Modal */}
      {selectedItem && (
        <ItemCustomizationModal
          item={selectedItem}
          isOpen={showCustomization}
          onClose={() => {
            setShowCustomization(false);
            setSelectedItem(null);
          }}
          onAddToCart={handleAddToCart}
        />
      )}
    </section>
  );
};