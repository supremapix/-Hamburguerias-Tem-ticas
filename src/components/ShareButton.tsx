import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Share2, 
  X, 
  Check, 
  Copy, 
  Facebook, 
  Linkedin, 
  Twitter, 
  MessageCircle, 
  FileText,
  Compass,
  Sparkles
} from 'lucide-react';

export default function ShareButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isDescCopied, setIsDescCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://www.burgerfilms.com.br';
  const shareTitle = 'Burger Films | Hamburgueria Artesanal em Penha-SC – Pub & Delivery';
  const shareDescription = 'A melhor hamburgueria em Penha-SC! Saboreie nossos lanches artesanais de cinema, rodízio de mini-burgers, pizzas e sobremesas quentinhas pertinho do Beto Carrero World. Peça pelo delivery!';
  const shareImage = 'https://img.burgerfilms.com.br/compartilhe-nas-redes-burguer-films.webp';

  // Monitor scroll to match the BackToTop button's behavior (appear after 400px of scrolling)
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close panel on clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar o link:', err);
    }
  };

  const handleCopyDesc = async () => {
    try {
      await navigator.clipboard.writeText(`${shareTitle}\n\n${shareDescription}\n\nPeça aqui: ${shareUrl}`);
      setIsDescCopied(true);
      setTimeout(() => setIsDescCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar a descrição:', err);
    }
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-[#25D366] hover:bg-[#20ba56]',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + '\n' + shareDescription + '\n\n' + shareUrl)}`
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-[#1877F2] hover:bg-[#166fe5]',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Twitter (X)',
      icon: Twitter,
      color: 'bg-[#000000] hover:bg-gray-900',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-[#0077B5] hover:bg-[#006297]',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Pinterest',
      icon: Compass, // Using Compass/Share styled for Pinterest feel, or Compass representing the discovery
      color: 'bg-[#BD081C] hover:bg-[#ad071a]',
      url: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&media=${encodeURIComponent(shareImage)}&description=${encodeURIComponent(shareDescription)}`
    }
  ];

  const buttonVariants = {
    initial: { opacity: 0, scale: 0.5, rotate: 180 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 140,
        damping: 10
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.5, 
      rotate: 45,
      transition: { duration: 0.3 }
    }
  };

  const panelVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 15, x: -10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.85, 
      y: 15, 
      x: -10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 left-6 z-[90] flex items-center justify-start">
          <motion.div
            variants={buttonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative"
            ref={panelRef}
          >
            {/* Share Panel Popover */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  variants={panelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute bottom-18 left-0 mb-2 w-76 bg-bf-cream border-4 border-bf-black rounded-[24px] p-5 shadow-[6px_6px_0px_#1A1A1A] text-bf-black font-baloo z-[100] overflow-hidden"
                >
                  {/* Decorative film tape */}
                  <div className="absolute top-0 left-0 right-0 h-2 bg-bf-black flex justify-between px-4 overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-bf-yellow rounded-full mt-0.5" />
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-3 border-b-2 border-dashed border-bf-black/10 pb-2 mt-1">
                    <div className="flex items-center gap-1.5 text-bf-red font-baloo-caps text-[11px] font-black uppercase tracking-widest">
                      <Sparkles className="w-3.5 h-3.5 fill-bf-red" />
                      <span>COMPARTILHE O SABOR!</span>
                    </div>
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 hover:text-bf-black transition-colors"
                    >
                      <X className="w-4 h-4 stroke-[2.5px]" />
                    </button>
                  </div>

                  <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-4">
                    Mostre aos seus amigos a melhor hamburgueria temática de Penha-SC! Escolha uma das redes abaixo:
                  </p>

                  {/* Social Networks List */}
                  <div className="grid grid-cols-5 gap-2.5 mb-4">
                    {shareLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`Compartilhar no ${link.name}`}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white border-2 border-bf-black shadow-[2px_2px_0px_#1A1A1A] active:translate-y-[2px] active:shadow-none transition-all ${link.color}`}
                        >
                          <Icon className="w-4.5 h-4.5 fill-current" />
                        </a>
                      );
                    })}
                  </div>

                  {/* Actions Area */}
                  <div className="space-y-2.5 pt-1 border-t-2 border-dashed border-bf-black/10">
                    {/* Copy Link Button */}
                    <button
                      onClick={handleCopyLink}
                      className="w-full flex items-center justify-between bg-bf-white hover:bg-bf-yellow text-bf-black text-xs font-baloo-caps font-black px-4 py-2.5 rounded-xl border-2 border-bf-black shadow-[2.5px_2.5px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        {isCopied ? <Check className="w-4 h-4 text-green-600 stroke-[3px]" /> : <Copy className="w-4 h-4 text-bf-black stroke-[2.5px]" />}
                        <span>COPIAR LINK DA PÁGINA</span>
                      </span>
                      {isCopied && <span className="text-[9px] text-green-600 font-bold uppercase">Copiado!</span>}
                    </button>

                    {/* Copy Description Button */}
                    <button
                      onClick={handleCopyDesc}
                      className="w-full flex items-center justify-between bg-bf-white hover:bg-bf-red hover:text-white text-bf-black text-xs font-baloo-caps font-black px-4 py-2.5 rounded-xl border-2 border-bf-black shadow-[2.5px_2.5px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        {isDescCopied ? <Check className="w-4 h-4 text-green-400 stroke-[3px] fill-none" /> : <FileText className="w-4 h-4 stroke-[2.5px]" />}
                        <span>COPIAR DESCRIÇÃO</span>
                      </span>
                      {isDescCopied && <span className="text-[9px] text-green-400 font-bold uppercase">Copiado!</span>}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Float Tooltip */}
            <AnimatePresence>
              {isHovered && !isOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -10, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="hidden md:block absolute left-16 bg-bf-black text-bf-yellow font-baloo-caps text-[11px] font-black px-3 py-1.5 rounded-lg border-2 border-bf-black shadow-[3px_3px_0px_rgba(0,0,0,0.25)] uppercase tracking-wider select-none pointer-events-none whitespace-nowrap ml-1"
                >
                  Compartilhar
                </motion.div>
              )}
            </AnimatePresence>

            {/* Float Core Trigger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-14 h-14 rounded-full bg-bf-black text-bf-yellow border-2 border-bf-yellow flex items-center justify-center cursor-pointer shadow-lg active:scale-92 transition-all group focus:outline-none select-none relative overflow-hidden"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.04) 1.2px, transparent 1.2px)`,
                backgroundSize: '4px 4px',
                boxShadow: (isHovered || isOpen) ? '0 0 20px rgba(255, 193, 7, 0.5)' : '',
              }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-5 h-5 stroke-[3px]" /> : <Share2 className="w-5 h-5 stroke-[3px]" />}
              </motion.div>
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
