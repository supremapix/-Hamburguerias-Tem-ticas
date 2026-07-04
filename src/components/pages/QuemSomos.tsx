import { motion } from 'motion/react';
import React from 'react';
import { Film, Award, Star, Users, ArrowLeft, Heart } from 'lucide-react';

interface PageProps {
  onNavigate: (view: 'home' | 'quem-somos' | 'contato' | 'unidade-alfredo' | 'unidade-eugenio' | 'sitemap') => void;
  key?: string;
}

export default function QuemSomos({ onNavigate }: PageProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-6 py-32 relative z-10"
    >
      {/* Back to home button */}
      <button
        onClick={() => {
          onNavigate('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="inline-flex items-center gap-2 bg-bf-white hover:bg-bf-yellow text-bf-black font-baloo-caps text-xs font-black px-4 py-2.5 rounded-full border-2 border-bf-black shadow-[2px_2px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer mb-8"
      >
        <ArrowLeft className="w-4 h-4 stroke-[3px]" />
        <span>VOLTAR PARA A HOME</span>
      </button>

      {/* Hero Header */}
      <div className="text-center mb-12">
        <span className="text-bf-red font-baloo-caps text-xs font-black tracking-widest bg-bf-white border-2 border-bf-black px-3.5 py-1.5 rounded-full inline-block mb-3 select-none">
          🎬 NOSSA HISTÓRIA
        </span>
        <h1 className="text-4xl md:text-6xl uppercase bubble-title-outline text-bf-yellow leading-none">
          QUEM SOMOS
        </h1>
        <p className="text-gray-500 font-baloo text-sm md:text-base max-w-xl mx-auto mt-3 font-medium">
          A fantástica jornada da melhor hamburgueria artesanal de Penha-SC, onde o cinema e a alta gastronomia se encontram!
        </p>
      </div>

      {/* Main Content Card */}
      <div className="bg-bf-white border-4 border-bf-black rounded-[32px] p-8 md:p-12 shadow-[8px_8px_0px_#1A1A1A] mb-12">
        
        {/* Paragraphs with cartoon visual enhancements */}
        <div className="prose max-w-none text-gray-700 font-baloo space-y-6 text-sm md:text-base leading-relaxed">
          <p className="font-bold text-bf-black text-base md:text-lg">
            🍿 Luz, Câmera e Sabor! A <span className="text-bf-red font-black">Burger Films Pub & Delivery</span> nasceu com uma missão clara: transformar cada mordida em uma verdadeira experiência digna do Oscar.
          </p>
          
          <p>
            Localizados na encantadora cidade de <strong>Penha, Santa Catarina</strong> — lar do Beto Carrero World, o maior parque temático da América Latina —, nós entendemos que a diversão e a fantasia não devem ficar restritas apenas às atrações turísticas. Elas também precisam estar presentes na mesa!
          </p>

          <p>
            Cada um dos nossos hambúrgueres é batizado e inspirado em grandes produções do cinema mundial, trazendo conceitos únicos, pães coloridos e combinações de sabores que contam histórias. Do blend suculento de carne de alta qualidade aos molhos artesanais secretos criados pelo nosso "diretor" de cozinha, tudo é preparado com um cuidado milimétrico.
          </p>

          {/* Blockquote feature */}
          <div className="bg-bf-cream border-2 border-bf-black p-6 rounded-2xl shadow-[4px_4px_0_#1A1A1A] flex gap-4 items-start my-8">
            <Film className="w-8 h-8 text-bf-red shrink-0" />
            <div>
              <p className="font-display text-lg text-bf-black leading-snug mb-1">"NÃO FAZEMOS APENAS COMIDA, DIRIGIMOS SESSÕES DE SABOR!"</p>
              <p className="text-xs text-gray-500 font-medium">— Equipe de Direção da Burger Films</p>
            </div>
          </div>

          <p>
            Hoje, contamos com duas unidades temáticas pensadas para acolher tanto os moradores locais quanto os turistas que visitam a nossa bela região. Seja no nosso pub acolhedor ou através do nosso delivery ultra veloz direto para o seu hotel, casa ou pousada, garantimos um espetáculo de sabor quentinho na sua mesa.
          </p>
        </div>

        {/* Pillars / Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 border-t-2 border-dashed border-bf-black/20 pt-10">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 bg-bf-yellow text-bf-black flex items-center justify-center rounded-2xl border-2 border-bf-black shadow-[3px_3px_0_#1A1A1A] mb-4">
              <Award className="w-6 h-6 stroke-[2.5px]" />
            </div>
            <h4 className="font-baloo-caps text-base font-black text-bf-black mb-1.5">QUALIDADE OSCAR</h4>
            <p className="text-xs text-gray-500 font-baloo leading-relaxed">
              Ingredientes nobres, carnes selecionadas diariamente e processos de alta gastronomia.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 bg-bf-red text-bf-white flex items-center justify-center rounded-2xl border-2 border-bf-black shadow-[3px_3px_0_#1A1A1A] mb-4">
              <Star className="w-6 h-6 stroke-[2.5px]" />
            </div>
            <h4 className="font-baloo-caps text-base font-black text-bf-black mb-1.5">RODÍZIO CINEMATOGRÁFICO</h4>
            <p className="text-xs text-gray-500 font-baloo leading-relaxed">
              Nosso rodízio de mini burgers é um sucesso estrondoso, perfeito para provar todos os roteiros!
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 bg-bf-yellow text-bf-black flex items-center justify-center rounded-2xl border-2 border-bf-black shadow-[3px_3px_0_#1A1A1A] mb-4">
              <Users className="w-6 h-6 stroke-[2.5px]" />
            </div>
            <h4 className="font-baloo-caps text-base font-black text-bf-black mb-1.5">ATENDIMENTO ESTRELA</h4>
            <p className="text-xs text-gray-500 font-baloo leading-relaxed">
              Atendimento alegre, descontraído e focado em fazer você se sentir um verdadeiro astro de Hollywood.
            </p>
          </div>
        </div>

      </div>

      {/* Footer Back to top */}
      <div className="text-center">
        <p className="text-xs text-gray-500 font-baloo mb-4 flex items-center justify-center gap-1">
          <span>Feito com</span>
          <Heart className="w-3.5 h-3.5 fill-bf-red text-bf-red" />
          <span>pela equipe Burger Films em Penha-SC</span>
        </p>
      </div>

    </motion.div>
  );
}
