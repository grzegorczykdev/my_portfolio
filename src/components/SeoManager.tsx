import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://sgweblab.com";

const getLangAndSlug = (
  pathname: string,
): { lang: "pl" | "en"; slug: string } => {
  const segments = pathname.split("/").filter(Boolean);
  const [first, ...rest] = segments;

  const hasLangPrefix = first === "pl" || first === "en";
  const lang: "pl" | "en" =
    first === "pl" ? "pl" : first === "en" ? "en" : "en";

  const slug =
    hasLangPrefix && rest.length > 0
      ? `/${rest.join("/")}`
      : hasLangPrefix
        ? ""
        : pathname === "/"
          ? ""
          : pathname;

  return { lang, slug };
};

const SEO_BY_LANG = {
  pl: {
    title:
      "Strony internetowe Lublin, Warszawa, cała Polska | Sylwia Grzegorczyk",
    description:
      "Strony internetowe Lublin, Warszawa i cała Polska. Tworzę nowoczesne strony firmowe i landing page'e zoptymalizowane pod Google.",
  },
  en: {
    title: "Sylwia Grzegorczyk | Full Stack Engineer & SEO Expert | Worldwide",
    description:
      "Custom websites for businesses worldwide. Modern landing pages, company sites, and e-commerce - optimized for Google. Remote collaboration.",
  },
} as const;

const SeoManager = () => {
  const { pathname } = useLocation();
  const { lang, slug } = getLangAndSlug(pathname);

  const languages: Array<"pl" | "en"> = ["pl", "en"];
  const defaultHref = `${BASE_URL}/en${slug}`;
  const seo = SEO_BY_LANG[lang];

  const canonicalUrl = `${BASE_URL}/${lang}${slug}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:locale" content={lang === "pl" ? "pl_PL" : "en_US"} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {languages.map((code) => (
        <link
          key={code}
          rel="alternate"
          hrefLang={code}
          href={`${BASE_URL}/${code}${slug}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={defaultHref} />
    </Helmet>
  );
};

export default SeoManager;
