import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';
import Logo from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuLinks = [
    { label: "Mini Burgers", href: "#minions", icon: "🍔" },
    { label: "Burgers de Cinema", href: "#cinema", icon: "🎬" },
    { label: "Combos Completos", href: "#combos", icon: "🎉" },
    { label: "Nossa Agenda", href: "#agenda", icon: "📅" },
    { label: "Fale Conosco", href: "#contato", icon: "📞" },
  ];

  const orderUrl = "https://wa.me/5547992155989?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20cinematográfico!";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ 
            clipPath: 'circle(0% at calc(100% - 40px) 40px)' 
          }}
          animate={{ 
            clipPath: 'circle(150% at calc(100% - 40px) 40px)' 
          }}
          exit={{ 
            clipPath: 'circle(0% at calc(100% - 40px) 40px)' 
          }}
          transition={{ 
            duration: 0.5, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="fixed inset-0 z-50 bg-bf-yellow flex flex-col justify-between p-6 overflow-y-auto"
        >
          
          {/* Header Area */}
          <div className="flex items-center justify-between">
            <Logo size="sm" />
            <button
              onClick={onClose}
              aria-label="Fechar menu de navegação"
              className="w-11 h-11 rounded-full bg-bf-black text-bf-yellow flex items-center justify-center border-2 border-bf-black shadow-[3px_3px_0_rgba(255,255,255,0.8)] active:scale-90 transition-transform focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Swinging SVG Checkered Flags Rope */}
          <div className="my-2 flex justify-center w-full overflow-hidden">
            <svg 
              className="w-full max-w-md h-20 animate-flag-swing origin-top" 
              viewBox="0 0 400 100" 
              fill="none" 
              preserveAspectRatio="none"
            >
              <path d="M10,15 Q200,65 390,15" stroke="#1A1A1A" strokeWidth="4" strokeLinecap="round" fill="none" />
              
              {/* Flag 1: Red Chess */}
              <polygon points="50,23 90,28 70,85" fill="#E63946" stroke="#1A1A1A" strokeWidth="3" />
              <line x1="60" y1="24" x2="80" y2="56" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="3 3" />
              
              {/* Flag 2: Blue Chess */}
              <polygon points="130,34 170,38 150,92" fill="#3A86C8" stroke="#1A1A1A" strokeWidth="3" />
              <line x1="140" y1="35" x2="160" y2="65" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="3 3" />
              
              {/* Flag 3: Green Chess */}
              <polygon points="210,39 250,38 230,94" fill="#52B788" stroke="#1A1A1A" strokeWidth="3" />
              <line x1="220" y1="39" x2="240" y2="66" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="3 3" />
              
              {/* Flag 4: Red Chess */}
              <polygon points="290,34 330,29 310,84" fill="#E63946" stroke="#1A1A1A" strokeWidth="3" />
              <line x1="300" y1="33" x2="320" y2="58" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="3 3" />
            </svg>
          </div>

          {/* Stacked Menu Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-5 my-6 max-w-sm mx-auto w-full">
            {menuLinks.map((link, i) => (
              <motion.div
                key={i}
                initial={{ y: 35, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 140, 
                  damping: 12,
                  delay: 0.1 + i * 0.07 
                }}
                className="w-full"
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    // Sinking feedback animation then trigger navigate
                    const target = e.currentTarget;
                    target.classList.add('translate-y-1', 'shadow-none');
                    setTimeout(() => {
                      target.classList.remove('translate-y-1', 'shadow-none');
                      onClose();
                    }, 150);
                  }}
                  className="flex items-center gap-4 bg-bf-white hover:bg-bf-cream text-bf-black font-baloo-caps text-base py-3.5 px-6 rounded-full border-3 border-bf-black shadow-[4px_4px_0px_0px_#1A1A1A] transition-all focus:outline-none focus:ring-2 focus:ring-bf-black active:translate-y-1 active:shadow-none"
                >
                  <span className="w-10 h-10 rounded-full bg-bf-yellow flex items-center justify-center border-2 border-bf-black text-xl shrink-0">
                    {link.icon}
                  </span>
                  <span className="font-extrabold tracking-wide">{link.label}</span>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Mobile Footer CTA */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full max-w-sm mx-auto mt-auto"
          >
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-bf-black text-bf-yellow font-baloo-caps text-base py-4 px-8 rounded-full border-3 border-bf-black shadow-[4px_4px_0px_0px_#FFFFFF] hover:shadow-none active:translate-y-1 transition-all focus:outline-none w-full"
            >
              <span>PEÇA SEU LANCHE 🎬</span>
            </a>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
