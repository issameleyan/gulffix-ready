import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLang();

  return (
    <footer className="border-t border-border bg-primary pb-20 md:pb-8">
      <div className="container-tight px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground text-lg font-bold">🔧</span>
              <span className="text-xl font-bold text-primary-foreground">{t('خدمات الخليج', 'Gulf Services')}</span>
            </div>
            <p className="text-sm text-primary-foreground/70">
              {t(
                'شركة صيانة منزلية مرخصة في دبي. سباكة، كهرباء، تنظيف، تكييف، وصيانة عامة. نوصلك خلال 30 دقيقة.',
                'Licensed home maintenance company in Dubai. Plumbing, electrical, cleaning, AC, and general maintenance. We reach you in 30 minutes.'
              )}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-primary-foreground">{t('روابط سريعة', 'Quick Links')}</h4>
            <ul className="space-y-2">
              {[
                { label: t('خدماتنا', 'Services'), href: '#services' },
                { label: t('ليش تختارنا', 'Why Us'), href: '#why-us' },
                { label: t('مناطق الخدمة', 'Areas'), href: '#areas' },
                { label: t('الأسعار', 'Pricing'), href: '#pricing' },
                { label: t('تواصل معنا', 'Contact'), href: '#contact' },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-primary-foreground">{t('تواصل معنا', 'Contact Us')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+971500000000" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  <Phone size={16} /> <span dir="ltr">+971 50 000 0000</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/971500000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  <MessageCircle size={16} /> {t('واتساب', 'WhatsApp')}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin size={16} /> {t('دبي، الإمارات', 'Dubai, UAE')}
              </li>
              <li>
                <a href="mailto:info@gulfservices.ae" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  <Mail size={16} /> info@gulfservices.ae
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} {t('خدمات الخليج للصيانة المنزلية. جميع الحقوق محفوظة.', 'Gulf Home Services. All rights reserved.')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
