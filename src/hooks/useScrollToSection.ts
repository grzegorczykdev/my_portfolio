export const useScrollToSection = () => {
  const scrollToSection = (selector: string, onAfterScroll?: () => void) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onAfterScroll?.();
  };
  return { scrollToSection };
};
