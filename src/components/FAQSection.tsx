import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, MessageSquare, Film } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "Onde fica a Burger Films em Penha-SC?",
    answer: "A Burger Films possui duas unidades em Penha-SC: a Unidade Alfredo Brunetti, localizada na Av. Alfredo Brunetti, 631 - Armação (perto do Beto Carrero World), e a Unidade Armação, na Av. Eugênio Krause, 3045."
  },
  {
    question: "Qual o horário de funcionamento da Burger Films?",
    answer: "A Unidade Alfredo Brunetti abre de Segunda a Domingo, das 18:00 às 23:30. A Unidade Armação (Av. Eugênio Krause) funciona de Quinta a Terça (fechada às quartas-feiras), das 18:00 às 23:30."
  },
  {
    question: "A Burger Films faz delivery em Penha?",
    answer: "Sim! Fazemos entrega rápida de nossos hambúrgueres artesanais de cinema em Penha e região. Você pode fazer o seu pedido diretamente pelo nosso WhatsApp oficial no +55 47 99215-5989 ou clicar no botão de pedido em nosso cardápio!"
  },
  {
    question: "Como funciona o rodízio de mini burgers?",
    answer: "Nosso famoso rodízio de mini burgers acontece de Domingo a Quinta-feira (exceto às quartas-feiras na unidade Eugênio Krause). É a oportunidade ideal de assistir ao show de sabor e experimentar nossos variados burgers de cinema em formato mini!"
  },
  {
    question: "A Burger Films fica perto do Beto Carrero World?",
    answer: "Sim! A nossa unidade principal na Av. Alfredo Brunetti, 631 fica super próxima ao parque Beto Carrero World, sendo a parada perfeita e mais saborosa de Penha-SC após um dia inteiro de aventuras e diversão no parque."
  },
  {
    question: "Qual o telefone/WhatsApp da Burger Films?",
    answer: "O nosso telefone e WhatsApp oficial para tirar dúvidas, fazer reservas ou realizar pedidos é o +55 47 99215-5989."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-bf-cream border-t-3 border-b-3 border-bf-black relative z-10">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 select-none">
          <span className="text-bf-red font-baloo-caps text-xs md:text-sm font-extrabold tracking-widest bg-bf-white border-2 border-bf-black px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3">
            <Film className="w-3.5 h-3.5 stroke-[2.5px]" />
            <span>SAC CINEMATOGRÁFICO</span>
          </span>
          <h2 className="text-4xl md:text-6xl uppercase bubble-title-outline text-bf-yellow">
            DÚVIDAS FREQUENTES
          </h2>
          <p className="text-gray-500 font-baloo text-sm md:text-base max-w-xl mx-auto mt-2 font-medium">
            Tem alguma pergunta sobre as nossas unidades, rodízio ou delivery? Confira as respostas abaixo!
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-bf-white rounded-[24px] border-3 border-bf-black shadow-[4px_4px_0px_0px_#1A1A1A] overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left p-6 md:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none select-none group"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="w-6 h-6 text-bf-red shrink-0" />
                    <h3 className="font-baloo-caps text-base md:text-lg font-black text-bf-black tracking-wide leading-tight group-hover:text-bf-yellow transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-8 h-8 rounded-full bg-bf-cream flex items-center justify-center border-2 border-bf-black shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 text-bf-black stroke-[3px]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-7 md:px-7 md:pb-8 pt-0 border-t-2 border-dashed border-gray-100">
                        <p className="text-gray-600 font-baloo text-sm md:text-base leading-relaxed font-semibold">
                          {item.answer}
                        </p>
                        
                        {/* Call to Action Helper Inside */}
                        {item.question.includes("WhatsApp") || item.question.includes("delivery") ? (
                          <div className="mt-4 flex">
                            <a
                              href="https://wa.me/5547992155989"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-bf-black hover:bg-bf-yellow text-bf-yellow hover:text-bf-black font-baloo-caps text-xs px-4 py-2.5 rounded-full border-2 border-bf-black transition-all"
                            >
                              <MessageSquare className="w-3.5 h-3.5 fill-current" />
                              <span>Fale Conosco no WhatsApp</span>
                            </a>
                          </div>
                        ) : null}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
