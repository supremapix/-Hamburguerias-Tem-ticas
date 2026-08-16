import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AGENDA_PERSONAGENS, AGENDA_SEMANAL } from '../data';
import { MapPin, Sparkles, Smile, Calendar, Clapperboard, Star, MessageCircle, Flame, Ticket, Navigation } from 'lucide-react';

export default function AgendaSection() {
  const [activeTab, setActiveTab] = useState<'personagens' | 'semanal'>('personagens');
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const currentItems = activeTab === 'personagens' ? AGENDA_PERSONAGENS : AGENDA_SEMANAL;
  const currentAddress = activeTab === 'personagens' ? 'AV. ALFREDO BRUNETTI, 631' : 'AV. EUGÊNIO KRAUSE, 3045';
  const currentDetails = activeTab === 'personagens' 
    ? 'Penha - SC (Pertinho do Beto Carrero World!)' 
    : 'Penha - SC (No Coração da Armação!)';
  
  const googleMapsUrl = activeTab === 'personagens'
    ? 'https://maps.google.com/?q=Av.+Alfredo+Brunetti,+631+-+Armacao,+Penha+-+SC'
    : 'https://maps.google.com/?q=Av.+Eugenio+Krause,+3045+-+Armacao,+Penha+-+SC';

  const reservationMessage = encodeURIComponent(
    `Olá Burger Film's! 🎬 Gostaria de reservar uma mesa para a programação de ${
      activeTab === 'personagens' ? 'Personagens (Unidade Beto Carrero)' : 'Agenda Semanal (Unidade Centro/Armação)'
    }!`
  );
  const whatsappUrl = `https://wa.me/5547992155989?text=${reservationMessage}`;

  return (
    <section id="agenda" className="py-24 bg-bf-cream relative overflow-hidden">
      
      {/* Hollywood Cinema Spotlight Beams */}
      <div className="absolute -top-32 -left-20 w-96 h-[600px] bg-gradient-to-b from-yellow-300/35 via-amber-400/10 to-transparent blur-3xl pointer-events-none origin-top animate-cinema-spotlight-l" />
      <div className="absolute -top-32 -right-20 w-96 h-[600px] bg-gradient-to-b from-yellow-300/35 via-amber-400/10 to-transparent blur-3xl pointer-events-none origin-top animate-cinema-spotlight-r" />

      {/* Decorative Junina Flags Rope at the top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden flex justify-center pointer-events-none z-10">
        <svg 
          className="w-full max-w-3xl h-14 animate-flag-swing origin-top opacity-90" 
          viewBox="0 0 600 100" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path d="M10,10 Q300,50 590,10" stroke="#1A1A1A" strokeWidth="3" fill="none" />
          <polygon points="60,20 100,24 80,70" fill="#3A86C8" stroke="#1A1A1A" strokeWidth="2.5" />
          <polygon points="140,28 180,31 160,78" fill="#E63946" stroke="#1A1A1A" strokeWidth="2.5" />
          <polygon points="220,33 260,33 240,81" fill="#52B788" stroke="#1A1A1A" strokeWidth="2.5" />
          <polygon points="300,34 340,33 320,83" fill="#FFB800" stroke="#1A1A1A" strokeWidth="2.5" />
          <polygon points="380,31 420,28 400,77" fill="#E63946" stroke="#1A1A1A" strokeWidth="2.5" />
          <polygon points="460,24 500,19 480,70" fill="#3A86C8" stroke="#1A1A1A" strokeWidth="2.5" />
        </svg>
      </div>

      {/* Ambient Floating Cinema Stars */}
      <div className="absolute top-20 left-8 md:left-24 text-bf-yellow animate-star-twinkle pointer-events-none opacity-70">
        <Sparkles className="w-8 h-8" />
      </div>
      <div className="absolute bottom-28 right-8 md:right-24 text-bf-yellow animate-star-twinkle pointer-events-none opacity-70" style={{ animationDelay: '1.5s' }}>
        <Star className="w-7 h-7 fill-bf-yellow text-bf-black" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Top Live Badge */}
        <div className="flex justify-center mb-3">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bf-black border-2 border-bf-yellow text-bf-yellow font-baloo-caps text-xs shadow-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-bf-red"></span>
            </span>
            <span className="tracking-wider">PROGRAMAÇÃO OFICIAL ATUALIZADA</span>
            <Flame className="w-3.5 h-3.5 text-bf-red animate-bounce" />
          </motion.div>
        </div>

        {/* Section Heading styled in cartoon cinema format */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-5xl md:text-6xl uppercase bubble-title-outline text-bf-yellow select-none flex items-center justify-center gap-3">
            <Clapperboard className="w-8 h-8 sm:w-12 sm:h-12 text-bf-red stroke-[2.5px] shrink-0 inline-block animate-float-loop" />
            <span>PROGRAMAÇÃO DO PUB</span>
            <span className="sr-only"> de Eventos, Personagens e Rodízio em Penha SC</span>
          </h2>
          <p className="text-xs sm:text-sm font-baloo-caps text-bf-black mt-2 font-extrabold tracking-wider flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-bf-red shrink-0" />
            <span>Sessões estelares, encontros inesquecíveis e os melhores burgers de Penha</span>
          </p>
        </div>

        {/* Cinema Marquee Ticker Banner */}
        <div className="mb-8 overflow-hidden rounded-xl bg-bf-black border-3 border-bf-yellow py-2 text-bf-yellow shadow-[4px_4px_0px_0px_#1A1A1A]">
          <div className="animate-marquee-ticker font-baloo-caps text-xs font-black tracking-widest uppercase">
            <span className="mx-4 flex items-center gap-2">⭐ SÓSIA ARYTON SENNA 14/08</span>
            <span className="mx-4 text-bf-red">•</span>
            <span className="mx-4 flex items-center gap-2">⚔️ PERSONAGEM KRATOS 15/08</span>
            <span className="mx-4 text-bf-red">•</span>
            <span className="mx-4 flex items-center gap-2">🤠 PERSONAGEM WOODY 16/08</span>
            <span className="mx-4 text-bf-red">•</span>
            <span className="mx-4 flex items-center gap-2">🍕 NOITE DA PIZZA TODA SEXTA</span>
            <span className="mx-4 text-bf-red">•</span>
            <span className="mx-4 flex items-center gap-2">🍔 RODÍZIO DE MINI BURGERS DOM A QUI</span>
            <span className="mx-4 text-bf-red">•</span>
            <span className="mx-4 flex items-center gap-2">⭐ SÓSIA ARYTON SENNA 14/08</span>
            <span className="mx-4 text-bf-red">•</span>
            <span className="mx-4 flex items-center gap-2">⚔️ PERSONAGEM KRATOS 15/08</span>
            <span className="mx-4 text-bf-red">•</span>
            <span className="mx-4 flex items-center gap-2">🤠 PERSONAGEM WOODY 16/08</span>
            <span className="mx-4 text-bf-red">•</span>
            <span className="mx-4 flex items-center gap-2">🍕 NOITE DA PIZZA TODA SEXTA</span>
            <span className="mx-4 text-bf-red">•</span>
            <span className="mx-4 flex items-center gap-2">🍔 RODÍZIO DE MINI BURGERS DOM A QUI</span>
          </div>
        </div>

        {/* Interactive Tab Toggle Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 max-w-xl mx-auto">
          <button
            onClick={() => setActiveTab('personagens')}
            className={`w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border-3 border-bf-black font-baloo-caps text-xs sm:text-sm font-black transition-all cursor-pointer focus:outline-none relative ${
              activeTab === 'personagens'
                ? 'bg-bf-yellow text-bf-black shadow-[4px_4px_0px_0px_#1A1A1A] scale-105'
                : 'bg-bf-white text-gray-500 hover:text-bf-black hover:bg-bf-cream'
            }`}
          >
            <Smile className={`w-5 h-5 ${activeTab === 'personagens' ? 'text-bf-red animate-bounce' : ''}`} />
            <span>🎭 AGENDA DE PERSONAGENS</span>
            {activeTab === 'personagens' && (
              <span className="absolute -top-2 -right-2 bg-bf-red text-white text-[9px] px-2 py-0.5 rounded-full font-black animate-pulse-whatsapp border border-bf-black">
                VIP
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('semanal')}
            className={`w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full border-3 border-bf-black font-baloo-caps text-xs sm:text-sm font-black transition-all cursor-pointer focus:outline-none relative ${
              activeTab === 'semanal'
                ? 'bg-bf-yellow text-bf-black shadow-[4px_4px_0px_0px_#1A1A1A] scale-105'
                : 'bg-bf-white text-gray-500 hover:text-bf-black hover:bg-bf-cream'
            }`}
          >
            <Calendar className={`w-5 h-5 ${activeTab === 'semanal' ? 'text-bf-red animate-bounce' : ''}`} />
            <span>📅 AGENDA SEMANAL</span>
            {activeTab === 'semanal' && (
              <span className="absolute -top-2 -right-2 bg-bf-red text-white text-[9px] px-2 py-0.5 rounded-full font-black animate-pulse-whatsapp border border-bf-black">
                DELÍCIAS
              </span>
            )}
          </button>
        </div>

        {/* The Black Container Card with Golden Pulse & Film Stripes */}
        <motion.div
          layout
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-bf-black p-5 sm:p-8 md:p-12 rounded-[32px] md:rounded-[44px] border-4 border-bf-black shadow-2xl relative overflow-hidden animate-gold-border-pulse"
        >
          
          {/* Top Cinema Clapboard Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-3.5 bg-[repeating-linear-gradient(45deg,#FFB800,#FFB800_12px,#1A1A1A_12px,#1A1A1A_24px)] opacity-90" />
          
          {/* Subtle film stripe borders on both sides */}
          <div className="absolute top-6 bottom-6 left-2.5 w-3.5 flex flex-col justify-between py-2 opacity-25 pointer-events-none hidden sm:flex">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 bg-bf-yellow rounded-sm" />
            ))}
          </div>
          <div className="absolute top-6 bottom-6 right-2.5 w-3.5 flex flex-col justify-between py-2 opacity-25 pointer-events-none hidden sm:flex">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 bg-bf-yellow rounded-sm" />
            ))}
          </div>

          {/* Tab Title Header inside Card */}
          <div className="text-center pt-2 pb-4">
            <h3 className="text-2xl sm:text-3xl font-display uppercase tracking-wider text-bf-yellow flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-bf-yellow animate-pulse" />
              <span>{activeTab === 'personagens' ? 'AGENDA DE PERSONAGENS' : 'AGENDA SEMANAL'}</span>
              <Sparkles className="w-6 h-6 text-bf-yellow animate-pulse" />
            </h3>
            <p className="text-xs sm:text-sm font-baloo text-gray-300 font-semibold mt-1">
              {activeTab === 'personagens'
                ? 'Encontros especiais, sessões de fotos e momentos inesquecíveis'
                : 'Pizzas artesanais, rodízio de mini burgers e experiências gastronômicas'}
            </p>
          </div>

          {/* Event Items List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-6 md:gap-8 my-4 pl-3 pr-3 sm:px-6"
            >
              {currentItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 130, 
                    damping: 14, 
                    delay: i * 0.09 
                  }}
                  onMouseEnter={() => setHoveredItemId(item.id)}
                  onMouseLeave={() => setHoveredItemId(null)}
                  className="relative group cursor-pointer"
                >
                  
                  {/* Circular Character/Event Thumbnail Overlapping on the Left */}
                  <div className="absolute -left-3 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-3 md:border-4 border-bf-black bg-bf-yellow shadow-[0_8px_20px_rgba(0,0,0,0.6)] overflow-hidden shrink-0 z-20 group-hover:scale-110 group-hover:ring-4 group-hover:ring-bf-yellow transition-all duration-300">
                    <img
                      src={item.image}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* White / Cream Pill Container */}
                  <div className="bg-bf-white group-hover:bg-[#FFFBF0] rounded-2xl sm:rounded-full border-3 border-bf-black py-4 pl-16 sm:pl-20 md:pl-24 pr-4 sm:pr-8 shadow-[4px_4px_0px_0px_#FFB800] group-hover:shadow-[6px_6px_0px_0px_#F59E00] group-hover:-translate-y-1 transition-all duration-200 flex flex-col justify-center relative overflow-hidden">
                    
                    {/* Hover Shimmer Light Sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
                      <div className="flex-1 pr-12 sm:pr-16">
                        
                        {/* Day Tag & Tag Badge */}
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-bf-yellow font-baloo-caps text-xs sm:text-sm font-extrabold tracking-wider bg-bf-black px-3 py-0.5 rounded-md inline-flex items-center gap-1 shadow-sm">
                            <Star className="w-3 h-3 fill-bf-yellow text-bf-black" />
                            {item.day}
                          </span>

                          {item.tagBadge && (
                            <span className="bg-bf-red text-white font-baloo-caps text-[11px] font-black px-2.5 py-0.5 rounded-md border border-bf-black shadow-sm animate-pulse">
                              🍕 {item.tagBadge}
                            </span>
                          )}

                          {item.highlight && (
                            <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-baloo-caps font-bold px-2 py-0.5 rounded-full hidden sm:inline-block">
                              ★ IMPERDÍVEL
                            </span>
                          )}
                        </div>
                        
                        {/* Main Title */}
                        <h4 className="text-bf-black font-baloo-caps text-base sm:text-lg md:text-xl font-black leading-tight tracking-wide group-hover:text-bf-red transition-colors">
                          {item.title}
                        </h4>
                        
                        {/* Optional Subtitle */}
                        {item.subtitle && (
                          <p className="text-gray-700 text-xs sm:text-sm font-semibold font-baloo mt-0.5 line-clamp-2">
                            {item.subtitle}
                          </p>
                        )}
                      </div>

                      {/* Right Date Badge */}
                      {item.dateBadge && (
                        <div className="absolute right-3 sm:right-6 top-3 sm:top-1/2 sm:-translate-y-1/2 bg-bf-red text-bf-white text-xs sm:text-sm font-baloo-caps font-extrabold px-3 py-1.5 rounded-full border-2 border-bf-black shadow-lg rotate-3 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-200 select-none flex items-center gap-1">
                          <span>📅</span>
                          <span>{item.dateBadge}</span>
                        </div>
                      )}

                    </div>

                  </div>

                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Interactive VIP Reservation Ticket CTA Button */}
          <div className="mt-10 pt-6 border-t-2 border-dashed border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Address Info */}
            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-bf-yellow hover:text-white transition-colors group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-bf-yellow/20 border-2 border-bf-yellow flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <MapPin className="w-5 h-5 text-bf-yellow" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 font-baloo uppercase tracking-wider font-semibold">Local do Evento:</p>
                <p className="text-sm sm:text-base font-display tracking-wider text-bf-yellow group-hover:underline flex items-center gap-1">
                  <span>{currentAddress}</span>
                  <Navigation className="w-3.5 h-3.5 inline opacity-70" />
                </p>
                <p className="text-[11px] font-baloo text-gray-400">
                  {currentDetails}
                </p>
              </div>
            </a>

            {/* VIP WhatsApp Ticket Button */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-bf-yellow to-amber-500 text-bf-black font-baloo-caps text-xs sm:text-sm font-black border-3 border-bf-black shadow-[4px_4px_0px_0px_#FFFFFF] hover:shadow-[2px_2px_0px_0px_#FFFFFF] transition-all flex items-center justify-center gap-2 shrink-0 group cursor-pointer"
            >
              <Ticket className="w-5 h-5 text-bf-black group-hover:rotate-12 transition-transform" />
              <span>GARANTIR MESA / RESERVAR VIA WHATSAPP</span>
              <MessageCircle className="w-4 h-4 text-bf-black ml-1" />
            </motion.a>

          </div>

          {/* Bottom Cinema Clapboard Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-3.5 bg-[repeating-linear-gradient(45deg,#FFB800,#FFB800_12px,#1A1A1A_12px,#1A1A1A_24px)] opacity-90" />

        </motion.div>

      </div>
    </section>
  );
}

