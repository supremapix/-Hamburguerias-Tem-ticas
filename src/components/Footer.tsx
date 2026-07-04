import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, MapPin, Clock, MessageCircle, Instagram, Youtube, Heart, AlertTriangle, X, Printer } from 'lucide-react';
import Logo from './Logo';

const DESFALQUES = [
  {
    title: "Pão de Coringa de Folga",
    badge: "AUSÊNCIA NO SET",
    character: "Pão de Coringa",
    message: "O Pão Vermelho do 'Coringa' se recusou a entrar em cena sem maquiagem e tirou o dia de folga! Exige retoques na cor antes do próximo take."
  },
  {
    title: "Cheddar Mad Max Derretido",
    badge: "PROBLEMA DE TEMPERATURA",
    character: "Cheddar Cremoso",
    message: "O Cheddar Cremoso do 'Mad Max' derreteu de calor no set do deserto e está indisponível hoje! Foi levado às pressas para a câmara de refrigeração."
  },
  {
    title: "Maionese Verde no Oscar",
    badge: "VIAGEM INTERNACIONAL",
    character: "Maionese Verde",
    message: "A Maionese Verde de Cinema foi indicada ao prêmio de melhor coadjuvante e viajou para Los Angeles para desfilar no tapete vermelho!"
  },
  {
    title: "Bacon Poderoso Chefão Ocupado",
    badge: "NEGOCIAÇÃO SECRETA",
    character: "Bacon Crocante",
    message: "O Bacon Crocante do 'O Poderoso Chefão' foi fazer uma oferta que ninguém pode recusar e não grava hoje! Assuntos de família."
  },
  {
    title: "Cebola Caramelizada em Prantos",
    badge: "DRAMA NO CAMARIM",
    character: "Cebola Caramelizada",
    message: "A Cebola Caramelizada chorou tanto lendo o roteiro de drama da nova temporada que precisou de um tempo no camarim para recuperar o visual!"
  },
  {
    title: "Hambúrguer de Costela em Teste",
    badge: "PROCESSO DE SELEÇÃO",
    character: "Blend de Costela",
    message: "O Hambúrguer de Costela foi fazer um teste de elenco secreto para um filme de ação em Hollywood e está indisponível para gravação hoje!"
  },
  {
    title: "Pão de Batman em Gotham",
    badge: "FILMAGEM EXTERNA",
    character: "Pão Preto de Cacau",
    message: "O Pão Preto de Cacau foi selecionado para uma ponta na continuação do 'Batman' e viajou às pressas para Gotham City!"
  },
  {
    title: "Anéis de Cebola Desaparecidos",
    badge: "MISTÉRIO NA TERRA MÉDIA",
    character: "Anéis de Cebola",
    message: "Os Anéis de Cebola decidiram se tornar os lendários 'Anéis de Poder' e sumiram misteriosamente na Terra Média! A equipe de busca foi acionada."
  },
  {
    title: "Molho Barbecue em Comercial",
    badge: "CONTRATO PUBLICITÁRIO",
    character: "Molho Barbecue",
    message: "O Molho Barbecue foi contratado para um comercial internacional de churrasco de alta classe nos EUA e está gravando em Miami!"
  },
  {
    title: "Batata Rústica Antiglamour",
    badge: "GREVE DE FIGURINO",
    character: "Batata Rústica",
    message: "A Batata Rústica decidiu que era rústica demais para o glamour do tapete vermelho e fugiu de volta para o campo. Prefere a simplicidade da terra!"
  },
  {
    title: "Churros Favorito em Ensaio",
    badge: "CENA DE ROMANCE",
    character: "Churros Favorito",
    message: "O seu Churros Favorito está ensaiando para uma cena romântica super doce e cheia de doce de leite. Ele pediu para não ser interrompido!"
  },
  {
    title: "Alface Americana sem Visto",
    badge: "PROBLEMA DE IMIGRAÇÃO",
    character: "Alface Americana",
    message: "A Alface Americana teve problemas com o visto de entrada de elenco e ficou retida na imigração. Ela manda lembranças refrescantes a todos."
  },
  {
    title: "Tomate Italiano de Férias",
    badge: "FÉRIAS NA TOSCANA",
    character: "Tomate Italiano",
    message: "O Tomate Italiano viajou de volta para a Toscana para visitar sua família de molhos artesanais e só retorna para filmar amanhã de manhã!"
  },
  {
    title: "Pão de Brioche Exigente",
    badge: "EXIGÊNCIA DE DIVA",
    character: "Pão de Brioche",
    message: "O Pão de Brioche exigiu um camarim privativo com toalhas de linho e água importada. Como não atendemos a tempo, ele entrou em greve de silêncio!"
  },
  {
    title: "Blend Veggie em Meditação",
    badge: "RETIRO ESPIRITUAL",
    character: "Hambúrguer de Grão-de-Bico",
    message: "O Blend Vegetariano foi meditar na Índia para encontrar sua paz interior e alinhar seus chakras antes de encarar o calor da nossa chapa!"
  },
  {
    title: "Queijo Provolone em Dublagem",
    badge: "CURSO DE IDIOMAS",
    character: "Queijo Provolone",
    message: "O Queijo Provolone está fazendo um curso intensivo de dublagem clássica na Itália e não pôde comparecer ao set de filmagens de hoje!"
  },
  {
    title: "Picles Agridoce em Terapia",
    badge: "CRISE EXISTENCIAL",
    character: "Picles Agridoce",
    message: "O Picles Agridoce disse que a vida anda muito ácida ultimamente e decidiu passar o dia em um retiro de terapia existencial para se acalmar."
  },
  {
    title: "Maionese de Bacon Dublê",
    badge: "DEPARTAMENTO MÉDICO",
    character: "Maionese de Bacon",
    message: "A Maionese de Bacon foi contratada como dublê em uma cena de perseguição de carros explosiva e está descansando após uma manobra arriscada!"
  },
  {
    title: "Frango Crocante na Marvel",
    badge: "SUPER-HERÓI",
    character: "Frango Empanado",
    message: "O Frango Crocante assinou um contrato multimilionário com a Marvel para o próximo filme de ação e está ocupado vestindo sua armadura!"
  },
  {
    title: "Banana Caramelizada Acidentada",
    badge: "ACIDENTE DE TRABALHO",
    character: "Banana Caramelizada",
    message: "A Banana Caramelizada escorregou na própria casca durante os ensaios da cena de sobremesa e está sob cuidados do departamento médico!"
  },
  {
    title: "Ovo Frito Gema Mole Nervoso",
    badge: "DEMISSÃO NO SET",
    character: "Ovo Frito",
    message: "O Ovo Frito de gema mole reclamou que a sua cena estava muito 'mexida' e que as câmeras estavam invadindo sua privacidade. Ele pediu as contas!"
  },
  {
    title: "Queijo Coalho no Nordeste",
    badge: "FESTIVAL REGIONAL",
    character: "Queijo Coalho",
    message: "O Queijo Coalho viajou para curtir as festas de São João no Nordeste e tirou uma folga regulamentar para dançar um forró arretado!"
  },
  {
    title: "Pão Australiano Perdido",
    badge: "VOO ATRASADO",
    character: "Pão Australiano",
    message: "O Pão Australiano viajou para Sydney para visitar seus parentes cangurus e acabou perdendo o voo de volta devido ao fuso horário!"
  },
  {
    title: "Gorgonzola Forte Demais",
    badge: "DIVERGÊNCIA CRIATIVA",
    character: "Molho de Gorgonzola",
    message: "O Molho de Gorgonzola alegou que a sua presença cênica é forte e marcante demais para este elenco leve e pediu rescisão amigável de contrato!"
  },
  {
    title: "Double Burger sem Dublê",
    badge: "BRIGA NO SET",
    character: "Dois Blends",
    message: "O Double Burger brigou feio com o seu dublê de corpo sobre quem ganharia o maior cachê, fazendo com que a gravação em dose dupla fosse adiada!"
  },
  {
    title: "Milkshake de Chocolate Congelado",
    badge: "ANSIEDADE DE PALCO",
    character: "Milkshake de Chocolate",
    message: "O Milkshake de Chocolate congelou de nervoso ao ver a quantidade de câmeras no set de filmagem e está se aquecendo perto do forno!"
  },
  {
    title: "Batata Palito na passarela",
    badge: "MODA DE LUXO",
    character: "Batata Frita",
    message: "A Batata Frita Palito foi selecionada para desfilar na passarela de Milão por ser extremamente esguia e estilosa. Sucesso absoluto!"
  },
  {
    title: "Alcatra Estrela de Documentário",
    badge: "PAPEL PRINCIPAL",
    character: "Filé de Alcatra",
    message: "O Filé de Alcatra foi convidado para ser o protagonista de um documentário gastronômico francês e viajou para Paris para as gravações."
  },
  {
    title: "Molho Especial Intimado",
    badge: "ASSUNTO JUDICIAL",
    character: "Molho Especial",
    message: "O Molho Especial jurou segredo absoluto sobre sua receita secreta e acabou sendo intimado a depor em um tribunal internacional de patentes!"
  },
  {
    title: "Molho Tártaro Náfrago",
    badge: "PERDIDO NO MAR",
    character: "Molho Tártaro",
    message: "O Molho Tártaro pegou um barco para vir ao set mas acabou se perdendo devido a uma forte névoa. Ele foi resgatado e está bem, mas sem previsão de volta!"
  },
  {
    title: "Cheddar Flambado Explosivo",
    badge: "EFEITOS ESPECIAIS",
    character: "Cheddar Flambado",
    message: "O Cheddar Flambado se empolgou demais com os efeitos especiais de fogo e acabou acionando os sprinklers do set de filmagens. Que bagunça!"
  },
  {
    title: "Cebola Roxa e o Figurino",
    badge: "RECLAMAÇÃO DE COR",
    character: "Cebola Roxa",
    message: "A Cebola Roxa reclamou que o tom de roxo do seu figurino desvalorizava seus olhos e se trancou no trailer. Só sai com um estilista pessoal!"
  },
  {
    title: "Doritos Expulso do Set",
    badge: "PROBLEMA DE ÁUDIO",
    character: "Doritos Crocante",
    message: "O Doritos no Burger fez tanto barulho de 'CRUNCH' durante a gravação do som direto que o diretor de áudio exigiu sua expulsão imediata!"
  },
  {
    title: "Calabresa Defumada Sumida",
    badge: "EFEITO DE FUMAÇA",
    character: "Calabresa Defumada",
    message: "A Calabresa Defumada sumiu no meio de uma nuvem de fumaça cenográfica super densa e até agora a equipe de produção não conseguiu localizá-la!"
  },
  {
    title: "Catupiry Dançarino",
    badge: "DANÇA DOS FAMOSOS",
    character: "Catupiry Original",
    message: "O Catupiry Original foi escalado para a grande final da 'Dança dos Famosos' e passou o dia ensaiando passos complexos de tango e salsa!"
  },
  {
    title: "Smash Burger no Spa",
    badge: "DIA DE BELEZA",
    character: "Smash Burger",
    message: "O Hambúrguer Smash se sentiu muito 'pressionado' pela rotina pesada de celebridade internacional e resolveu tirar o dia para um relaxante spa."
  }
];

