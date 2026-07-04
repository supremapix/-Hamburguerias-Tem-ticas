import { motion } from 'motion/react';
import React from 'react';
import { MapPin, Clock, Phone, ArrowLeft, ShieldCheck, Heart, Sparkles, Navigation } from 'lucide-react';
import InstagramFeed from '../InstagramFeed';

interface PageProps {
  onNavigate: (view: 'home' | 'quem-somos' | 'contato' | 'unidade-alfredo' | 'unidade-eugenio' | 'sitemap') => void;
  key?: string;
}

export default function UnidadeAlfredo({ onNavigate }: PageProps) {
  const mapsUrl = "https://maps.google.com/?q=Av.+Alfredo+Brunetti,+631,+Penha+-+SC";
  const orderUrl = "https://wa.me/5547992155989?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20para%20entrega%20na%20Unidade%20Alfredo%20Brunetti!";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-6 py-32 relative z-10 font-baloo"
    >
      
      {/* Navigation button */}
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
          <MapPin className="w-3.5 h-3.5 stroke-[2.5px]" />
          <span>PERTO DO BETO CARRERO</span>
        </span>
        <h1 className="text-3xl md:text-5xl uppercase bubble-title-outline text-bf-yellow leading-none">
          UNIDADE ALFREDO BRUNETTI
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mt-3 font-medium">
          A nossa unidade matriz, projetada para receber você e sua família com a magia do cinema em Penha-SC!
        </p>
      </div>

      {/* Main Feature Layout */}
      <div className="bg-bf-white border-4 border-bf-black rounded-[32px] p-8 md:p-10 shadow-[8px_8px_0px_#1A1A1A] mb-8">
        
        {/* Banner area / Big information highlight */}
        <div className="bg-bf-yellow border-3 border-bf-black rounded-2xl p-6 mb-8 shadow-[4px_4px_0_#1A1A1A]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="font-display text-2xl text-bf-black uppercase mb-1">Unidade Alfredo Brunetti</h2>
              <p className="text-xs text-bf-black font-medium max-w-md">
                Esta unidade fica super próxima à entrada do Parque Beto Carrero World, sendo ideal para encerrar o seu dia com chave de ouro e muito sabor!
              </p>
            </div>
            
            <a 
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-bf-black hover:bg-gray-900 text-bf-yellow font-baloo-caps text-xs font-black px-4 py-3 rounded-xl border-2 border-bf-black transition-transform hover:scale-105 shrink-0"
            >
              <Navigation className="w-4 h-4 fill-current" />
              <span>TRAÇAR ROTA NO MAPS</span>
            </a>
          </div>
        </div>

        {/* Column details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          
          {/* Info Details */}
          <div className="space-y-6">
            <h3 className="font-display text-xl text-bf-black uppercase border-b-2 border-dashed border-gray-200 pb-2">
              Informações Gerais
            </h3>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-bf-cream border-2 border-bf-black flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-bf-red" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-bf-black uppercase font-baloo-caps">Endereço Completo</h4>
                <p className="text-xs text-gray-600 mt-0.5">Av. Alfredo Brunetti, 631 - Armação</p>
                <p className="text-xs text-gray-500">Penha - SC, CEP 88385-000 (Perto do Parque Beto Carrero World)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-bf-cream border-2 border-bf-black flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-bf-yellow-deep" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-bf-black uppercase font-baloo-caps">Horário de Funcionamento</h4>
                <p className="text-xs text-gray-600 mt-0.5 font-bold">Segunda a Domingo (Todos os dias)</p>
                <p className="text-xs text-gray-500">Das 18:00 às 23:30</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-bf-cream border-2 border-bf-black flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-bf-black" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-bf-black uppercase font-baloo-caps">Contato & Reservas</h4>
                <p className="text-xs text-gray-600 mt-0.5">(47) 99215-5989 (WhatsApp Oficial)</p>
              </div>
            </div>
          </div>

          {/* Special highlights */}
          <div className="bg-bf-cream rounded-2xl border-3 border-bf-black p-6 shadow-[4px_4px_0_#1A1A1A] space-y-4">
            <h3 className="font-display text-lg text-bf-black uppercase flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-bf-yellow-deep fill-bf-yellow-deep" />
              <span>Diferenciais da Unidade</span>
            </h3>

            <ul className="space-y-3.5 text-xs text-gray-700 font-medium">
              <li className="flex gap-2 items-start">
                <ShieldCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Estacionamento Acessível:</strong> Vagas públicas tranquilas nas redondezas da avenida.</span>
              </li>
              <li className="flex gap-2 items-start">
                <ShieldCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Rodízio Completo:</strong> Rodízio de mini burgers de domingo a quinta-feira.</span>
              </li>
              <li className="flex gap-2 items-start">
                <ShieldCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Área Pub Temática:</strong> Decoração instagramável inspirada nos maiores clássicos do cinema.</span>
              </li>
              <li className="flex gap-2 items-start">
                <ShieldCheck className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Espaço Família:</strong> Mesas e poltronas confortáveis adequadas para crianças e grupos grandes.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* CTA Block */}
        <div className="mt-10 pt-8 border-t-2 border-dashed border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col">
            <span className="font-baloo text-sm text-gray-500">Deseja fazer um pedido para entrega ou retirar no balcão?</span>
            <span className="font-display text-xl text-bf-black">Peça direto por WhatsApp!</span>
          </div>

          <a
            href={orderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-bf-black hover:bg-bf-yellow text-bf-yellow hover:text-bf-black font-baloo-caps text-sm font-black px-8 py-4 rounded-full border-2 border-bf-black shadow-[4px_4px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer"
          >
            <span>PEDIR ONLINE AGORA</span>
          </a>
        </div>

      </div>

      {/* Instagram Feed Integration */}
      <div className="mb-12">
        <InstagramFeed />
      </div>

    </motion.div>
  );
}
