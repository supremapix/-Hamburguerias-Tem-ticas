import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onOpenMobileMenu: () => void;
  isMobileMenuOpen: boolean;
  onNavigate: (view: 'home' | 'quem-somos' | 'contato' | 'unidade-alfredo' | 'unidade-eugenio' | 'sitemap') => void;
}

export default function Header({ onOpenMobileMenu, isMobileMenuOpen, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const orderUrl = "https://wa.me/5547992155989?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20cinematográfico!";

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onNavigate('home');
    const targetId = href.replace('#', '');
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 150);
  };

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        mass: 1.1,
        delay: 0.1
      }}
      className={`fixed top-0 left-0 right-0 z-50 bg-bf-yellow border-b-4 border-bf-black rounded-b-[24px] transition-all duration-300 ${
        isScrolled 
          ? 'py-2 px-4 shadow-[0_6px_0_rgba(0,0,0,0.95)]' 
          : 'py-4 px-6 shadow-[0_4px_0_rgba(0,0,0,0.9)]'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Cinematic Logo - Back to Home */}
        <button 
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3.5 group focus:outline-none cursor-pointer text-left"
        >
          <Logo size={isScrolled ? 'sm' : 'md'} />
          <div className="hidden sm:flex flex-col text-left font-baloo-caps text-[10px] md:text-xs text-bf-black leading-tight">
            <span className="font-extrabold text-bf-black">PUB & DELIVERY</span>
            <span className="text-bf-white drop-shadow-[1.5px_1.5px_0_#1a1a1a]">PENHA - SC</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-2">
          {[
            { label: "Cardápio", href: "#menu" },
            { label: "Agenda", href: "#agenda" },
            { label: "Quem Somos", view: "quem-somos" as const },
            { label: "Contato", view: "contato" as const },
          ].map((link, i) => {
            if ('view' in link) {
              return (
                <button
                  key={i}
                  onClick={() => {
                    onNavigate(link.view);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-2 rounded-full font-baloo-caps text-sm text-bf-black font-extrabold sticker-hover border-2 border-transparent hover:border-bf-black hover:bg-bf-white hover:text-bf-black focus:outline-none cursor-pointer"
                >
                  {link.label}
                </button>
              );
            } else {
              return (
                <a
                  key={i}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-4 py-2 rounded-full font-baloo-caps text-sm text-bf-black font-extrabold sticker-hover border-2 border-transparent hover:border-bf-black hover:bg-bf-white hover:text-bf-black focus:outline-none cursor-pointer"
                >
                  {link.label}
                </a>
              );
            }
          })}
        </nav>

        {/* Desktop WhatsApp CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-bf-black hover:bg-bf-black/90 text-bf-yellow hover:text-bf-yellow font-baloo-caps text-xs md:text-sm px-5 py-3 rounded-full border-2 border-bf-black shadow-[3px_3px_0_#000000] hover:shadow-[1px_1px_0_#000000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 hover-wiggle focus:outline-none"
          >
            <MessageCircle className="w-4 h-4 fill-bf-yellow animate-pulse-whatsapp" />
            <span>Peça seu lanche</span>
          </a>
        </div>

        {/* Mobile Menu Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={onOpenMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Abrir menu de navegação"
            className="w-11 h-11 rounded-full bg-bf-white flex flex-col items-center justify-center gap-1.5 border-3 border-bf-black cartoon-shadow hover:scale-105 active:scale-95 transition-all focus:outline-none cursor-pointer"
          >
            <span className={`w-6 h-1 bg-bf-black rounded-full transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-1 bg-bf-black rounded-full transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-6 h-1 bg-bf-black rounded-full transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

      </div>
    </motion.header>
  );
}
