type Language = "pl" | "en";

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  variant?: "desktop" | "mobile";
}

const LanguageToggle = ({
  language,
  onLanguageChange,
  variant = "desktop",
}: LanguageToggleProps) => {
  const isDesktop = variant === "desktop";

  const baseButtonClass = isDesktop
    ? "px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300"
    : "px-3 py-1 text-sm font-medium rounded";

  const activeClass = "bg-primary text-primary-foreground";
  const inactiveClass = "text-muted-foreground hover:text-primary";

  return (
    <div className={isDesktop ? "flex items-center gap-2" : "flex items-center gap-2 py-2"}>
      {!isDesktop && (
        <span className="text-sm text-muted-foreground">Language:</span>
      )}
      {isDesktop ? (
        <div className="flex items-center glass rounded-full p-1.5 border border-white/20 shadow-sm">
          <button
            onClick={() => onLanguageChange("en")}
            className={`${baseButtonClass} ${
              language === "en" ? activeClass : inactiveClass
            }`}
          >
            EN
          </button>
          <button
            onClick={() => onLanguageChange("pl")}
            className={`${baseButtonClass} ${
              language === "pl" ? activeClass : inactiveClass
            }`}
          >
            PL
          </button>
        </div>
      ) : (
        <>
          <button
            onClick={() => onLanguageChange("en")}
            className={`${baseButtonClass} ${
              language === "en" ? activeClass : inactiveClass
            }`}
          >
            EN
          </button>
          <button
            onClick={() => onLanguageChange("pl")}
            className={`${baseButtonClass} ${
              language === "pl" ? activeClass : inactiveClass
            }`}
          >
            PL
          </button>
        </>
      )}
    </div>
  );
};

export default LanguageToggle;
