import { Phone, CheckCircle2 } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const PHONE = '+971500000000';

const PricingSection = () => {
  const { t } = useLang();

  const prices = [
    { service: t('كشف تسربات', 'Leak Detection'), price: t('150 درهم', '150 AED') },
    { service: t('فتح مجاري', 'Drain Unblocking'), price: t('200 درهم', '200 AED') },
    { service: t('تركيب سخان', 'Water Heater Install'), price: t('300 درهم', '300 AED') },
    { service: t('صيانة مكيف', 'AC Maintenance'), price: t('180 درهم', '180 AED') },
    { service: t('تنظيف شقة غرفة وصالة', '1BR Apartment Cleaning'), price: t('250 درهم', '250 AED') },
    { service: t('إصلاح عطل كهربائي', 'Electrical Fault Repair'), price: t('200 درهم', '200 AED') },
    {
      service: t('معاينة مجانية', 'Free Inspection'),
      price: t('مجاناً ✅', 'FREE ✅'),
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="section-padding bg-section-alt">
      <div className="container-tight">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            {t('دليل الأسعار', 'Pricing Guide')}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            {t('أسعار تقريبية — السعر النهائي بعد المعاينة', 'Approximate prices — Final price after inspection')}
          </p>
        </div>

        <div className="mx-auto max-w-2xl overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-5 py-3 text-start text-sm font-bold">{t('الخدمة', 'Service')}</th>
                <th className="px-5 py-3 text-start text-sm font-bold">{t('تبدأ من', 'Starting from')}</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((p, i) => (
                <tr
                  key={i}
                  className={`border-t border-border ${p.highlight ? 'bg-success/10 font-bold' : ''}`}
                >
                  <td className="px-5 py-3 text-sm text-foreground">{p.service}</td>
                  <td className="px-5 py-3 text-sm font-semibold text-foreground">{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 size={16} className="text-success" />
          {t(
            'السعر النهائي نحدده قبل ما نبدأ الشغل، بدون مفاجآت',
            'Final price is set before we start, no surprises'
          )}
        </div>

        <div className="mt-6 flex justify-center">
          <a href={`tel:${PHONE}`} className="btn-call">
            <Phone size={18} />
            {t('اتصل للمعاينة المجانية', 'Call for Free Inspection')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
