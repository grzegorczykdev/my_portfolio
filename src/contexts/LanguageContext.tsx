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
  "nav.about": { en: "", pl: "O mnie" },
  "nav.services": { en: "", pl: "Usługi" },
  "nav.contact": { en: "", pl: "Kontakt" },
  "nav.cta.contact": { en: "", pl: "Skontaktuj się ze mną" },

  // Hero Section
  "hero.stats.years": { en: "", pl: "Lata doświadczenia" },
  "hero.stats.projects": {
    en: "",
    pl: "Dostarczone projekty",
  },
  "hero.stats.satisfaction": {
    en: "",
    pl: "Zadowoleni klienci",
  },
  "hero.headline": {
    en: "",
    pl: "Twoja strona, która sprzedaje. Zbuduję nowoczesny wizerunek Twojej firmy w sieci.",
  },
  "hero.subheadline": {
    en: "",
    pl: "Tworzę szybkie strony wizytówki i landing page'e zoptymalizowane pod wyszukiwarkę Google. Wdrażam inteligentne rozwiązania AI, konfiguruję sprzedaż produktów cyfrowych i dbam o Twoją lokalną widoczność w Google. Pomogę Ci przyciągnąć wartościowych odbiorców i skutecznie zamienić ich w płacących klientów.",
  },
  "hero.cta.primary": {
    en: "",
    pl: "Porozmawiajmy o Twoim biznesie",
  },
  "hero.cta.secondary": { en: "", pl: "Zobacz Usługi" },

  // Why Me Section
  "whyme.header": { en: "", pl: "O mnie" },
  "whyme.title": { en: "", pl: "Dlaczego Ja" },
  "whyme.subtitle": {
    en: "",
    pl: "Łączę pasję i wiedzę z realnymi potrzebami Twojego biznesu",
  },
  "whyme.quality.title": {
    en: "",
    pl: "Architektura Sukcesu",
  },
  "whyme.quality.description": {
    en: "",
    pl: "Kod skrojony pod zysk. Tworzę strony, które zachwycają designem, ale przede wszystkim zarabiają. Rezygnuję z ciężkich szablonów na rzecz autorskich rozwiązań zoptymalizowanych pod SEO od pierwszej linii kodu.",
  },
  "whyme.strategy.title": {
    en: "",
    pl: "SEO & AI Optimization",
  },
  "whyme.strategy.description": {
    en: "",
    pl: "Widoczność w nowej erze. Twoja strona musi być widoczna nie tylko dla ludzi, ale i dla algorytmów. Optymalizuję kod tak, aby Twój biznes był polecany przez asystentów AI, takich jak ChatGPT czy Gemini.",
  },
  "whyme.seo_ai.title": {
    en: "",
    pl: "Automatyzacja Sprzedaży",
  },
  "whyme.seo_ai.description": {
    en: "",
    pl: "Twój biznes na autopilocie. Wdrażam systemy, które sprzedają za Ciebie. Od automatyzacji płatności po inteligentne chatboty i obsługę produktów cyfrowych - Twoja firma zarabia nawet wtedy, gdy Ty odpoczywasz.",
  },
  "whyme.seo_ai.skill1": { en: "", pl: "Sprzedaż 24/7" },
  "whyme.seo_ai.skill2": { en: "", pl: "Płatności online" },
  "whyme.seo_ai.skill3": { en: "", pl: "Produkty cyfrowe" },
  "whyme.seo_ai.skill4": { en: "", pl: "Asystenci AI" },
  "whyme.modern_ai.title": {
    en: "",
    pl: "Partnerstwo, nie tylko usługa",
  },
  "whyme.modern_ai.description": {
    en: "",
    pl: "Nie wiesz od czego zacząć? Przeprowadzę Cię przez cały proces, od wyboru domeny po konfigurację wizytówki, aż do wdrożenia i optymalizacji strony. Otrzymujesz ode mnie pełne wsparcie i narzędzie, które naprawdę rozumiesz i potrafisz obsługiwać.",
  },
  "whyme.modern_ai.skill1": { en: "", pl: "Wsparcie od A do Z" },
  "whyme.modern_ai.skill2": {
    en: "",
    pl: "Jasny plan działania",
  },
  "whyme.modern_ai.skill3": {
    en: "",
    pl: "Doradztwo biznesowe",
  },
  "whyme.modern_ai.skill4": { en: "", pl: "Prosty język" },
  "whyme.effect.label": { en: "", pl: "Efekt" },
  "whyme.quality.effect": {
    en: "",
    pl: "Błyskawiczna strona, gotowa na walkę o pierwsze miejsca w wyszukwiarkach.",
  },
  "whyme.strategy.effect": {
    en: "",
    pl: "Wsparcie przy całym procesie, bez względu na Twój obecny poziom zaawansowania.",
  },
  "whyme.seo_ai.effect": {
    en: "",
    pl: "Skalowalny biznes bez konieczności ciągłego nadzoru.",
  },
  "whyme.partnership.title": {
    en: "",
    pl: "Partnerstwo, nie tylko usługa",
  },
  "whyme.partnership.description": {
    en: "",
    pl: "Nie wiesz od czego zacząć? Przeprowadzę Cię przez cały proces, od wyboru domeny po konfigurację wizytówki, aż do wdrożenia i optymalizacji strony. Otrzymujesz ode mnie pełne wsparcie i narzędzie, które naprawdę rozumiesz i potrafisz obsługiwać.",
  },
  "whyme.cta.label": {
    en: "",
    pl: "Zaplanuj start razem ze mną",
  },
  "whyme.cta.button": {
    en: "",
    pl: "Przejdź do kontaktu",
  },
  "whyme.cta.banner.title": {
    en: "",
    pl: "Doradztwo i wspólna wizja",
  },
  "whyme.cta.banner.body": {
    en: "",
    pl: "Twój biznes jest unikalny, dlatego zanim postawię pierwszą linię kodu, słucham Twoich potrzeb. Działam jako Twój doradca technologiczny. Wspólnie projektujemy rozwiązania, które najlepiej odpowiedzą na wyzwania Twojej branży. To partnerstwo, w którym moja wiedza techniczna spotyka się z Twoim doświadczeniem biznesowym, by stworzyć produkt idealnie skrojony pod Twoich klientów.",
  },
  "whyme.cta.banner.note": {
    en: "",
    pl: "",
  },
  "whyme.combined.title": {
    en: "",
    pl: "Architektura Sukcesu: Kod i Strategia",
  },
  "whyme.combined.description": {
    en: "",
    pl: "Tworzę strony, które nie tylko zachwycają designem, ale przede wszystkim zarabiają. Rezygnuję z ciężkich szablonów na rzecz autorskich rozwiązań, które optymalizuję pod kątem SEO od pierwszej linijki kodu. Dzięki temu Twój serwis jest błyskawiczny, bezpieczny i gotowy na walkę o pierwsze miejsca w Google.",
  },
  "whyme.combined.skill1": { en: "", pl: "Szybkość ładowania" },
  "whyme.combined.skill2": { en: "", pl: "Unikalny projekt" },
  "whyme.combined.skill3": {
    en: "",
    pl: "Optymalizacja pod Google",
  },
  "whyme.combined.skill4": { en: "", pl: "Bezpieczeństwo" },
  // Services Section
  "services.title": { en: "", pl: "Usługi" },
  "services.subtitle.compact": {
    en: "",
    pl: "Trzy obszary, które dowożą szybkość, widoczność i bezproblemową obsługę.",
  },
  "services.group.dev.title": {
    en: "",
    pl: "Development & Design",
  },
  "services.group.dev.desc": {
    en: "",
    pl: "Projektuję i programuję od zera. Stworzę szybką i bezpieczną stronę, która będzie pracowała dla Twojego biznesu.",
  },
  "services.group.dev.b1": {
    en: "",
    pl: "Indywidualny projekt i wdrożenie: unikalna strona dopasowana do potrzeb Twojej marki.",
  },
  "services.group.dev.b2": {
    en: "",
    pl: "Modernizacja obecnego serwisu: optymalizacja kodu i designu w celu przyspieszenia działania strony.",
  },
  "services.group.dev.b3": {
    en: "",
    pl: "Pełna responsywność: bezbłędne wyświetlanie i obsługa na urządzeniach mobilnych oraz tabletach.",
  },
  "services.group.dev.cta": {
    en: "",
    pl: "Chcę nową stronę",
  },
  "services.group.seoai.title": {
    en: "",
    pl: "Widoczność w wyszukiwarkach i nowoczesna obsługa klienta",
  },
  "services.group.seoai.desc": {
    en: "",
    pl: "Sprawię, że klienci łatwo Cię znajdą, a sztuczna inteligencja pomoże Ci ich obsłużyć nawet kiedy śpisz.",
  },
  "services.group.seoai.b1": {
    en: "",
    pl: "Skuteczne pozycjonowanie (SEO): działania nakierowane na sprowadzenie realnych klientów z wyszukiwarki.",
  },
  "services.group.seoai.b2": {
    en: "",
    pl: "Wdrożenie asystenta AI: inteligentna automatyzacja obsługi zapytań przez 24/7.",
  },
  "services.group.seoai.b3": {
    en: "",
    pl: "Optymalizacja w Mapach Google: zwiększenie widoczności firmy dla klientów z Twojej najbliższej okolicy.",
  },
  "services.group.seoai.cta": {
    en: "",
    pl: "Sprawdź moją widoczność",
  },
  "services.group.care.title": {
    en: "",
    pl: "Pełna opieka techniczna - Twój zewnętrzny dział IT.",
  },
  "services.group.care.desc": {
    en: "",
    pl: "Nie interesuje Cię technologia i nie chcesz tracić czasu na jej konfigurację? Wezmę wszystko na siebie. Od zakupu domeny i hostingu, przez projekt i kodowanie, aż po stałe utrzymanie. Ty zajmujesz się biznesem, ja dbam, żeby Twoja technologia po prostu działała.",
  },
  "services.group.care.b1": {
    en: "",
    pl: "Kompleksowy start online: rejestracja domeny, konfiguracja stabilnego hostingu i poczty firmowej.",
  },
  "services.group.care.b2": {
    en: "",
    pl: "Automatyzacja sprzedaży cyfrowej: wdrożenie systemów płatności i dystrybucji produktów cyfrowych.",
  },
  "services.group.care.b3": {
    en: "",
    pl: "Stałe wsparcie i bezpieczeństwo: regularne aktualizacje danych oraz monitoring poprawności działania strony.",
  },
  "services.group.care.cta": {
    en: "",
    pl: "Potrzebuję wsparcia",
  },

  // Lead / Contact
  "lead.badge": { en: "", pl: "Kontakt" },
  "lead.heading": {
    en: "",
    pl: "Zróbmy pierwszy krok do Twojego sukcesu online",
  },
  "lead.subtitle.highlight": {
    en: "",
    pl: "Masz wizję, ale nie wiesz, jak ją technicznie 'ugryźć'? A może po prostu potrzebujesz strony, która w końcu zacznie na siebie zarabiać?",
  },
  "lead.subtitle.rest": {
    en: "",
    pl: " Napisz do mnie. Przejdziemy wspólnie przez cały proces. Nie oferuję tylko kodu, oferuję spokój i pewność, że Twój biznes jest w dobrych rękach.",
  },
  "lead.body.highlight": {
    en: "",
    pl: "Każdy projekt traktuję indywidualnie.",
  },
  "lead.body.rest": {
    en: "",
    pl: " Niezależnie od tego, czy potrzebujesz prostej wizytówki, czy zaawansowanego systemu z AI - jestem tu, aby zamienić Twoje wyzwania w sprawne rozwiązania.",
  },
  "lead.custom": {
    en: "",
    pl: "Masz niestandardowe zlecenie? Napisz śmiało! Uwielbiam projekty, które wymagają nieszablonowego myślenia. Opisz swój pomysł, a wspólnie zastanowimy się, jak go najlepiej zrealizować.",
  },
  "lead.emailOrFormPrefix": {
    en: "",
    pl: "Wyślij maila na ",
  },
  "lead.emailOrFormSuffix": {
    en: "",
    pl: " lub skorzystaj z formularza.",
  },
  "lead.messageLabel": { en: "", pl: "Czego potrzebujesz?" },
  "lead.name": { en: "", pl: "Twoje Imię" },
  "lead.email": { en: "", pl: "Adres Email" },
  "lead.submit": { en: "", pl: "Wyślij wiadomość" },
  "lead.privacyNote": {
    en: "",
    pl: "Twoje dane są bezpieczne. Odpowiadam w ciągu 24h.",
  },
  "lead.error": {
    en: "",
    pl: "Coś poszło nie tak. Spróbuj ponownie za chwilę.",
  },
  "lead.antiSpamNote": {
    en: "",
    pl: "Używamy zabezpieczeń anty-spamowych, aby Twoja wiadomość bezpiecznie trafiła do mojej skrzynki.",
  },
  "lead.rateLimitExceeded": {
    en: "",
    pl: "Ups! Wygląda na to, że moja skrzynka jest teraz bardzo oblegana. Proszę, napisz do mnie bezpośrednio na adres: ",
  },
  "lead.errors.nameRequired": {
    en: "",
    pl: "Imię jest wymagane",
  },
  "lead.errors.nameTooLong": {
    en: "",
    pl: "Imię jest za długie",
  },
  "lead.errors.emailInvalid": {
    en: "",
    pl: "Nieprawidłowy adres email",
  },
  "lead.errors.emailTooLong": {
    en: "",
    pl: "Email jest za długi",
  },
  "lead.errors.messageTooShort": {
    en: "",
    pl: "Wiadomość jest za krótka (min. 10 znaków)",
  },
  "lead.errors.messageTooLong": {
    en: "",
    pl: "Wiadomość jest za długa",
  },

  // Footer
  "footer.rights": {
    en: "",
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
