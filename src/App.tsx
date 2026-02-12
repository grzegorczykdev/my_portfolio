import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import SeoManager from "./components/SeoManager";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const detectBrowserLanguage = (): "pl" | "en" => {
  if (typeof navigator !== "undefined") {
    const lang = navigator.language?.toLowerCase();
    if (lang?.startsWith("pl")) {
      return "pl";
    }
  }
  return "en";
};

const AutoLangRedirect = () => {
  const targetLang = detectBrowserLanguage();
  return <Navigate to={`/${targetLang}`} replace />;
};

const App = () => (
  <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <BrowserRouter>
          <SeoManager />
          <Routes>
            <Route path="/:lang/*" element={<Index />} />
            <Route path="/" element={<AutoLangRedirect />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
);

export default App;
