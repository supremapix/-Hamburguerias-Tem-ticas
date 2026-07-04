import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import AgendaSection from './components/AgendaSection';
import MenuSection from './components/MenuSection';
import FAQSection from './components/FAQSection';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import { SupremaCredit } from './components/SupremaCredit';
import BackToTop from './components/BackToTop';
import EnhancedSEO from './components/EnhancedSEO';

// Import newly created page components
import QuemSomos from './components/pages/QuemSomos';
import Contato from './components/pages/Contato';
import UnidadeAlfredo from './components/pages/UnidadeAlfredo';
import UnidadeEugenio from './components/pages/UnidadeEugenio';
import Sitemap from './components/pages/Sitemap';

// Import newly created neighborhood pages
import BairroCentro from './components/pages/BairroCentro';
import BairroArmacao from './components/pages/BairroArmacao';
import BairroPraiaGrande from './components/pages/BairroPraiaGrande';
import BairroGravata from './components/pages/BairroGravata';
import BairroSantaLidia from './components/pages/BairroSantaLidia';
import BairroSaoCristovao from './components/pages/BairroSaoCristovao';
import BairroSaoMiguel from './components/pages/BairroSaoMiguel';

type ViewType = 
  | 'home' 
  | 'quem-somos' 
  | 'contato' 
  | 'unidade-alfredo' 
  | 'unidade-eugenio' 
  | 'sitemap'
  | 'bairro-centro'
  | 'bairro-armacao'
  | 'bairro-praia-grande'
  | 'bairro-gravata'
  | 'bairro-santa-lidia'
  | 'bairro-sao-cristovao'
  | 'bairro-sao-miguel';

const getInitialView = (): ViewType => {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/^\/|\/$/g, ''); // strip leading/trailing slashes
  if (!path) return 'home';

  const validViews: ViewType[] = [
    'home', 'quem-somos', 'contato', 'unidade-alfredo', 'unidade-eugenio', 'sitemap',
    'bairro-centro', 'bairro-armacao', 'bairro-praia-grande', 'bairro-gravata', 
    'bairro-santa-lidia', 'bairro-sao-cristovao', 'bairro-sao-miguel'
  ];

  if (validViews.includes(path as ViewType)) {
    return path as ViewType;
  }
  return 'home';
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>(getInitialView);

  // Sync state with back/forward history buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getInitialView());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Safe navigation that updates the HTML5 history path for SPA route fidelity
  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    if (typeof window !== 'undefined') {
      const newPath = view === 'home' ? '/' : `/${view}`;
      window.history.pushState(null, '', newPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <HelmetProvider>
      <div className="relative min-h-screen bg-bf-cream text-bf-black overflow-x-hidden flex flex-col justify-between">
        
        {/* Central Enhanced SEO component handling metadata, JSON-LD schemas & service worker */}
        <EnhancedSEO view={currentView} />

        {/* Sticky Header with navigation handler */}
        <Header 
          onOpenMobileMenu={handleOpenMobileMenu} 
          isMobileMenuOpen={isMobileMenuOpen} 
          onNavigate={handleNavigate}
        />

        {/* Mobile Menu ClipPath overlay */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={handleCloseMobileMenu} 
          onNavigate={handleNavigate}
        />

        {/* Main Content Area with Page Router */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            {currentView === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hero Section */}
                <Hero />

                {/* Menu listing section */}
                <MenuSection />

                {/* Weekly Agenda digital flyer card */}
                <AgendaSection />

                {/* FAQ Section */}
                <FAQSection />

                {/* Instagram Feed Section */}
                <InstagramFeed />
              </motion.div>
            )}

            {currentView === 'quem-somos' && (
              <QuemSomos key="quem-somos" onNavigate={handleNavigate} />
            )}

            {currentView === 'contato' && (
              <Contato key="contato" onNavigate={handleNavigate} />
            )}

            {currentView === 'unidade-alfredo' && (
              <UnidadeAlfredo key="unidade-alfredo" onNavigate={handleNavigate} />
            )}

            {currentView === 'unidade-eugenio' && (
              <UnidadeEugenio key="unidade-eugenio" onNavigate={handleNavigate} />
            )}

            {currentView === 'sitemap' && (
              <Sitemap key="sitemap" onNavigate={handleNavigate} />
            )}

            {/* Neighborhood Pages */}
            {currentView === 'bairro-centro' && (
              <BairroCentro key="bairro-centro" onNavigate={handleNavigate} />
            )}

            {currentView === 'bairro-armacao' && (
              <BairroArmacao key="bairro-armacao" onNavigate={handleNavigate} />
            )}

            {currentView === 'bairro-praia-grande' && (
              <BairroPraiaGrande key="bairro-praia-grande" onNavigate={handleNavigate} />
            )}

            {currentView === 'bairro-gravata' && (
              <BairroGravata key="bairro-gravata" onNavigate={handleNavigate} />
            )}

            {currentView === 'bairro-santa-lidia' && (
              <BairroSantaLidia key="bairro-santa-lidia" onNavigate={handleNavigate} />
            )}

            {currentView === 'bairro-sao-cristovao' && (
              <BairroSaoCristovao key="bairro-sao-cristovao" onNavigate={handleNavigate} />
            )}

            {currentView === 'bairro-sao-miguel' && (
              <BairroSaoMiguel key="bairro-sao-miguel" onNavigate={handleNavigate} />
            )}
          </AnimatePresence>
        </main>

        {/* Footer component shared across all views */}
        <Footer onNavigate={handleNavigate} />

        {/* Suprema Credit Badge persistent on footer */}
        <SupremaCredit />

        {/* Premium BackToTop floating film reel button */}
        <BackToTop />

      </div>
    </HelmetProvider>
  );
}
