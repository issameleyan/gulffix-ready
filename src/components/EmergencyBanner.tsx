import { Phone } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const PHONE = '+971500000000';

const EmergencyBanner = () => {
  const { t, toggleLang, lang } = useLang();

  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container-tight flex items-center justify-between px-4 py-2">
        <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm font-bold">
          <Phone size={14} />
          {t('خدمة طوارئ 24/7 — اتصل الآن', '24/7 Emergency — Call Now')}
        </a>
        <button
          onClick={toggleLang}
          className="rounded-md border border-primary-foreground/30 px-3 py-0.5 text-xs font-semibold transition-colors hover:bg-primary-foreground/10"
        >
          {lang === 'ar' ? 'EN' : 'عربي'}
        </button>
      </div>
    </div>
  );
};

export default EmergencyBanner;
