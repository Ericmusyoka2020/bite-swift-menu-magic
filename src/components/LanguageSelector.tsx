import React from 'react';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

const languages: Record<Language, { name: string; nativeName: string }> = {
  en: { name: 'English', nativeName: 'English' },
  he: { name: 'Hebrew', nativeName: 'עברית' },
  ar: { name: 'Arabic', nativeName: 'العربية' },
  ru: { name: 'Russian', nativeName: 'Русский' },
  yi: { name: 'Yiddish', nativeName: 'ייִדיש' },
  am: { name: 'Amharic', nativeName: 'አማርኛ' },
  fr: { name: 'French', nativeName: 'Français' },
  es: { name: 'Spanish', nativeName: 'Español' },
  de: { name: 'German', nativeName: 'Deutsch' },
};

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">
            {languages[language].nativeName}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 bg-card border border-border">
        {Object.entries(languages).map(([code, { name, nativeName }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLanguage(code as Language)}
            className={`cursor-pointer ${
              language === code ? 'bg-accent text-accent-foreground' : ''
            }`}
          >
            <div className="flex flex-col">
              <span className="font-medium">{nativeName}</span>
              <span className="text-sm text-muted-foreground">{name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};