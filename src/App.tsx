import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
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

// Import newly created page components
import QuemSomos from './components/pages/QuemSomos';
import Contato from './components/pages/Contato';
import UnidadeAlfredo from './components/pages/UnidadeAlfredo';
import UnidadeEugenio from './components/pages/UnidadeEugenio';
import Sitemap from './components/pages/Sitemap';

type ViewType = 'home' | 'quem-somos' | 'contato' | 'unidade-alfredo' | 'unidade-eugenio' | 'sitemap';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-bf-cream text-bf-black overflow-x-hidden flex flex-col justify-between">
      
      {/* Sticky Header with navigation handler */}
      <Header 
        onOpenMobileMenu={handleOpenMobileMenu} 
        isMobileMenuOpen={isMobileMenuOpen} 
        onNavigate={setCurrentView}
      />

      {/* Mobile Menu ClipPath overlay */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={handleCloseMobileMenu} 
        onNavigate={setCurrentView}
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
            <QuemSomos key="quem-somos" onNavigate={setCurrentView} />
          )}

          {currentView === 'contato' && (
            <Contato key="contato" onNavigate={setCurrentView} />
          )}

          {currentView === 'unidade-alfredo' && (
            <UnidadeAlfredo key="unidade-alfredo" onNavigate={setCurrentView} />
          )}

          {currentView === 'unidade-eugenio' && (
            <UnidadeEugenio key="unidade-eugenio" onNavigate={setCurrentView} />
          )}

          {currentView === 'sitemap' && (
            <Sitemap key="sitemap" onNavigate={setCurrentView} />
          )}
        </AnimatePresence>
      </main>

      {/* Footer component shared across all views */}
      <Footer onNavigate={setCurrentView} />

      {/* Suprema Credit Badge persistent on footer */}
      <SupremaCredit />

      {/* Premium BackToTop floating film reel button */}
      <BackToTop />

    </div>
  );
}
