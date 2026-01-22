import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Target, TrendingUp, Cpu, Users } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyMeSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Code2,
      titleKey: 'whyme.quality.title',
      descriptionKey: 'whyme.quality.description',
      skills: ['Custom builds', 'Performance', 'Security', 'Accessibility'],
    },
    {
      icon: Target,
      titleKey: 'whyme.strategy.title',
      descriptionKey: 'whyme.strategy.description',
      skills: ['SEO architecture', 'Content structure', 'Core Web Vitals', 'UX focus'],
    },
    {
      icon: TrendingUp,
      titleKey: 'whyme.seo_ai.title',
      descriptionKey: 'whyme.seo_ai.description',
      skills: ['SEO', 'AI assistants', 'Schema', 'Content ops'],
    },
    {
      icon: Cpu,
      titleKey: 'whyme.modern_ai.title',
      descriptionKey: 'whyme.modern_ai.description',
      skills: ['Automation', 'Payments', 'AI chatbots', '24/7 sales'],
    },
    {
      icon: Users,
      titleKey: 'whyme.partnership.title',
      descriptionKey: 'whyme.partnership.description',
      skills: ['Workshops', 'Onboarding', 'Docs', 'Support'],
    },
  ];

  const primaryFeatures = features.slice(0, 3);
  const highlightFeatures = features.slice(3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4">
            {t('whyme.title')}
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            {t('whyme.subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        {/* Primary cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {primaryFeatures.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              variants={itemVariants}
              className="bento-item group"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-primary mb-3">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t(feature.descriptionKey)}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {feature.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 gap-8 mt-8"
        >
          {highlightFeatures.map((feature, index) => {
            const isLast = index === highlightFeatures.length - 1;
            if (isLast) {
              return (
                <motion.div
                  key={feature.titleKey}
                  variants={itemVariants}
                  className="bento-item group sm:col-span-1 md:py-10 md:px-10 bg-gradient-to-br from-[#0f172a] to-[#0b1224] text-white border border-white/10 shadow-lg shadow-black/20"
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-white/10 border border-white/15 text-amber-200">
                    <feature.icon className="w-8 h-8" />
                  </div>

                  <h3 className="font-display text-2xl font-bold mb-3 text-white">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="leading-relaxed mb-6 text-white/80">
                    {t(feature.descriptionKey)}
                  </p>

                  <div className="mt-6 flex flex-col gap-3">
                    <span className="text-sm text-white/75 font-medium">
                      {t('whyme.cta.label')}
                    </span>
                    <Button
                      asChild
                      variant="accent"
                      size="lg"
                      className="rounded-xl shadow-premium-xl w-full sm:w-auto"
                    >
                      <a href="#contact">{t('whyme.cta.button')}</a>
                    </Button>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={feature.titleKey}
                variants={itemVariants}
                className="bento-item group sm:col-span-1 md:py-10 md:px-10"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br from-accent/25 to-accent/10 text-accent">
                  <feature.icon className="w-8 h-8" />
                </div>

                <h3 className="font-display text-2xl font-bold mb-3 text-primary">
                  {t(feature.titleKey)}
                </h3>
                <p className="leading-relaxed mb-6 text-muted-foreground">
                  {t(feature.descriptionKey)}
                </p>

                <div className="flex flex-wrap gap-2">
                  {feature.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMeSection;
