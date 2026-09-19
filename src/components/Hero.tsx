import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Skull, Flame } from 'lucide-react';

// Bat SVG Component with animated wing flapping
function BatSvg({ size = 42, className = "", color = "#120B10", eyeColor = "#FFB800", strokeColor = "#FFB800" }: { size?: number; className?: string; color?: string; eyeColor?: string; strokeColor?: string }) {
  return (
    <div 
      style={{ width: size, height: (size * 0.55) }} 
      className={`relative inline-block select-none filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] ${className}`}
    >
      <svg
        viewBox="0 0 100 55"
        className="w-full h-full animate-bat-flutter origin-center overflow-visible"
      >
        {/* Bat Body and Wings */}
        <path
          d="M 50 22 
             C 44 14, 28 6, 6 15 
             C 14 26, 20 32, 23 42 
             C 30 35, 38 37, 44 43 
             C 47 33, 46 26, 50 23 
             C 54 26, 53 33, 56 43 
             C 62 37, 70 35, 77 42 
             C 80 32, 86 26, 94 15 
             C 72 6, 56 14, 50 22 Z"
          fill={color}
          stroke={strokeColor}
          strokeWidth="0.8"
        />
        {/* Bat Ears */}
        <polygon points="46,20 43,12 48,16" fill={color} stroke={strokeColor} strokeWidth="0.5" />
        <polygon points="54,20 57,12 52,16" fill={color} stroke={strokeColor} strokeWidth="0.5" />
        {/* Spooky Glowing Eyes */}
        <circle cx="47.5" cy="19.5" r="1.3" fill={eyeColor} />
        <circle cx="52.5" cy="19.5" r="1.3" fill={eyeColor} />
      </svg>
    </div>
  );
}

// Corner Spiderweb
function SpiderWebSvg({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`pointer-events-none opacity-25 select-none ${className}`} fill="none" stroke="#FFB800" strokeWidth="1.2">
      <path d="M0,0 L100,0 M0,0 L85,45 M0,0 L55,75 M0,0 L0,100" />
      <path d="M25,0 C25,12 18,20 0,25" />
      <path d="M50,0 C50,25 35,40 0,50" />
      <path d="M75,0 C75,38 52,60 0,75" />
      <path d="M100,0 C100,52 70,82 0,100" />
    </svg>
  );
}

interface BurstBat {
  id: number;
  targetX: number;
  targetY: number;
  rot: number;
  scale: number;
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [batCount, setBatCount] = useState(0);
  const [burstBats, setBurstBats] = useState<BurstBat[]>([]);
  const [showBatToast, setShowBatToast] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Check mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Track mouse for parallax (Desktop only)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Chefware delivery link
  const orderUrl = "https://burgerfilms.chefware.com.br/";

