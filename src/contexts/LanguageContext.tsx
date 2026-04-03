import React, { createContext, useContext, useState, useCallback } from 'react';

type Lang = 'ar' | 'en';

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (ar: string, en: string) => string;
  isRtl: boolean;
}

const LangContext = createContext<LangContextType | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>('ar');

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  }, []);

  const t = useCallback((ar: string, en: string) => lang === 'ar' ? ar : en, [lang]);
  const isRtl = lang === 'ar';

  return (
    <LangContext.Provider value={{ lang, toggleLang, t, isRtl }}>
      <div dir={isRtl ? 'rtl' : 'ltr'} lang={lang}>
        {children}
      </div>
    </LangContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be inside LanguageProvider');
  return ctx;
};
