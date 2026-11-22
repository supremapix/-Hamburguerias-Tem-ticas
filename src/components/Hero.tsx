import { ArrowRight, Clapperboard, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#18110d] px-5 pb-16 pt-32 text-bf-white sm:pb-20 md:pt-40" aria-labelledby="hero-title">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,#614013_0%,transparent_56%)]" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-bf-yellow/65 px-4 py-2 text-xs font-black uppercase tracking-widest text-bf-yellow">
            <Clapperboard size={16} aria-hidden="true" /> Cinema, burgers e Penha
          </p>
          <h1 id="hero-title" className="max-w-[26ch] font-display text-4xl font-black uppercase leading-[1.03] sm:text-5xl xl:text-6xl">
            Hamburgueria temática em <span className="text-bf-yellow">Penha, SC</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">Burgers inspirados no cinema, combos para compartilhar e duas unidades em Armação. Veja o cardápio ou confira onde parar depois do Beto Carrero World.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-bf-yellow px-5 py-3 text-base font-black text-bf-black hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Ver cardápio <ArrowRight size={19} aria-hidden="true" />
            </a>
            <a href="/guia-beto-carrero" className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-bf-yellow px-5 py-3 text-base font-black text-bf-yellow hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              Planejar a visita <MapPin size={19} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="relative mx-auto flex w-full max-w-[440px] items-center gap-5 rounded-[28px] border-2 border-bf-yellow/80 bg-white/5 p-5 sm:p-7">
          <img src="/android-chrome-512x512.png" width="112" height="112" alt="" decoding="async" className="size-20 shrink-0 rounded-2xl sm:size-28" />
          <div>
            <p className="text-xs font-black uppercase tracking-widest text-bf-yellow">Burger Films</p>
            <p className="mt-1 font-display text-2xl leading-tight">Seu lanche depois do parque</p>
            <p className="mt-1 text-sm text-white/80">Armação • Penha • Santa Catarina</p>
          </div>
        </div>
      </div>
    </section>
  );
}
