import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, ArrowLeft, Calendar, User, Clock, ChevronRight, Search, Heart, Share2, Sparkles, Star, Trophy, Utensils, AlertCircle } from 'lucide-react';
import { PROMOCOES_PASSADAS_COPA, PastPromotionBurger } from '../../data';

interface PageProps {
  onNavigate: (view: any) => void;
  key?: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Bastidores' | 'Novidades' | 'Eventos' | 'Dicas' | 'Promoções Passadas';
  excerpt: string;
  content: string[];
  image: string;
  date: string;
  author: string;
  readTime: string;
  isPastPromoCollection?: boolean;
  pastPromosList?: PastPromotionBurger[];
}

// Single unified past promotion post displaying all 8 historic Copa do Mundo burgers
const SINGLE_PAST_PROMO_POST: BlogPost = {
  id: 'promocoes-passadas-copa',
  title: 'Edição Especial Copa do Mundo: Recorde os 8 Hambúrgueres Temáticos Históricos',
  slug: 'edicao-especial-copa-do-mundo-hamburgueres-historicos',
  category: 'Promoções Passadas',
  excerpt: 'Relembre a escalação histórica dos 8 hambúrgueres artesanais inspirados nas grandes seleções do futebol mundial (Brasil, Alemanha, Argentina e mais) que marcaram época na Burger Films!',
  image: 'https://burgerfilms.chefware.com.br/128/600/0/brasil-burguer-hexa-neles.jpg',
  date: 'Edição Especial Limitada (Histórico)',
  author: 'Arquivo Histórico Burger Films',
  readTime: '4 min de leitura',
  isPastPromoCollection: true,
  pastPromosList: PROMOCOES_PASSADAS_COPA,
  content: [
    'Durante as grandes celebrações da Copa do Mundo, a Burger Films preparou uma convocação de gala para o público de Penha-SC e visitantes do Beto Carrero World: a nossa aclamada Linha Temática Internacional de Hambúrgueres Artesanais.',
    'Cada receita foi cuidadosamente roteirizada para homenagear as maiores seleções e culturas futebolísticas do planeta — unindo ingredientes nobres, pães artesanais coloridos (vermelho, verde, preto e azul) e combinações surpreendentes de queijos, molhos e carnes nobres grelhadas na chapa em alta temperatura.',
    'Confira a seguir a ficha técnica completa, ingredientes e curiosidades dos 8 hambúrgueres que integraram essa edição especial e histórica:'
  ]
};

