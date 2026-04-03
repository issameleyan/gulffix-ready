import { MapPin, Phone } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const PHONE = '+971500000000';

const ServiceAreasSection = () => {
  const { t } = useLang();

  const areas = [
    t('ديرة', 'Deira'),
    t('بر دبي', 'Bur Dubai'),
    t('مارينا', 'Marina'),
    t('جميرا', 'Jumeirah'),
    t('البرشاء', 'Al Barsha'),
    t('الورقاء', 'Al Warqaa'),
    t('دبي لاند', 'Dubailand'),
    t('المنطقة الصناعية', 'Industrial Area'),
    t('الخوانيج', 'Al Khawaneej'),
    t('القصيص', 'Al Qusais'),
    t('المردف', 'Mirdif'),
    t('ند الشبا', 'Nad Al Sheba'),
    t('الراشدية', 'Al Rashidiya'),
    t('السطوة', 'Al Satwa'),
    t('البدع', 'Al Badaa'),
    t('التقاطع', 'Intersection'),
    t('الكرامة', 'Al Karama'),
    t('شارع الشيخ زايد', 'Sheikh Zayed Road'),
    t('داون تاون', 'Downtown'),
    t('بزنس باي', 'Business Bay'),
    t('جبل علي', 'Jebel Ali'),
    t('الفرجان', 'Al Furjan'),
  ];

  return (
    <section id="areas" className="section-padding bg-section-alt">
      <div className="container-tight">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            {t('مناطق الخدمة', 'Service Areas')}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            {t('نغطي كل مناطق دبي', 'We cover all areas in Dubai')}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm"
            >
              <MapPin size={14} className="text-accent" />
              {area}
            </span>
          ))}
        </div>

        <p className="mt-8 text-center text-muted-foreground">
          {t('ما لقيت منطقتك؟ اتصل فينا ونأكدلك', "Can't find your area? Call us and we'll confirm")}
        </p>
        <div className="mt-4 flex justify-center">
          <a href={`tel:${PHONE}`} className="btn-call">
            <Phone size={18} />
            {t('اتصل الآن', 'Call Now')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
