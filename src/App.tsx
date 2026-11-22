import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import TravelGuidePage from './components/pages/TravelGuide';
import { TRAVEL_HUB, getTravelGuide } from './travelGuides';
import AgendaSection from './components/AgendaSection';
import MenuSection from './components/MenuSection';
import FAQSection from './components/FAQSection';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import { SupremaCredit } from './components/SupremaCredit';
import BackToTop from './components/BackToTop';
import ShareButton from './components/ShareButton';
import EnhancedSEO from './components/EnhancedSEO';
import Celebration from './components/Celebration';

// Import newly created page components
import QuemSomos from './components/pages/QuemSomos';
import Contato from './components/pages/Contato';
import UnidadeAlfredo from './components/pages/UnidadeAlfredo';
import UnidadeEugenio from './components/pages/UnidadeEugenio';
import Sitemap from './components/pages/Sitemap';
import CardapioImprimir from './components/pages/CardapioImprimir';
import Blog from './components/pages/Blog';
import {getBlogPostForView} from './blogArticles';
import NotFound from './components/pages/NotFound';

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
  | 'cardapio-imprimir'
  | 'bairro-centro'
  | 'bairro-armacao'
  | 'bairro-praia-grande'
  | 'bairro-gravata'
  | 'bairro-santa-lidia'
  | 'bairro-sao-cristovao'
  | 'bairro-sao-miguel'
  | 'blog'
  | `blog/${string}`
  | 'guia-beto-carrero'
  | `guia-beto-carrero/de-${string}`
  | 'praia-alegre-penha'
  | 'nossa-senhora-de-fatima-penha'
  | 'sao-francisco-de-assis-penha'
  | 'sao-nicolau-penha'
  | 'not-found';

const getInitialView = (): ViewType => {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/^\/|\/$/g, ''); // strip leading/trailing slashes
  if (!path) return 'home';

  const validViews: ViewType[] = [
    'home', 'quem-somos', 'contato', 'unidade-alfredo', 'unidade-eugenio', 'sitemap', 'cardapio-imprimir',
    'bairro-centro', 'bairro-armacao', 'bairro-praia-grande', 'bairro-gravata', 
    'bairro-santa-lidia', 'bairro-sao-cristovao', 'bairro-sao-miguel', 'blog', 'not-found'
  ];

  if (validViews.includes(path as ViewType) || getBlogPostForView(path) || path === TRAVEL_HUB || getTravelGuide(path)) {
    return path as ViewType;
  }
  return 'not-found';
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>(getInitialView);

  const guide = getTravelGuide(currentView);

  // Links to the public agenda keep the same fragment before and after mounting.
  useEffect(() => {
    if (currentView !== 'home' || window.location.hash !== '#agenda') return;
    const frame = window.requestAnimationFrame(() => document.getElementById('agenda')?.scrollIntoView({ block: 'start' }));
    return () => window.cancelAnimationFrame(frame);
  }, [currentView]);

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
                initial={false}
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

            {currentView === 'cardapio-imprimir' && (
              <CardapioImprimir key="cardapio-imprimir" onNavigate={handleNavigate} />
            )}

            {(currentView === 'blog' || currentView.startsWith('blog/')) && (
              <Blog key={currentView} initialSlug={currentView==='blog'?new URLSearchParams(window.location.search).get('post')??undefined:currentView.slice(5)} onNavigate={handleNavigate} />
            )}

            {(currentView === TRAVEL_HUB || guide) && (
              <TravelGuidePage key={currentView} guide={guide} />
            )}

            {currentView === 'not-found' && (
              <NotFound key="not-found" onNavigate={handleNavigate} />
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

        {/* Persistent share button on the left side with social media sharing options */}
        <ShareButton />

        {/* Global premium order success celebration overlay */}
        <Celebration />

      </div>
    </HelmetProvider>
  );
}
