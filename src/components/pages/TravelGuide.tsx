import { ArrowRight, MapPin } from 'lucide-react';
import { NEIGHBORHOOD_VIDEO_NOTES, PARK_DIRECTIONS, PARK_LODGING, TRAVEL_GUIDES, TRAVEL_HUB, guidePath, type TravelGuide } from '../../travelGuides';
import SupremaShort from '../SupremaShort';

import { NEIGHBORHOODS } from '../../seoData';

const groups = [
  {group: 'penha', title: 'Dentro de Penha'},
  {group: 'regiao', title: 'Aeroporto e cidades da região'},
  {group: 'viagem', title: 'Viagem de outras capitais'},
] as const;

export default function TravelGuidePage({ guide }: {guide?: TravelGuide}) {
  return (
    <div className="mx-auto max-w-5xl px-5 pb-20 pt-32 text-bf-black md:px-8">
      <nav aria-label="Navegação do guia" className="mb-5 flex flex-wrap gap-2 text-sm font-semibold">
        <a className="underline" href="/">Início</a><span aria-hidden="true">/</span>
        {guide ? <a className="underline" href={`/${TRAVEL_HUB}`}>Guia Beto Carrero</a> : <span aria-current="page">Guia Beto Carrero</span>}
        {guide && <><span aria-hidden="true">/</span><span aria-current="page">{guide.origin}</span></>}
      </nav>
      <header className="rounded-3xl border-2 border-bf-black bg-bf-yellow p-6 shadow-[5px_5px_0_#1A1A1A] md:p-9">
        <p className="mb-2 flex items-center gap-2 text-xs font-black uppercase tracking-widest"><MapPin size={16} aria-hidden="true" /> Penha, Santa Catarina</p>
        <h1 className="font-display text-4xl leading-tight md:text-5xl">{guide?.title ?? 'Beto Carrero e Burger Films: monte seu roteiro em Penha'}</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed md:text-lg">{guide?.description ?? 'Escolha o roteiro a partir da sua cidade, compare os dois endereços da Burger Films e veja onde fica a unidade da Av. Eugênio Krause, na Armação.'}</p>
      </header>
      <div className="mt-8"><SupremaShort note="O vídeo apresenta a unidade da Av. Eugênio Krause, 3045, na Armação, em Penha. A Burger Films não fica dentro do parque." /></div>
      {guide ? (
        <div className="mt-9 space-y-6">
          {guide.sections.map(([title,text]) => <section key={title} className="rounded-2xl border-2 border-bf-black/25 bg-bf-white p-5 md:p-7"><h2 className="font-display text-2xl">{title}</h2><p className="mt-2 text-base leading-relaxed">{text}</p></section>)}
        </div>
      ) : (
        <div className="mt-9 space-y-8">
          {groups.map(group => <section key={group.group} aria-labelledby={group.group}>
            <h2 id={group.group} className="mb-3 font-display text-2xl">{group.title}</h2>
            <ul className="grid gap-3 sm:grid-cols-2">{TRAVEL_GUIDES.filter(g=>g.group===group.group).map(g=><li key={g.slug}>
              <a className="flex min-h-16 items-center justify-between gap-2 rounded-xl border-2 border-bf-black bg-bf-white p-4 font-bold hover:bg-bf-yellow focus-visible:outline-2 focus-visible:outline-offset-4" href={`/${guidePath(g)}`}>{g.origin}<ArrowRight size={18} aria-hidden="true" /></a>
            </li>)}{group.group==='penha' && NEIGHBORHOODS.filter(n=>NEIGHBORHOOD_VIDEO_NOTES[n.slug]).map(n => <li key={n.slug}><a className="flex min-h-16 items-center justify-between gap-2 rounded-xl border-2 border-bf-black bg-bf-white p-4 font-bold hover:bg-bf-yellow focus-visible:outline-2 focus-visible:outline-offset-4" href={`/${n.slug}`}>{n.name}<ArrowRight size={18} aria-hidden="true" /></a></li>)}</ul>
          </section>)}
        </div>
      )}
      <section className="mt-10 border-t-2 border-bf-black/25 pt-6">
        <h2 className="font-display text-2xl">Confira antes de sair</h2>
        <ul className="mt-2 space-y-2 text-base leading-relaxed">
          <li><a className="font-bold underline" href="/unidade-eugenio">Unidade do vídeo: Av. Eugênio Krause, 3045</a></li>
          <li><a className="font-bold underline" href="/unidade-alfredo">Outra unidade: Av. Alfredo Brunetti, 631</a></li>
          <li><a className="font-bold underline" href="/#menu">Cardápio da Burger Films</a></li>
          <li><a className="underline" href={PARK_DIRECTIONS}>Como chegar ao parque (guia oficial Beto Carrero)</a></li>
          <li><a className="underline" href={PARK_LODGING}>Onde se hospedar na região (guia oficial Beto Carrero)</a></li>
          {guide && <li><a className="font-bold underline" href={`/${TRAVEL_HUB}`}>Ver roteiros de outras cidades</a></li>}
        </ul>
      </section>
    </div>
  );
}
