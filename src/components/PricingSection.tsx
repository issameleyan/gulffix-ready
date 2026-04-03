import { Phone, CheckCircle2 } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const PHONE = '+971500000000';

const PricingSection = () => {
  const { t } = useLang();

  const prices = [
    { service: t('كشف تسربات', 'Leak Detection'), price: t('150 درهم', '150 AED'), category: t('سباكة', 'Plumbing') },
    { service: t('فتح مجاري', 'Drain Unblocking'), price: t('200 درهم', '200 AED'), category: t('سباكة', 'Plumbing') },
    { service: t('تركيب سخان', 'Water Heater Install'), price: t('300 درهم', '300 AED'), category: t('سباكة', 'Plumbing') },
    { service: t('صيانة مكيف', 'AC Maintenance'), price: t('180 درهم', '180 AED'), category: t('تكييف', 'AC') },
    { service: t('تنظيف شقة غرفة وصالة', '1BR Apartment Cleaning'), price: t('250 درهم', '250 AED'), category: t('تنظيف', 'Cleaning') },
    { service: t('إصلاح عطل كهربائي', 'Electrical Fault Repair'), price: t('200 درهم', '200 AED'), category: t('كهرباء', 'Electrical') },
    {
      service: t('معاينة مجانية', 'Free Inspection'),
      price: t('مجاناً ✅', 'FREE ✅'),
      category: t('الكل', 'All'),
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

        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <Table>
            <TableCaption className="mb-4">
              {t('أسعار تقريبية — السعر النهائي يُحدد بعد المعاينة المجانية', 'Approximate prices — Final price determined after free inspection')}
            </TableCaption>
            <TableHeader>
              <TableRow className="bg-primary hover:bg-primary">
                <TableHead className="text-primary-foreground font-bold text-sm">{t('الخدمة', 'Service')}</TableHead>
                <TableHead className="text-primary-foreground font-bold text-sm">{t('القسم', 'Category')}</TableHead>
                <TableHead className="text-primary-foreground font-bold text-sm">{t('تبدأ من', 'Starting from')}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prices.map((p, i) => (
                <TableRow
                  key={i}
                  className={`cursor-pointer transition-colors ${p.highlight ? 'bg-success/10 hover:bg-success/20 font-bold' : 'hover:bg-muted/50'}`}
                  onClick={() => window.location.href = `tel:${PHONE}`}
                >
                  <TableCell className="font-medium text-foreground">{p.service}</TableCell>
                  <TableCell>
                    <Badge
                      variant={p.highlight ? 'default' : 'secondary'}
                      className={`text-xs ${p.highlight ? 'bg-success text-success-foreground' : ''}`}
                    >
                      {p.category}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-semibold text-foreground">{p.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={2} className="font-bold text-foreground">
                  {t('اتصل للمعاينة المجانية', 'Call for Free Inspection')}
                </TableCell>
                <TableCell className="font-bold text-accent">
                  <a href={`tel:${PHONE}`} dir="ltr" className="hover:underline">+971 50 000 0000</a>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
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
