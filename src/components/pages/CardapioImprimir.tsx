import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Printer, ArrowLeft, Film, Trophy, Flame, Gift, Star, Clock, Sparkles } from 'lucide-react';
import { MENU_ITEMS } from '../../data';

interface PageProps {
  onNavigate: (view: any) => void;
  key?: string;
}

export default function CardapioImprimir({ onNavigate }: PageProps) {
  const [ecoMode, setEcoMode] = useState(false);

  // Group items by category/subcategory for the flyer layout
  const burgersCinema = MENU_ITEMS.filter(item => item.subcategory === 'cinema').slice(0, 8);
  const burgersCopa = MENU_ITEMS.filter(item => item.subcategory === 'copa').slice(0, 4);
  const combos = MENU_ITEMS.filter(item => item.category === 'combos').slice(0, 4);
  const petiscos = MENU_ITEMS.filter(item => item.category === 'petiscos').slice(0, 4);
  const pizzas = MENU_ITEMS.filter(item => item.category === 'pizzas').slice(0, 4);
  const sobremesas = MENU_ITEMS.filter(item => item.category === 'sobremesas').slice(0, 4);

  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen pt-32 pb-16 px-4 md:px-8 bg-bf-cream text-bf-black print:bg-white print:text-black print:pt-0 print:pb-0"
    >
      {/* Action panel at top - Hidden when printing */}
      <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-bf-white border-3 border-bf-black p-4 rounded-2xl shadow-[4px_4px_0_#1A1A1A] print:hidden">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-sm font-baloo-caps font-black uppercase text-bf-black hover:text-bf-red transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[3px]" />
          <span>Voltar para o site</span>
        </button>

        <div className="flex flex-wrap items-center gap-4">
          {/* Mode Switcher */}
          <button
            onClick={() => setEcoMode(!ecoMode)}
            className={`flex items-center gap-2 text-xs font-baloo-caps font-black uppercase px-4 py-2 border-2 border-bf-black rounded-lg transition-colors cursor-pointer ${
              ecoMode 
                ? 'bg-green-100 text-green-800' 
                : 'bg-bf-yellow text-bf-black hover:bg-bf-yellow-deep'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{ecoMode ? "Modo Clássico" : "Modo Eco (Fundo Branco)"}</span>
          </button>

          {/* Print Button */}
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 bg-bf-black text-bf-yellow hover:bg-bf-red hover:text-bf-white text-xs font-baloo-caps font-black uppercase px-5 py-2.5 border-2 border-bf-black rounded-lg shadow-[2px_2px_0_#1A1A1A] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir Cardápio (A4)</span>
          </button>
        </div>
      </div>

      {/* Main A4 styled Paper Container */}
      <div 
        id="printable-a4-sheet"
        className={`mx-auto w-full max-w-[210mm] min-h-[297mm] p-8 md:p-12 border-4 border-bf-black shadow-2xl relative overflow-hidden transition-all duration-300 ${
          ecoMode 
            ? 'bg-white text-black' 
            : 'bg-bf-black text-bf-white'
        } print:border-0 print:shadow-none print:p-4 print:max-w-none print:w-full print:bg-white print:text-black`}
      >
        {/* Film Strip Left Border decoration - Hidden in Eco/Print Mode */}
        {!ecoMode && (
          <div className="absolute top-0 bottom-0 left-2 w-4 flex flex-col justify-between py-6 opacity-15 print:hidden">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-bf-yellow rounded-sm" />
            ))}
          </div>
        )}

        {/* Film Strip Right Border decoration - Hidden in Eco/Print Mode */}
        {!ecoMode && (
          <div className="absolute top-0 bottom-0 right-2 w-4 flex flex-col justify-between py-6 opacity-15 print:hidden">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-bf-yellow rounded-sm" />
            ))}
          </div>
        )}

        {/* Header Section */}
        <div className="text-center border-b-4 border-double border-current pb-6 mb-8 relative">
          <div className="flex justify-center items-center gap-3 mb-2">
            <Film className={`w-8 h-8 ${ecoMode ? 'text-black' : 'text-bf-yellow'} animate-pulse`} />
            <span className={`font-display text-4xl md:text-5xl tracking-widest uppercase ${ecoMode ? 'text-black' : 'text-bf-yellow'}`}>
              BURGER FILMS
            </span>
            <Film className={`w-8 h-8 ${ecoMode ? 'text-black' : 'text-bf-yellow'} animate-pulse`} />
          </div>
          <p className="font-baloo-caps text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] mb-4 opacity-90">
            🎬 A Melhor Experiência Cinematográfica do Hambúrguer Artesanal 🎬
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-baloo font-bold opacity-80">
            <span>📍 Penha, Santa Catarina (Perto do Beto Carrero)</span>
            <span>📞 (47) 99215-5989</span>
            <span>⭐ @burgerfilms.penha</span>
          </div>
        </div>

        {/* A4 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left">
          
          {/* Column 1: Burgers de Cinema */}
          <div className="space-y-6">
            <div>
              <h3 className={`font-display text-xl uppercase tracking-wider border-b-2 border-current pb-1 mb-3 flex items-center gap-2 ${ecoMode ? 'text-black' : 'text-bf-yellow'}`}>
                <Film className="w-5 h-5" />
                <span>Burgers de Cinema</span>
              </h3>
              <div className="space-y-4">
                {burgersCinema.map(item => (
                  <div key={item.id} className="group">
                    <div className="flex justify-between items-baseline gap-2 font-baloo-caps font-black text-sm uppercase">
                      <span className="flex items-center gap-1">
                        <Star className={`w-3.5 h-3.5 fill-current ${ecoMode ? 'text-yellow-600' : 'text-bf-yellow'}`} />
                        {item.name}
                      </span>
                      <span className="shrink-0">R$ {item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-xs mt-0.5 leading-relaxed font-baloo font-medium opacity-80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Copa 2026 Specials */}
            <div>
              <h3 className={`font-display text-xl uppercase tracking-wider border-b-2 border-current pb-1 mb-3 flex items-center gap-2 ${ecoMode ? 'text-black' : 'text-bf-yellow'}`}>
                <Trophy className="w-5 h-5" />
                <span>Edição Especial - Copa 2026</span>
              </h3>
              <div className="space-y-4">
                {burgersCopa.map(item => (
                  <div key={item.id}>
                    <div className="flex justify-between items-baseline gap-2 font-baloo-caps font-black text-sm uppercase">
                      <span>{item.name}</span>
                      <span className="shrink-0">R$ {item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-xs mt-0.5 leading-relaxed font-baloo font-medium opacity-80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Combos, Pizzas, Petiscos & Sobremesas */}
          <div className="space-y-6">
            {/* Combos Cinematográficos */}
            <div>
              <h3 className={`font-display text-xl uppercase tracking-wider border-b-2 border-current pb-1 mb-3 flex items-center gap-2 ${ecoMode ? 'text-black' : 'text-bf-yellow'}`}>
                <Gift className="w-5 h-5" />
                <span>Combos Especiais</span>
              </h3>
              <div className="space-y-4">
                {combos.map(item => (
                  <div key={item.id}>
                    <div className="flex justify-between items-baseline gap-2 font-baloo-caps font-black text-sm uppercase">
                      <span>{item.name}</span>
                      <span className="shrink-0">R$ {item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-xs mt-0.5 leading-relaxed font-baloo font-medium opacity-80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pizzas Temáticas */}
            <div>
              <h3 className={`font-display text-xl uppercase tracking-wider border-b-2 border-current pb-1 mb-3 flex items-center gap-2 ${ecoMode ? 'text-black' : 'text-bf-yellow'}`}>
                <Flame className="w-5 h-5" />
                <span>Pizzas Temáticas</span>
              </h3>
              <div className="space-y-4">
                {pizzas.map(item => (
                  <div key={item.id}>
                    <div className="flex justify-between items-baseline gap-2 font-baloo-caps font-black text-sm uppercase">
                      <span>{item.name}</span>
                      <span className="shrink-0">R$ {item.price.toFixed(2)}</span>
                    </div>
                    <p className="text-xs mt-0.5 leading-relaxed font-baloo font-medium opacity-80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Petiscos & Sobremesas Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className={`font-display text-sm uppercase tracking-wider border-b border-current pb-0.5 mb-2 ${ecoMode ? 'text-black' : 'text-bf-yellow'}`}>
                  Petiscos & Extras
                </h4>
                <div className="space-y-2.5">
                  {petiscos.map(item => (
                    <div key={item.id}>
                      <div className="flex justify-between items-baseline gap-1 font-baloo-caps font-black text-[11px] uppercase">
                        <span className="truncate max-w-[120px]">{item.name}</span>
                        <span className="shrink-0">R${item.price.toFixed(1)}0</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className={`font-display text-sm uppercase tracking-wider border-b border-current pb-0.5 mb-2 ${ecoMode ? 'text-black' : 'text-bf-yellow'}`}>
                  Sobremesas Doces
                </h4>
                <div className="space-y-2.5">
                  {sobremesas.map(item => (
                    <div key={item.id}>
                      <div className="flex justify-between items-baseline gap-1 font-baloo-caps font-black text-[11px] uppercase">
                        <span className="truncate max-w-[120px]">{item.name}</span>
                        <span className="shrink-0">R${item.price.toFixed(1)}0</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Footer of A4 Poster */}
        <div className="border-t-4 border-double border-current mt-8 pt-6 text-center">
          <p className="font-baloo text-xs font-bold leading-relaxed opacity-90 max-w-lg mx-auto">
            ⭐ Rodízio de Mini Burgers todas as Terças, Quartas e Quintas-Feiras! ⭐ <br />
            Peça agora mesmo pelo nosso canal de vendas online: <br />
            <strong className={`font-baloo-caps text-sm ${ecoMode ? 'text-black' : 'text-bf-yellow'}`}>burgerfilms.chefware.com.br</strong>
          </p>
          
          {/* Logo stamp effect */}
          <div className="mt-4 flex items-center justify-center gap-1 text-[10px] font-mono tracking-wider uppercase opacity-50">
            <span>© {new Date().getFullYear()} Burger Films Inc.</span>
            <span>•</span>
            <span>Câmera, Chapa, Ação!</span>
          </div>
        </div>

      </div>

      <style>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          #printable-a4-sheet {
            background-color: white !important;
            color: black !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            max-width: none !important;
            min-height: 0 !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
