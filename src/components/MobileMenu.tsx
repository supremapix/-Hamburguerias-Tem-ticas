import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, Home, Film, Utensils, Calendar, MapPin, Phone, Printer, Star } from 'lucide-react';
import Logo from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: any) => void;
}

export default function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  const menuLinks = [
    { label: "Página Inicial", view: "home" as const, icon: Home },
    { label: "Quem Somos", view: "quem-somos" as const, icon: Film },
    { label: "Blog Cinematográfico", view: "blog" as const, icon: Star },
    { label: "Nosso Cardápio", view: "home" as const, anchor: "menu", icon: Utensils },
    { label: "Nossa Agenda", view: "home" as const, anchor: "agenda", icon: Calendar },
    { label: "Unidade 1 - Alfredo", view: "unidade-alfredo" as const, icon: MapPin },
    { label: "Unidade 2 - Eugênio", view: "unidade-eugenio" as const, icon: MapPin },
    { label: "Contato / Fale Conosco", view: "contato" as const, icon: Phone },
    { label: "Cardápio A4 Imprimir 🖨️", view: "cardapio-imprimir" as const, icon: Printer },
  ];

  const orderUrl = "https://burgerfilms.chefware.com.br/";

  const handleLinkClick = (link: typeof menuLinks[0]) => {
    onNavigate(link.view);
    onClose();
    if (link.view === 'home' && link.anchor) {
      setTimeout(() => {
        const el = document.getElementById(link.anchor!);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
            <button 
              onClick={() => {
                onNavigate('home');
                onClose();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="focus:outline-none"
            >
              <Logo size="sm" />
            </button>
            <button
              onClick={onClose}
              aria-label="Fechar menu de navegação"
              className="w-11 h-11 rounded-full bg-bf-black text-bf-yellow flex items-center justify-center border-2 border-bf-black shadow-[3px_3px_0_rgba(255,255,255,0.8)] active:scale-90 transition-transform focus:outline-none cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Stacked Menu Links */}
          <div className="flex-1 flex flex-col items-center justify-center gap-3.5 my-6 max-w-sm mx-auto w-full">
            {menuLinks.map((link, i) => {
              const IconComp = link.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ y: 25, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 140, 
                    damping: 12,
                    delay: 0.05 + i * 0.05 
                  }}
                  className="w-full"
                >
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="w-full flex items-center gap-4 bg-bf-white hover:bg-bf-cream text-bf-black font-baloo-caps text-sm py-3 px-5 rounded-full border-3 border-bf-black shadow-[3px_3px_0px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all focus:outline-none cursor-pointer text-left"
                  >
                    <span className="w-9 h-9 rounded-full bg-bf-yellow flex items-center justify-center border-2 border-bf-black text-bf-black shrink-0">
                      <IconComp className="w-4 h-4 stroke-[2.5px]" />
                    </span>
                    <span className="font-extrabold tracking-wide uppercase">{link.label}</span>
                  </button>
                </motion.div>
              );
            })}
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
              className="order-button-track flex items-center justify-center gap-3 bg-bf-red text-bf-white hover:bg-bf-black hover:text-bf-yellow font-baloo-caps text-base py-4 px-8 rounded-full border-3 border-bf-black shadow-[5px_5px_0px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all focus:outline-none w-full text-center animate-shake-attention cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current animate-pulse" />
              <span className="uppercase font-black tracking-wider">🎬 PEDIR ONLINE AGORA 🍿</span>
            </a>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
