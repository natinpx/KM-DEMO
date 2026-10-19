import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language, Translations } from './types';
import { en } from './translations/en';
import { am } from './translations/am';
import { ti } from './translations/ti';
import { om } from './translations/om';

const translationsMap: Record<Language, Translations> = {
  en,
  am,
  ti,
  om,
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
  t: (path: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'km_language_preference';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && ['en', 'am', 'ti', 'om'].includes(saved)) {
        return saved;
      }
    } catch {
      // Fallback
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore
    }
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const currentTranslations = translationsMap[language] || en;

  // Helper for deep path lookup with English fallback
  const t = (path: string, fallback?: string): string => {
    const keys = path.split('.');
    
    // Attempt lookup in current translations
    let current: any = currentTranslations;
    for (const key of keys) {
      if (current && typeof current === 'object' && key in current) {
        current = current[key];
      } else {
        current = undefined;
        break;
      }
    }

    if (typeof current === 'string') {
      return current;
    }

    // Attempt lookup in English fallback
    let fallbackVal: any = en;
    for (const key of keys) {
      if (fallbackVal && typeof fallbackVal === 'object' && key in fallbackVal) {
        fallbackVal = fallbackVal[key];
      } else {
        fallbackVal = undefined;
        break;
      }
    }

    if (typeof fallbackVal === 'string') {
      return fallbackVal;
    }

    return fallback || path;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        translations: currentTranslations,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
