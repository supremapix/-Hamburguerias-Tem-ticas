import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, ArrowLeft, ShieldCheck, Heart, Sparkles, Navigation, DollarSign, Bike } from 'lucide-react';
import EnhancedSEO from '../EnhancedSEO';

interface LocationPageProps {
  slug: string;
  name: string;
  description: string;
  distanceToBetoCarrero: string;
  localInfo: string;
  deliveryTime: string;
  deliveryFee: string;
  onNavigate: (view: any) => void;
}

export default function LocationPage({
  slug,
  name,
  description,
  distanceToBetoCarrero,
  localInfo,
  deliveryTime,
  deliveryFee,
  onNavigate
}: LocationPageProps) {
  
  const mapsUrl = `https://maps.google.com/?q=Penha+-+SC,+Bairro+${encodeURIComponent(name)}`;
  const orderUrl = `https://wa.me/5547992155989?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20para%20entrega%20no%20bairro%20${encodeURIComponent(name)}!`;

  return (
    <>
      {/* Dynamic SEO configuration injection */}
      <EnhancedSEO view={slug} />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="max-w-4xl mx-auto px-6 py-32 relative z-10 font-baloo"
      >
        
        {/* Navigation buttons */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-bf-white hover:bg-bf-yellow text-bf-black font-baloo-caps text-xs font-black px-4 py-2.5 rounded-full border-2 border-bf-black shadow-[2px_2px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[3px]" />
            <span>VOLTAR PARA A HOME</span>
          </button>
          
          <button
            onClick={() => {
              onNavigate('contato');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-bf-white hover:bg-bf-red hover:text-bf-white text-bf-black font-baloo-caps text-xs font-black px-4 py-2.5 rounded-full border-2 border-bf-black shadow-[2px_2px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <span>CONTATOS</span>
          </button>
        </div>

        {/* Title Header */}
        <div className="text-center mb-12">
          <span className="text-bf-red font-baloo-caps text-xs font-black tracking-widest bg-bf-white border-2 border-bf-black px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 select-none">
            <Bike className="w-3.5 h-3.5 stroke-[2.5px] text-bf-red animate-pulse" />
            <span>DELIVERY BURGER FILMS</span>
          </span>
          <h1 className="text-3xl md:text-5xl uppercase bubble-title-outline text-bf-yellow leading-none">
            DELIVERY NO BAIRRO {name}
          </h1>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mt-3 font-medium">
            Sabor de cinema e blends suculentos sem sair de casa! Entregamos com rapidez no bairro {name} em Penha-SC.
          </p>
        </div>

        {/* Main Feature Layout */}
        <div className="bg-bf-white border-4 border-bf-black rounded-[32px] p-8 md:p-10 shadow-[8px_8px_0px_#1A1A1A] mb-8">
          
          {/* Banner area / Big information highlight */}
          <div className="bg-bf-yellow border-3 border-bf-black rounded-2xl p-6 mb-8 shadow-[4px_4px_0_#1A1A1A]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 className="font-display text-2xl text-bf-black uppercase mb-1">Roteiro de Entrega: Bairro {name}</h2>
                <p className="text-xs text-bf-black font-medium max-w-md">
                  {description} {distanceToBetoCarrero}
                </p>
              </div>
              
              <a 
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-bf-black hover:bg-gray-900 text-bf-yellow font-baloo-caps text-xs font-black px-4 py-3 rounded-xl border-2 border-bf-black transition-transform hover:scale-105 shrink-0"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>VER MAPA DO BAIRRO</span>
              </a>
            </div>
          </div>

          {/* Column details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            
            {/* Info Details */}
            <div className="space-y-6">
              <h3 className="font-display text-xl text-bf-black uppercase border-b-2 border-dashed border-gray-200 pb-2">
                Dados de Entrega
              </h3>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-bf-cream border-2 border-bf-black flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-bf-red" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-bf-black uppercase font-baloo-caps">Tempo Estimado</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Aproximadamente {deliveryTime}</p>
                  <p className="text-xs text-gray-500">Pode variar de acordo com o dia da semana e tráfego.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-bf-cream border-2 border-bf-black flex items-center justify-center shrink-0">
                  <DollarSign className="w-5 h-5 text-bf-yellow-deep" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-bf-black uppercase font-baloo-caps">Taxa de Entrega</h4>
                  <p className="text-xs text-gray-600 mt-0.5">{deliveryFee} (Taxa fixa especial)</p>
                  <p className="text-xs text-gray-500">Excelente custo-benefício para lanches super embalados.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-bf-cream border-2 border-bf-black flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-bf-black" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-bf-black uppercase font-baloo-caps">Como Pedir</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Pelo WhatsApp Central: (47) 99215-5989</p>
                  <p className="text-xs text-gray-500">Acesse nosso cardápio virtual e faça seu pedido direto.</p>
                </div>
              </div>
            </div>

            {/* Local info & differences */}
            <div className="bg-bf-cream rounded-2xl border-3 border-bf-black p-6 shadow-[4px_4px_0_#1A1A1A] space-y-4">
              <h3 className="font-display text-lg text-bf-black uppercase flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-bf-yellow-deep fill-bf-yellow-deep" />
                <span>Sobre o Atendimento Local</span>
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed font-semibold">
                {localInfo}
              </p>

              <div className="border-t border-dashed border-bf-black/10 pt-3">
                <h4 className="text-xs font-bold text-bf-black uppercase tracking-wider mb-2">Vantagens do Nosso Delivery:</h4>
                <ul className="space-y-2 text-[11px] text-gray-700 font-medium">
                  <li className="flex gap-1.5 items-start">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span><strong>Embalagem Premium:</strong> Mantém o pão macio e o blend super quente.</span>
                  </li>
                  <li className="flex gap-1.5 items-start">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span><strong>Cardápio Completo:</strong> Burgers de Cinema, Combos, Pizzas e Sobremesas.</span>
                  </li>
                  <li className="flex gap-1.5 items-start">
                    <ShieldCheck className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <span><strong>Ingredientes Selecionados:</strong> Qualidade garantida em cada pedaço.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* CTA Block */}
          <div className="mt-10 pt-8 border-t-2 border-dashed border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col">
              <span className="font-baloo text-sm text-gray-500">Preparado para viver esse espetáculo de sabor?</span>
              <span className="font-display text-xl text-bf-black">Seu blend de cinema está te esperando!</span>
            </div>

            <a
              href={orderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-bf-black hover:bg-bf-yellow text-bf-yellow hover:text-bf-black font-baloo-caps text-sm font-black px-8 py-4 rounded-full border-2 border-bf-black shadow-[4px_4px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer"
            >
              <span>PEDIR NO WHATSAPP AGORA</span>
            </a>
          </div>

        </div>

      </motion.div>
    </>
  );
}
