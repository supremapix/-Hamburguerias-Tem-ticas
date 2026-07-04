import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, ArrowLeft, Calendar, User, Clock, ChevronRight, Search, Heart, Share2, Sparkles, Star } from 'lucide-react';

interface PageProps {
  onNavigate: (view: any) => void;
  key?: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: 'Bastidores' | 'Novidades' | 'Eventos' | 'Dicas';
  excerpt: string;
  content: string[];
  image: string;
  date: string;
  author: string;
  readTime: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Os Segredos por Trás do Nosso Blend de Cinema de 150g',
    slug: 'segredos-do-nosso-blend',
    category: 'Bastidores',
    excerpt: 'Descubra como misturamos cortes selecionados de carne para atingir o ponto perfeito de suculência e sabor dignos de Oscar!',
    image: 'https://img.burgerfilms.com.br/meu-churros-favorito.webp',
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
    image: 'https://img.burgerfilms.com.br/meu-churros-favorito.webp',
    date: '28 de Junho, 2026',
    author: 'Equipe de Produção',
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
    image: 'https://img.burgerfilms.com.br/meu-churros-favorito.webp',
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
    image: 'https://img.burgerfilms.com.br/meu-churros-favorito.webp',
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

export default function Blog({ onNavigate }: PageProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [likes, setLikes] = useState<Record<string, number>>({
    '1': 48,
    '2': 75,
    '3': 32,
    '4': 29
  });
  const [hasLiked, setHasLiked] = useState<Record<string, boolean>>({});

  const categories = ['Todos', 'Bastidores', 'Novidades', 'Eventos', 'Dicas'];

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
                        <span className="absolute top-4 left-4 bg-bf-red text-bf-white border-2 border-bf-black shadow-[2px_2px_0_#1a1a1a] font-baloo-caps font-black text-[10px] px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                          🎬 {post.category}
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

              {/* Main Content Render */}
              <div className="prose prose-lg max-w-none font-baloo text-gray-700 space-y-6 leading-relaxed text-sm md:text-base">
                {selectedPost.content.map((paragraph, idx) => (
                  <p key={idx} className="first-letter:text-3xl first-letter:font-bold first-letter:text-bf-red first-letter:mr-1.5">
                    {paragraph}
                  </p>
                ))}
              </div>

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
