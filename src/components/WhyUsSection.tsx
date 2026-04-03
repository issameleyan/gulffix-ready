import { Zap, BadgeDollarSign, ShieldCheck, Wrench, Clock, ClipboardCheck } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const WhyUsSection = () => {
  const { t } = useLang();

  const points = [
    {
      icon: <Zap size={28} className="text-accent" />,
      title: t('سرعة الوصول', 'Fast Arrival'),
      desc: t(
        'نوصلك خلال 30-60 دقيقة من وقت الاتصال. فريقنا منتشر في كل مناطق دبي عشان نكون قريبين منك دايماً.',
        'We reach you within 30-60 minutes of your call. Our team is spread across all Dubai areas to always be close to you.'
      ),
    },
    {
      icon: <BadgeDollarSign size={28} className="text-accent" />,
      title: t('أسعار واضحة', 'Clear Pricing'),
      desc: t(
        'نحدد السعر قبل ما نبدأ الشغل. ما في تكاليف مخفية أو مفاجآت بالفاتورة. اللي نتفق عليه هو اللي تدفعه.',
        'We set the price before starting. No hidden costs or bill surprises. What we agree on is what you pay.'
      ),
    },
    {
      icon: <ShieldCheck size={28} className="text-accent" />,
      title: t('شغل مضمون', 'Guaranteed Work'),
      desc: t(
        'ضمان على كل الأعمال اللي نسويها. لو صار أي مشكلة بعد الصيانة، نرجع ونصلحها مجاناً.',
        'Warranty on all our work. If any issue arises after maintenance, we come back and fix it for free.'
      ),
    },
    {
      icon: <Wrench size={28} className="text-accent" />,
      title: t('فنيين محترفين', 'Expert Technicians'),
      desc: t(
        'فريقنا عنده خبرة أكثر من 10 سنوات بالصيانة المنزلية. مدربين ومعتمدين ويعرفون شغلهم.',
        'Our team has 10+ years of home maintenance experience. Trained, certified, and they know their craft.'
      ),
    },
    {
      icon: <Clock size={28} className="text-accent" />,
      title: t('متاحين 24/7', 'Available 24/7'),
      desc: t(
        'طوارئ الساعة 2 بالليل؟ عندنا فريق جاهز بأي وقت. ما في عطل يستنى للصبح.',
        'Emergency at 2 AM? We have a team ready anytime. No breakdown waits until morning.'
      ),
    },
    {
      icon: <ClipboardCheck size={28} className="text-accent" />,
      title: t('مرخصين ومسجلين', 'Licensed & Registered'),
      desc: t(
        'شركة مرخصة رسمياً ومسجلة. نشتغل بالقانون ونلتزم بكل المعايير والاشتراطات.',
        'Officially licensed and registered company. We operate legally and comply with all standards and regulations.'
      ),
    },
  ];

  return (
    <section id="why-us" className="section-padding">
      <div className="container-tight">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            {t('ليش تختارنا؟', 'Why Choose Us?')}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                {p.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
