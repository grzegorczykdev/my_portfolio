import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Rocket,
  TrendingUp,
  Bot,
  CreditCard,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Rocket,
      titleKey: "feature.pages.title",
      descriptionKey: "feature.pages.description",
    },
    {
      icon: TrendingUp,
      titleKey: "feature.seo.title",
      descriptionKey: "feature.seo.description",
    },
    {
      icon: Bot,
      titleKey: "feature.ai.title",
      descriptionKey: "feature.ai.description",
    },
    {
      icon: CreditCard,
      titleKey: "feature.payments.title",
      descriptionKey: "feature.payments.description",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                Full Stack Engineer & SEO Expert
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight"
            >
              {t("hero.headline")}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              {t("hero.subheadline")}
            </motion.p>

            {/* Feature Highlights
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {features.map(({ icon: Icon, titleKey, descriptionKey }) => (
                <div
                  key={titleKey}
                  className="flex h-full rounded-2xl border border-border/50 bg-card/70 backdrop-blur px-4 py-5 shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-display text-sm font-si font-semibold text-primary leading-tight">
                        {t(titleKey)}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {t(descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div> */}

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("#contact")}
              >
                {t("hero.cta.primary")}
                <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => scrollToSection("#services")}
              >
                {t("hero.cta.secondary")}
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex gap-8 pt-8 border-t border-border"
            >
              <div>
                <div className="font-display text-3xl font-bold text-primary">
                  3+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Delivered
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-primary">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Portrait Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              {/* Portrait frame with premium styling */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted rounded-3xl overflow-hidden shadow-premium-xl">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute top-0 left-0 w-full h-full"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>

                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-display text-5xl font-bold text-primary">
                        SG
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Professional Portrait
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-2xl backdrop-blur-sm"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full backdrop-blur-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
