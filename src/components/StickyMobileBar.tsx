import { Phone, MessageCircle } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const PHONE = '+971500000000';
const WA = '971500000000';

const StickyMobileBar = () => {
  const { t } = useLang();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border bg-background shadow-lg md:hidden">
      <a
        href={`tel:${PHONE}`}
        className="flex flex-[2] items-center justify-center gap-2 bg-accent py-4 text-base font-extrabold text-accent-foreground"
      >
        <Phone size={22} />
        {t('اتصل الآن', 'Call Now')}
      </a>
      <a
        href={`https://wa.me/${WA}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-4 text-sm font-bold text-success"
      >
        <MessageCircle size={20} />
        {t('واتساب', 'WhatsApp')}
      </a>
    </div>
  );
};

export default StickyMobileBar;
