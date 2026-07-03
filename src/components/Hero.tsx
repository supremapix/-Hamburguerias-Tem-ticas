import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Check mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track mouse for parallax (Desktop only)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !heroRef.current) return;
    const { left, top, width, height } = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / (width / 2);
    const y = (e.clientY - top - height / 2) / (height / 2);
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // WhatsApp link
  const orderUrl = "https://wa.me/5547992155989?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20cinematográfico!";

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center bg-gradient-to-b from-bf-yellow to-bf-yellow-deep overflow-hidden"
    >
      
      {/* Subtle Pattern Overlay (Film Roll / Burgers theme, opacity 0.06) */}
      <div 
        className="absolute inset-0 pointer-events-none select-none opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpath d='M15 15h12v12H15zm0 15h12v12H15zm0 15h12v12H15zM45 45c0-11 9-20 20-20s20 9 20 20H45zm40 10v10H35V55h50z' fill='%231a1a1a' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />

      {/* --- Floating Ingredient Left: Fresh Tomato --- */}
      <motion.div
        animate={{
          x: mousePos.x * -25,
          y: mousePos.y * -25,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 15 }}
        className="absolute top-[12%] left-[-4%] md:top-[16%] md:left-[2%] z-20 w-24 h-24 md:w-36 md:h-36 pointer-events-none filter drop-shadow-[0_12px_8px_rgba(0,0,0,0.25)] animate-float-loop"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full blur-[0.4px]">
          {/* Sliced Tomato representation with seeds */}
          <circle cx="50" cy="50" r="46" fill="#E63946" stroke="#1A1A1A" strokeWidth="3" />
          <circle cx="50" cy="50" r="38" fill="#F25C54" />
          {/* Inner segments */}
          <path d="M50,15 C62,15 72,25 72,37 C72,42 66,48 50,48 Z" fill="#D62828" stroke="#1A1A1A" strokeWidth="2" />
          <path d="M50,85 C62,85 72,75 72,63 C72,58 66,52 50,52 Z" fill="#D62828" stroke="#1A1A1A" strokeWidth="2" />
          <path d="M50,15 C38,15 28,25 28,37 C28,42 34,48 50,48 Z" fill="#D62828" stroke="#1A1A1A" strokeWidth="2" />
          <path d="M50,85 C38,85 28,75 28,63 C28,58 34,52 50,52 Z" fill="#D62828" stroke="#1A1A1A" strokeWidth="2" />
          {/* Yellow seeds */}
          <circle cx="58" cy="32" r="3" fill="#FFD166" />
          <circle cx="62" cy="40" r="2.5" fill="#FFD166" />
          <circle cx="42" cy="32" r="3" fill="#FFD166" />
          <circle cx="38" cy="40" r="2.5" fill="#FFD166" />
          <circle cx="58" cy="68" r="3" fill="#FFD166" />
          <circle cx="62" cy="60" r="2.5" fill="#FFD166" />
          <circle cx="42" cy="68" r="3" fill="#FFD166" />
          <circle cx="38" cy="60" r="2.5" fill="#FFD166" />
        </svg>
      </motion.div>

      {/* --- Floating Ingredient Right: Crispy Fries --- */}
      <motion.div
        animate={{
          x: mousePos.x * 30,
          y: mousePos.y * 30,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 15 }}
        className="absolute bottom-[10%] right-[-3%] md:bottom-[15%] md:right-[3%] z-20 w-24 h-24 md:w-36 md:h-36 pointer-events-none filter drop-shadow-[0_12px_10px_rgba(0,0,0,0.3)] animate-float-loop-reverse"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full blur-[0.4px]">
          {/* Golden Fries Carton representation */}
          <path d="M25,85 L75,85 L80,45 L20,45 Z" fill="#E63946" stroke="#1A1A1A" strokeWidth="3" />
          {/* White Emblem on Box */}
          <circle cx="50" cy="65" r="14" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2" />
          <path d="M46,65 L54,65 M50,61 L50,69" stroke="#1A1A1A" strokeWidth="2" />
          {/* French Fries sticking out */}
          <rect x="25" y="15" width="8" height="35" rx="2" fill="#FFD166" stroke="#1A1A1A" strokeWidth="2" transform="rotate(-15 25 15)" />
          <rect x="35" y="10" width="8" height="40" rx="2" fill="#FFB800" stroke="#1A1A1A" strokeWidth="2" transform="rotate(-5 35 10)" />
          <rect x="45" y="8" width="8" height="42" rx="2" fill="#FFD166" stroke="#1A1A1A" strokeWidth="2" />
          <rect x="55" y="12" width="8" height="38" rx="2" fill="#FFB800" stroke="#1A1A1A" strokeWidth="2" transform="rotate(8 55 12)" />
          <rect x="65" y="18" width="8" height="32" rx="2" fill="#FFD166" stroke="#1A1A1A" strokeWidth="2" transform="rotate(18 65 18)" />
          <rect x="40" y="22" width="8" height="30" rx="2" fill="#FFD166" stroke="#1A1A1A" strokeWidth="2" transform="rotate(-2 40 22)" />
          <rect x="50" y="20" width="8" height="32" rx="2" fill="#FFB800" stroke="#1A1A1A" strokeWidth="2" transform="rotate(3 50 20)" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Side: Staggered Content Panel */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* 1. Dropping Badge with Spring Bounce */}
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 10,
              delay: 0.2
            }}
            className="inline-flex items-center gap-2 bg-bf-black text-bf-yellow px-4 py-2 rounded-full border-2 border-bf-black shadow-[3px_3px_0_rgba(0,0,0,0.2)] mb-6 select-none"
          >
            <Sparkles className="w-4 h-4 fill-bf-yellow animate-pulse-whatsapp" />
            <span className="font-baloo-caps text-xs md:text-sm font-extrabold tracking-wider">
              ⭐ Eleita Melhor Hamburgueria de Penha ⭐
            </span>
          </motion.div>

          {/* 2. Headline with outline text (Elastic Letter Bounce) */}
          <div className="mb-6 select-none">
            <motion.h1 
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 12,
                delay: 0.35
              }}
              className="text-bf-white text-5xl md:text-7xl lg:text-8xl bubble-title-outline tracking-wider uppercase leading-none"
            >
              COMIDAS &<br />
              <span className="text-bf-black drop-shadow-[4px_4px_0_#ffffff]">BEBIDAS</span>
              <span className="sr-only"> - Burger Films: Hamburgueria Artesanal em Penha-SC, Pub e Delivery perto do Beto Carrero World</span>
            </motion.h1>
          </div>

          {/* 3. Paragraph Info */}
          <motion.p
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-bf-black text-base md:text-lg lg:text-xl font-medium max-w-xl mb-8 leading-relaxed font-baloo"
          >
            Os maiores sucessos das telonas transformados em sabores espetaculares. Venha viver uma verdadeira sessão de cinema em forma de hambúrguer artesanal!
          </motion.p>

          {/* 4. Action CTAs */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-bf-black hover:bg-bf-black/95 text-bf-yellow hover:text-bf-yellow font-baloo-caps text-sm md:text-base px-8 py-4 rounded-full border-3 border-bf-black shadow-[4px_4px_0_#FFFFFF] hover:shadow-[1px_1px_0_#FFFFFF] hover:translate-x-[3px] hover:translate-y-[3px] transition-all animate-shake-attention cursor-pointer"
            >
              <span>Pedir Agora!</span>
              <ArrowRight className="w-4 h-4 stroke-[3px]" />
            </a>

            <a
              href="#combos"
              className="flex items-center justify-center w-full sm:w-auto bg-bf-white hover:bg-bf-cream text-bf-black font-baloo-caps text-sm md:text-base px-8 py-4 rounded-full border-3 border-bf-black shadow-[4px_4px_0_#1A1A1A] hover:shadow-[1px_1px_0_#1A1A1A] hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
            >
              <span>Ver Cardápio</span>
            </a>
          </motion.div>

        </div>

        {/* Right Side: Hero Featured Burger Wrap inside a Flyer-like Card */}
        <div className="lg:col-span-5 flex justify-center w-full">
          <motion.div
            initial={{ scale: 0.75, rotate: -8, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 13,
              delay: 0.5
            }}
            className="w-full max-w-md bg-bf-black p-6 md:p-8 rounded-[36px] border-4 border-bf-black shadow-2xl relative overflow-hidden flex flex-col items-center justify-center group"
          >
            {/* Film stripes left & right inside card */}
            <div className="absolute top-0 bottom-0 left-2 w-3 flex flex-col justify-between py-4 opacity-25">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2.5 h-2.5 bg-bf-yellow rounded-sm" />
              ))}
            </div>
            <div className="absolute top-0 bottom-0 right-2 w-3 flex flex-col justify-between py-4 opacity-25">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2.5 h-2.5 bg-bf-yellow rounded-sm" />
              ))}
            </div>

            {/* Glowing spotlight effect behind burger */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-bf-yellow rounded-full filter blur-[40px] opacity-20 pointer-events-none group-hover:scale-125 transition-transform duration-700" />

            {/* Core Hero Burger Image */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: infiniteType(), ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[280px] md:max-w-[320px] aspect-square flex items-center justify-center mb-4"
            >
              <img
                src="https://img.burgerfilms.com.br/casino-black-jack-double-burger.jpg"
                alt="Casino Black Jack Double Burger"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain rounded-2xl border-4 border-bf-yellow shadow-[0_12px_24px_rgba(0,0,0,0.5)] transform group-hover:scale-105 group-hover:rotate-[2deg] transition-all duration-300"
              />
            </motion.div>

            {/* Title overlay inside card */}
            <div className="relative z-10 text-center select-none">
              <h2 className="text-bf-yellow font-display text-2xl tracking-wider uppercase mb-1">
                Casino Double
              </h2>
              <p className="text-bf-white text-xs font-baloo uppercase tracking-wider">
                🎬 Estrela Principal do Hero
              </p>
            </div>
          </motion.div>
        </div>

      </div>

      {/* --- Pre-inclined Marquee adhesive tape at the bottom of the section (-1.5deg) --- */}
      <div className="absolute bottom-4 left-0 right-0 overflow-hidden z-20">
        <div className="w-[110%] -left-[5%] relative transform -rotate-[1.5deg] bg-bf-black border-y-4 border-bf-black py-3 shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center select-none">
          <div className="flex gap-12 text-bf-yellow font-display text-sm md:text-base uppercase tracking-wider whitespace-nowrap animate-[marquee_25s_linear_infinite]">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-3">
                <span>Stranger Things Combo com Pão Preto de Cinema</span>
                <span className="text-bf-red">•</span>
                <span>O Famoso Rodízio de Mini Burgers</span>
                <span className="text-bf-white">•</span>
                <span>Experimente a Batata Frita Secreta</span>
                <span className="text-bf-red">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind inline animation setup helper */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

    </section>
  );
}

// Helper to provide clean typing or direct values for loop infinite
function infiniteType() {
  return Infinity;
}
