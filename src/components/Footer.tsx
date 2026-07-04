import { motion } from 'motion/react';
import { Phone, MapPin, Clock, MessageCircle, Instagram, Youtube, Heart, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Mini Burgers", href: "#minions" },
    { label: "Burgers de Cinema", href: "#cinema" },
    { label: "Combos", href: "#combos" },
    { label: "Nossa Agenda", href: "#agenda" }
  ];

  const orderUrl = "https://wa.me/5547992155989?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20cinematográfico!";

  return (
    <motion.footer
      initial={{ y: 70, opacity: 0.5 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "spring", stiffness: 90, damping: 16 }}
      className="relative bg-bf-black text-bf-white pt-24 pb-8 rounded-t-[40px] border-t-4 border-bf-black shadow-[0_-8px_24px_rgba(0,0,0,0.2)] overflow-hidden"
    >
      
      {/* Festoon / Checkered Flags at the top border */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden flex justify-center pointer-events-none">
        <svg 
          className="w-full max-w-4xl h-24 animate-flag-swing origin-top" 
          viewBox="0 0 800 120" 
          fill="none" 
          preserveAspectRatio="none"
        >
          <path d="M10,15 Q400,80 790,15" stroke="#FFB800" strokeWidth="4" strokeLinecap="round" fill="none" />
          
          {/* Flags */}
          <polygon points="100,28 140,32 120,85" fill="#E63946" stroke="#1A1A1A" strokeWidth="2.5" />
          <polygon points="200,42 240,44 220,95" fill="#FFB800" stroke="#1A1A1A" strokeWidth="2.5" />
          <polygon points="300,50 340,49 320,102" fill="#52B788" stroke="#1A1A1A" strokeWidth="2.5" />
          <polygon points="400,52 440,51 420,103" fill="#3A86C8" stroke="#1A1A1A" strokeWidth="2.5" />
          <polygon points="500,48 540,45 520,98" fill="#E63946" stroke="#1A1A1A" strokeWidth="2.5" />
          <polygon points="600,40 640,35 620,90" fill="#FFB800" stroke="#1A1A1A" strokeWidth="2.5" />
          <polygon points="700,28 740,22 720,78" fill="#52B788" stroke="#1A1A1A" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* Column 1: Info and Socials (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-3 items-start">
            <Logo size="md" className="origin-left" />
            <span className="text-xs font-baloo uppercase text-gray-400 tracking-wider">
              A Sua Sessão Diária de Sabor em Penha-SC
            </span>
          </div>

          <p className="text-sm text-gray-300 max-w-sm leading-relaxed font-baloo">
            Hambúrgueres de cinema elaborados com blends selecionados, pães coloridos e ingredientes frescos. Venha se deliciar com o melhor rodízio e delivery da região!
          </p>

          {/* Social Circles with hover effect: scale 1.2, 360deg rotate, offset shadow */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.instagram.com/burgerfilms_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Burger Films"
              className="w-11 h-11 rounded-full bg-bf-yellow text-bf-black flex items-center justify-center border-2 border-bf-black shadow-[3px_3px_0_#FFFFFF] hover:shadow-[1px_1px_0_#FFFFFF] hover:scale-125 hover:rotate-[360deg] transition-all duration-300 focus:outline-none"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@burgerfilms"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Burger Films"
              className="w-11 h-11 rounded-full bg-bf-yellow text-bf-black flex items-center justify-center border-2 border-bf-black shadow-[3px_3px_0_#FFFFFF] hover:shadow-[1px_1px_0_#FFFFFF] hover:scale-125 hover:rotate-[360deg] transition-all duration-300 focus:outline-none"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation (lg:col-span-3) */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <h3 className="text-bf-yellow font-display text-xl uppercase tracking-wider">
            Navegação
          </h3>
          <ul className="flex flex-col gap-3 font-baloo">
            {navigationLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="group flex items-center gap-1.5 text-sm text-gray-300 hover:text-bf-yellow transition-all duration-200"
                >
                  <span className="opacity-0 group-hover:opacity-100 text-bf-yellow transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                    ▸
                  </span>
                  <span className="group-hover:translate-x-1.5 transition-all duration-200">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact & Order (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          <h2 className="text-bf-yellow font-display text-xl uppercase tracking-wider">
            Nossas Unidades
          </h2>

          <address className="not-italic flex flex-col gap-5 text-sm text-gray-300 font-baloo">
            {/* Unit 1 */}
            <div className="flex flex-col gap-1 border-l-2 border-bf-yellow pl-3">
              <span className="font-extrabold text-bf-yellow text-xs uppercase tracking-wider block">
                Unidade 1 — Alfredo Brunetti (Armação)
              </span>
              <div className="flex items-start gap-2 mt-1">
                <MapPin className="w-4.5 h-4.5 text-bf-yellow shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>Av. Alfredo Brunetti, 631</span>
                  <span className="text-xs text-gray-400">Armação, Penha - SC, CEP 88385-000</span>
                  <a 
                    href="https://maps.google.com/?q=Av.+Alfredo+Brunetti,+631,+Penha+-+SC" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-bf-yellow hover:underline mt-0.5 inline-block"
                  >
                    Como chegar (Google Maps) ➔
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="w-4.5 h-4.5 text-bf-yellow shrink-0" />
                <span className="text-xs">Segunda a Domingo: 18:00 às 23:30</span>
              </div>
            </div>

            {/* Unit 2 */}
            <div className="flex flex-col gap-1 border-l-2 border-bf-red pl-3">
              <span className="font-extrabold text-bf-red text-xs uppercase tracking-wider block">
                Unidade 2 — Armação (Eugênio Krause)
              </span>
              <div className="flex items-start gap-2 mt-1">
                <MapPin className="w-4.5 h-4.5 text-bf-yellow shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>Av. Eugênio Krause, 3045</span>
                  <span className="text-xs text-gray-400">Armação, Penha - SC</span>
                  <a 
                    href="https://maps.google.com/?q=Av.+Eug%C3%AAnio+Krause,+3045,+Penha+-+SC" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-bf-yellow hover:underline mt-0.5 inline-block"
                  >
                    Como chegar (Google Maps) ➔
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <Clock className="w-4.5 h-4.5 text-bf-yellow shrink-0" />
                <div>
                  <span className="text-xs">Quinta a Terça: 18:00 às 23:30</span>
                  <p className="text-[11px] text-bf-red font-bold">Quarta-feira: Fechado</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 mt-2 border-t border-gray-800 pt-3">
              <Phone className="w-4.5 h-4.5 text-bf-yellow shrink-0" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-400 leading-none">WhatsApp Oficial</span>
                <span className="font-bold text-bf-white text-base">(47) 99215-5989</span>
              </div>
            </div>
          </address>

          <div className="pt-2">
            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fazer pedido pelo WhatsApp da Burger Films"
              className="inline-flex items-center gap-2 bg-bf-yellow hover:bg-bf-yellow-deep text-bf-black font-baloo-caps text-sm px-6 py-3.5 rounded-full border-2 border-bf-black shadow-[4px_4px_0_#FFFFFF] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 hover-wiggle cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-bf-black animate-pulse-whatsapp" />
              <span>PEDIR NO WHATSAPP</span>
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex items-center justify-center gap-4 text-xs text-gray-400 font-baloo">
        <p className="text-center">
          &copy; {currentYear} Burger Films Pub & Delivery. Todos os direitos reservados.
        </p>
      </div>

    </motion.footer>
  );
}
