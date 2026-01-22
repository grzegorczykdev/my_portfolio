import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "pl";

interface Translations {
  [key: string]: {
    en: string;
    pl: string;
  };
}

export const translations: Translations = {
  // Navigation
  "nav.home": { en: "Home", pl: "Strona główna" },
  "nav.about": { en: "About", pl: "O mnie" },
  "nav.services": { en: "Services", pl: "Usługi" },
  "nav.contact": { en: "Contact", pl: "Kontakt" },
  "nav.cta.contact": { en: "Contact Me", pl: "Skontaktuj się ze mną" },

  // Hero Section
  "hero.headline": {
    en: "Full Stack Engineer and SEO for the Medical Industry",
    pl: "Kompleksowe strony internetowe & Strategia SEO. Stworzę nowoczesny wizerunek Twojej firmy w sieci.",
  },
  "hero.subheadline": {
    en: "Full Stack Engineer & SEO Expert specializing in health-tech and business solutions. Combining technical excellence with strategic marketing.",
    pl: "Pomagam markom i lokalnym biznesom zamieniać odwiedzających w lojalnych klientów. Projektuję szybkie strony wizytówki oraz skuteczne landing page, które od razu pozycjonuję w Google. Wdrażam inteligentne rozwiązania AI, konfiguruję sprzedaż produktów digitalowych i dbam o Twoją widoczność w mapach Google. Otrzymasz nie tylko kod, ale kompletne narzędzie, które pracuje na Twój sukces 24/7.",
  },
  "hero.cta.primary": {
    en: "Get Free Technical Audit",
    pl: "Porozmawiajmy o Twoim biznesie",
  },
  "hero.cta.secondary": { en: "Explore Services", pl: "Zobacz Usługi" },

  // Feature Highlights
  "feature.pages.title": {
    en: "Websites & Landing Pages",
    pl: "Strony & Landing Page",
  },
  "feature.pages.description": {
    en: "Fast, responsive, and conversion-ready.",
    pl: "Szybkie, responsywne i gotowe do konwersji.",
  },
  "feature.seo.title": { en: "SEO & Google Maps", pl: "SEO & Mapy Google" },
  "feature.seo.description": {
    en: "Be visible where your customers search.",
    pl: "Bądź widoczny tam, gdzie szukają Cię klienci.",
  },
  "feature.ai.title": { en: "AI Automation", pl: "Automatyzacja AI" },
  "feature.ai.description": {
    en: "Smart chats that support your customers for you.",
    pl: "Inteligentne chaty, które obsługują klientów za Ciebie.",
  },
  "feature.payments.title": { en: "Online Payments", pl: "Płatności Online" },
  "feature.payments.description": {
    en: "Simple sales of your digital products and services.",
    pl: "Prosta sprzedaż Twoich e-booków i usług.",
  },

  // Why Me Section
  "whyme.title": { en: "Why Me", pl: "Dlaczego Ja" },
  "whyme.subtitle": {
    en: "I combine passion and expertise with the real needs of your business",
    pl: "Łączę pasję i wiedzę z realnymi potrzebami Twojego biznesu",
  },
  "whyme.quality.title": {
    en: "Quality without compromise",
    pl: "Jakość bez kompromisów",
  },
  "whyme.quality.description": {
    en: "I don't use pre-made, heavy templates or limited solutions. I build from scratch so your site is secure, fast, and refined in every technical detail, tailored to your needs.",
    pl: "Nie korzystam z gotowych, ociężąłych szablonów i ograniczonych rozwiązań. Tworzę od podstaw, aby twoja strona była bezpieczna, szybka i dopracowana w każdym detalu technicznym, dopasowana do Twoich potrzeb.",
  },
  "whyme.strategy.title": {
    en: "Strategic approach",
    pl: "Strategiczne podejście",
  },
  "whyme.strategy.description": {
    en: "A site nobody sees doesn't earn. From the first line of code I optimize your service for Google and build a structure algorithms love.",
    pl: "Strona, której nikt nie widzi, nie zarabia. Od pierwszej linijki kodu optymalizuję Twój serwis pod wyszukiwarkę Google. Buduję strukturę, którą algorytmy kochają.",
  },
  "whyme.seo_ai.title": {
    en: "SEO & Generative AI Optimization",
    pl: "SEO & Generative AI Optimization",
  },
  "whyme.seo_ai.description": {
    en: "Your site is built for more than Google. I optimize code and content so assistants like ChatGPT or Google Gemini recommend your business, building visibility where customers search today and tomorrow.",
    pl: "Twoja strona nie tylko dla Google. Optymalizuję kod i treści tak, aby Twój biznes był polecany przez asystentów AI, takich jak ChatGPT czy Google Gemini. Buduję widoczność tam, gdzie Twoi klienci szukają odpowiedzi dzisiaj i jutro.",
  },
  "whyme.modern_ai.title": {
    en: "Modern technologies and AI",
    pl: "Nowoczesne technologie i AI",
  },
  "whyme.modern_ai.description": {
    en: "I bring your business into the future. I build sites and implement smart AI assistants plus payment automations so your company can serve customers and sell even while you rest.",
    pl: "Wprowadzam Twój biznes w przyszłość. Nie tylko tworzę strony, ale wdrażam inteligentnych asystentów AI oraz automatyzacje płatności. Dzięki temu Twoja firma może obsługiwać klientów i sprzedawać produkty nawet wtedy, gdy Ty odpoczywasz.",
  },
  "whyme.partnership.title": {
    en: "Partnership, not just a service",
    pl: "Partnerstwo, nie tylko usługa",
  },
  "whyme.partnership.description": {
    en: "Not sure where to start? I guide you through the whole process, from choosing a domain and business listings to launch and optimization. You get full support and tools you truly understand and can use.",
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

  // Services Section
  "services.title": { en: "Services", pl: "Usługi" },
  "services.subtitle": {
    en: "Comprehensive solutions for your digital presence",
    pl: "Kompleksowe rozwiązania dla Twojej obecności cyfrowej",
  },
  "services.webdev.title": {
    en: "Custom Web Development",
    pl: "Tworzenie Stron Od Podstaw",
  },
  "services.webdev.description": {
    en: "Tailored web applications built from scratch. React, Node.js, and modern architectures for optimal performance.",
    pl: "Dopasowane aplikacje webowe tworzone od podstaw. React, Node.js i nowoczesne architektury dla optymalnej wydajności.",
  },
  "services.seo.title": {
    en: "Technical SEO & Performance",
    pl: "Techniczne SEO i Wydajność",
  },
  "services.seo.description": {
    en: "Deep technical audits, Core Web Vitals optimization, and strategic SEO implementation for maximum visibility.",
    pl: "Głębokie audyty techniczne, optymalizacja Core Web Vitals i strategiczna implementacja SEO dla maksymalnej widoczności.",
  },
  "services.security.title": {
    en: "Security Audits",
    pl: "Audyty Bezpieczeństwa",
  },
  "services.security.description": {
    en: "OAuth, JWT, 2FA implementation and security assessments. Protect your users and your business.",
    pl: "Implementacja OAuth, JWT, 2FA i oceny bezpieczeństwa. Chroń swoich użytkowników i biznes.",
  },
  "services.healthtech.title": {
    en: "Health-Tech Solutions",
    pl: "Rozwiązania Health-Tech",
  },
  "services.healthtech.description": {
    en: "Custom calculators, dashboards, and applications for health and wellness businesses.",
    pl: "Niestandardowe kalkulatory, dashboardy i aplikacje dla branży zdrowia i wellness.",
  },

  // Offer - Challenge Section
  "offer.challenge.title": {
    en: "Choose Your Challenge",
    pl: "Wybierz swoje wyzwanie",
  },
  "offer.challenge.subtitle": {
    en: "Pick the situation that sounds like you and see how I fix it.",
    pl: "Wybierz scenariusz, który brzmi znajomo, i zobacz, jak to naprawię.",
  },
  "offer.challenge.label": {
    en: "Problem → Solution",
    pl: "Problem → Rozwiązanie",
  },
  "offer.challenge.cta": {
    en: "See the solution",
    pl: "Zobacz rozwiązanie",
  },
  "offer.challenge.card.web.tag": { en: "Websites", pl: "Strony WWW" },
  "offer.challenge.card.web.title": {
    en: "I have no site or my current one scares visitors",
    pl: "Nie mam strony lub obecna strona straszy",
  },
  "offer.challenge.card.web.description": {
    en: "You get a modern, fast site that leads visitors straight to contact or sale.",
    pl: "Otrzymasz nowoczesną, szybką stronę, która prowadzi odwiedzającego prosto do kontaktu lub zakupu.",
  },
  "offer.challenge.card.ai.tag": { en: "AI Agents", pl: "Agenci AI" },
  "offer.challenge.card.ai.title": {
    en: "Clients keep asking the same questions",
    pl: "Moi klienci zadają ciągle te same pytania",
  },
  "offer.challenge.card.ai.description": {
    en: "I implement an AI chatbot that answers 24/7, captures leads, and schedules calls.",
    pl: "Wdrażam chatbota AI, który odpowiada 24/7, zbiera leady i umawia rozmowy.",
  },
  "offer.challenge.card.seo.tag": { en: "SEO & Maps", pl: "SEO & Maps" },
  "offer.challenge.card.seo.title": {
    en: "No one can find me on Google",
    pl: "Nikt nie może mnie znaleźć w Google",
  },
  "offer.challenge.card.seo.description": {
    en: "Technical SEO, schema, and Google Maps optimization put you in front of local customers.",
    pl: "Techniczne SEO, schema i optymalizacja wizytówki Google Maps stawiają Cię przed lokalnymi klientami.",
  },
  "offer.challenge.card.care.tag": { en: "IT Care", pl: "Opieka IT" },
  "offer.challenge.card.care.title": {
    en: "Tech overwhelms me — I just want it to work",
    pl: "Technologia mnie przytłacza, chcę żeby po prostu działało",
  },
  "offer.challenge.card.care.description": {
    en: "I handle hosting, domains, updates, and fixes so you focus on your business.",
    pl: "Biorę na siebie hosting, domeny, aktualizacje i poprawki, żebyś mógł skupić się na biznesie.",
  },

  // Offer - Pillars
  "offer.pillars.title": {
    en: "Services grouped into four pillars",
    pl: "Usługi poukładane w cztery filary",
  },
  "offer.pillars.subtitle": {
    en: "A clear roadmap from first line of code to long-term growth.",
    pl: "Przejrzysty plan od pierwszej linijki kodu po długofalowy wzrost.",
  },
  "offer.pillars.web.title": {
    en: "Modern Websites",
    pl: "Nowoczesne Strony WWW",
  },
  "offer.pillars.web.point1": {
    en: "Built from scratch or redesigned to match your brand.",
    pl: "Budowa od zera lub redesign spójny z Twoją marką.",
  },
  "offer.pillars.web.point2": {
    en: "Lightning fast, Core Web Vitals-friendly, mobile-first.",
    pl: "Błyskawiczne, zgodne z Core Web Vitals, mobile-first.",
  },
  "offer.pillars.web.point3": {
    en: "Conversion-focused copy and SEO-ready structure.",
    pl: "Copy nastawione na konwersję i struktura gotowa pod SEO.",
  },
  "offer.pillars.ai.title": {
    en: "Intelligent AI Automation",
    pl: "Inteligentna Automatyzacja AI",
  },
  "offer.pillars.ai.point1": {
    en: "AI chatbots and agents that answer clients instantly.",
    pl: "Chatboty i agenci AI, którzy odpowiadają klientom natychmiast.",
  },
  "offer.pillars.ai.point2": {
    en: "FAQ automation, lead capture, and scheduling on autopilot.",
    pl: "Automatyzacja FAQ, zbieranie leadów i umawianie rozmów na autopilocie.",
  },
  "offer.pillars.ai.point3": {
    en: "Integrations with CRM, email, and your current stack.",
    pl: "Integracje z CRM, e-mailem i Twoim obecnym stackiem.",
  },
  "offer.pillars.seo.title": {
    en: "Visibility Online",
    pl: "Widoczność w sieci",
  },
  "offer.pillars.seo.point1": {
    en: "Technical and on-page SEO audits with clear fixes.",
    pl: "Audyty techniczne i on-page z jasnymi poprawkami.",
  },
  "offer.pillars.seo.point2": {
    en: "Architecture, schema, and copy that search engines love.",
    pl: "Architektura, schema i treści, które lubią wyszukiwarki.",
  },
  "offer.pillars.seo.point3": {
    en: "Google Maps profile tuned for local searches.",
    pl: "Wizytówka Google Maps dopracowana pod lokalne wyszukiwania.",
  },
  "offer.pillars.care.title": {
    en: "Your Technical Partner",
    pl: "Twój Partner Techniczny",
  },
  "offer.pillars.care.point1": {
    en: "Hosting, domains, email setup, and secure payments.",
    pl: "Hosting, domeny, konfiguracja poczty i bezpieczne płatności.",
  },
  "offer.pillars.care.point2": {
    en: "Security, monitoring, and backups without the jargon.",
    pl: "Bezpieczeństwo, monitoring i backupy bez technicznego żargonu.",
  },
  "offer.pillars.care.point3": {
    en: "Clear communication, fast response, and ongoing guidance.",
    pl: "Jasna komunikacja, szybka reakcja i stałe doradztwo.",
  },

  // Offer - Care & Hosting
  "offer.hosting.title": { en: "Care & Hosting", pl: "Opieka i Hosting" },
  "offer.hosting.subtitle": {
    en: "Worry-free operations so your site keeps earning.",
    pl: "Bezstresowe utrzymanie, żeby Twoja strona mogła zarabiać.",
  },
  "offer.hosting.body": {
    en: "I handle everything: from buying your domain to secure hosting and technical care. You focus on business, I make sure your site always works.",
    pl: "Zajmuję się wszystkim: od zakupu domeny po bezpieczny hosting i opiekę techniczną. Ty zajmujesz się biznesem, ja dbam, żeby Twoja strona zawsze działała.",
  },
  "offer.hosting.bullet1": {
    en: "Small copy tweaks and updates included in your care plan.",
    pl: "Drobne poprawki tekstu i aktualizacje w pakiecie opieki.",
  },
  "offer.hosting.bullet2": {
    en: "24/7 monitoring, backups, and rapid restore if something breaks.",
    pl: "Monitoring 24/7, backupy i szybkie przywracanie w razie problemów.",
  },
  "offer.hosting.bullet3": {
    en: "Dedicated tech partner who speaks human, not jargon.",
    pl: "Stały opiekun techniczny, który mówi po ludzku, bez żargonu.",
  },
  "offer.hosting.cta": {
    en: "Ask for ongoing care",
    pl: "Poproś o stałą opiekę",
  },
  "offer.hosting.badge": { en: "SLA / Care Plan", pl: "SLA / Plan opieki" },
  "offer.hosting.card.title": {
    en: "Dedicated technical partner",
    pl: "Dedykowany opiekun techniczny",
  },
  "offer.hosting.card.description": {
    en: "Always-on monitoring, proactive updates, and clear communication so you never worry about uptime or security.",
    pl: "Stały monitoring, proaktywne aktualizacje i jasna komunikacja, abyś nie martwił się o dostępność ani bezpieczeństwo.",
  },
  "offer.hosting.card.note": {
    en: "Priority response for my clients",
    pl: "Priorytetowa reakcja dla moich klientów",
  },

  // Lead Magnet
  "lead.title": {
    en: "Get Your Free SEO & Tech Report",
    pl: "Bezpłatny Raport SEO & Tech",
  },
  "lead.subtitle": {
    en: "Discover actionable insights to improve your website's performance and visibility",
    pl: "Odkryj praktyczne wskazówki, aby poprawić wydajność i widoczność Twojej strony",
  },
  "lead.name": { en: "Your Name", pl: "Twoje Imię" },
  "lead.email": { en: "Email Address", pl: "Adres Email" },
  "lead.website": { en: "Website URL", pl: "Adres Strony" },
  "lead.submit": { en: "Get My Free Report", pl: "Pobierz Bezpłatny Raport" },
  "lead.success": {
    en: "Thank you! Your report will be delivered within 24 hours.",
    pl: "Dziękuję! Twój raport zostanie dostarczony w ciągu 24 godzin.",
  },



  // FAQ
  "faq.title": { en: "FAQ", pl: "FAQ" },
  "faq.subtitle": {
    en: "Answers to what clients ask most often — and what Google loves",
    pl: "Odpowiedzi na najczęstsze pytania klientów — i to, co lubi Google",
  },
  "faq.q1.question": {
    en: "How long does it take to build a website?",
    pl: "Ile trwa stworzenie strony?",
  },
  "faq.q1.answer": {
    en: "A focused landing page is usually 2–3 weeks. A full site with multiple subpages and integrations is typically 4–6 weeks, depending on feedback speed and scope.",
    pl: "Skoncentrowany landing page to zwykle 2–3 tygodnie. Pełna strona z wieloma podstronami i integracjami to zazwyczaj 4–6 tygodni, w zależności od tempa feedbacku i zakresu.",
  },
  "faq.q2.question": {
    en: "Will my site be optimized for SEO and speed?",
    pl: "Czy strona będzie zoptymalizowana pod SEO i szybkość?",
  },
  "faq.q2.answer": {
    en: "Yes. I build semantic structure, schema markup (FAQ, breadcrumbs), Core Web Vitals optimizations, and fast hosting/CDN so Google and AI assistants can recommend you.",
    pl: "Tak. Buduję semantyczną strukturę, schema (FAQ, breadcrumbs), optymalizuję Core Web Vitals oraz szybki hosting/CDN, aby Google i asystenci AI mogli Cię polecać.",
  },
  "faq.q3.question": {
    en: "Do you also handle content and copy?",
    pl: "Czy zajmujesz się też treściami i copy?",
  },
  "faq.q3.answer": {
    en: "I can prepare conversion-oriented copy, keyword strategy, and on-page SEO. You get drafts to approve so tone and compliance match your brand.",
    pl: "Mogę przygotować copy nastawione na konwersję, strategię słów kluczowych i on-page SEO. Otrzymujesz szkice do akceptacji, aby ton i zgodność były spójne z marką.",
  },
  "faq.q4.question": {
    en: "What about maintenance after launch?",
    pl: "Co z utrzymaniem po wdrożeniu?",
  },
  "faq.q4.answer": {
    en: "I offer care plans: monitoring, backups, security patches, analytics reviews, and quick tweaks so the site stays fast and secure.",
    pl: "Oferuję plany opieki: monitoring, backupy, poprawki bezpieczeństwa, przeglądy analityki oraz szybkie poprawki, aby strona była szybka i bezpieczna.",
  },
  "faq.q5.question": {
    en: "Can you integrate payments, CRM, or AI chat?",
    pl: "Czy możesz zintegrować płatności, CRM lub chat AI?",
  },
  "faq.q5.answer": {
    en: "Yes. I set up Stripe/Przelewy24, CRM/marketing automations, and AI chat/lead capture so your site can sell and respond 24/7.",
    pl: "Tak. Konfiguruję Stripe/Przelewy24, automatyzacje CRM/marketingowe oraz chat/lead capture z AI, aby Twoja strona sprzedawała i odpowiadała 24/7.",
  },

  // Footer
  "footer.rights": {
    en: "All rights reserved.",
    pl: "Wszelkie prawa zastrzeżone.",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("pl");

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language];
  };

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
