import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Layout,
  LifeBuoy,
  MapPin,
  MonitorSmartphone,
  SearchCheck,
  ServerCog,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const challenges = [
    {
      icon: MonitorSmartphone,
      tagKey: 'offer.challenge.card.web.tag',
      titleKey: 'offer.challenge.card.web.title',
      descriptionKey: 'offer.challenge.card.web.description',
    },
    {
      icon: Bot,
      tagKey: 'offer.challenge.card.ai.tag',
      titleKey: 'offer.challenge.card.ai.title',
      descriptionKey: 'offer.challenge.card.ai.description',
    },
    {
      icon: SearchCheck,
      tagKey: 'offer.challenge.card.seo.tag',
      titleKey: 'offer.challenge.card.seo.title',
      descriptionKey: 'offer.challenge.card.seo.description',
    },
    {
      icon: LifeBuoy,
      tagKey: 'offer.challenge.card.care.tag',
      titleKey: 'offer.challenge.card.care.title',
      descriptionKey: 'offer.challenge.card.care.description',
    },
  ];

  const pillars = [
    {
      icon: Layout,
      titleKey: 'offer.pillars.web.title',
      points: [
        'offer.pillars.web.point1',
        'offer.pillars.web.point2',
        'offer.pillars.web.point3',
      ],
    },
    {
      icon: Sparkles,
      titleKey: 'offer.pillars.ai.title',
      points: [
        'offer.pillars.ai.point1',
        'offer.pillars.ai.point2',
        'offer.pillars.ai.point3',
      ],
    },
    {
      icon: MapPin,
      titleKey: 'offer.pillars.seo.title',
      points: [
        'offer.pillars.seo.point1',
        'offer.pillars.seo.point2',
        'offer.pillars.seo.point3',
      ],
    },
    {
      icon: ServerCog,
      titleKey: 'offer.pillars.care.title',
      points: [
        'offer.pillars.care.point1',
        'offer.pillars.care.point2',
        'offer.pillars.care.point3',
      ],
    },
  ];

  const hostingBullets = [
    { textKey: 'offer.hosting.bullet1' },
    { textKey: 'offer.hosting.bullet2' },
    { textKey: 'offer.hosting.bullet3' },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="container-custom space-y-16">
        {/* Section 2: Choose Your Challenge */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-3xl"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wide">
            {t('offer.challenge.label')}
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            {t('offer.challenge.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('offer.challenge.subtitle')}
          </p>
        </motion.header>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-4 md:grid-cols-2"
          role="list"
          aria-label={t('offer.challenge.title')}
        >
          {challenges.map((card, index) => (
            <motion.article
              key={card.titleKey}
              variants={fadeUp}
              className="bento-item h-full flex flex-col gap-4 relative overflow-hidden"
              role="listitem"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-xs font-semibold text-accent">
                    {t(card.tagKey)}
                  </span>
                  <h3 className="font-display text-xl font-bold text-primary leading-tight">
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(card.descriptionKey)}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary shadow-sm">
                  <card.icon className="w-6 h-6" />
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                {t('offer.challenge.cta')}
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Section 3: Services grouped into four pillars */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          aria-labelledby="pillars-heading"
          className="space-y-10"
        >
          <div className="max-w-3xl space-y-3">
            <p className="text-sm font-semibold text-accent uppercase tracking-wide">
              {t('services.title')}
            </p>
            <h2
              id="pillars-heading"
              className="font-display text-3xl md:text-4xl font-bold text-primary"
            >
              {t('offer.pillars.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('offer.pillars.subtitle')}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => (
              <article
                key={pillar.titleKey}
                className="bento-item h-full flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary">
                  {t(pillar.titleKey)}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{t(point)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.section>

        {/* Section 4: Care & Hosting */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          aria-labelledby="hosting-heading"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
            <article className="bento-item space-y-6 h-full">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                  {t('offer.hosting.title')}
                </p>
                <h2
                  id="hosting-heading"
                  className="font-display text-3xl md:text-4xl font-bold text-primary"
                >
                  {t('offer.hosting.subtitle')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('offer.hosting.body')}
                </p>
              </div>

              <ul className="space-y-3">
                {hostingBullets.map((item) => (
                  <li
                    key={item.textKey}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>{t(item.textKey)}</span>
                  </li>
                ))}
              </ul>

              <div>
                <Button
                  variant="accent"
                  size="lg"
                  className="inline-flex items-center gap-2"
                  onClick={() => {
                    const contact = document.querySelector('#contact');
                    if (contact) {
                      contact.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {t('offer.hosting.cta')}
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </article>

            <article className="bento-item h-full bg-gradient-to-br from-primary via-primary to-navy-light text-primary-foreground relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" aria-hidden>
                <Sparkles className="w-full h-full" />
              </div>
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-xs font-semibold">
                  <ServerCog className="w-4 h-4" />
                  {t('offer.hosting.badge')}
                </div>
                <h3 className="font-display text-2xl font-bold">
                  {t('offer.hosting.card.title')}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {t('offer.hosting.card.description')}
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-primary-foreground/20 border border-primary-foreground/30" />
                    <div className="w-8 h-8 rounded-full bg-primary-foreground/30 border border-primary-foreground/40" />
                    <div className="w-8 h-8 rounded-full bg-primary-foreground/40 border border-primary-foreground/40" />
                  </div>
                  <span className="font-semibold text-primary-foreground">
                    {t('offer.hosting.card.note')}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default ServicesSection;
