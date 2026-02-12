import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from "react";

type Language = "en" | "pl";

interface Translations {
  [key: string]: {
    en: string;
    pl: string;
  };
}

export const translations: Translations = {
  // Navigation
  "nav.about": { en: "About Me", pl: "O mnie" },
  "nav.services": { en: "Services", pl: "Usługi" },
  "nav.contact": { en: "Contact", pl: "Kontakt" },
  "nav.cta.contact": { en: "Contact Me", pl: "Skontaktuj się ze mną" },

  // Hero Section
  "hero.stats.years": { en: "Years of Experience", pl: "Lata doświadczenia" },
  "hero.stats.projects": {
    en: "Projects Delivered",
    pl: "Dostarczone projekty",
  },
  "hero.stats.satisfaction": {
    en: "Client Satisfaction",
    pl: "Zadowoleni klienci",
  },
  "hero.headline": {
    en: "Comprehensive websites and SEO strategy. I will create a modern online image for your company.",
    pl: "Twoja strona, która sprzedaje. Zbuduję nowoczesny wizerunek Twojej firmy w sieci.",
  },
  "hero.subheadline": {
    en: "I help brands and local businesses turn visitors into loyal customers. I design fast business card sites and effective landing pages that I immediately position in Google. I implement intelligent AI solutions, set up the sale of digital products, and take care of your visibility in Google Maps. You get not just code, but a complete tool that works for your success 24/7.",
    pl: "Tworzę szybkie strony wizytówki i landing page'e zoptymalizowane pod wyszukiwarkę Google. Wdrażam inteligentne rozwiązania AI, konfiguruję sprzedaż produktów cyfrowych i dbam o Twoją lokalną widoczność w Google. Pomogę Ci przyciągnąć wartościowych odbiorców i skutecznie zamienić ich w płacących klientów.",
  },
  "hero.cta.primary": {
    en: "Let's Talk About Your Business",
    pl: "Porozmawiajmy o Twoim biznesie",
  },
  "hero.cta.secondary": { en: "See Services", pl: "Zobacz Usługi" },

  // Why Me Section
  "whyme.header": { en: "About Me", pl: "O mnie" },
  "whyme.title": { en: "Why Me", pl: "Dlaczego Ja" },
  "whyme.subtitle": {
    en: "I combine passion and knowledge with the real needs of your business",
    pl: "Łączę pasję i wiedzę z realnymi potrzebami Twojego biznesu",
  },
  "whyme.quality.title": {
    en: "Architecture of Success",
    pl: "Architektura Sukcesu",
  },
  "whyme.quality.description": {
    en: "Code tailored for profit. I create websites that impress with design but above all earn. I skip heavy templates in favor of custom solutions optimized for SEO from the first line of code.",
    pl: "Kod skrojony pod zysk. Tworzę strony, które zachwycają designem, ale przede wszystkim zarabiają. Rezygnuję z ciężkich szablonów na rzecz autorskich rozwiązań zoptymalizowanych pod SEO od pierwszej linii kodu.",
  },
  "whyme.strategy.title": {
    en: "SEO & AI Optimization",
    pl: "SEO & AI Optimization",
  },
  "whyme.strategy.description": {
    en: "Visibility in the new era. Your site must be visible not only to people but also to algorithms. I optimize code so your business is recommended by AI assistants like ChatGPT or Gemini.",
    pl: "Widoczność w nowej erze. Twoja strona musi być widoczna nie tylko dla ludzi, ale i dla algorytmów. Optymalizuję kod tak, aby Twój biznes był polecany przez asystentów AI, takich jak ChatGPT czy Gemini.",
  },
  "whyme.seo_ai.title": {
    en: "Sales Automation",
    pl: "Automatyzacja Sprzedaży",
  },
  "whyme.seo_ai.description": {
    en: "Your business on autopilot. I implement systems that sell for you. From payment automation to intelligent chatbots and digital product handling — your company earns even when you rest.",
    pl: "Twój biznes na autopilocie. Wdrażam systemy, które sprzedają za Ciebie. Od automatyzacji płatności po inteligentne chatboty i obsługę produktów cyfrowych - Twoja firma zarabia nawet wtedy, gdy Ty odpoczywasz.",
  },
  "whyme.seo_ai.skill1": { en: "24/7 sales", pl: "Sprzedaż 24/7" },
  "whyme.seo_ai.skill2": { en: "Online payments", pl: "Płatności online" },
  "whyme.seo_ai.skill3": { en: "Digital products", pl: "Produkty cyfrowe" },
  "whyme.seo_ai.skill4": { en: "AI assistants", pl: "Asystenci AI" },
  "whyme.modern_ai.title": {
    en: "Partnership, not just a service",
    pl: "Partnerstwo, nie tylko usługa",
  },
  "whyme.modern_ai.description": {
    en: "Not sure where to start? I will guide you through the entire process, from choosing a domain and business listing to implementation and optimization. You get full support and a tool you truly understand and can use.",
    pl: "Nie wiesz od czego zacząć? Przeprowadzę Cię przez cały proces, od wyboru domeny po konfigurację wizytówki, aż do wdrożenia i optymalizacji strony. Otrzymujesz ode mnie pełne wsparcie i narzędzie, które naprawdę rozumiesz i potrafisz obsługiwać.",
  },
  "whyme.modern_ai.skill1": { en: "Support A to Z", pl: "Wsparcie od A do Z" },
  "whyme.modern_ai.skill2": {
    en: "Clear action plan",
    pl: "Jasny plan działania",
  },
  "whyme.modern_ai.skill3": {
    en: "Business advisory",
    pl: "Doradztwo biznesowe",
  },
  "whyme.modern_ai.skill4": { en: "Plain language", pl: "Prosty język" },
  "whyme.effect.label": { en: "Effect", pl: "Efekt" },
  "whyme.quality.effect": {
    en: "Lightning-fast site ready to fight for top positions in Google.",
    pl: "Błyskawiczna strona, gotowa na walkę o pierwsze miejsca w wyszukwiarkach.",
  },
  "whyme.strategy.effect": {
    en: "You build presence where your clients look for answers today and tomorrow.",
    pl: "Wsparcie przy całym procesie, bez względu na Twój obecny poziom zaawansowania.",
  },
  "whyme.seo_ai.effect": {
    en: "Scalable business without constant oversight.",
    pl: "Skalowalny biznes bez konieczności ciągłego nadzoru.",
  },
  "whyme.partnership.title": {
    en: "Partnership, not just a service",
    pl: "Partnerstwo, nie tylko usługa",
  },
  "whyme.partnership.description": {
    en: "Not sure where to start? I will guide you through the entire process, from choosing a domain and business listing to implementation and optimization. You get full support and a tool you truly understand and can use.",
    pl: "Nie wiesz od czego zacząć? Przeprowadzę Cię przez cały proces, od wyboru domeny po konfigurację wizytówki, aż do wdrożenia i optymalizacji strony. Otrzymujesz ode mnie pełne wsparcie i narzędzie, które naprawdę rozumiesz i potrafisz obsługiwać.",
  },
  "whyme.cta.label": {
    en: "Plan your launch with me",
    pl: "Zaplanuj start razem ze mną",
  },
  "whyme.cta.button": {
    en: "Go to contact",
    pl: "Przejdź do kontaktu",
  },
  "whyme.cta.banner.title": {
    en: "Consulting and shared vision",
    pl: "Doradztwo i wspólna wizja",
  },
  "whyme.cta.banner.body": {
    en: "Your business is unique, so before I write the first line of code, I listen to your needs. I act as your technological advisor. Together, we design solutions that best address your industry's challenges. It's a partnership where my technical expertise meets your business experience to create a product perfectly tailored to your customers.",
    pl: "Twój biznes jest unikalny, dlatego zanim postawię pierwszą linię kodu, słucham Twoich potrzeb. Działam jako Twój doradca technologiczny. Wspólnie projektujemy rozwiązania, które najlepiej odpowiedzą na wyzwania Twojej branży. To partnerstwo, w którym moja wiedza techniczna spotyka się z Twoim doświadczeniem biznesowym, by stworzyć produkt idealnie skrojony pod Twoich klientów.",
  },
  "whyme.cta.banner.note": {
    en: "",
    pl: "",
  },
  "whyme.combined.title": {
    en: "Architecture of Success: Code and Strategy",
    pl: "Architektura Sukcesu: Kod i Strategia",
  },
  "whyme.combined.description": {
    en: "I build websites that not only impress with design, but most of all earn. I skip heavy templates in favor of custom solutions optimized for SEO from the first line of code. This makes your site lightning fast, secure, and ready to fight for top positions in Google.",
    pl: "Tworzę strony, które nie tylko zachwycają designem, ale przede wszystkim zarabiają. Rezygnuję z ciężkich szablonów na rzecz autorskich rozwiązań, które optymalizuję pod kątem SEO od pierwszej linijki kodu. Dzięki temu Twój serwis jest błyskawiczny, bezpieczny i gotowy na walkę o pierwsze miejsca w Google.",
  },
  "whyme.combined.skill1": { en: "Loading speed", pl: "Szybkość ładowania" },
  "whyme.combined.skill2": { en: "Unique design", pl: "Unikalny projekt" },
  "whyme.combined.skill3": {
    en: "Optimized for Google",
    pl: "Optymalizacja pod Google",
  },
  "whyme.combined.skill4": { en: "Security", pl: "Bezpieczeństwo" },
  // Services Section
  "services.title": { en: "Services", pl: "Usługi" },
  "services.subtitle.compact": {
    en: "Three areas that deliver speed, visibility, and effortless operations.",
    pl: "Trzy obszary, które dowożą szybkość, widoczność i bezproblemową obsługę.",
  },
  "services.group.dev.title": {
    en: "Development & Design",
    pl: "Development & Design",
  },
  "services.group.dev.desc": {
    en: "I design and code from scratch. I'll create a fast and secure site that will work for your business.",
    pl: "Projektuję i programuję od zera. Stworzę szybką i bezpieczną stronę, która będzie pracowała dla Twojego biznesu.",
  },
  "services.group.dev.b1": {
    en: "I'll create a personalized site tailored to your needs that will make your company stand out.",
    pl: "Indywidualny projekt i wdrożenie: unikalna strona dopasowana do potrzeb Twojej marki.",
  },
  "services.group.dev.b2": {
    en: "I'll rewrite your current service so it runs faster and looks modern.",
    pl: "Modernizacja obecnego serwisu: optymalizacja kodu i designu w celu przyspieszenia działania strony.",
  },
  "services.group.dev.b3": {
    en: "If you need a quick and cheaper solution, I'll build a fast business card site on one of my templates.",
    pl: "Pełna responsywność: bezbłędne wyświetlanie i obsługa na urządzeniach mobilnych oraz tabletach.",
  },
  "services.group.dev.cta": {
    en: "I want a new website",
    pl: "Chcę nową stronę",
  },
  "services.group.seoai.title": {
    en: "Visibility in search and modern customer service",
    pl: "Widoczność w wyszukiwarkach i nowoczesna obsługa klienta",
  },
  "services.group.seoai.desc": {
    en: "I'll make it easy for clients to find you, and artificial intelligence will help you serve them even when you sleep.",
    pl: "Sprawię, że klienci łatwo Cię znajdą, a sztuczna inteligencja pomoże Ci ich obsłużyć nawet kiedy śpisz.",
  },
  "services.group.seoai.b1": {
    en: "I'll do an SEO audit and show you how to improve visibility in search engines.",
    pl: "Skuteczne pozycjonowanie (SEO): działania nakierowane na sprowadzenie realnych klientów z wyszukiwarki.",
  },
  "services.group.seoai.b2": {
    en: "I'll deploy an AI assistant that will answer customer questions 24/7.",
    pl: "Wdrożenie asystenta AI: inteligentna automatyzacja obsługi zapytań przez 24/7.",
  },
  "services.group.seoai.b3": {
    en: "I'll make sure local clients can see you on Google Maps.",
    pl: "Optymalizacja w Mapach Google: zwiększenie widoczności firmy dla klientów z Twojej najbliższej okolicy.",
  },
  "services.group.seoai.cta": {
    en: "Check my visibility",
    pl: "Sprawdź moją widoczność",
  },
  "services.group.care.title": {
    en: "Full technical care - your external IT department.",
    pl: "Pełna opieka techniczna - Twój zewnętrzny dział IT.",
  },
  "services.group.care.desc": {
    en: "You're not interested in technology and don't want to waste time configuring it? I'll take everything on myself. From buying the domain and hosting, through design and coding, to ongoing maintenance. You focus on business; I make sure your technology simply works.",
    pl: "Nie interesuje Cię technologia i nie chcesz tracić czasu na jej konfigurację? Wezmę wszystko na siebie. Od zakupu domeny i hostingu, przez projekt i kodowanie, aż po stałe utrzymanie. Ty zajmujesz się biznesem, ja dbam, żeby Twoja technologia po prostu działała.",
  },
  "services.group.care.b1": {
    en: "I'll register the domain, configure hosting, and company email for you.",
    pl: "Kompleksowy start online: rejestracja domeny, konfiguracja stabilnego hostingu i poczty firmowej.",
  },
  "services.group.care.b2": {
    en: "I'll create a unique website from the first line of code, tailored to your brand.",
    pl: "Automatyzacja sprzedaży cyfrowej: wdrożenie systemów płatności i dystrybucji produktów cyfrowych.",
  },
  "services.group.care.b3": {
    en: "I'll take care of security and keeping the data on the site up to date.",
    pl: "Stałe wsparcie i bezpieczeństwo: regularne aktualizacje danych oraz monitoring poprawności działania strony.",
  },
  "services.group.care.cta": {
    en: "I need support",
    pl: "Potrzebuję wsparcia",
  },

  // Lead / Contact
  "lead.badge": { en: "Contact", pl: "Kontakt" },
  "lead.heading": {
    en: "Let's talk about your project",
    pl: "Zróbmy pierwszy krok do Twojego sukcesu online",
  },
  "lead.subtitle.highlight": {
    en: "Do you have a specific need? Or maybe you don't know where to start? Perhaps you have a vision but don't know exactly how to tackle it?",
    pl: "Masz wizję, ale nie wiesz, jak ją technicznie 'ugryźć'? A może po prostu potrzebujesz strony, która w końcu zacznie na siebie zarabiać?",
  },
  "lead.subtitle.rest": {
    en: " Get in touch. I'll guide you through the entire process—from the first brainstorming session, through choosing the technology, to launching the finished site.",
    pl: " Napisz do mnie. Przejdziemy wspólnie przez cały proces. Nie oferuję tylko kodu, oferuję spokój i pewność, że Twój biznes jest w dobrych rękach.",
  },
  "lead.body.highlight": {
    en: "I treat every project individually.",
    pl: "Każdy projekt traktuję indywidualnie.",
  },
  "lead.body.rest": {
    en: " Whether you need a simple business card site or an advanced system with AI — I'm here to turn your challenges into effective solutions.",
    pl: " Niezależnie od tego, czy potrzebujesz prostej wizytówki, czy zaawansowanego systemu z AI - jestem tu, aby zamienić Twoje wyzwania w sprawne rozwiązania.",
  },
  "lead.custom": {
    en: "Do you have a non-standard request? Write freely! I love projects that require unconventional thinking. Describe your idea and together we'll figure out how to execute it best.",
    pl: "Masz niestandardowe zlecenie? Napisz śmiało! Uwielbiam projekty, które wymagają nieszablonowego myślenia. Opisz swój pomysł, a wspólnie zastanowimy się, jak go najlepiej zrealizować.",
  },
  "lead.emailOrFormPrefix": {
    en: "Send an email to ",
    pl: "Wyślij maila na ",
  },
  "lead.emailOrFormSuffix": {
    en: " or use the form.",
    pl: " lub skorzystaj z formularza.",
  },
  "lead.messageLabel": { en: "What do you need?", pl: "Czego potrzebujesz?" },
  "lead.name": { en: "Your Name", pl: "Twoje Imię" },
  "lead.email": { en: "Email Address", pl: "Adres Email" },
  "lead.submit": { en: "Send Message", pl: "Wyślij wiadomość" },
  "lead.privacyNote": {
    en: "Your data is safe. I reply within 24h.",
    pl: "Twoje dane są bezpieczne. Odpowiadam w ciągu 24h.",
  },
  "lead.error": {
    en: "Something went wrong. Please try again in a moment.",
    pl: "Coś poszło nie tak. Spróbuj ponownie za chwilę.",
  },
  "lead.antiSpamNote": {
    en: "We use anti-spam protections so your message safely reaches my inbox.",
    pl: "Używamy zabezpieczeń anty-spamowych, aby Twoja wiadomość bezpiecznie trafiła do mojej skrzynki.",
  },
  "lead.rateLimitExceeded": {
    en: "Oops! It looks like my inbox is very busy right now. Please write to me directly at: ",
    pl: "Ups! Wygląda na to, że moja skrzynka jest teraz bardzo oblegana. Proszę, napisz do mnie bezpośrednio na adres: ",
  },
  "lead.errors.nameRequired": {
    en: "Name is required",
    pl: "Imię jest wymagane",
  },
  "lead.errors.nameTooLong": {
    en: "Name is too long",
    pl: "Imię jest za długie",
  },
  "lead.errors.emailInvalid": {
    en: "Invalid email address",
    pl: "Nieprawidłowy adres email",
  },
  "lead.errors.emailTooLong": {
    en: "Email is too long",
    pl: "Email jest za długi",
  },
  "lead.errors.messageTooShort": {
    en: "Message is too short (min. 10 characters)",
    pl: "Wiadomość jest za krótka (min. 10 znaków)",
  },
  "lead.errors.messageTooLong": {
    en: "Message is too long",
    pl: "Wiadomość jest za długa",
  },

  // Footer
  "footer.rights": {
    en: "All rights reserved.",
    pl: "Wszelkie prawa zastrzeżone.",
  },
};

const normalizeLanguage = (lang?: string): Language =>
  lang?.toLowerCase() === "pl" ? "pl" : "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
  initialLanguage = "en",
}) => {
  const [language, setLanguage] = useState<Language>(() =>
    normalizeLanguage(initialLanguage),
  );

  useEffect(() => {
    setLanguage(normalizeLanguage(initialLanguage));
  }, [initialLanguage]);

  const t = useCallback(
    (key: string): string => {
      const translation = translations[key];
      if (!translation) {
        if (import.meta.env.DEV) {
          console.warn(`Translation missing for key: ${key}`);
        }
        return key;
      }
      return translation[language];
    },
    [language],
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
