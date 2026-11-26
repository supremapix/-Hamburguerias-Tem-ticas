import { Clapperboard, MessageCircle } from 'lucide-react';
import { formatMenuPrice, KARATE_BURGERS, KARATE_ID, KARATE_INTRO, KARATE_NOTE, KARATE_PARTNERS, karateWhatsApp } from '../karateBurgers';

export default function KarateMenu() {
  return (
    <section id={KARATE_ID} aria-labelledby="karate-menu-title" className="mb-12 scroll-mt-28 rounded-[30px] border-3 border-bf-black bg-bf-cream p-4 shadow-[5px_5px_0px_#1A1A1A] sm:p-7">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border-2 border-bf-black bg-bf-yellow px-3 py-1.5 text-xs font-black uppercase tracking-wider text-bf-black"><Clapperboard className="size-4" aria-hidden="true" /> Novidade no cardápio</p>
      <h3 id="karate-menu-title" className="font-display text-3xl font-black uppercase text-bf-black sm:text-4xl">Karatê Burgers</h3>
      <p className="mt-2 max-w-2xl font-baloo font-semibold text-zinc-800">{KARATE_INTRO}</p>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {KARATE_BURGERS.map(item => (
          <li key={item.id} className="flex flex-col overflow-hidden rounded-[22px] border-2 border-bf-black bg-bf-white">
            <img src={item.image} width="640" height="420" alt="" loading="lazy" decoding="async" className="aspect-[32/21] w-full bg-[#120b08] object-contain" />
            <div className="flex flex-1 flex-col p-4">
              <h4 className="font-baloo-caps text-lg font-black leading-tight text-bf-black">{item.name}</h4>
              <p className="mb-3 mt-1.5 font-baloo text-sm font-medium leading-relaxed text-zinc-800">{item.description}</p>
              <p className="mt-auto font-display text-lg font-bold text-bf-black">{formatMenuPrice(item.price)}</p>
              <a href={karateWhatsApp(item.name)} aria-label={'Consultar ' + item.name + ' no WhatsApp'} className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 border-bf-black bg-bf-yellow px-2 text-center text-sm font-black text-bf-black hover:bg-bf-cream focus-visible:outline-2 focus-visible:outline-offset-2">
                <MessageCircle size={16} aria-hidden="true" /> Consultar no WhatsApp
              </a>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm font-semibold text-zinc-700">{KARATE_PARTNERS}. {KARATE_NOTE}</p>
    </section>
  );
}
