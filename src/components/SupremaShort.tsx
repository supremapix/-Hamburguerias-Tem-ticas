import { useRef, useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { SHORT_ID, SHORT_URL } from '../travelGuides';

export default function SupremaShort({ note }: { note: string }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const player = useRef<HTMLIFrameElement>(null);
  return (
    <section id="video-burger-films" aria-labelledby="short-title" className="grid gap-5 rounded-3xl border-2 border-bf-black bg-bf-cream p-5 shadow-[4px_4px_0_#1A1A1A] md:grid-cols-[1fr_auto] md:items-center md:p-7">
      <div>
        <p className="mb-1 text-xs font-black uppercase tracking-widest text-bf-black">Tour em vídeo • Armação</p>
        <h2 id="short-title" className="font-display text-2xl leading-tight text-bf-black">Conheça a unidade da Av. Eugênio Krause</h2>
        <p className="mt-3 text-base leading-relaxed text-bf-black">{note}</p>
        <p className="mt-3 text-sm text-bf-black">Vídeo de Suprema Vídeos. O reprodutor só é carregado ao clicar.</p>
        <a href={SHORT_URL} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 font-bold text-bf-black underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">
          Abrir no YouTube <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
      {showPlayer ? (
        <iframe
          ref={player}
          onLoad={() => player.current?.focus()}
          className="aspect-[9/16] h-auto w-full max-w-[18rem] justify-self-center rounded-xl border-0 bg-bf-black"
          width="288"
          height="512"
          title="Burger Films em Armação, Penha — vídeo da Suprema Vídeos"
          src={`https://www.youtube-nocookie.com/embed/${SHORT_ID}?autoplay=1&playsinline=1`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button type="button" onClick={() => setShowPlayer(true)}
          className="flex min-h-24 w-full max-w-[18rem] items-center justify-center gap-3 justify-self-center rounded-2xl border-2 border-bf-black bg-bf-yellow px-5 font-black text-bf-black hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-4 md:min-w-52">
          <Play size={24} aria-hidden="true" /> Reproduzir vídeo
        </button>
      )}
    </section>
  );
}
