import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isProjecting, setIsProjecting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Monitor scroll for visibility and progress ring calculation
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const scrollHeight = document.documentElement.scrollHeight;
          const innerHeight = window.innerHeight;
          
          // Show button after 400px of scrolling
          setIsVisible(scrollY > 400);

          // Calculate percentage (0 to 1)
          const totalScroll = scrollHeight - innerHeight;
          const pct = totalScroll > 0 ? scrollY / totalScroll : 0;
          setScrollPercentage(Math.min(Math.max(pct, 0), 1));
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to capture current state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check user prefers-reduced-motion media query
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const handleClick = () => {
    setIsProjecting(true);
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? 'auto' : 'smooth',
    });
    // End projection animation after 500ms
    setTimeout(() => {
      setIsProjecting(false);
    }, 500);
  };

  // SVG circular properties for progress ring
  // Button circle has radius 24px within 52px diameter inside 56px wrapper (or 48px on mobile)
  const radius = 24;
  const strokeWidth = 3;
  const circumference = 2 * Math.PI * radius; // Approx 150.79
  const strokeDashoffset = circumference - scrollPercentage * circumference;

  // Angles for the 6 film reel holes
  const holeAngles = [0, 60, 120, 180, 240, 300];

  // Motion variants with overshoot bounce or simple fade if prefers-reduced-motion is true
  const containerVariants = {
    initial: { 
      opacity: 0, 
      scale: 0.5, 
      rotate: reducedMotion ? 0 : -180 
    },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.4,
        ease: reducedMotion ? 'easeInOut' : [0.34, 1.56, 0.64, 1] // cubic-bezier overshoot/bounce
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.5,
      rotate: reducedMotion ? 0 : -45,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed bottom-6 right-6 z-[90] flex items-center justify-end"
          aria-label="Voltar ao topo da página"
        >
          {/* Minimalist Tooltip (appears left of the button on desktop hover) */}
          <AnimatePresence>
            {isHovered && !reducedMotion && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="hidden md:block absolute right-16 bg-bf-black text-bf-yellow font-baloo-caps text-[11px] font-black px-3 py-1.5 rounded-lg border-2 border-bf-black shadow-[3px_3px_0px_rgba(0,0,0,0.25)] uppercase tracking-wider select-none pointer-events-none whitespace-nowrap mr-1"
              >
                Voltar ao Topo
              </motion.div>
            )}
          </AnimatePresence>

          {/* Core Clickable Area */}
          <button
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-14 h-14 md:w-14 md:h-14 w-12 h-12 flex items-center justify-center rounded-full bg-bf-black text-bf-yellow border-2 border-bf-yellow cursor-pointer shadow-lg active:scale-92 transition-all group focus:outline-none focus:ring-2 focus:ring-bf-yellow select-none"
            style={{
              // Film grain texture
              backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1.2px, transparent 1.2px)`,
              backgroundSize: '4px 4px',
              boxShadow: isHovered && !reducedMotion ? '0 0 20px rgba(255, 193, 7, 0.5)' : '',
            }}
          >
            {/* SVG Progress Ring */}
            <svg 
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" 
              viewBox="0 0 56 56"
            >
              {/* Subtle background track */}
              <circle
                cx="28"
                cy="28"
                r={radius}
                fill="none"
                stroke="rgba(255, 193, 7, 0.12)"
                strokeWidth={strokeWidth}
              />
              {/* Scroll progress path */}
              <circle
                cx="28"
                cy="28"
                r={radius}
                fill="none"
                stroke="url(#goldGrad)"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-75"
              />
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFC107" />
                  <stop offset="100%" stopColor="#FF9800" />
                </linearGradient>
              </defs>
            </svg>

            {/* Cinematic Projection Light Flash (expands and fades on click) */}
            <AnimatePresence>
              {isProjecting && (
                <motion.span
                  initial={{ scale: 0, opacity: 0.85 }}
                  animate={{ scale: 2.8, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                  className="absolute inset-0 rounded-full bg-radial from-bf-white/95 to-bf-yellow/10 pointer-events-none z-10"
                />
              )}
            </AnimatePresence>

            {/* Rotating Film Reel Face */}
            <motion.div
              animate={{ 
                rotate: isHovered && !reducedMotion ? 360 : 0 
              }}
              transition={{ 
                duration: 0.9, 
                ease: 'easeInOut' 
              }}
              className="absolute inset-0 flex items-center justify-center rounded-full pointer-events-none"
            >
              {/* The 6 reel holes arranged in circle */}
              {holeAngles.map((angle) => {
                const r = 14.5; // Positioning radius
                const x = Math.cos((angle * Math.PI) / 180) * r;
                const y = Math.sin((angle * Math.PI) / 180) * r;
                return (
                  <div
                    key={angle}
                    className="absolute w-2 h-2 rounded-full bg-bf-cream/20 border border-bf-black/40"
                    style={{
                      left: `calc(50% + ${x}px - 4px)`,
                      top: `calc(50% + ${y}px - 4px)`,
                    }}
                  />
                );
              })}
            </motion.div>

            {/* Central Chevron Up Seta */}
            <motion.div
              animate={isHovered && !reducedMotion ? {
                y: [0, -4, 0],
              } : { y: 0 }}
              transition={{
                duration: 0.6,
                repeat: isHovered && !reducedMotion ? Infinity : 0,
                ease: 'easeInOut',
              }}
              className="relative z-10 text-bf-yellow group-hover:text-bf-yellow transition-colors duration-200"
            >
              <ChevronUp className="w-5 h-5 stroke-[3px]" />
            </motion.div>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
