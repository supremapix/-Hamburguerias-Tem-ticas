import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data';
import { 
  Search, 
  Sparkles, 
  Info, 
  Film, 
  Trophy, 
  Flame, 
  Gift, 
  Pizza, 
  Utensils, 
  CupSoda, 
  Store, 
  ChevronRight, 
  Eye 
} from 'lucide-react';
import ProductModal from './ProductModal';

// Category Sections structure
const CATEGORY_SECTIONS = [
  { 
    id: 'cinema', 
    title: 'Burgers de Cinema', 
    description: 'Nossos hambúrgueres temáticos artesanais inspirados nos maiores clássicos das telas!', 
    icon: Film, 
    filter: (item: any) => item.subcategory === 'cinema' 
  },
  { 
    id: 'copa', 
    title: 'Copa 2026', 
    description: 'Hambúrgueres especiais celebrando o Hexa com sabores do mundo inteiro!', 
    icon: Trophy, 
    filter: (item: any) => item.subcategory === 'copa' 
  },
  { 
    id: 'minions', 
    title: 'Mini Burgers', 
    description: 'Nossos mini hambúrgueres super divertidos, perfeitos para o rodízio ou para a garotada!', 
    icon: Flame, 
    filter: (item: any) => item.subcategory === 'minions' 
  },
  { 
    id: 'combos', 
    title: 'Combos Especiais', 
    description: 'Combinações completas com batata frita e bebida para quem quer o elenco completo!', 
    icon: Gift, 
    filter: (item: any) => item.category === 'combos' 
  },
  { 
    id: 'petiscos', 
    title: 'Petiscos & Acompanhamentos', 
    description: 'Porções crocantes e acompanhamentos perfeitos para abrir o apetite!', 
    icon: Pizza, 
    filter: (item: any) => item.category === 'petiscos' 
  },
  { 
    id: 'pizzas', 
    title: 'Pizzas Temáticas', 
    description: 'Nossas deliciosas pizzas preparadas com molho artesanal e ingredientes de primeira!', 
    icon: Utensils, 
    filter: (item: any) => item.category === 'pizzas' 
  },
  { 
    id: 'bebidas', 
    title: 'Bebidas & Drinks', 
    description: 'Refrigerantes, sucos, cervejas e chopes para refrescar sua sessão!', 
    icon: CupSoda, 
    filter: (item: any) => item.category === 'bebidas' 
  },
  { 
    id: 'sobremesas', 
    title: 'Sobremesas & Lojinha', 
    description: 'Doces espetaculares para fechar com chave de ouro e souvenirs exclusivos do cinema!', 
    icon: Store, 
    filter: (item: any) => item.category === 'sobremesas' || item.category === 'guloseimas' 
  }
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'cinema' | 'copa' | 'minions' | 'combos' | 'petiscos' | 'pizzas' | 'bebidas' | 'sobremesas'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<typeof MENU_ITEMS[0] | null>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const handleHighlight = () => {
      setIsHighlighted(true);
      // Automatically focus search or just pulse title
      setTimeout(() => setIsHighlighted(false), 2200);
    };
    window.addEventListener('highlight-menu', handleHighlight);
    return () => window.removeEventListener('highlight-menu', handleHighlight);
  }, []);

  // Filtering menu items based on selected tab and search query
  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (!matchesSearch) return false;
    if (activeTab === 'all') return true;
    if (activeTab === 'cinema') return item.subcategory === 'cinema';
    if (activeTab === 'copa') return item.subcategory === 'copa';
    if (activeTab === 'minions') return item.subcategory === 'minions';
    if (activeTab === 'combos') return item.category === 'combos';
    if (activeTab === 'petiscos') return item.category === 'petiscos';
    if (activeTab === 'pizzas') return item.category === 'pizzas';
    if (activeTab === 'bebidas') return item.category === 'bebidas';
    if (activeTab === 'sobremesas') return item.category === 'sobremesas' || item.category === 'guloseimas';
    return true;
  });

  const getCategoryLabel = (item: typeof MENU_ITEMS[0]) => {
    if (item.category === 'combos') return 'Combo';
    if (item.category === 'pizzas') return 'Pizza';
    if (item.category === 'petiscos') return 'Petisco';
    if (item.category === 'bebidas') return 'Bebida';
    if (item.category === 'sobremesas') return 'Sobremesa';
    if (item.category === 'guloseimas') return 'Lojinha';
    return 'Burguer';
  };

  const getSubcategoryLabel = (item: typeof MENU_ITEMS[0]) => {
    if (item.subcategory === 'minions') return 'Rodízio';
    if (item.subcategory === 'cinema') return 'Cinema';
    if (item.subcategory === 'copa') return 'Copa 2026';
    return undefined;
  };

  return (
    <section id="menu" className="py-24 bg-bf-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 select-none">
          <span className="text-bf-red font-baloo-caps text-xs md:text-sm font-extrabold tracking-widest bg-bf-cream border-2 border-bf-black px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
            <Film className="w-3.5 h-3.5" />
            <span>O SHOW VAI COMEÇAR!</span>
          </span>
          <motion.h2 
            animate={isHighlighted ? { scale: [1, 1.15, 0.95, 1.05, 1], rotate: [0, -3, 3, -1, 0] } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className={`text-4xl md:text-6xl uppercase bubble-title-outline transition-colors duration-300 ${isHighlighted ? 'text-bf-red' : 'text-bf-yellow'}`}
          >
            NOSSO CARDÁPIO
            <span className="sr-only"> de Hambúrgueres Artesanais em Penha-SC</span>
          </motion.h2>
          <p className="text-gray-500 font-baloo text-sm md:text-base max-w-xl mx-auto mt-2 font-medium">
            Selecione uma categoria ou pesquise para encontrar as melhores produções gastronômicas!
          </p>
        </div>

        {/* Search Bar & Categories Tabs wrapper */}
        <div className="flex flex-col gap-6 items-center justify-between mb-12 max-w-5xl mx-auto">
          
          {/* Search Input Box */}
          <div className="relative w-full max-w-md group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-bf-black stroke-[2.5px]" />
            <input
              type="text"
              placeholder="Pesquisar lanche ou ingrediente..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-bf-cream text-bf-black font-baloo font-bold py-3.5 pl-12 pr-6 rounded-full border-3 border-bf-black shadow-[3px_3px_0px_#1A1A1A] focus:outline-none focus:shadow-[1px_1px_0px_#1A1A1A] focus:translate-x-[2px] focus:translate-y-[2px] transition-all placeholder:text-gray-500"
            />
          </div>

          {/* Categories Tab Selector (Horizontal Scrollbar on mobile and desktop) */}
          <div className="w-full overflow-x-auto pb-3 -mb-3 scrollbar-thin scrollbar-thumb-bf-black/20 scrollbar-track-transparent">
            <div className="flex items-center gap-3 w-max mx-auto px-4">
              {[
                { id: 'all', title: "Todos", icon: Film },
                ...CATEGORY_SECTIONS
              ].map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      // If 'all', scroll slightly, otherwise scroll to target section
                      if (tab.id === 'all') {
                        const el = document.getElementById('menu');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        const el = document.getElementById(`cat-${tab.id}`);
                        if (el) {
                          const yOffset = -90; 
                          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }
                    }}
                    className={`px-4 py-2.5 rounded-full font-baloo-caps text-xs md:text-sm font-extrabold border-3 border-bf-black cursor-pointer transition-all flex items-center gap-2 shrink-0 ${
                      activeTab === tab.id
                        ? 'bg-bf-yellow text-bf-black shadow-[4px_4px_0_#1A1A1A] -translate-y-[2px]'
                        : 'bg-bf-white text-bf-black hover:bg-bf-cream'
                    }`}
                  >
                    <TabIcon className="w-4 h-4 shrink-0 stroke-[2.5px]" />
                    <span>{tab.title.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Dual Mode Items Renderer */}
        {searchQuery === '' ? (
          /* Render category lanes with horizontal scroll bar on both PC and mobile */
          <div className="space-y-16">
            {CATEGORY_SECTIONS.map((section) => {
              const sectionItems = MENU_ITEMS.filter(section.filter);
              if (sectionItems.length === 0) return null;
              const SectionIcon = section.icon;

              return (
                <div 
                  key={section.id} 
                  id={`cat-${section.id}`} 
                  className="scroll-mt-24"
                >
                  {/* Category Section Title Header */}
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 border-b-3 border-bf-black pb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-bf-yellow border-2 border-bf-black flex items-center justify-center shrink-0 shadow-[2px_2px_0_#1A1A1A]">
                          <SectionIcon className="w-4 h-4 text-bf-black stroke-[2.5px]" />
                        </div>
                        <h3 className="font-baloo-caps text-xl md:text-2xl font-extrabold text-bf-black uppercase leading-none">
                          {section.title}
                        </h3>
                      </div>
                      <p className="text-gray-500 font-baloo text-[11px] md:text-xs mt-1.5 font-semibold">
                        {section.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-1 text-[10px] md:text-xs font-baloo font-extrabold text-gray-400 uppercase select-none">
                      <span>Deslize para ver mais</span>
                      <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
                    </div>
                  </div>

                  {/* Category Horizontal Scroll Lane */}
                  <div className="relative -mx-6 px-6">
                    <div className="flex overflow-x-auto gap-6 pb-6 pt-2 scrollbar-thin scrollbar-thumb-bf-black/30 scrollbar-track-transparent snap-x snap-mandatory scroll-smooth">
                      {sectionItems.map((item) => (
                        <div 
                          key={item.id} 
                          className="w-[280px] md:w-[320px] shrink-0 snap-start"
                        >
                          {/* Inner Product Card */}
                          <div className="group relative bg-bf-white rounded-[32px] border-3 border-bf-black h-full shadow-[6px_6px_0px_0px_#1A1A1A] hover:shadow-[2px_2px_0px_0px_#1A1A1A] hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex flex-col justify-between overflow-hidden">
                            
                            {/* Product Image Panel with zoom hover */}
                            <div 
                              onClick={() => setSelectedItem(item)}
                              className="relative aspect-video w-full overflow-hidden border-b-3 border-bf-black bg-bf-cream flex items-center justify-center cursor-pointer group/img"
                            >
                              <img
                                src={item.image}
                                alt={item.name}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover/img:scale-106 transition-transform duration-500"
                              />
                              
                              {/* Hover details overlay */}
                              <div className="absolute inset-0 bg-bf-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                                <span className="bg-bf-yellow text-bf-black text-xs font-baloo-caps font-black px-3.5 py-2 rounded-full border-2 border-bf-black shadow-md uppercase tracking-wide flex items-center gap-1.5">
                                  <Eye className="w-3.5 h-3.5 stroke-[3px]" />
                                  <span>Ver Detalhes</span>
                                </span>
                              </div>
                              
                              {/* Category Pill Overlays */}
                              <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap">
                                <span className="bg-bf-black text-bf-yellow text-[10px] font-baloo-caps font-black px-2.5 py-1 rounded-full border-2 border-bf-black uppercase select-none">
                                  {getCategoryLabel(item)}
                                </span>
                                {getSubcategoryLabel(item) && (
                                  <span className="bg-bf-red text-bf-white text-[10px] font-baloo-caps font-black px-2.5 py-1 rounded-full border-2 border-bf-black uppercase select-none">
                                    {getSubcategoryLabel(item)}
                                  </span>
                                )}
                              </div>

                              {/* Quality Badge */}
                              <div className="absolute bottom-4 right-4 bg-bf-yellow text-bf-black text-[11px] font-baloo-caps font-black px-2 py-0.5 rounded-full border-2 border-bf-black flex items-center gap-1 shadow-md select-none">
                                <Sparkles className="w-3 h-3 fill-bf-black" />
                                <span>ARTESANAL</span>
                              </div>
                            </div>

                            {/* Product Text Content Body */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                              <div>
                                {/* Item Name */}
                                <h4 
                                  onClick={() => setSelectedItem(item)}
                                  className="text-bf-black font-baloo-caps text-base md:text-lg font-extrabold tracking-wide mb-1.5 hover:text-bf-red transition-colors cursor-pointer line-clamp-1"
                                >
                                  {item.name}
                                </h4>
                                
                                {/* Item Description */}
                                <p className="text-gray-600 text-xs font-semibold font-baloo leading-relaxed mb-4 line-clamp-2">
                                  {item.description}
                                </p>
                              </div>

                              {/* Item Footer - Price & Order Button */}
                              <div className="pt-3 border-t-2 border-dashed border-gray-200 flex items-center justify-between gap-2 mt-4">
                                {/* Price Tag */}
                                <div className="flex flex-col">
                                  <span className="text-[9px] font-baloo uppercase text-gray-400 font-extrabold tracking-wider leading-none mb-0.5">
                                    A partir de
                                  </span>
                                  <span className="text-bf-black font-display text-base md:text-lg leading-none">
                                    R$ {item.price.toFixed(2).replace('.', ',')}
                                  </span>
                                </div>

                                {/* Order Action Link */}
                                <a
                                  href="https://burgerfilms.chefware.com.br/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-1.5 bg-bf-black hover:bg-bf-yellow text-bf-yellow hover:text-bf-black font-baloo-caps text-[10px] md:text-xs px-3.5 py-2.5 rounded-full border-2 border-bf-black shadow-[2px_2px_0px_#1A1A1A] transition-all cursor-pointer hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                                >
                                  <Utensils className="w-3.5 h-3.5 shrink-0" />
                                  <span>PEDIR ONLINE</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Render Unified Grid only when there is an active search query */
          <div>
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item, index) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 15 }}
                    transition={{ 
                      duration: 0.35,
                      type: "spring",
                      stiffness: 110,
                      damping: 14,
                      delay: Math.min(index * 0.05, 0.4) 
                    }}
                    className="group relative bg-bf-white rounded-[32px] border-3 border-bf-black shadow-[6px_6px_0px_0px_#1A1A1A] hover:shadow-[2px_2px_0px_0px_#1A1A1A] hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex flex-col justify-between overflow-hidden"
                  >
                    
                    {/* Product Image Panel with zoom hover */}
                    <div 
                      onClick={() => setSelectedItem(item)}
                      className="relative aspect-video w-full overflow-hidden border-b-3 border-bf-black bg-bf-cream flex items-center justify-center cursor-pointer group/img"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover/img:scale-106 transition-transform duration-500"
                      />
                      
                      {/* Hover details overlay */}
                      <div className="absolute inset-0 bg-bf-black/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="bg-bf-yellow text-bf-black text-xs font-baloo-caps font-black px-3.5 py-2 rounded-full border-2 border-bf-black shadow-md uppercase tracking-wide flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 stroke-[3px]" />
                          <span>Ver Detalhes</span>
                        </span>
                      </div>
                      
                      {/* Category Pill Overlays */}
                      <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap">
                        <span className="bg-bf-black text-bf-yellow text-[10px] font-baloo-caps font-black px-2.5 py-1 rounded-full border-2 border-bf-black uppercase select-none">
                          {getCategoryLabel(item)}
                        </span>
                        {getSubcategoryLabel(item) && (
                          <span className="bg-bf-red text-bf-white text-[10px] font-baloo-caps font-black px-2.5 py-1 rounded-full border-2 border-bf-black uppercase select-none">
                            {getSubcategoryLabel(item)}
                          </span>
                        )}
                      </div>

                      {/* Quality Badge */}
                      <div className="absolute bottom-4 right-4 bg-bf-yellow text-bf-black text-[11px] font-baloo-caps font-black px-2 py-0.5 rounded-full border-2 border-bf-black flex items-center gap-1 shadow-md select-none">
                        <Sparkles className="w-3 h-3 fill-bf-black" />
                        <span>ARTESANAL</span>
                      </div>
                    </div>

                    {/* Product Text Content Body */}
                    <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Item Name */}
                        <h3 
                          onClick={() => setSelectedItem(item)}
                          className="text-bf-black font-baloo-caps text-lg md:text-xl font-extrabold tracking-wide mb-2 hover:text-bf-red transition-colors cursor-pointer"
                        >
                          {item.name}
                        </h3>
                        
                        {/* Item Description */}
                        <p className="text-gray-600 text-xs md:text-sm font-semibold font-baloo leading-relaxed mb-6">
                          {item.description}
                        </p>
                      </div>

                      {/* Item Footer - Price & Order Button */}
                      <div className="pt-4 border-t-2 border-dashed border-gray-200 flex items-center justify-between gap-4">
                        
                        {/* Price Tag */}
                        <div className="flex flex-col">
                          <span className="text-[10px] font-baloo uppercase text-gray-400 font-extrabold tracking-wider leading-none mb-0.5">
                            A partir de
                          </span>
                          <span className="text-bf-black font-display text-xl leading-none">
                            R$ {item.price.toFixed(2).replace('.', ',')}
                          </span>
                        </div>

                        {/* Order Action Link */}
                        <a
                          href="https://burgerfilms.chefware.com.br/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-bf-black hover:bg-bf-yellow text-bf-yellow hover:text-bf-black font-baloo-caps text-xs px-4 py-3 rounded-full border-2 border-bf-black shadow-[2px_2px_0px_#1A1A1A] transition-all cursor-pointer hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
                        >
                          <Utensils className="w-3.5 h-3.5 shrink-0" />
                          <span>PEDIR ONLINE</span>
                        </a>

                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Empty state fallback */}
            {filteredItems.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 max-w-sm mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-bf-cream flex items-center justify-center border-2 border-bf-black mx-auto mb-4">
                  <Info className="w-8 h-8 text-bf-black" />
                </div>
                <h3 className="font-baloo-caps text-lg font-black text-bf-black mb-1">
                  NENHUM ITEM ENCONTRADO
                </h3>
                <p className="font-baloo text-sm text-gray-500">
                  Não encontramos nenhum lanche correspondente a sua pesquisa. Tente buscar por outros termos!
                </p>
              </motion.div>
            )}
          </div>
        )}

      </div>

      <AnimatePresence>
        {selectedItem && (
          <ProductModal 
            item={selectedItem} 
            onClose={() => setSelectedItem(null)} 
            getCategoryLabel={getCategoryLabel}
            getSubcategoryLabel={getSubcategoryLabel}
            items={filteredItems}
            onSelectItem={setSelectedItem}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
