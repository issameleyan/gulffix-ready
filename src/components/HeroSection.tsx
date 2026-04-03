import { Phone, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import heroImg from '@/assets/hero-worker.jpg';

const PHONE = '+971500000000';
const WA = '971500000000';

const HeroSection = () => {
  const { t } = useLang();

  const badges = [
    t('متاح 24/7', 'Available 24/7'),
    t('نوصل خلال 30-60 دقيقة', 'We arrive in 30-60 min'),
    t('أسعار ثابتة بدون مفاجآت', 'Fixed prices, no surprises'),
    t('ضمان على الشغل', 'Work guaranteed'),
  ];

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background image */}
      <img
        src={heroImg}
        alt={t('فني صيانة محترف', 'Professional technician')}
        className="absolute inset-0 h-full w-full object-cover"
        width={1280}
        height={960}
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="relative z-10 container-tight flex min-h-[85vh] flex-col justify-center px-4 py-16">
        {/* Available badge */}
        <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-success/20 px-4 py-2 text-sm font-bold text-success-foreground backdrop-blur-sm border border-success/30">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-success" />
          </span>
          {t('متاح الآن', 'Available Now')}
        </div>

        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
          {t('سباك متاح الآن في دبي', 'Plumber Available Now in Dubai')}
        </h1>

        <p className="mt-4 max-w-xl text-lg font-medium text-primary-foreground/85 md:text-xl">
          {t(
            'خدمة سريعة — أسعار معقولة — شغل مضمون. نوصلك خلال 30 دقيقة في أي مكان بدبي.',
            'Fast service — Fair prices — Guaranteed work. We reach you in 30 minutes anywhere in Dubai.'
          )}
        </p>

        {/* Phone number */}
        <a
          href={`tel:${PHONE}`}
          className="mt-6 text-2xl font-extrabold tracking-wider text-accent md:text-3xl"
          dir="ltr"
        >
          {PHONE.replace('+971', '+971 ').replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}
        </a>

        {/* CTA buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
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

        {/* Trust badges */}
        <div className="mt-8 grid grid-cols-2 gap-3 md:flex md:flex-wrap md:gap-4">
          {badges.map((b) => (
            <div key={b} className="flex items-center gap-2 text-sm font-semibold text-primary-foreground/90">
              <CheckCircle2 size={18} className="shrink-0 text-success" />
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
