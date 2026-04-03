import { Phone, MessageCircle } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const PHONE = '+971500000000';
const WA = '971500000000';

const FinalCTASection = () => {
  const { t } = useLang();

  return (
    <section className="gradient-navy section-padding text-center">
      <div className="container-tight">
        <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">
          {t('محتاج صيانة؟ اتصل الآن', 'Need Maintenance? Call Now')}
        </h2>
        <p className="mt-3 text-lg text-primary-foreground/80">
          {t('متاحين 24/7 — نوصلك بأسرع وقت', 'Available 24/7 — We reach you ASAP')}
        </p>

        <a
          href={`tel:${PHONE}`}
          className="mt-6 block text-3xl font-extrabold tracking-wider text-accent md:text-4xl"
          dir="ltr"
        >
          +971 50 000 0000
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href={`tel:${PHONE}`} className="btn-call text-xl">
            <Phone size={22} />
            {t('اتصل الآن', 'Call Now')}
          </a>
          <a
            href={`https://wa.me/${WA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-xl"
          >
            <MessageCircle size={22} />
            {t('واتساب', 'WhatsApp')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
