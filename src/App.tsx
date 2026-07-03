import { useState } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import AgendaSection from './components/AgendaSection';
import MenuSection from './components/MenuSection';
import FAQSection from './components/FAQSection';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleOpenMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-bf-cream text-bf-black overflow-hidden flex flex-col justify-between">
      
      {/* 1. Header Redesign Sticky component */}
      <Header 
        onOpenMobileMenu={handleOpenMobileMenu} 
        isMobileMenuOpen={isMobileMenuOpen} 
      />

      {/* 2. Mobile Menu Paint Explosion clipPath component */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={handleCloseMobileMenu} 
      />

      {/* 3. Hero Redesign Section with animated floating elements & parallax */}
      <Hero />

      {/* 4. Complete Menu listing for Combos and Lanches (Minions / Cinema) */}
      <MenuSection />

      {/* 5. Agenda Semanal (Junina styled digital card flyer representation) */}
      <AgendaSection />

      {/* 5.1 FAQ Section (Local SEO accordion flyer) */}
      <FAQSection />

      {/* 5.2 Instagram Feed Section */}
      <InstagramFeed />

      {/* 6. Footer Redesign Component */}
      <Footer />

    </div>
  );
}
