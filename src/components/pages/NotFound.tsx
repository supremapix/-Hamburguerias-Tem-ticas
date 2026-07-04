import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Film, Home, ArrowLeft, Search, AlertCircle } from 'lucide-react';

interface PageProps {
  onNavigate: (view: any) => void;
  key?: string;
}

export default function NotFound({ onNavigate }: PageProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onNavigate('home');
      setTimeout(() => {
        const input = document.querySelector('input[placeholder*="pesquise"]') as HTMLInputElement;
        if (input) {
          input.value = searchValue;
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  };

  return (
    <div className="pt-32 pb-20 px-4 flex flex-col items-center justify-center min-h-screen max-w-xl mx-auto text-center">
      {/* 404 Animated Badge */}
      <motion.div
        initial={{ scale: 0.5, rotate: -10, opacity: 0 }}
        animate={{ scale: 1, rotate: [0, -5, 5, -2, 0], opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="relative bg-bf-red text-bf-white font-display text-7xl md:text-8xl border-4 border-bf-black rounded-[32px] px-8 py-4 mb-8 shadow-[6px_6px_0px_0px_#1A1A1A]"
      >
        404
        <div className="absolute -top-3 -right-3 bg-bf-yellow text-bf-black border-2 border-bf-black rounded-full p-1.5 animate-bounce">
          <AlertCircle className="w-5 h-5 fill-current" />
        </div>
      </motion.div>

      {/* Main Heading & Subtext */}
      <h1 className="font-display text-3xl md:text-4xl text-bf-black uppercase tracking-tight leading-tight mb-4">
        CENA CORTADA NA EDIÇÃO!
      </h1>
      <p className="text-gray-600 font-baloo text-sm md:text-base font-medium mb-8 leading-relaxed">
        Ops! O roteiro mudou ou o link que você acessou foi retirado dos bastidores. Que tal rodar uma nova cena e voltar ao início?
      </p>

      {/* Decorative Filmstrip */}
      <div className="w-full border-t-4 border-b-4 border-dashed border-bf-black/20 py-1.5 flex justify-around mb-8 text-xs font-mono font-bold text-gray-400">
        <span>FRAME: 404</span>
        <span>SCENE LOST</span>
        <span>TAKE: ERROR</span>
      </div>

      {/* Search Bar fallback to look for items */}
      <form onSubmit={handleSearch} className="w-full flex gap-2 mb-8">
        <input
          type="text"
          placeholder="Procure algo gostoso no cardápio..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="flex-1 bg-bf-white border-2 border-bf-black rounded-full px-5 py-3 font-baloo text-xs font-medium focus:outline-none focus:bg-bf-cream transition-colors placeholder:text-gray-400 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.15)]"
        />
        <button
          type="submit"
          className="bg-bf-yellow hover:bg-bf-yellow/90 text-bf-black font-baloo-caps font-black text-xs px-5 py-3 rounded-full border-2 border-bf-black shadow-[3px_3px_0px_0px_rgba(0,0,0,0.95)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer focus:outline-none"
        >
          BUSCAR
        </button>
      </form>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <button
          onClick={() => onNavigate('home')}
          className="flex-1 flex items-center justify-center gap-2 bg-bf-black hover:bg-bf-black/90 text-bf-yellow font-baloo-caps text-xs py-3.5 px-6 rounded-full border-2 border-bf-black shadow-[4px_4px_0px_0px_#FFFFFF] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer focus:outline-none"
        >
          <Home className="w-4 h-4" />
          <span>IR PARA A HOME</span>
        </button>
        <button
          onClick={() => onNavigate('blog')}
          className="flex-1 flex items-center justify-center gap-2 bg-bf-white hover:bg-bf-cream text-bf-black font-baloo-caps text-xs py-3.5 px-6 rounded-full border-2 border-bf-black shadow-[4px_4px_0px_0px_#1A1A1A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer focus:outline-none"
        >
          <Film className="w-4 h-4 text-bf-red" />
          <span>VISITAR O BLOG</span>
        </button>
      </div>
    </div>
  );
}
