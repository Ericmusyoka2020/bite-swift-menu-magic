import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations, getDirection, isRTL } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  direction: 'ltr' | 'rtl';
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const direction = getDirection(language);
  const rtl = isRTL(language);

  // Apply direction to document
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        direction,
        isRTL: rtl,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};