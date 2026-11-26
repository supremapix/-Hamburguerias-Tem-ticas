import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { formatMenuPrice, KARATE_BURGERS, KARATE_COVER, KARATE_ID, KARATE_PARTNERS } from '../karateBurgers';

const slides = [
  { image: KARATE_COVER, title: 'Karatê Burgers', caption: KARATE_PARTNERS, price: undefined },
  ...KARATE_BURGERS.map(item => ({ image: item.image, title: item.name, caption: 'Linha especial Karatê Burgers', price: item.price })),
];
const control = 'flex size-11 shrink-0 items-center justify-center rounded-full border border-white/35 text-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bf-yellow';

export default function KarateHeroSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [inFocus, setInFocus] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPlaying(!media.matches);
    const stopIfReduced = (event: MediaQueryListEvent) => { if (event.matches) setPlaying(false); };
    media.addEventListener('change', stopIfReduced);
    return () => media.removeEventListener('change', stopIfReduced);
  }, []);

  useEffect(() => {
    if (!playing || hovering || inFocus) return;
    const timer = window.setTimeout(() => {
      if (!document.hidden) setIndex((current) => (current + 1) % slides.length);
    }, 7400);
    const resumeWhenVisible = () => { if (!document.hidden) setIndex((current) => (current + 1) % slides.length); };
    document.addEventListener('visibilitychange', resumeWhenVisible);
    return () => { window.clearTimeout(timer); document.removeEventListener('visibilitychange', resumeWhenVisible); };
  }, [index, playing, hovering, inFocus]);

  const select = (next: number) => {
    setPlaying(false);
    setIndex((next + slides.length) % slides.length);
  };

  const slide = slides[index];
  return (
    <div role="region" aria-roledescription="carrossel" aria-label="Novidades do cardápio" className="relative mx-auto w-full min-w-0 max-w-[470px] rounded-[28px] border-2 border-bf-yellow/80 bg-[#261610] p-3 shadow-xl sm:p-4"
      onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}
      onFocus={() => setInFocus(true)} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInFocus(false); }}>
      <div className="mb-3 flex justify-between gap-3 px-2 text-xs font-black uppercase tracking-wider text-bf-yellow">
        <span>Novidade no cardápio</span><span aria-hidden="true">{index + 1} / {slides.length}</span>
      </div>
      <div aria-live={playing ? 'off' : 'polite'} aria-atomic="true">
        <img src={slide.image} width="640" height="420" alt="" decoding="async" fetchPriority={index === 0 ? 'high' : 'auto'} className="aspect-[32/21] w-full rounded-2xl bg-[#100b09] object-contain" />
        <div className="min-h-[106px] px-2 pt-3">
          <p className="text-xs font-bold text-white/85">{slide.caption}</p>
          <p className="mt-0.5 font-display text-xl font-black text-white sm:text-2xl">{slide.title}</p>
          {slide.price !== undefined && <p className="mt-1 font-bold text-bf-yellow">{formatMenuPrice(slide.price)}</p>}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 px-1 pb-1">
        <button type="button" className={control} aria-label={playing ? 'Pausar rotação' : 'Iniciar rotação'} onClick={() => setPlaying(!playing)}>{playing ? <Pause size={18} /> : <Play size={18} />}</button>
        <button type="button" className={control} aria-label="Destaque anterior" onClick={() => select(index - 1)}><ChevronLeft size={21} /></button>
        <button type="button" className={control} aria-label="Próximo destaque" onClick={() => select(index + 1)}><ChevronRight size={21} /></button>
        <a href={'#' + KARATE_ID} className="ml-auto inline-flex min-h-11 items-center gap-1 rounded-xl bg-bf-yellow px-3 text-sm font-black text-bf-black hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Ver os 4 burgers <ArrowRight size={17} aria-hidden="true" /></a>
      </div>
    </div>
  );
}
