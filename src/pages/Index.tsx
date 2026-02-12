import { lazy, Suspense } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const WhyMeSection = lazy(() => import('@/components/WhyMeSection'));
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const LeadMagnetSection = lazy(() => import('@/components/LeadMagnetSection'));

const Index = () => {
  const location = useLocation();
  const { lang } = useParams<{ lang?: string }>();
  const lower = lang?.toLowerCase();
  const normalizedLang = lower === 'pl' ? 'pl' : lower === 'en' ? 'en' : null;

  if (!normalizedLang) {
    return <Navigate to={`/en${location.search}`} replace />;
  }

  return (
    <LanguageProvider initialLanguage={normalizedLang}>
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <Suspense fallback={<div className="min-h-[60vh]" aria-hidden="true" />}>
            <WhyMeSection />
            <ServicesSection />
            <LeadMagnetSection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
