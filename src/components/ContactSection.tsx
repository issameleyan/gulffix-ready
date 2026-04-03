import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const PHONE = '+971500000000';
const WA = '971500000000';

const ContactSection = () => {
  const { t } = useLang();

  return (
    <section id="contact" className="section-padding">
      <div className="container-tight">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            {t('تواصل معنا', 'Contact Us')}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-6">
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Phone size={24} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">{t('اتصل فينا', 'Call Us')}</p>
                <p className="text-lg font-bold text-foreground" dir="ltr">+971 50 000 0000</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${WA}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-success/10">
                <MessageCircle size={24} className="text-success" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">{t('واتساب', 'WhatsApp')}</p>
                <p className="text-lg font-bold text-foreground" dir="ltr">+971 50 000 0000</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground">{t('العنوان', 'Address')}</p>
                <p className="text-sm font-bold text-foreground">
                  {t('دبي، الإمارات العربية المتحدة', 'Dubai, United Arab Emirates')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Clock size={24} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-muted-foreground mb-2">{t('ساعات العمل', 'Working Hours')}</p>
                <div className="space-y-1 text-sm text-foreground">
                  <p>{t('السبت - الخميس: 7:00 ص - 10:00 م', 'Sat - Thu: 7:00 AM - 10:00 PM')}</p>
                  <p>{t('الجمعة: 2:00 م - 10:00 م', 'Friday: 2:00 PM - 10:00 PM')}</p>
                  <p className="font-bold text-accent">{t('خدمة الطوارئ: متاحة 24/7', 'Emergency: Available 24/7')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011806427!2d54.89784028361944!3d25.076022016837767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t('موقعنا على الخريطة', 'Our location on map')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
