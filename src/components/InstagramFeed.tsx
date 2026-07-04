import { motion } from 'motion/react';
import { Instagram, ArrowRight, ShieldCheck } from 'lucide-react';

export default function InstagramFeed() {
  return (
    <section id="instagram-feed" className="relative py-16 px-4 bg-gray-50/50 border-t border-b border-gray-200 overflow-hidden z-10">
      
      {/* Soft Glow Ambient Lights (Instagram Color Scheme) */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-tr from-pink-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gradient-to-bl from-yellow-500/10 via-red-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 flex flex-col items-center select-none"
        >
          {/* Instagram Official Gradient Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 text-white font-mono text-[11px] font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Instagram className="w-3.5 h-3.5" />
            <span>Social Real @burgerfilms_</span>
          </div>

          {/* Main Headline */}
          <h3 className="text-3xl md:text-5xl font-black uppercase text-gray-950 leading-tight">
            Siga-nos no Instagram • <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 bg-clip-text text-transparent hover:brightness-110 transition-all">@burgerfilms_</span>
          </h3>

          {/* Description Paragraph */}
          <p className="mt-3 text-gray-500 font-medium text-sm md:text-base max-w-xl">
            Acompanhe nossos bastidores, lançamentos de lanches inéditos, sorteios imperdíveis e toda a diversão do rodízio em nossos stories diários!
          </p>
        </motion.div>

        {/* Embedded Live Feed / Embed Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full max-w-lg bg-white rounded-3xl p-3 border border-gray-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:scale-[1.01] transition-transform duration-300 mb-10 overflow-hidden"
        >
          {/* Responsive aspect ratio container for the official embed */}
          <div className="relative w-full h-[380px] md:h-[440px] rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 flex items-center justify-center">
            <iframe
              src="https://www.instagram.com/burgerfilms_/embed"
              title="Instagram Feed Embed"
              className="absolute inset-0 w-full h-full border-0 rounded-2xl"
              allowFullScreen
              scrolling="no"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Action Button & Trust Seal Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full"
        >
          {/* Main Gradient Follow CTA Button */}
          <a
            href="https://www.instagram.com/burgerfilms_"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 hover:from-pink-500 hover:via-purple-500 hover:to-orange-400 text-white font-baloo-caps text-sm font-black tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Instagram className="w-5 h-5 shrink-0" />
            <span>Seguir no Instagram Oficial</span>
            <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Verification Shield Seal */}
          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-gray-100 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
            <span className="font-mono text-[11px] font-bold text-gray-600 uppercase tracking-wide">
              Comunidade 100% de Cinema em Penha-SC
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
