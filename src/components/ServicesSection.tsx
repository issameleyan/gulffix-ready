import { Droplets, Zap, Sparkles, Wind, Wrench, Phone } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const PHONE = '+971500000000';

const ServicesSection = () => {
  const { t } = useLang();

  const services = [
    {
      icon: <Droplets size={32} className="text-accent" />,
      title: t('سباكة', 'Plumbing'),
      items: [
        t('إصلاح التسربات — نكشف مكان التسرب ونصلحه بدون تكسير. نستخدم أجهزة كشف حديثة توفر عليك وقت وفلوس.', 'Leak repair — We detect and fix leaks without breaking walls. Using modern detection equipment to save you time and money.'),
        t('فتح المجاري المسدودة — مجاري مطبخ أو حمام، نفتحها بالضغط أو السوستة. خدمة فورية بدون انتظار.', 'Drain unblocking — Kitchen or bathroom drains, we clear them with pressure or cable. Immediate service, no waiting.'),
        t('تركيب وصيانة السخانات — تركيب سخانات جديدة أو إصلاح القديمة. نتعامل مع كل الأنواع والأحجام.', 'Water heater installation & repair — New installations or fixing existing ones. We handle all types and sizes.'),
        t('تمديد أنابيب جديدة — تمديدات مياه للمطابخ والحمامات الجديدة. شغل نظيف ومرتب بضمان.', 'New pipe installation — Water lines for new kitchens and bathrooms. Clean, organized work with warranty.'),
        t('صيانة الحمامات والمطابخ — من الخلاط المكسور للمرحاض اللي ما يوقف. نصلح كل شي.', 'Bathroom & kitchen maintenance — From broken faucets to running toilets. We fix everything.'),
        t('كشف تسربات المياه بدون تكسير — تقنية حديثة تحدد مكان التسرب بالضبط بدون ما نلمس البلاط.', 'Leak detection without breaking — Modern technology pinpoints the exact leak location without touching your tiles.'),
      ],
    },
    {
      icon: <Zap size={32} className="text-accent" />,
      title: t('كهرباء', 'Electrical'),
      items: [
        t('إصلاح الأعطال الكهربائية — قطع كهرباء مفاجئ أو سلك محروق، نوصلك ونصلح العطل بأسرع وقت.', 'Electrical fault repair — Sudden power cut or burnt wire, we reach you and fix it ASAP.'),
        t('تركيب الإنارة — ثريات، سبوت لايت، إنارة خارجية. تركيب احترافي مع ضمان على الشغل.', 'Lighting installation — Chandeliers, spotlights, outdoor lighting. Professional installation with warranty.'),
        t('صيانة اللوحات الكهربائية — فحص وصيانة اللوحة الرئيسية والقواطع. نمنع المشاكل قبل ما تصير.', 'Panel maintenance — Inspection and maintenance of main panels and breakers. We prevent problems before they happen.'),
        t('تمديد أسلاك جديدة — تمديدات كهرباء للمباني الجديدة أو التجديدات. معتمدين ومرخصين.', 'New wiring — Electrical installations for new buildings or renovations. Certified and licensed.'),
        t('تركيب وصيانة المكيفات — تركيب سبلت أو مركزي، صيانة دورية، وإصلاح أعطال.', 'AC installation & maintenance — Split or central, periodic maintenance, and fault repair.'),
        t('حلول الطاقة والحماية — تركيب UPS، مانعة صواعق، وأنظمة حماية كهربائية.', 'Power & protection solutions — UPS installation, lightning protection, and electrical safety systems.'),
      ],
    },
    {
      icon: <Sparkles size={32} className="text-accent" />,
      title: t('تنظيف', 'Cleaning'),
      items: [
        t('تنظيف منازل شامل — تنظيف عميق لكل غرفة بالبيت. نستخدم مواد آمنة ومعدات متطورة.', 'Deep home cleaning — Thorough cleaning of every room. We use safe materials and advanced equipment.'),
        t('تنظيف بعد البناء والتجديد — نشيل غبار البناء والبقع. نسلمك بيتك نظيف وجاهز للسكن.', 'Post-construction cleaning — We remove construction dust and stains. Your home delivered clean and ready.'),
        t('تنظيف المكاتب والشركات — خدمة يومية أو أسبوعية للمكاتب. عقود شهرية بأسعار مناسبة.', 'Office cleaning — Daily or weekly office service. Monthly contracts at competitive prices.'),
        t('غسيل سجاد وكنب — غسيل بالبخار أو الشامبو. نرجع السجاد والكنب مثل الجديد.', 'Carpet & sofa washing — Steam or shampoo cleaning. We restore your carpets and sofas like new.'),
        t('تنظيف خزانات المياه — تنظيف وتعقيم خزانات المياه. ضروري للصحة ونسويه كل 6 شهور.', 'Water tank cleaning — Cleaning and sanitizing water tanks. Essential for health, done every 6 months.'),
        t('تعقيم ومكافحة الحشرات — رش مبيدات آمنة ومرخصة. نتعامل مع كل أنواع الحشرات والقوارض.', 'Pest control & sanitization — Safe, licensed pesticides. We handle all types of insects and rodents.'),
      ],
    },
    {
      icon: <Wind size={32} className="text-accent" />,
      title: t('تكييف', 'AC / HVAC'),
      items: [
        t('صيانة وتنظيف المكيفات — تنظيف الفلاتر والمبخر. المكيف يشتغل أحسن ويوفر كهرباء.', 'AC maintenance & cleaning — Filter and evaporator cleaning. Better performance and energy savings.'),
        t('إصلاح الأعطال — المكيف ما يبرد أو يسرب ماء أو يطلع صوت؟ نشخص المشكلة ونصلحها.', 'Fault repair — AC not cooling, leaking, or noisy? We diagnose and fix the problem.'),
        t('تركيب مكيفات جديدة — سبلت، كونسيلد، أو مركزي. نختارلك الأنسب لمساحتك وميزانيتك.', 'New AC installation — Split, concealed, or central. We help you choose the best for your space and budget.'),
        t('تعبئة فريون — نفحص مستوى الفريون ونعبي النوع المناسب. بدون فريون المكيف ما يبرد.', 'Freon refill — We check levels and refill the right type. Without freon, your AC won\'t cool.'),
        t('صيانة دورية وعقود سنوية — اشترك بعقد سنوي وخلنا نهتم بمكيفاتك. أسعار مخفضة للعقود.', 'Annual contracts — Subscribe to an annual plan and let us care for your ACs. Discounted contract prices.'),
      ],
    },
    {
      icon: <Wrench size={32} className="text-accent" />,
      title: t('صيانة عامة', 'General Maintenance'),
      items: [
        t('أعمال النجارة — تصليح أبواب، خزائن، ومطابخ. تركيب رفوف وأثاث.', 'Carpentry — Door, cabinet, and kitchen repair. Shelf and furniture installation.'),
        t('أعمال الدهان — دهان داخلي وخارجي. نساعدك تختار الألوان ونسلمك شغل نظيف.', 'Painting — Interior and exterior painting. We help choose colors and deliver clean work.'),
        t('تركيب وصيانة الأبواب — أبواب خشب، ألمنيوم، أو حديد. تركيب جديد أو إصلاح القديم.', 'Door installation & repair — Wood, aluminum, or steel doors. New installation or repairs.'),
        t('أعمال البلاط والسيراميك — تركيب بلاط جديد أو إصلاح المكسور. حمامات ومطابخ وأرضيات.', 'Tiling — New tile installation or broken tile repair. Bathrooms, kitchens, and floors.'),
        t('صيانة عامة للمباني — خدمة شاملة لأصحاب العقارات والمباني. عقود صيانة بأسعار منافسة.', 'Building maintenance — Comprehensive service for property owners. Maintenance contracts at competitive prices.'),
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-section-alt">
      <div className="container-tight">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-foreground md:text-4xl">
            {t('خدماتنا', 'Our Services')}
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            {t('كل اللي تحتاجه تحت سقف واحد', 'Everything you need under one roof')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                {service.icon}
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
              </div>
              <ul className="mb-5 space-y-3">
                {service.items.map((item, i) => {
                  const parts = item.split(' — ');
                  return (
                    <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">{parts[0]}</span>
                      {parts[1] && <span> — {parts[1]}</span>}
                    </li>
                  );
                })}
              </ul>
              <a
                href={`tel:${PHONE}`}
                className="btn-call w-full justify-center py-3 text-base"
              >
                <Phone size={18} />
                {t('اتصل الآن', 'Call Now')}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
