import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { X, MapPin, Clock, Phone, ExternalLink, MessageCircle, Sparkles, ChevronLeft, ChevronRight, Utensils, Film } from 'lucide-react';

interface ProductModalProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    subcategory?: string;
  } | null;
  onClose: () => void;
  getCategoryLabel: (item: any) => string;
  getSubcategoryLabel: (item: any) => string | undefined;
  items?: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    subcategory?: string;
  }>;
  onSelectItem?: (item: any) => void;
}

export default function ProductModal({ 
  item, 
  onClose, 
  getCategoryLabel, 
  getSubcategoryLabel,
  items = [],
  onSelectItem
}: ProductModalProps) {
  
  if (!item) return null;

  const currentIndex = items && onSelectItem ? items.findIndex(i => i.id === item.id) : -1;
  const hasMultipleItems = items && onSelectItem && items.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasMultipleItems || !items || !onSelectItem || currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelectItem(items[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasMultipleItems || !items || !onSelectItem || currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onSelectItem(items[nextIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        if (hasMultipleItems && items && onSelectItem && currentIndex !== -1) {
          const prevIndex = (currentIndex - 1 + items.length) % items.length;
          onSelectItem(items[prevIndex]);
        }
      } else if (e.key === 'ArrowRight') {
        if (hasMultipleItems && items && onSelectItem && currentIndex !== -1) {
          const nextIndex = (currentIndex + 1) % items.length;
          onSelectItem(items[nextIndex]);
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, hasMultipleItems, items, onSelectItem, onClose]);

  // Dispatch custom event to hide Header and disable body scroll
  useEffect(() => {
    document.body.classList.add('product-modal-active');
    window.dispatchEvent(new CustomEvent('product-modal-state', { detail: { isOpen: true } }));
    
    return () => {
      document.body.classList.remove('product-modal-active');
      window.dispatchEvent(new CustomEvent('product-modal-state', { detail: { isOpen: false } }));
    };
  }, []);

  const orderUrl = "https://burgerfilms.chefware.com.br/";

  const UNIDADES = [
    {
      name: "Unidade 1 — Alfredo Brunetti (Armação)",
      address: "Av. Alfredo Brunetti, 631",
      city: "Armação, Penha - SC",
      hours: "Segunda a Domingo: 18:00 às 23:30",
      mapsUrl: "https://maps.google.com/?q=Av.+Alfredo+Brunetti,+631,+Penha+-+SC",
      badgeColor: "bg-bf-yellow text-bf-black",
      borderColor: "border-bf-yellow"
    },
    {
      name: "Unidade 2 — Armação (Eugênio Krause)",
      address: "Av. Eugênio Krause, 3045",
      city: "Armação, Penha - SC",
      hours: "Quinta a Terça: 18:00 às 23:30 (Quarta-feira: Fechado)",
      mapsUrl: "https://maps.google.com/?q=Av.+Eug%C3%AAnio+Krause,+3045,+Penha+-+SC",
      badgeColor: "bg-bf-red text-bf-white",
      borderColor: "border-bf-red"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bf-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 30, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="relative bg-bf-cream w-full max-w-4xl rounded-[32px] border-4 border-bf-black shadow-[8px_8px_0_#1A1A1A] overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Close Button (Desktop/Standard) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-bf-white text-bf-black flex items-center justify-center border-2 border-bf-black shadow-[2px_2px_0_#1A1A1A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer focus:outline-none"
          aria-label="Fechar detalhes"
        >
          <X className="w-5 h-5 stroke-[2.5px]" />
        </button>

        {/* Left Side: Product Image & Badges & Slider Navigation */}
        <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-full bg-bf-black border-b-4 md:border-b-0 md:border-r-4 border-bf-black shrink-0 group">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          
          {/* Slider Left/Right Arrows overlayed on image */}
          {hasMultipleItems && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-bf-white text-bf-black flex items-center justify-center border-2 border-bf-black shadow-[2px_2px_0_#1A1A1A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-bf-yellow transition-all cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-6 h-6 stroke-[3px]" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-bf-white text-bf-black flex items-center justify-center border-2 border-bf-black shadow-[2px_2px_0_#1A1A1A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-bf-yellow transition-all cursor-pointer"
                aria-label="Próximo"
              >
                <ChevronRight className="w-6 h-6 stroke-[3px]" />
              </button>

              {/* Slider index indicator bubble */}
              <div className="absolute bottom-4 right-4 bg-bf-black text-bf-white text-[10px] font-mono px-2.5 py-1 rounded-full border-2 border-bf-black shadow-sm select-none">
                {currentIndex + 1} / {items.length}
              </div>
            </>
          )}
          
          {/* Category Badges */}
          <div className="absolute top-4 left-4 flex gap-1.5 flex-wrap z-10">
            <span className="bg-bf-black text-bf-yellow text-[11px] font-baloo-caps font-black px-3 py-1.5 rounded-full border-2 border-bf-black uppercase select-none shadow-md">
              {getCategoryLabel(item)}
            </span>
            {getSubcategoryLabel(item) && (
              <span className="bg-bf-red text-bf-white text-[11px] font-baloo-caps font-black px-3 py-1.5 rounded-full border-2 border-bf-black uppercase select-none shadow-md">
                {getSubcategoryLabel(item)}
              </span>
            )}
          </div>

          {/* Sparkles Overlay */}
          <div className="absolute bottom-4 left-4 bg-bf-yellow text-bf-black text-[11px] font-baloo-caps font-black px-3 py-1.5 rounded-full border-2 border-bf-black flex items-center gap-1.5 shadow-md select-none z-10">
            <Sparkles className="w-3.5 h-3.5 fill-bf-black" />
            <span>INGREDIENTES PREMIUM</span>
          </div>
        </div>

        {/* Right Side: Product Description, Purchase and Locations (Scrollable) */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto flex flex-col justify-between max-h-[50vh] md:max-h-full">
          <div>
            {/* Title */}
            <h2 className="text-2xl md:text-3xl text-bf-black font-baloo-caps font-black tracking-wide mb-3 pr-8 leading-tight">
              {item.name}
            </h2>

            {/* Price Tag */}
            <div className="flex items-baseline gap-2 mb-4 bg-bf-white/50 border-2 border-dashed border-bf-black/20 p-3 rounded-2xl w-fit">
              <span className="text-xs font-baloo uppercase text-gray-500 font-extrabold tracking-wider">
                Valor do item:
              </span>
              <span className="text-bf-black font-display text-2xl md:text-3xl">
                R$ {item.price.toFixed(2).replace('.', ',')}
              </span>
            </div>

            {/* Detailed Description */}
            <div className="mb-6">
              <h3 className="text-bf-black font-baloo-caps text-xs font-bold uppercase tracking-widest text-bf-red mb-1.5 flex items-center gap-1.5">
                <Film className="w-4 h-4" />
                <span>Detalhamento do Lanche</span>
              </h3>
              <p className="text-gray-700 text-sm md:text-base font-medium font-baloo leading-relaxed bg-bf-white border-2 border-bf-black p-4 rounded-2xl shadow-[3px_3px_0_#1A1A1A]">
                {item.description}
              </p>
            </div>

            {/* Address List */}
            <div className="mb-8">
              <h3 className="text-bf-black font-baloo-caps text-xs font-bold uppercase tracking-widest text-bf-red mb-3 flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Onde Comer (Nossas Unidades)</span>
              </h3>
              
              <div className="grid grid-cols-1 gap-3.5">
                {UNIDADES.map((unidade, index) => (
                  <div 
                    key={index} 
                    className="bg-bf-white border-2 border-bf-black rounded-2xl p-4 shadow-[3px_3px_0_#1A1A1A] hover:translate-y-[-1px] transition-transform"
                  >
                    <span className={`inline-block text-[9px] md:text-[10px] font-baloo-caps font-black px-2 py-0.5 rounded-full mb-1 border border-bf-black uppercase ${unidade.badgeColor}`}>
                      {unidade.name.split(' — ')[0]}
                    </span>
                    <h4 className="font-baloo-caps text-sm font-bold text-bf-black leading-tight mb-1">
                      {unidade.name.split(' — ')[1] || unidade.name}
                    </h4>
                    
                    <div className="flex items-start gap-1.5 text-xs text-gray-600 font-baloo mb-1">
                      <MapPin className="w-3.5 h-3.5 text-bf-red shrink-0 mt-0.5" />
                      <span>{unidade.address}, {unidade.city}</span>
                    </div>

                    <div className="flex items-start gap-1.5 text-xs text-gray-600 font-baloo mb-2">
                      <Clock className="w-3.5 h-3.5 text-bf-yellow-deep shrink-0 mt-0.5" />
                      <span className="leading-tight">{unidade.hours}</span>
                    </div>

                    <a 
                      href={unidade.mapsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-baloo-caps font-black text-bf-black bg-bf-cream hover:bg-bf-yellow border border-bf-black px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>COMO CHEGAR (MAPS)</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Action Area (Includes close and order button to avoid getting stuck behind large photos) */}
          <div className="pt-4 border-t-2 border-dashed border-bf-black/20 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              {/* Bottom Close Button requested by user */}
              <button
                onClick={onClose}
                className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-bf-white hover:bg-gray-100 text-bf-black font-baloo-caps text-sm font-black px-6 py-3.5 rounded-full border-2 border-bf-black shadow-[4px_4px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer"
              >
                <X className="w-4 h-4 stroke-[3px]" />
                <span>FECHAR DETALHES</span>
              </button>

              {/* Order Button */}
              <a
                href={orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-bf-black hover:bg-bf-yellow text-bf-yellow hover:text-bf-black font-baloo-caps text-sm font-black px-6 py-3.5 rounded-full border-2 border-bf-black shadow-[4px_4px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer"
              >
                <Utensils className="w-4 h-4 shrink-0" />
                <span>PEDIR ONLINE AGORA</span>
              </a>
            </div>
          </div>

        </div>

      </motion.div>
    </motion.div>
  );
}
