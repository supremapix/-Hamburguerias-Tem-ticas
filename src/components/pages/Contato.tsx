import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import InstagramFeed from '../InstagramFeed';

interface PageProps {
  onNavigate: (view: 'home' | 'quem-somos' | 'contato' | 'unidade-alfredo' | 'unidade-eugenio' | 'sitemap') => void;
  key?: string;
}

export default function Contato({ onNavigate }: PageProps) {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  const UNIDADES_DATA = [
    {
      title: "Unidade Alfredo Brunetti",
      desc: "Nossa unidade principal, coladinha no Beto Carrero World!",
      address: "Av. Alfredo Brunetti, 631 - Armação, Penha-SC",
      hours: "Segunda a Domingo: 18:00 às 23:30",
      view: 'unidade-alfredo' as const,
      mapsUrl: "https://maps.google.com/?q=Av.+Alfredo+Brunetti,+631,+Penha+-+SC",
      phone: "(47) 99215-5989",
      accent: "border-bf-yellow hover:bg-bf-yellow/5"
    },
    {
      title: "Unidade Eugênio Krause",
      desc: "Nossa charmosa unidade no coração de Armação!",
      address: "Av. Eugênio Krause, 3045 - Armação, Penha-SC",
      hours: "Quinta a Terça: 18:00 às 23:30 (Quarta: Fechado)",
      view: 'unidade-eugenio' as const,
      mapsUrl: "https://maps.google.com/?q=Av.+Eug%C3%AAnio+Krause,+3045,+Penha+-+SC",
      phone: "(47) 99215-5989",
      accent: "border-bf-red hover:bg-bf-red/5"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-5xl mx-auto px-6 py-32 relative z-10"
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

      {/* Header Section */}
      <div className="text-center mb-16 select-none">
        <span className="text-bf-red font-baloo-caps text-xs font-black tracking-widest bg-bf-white border-2 border-bf-black px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
          <Phone className="w-3.5 h-3.5 stroke-[2.5px]" />
          <span>FALE CONOSCO</span>
        </span>
        <h1 className="text-4xl md:text-6xl uppercase bubble-title-outline text-bf-yellow leading-none">
          CONTATO & LOCALIZAÇÃO
        </h1>
        <p className="text-gray-500 font-baloo text-sm md:text-base max-w-xl mx-auto mt-3 font-medium">
          Dúvidas, sugestões, elogios ou eventos privados? Encontre nossas unidades ou fale diretamente com a equipe Burger Films!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left Side: Both Addresses Grid (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <h2 className="font-display text-2xl text-bf-black uppercase tracking-wider">
            Nossas Duas Unidades em Penha-SC
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {UNIDADES_DATA.map((u, i) => (
              <div 
                key={i}
                className={`bg-bf-white border-3 border-bf-black rounded-[24px] p-6 shadow-[4px_4px_0_#1A1A1A] flex flex-col justify-between transition-all duration-200 ${u.accent}`}
              >
                <div>
                  <h3 className="font-baloo-caps text-lg font-black text-bf-black leading-tight mb-2">
                    {u.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-baloo mb-4 leading-normal">
                    {u.desc}
                  </p>

                  <div className="flex items-start gap-2 text-xs text-gray-700 font-baloo mb-2">
                    <MapPin className="w-4 h-4 text-bf-red shrink-0 mt-0.5" />
                    <span>{u.address}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-gray-700 font-baloo mb-2">
                    <Clock className="w-4 h-4 text-bf-yellow-deep shrink-0 mt-0.5" />
                    <span>{u.hours}</span>
                  </div>

                  <div className="flex items-start gap-2 text-xs text-gray-700 font-baloo mb-4">
                    <Phone className="w-4 h-4 text-bf-black shrink-0 mt-0.5" />
                    <span>{u.phone}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-dashed border-gray-200">
                  {/* Separate Page Link */}
                  <button
                    onClick={() => {
                      onNavigate(u.view);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full flex items-center justify-center gap-1 bg-bf-cream hover:bg-bf-yellow text-bf-black text-[11px] font-baloo-caps font-black py-2 rounded-xl border-2 border-bf-black shadow-[2px_2px_0_#1A1A1A] hover:shadow-none hover:translate-x-[1px] hover:translate-y-[1px] transition-all cursor-pointer"
                  >
                    <span>VER PÁGINA COMPLETA</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5px]" />
                  </button>

                  <a 
                    href={u.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1 bg-bf-black hover:bg-gray-900 text-bf-white text-[11px] font-baloo-caps font-black py-2 rounded-xl border-2 border-bf-black transition-all text-center cursor-pointer"
                  >
                    <span>COMO CHEGAR (MAPS)</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Core Contact Info Card */}
          <div className="bg-bf-yellow border-3 border-bf-black rounded-[28px] p-6 shadow-[4px_4px_0_#1A1A1A] mt-2">
            <h3 className="font-display text-xl text-bf-black uppercase mb-3">Atendimento Centralizado</h3>
            <p className="text-xs md:text-sm font-baloo text-bf-black font-medium mb-4">
              Deseja realizar reservas de mesas, pedir delivery ou falar com a administração geral? Use nosso canal unificado:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex items-center gap-3 bg-bf-white border-2 border-bf-black rounded-2xl px-4 py-3 w-full sm:w-auto">
                <Phone className="w-5 h-5 text-bf-red" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-baloo leading-none uppercase">WhatsApp</span>
                  <span className="font-bold text-sm text-bf-black leading-tight">(47) 99215-5989</span>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-bf-white border-2 border-bf-black rounded-2xl px-4 py-3 w-full sm:w-auto">
                <Mail className="w-5 h-5 text-bf-yellow-deep" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-baloo leading-none uppercase">E-mail</span>
                  <span className="font-bold text-sm text-bf-black leading-tight">contato@burgerfilms.com.br</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Message form (lg:col-span-5) */}
        <div className="lg:col-span-5">
          <div className="bg-bf-white border-3 border-bf-black rounded-[32px] p-6 md:p-8 shadow-[6px_6px_0_#1A1A1A] relative overflow-hidden">
            <h3 className="font-display text-xl md:text-2xl text-bf-black uppercase mb-1">
              Envie uma Mensagem
            </h3>
            <p className="text-xs text-gray-500 font-baloo mb-6">
              Nossa equipe lerá seu roteiro e responderá em tempo recorde!
            </p>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-baloo-caps font-black text-bf-black uppercase mb-1">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Tony Stark"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-bf-cream text-bf-black font-baloo py-2.5 px-4 rounded-xl border-2 border-bf-black focus:outline-none placeholder:text-gray-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-baloo-caps font-black text-bf-black uppercase mb-1">
                      Seu E-mail *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: tony@starkindustries.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-bf-cream text-bf-black font-baloo py-2.5 px-4 rounded-xl border-2 border-bf-black focus:outline-none placeholder:text-gray-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-baloo-caps font-black text-bf-black uppercase mb-1">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: (47) 99999-9999"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-bf-cream text-bf-black font-baloo py-2.5 px-4 rounded-xl border-2 border-bf-black focus:outline-none placeholder:text-gray-400 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-baloo-caps font-black text-bf-black uppercase mb-1">
                      Mensagem *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Conte para nós sobre seu evento, dê sugestões de lanches ou envie suas dúvidas..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-bf-cream text-bf-black font-baloo py-2.5 px-4 rounded-xl border-2 border-bf-black focus:outline-none placeholder:text-gray-400 text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-bf-red hover:bg-bf-yellow text-bf-white hover:text-bf-black font-baloo-caps text-sm font-black py-3.5 rounded-full border-2 border-bf-black shadow-[4px_4px_0_#1A1A1A] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer focus:outline-none"
                  >
                    <Send className="w-4 h-4" />
                    <span>ENVIAR ROTEIRO</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center border-2 border-green-600 mb-4 animate-bounce">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h4 className="font-display text-xl text-green-600 uppercase mb-2">Mensagem Enviada!</h4>
                  <p className="text-xs font-baloo text-gray-600 max-w-xs leading-relaxed">
                    Sua mensagem foi enviada para o nosso painel de controle! Retornaremos o seu contato em breve no e-mail informado. Muito obrigado por fazer parte do elenco!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Instagram Feed Integration */}
      <div className="mb-12">
        <InstagramFeed />
      </div>

    </motion.div>
  );
}
