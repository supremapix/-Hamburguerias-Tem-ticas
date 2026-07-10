import { motion } from 'motion/react';
import { AGENDA_ITEMS } from '../data';
import { MapPin, Sparkles } from 'lucide-react';

export default function AgendaSection() {
  return (
    <section id="agenda" className="py-24 bg-bf-cream relative overflow-hidden">
      
      {/* Decorative Junina Flags Rope at the top of the section */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden flex justify-center pointer-events-none">
        <svg 
          className="w-full max-w-2xl h-14 animate-flag-swing origin-top" 
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

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading styled in bubble cartoon format */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl uppercase bubble-title-outline text-bf-yellow select-none">
            AGENDA SEMANAL
            <span className="sr-only"> de Eventos, Música ao Vivo e Rodízio de Hambúrguer em Penha-SC</span>
          </h2>
          <p className="text-xs md:text-sm font-baloo-caps text-bf-black mt-2 font-extrabold tracking-wider flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-bf-red shrink-0" />
            <span>Programação especial e eventos temáticos de cinema</span>
          </p>
        </div>

        {/* The Black Container Card (as seen in the flyer: rounded 32-40px, border 4px, shadow-2xl) */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="bg-bf-black p-6 md:p-12 rounded-[32px] md:rounded-[40px] border-4 border-bf-black shadow-2xl relative overflow-hidden"
        >
          {/* Subtle film stripe borders */}
          <div className="absolute top-0 bottom-0 left-2.5 w-3.5 flex flex-col justify-between py-6 opacity-20 pointer-events-none">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 bg-bf-yellow rounded-sm" />
            ))}
          </div>
          <div className="absolute top-0 bottom-0 right-2.5 w-3.5 flex flex-col justify-between py-6 opacity-20 pointer-events-none">
            {[...Array(14)].map((_, i) => (
              <div key={i} className="w-2.5 h-2.5 bg-bf-yellow rounded-sm" />
            ))}
          </div>

          {/* Agenda List of White Pills */}
          <div className="flex flex-col gap-8 md:gap-10 my-4 pl-4 pr-4 md:px-6">
            {AGENDA_ITEMS.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring", 
                  stiffness: 120, 
                  damping: 14, 
                  delay: i * 0.1 
                }}
                className="relative group cursor-pointer"
              >
                
                {/* 1. Circular Thumbnail Overlapping on the Left Edge (~30% leakage) */}
                <div className="absolute -left-5 md:-left-8 top-1/2 -translate-y-1/2 w-16 h-16 md:w-22 md:h-22 rounded-full border-3 border-bf-black bg-bf-yellow shadow-lg overflow-hidden shrink-0 z-20 group-hover:scale-105 transition-transform duration-200">
                  <img
                    src={item.image}
                    alt={item.day}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:rotate-6 transition-transform duration-300"
                  />
                </div>

                {/* 2. White Pill Container */}
                <div className="bg-bf-white group-hover:bg-bf-cream rounded-full border-3 border-bf-black py-4.5 pl-14 md:pl-20 pr-6 md:pr-10 shadow-[4px_4px_0px_0px_#FFB800] group-hover:shadow-[2px_2px_0px_0px_#FFB800] group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  
                  <div className="flex-1">
                    {/* Day Pill Tag */}
                    <span className="text-bf-yellow font-baloo-caps text-xs md:text-sm font-extrabold tracking-wider bg-bf-black px-2.5 py-0.5 rounded-md inline-block mb-1">
                      {item.day}
                    </span>
                    
                    {/* Main Title */}
                    <h3 className="text-bf-black font-baloo-caps text-base md:text-lg font-black leading-tight tracking-wide">
                      {item.title}
                    </h3>
                    
                    {/* Optional Subtitle */}
                    {item.subtitle && (
                      <p className="text-gray-600 text-xs md:text-sm font-semibold font-baloo">
                        {item.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Optional Junina Flags hanging inside card */}
                  {item.hasFlags && (
                    <div className="hidden sm:flex items-center gap-1.5 opacity-80 animate-flag-swing origin-top">
                      <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
                        <polygon points="2,2 18,3 10,25" fill="#E63946" stroke="#1A1A1A" strokeWidth="1.5" />
                        <polygon points="20,4 36,4 28,26" fill="#52B788" stroke="#1A1A1A" strokeWidth="1.5" />
                        <polygon points="38,3 54,1 46,24" fill="#3A86C8" stroke="#1A1A1A" strokeWidth="1.5" />
                      </svg>
                    </div>
                  )}

                  {/* Optional Date Badge on the Right */}
                  {item.dateBadge && (
                    <div className="absolute right-4 -top-3 bg-bf-red text-bf-white text-[10px] md:text-xs font-baloo-caps font-extrabold px-2.5 py-1 rounded-full border-2 border-bf-black shadow-md rotate-6 animate-pulse-whatsapp select-none">
                      {item.dateBadge}
                    </div>
                  )}

                </div>

              </motion.div>
            ))}
          </div>

          {/* Address footer in flyer format */}
          <div className="text-center mt-12 mb-2 flex flex-col items-center gap-2 select-none">
            <div className="flex items-center gap-2 text-bf-yellow font-display text-lg md:text-2xl tracking-wider uppercase">
              <MapPin className="w-5 h-5 stroke-[2.5px]" />
              <span>Av. Alfredo Brunetti, 631</span>
            </div>
            <p className="text-xs font-baloo uppercase text-gray-400 tracking-wider">
              Penha - SC (Pertinho do Beto Carrero World!)
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
