import { Heart } from 'lucide-react';

export function SupremaCredit() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-center items-center bg-bf-cream">
      <div className="bg-bf-black border-3 border-bf-black rounded-full px-6 py-3 shadow-[4px_4px_0_#FFBE1A] flex items-center justify-center transition-all duration-300 hover:shadow-[6px_6px_0_#FFBE1A] hover:translate-x-[-2px] hover:translate-y-[-2px]">
        <p className="text-bf-cream transition-colors duration-200 text-sm sm:text-base font-bold flex flex-wrap items-center justify-center gap-2 font-baloo">
          <span className="opacity-90">Desenvolvido com</span> 
          
          {/* Coração pulsante com efeito de sombra */}
          <Heart 
            size={14} 
            className="text-bf-red fill-bf-red animate-[pulse_1.5s_infinite] shrink-0 filter drop-shadow-[0_0_3px_rgba(230,46,46,0.7)]" 
          /> 
          
          <span className="opacity-90">por</span>
          
          {/* Link para o site da Suprema */}
          <a 
            id="developer-suprema-link"
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-bf-yellow hover:text-bf-yellow-deep transition-all font-black inline-flex items-center gap-2 cursor-pointer border-b-2 border-dashed border-bf-yellow/50 hover:border-bf-yellow-deep font-baloo-caps"
          >
            Suprema Sites Express
            
            {/* Logotipo oficial com efeito de iluminação */}
            <img 
              src="https://img.supremamidia.com/suprema-img.png" 
              alt="Suprema" 
              className="h-[18px] w-auto inline select-none shrink-0 filter drop-shadow-[0_0_2px_rgba(255,190,26,0.5)] transition-transform duration-300 hover:scale-110" 
              referrerPolicy="no-referrer"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
