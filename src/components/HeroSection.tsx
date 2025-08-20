import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Clock, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu-section');
    menuSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Utensils,
      titleKey: 'easyOrdering',
      descKey: 'easyOrderingDesc'
    },
    {
      icon: Clock,
      titleKey: 'quickService',
      descKey: 'quickServiceDesc'
    },
    {
      icon: Globe,
      titleKey: 'multiLanguage',
      descKey: 'multiLanguageDesc'
    }
  ];

  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle opacity-50" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-primary bg-clip-text text-transparent">
                {t('welcome')}
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {t('tagline')}
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={scrollToMenu}
                className="gradient-hero text-white shadow-glow text-lg px-8 py-4"
              >
                {t('browseMenu')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Feature Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-elegant hover:shadow-glow transition-all duration-300"
              >
                <div className="gradient-primary p-3 rounded-full w-fit mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {t(feature.descKey)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};