const ORIGINAL_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Os Segredos por Trás do Nosso Blend de Cinema de 150g',
    slug: 'segredos-do-nosso-blend',
    category: 'Bastidores',
    excerpt: 'Descubra como misturamos cortes selecionados de carne para atingir o ponto perfeito de suculência e sabor dignos de Oscar!',
    image: 'https://img.burgerfilms.com.br/segredos-por-ras-blend-de-cinema.webp',
    date: '02 de Julho, 2026',
    author: 'Chef Diretor de Elenco',
    readTime: '5 min de leitura',
    content: [
      'Na Burger Films, acreditamos que fazer um hambúrguer artesanal é como dirigir um filme de sucesso: cada ingrediente é um personagem principal que precisa atuar em perfeita harmonia.',
      'O coração da nossa produção é o Blend de Cinema de 150g. Ele não é feito por acaso; foram meses de testes, "audições" de cortes e ensaios na grelha para atingir o equilíbrio absoluto de gordura, maciez e suculência.',
      'Trabalhamos exclusivamente com carne fresca e selecionada, moída diariamente em nossas cozinhas. O blend combina a riqueza do peito com a maciez da fraldinha, garantindo que cada mordida exploda em sabor na boca.',
      'A nossa grelha trabalha em altíssima temperatura para criar aquela crosta caramelizada perfeita (a famosa reação de Maillard) que sela os sucos dentro do burger. O resultado? Um espetáculo gastronômico digno da estatueta dourada!'
    ]
  },
  {
    id: '2',
    title: 'Rodízio de Mini-Burgers: Como Funciona Essa Sessão Dupla!',
    slug: 'rodizio-de-mini-burgers',
    category: 'Novidades',
    excerpt: 'Saiba tudo sobre o nosso famoso rodízio de mini-hambúrgueres perto do Beto Carrero World. Todas as estrelas do cardápio em tamanho mini!',
    image: 'https://img.burgerfilms.com.br/rodizio-mini-hamburguer.webp',
    date: '28 de Junho, 2026',
    author: 'Equipe de Production',
    readTime: '4 min de leitura',
    content: [
      'Se você é daqueles que fica indeciso diante de um cardápio repleto de opções incríveis, a Burger Films criou o roteiro ideal para você: a nossa famosa Sessão Dupla de Rodízio de Mini-Burgers!',
      'Localizado na nossa Unidade 1 (Alfredo Brunetti), ao lado do Beto Carrero World, o rodízio permite que você experimente versões mini das nossas maiores produções, como o Poderoso Chefão, Shrek, Jack Sparrow e muitos outros.',
      'E não para por aí! O rodízio acompanha também petiscos irresistíveis (como nossas batatas rústicas e anéis de cebola) e sobremesas que completam essa trilogia de sabor.',
      'É a parada obrigatória perfeita para recarregar as energias após um dia inteiro de aventuras e adrenalina no parque temático. Reúna a família e venha viver essa maratona deliciosa!'
    ]
  },
  {
    id: '3',
    title: 'Hambúrguer de Cinema no Centro da Armação: A Unidade 2',
    slug: 'hamburguer-centro-da-armacao',
    category: 'Eventos',
    excerpt: 'Conheça o charme aconchegante da nossa segunda unidade na Avenida Eugênio Krause, o ponto de encontro perfeito no centro histórico.',
    image: 'https://img.burgerfilms.com.br/hambueguer-de-cinema-unidade-2.webp',
    date: '15 de Junho, 2026',
    author: 'Gerente de Locação',
    readTime: '3 min de leitura',
    content: [
      'Após o estrondoso sucesso da nossa matriz, inauguramos uma nova sala de exibição: a nossa Unidade 2, situada na Avenida Eugênio Krause, bem no coração do Centro da Armação em Penha - SC.',
      'Esta unidade foi projetada para oferecer uma atmosfera mais intimista e aconchegante, perfeita para casais, amigos e encontros descontraídos de fim de noite.',
      'Toda a decoração respira a sétima arte, com pôsteres clássicos, iluminação dramática de estúdio de cinema e, claro, o mesmo cardápio lendário de hambúrgueres artesanais, pizzas e porções que conquistou a cidade.',
      'Se você procura um ambiente com a brisa da Armação, boa música e comida espetacular, a nossa Unidade 2 é o cenário perfeito para a sua noite de sexta-feira ou sábado.'
    ]
  },
  {
    id: '4',
    title: 'Guia Definitivo: Como Garantir Seu Delivery Piping Hot!',
    slug: 'guia-delivery-quente',
    category: 'Dicas',
    excerpt: 'Nossas cozinhas e motoboys usam embalagens térmicas exclusivas de cinema para entregar seu lanche sempre quentinho e crocante.',
    image: 'https://img.burgerfilms.com.br/piping-hot.webp',
    date: '10 de Junho, 2026',
    author: 'Diretor de Logística',
    readTime: '3 min de leitura',
    content: [
      'Pedir um lanche em casa e recebê-lo murcho ou frio é o pesadelo de qualquer amante de hambúrguer. Na Burger Films, criamos uma logística especial para garantir que seu pedido chegue como se tivesse acabado de sair da chapa.',
      'Em primeiro lugar, nossas embalagens foram desenhadas para manter o calor sem reter o vapor em excesso, o que evita que o pão fique encharcado e a batata perca a crocância.',
      'Além disso, dividimos a cidade de Penha por zonas de atendimento prioritárias para cada unidade, garantindo rotas curtas e rápidas efetuadas pelos nossos motoboys parceiros.',
      'Seja na Praia Grande, no Centro, no Gravatá ou na Armação, nosso delivery é rápido e preciso. Acesse nosso portal online, escolha seus lanches e viva essa sessão no sofá da sua sala!'
    ]
  }
];

const BLOG_POSTS: BlogPost[] = [SINGLE_PAST_PROMO_POST, ...ORIGINAL_BLOG_POSTS];