  const handleScrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.dispatchEvent(new CustomEvent('highlight-menu'));
    }
  };

  // Trigger Burst of Bats on click or hover
  const triggerBatBurst = () => {
    const timestamp = Date.now();
    const newBats: BurstBat[] = Array.from({ length: 8 }).map((_, i) => {
      const angle = (Math.random() * Math.PI * 1.6) - (Math.PI * 0.8);
      const distance = 200 + Math.random() * 260;
      return {
        id: timestamp + i,
        targetX: Math.cos(angle) * distance,
        targetY: -Math.abs(Math.sin(angle) * distance) - 60,
        rot: (Math.random() - 0.5) * 50,
        scale: 0.7 + Math.random() * 0.6
      };
    });

    setBurstBats(prev => [...prev.slice(-16), ...newBats]);
    setBatCount(prev => prev + 8);
    setShowBatToast(true);

    setTimeout(() => {
      setShowBatToast(false);
    }, 2500);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-32 pb-24 flex flex-col justify-center bg-gradient-to-b from-[#180E04] via-[#1A0A0E] to-[#120612] overflow-hidden select-none"
    >
      
      {/* Warm Cinema Spotlight below Yellow Header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[320px] bg-gradient-to-b from-bf-yellow/20 via-bf-yellow/5 to-transparent blur-3xl pointer-events-none" />

      {/* Spiderwebs on corners */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none z-10">
        <SpiderWebSvg className="w-full h-full" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 pointer-events-none z-10 transform scale-x-[-1]">
        <SpiderWebSvg className="w-full h-full" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cpath d='M15 15h12v12H15zm0 15h12v12H15zm0 15h12v12H15zM45 45c0-11 9-20 20-20s20 9 20 20H45zm40 10v10H35V55h50z' fill='%23FFB800' fill-opacity='0.6' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}
      />

      {/* Ambient Bats crossing the Hero Sky (left to right) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div 
          className="absolute top-[14%] -left-[10%] animate-[bat-fly-ambient_18s_linear_infinite]"
          style={{ animationDelay: '0s' }}
        >
          <BatSvg size={38} eyeColor="#FFB800" strokeColor="#FFB800" />
        </div>
        <div 
          className="absolute top-[22%] -left-[10%] animate-[bat-fly-ambient_22s_linear_infinite]"
          style={{ animationDelay: '7s' }}
        >
          <BatSvg size={28} eyeColor="#FF0033" strokeColor="#FFB800" />
        </div>
        <div 
          className="absolute top-[10%] -left-[10%] animate-[bat-fly-ambient_26s_linear_infinite]"
          style={{ animationDelay: '14s' }}
        >
          <BatSvg size={44} eyeColor="#FFDD00" strokeColor="#FFB800" />
        </div>
      </div>

      {/* Eerie Fog Layer */}
      <div className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-t from-[#120612] via-bf-yellow/10 to-transparent pointer-events-none animate-eerie-fog" />

      {/* Floating Halloween Decoration Left: Spooky Jack-o'-Lantern Pumpkin */}
      <motion.div
        animate={{
          x: (mousePos?.x || 0) * -20,
          y: (mousePos?.y || 0) * -20,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 15 }}
        className="hidden lg:block absolute left-8 top-1/3 pointer-events-none z-10"
      >
        <svg viewBox="0 0 100 90" className="w-16 h-16 drop-shadow-[0_0_20px_rgba(255,184,0,0.8)] filter animate-pulse">
          {/* Pumpkin Stem */}
          <path d="M48,15 Q52,5 60,8 Q54,14 50,18 Z" fill="#2E7D32" stroke="#1B5E20" strokeWidth="1" />
          {/* Pumpkin Body */}
          <ellipse cx="50" cy="50" rx="42" ry="34" fill="#FF8500" stroke="#CC5500" strokeWidth="2.5" />
          <path d="M30,22 Q24,50 30,78 M70,22 Q76,50 70,78 M50,16 L50,84" fill="none" stroke="#CC5500" strokeWidth="2" opacity="0.6" />
          {/* Carved Eyes (Evil Triangle) */}
          <polygon points="34,42 43,46 38,36" fill="#1A0800" stroke="#FFB800" strokeWidth="1" />
          <polygon points="66,42 57,46 62,36" fill="#1A0800" stroke="#FFB800" strokeWidth="1" />
          {/* Carved Nose */}
          <polygon points="50,48 47,54 53,54" fill="#1A0800" stroke="#FFB800" strokeWidth="0.8" />
          {/* Carved Jagged Smile */}
          <path d="M28,60 Q50,78 72,60 Q65,72 50,72 Q35,72 28,60 Z" fill="#1A0800" stroke="#FFB800" strokeWidth="1" />
          <polygon points="37,60 40,66 43,60" fill="#FFB800" />
          <polygon points="57,60 60,66 63,60" fill="#FFB800" />
          <polygon points="47,70 50,64 53,70" fill="#FFB800" />
        </svg>
      </motion.div>

      {/* Floating Halloween Decoration Right: Floating Ghost/Skull */}
      <motion.div
        animate={{
          x: (mousePos?.x || 0) * 20,
          y: (mousePos?.y || 0) * 20,
        }}
        transition={{ type: "spring", stiffness: 45, damping: 15 }}
        className="hidden lg:block absolute right-12 top-1/4 pointer-events-none z-10"
      >
        <svg viewBox="0 0 100 100" className="w-14 h-14 drop-shadow-[0_0_20px_rgba(255,184,0,0.4)] opacity-85">
          <ellipse cx="50" cy="42" rx="28" ry="26" fill="#F0F0F0" stroke="#1A1A1A" strokeWidth="2.5" />
          <rect x="36" y="52" width="28" height="20" rx="6" fill="#F0F0F0" stroke="#1A1A1A" strokeWidth="2.5" />
          <circle cx="40" cy="40" r="6" fill="#1A0800" />
          <circle cx="60" cy="40" r="6" fill="#1A0800" />
          <circle cx="41.5" cy="38.5" r="1.8" fill="#FF3333" />
          <circle cx="61.5" cy="38.5" r="1.8" fill="#FF3333" />
          <polygon points="50,48 48,53 52,53" fill="#1A0800" />
          <path d="M38,60 Q50,68 62,60" fill="none" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="42,60 45,67 48,60" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="1" />
          <polygon points="52,60 55,67 58,60" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Side: Copy & Calls to Action */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* 1. Dropping Halloween Badge - Yellow brand harmony */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 10,
              delay: 0.15
            }}
            className="inline-flex items-center gap-2.5 bg-bf-yellow text-bf-black px-4 py-2 rounded-full border-3 border-bf-black shadow-[3px_3px_0_#000000] mb-6 select-none"
          >
            <span className="text-base animate-bounce">🎃</span>
            <span className="font-baloo-caps text-xs md:text-sm font-black tracking-wider text-bf-black">
              HALLOWEEN BURGER FILM'S • <span className="text-bf-red font-black">TEMPORADA DO TERROR</span>
            </span>
            <span className="text-base animate-bounce" style={{ animationDelay: '0.2s' }}>🦇</span>
          </motion.div>

          {/* 2. Main Title with Cinema Outline text in Brand Yellow */}
          <div className="mb-6 select-none">
            <motion.h1 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 12,
                delay: 0.25
              }}
              className="text-bf-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl bubble-title-outline tracking-wider uppercase leading-none"
            >
              HALLOWEEN<br />
              <span className="text-bf-yellow drop-shadow-[0_0_35px_rgba(255,184,0,0.7)]">BURGER FILM'S</span>
              <span className="sr-only"> - Halloween Burger Films: Fun Burger Halloween especial em Penha-SC perto do Beto Carrero World</span>
            </motion.h1>
          </div>

          {/* 3. Description Paragraph */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="text-gray-200 text-base md:text-lg lg:text-xl font-medium max-w-xl mb-6 leading-relaxed font-baloo"
          >
            A temporada mais <span className="text-bf-yellow font-bold">aterrorizantemente saborosa</span> do cinema começou! Venha devorar o monstruoso <strong className="text-white font-black underline decoration-bf-yellow">Fun Burger Halloween</strong>: duplo burger de fraldinha 90g no pão black artesanal macabro com queijo cheddar vulcânico.
          </motion.p>

          {/* 4. Halloween Recipe Badges with Brand Yellow Accents */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8 max-w-xl"
          >
            <span className="bg-bf-black border-2 border-bf-yellow text-bf-yellow text-xs font-baloo-caps font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[2px_2px_0px_#FFB800]">
              <span>🌑</span> Pão Black c/ Gergelim
            </span>
            <span className="bg-bf-black border-2 border-bf-yellow text-bf-yellow text-xs font-baloo-caps font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[2px_2px_0px_#FFB800]">
              <span>🥩</span> 2x Fraldinha 90g
            </span>
            <span className="bg-bf-black border-2 border-bf-yellow text-bf-yellow text-xs font-baloo-caps font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[2px_2px_0px_#FFB800]">
              <span>🧀</span> Queijo Cheddar Vulcânico
            </span>
            <span className="bg-bf-black border-2 border-bf-yellow text-bf-yellow text-xs font-baloo-caps font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-[2px_2px_0px_#FFB800]">
              <span>🥗</span> Alface, Tomate e Repolho Roxo
            </span>
          </motion.div>

          {/* 5. CTAs Buttons & Bat Trigger */}
          <motion.div
            initial={{ y: 25, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.55 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto bg-bf-yellow hover:bg-bf-yellow-deep text-bf-black font-baloo-caps text-sm md:text-base font-black px-8 py-4 rounded-full border-3 border-bf-black shadow-[4px_4px_0_#FFFFFF] hover:shadow-[1px_1px_0_#FFFFFF] hover:translate-x-[3px] hover:translate-y-[3px] transition-all animate-shake-attention cursor-pointer"
            >
              <span>Pedir Fun Burger • R$ 44,90</span>
              <ArrowRight className="w-4 h-4 stroke-[3px]" />
            </a>

            <button
              onClick={handleScrollToMenu}
              className="flex items-center justify-center w-full sm:w-auto bg-bf-white hover:bg-bf-yellow text-bf-black font-baloo-caps text-sm md:text-base font-black px-7 py-4 rounded-full border-3 border-bf-black shadow-[4px_4px_0_#FFB800] hover:shadow-[1px_1px_0_#FFB800] hover:translate-x-[3px] hover:translate-y-[3px] transition-all cursor-pointer"
            >
              <span>Ver Todo Cardápio</span>
            </button>

            {/* Interactive Bat Trigger Button */}
            <button
              onClick={triggerBatBurst}
              className="flex items-center justify-center gap-2 w-full sm:w-auto bg-bf-black hover:bg-neutral-900 text-bf-yellow border-2 border-bf-yellow font-baloo-caps text-xs md:text-sm px-4 py-3.5 rounded-full shadow-[3px_3px_0_#FFB800] hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title="Clique para soltar uma revoada de morcegos!"
            >
              <BatSvg size={22} eyeColor="#FFB800" strokeColor="#FFB800" />
              <span>Soltar Morcegos! ({batCount > 0 ? batCount : '🦇'})</span>
            </button>
          </motion.div>

        </div>

        {/* Right Side: The Halloween Burger Showcase Card with Bats Emerging */}
        <div className="lg:col-span-5 flex justify-center w-full relative">
          
          {/* Continuous Bats Emerging from Burger (Smooth CSS GPU animations) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-30">
            <div className="absolute animate-bat-orbit-1">
              <BatSvg size={36} eyeColor="#FFB800" strokeColor="#FFB800" />
            </div>
            <div className="absolute animate-bat-orbit-2">
              <BatSvg size={42} eyeColor="#FF5500" strokeColor="#FFB800" />
            </div>
            <div className="absolute animate-bat-orbit-3">
              <BatSvg size={32} eyeColor="#FFDD00" strokeColor="#FFB800" />
            </div>
            <div className="absolute animate-bat-orbit-4">
              <BatSvg size={38} eyeColor="#FF0055" strokeColor="#FFB800" />
            </div>
            <div className="absolute animate-bat-orbit-5">
              <BatSvg size={30} eyeColor="#FFB800" strokeColor="#FFB800" />
            </div>

            {/* Click-Triggered Burst Bats */}
            <AnimatePresence>
              {burstBats.map((bat) => (
                <motion.div
                  key={bat.id}
                  initial={{ x: 0, y: 0, scale: 0.2, opacity: 1, rotate: 0 }}
                  animate={{
                    x: bat.targetX,
                    y: bat.targetY,
                    scale: bat.scale,
                    opacity: 0,
                    rotate: bat.rot
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                  className="absolute pointer-events-none z-40"
                >
                  <BatSvg size={44 * bat.scale} eyeColor="#FFB800" strokeColor="#FFB800" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Flyer / Cinema Showcase Card in Brand Yellow & Noir */}
          <motion.div
            initial={{ scale: 0.85, rotate: -3, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 13,
              delay: 0.3
            }}
            onClick={triggerBatBurst}
            className="w-full max-w-md bg-gradient-to-b from-[#1C1006] via-[#1E0B10] to-[#120512] p-6 md:p-8 rounded-[36px] border-4 border-bf-yellow shadow-[0_0_45px_rgba(255,184,0,0.35),8px_8px_0px_#1A1A1A] relative overflow-hidden flex flex-col items-center justify-center group cursor-pointer"
          >
            {/* Film stripes left & right inside card in Brand Yellow */}
            <div className="absolute top-0 bottom-0 left-2 w-3 flex flex-col justify-between py-4 opacity-40">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2.5 h-2.5 bg-bf-yellow rounded-sm" />
              ))}
            </div>
            <div className="absolute top-0 bottom-0 right-2 w-3 flex flex-col justify-between py-4 opacity-40">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-2.5 h-2.5 bg-bf-yellow rounded-sm" />
              ))}
            </div>

            {/* Glowing spooky spotlight / moon behind the burger */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-bf-yellow/35 via-[#FF7A00]/30 to-[#9333EA]/25 rounded-full filter blur-[45px] pointer-events-none group-hover:scale-125 transition-transform duration-700 animate-pulse" />

            {/* Top Badge: Edição Especial Halloween in Brand Yellow */}
            <div className="relative z-10 mb-3 flex items-center justify-between w-full px-2">
              <span className="bg-bf-yellow text-bf-black text-[11px] font-baloo-caps font-black px-3 py-1 rounded-full border-2 border-bf-black shadow-[2px_2px_0px_#000]">
                🎃 EDIÇÃO LIMITADA
              </span>
              <span className="text-xs font-baloo-caps font-black text-gray-200 flex items-center gap-1">
                <Skull className="w-3.5 h-3.5 text-bf-yellow" />
                <span className="text-bf-yellow">FUN BURGER</span>
              </span>
            </div>

            {/* Core Hero Burger Image with Float Animation */}
            <div className="relative z-10 w-full max-w-[280px] md:max-w-[320px] aspect-square flex items-center justify-center my-2 group-hover:scale-105 transition-transform duration-300">
              <img
                src="https://img.supremasite.com.br/burguer/hambueguer-hallowen-burguer-films.webp"
                alt="Fun Burger Halloween - Burger Films Penha"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://img.supremasite.com.br/burguer/bgsc.webp';
                }}
                className="w-full h-full object-contain filter drop-shadow-[0_16px_25px_rgba(0,0,0,0.8)]"
              />

              {/* Click instruction hint badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/90 text-bf-yellow text-[10px] font-baloo-caps font-bold px-3 py-1 rounded-full border border-bf-yellow/70 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                🦇 Toque no burger para soltar morcegos!
              </div>
            </div>

            {/* Burger Title & Ingredients description inside card */}
            <div className="relative z-10 text-center select-none mt-2 w-full">
              <h2 className="text-bf-yellow font-display text-2xl md:text-3xl tracking-wider uppercase mb-1 px-2 drop-shadow-[0_2px_12px_rgba(255,184,0,0.6)]">
                Fun Burger Halloween
              </h2>
              <p className="text-gray-300 text-xs font-baloo leading-tight max-w-[310px] mx-auto mb-3 font-medium">
                Pão Black c/ Gergelim, 2 Burgers de Fraldinha 90g cada, Queijo Cheddar, Alface, Tomate e Repolho Roxo.
              </p>

              {/* Quick Action inside Card */}
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center gap-2 bg-bf-yellow hover:bg-bf-yellow-deep text-bf-black font-baloo-caps text-xs md:text-sm font-black px-6 py-2.5 rounded-full border-2 border-bf-black shadow-[3px_3px_0_#1A1A1A] hover:shadow-[1px_1px_0_#1A1A1A] transition-all cursor-pointer uppercase"
              >
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>Garantir o Meu • R$ 44,90</span>
              </a>
            </div>
          </motion.div>

          {/* Toast Notification when bats are released */}
          <AnimatePresence>
            {showBatToast && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 z-50 bg-bf-yellow text-bf-black font-baloo-caps text-xs font-black px-4 py-1.5 rounded-full border-2 border-bf-black shadow-[4px_4px_0px_#000] whitespace-nowrap flex items-center gap-1.5"
              >
                <span>🦇</span>
                <span>BOO! Revoada de morcegos libertada!</span>
                <span>🎃</span>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

      {/* --- Halloween Themed Inclined Marquee Tape at Bottom (-1.5deg) in Brand Yellow --- */}
      <div className="absolute bottom-2 left-0 right-0 overflow-hidden z-20">
        <div className="w-[110%] -left-[5%] relative transform -rotate-[1.5deg] bg-bf-yellow border-y-4 border-bf-black py-3 shadow-[0_4px_16px_rgba(0,0,0,0.5)] flex items-center select-none">
          <div className="flex gap-12 text-bf-black font-display text-sm md:text-base uppercase tracking-wider whitespace-nowrap animate-marquee-halloween font-black">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="flex items-center gap-3 font-black">
                <span>🎃</span>
                <span>O Halloween da Burger Film's Começou!</span>
                <span className="text-bf-red font-black">•</span>
                <span className="bg-bf-black text-bf-yellow px-2.5 py-0.5 rounded-full text-xs font-bold">Fun Burger por R$ 44,90</span>
                <span className="text-bf-red font-black">•</span>
                <span>Pão Black Artesanal & Duplo Burger de Fraldinha</span>
                <span className="text-bf-red font-black">•</span>
                <span>Peça no Delivery ou Visite o Nosso Pub em Penha-SC</span>
                <span>🦇</span>
              </span>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
