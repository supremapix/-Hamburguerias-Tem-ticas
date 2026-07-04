import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, Star, Sparkles, X, Trophy, Heart } from 'lucide-react';

export default function Celebration() {
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    // Listen for any click on an order button or link to mark the celebration pending
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && (
        link.href.includes('chefware.com.br') || 
        link.href.includes('wa.me') || 
        link.classList.contains('order-button-track')
      )) {
        sessionStorage.setItem('pendingOrderCelebration', 'true');
      }
    };

    document.addEventListener('click', handleGlobalClick);

    // Check when returning to the tab
    const checkCelebration = () => {
      if (document.visibilityState === 'visible' && sessionStorage.getItem('pendingOrderCelebration') === 'true') {
        setShowCelebration(true);
        sessionStorage.removeItem('pendingOrderCelebration');
        
        // Auto-close celebration after 8 seconds
        setTimeout(() => {
          setShowCelebration(false);
        }, 8000);
      }
    };

    document.addEventListener('visibilitychange', checkCelebration);
    window.addEventListener('focus', checkCelebration);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
      document.removeEventListener('visibilitychange', checkCelebration);
      window.removeEventListener('focus', checkCelebration);
    };
  }, []);

  if (!showCelebration) return null;

  // Generate 40 random confetti pieces with rich variations
  const confettiPieces = Array.from({ length: 45 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage width
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 3,
    size: 8 + Math.random() * 12,
    color: ['#FFD166', '#E63946', '#1A1A1A', '#F1FAEE', '#FFB800'][Math.floor(Math.random() * 5)],
    shape: ['circle', 'square', 'star', 'ticket'][Math.floor(Math.random() * 4)],
    rotate: Math.random() * 360,
  }));

  // Generate 15 floating balloons rising from the bottom
  const balloons = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    x: 5 + Math.random() * 90,
    delay: Math.random() * 1.5,
    duration: 5 + Math.random() * 4,
    size: 35 + Math.random() * 25,
    color: ['#FFB800', '#E63946', '#1A1A1A', '#D62828'][Math.floor(Math.random() * 4)],
  }));

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden">
        
        {/* Confetti Rain Layer */}
        {confettiPieces.map((piece) => (
          <motion.div
            key={`confetti-${piece.id}`}
            initial={{ y: -50, x: `${piece.x}vw`, opacity: 1, rotate: piece.rotate }}
            animate={{ 
              y: '110vh', 
              x: `${piece.x + (Math.random() * 10 - 5)}vw`, 
              rotate: piece.rotate + 360,
              opacity: [1, 1, 0.7, 0] 
            }}
            transition={{ 
              duration: piece.duration, 
              delay: piece.delay, 
              ease: "linear",
              repeat: 0 
            }}
            style={{
              position: 'absolute',
              width: piece.size,
              height: piece.size,
              backgroundColor: piece.shape !== 'star' ? piece.color : undefined,
              borderRadius: piece.shape === 'circle' ? '50%' : piece.shape === 'ticket' ? '4px' : '0px',
              border: piece.shape === 'ticket' ? '2px dashed #1A1A1A' : undefined,
            }}
          >
            {piece.shape === 'star' && (
              <Star 
                className="w-full h-full fill-current" 
                style={{ color: piece.color }} 
              />
            )}
          </motion.div>
        ))}

        {/* Floating Balloons Layer */}
        {balloons.map((balloon) => (
          <motion.div
            key={`balloon-${balloon.id}`}
            initial={{ y: '110vh', x: `${balloon.x}vw`, opacity: 0.9, rotate: -10 }}
            animate={{ 
              y: '-20vh', 
              x: `${balloon.x + Math.sin(balloon.id) * 15}vw`,
              rotate: [balloon.id % 2 === 0 ? 15 : -15, balloon.id % 2 === 0 ? -15 : 15],
              opacity: [0.9, 0.9, 0]
            }}
            transition={{ 
              duration: balloon.duration, 
              delay: balloon.delay, 
              ease: "easeOut",
              rotate: { repeat: Infinity, duration: 2, ease: "easeInOut", repeatType: "reverse" }
            }}
            className="absolute flex flex-col items-center"
            style={{ width: balloon.size }}
          >
            {/* Balloon Body */}
            <div 
              className="relative rounded-full aspect-[4/5] w-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: balloon.color, border: '2px solid #1A1A1A' }}
            >
              {/* Balloon Highlight reflection */}
              <div className="absolute top-2 left-2 w-3.5 h-6 bg-white/25 rounded-full" />
              {/* Cinema Star icon on balloon */}
              <Film className="w-5 h-5 text-white/50" />
            </div>
            {/* Balloon Knot */}
            <div 
              className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent -mt-0.5"
              style={{ borderBottomColor: balloon.color }}
            />
            {/* Balloon String */}
            <svg width="10" height="40" className="opacity-70 mt-1">
              <path d="M5,0 Q8,10 2,20 T5,40" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
            </svg>
          </motion.div>
        ))}

        {/* Cinematic Announcement Card - Clickable close */}
        <div className="absolute inset-0 flex items-center justify-center p-6 bg-bf-black/40 backdrop-blur-sm pointer-events-auto">
          <motion.div
            initial={{ scale: 0.3, rotate: -15, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.5, rotate: 10, opacity: 0 }}
            transition={{ type: "spring", stiffness: 150, damping: 14 }}
            className="w-full max-w-md bg-bf-yellow border-4 border-bf-black rounded-[32px] p-8 shadow-[8px_8px_0_#1A1A1A] relative text-center select-none"
          >
            {/* Clapperboard design accents */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-bf-black text-bf-yellow px-6 py-2 rounded-full border-3 border-bf-black shadow-[4px_4px_0_#FFFFFF] font-display text-xs tracking-widest uppercase flex items-center gap-2">
              <Film className="w-4 h-4 fill-bf-yellow animate-spin" />
              <span>Corte! Gravado!</span>
            </div>

            <button
              onClick={() => setShowCelebration(false)}
              className="absolute top-4 right-4 bg-bf-black hover:bg-bf-red text-bf-yellow hover:text-bf-white p-1.5 rounded-full border-2 border-bf-black transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 stroke-[3px]" />
            </button>

            <div className="my-4">
              <span className="text-bf-red font-baloo-caps text-xs font-black tracking-widest bg-bf-white border-2 border-bf-black px-3 py-1 rounded-full inline-flex items-center gap-1.5 mb-4 shadow-[2px_2px_0_#1A1A1A]">
                <Trophy className="w-3.5 h-3.5 fill-current" />
                <span>PEDIDO DETECTADO!</span>
              </span>

              <h2 className="font-display text-2xl md:text-3xl text-bf-black uppercase tracking-tight leading-none mb-4">
                Sessão de Sabor <br />
                <span className="text-bf-red text-3xl md:text-4xl">Autorizada!</span>
              </h2>

              <div className="bg-bf-white border-2 border-bf-black rounded-2xl p-4 shadow-[4px_4px_0_#1A1A1A] text-left font-baloo text-sm text-gray-800 leading-relaxed">
                <p className="font-bold flex items-center gap-1.5 mb-1.5 text-bf-black">
                  <Sparkles className="w-4 h-4 text-bf-red" />
                  <span>Seu pedido digno de Oscar está a caminho!</span>
                </p>
                <p className="text-xs text-gray-600 leading-normal">
                  Parabéns por escolher a melhor hamburgueria de Penha-SC. Nosso elenco de cozinha já acendeu os holofotes e iniciou as filmagens na chapa. Prepare o guaraná e bom espetáculo! 🍿🥤🍔
                </p>
              </div>
            </div>

            <div className="flex justify-center gap-1.5 mt-2">
              <Heart className="w-5 h-5 text-bf-red fill-current animate-beat-heart" />
              <span className="text-[10px] font-baloo font-bold text-bf-black uppercase tracking-widest">
                Burger Films agradece!
              </span>
            </div>
          </motion.div>
        </div>

        <style>{`
          @keyframes beat-heart {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
          .animate-beat-heart {
            animation: beat-heart 1.2s infinite ease-in-out;
          }
        `}</style>
      </div>
    </AnimatePresence>
  );
}