interface FooterProps {
  onNavigate: (view: 'home' | 'quem-somos' | 'contato' | 'unidade-alfredo' | 'unidade-eugenio' | 'sitemap' | 'cardapio-imprimir') => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [showDesfalqueModal, setShowDesfalqueModal] = useState(false);
  const [activeDesfalque, setActiveDesfalque] = useState<typeof DESFALQUES[0] | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * DESFALQUES.length);
    setActiveDesfalque(DESFALQUES[randomIndex]);
  }, []);

  const navigationLinks = [
    { label: "Cardápio Principal", view: "home" as const, anchor: "menu" },
    { label: "Agenda Semanal", view: "home" as const, anchor: "agenda" },
    { label: "Quem Somos", view: "quem-somos" as const },
    { label: "Contatos", view: "contato" as const },
    { label: "Mapa do Site", view: "sitemap" as const },
    { label: "Cardápio A4 (Imprimir) 🖨️", view: "cardapio-imprimir" as const },
  ];

  const orderUrl = "https://wa.me/5547992155989?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20cinematográfico!";

  const handleLinkClick = (link: typeof navigationLinks[0]) => {
    onNavigate(link.view);
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
    <>
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
              <button 
                onClick={() => {
                  onNavigate('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="origin-left focus:outline-none cursor-pointer"
              >
                <Logo size="md" />
              </button>
              <span className="text-xs font-baloo uppercase text-gray-400 tracking-wider">
                A Sua Sessão Diária de Sabor em Penha-SC
              </span>
            </div>

            <p className="text-sm text-gray-300 max-w-sm leading-relaxed font-baloo">
              Hambúrgueres de cinema elaborados com blends selecionados, pães coloridos e ingredientes frescos. Venha se deliciar com o melhor rodízio e delivery da região!
            </p>

            {/* Social Circles */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://www.instagram.com/burgerfilms_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Burger Films"
                className="w-11 h-11 rounded-full bg-bf-yellow text-bf-black flex items-center justify-center border-2 border-bf-black shadow-[3px_3px_0_#FFFFFF] hover:shadow-[1px_1px_0_#FFFFFF] hover:scale-125 hover:rotate-[360deg] transition-all duration-300 focus:outline-none cursor-pointer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@burgerfilms"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Burger Films"
                className="w-11 h-11 rounded-full bg-bf-yellow text-bf-black flex items-center justify-center border-2 border-bf-black shadow-[3px_3px_0_#FFFFFF] hover:shadow-[1px_1px_0_#FFFFFF] hover:scale-125 hover:rotate-[360deg] transition-all duration-300 focus:outline-none cursor-pointer"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation & Highlight Links (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-bf-yellow font-display text-xl uppercase tracking-wider">
              Navegação
            </h3>
            <ul className="flex flex-col gap-3 font-baloo">
              {navigationLinks.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="group flex items-center gap-1.5 text-sm text-gray-300 hover:text-bf-yellow transition-all duration-200 cursor-pointer text-left focus:outline-none"
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-bf-yellow transform -translate-x-2 group-hover:translate-x-0 transition-all duration-200">
                      ▸
                    </span>
                    <span className="group-hover:translate-x-1.5 transition-all duration-200">
                      {link.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Highlighted print menu and desfalque triggers */}
            <div className="mt-4 pt-4 border-t border-dashed border-gray-800 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onNavigate('cardapio-imprimir');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group flex items-center gap-2 text-xs font-baloo-caps font-black text-bf-yellow hover:text-bf-black hover:bg-bf-yellow bg-bf-white/5 border border-bf-yellow px-3.5 py-2 rounded-xl transition-all cursor-pointer focus:outline-none"
              >
                <Printer className="w-3.5 h-3.5 shrink-0" />
                <span>IMPRIMIR CARDÁPIO (A4) 🖨️</span>
              </button>

              <button
                onClick={() => setShowDesfalqueModal(true)}
                className="group flex items-center gap-2 text-xs font-baloo-caps font-black text-bf-red hover:text-bf-yellow bg-bf-white/5 border border-bf-red px-3.5 py-2 rounded-xl transition-all cursor-pointer focus:outline-none"
              >
                <AlertTriangle className="w-3.5 h-3.5 animate-pulse shrink-0" />
                <span>VER DESFALQUES DO DIA</span>
              </button>
            </div>
          </div>

          {/* Column 3: Contact & Order (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <h2 className="text-bf-yellow font-display text-xl uppercase tracking-wider">
              Nossas Unidades
            </h2>

            <address className="not-italic flex flex-col gap-5 text-sm text-gray-300 font-baloo">
              {/* Unit 1 */}
              <div className="flex flex-col gap-1 border-l-2 border-bf-yellow pl-3">
                <button
                  onClick={() => {
                    onNavigate('unidade-alfredo');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-extrabold text-bf-yellow text-xs uppercase tracking-wider block text-left hover:underline cursor-pointer focus:outline-none"
                >
                  Unidade 1 — Alfredo Brunetti (Armação) ➔
                </button>
                <div className="flex items-start gap-2 mt-1">
                  <MapPin className="w-4.5 h-4.5 text-bf-yellow shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span>Av. Alfredo Brunetti, 631</span>
                    <span className="text-xs text-gray-400">Armação, Penha - SC</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Clock className="w-4.5 h-4.5 text-bf-yellow shrink-0" />
                  <span className="text-xs">Segunda a Domingo: 18:00 às 23:30</span>
                </div>
              </div>

              {/* Unit 2 */}
              <div className="flex flex-col gap-1 border-l-2 border-bf-red pl-3">
                <button
                  onClick={() => {
                    onNavigate('unidade-eugenio');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="font-extrabold text-bf-red text-xs uppercase tracking-wider block text-left hover:underline cursor-pointer focus:outline-none"
                >
                  Unidade 2 — Armação (Eugênio Krause) ➔
                </button>
                <div className="flex items-start gap-2 mt-1">
                  <MapPin className="w-4.5 h-4.5 text-bf-yellow shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span>Av. Eugênio Krause, 3045</span>
                    <span className="text-xs text-gray-400">Armação, Penha - SC</span>
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

      {/* Desfalque Dialog Modal */}
      <AnimatePresence>
        {showDesfalqueModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bf-black/80 backdrop-blur-sm"
            onClick={() => setShowDesfalqueModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-bf-cream border-4 border-bf-black rounded-[28px] p-6 max-w-md w-full shadow-[6px_6px_0_#1A1A1A] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowDesfalqueModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-bf-white text-bf-black flex items-center justify-center border-2 border-bf-black cursor-pointer shadow-[2px_2px_0_#1A1A1A]"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="text-center py-4">
                <AlertTriangle className="w-12 h-12 text-bf-red mx-auto mb-3 animate-pulse" />
                <h3 className="font-display text-xl text-bf-black uppercase mb-1">
                  {activeDesfalque ? activeDesfalque.title : "Roteiro Sem Desfalques!"}
                </h3>
                <p className="text-xs text-bf-red font-baloo-caps font-black uppercase tracking-widest mb-4">
                  {activeDesfalque ? activeDesfalque.badge : "Elenco 100% Escaletado"}
                </p>
                <div className="text-sm font-medium font-baloo text-gray-700 leading-relaxed bg-bf-white border-2 border-bf-black p-4 rounded-xl shadow-[3px_3px_0_#1A1A1A] text-left">
                  {activeDesfalque ? (
                    <>
                      <p className="mb-2"><strong>Ator Desfalcado:</strong> <span className="text-bf-red font-black uppercase">{activeDesfalque.character}</span></p>
                      <p className="text-xs text-gray-600 leading-normal">{activeDesfalque.message}</p>
                      <p className="mt-3 text-[11px] text-gray-400 font-semibold border-t border-dashed border-gray-100 pt-2">
                        * Mas não se preocupe! Temos outras 30+ opções de hambúrgueres dignos de Oscar prontos para o show de hoje!
                      </p>
                    </>
                  ) : (
                    <>
                      <strong>Boas notícias!</strong> Todos os nossos atores principais (hambúrgueres, batatas, bebidas e sobremesas) estão confirmados na gravação de hoje e prontos para entrar em cena! <br/><br/>
                      Nenhum ingrediente ou lanche está desfalcado. Peça já o seu favorito e bom espetáculo!
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={() => setShowDesfalqueModal(false)}
                className="w-full bg-bf-black hover:bg-bf-yellow text-bf-yellow hover:text-bf-black font-baloo-caps text-xs font-black py-3 rounded-full border-2 border-bf-black transition-all cursor-pointer mt-2"
              >
                ENTENDIDO, QUERO PEDIR!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
