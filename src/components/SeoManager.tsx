import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://sgweblab.com";

const getLangAndSlug = (pathname: string): { lang: "pl" | "en"; slug: string } => {
  const segments = pathname.split("/").filter(Boolean);
  const [first, ...rest] = segments;

  const hasLangPrefix = first === "pl" || first === "en";
  const lang: "pl" | "en" = first === "pl" ? "pl" : first === "en" ? "en" : "en";

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

const SeoManager = () => {
  const { pathname } = useLocation();
  const { lang, slug } = getLangAndSlug(pathname);

  const languages: Array<"pl" | "en"> = ["pl", "en"];
  const defaultHref = `${BASE_URL}/en${slug}`;

  return (
    <Helmet>
      {languages.map((code) => (
        <link
          key={code}
          rel="alternate"
          hrefLang={code}
          href={`${BASE_URL}/${code}${slug}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={defaultHref} />
      {/* self-reference via current language entry above */}
    </Helmet>
  );
};

export default SeoManager;
