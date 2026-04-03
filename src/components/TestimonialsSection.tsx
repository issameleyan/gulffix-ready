import { Star } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t } = useLang();

  const reviews = [
    {
      name: t('محمد العلي', 'Mohammed Al Ali'),
      service: t('سباكة', 'Plumbing'),
      stars: 5,
      text: t(
        'اتصلت الساعة 11 بالليل لأن عندي تسرب ماء بالمطبخ. الفني وصل خلال نص ساعة وصلح المشكلة بسرعة. شغل نظيف وما خرب شي. أنصح فيهم بقوة.',
        'I called at 11 PM because of a kitchen water leak. The technician arrived within half an hour and fixed it quickly. Clean work, nothing damaged. Highly recommend.'
      ),
    },
    {
      name: t('فاطمة الحمادي', 'Fatima Al Hammadi'),
      service: t('تنظيف', 'Cleaning'),
      stars: 5,
      text: t(
        'طلبت تنظيف شامل للشقة بعد ما خلصنا تجديد. الفريق جاء بالموعد وشغلهم كان ممتاز. الشقة صارت مثل الجديدة. أسعار معقولة وخدمة محترمة.',
        'I requested a full apartment cleaning after renovation. The team arrived on time and their work was excellent. The apartment looks brand new. Fair prices and respectful service.'
      ),
    },
    {
      name: t('أحمد الكعبي', 'Ahmed Al Kaabi'),
      service: t('كهرباء', 'Electrical'),
      stars: 5,
      text: t(
        'كان عندي مشكلة بالكهرباء وكل اللوحة تفصل. الفني فحص كل شي وصلح العطل وغير القاطع القديم. حددلي السعر قبل ما يبدأ وما طلع أي تكلفة زيادة.',
        'Had an electrical issue with the panel tripping. The technician inspected everything, fixed the fault, and replaced the old breaker. Price was set upfront with no extras.'
      ),
    },
    {
      name: t('سارة النعيمي', 'Sara Al Nuaimi'),
      service: t('تكييف', 'AC'),
      stars: 5,
      text: t(
        'المكيف كان يسرب ماء وما يبرد زين. اتصلت والفني جاء بنفس اليوم. نظف المكيف وعبى فريون وصار يشتغل مثل الجديد. متعاملة معاهم من سنتين ودايماً موثوقين.',
        'AC was leaking water and not cooling well. I called and the technician came same day. Cleaned the AC and refilled freon, now it works like new. Been their customer for 2 years, always reliable.'
      ),
    },
    {
      name: t('خالد المزروعي', 'Khalid Al Mazrouei'),
      service: t('صيانة عامة', 'General Maintenance'),
      stars: 5,
      text: t(
        'صلحوا لي باب الشقة وركبوا رفوف بالمخزن وصبغوا غرفة كاملة. كل شي بزيارة وحدة. أسعارهم حلوة والشغل مرتب. بكرر التعامل معاهم أكيد.',
        'They fixed my apartment door, installed storage shelves, and painted an entire room. All in one visit. Great prices and organized work. Will definitely use them again.'
      ),
    },
  ];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-tight">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            {t('عملاءنا يحكوا', 'What Our Clients Say')}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="rounded-xl border border-border bg-card p-5 shadow-sm"
            >
              <div className="mb-3 flex gap-1">
                {Array.from({ length: r.stars }).map((_, si) => (
                  <Star key={si} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
              <div className="border-t border-border pt-3">
                <p className="text-sm font-bold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
