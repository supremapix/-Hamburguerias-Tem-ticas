import { motion } from 'motion/react';
import React from 'react';
import { Film, Compass, Link2, MapPin, ArrowLeft, HelpCircle, Instagram } from 'lucide-react';

interface PageProps {
  onNavigate: (view: 'home' | 'quem-somos' | 'contato' | 'unidade-alfredo' | 'unidade-eugenio' | 'sitemap') => void;
  key?: string;
}

export default function Sitemap({ onNavigate }: PageProps) {
  
  const handleAnchorClick = (anchorId: string) => {
    onNavigate('home');
    // Scroll to anchor after navigation completes slightly
    setTimeout(() => {
      const el = document.getElementById(anchorId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-6 py-32 relative z-10 font-baloo"
    >
      
      {/* Back to home button */}
      <button
        onClick={() => {
          onNavigate('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="inline-flex items-center gap-2 bg-bf-white hover:bg-bf-yellow text-bf-black font-baloo-caps text-xs font-black px-4 py-2.5 rounded-full border-2 border-bf-black shadow-[2px_2px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer mb-8"
      >
        <ArrowLeft className="w-4 h-4 stroke-[3px]" />
        <span>VOLTAR PARA A HOME</span>
      </button>

      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="text-bf-red font-baloo-caps text-xs font-black tracking-widest bg-bf-white border-2 border-bf-black px-3.5 py-1.5 rounded-full inline-block mb-3 select-none">
          🗺️ GUIA DO ELENCO
        </span>
        <h1 className="text-4xl md:text-6xl uppercase bubble-title-outline text-bf-yellow leading-none">
          MAPA DO SITE
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mt-3 font-medium">
          O roteiro completo do nosso site. Navegue facilmente por qualquer uma de nossas telas, seções e canais oficiais!
        </p>
      </div>

      {/* Sitemap container - styled like a film reel storyboard with visual separators */}
      <div className="bg-bf-white border-4 border-bf-black rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_#1A1A1A] mb-8 relative overflow-hidden">
        
        {/* Animated film stripes on top and bottom borders */}
        <div className="flex justify-between gap-1 mb-8 opacity-10">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-6 h-6 bg-bf-black rounded-sm" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Main Pages */}
          <div className="space-y-5">
            <h3 className="font-display text-xl text-bf-black uppercase flex items-center gap-2 border-b-2 border-dashed border-gray-200 pb-2">
              <Compass className="w-5 h-5 text-bf-red" />
              <span>Páginas Principais</span>
            </h3>

            <ul className="space-y-4 font-semibold text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group flex items-center gap-2 text-gray-700 hover:text-bf-red transition-colors text-left cursor-pointer"
                >
                  <Link2 className="w-4 h-4 text-bf-yellow-deep group-hover:rotate-45 transition-transform" />
                  <span>Página Inicial (Home)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('quem-somos');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group flex items-center gap-2 text-gray-700 hover:text-bf-red transition-colors text-left cursor-pointer"
                >
                  <Link2 className="w-4 h-4 text-bf-yellow-deep group-hover:rotate-45 transition-transform" />
                  <span>Quem Somos (Nossa História)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('contato');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group flex items-center gap-2 text-gray-700 hover:text-bf-red transition-colors text-left cursor-pointer"
                >
                  <Link2 className="w-4 h-4 text-bf-yellow-deep group-hover:rotate-45 transition-transform" />
                  <span>Contato & Formulário de Roteiros</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('sitemap');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group flex items-center gap-2 text-bf-red font-extrabold text-left cursor-pointer"
                >
                  <Link2 className="w-4 h-4 text-bf-yellow-deep rotate-45" />
                  <span>Mapa do Site (Você está aqui!)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Section Anchors on Home page */}
          <div className="space-y-5">
            <h3 className="font-display text-xl text-bf-black uppercase flex items-center gap-2 border-b-2 border-dashed border-gray-200 pb-2">
              <Film className="w-5 h-5 text-bf-red" />
              <span>Seções da Home Page</span>
            </h3>

            <ul className="space-y-4 font-semibold text-sm">
              <li>
                <button
                  onClick={() => handleAnchorClick('menu')}
                  className="group flex items-center gap-2 text-gray-700 hover:text-bf-yellow-deep transition-colors text-left cursor-pointer"
                >
                  <span className="text-xs text-gray-400 font-mono">#menu</span>
                  <span>Nosso Cardápio Interativo</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleAnchorClick('agenda')}
                  className="group flex items-center gap-2 text-gray-700 hover:text-bf-yellow-deep transition-colors text-left cursor-pointer"
                >
                  <span className="text-xs text-gray-400 font-mono">#agenda</span>
                  <span>Agenda Semanal de Eventos</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleAnchorClick('faq')}
                  className="group flex items-center gap-2 text-gray-700 hover:text-bf-yellow-deep transition-colors text-left cursor-pointer"
                >
                  <span className="text-xs text-gray-400 font-mono">#faq</span>
                  <span>SAC Cinematográfico (Dúvidas)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleAnchorClick('instagram-feed')}
                  className="group flex items-center gap-2 text-gray-700 hover:text-bf-yellow-deep transition-colors text-left cursor-pointer"
                >
                  <span className="text-xs text-gray-400 font-mono">#instagram</span>
                  <span>Nossas Redes (Instagram Feed)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Individual Addresses Pages */}
          <div className="space-y-5">
            <h3 className="font-display text-xl text-bf-black uppercase flex items-center gap-2 border-b-2 border-dashed border-gray-200 pb-2">
              <MapPin className="w-5 h-5 text-bf-red" />
              <span>Páginas de Endereço Único</span>
            </h3>

            <ul className="space-y-4 font-semibold text-sm">
              <li>
                <button
                  onClick={() => {
                    onNavigate('unidade-alfredo');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group flex items-center gap-2 text-gray-700 hover:text-bf-red transition-colors text-left cursor-pointer"
                >
                  <Link2 className="w-4 h-4 text-bf-yellow-deep group-hover:rotate-45 transition-transform" />
                  <span>Unidade Alfredo Brunetti (perto Beto Carrero)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    onNavigate('unidade-eugenio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="group flex items-center gap-2 text-gray-700 hover:text-bf-red transition-colors text-left cursor-pointer"
                >
                  <Link2 className="w-4 h-4 text-bf-yellow-deep group-hover:rotate-45 transition-transform" />
                  <span>Unidade Eugênio Krause (centro Armação)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Support & Social */}
          <div className="space-y-5">
            <h3 className="font-display text-xl text-bf-black uppercase flex items-center gap-2 border-b-2 border-dashed border-gray-200 pb-2">
              <HelpCircle className="w-5 h-5 text-bf-red" />
              <span>Canais e Redes</span>
            </h3>

            <ul className="space-y-4 font-semibold text-sm">
              <li>
                <a 
                  href="https://wa.me/5547992155989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors text-left"
                >
                  <Link2 className="w-4 h-4 text-bf-yellow-deep group-hover:rotate-45" />
                  <span>WhatsApp Central: (47) 99215-5989</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/burgerfilms_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors text-left"
                >
                  <Instagram className="w-4 h-4 text-bf-yellow-deep" />
                  <span>Instagram Oficial @burgerfilms_</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Animated film stripes at the bottom */}
        <div className="flex justify-between gap-1 mt-10 opacity-10">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="w-6 h-6 bg-bf-black rounded-sm" />
          ))}
        </div>

      </div>

    </motion.div>
  );
}