export default function Blog({ onNavigate }: PageProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [likes, setLikes] = useState<Record<string, number>>({
    '1': 48,
    '2': 75,
    '3': 32,
    '4': 29,
    'promocoes-passadas-copa': 168
  });
  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});

  const categories = ['Todos', 'Promoções Passadas', 'Novidades', 'Bastidores', 'Eventos', 'Dicas'];

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesCategory = activeCategory === 'Todos' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLike = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (hasLiked[postId]) {
      setLikes(prev => ({ ...prev, [postId]: prev[postId] - 1 }));
      setHasLiked(prev => ({ ...prev, [postId]: false }));
    } else {
      setLikes(prev => ({ ...prev, [postId]: prev[postId] + 1 }));
      setHasLiked(prev => ({ ...prev, [postId]: true }));
    }
  };

  const handleShare = (post: BlogPost, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/blog?post=${post.slug}`);
      alert('Link do artigo copiado com sucesso! Compartilhe com os amigos 🎬');
    }
  };

  return (
    <div id="blog-page" className="pt-28 pb-16 px-4 md:px-6 max-w-7xl mx-auto min-h-screen">
      <AnimatePresence mode="wait">
        {!selectedPost ? (
          <motion.div
            key="list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-baloo-caps text-gray-500 mb-6 print:hidden">
              <button onClick={() => onNavigate('home')} className="hover:text-bf-red transition-colors cursor-pointer">HOME</button>
              <ChevronRight className="w-3 h-3" />
              <span className="text-bf-black font-extrabold uppercase">BLOG CINEMATOGRÁFICO</span>
            </div>

            {/* Header Section */}
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-1.5 bg-bf-red/10 text-bf-red px-3.5 py-1.5 rounded-full text-xs font-baloo-caps font-black mb-3">
                <Film className="w-3.5 h-3.5 animate-spin-slow" />
                <span>BASTIDORES & NOVIDADES</span>
              </span>
              <h1 className="text-4xl md:text-6xl uppercase bubble-title-outline text-bf-yellow mb-4">
                BLOG FILMS
              </h1>
              <p className="text-gray-600 font-baloo max-w-2xl mx-auto text-sm md:text-base font-medium">
                Sua poltrona preferida na primeira fileira dos bastidores, curiosidades e novidades quentinhas da melhor hamburgueria de Penha-SC!
              </p>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-bf-white border-3 border-bf-black rounded-[24px] p-4 mb-10 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.95)]">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full font-baloo-caps text-xs font-extrabold transition-all border-2 cursor-pointer focus:outline-none ${
                      activeCategory === cat 
                        ? 'bg-bf-yellow text-bf-black border-bf-black shadow-[2px_2px_0_#1a1a1a]' 
                        : 'bg-transparent text-gray-500 border-transparent hover:border-bf-black hover:text-bf-black'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Pesquisar artigos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-bf-cream/50 border-2 border-bf-black rounded-full px-4 py-2 pl-10 font-baloo text-xs font-medium focus:outline-none focus:bg-bf-cream transition-colors placeholder:text-gray-400"
                />
                <Search className="w-4 h-4 text-bf-black absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Articles Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    onClick={() => {
                      setSelectedPost(post);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group bg-bf-white border-3 border-bf-black rounded-[32px] overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,0.95)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.95)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Thumbnail Container */}
                      <div className="relative h-48 md:h-56 overflow-hidden border-b-3 border-bf-black">
                        <img
                          src={post.image}
                          alt={post.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className={`absolute top-4 left-4 border-2 border-bf-black shadow-[2px_2px_0_#1a1a1a] font-baloo-caps font-black text-[10px] px-3.5 py-1.5 rounded-full uppercase tracking-wider ${
                          post.category === 'Promoções Passadas' || post.isPastPromoCollection
                            ? 'bg-bf-yellow text-bf-black'
                            : 'bg-bf-red text-bf-white'
                        }`}>
                          {post.category === 'Promoções Passadas' || post.isPastPromoCollection ? '🏆 Promoções Passadas' : `🎬 ${post.category}`}
                        </span>
                      </div>

                      {/* Info Content */}
                      <div className="p-6 md:p-7">
                        <div className="flex items-center gap-4 text-gray-500 font-baloo text-xs font-medium mb-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="font-display text-xl md:text-2xl text-bf-black uppercase tracking-tight line-clamp-2 leading-tight group-hover:text-bf-red transition-colors mb-3">
                          {post.title}
                        </h3>

                        <p className="text-gray-600 font-baloo text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Footer Interactions */}
                    <div className="px-6 md:px-7 pb-6 pt-4 border-t border-dashed border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 font-baloo-caps font-extrabold text-xs text-bf-red group-hover:translate-x-1 transition-transform">
                        <span>Luz, Câmera, Ler</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={(e) => handleLike(post.id, e)}
                          className={`flex items-center gap-1 font-baloo text-xs font-bold px-3 py-1.5 rounded-full border border-gray-200 transition-colors focus:outline-none cursor-pointer ${
                            hasLiked[post.id] 
                              ? 'bg-bf-red/10 text-bf-red border-bf-red' 
                              : 'bg-gray-50 hover:bg-gray-100 text-gray-500'
                          }`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${hasLiked[post.id] ? 'fill-current text-bf-red' : ''}`} />
                          <span>{likes[post.id]}</span>
                        </button>
                        <button
                          onClick={(e) => handleShare(post, e)}
                          className="p-1.5 hover:bg-gray-100 rounded-full border border-gray-200 text-gray-500 focus:outline-none cursor-pointer"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-bf-white border-3 border-bf-black rounded-[32px] shadow-[4px_4px_0_#1a1a1a] max-w-xl mx-auto">
                <Film className="w-12 h-12 text-gray-300 mx-auto mb-4 animate-bounce" />
                <h3 className="font-display text-xl uppercase text-bf-black mb-2">Artigo Não Localizado</h3>
                <p className="text-gray-500 font-baloo text-xs max-w-xs mx-auto">
                  Ops! Não encontramos posts correspondentes aos termos filtrados. Tente outra categoria ou palavra-chave!
                </p>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="detail"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto bg-bf-white border-3 border-bf-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,0.95)]"
          >
            {/* Detail Hero Image Header */}
            <div className="relative h-64 md:h-96 w-full border-b-3 border-bf-black">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Back Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 left-4 flex items-center gap-2 bg-bf-white text-bf-black hover:bg-bf-yellow font-baloo-caps text-xs font-black px-4 py-2 rounded-full border-2 border-bf-black shadow-[2px_2px_0_#1a1a1a] transition-all cursor-pointer focus:outline-none"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>VOLTAR</span>
              </button>

              <span className="absolute bottom-6 left-6 md:left-8 bg-bf-yellow text-bf-black border-2 border-bf-black shadow-[2px_2px_0_#1a1a1a] font-baloo-caps font-black text-xs px-4 py-2 rounded-full uppercase tracking-wider">
                🎬 {selectedPost.category}
              </span>
            </div>

            {/* Post Metadata & Article */}
            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-500 font-baloo text-xs md:text-sm font-medium mb-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-bf-red" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-bf-red" />
                  {selectedPost.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-bf-red" />
                  {selectedPost.readTime}
                </span>
              </div>

              <h1 className="font-display text-2xl md:text-4xl text-bf-black uppercase leading-tight mb-8">
                {selectedPost.title}
              </h1>

              {/* Dynamic decorative cinematic clapperboard divider */}
              <div className="border-t-3 border-b-3 border-bf-black bg-bf-yellow py-2 px-4 flex justify-between items-center mb-8 rounded-lg font-mono text-xs font-bold text-bf-black">
                <span>SCENE: 01</span>
                <span className="animate-pulse">● ROLL ON AIR</span>
                <span>TAKE: {selectedPost.id}</span>
              </div>

              {/* Past Promotion Collection Historical Box */}
              {selectedPost.isPastPromoCollection && (
                <div className="mb-8 p-6 bg-[#FFF9E6] border-3 border-bf-black rounded-2xl shadow-[4px_4px_0_#1a1a1a]">
                  <div className="flex items-center gap-2 text-bf-red font-baloo-caps font-black text-sm uppercase mb-2">
                    <AlertCircle className="w-5 h-5 text-bf-red shrink-0" />
                    <span>Registro Histórico • Edição Especial Copa do Mundo Encerrada</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-700 font-baloo mb-2 leading-relaxed">
                    Os 8 hambúrgueres apresentados nesta postagem fizeram parte da celebração internacional temática da Copa do Mundo e atualmente não integram o cardápio regular do nosso pub ou delivery em Penha-SC.
                  </p>
                  <p className="text-xs md:text-sm text-gray-600 font-baloo italic">
                    Mantemos este registro especial em nosso blog como homenagem aos nossos clientes e ao acervo gastronômico da Burger Films!
                  </p>
                </div>
              )}

              {/* Main Content Render */}
              <div className="prose prose-lg max-w-none font-baloo text-gray-700 space-y-6 leading-relaxed text-sm md:text-base">
                {selectedPost.content.map((paragraph, idx) => (
                  <p key={idx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-bf-red first-letter:mr-1.5">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Grid of All 8 Past Promotion Burgers */}
              {selectedPost.isPastPromoCollection && selectedPost.pastPromosList && (
                <div className="my-10 not-prose">
                  <div className="flex items-center justify-between border-b-2 border-gray-200 pb-3 mb-6">
                    <div className="flex items-center gap-2 text-bf-black font-display text-xl uppercase">
                      <Trophy className="w-5 h-5 text-bf-yellow" />
                      <span>Os 8 Burgers Históricos da Coleção</span>
                    </div>
                    <span className="text-xs font-baloo-caps font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      8 Lanches • Edição Encerrada
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedPost.pastPromosList.map((burger) => (
                      <div
                        key={burger.id}
                        className="bg-white border-3 border-bf-black rounded-2xl overflow-hidden shadow-[4px_4px_0_#1a1a1a] flex flex-col justify-between hover:-translate-y-1 transition-transform"
                      >
                        <div>
                          <div className="relative h-52 bg-gray-100 overflow-hidden border-b-3 border-bf-black">
                            <img
                              src={burger.image}
                              alt={burger.name}
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src = '/favicon.png';
                              }}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                            <span className="absolute top-3 left-3 bg-bf-yellow text-bf-black border-2 border-bf-black shadow-[2px_2px_0_#1a1a1a] font-baloo-caps font-black text-[11px] px-3 py-1 rounded-full uppercase tracking-wider">
                              {burger.country} • {burger.slogan}
                            </span>
                            <span className="absolute bottom-3 right-3 bg-bf-black/85 backdrop-blur-sm text-bf-yellow font-baloo font-bold text-xs px-2.5 py-1 rounded-md">
                              Preço na época: R$ {burger.price.toFixed(2)}
                            </span>
                          </div>

                          <div className="p-5">
                            <h3 className="font-display text-lg text-bf-black uppercase leading-tight mb-2.5">
                              {burger.name}
                            </h3>

                            <div className="mb-3">
                              <span className="text-[11px] font-baloo-caps font-bold text-gray-500 uppercase block mb-1">
                                Ingredientes da Receita:
                              </span>
                              <p className="text-xs text-gray-700 font-baloo leading-relaxed">
                                {burger.description}
                              </p>
                            </div>

                            <div className="p-3 bg-[#FFF9E6] border border-dashed border-bf-yellow rounded-xl">
                              <span className="text-[10px] font-baloo-caps font-black text-bf-red uppercase block mb-0.5">
                                Curiosidade do Chef:
                              </span>
                              <p className="text-xs text-gray-600 font-baloo italic">
                                "{burger.curiosity}"
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-[11px] font-baloo-caps text-gray-500 font-bold">
                          <span className="text-bf-red flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-bf-red inline-block"></span>
                            Item Fora de Linha
                          </span>
                          <span>{burger.period}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Banner CTA to Active Menu */}
                  <div className="mt-8 p-6 bg-bf-black text-bf-white border-3 border-bf-black rounded-2xl shadow-[4px_4px_0_#FFB800] flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <h4 className="font-display text-xl text-bf-yellow uppercase mb-1">
                        Gostou de relembrar essas produções?
                      </h4>
                      <p className="text-xs md:text-sm font-baloo text-gray-300">
                        Venha saborear os astros do nosso cardápio atual e o famoso Rodízio de Mini Burgers pertinho do Beto Carrero World!
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        onNavigate('home');
                        setTimeout(() => {
                          document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                        }, 250);
                      }}
                      className="inline-flex items-center gap-2 bg-bf-yellow hover:bg-[#ffc820] text-bf-black border-2 border-bf-black px-6 py-3 rounded-full font-baloo-caps font-black text-xs shadow-[2px_2px_0_#ffffff] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer shrink-0"
                    >
                      <Utensils className="w-4 h-4" />
                      <span>Ver Cardápio Atual de Cinema</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Article Footer Controls */}
              <div className="mt-12 pt-8 border-t border-dashed border-gray-200 flex flex-wrap gap-4 items-center justify-between">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="flex items-center gap-2 text-xs font-baloo-caps font-black text-gray-500 hover:text-bf-red transition-all cursor-pointer focus:outline-none"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Voltar para Lista</span>
                </button>

                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => handleLike(selectedPost.id, e)}
                    className={`flex items-center gap-2 font-baloo-caps text-xs font-black px-4 py-2 rounded-full border-2 border-bf-black transition-colors focus:outline-none cursor-pointer ${
                      hasLiked[selectedPost.id] 
                        ? 'bg-bf-red text-bf-white' 
                        : 'bg-bf-cream hover:bg-bf-yellow text-bf-black'
                    }`}
                  >
                    <Heart className={`w-3.5 h-3.5 ${hasLiked[selectedPost.id] ? 'fill-current text-bf-white' : ''}`} />
                    <span>Curtir ({likes[selectedPost.id]})</span>
                  </button>
                  <button
                    onClick={(e) => handleShare(selectedPost, e)}
                    className="flex items-center gap-2 bg-bf-black text-bf-yellow hover:text-bf-white font-baloo-caps text-xs font-black px-4 py-2 rounded-full border-2 border-bf-black shadow-[2px_2px_0_#000000] focus:outline-none transition-all cursor-pointer"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Compartilhar</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
