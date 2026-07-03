import { MenuItem, AgendaItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- Minions Burger ---
  {
    id: 'caca-fantasmas',
    name: 'Os Caça Fantasmas',
    description: '4 mini burgers, com mussarela/alface/tomate e prato/bacon, acompanhados de fritas e maionese caseira.',
    price: 54.00,
    image: 'https://burgerfilms.chefware.com.br/115/600/0/os-caca-fantasmas--.jpg',
    category: 'lanches',
    subcategory: 'minions'
  },
  {
    id: 'sexto-sentido',
    name: 'O Sexto Sentido',
    description: '6 mini burgers com prato/bacon, cheddar/cebola caramelizada e mussarela/alface/tomate, com fritas e maionese.',
    price: 76.00,
    image: 'https://burgerfilms.chefware.com.br/116/600/0/o-sexto-sentido--.jpg',
    category: 'lanches',
    subcategory: 'minions'
  },
  {
    id: 'liga-da-justica',
    name: 'Liga Da Justiça',
    description: '8 mini burgers variados, incluindo mussarela, prato, cheddar, bacon, calabresa, salada, fritas e maionese.',
    price: 98.00,
    image: 'https://burgerfilms.chefware.com.br/20/0/0/liga-da-justica.jpg',
    category: 'lanches',
    subcategory: 'minions'
  },
  {
    id: '12-homens-segredo',
    name: '12 Homens E 1 Segredo',
    description: '12 mini burgers variados com queijos, bacon, cebola caramelizada, calabresa, fritas e maionese.',
    price: 138.00,
    image: 'https://burgerfilms.chefware.com.br/19/0/0/12-homens-e-1-segredo.jpg',
    category: 'lanches',
    subcategory: 'minions'
  },

  // --- Burgers de Cinema ---
  {
    id: 'meu-primeiro-amor',
    name: 'Meu Primeiro Amor',
    description: 'Pão brioche, mussarela e blend bovino 90g.',
    price: 26.00,
    image: 'https://burgerfilms.chefware.com.br/73/0/0/meu-primeiro-amor.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'fuga-das-galinhas',
    name: 'Fuga Das Galinhas',
    description: 'Pão brioche, burger de frango 120g, mussarela, bacon, alface e tomate.',
    price: 34.00,
    image: 'https://burgerfilms.chefware.com.br/94/0/0/fuga-das-galinhas.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'panico-na-floresta',
    name: 'Pânico Na Floresta',
    description: 'Pão brioche, mussarela, alface, tomate, picles e blend bovino 120g.',
    price: 36.00,
    image: 'https://burgerfilms.chefware.com.br/137/600/0/panico-na-floresta.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'o-vendedor-de-linguica',
    name: 'O Vendedor De Linguiça',
    description: 'Pão brioche, queijo prato, calabresa, cebola caramelizada, salada e blend bovino 120g.',
    price: 38.00,
    image: 'https://burgerfilms.chefware.com.br/114/600/0/o-vendedor-de-linguica.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'bastardos-inglorios',
    name: 'Bastardos Inglórios',
    description: 'Pão australiano, burger de linguiça Blumenau 120g, cheddar, cebola caramelizada e salada.',
    price: 41.00,
    image: 'https://burgerfilms.chefware.com.br/107/0/0/bastardos-inglorios.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'o-iluminado',
    name: 'O Iluminado',
    description: 'Pão brioche, burger de picanha 120g, queijo prato, bacon, alface e tomate.',
    price: 42.00,
    image: 'https://burgerfilms.chefware.com.br/106/0/0/o-iluminado.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'pantera-cor-de-rosa',
    name: 'Pantera Cor De Rosa',
    description: 'Pão pink com gergelim, blend bovino 120g, mussarela, cebola caramelizada e salada.',
    price: 39.00,
    image: 'https://burgerfilms.chefware.com.br/86/0/0/pantera-cor-de-rosa.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'pantera-negra',
    name: 'Pantera Negra',
    description: 'Pão black com gergelim, blend bovino 120g, cream cheese, bacon e salada.',
    price: 39.00,
    image: 'https://burgerfilms.chefware.com.br/77/0/0/pantera-negra.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'vegan-burger-stranger-things',
    name: 'Vegan Burger - Stranger Things - .',
    description: 'Pão Australiano, Alface, Tomate, Picles, Burger Vegano Feito De Feijão Fradinho E Beterraba E Quinoa',
    price: 32.90,
    image: 'https://burgerfilms.chefware.com.br/17/600/0/vegan-burger-stranger-things.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'casino-black-jack-double-burger',
    name: 'Cassino - Black Jack Double Burger',
    description: 'Pão crocante, 2 blends bovinos 90g, mussarela, bacon e barbecue com whisky.',
    price: 44.00,
    image: 'https://img.burgerfilms.com.br/casino-black-jack-double-burger.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'coracao-valente',
    name: 'Coração Valente',
    description: 'Pão crocante, burger de fraldinha 120g, corações de frango, cheddar e barbecue com whisky.',
    price: 46.00,
    image: 'https://burgerfilms.chefware.com.br/96/0/0/coracao-valente.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'onde-os-fracos-nao-tem-vez',
    name: 'Onde Os Fracos Não Tem Vez',
    description: 'Pão crocante, dois blends, ovo, bacon, três queijos, presunto, salada e picles.',
    price: 54.00,
    image: 'https://burgerfilms.chefware.com.br/84/0/0/onde-os-fracos-nao-tem-vez.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'monstros-sa',
    name: 'Monstros S.a',
    description: 'Pão blue monster, blend bovino 250g, queijo coalho, bacon, cebola caramelizada e salada.',
    price: 58.00,
    image: 'https://burgerfilms.chefware.com.br/97/0/0/monstros-s-a.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'jurassic-park',
    name: 'Jurassic Park',
    description: 'Pão blue monster, dois blends de 250g, prato, mussarela, bacon, calabresa, salada e picles.',
    price: 78.00,
    image: 'https://burgerfilms.chefware.com.br/82/0/0/jurassic-park.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'matilda',
    name: 'Matilda',
    description: 'Pão brioche, burger de linguiça Blumenau 120g, queijo coalho, bacon e doce de leite.',
    price: 39.00,
    image: 'https://burgerfilms.chefware.com.br/122/600/0/matilda.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'spider-burguer',
    name: 'Spider Burguer',
    description: 'Pão crocante, burger de fraldinha 120g, parmesão, geleia de bacon, alface e tomate.',
    price: 42.00,
    image: 'https://burgerfilms.chefware.com.br/112/0/0/spider-burguer.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'the-grinch-burguer',
    name: 'The Grinch Burguer',
    description: 'Pão verde com gergelim, burger de costela 120g, queijo coalho, pepperoni, barbecue e salada.',
    price: 44.00,
    image: 'https://burgerfilms.chefware.com.br/111/0/0/the-grinch-burguer.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },

  // --- Combos ---
  {
    id: 'combo-stranger-things',
    name: 'Combo Stranger Things / Mundo Invertido',
    description: '2 burgers temáticos de pão preto, fritas crocantes 260g e 2 bebidas.',
    price: 89.00,
    image: 'https://www.burgerfilms.com.br/images/stranger-20things.jpg',
    category: 'combos'
  },
  {
    id: 'combo-fenda-bikini',
    name: 'Combo Fenda Do Bikini',
    description: '4 smash burgers coloridos com recheios variados, fritas e maionese caseira.',
    price: 109.00,
    image: 'https://www.burgerfilms.com.br/images/combo-fenda-do-bikine.png',
    category: 'combos'
  },
  {
    id: 'combo-mario-luigi',
    name: 'Combo Mario E Luigi',
    description: '4 burgers de fraldinha 70g em pães vermelhos, com cheddar, mussarela, pepperoni, cebola e salada.',
    price: 119.00,
    image: 'https://burgerfilms.chefware.com.br/43/600/0/combo-mario-e-luigi.jpg',
    category: 'combos'
  },
  {
    id: 'combo-stitch',
    name: 'Combo Stitch',
    description: '4 burgers de fraldinha 70g em pães azuis e vermelhos, fritas, maionese e copo colecionável.',
    price: 124.00,
    image: 'https://burgerfilms.chefware.com.br/108/0/0/combo-stitch.jpg',
    category: 'combos'
  },
  {
    id: 'combo-divertidamente',
    name: 'Combo Divertidamente',
    description: '4 burgers coloridos temáticos, fritas, maionese e copo colecionável.',
    price: 129.00,
    image: 'https://burgerfilms.chefware.com.br/117/600/0/combo-divertidamente.jpg',
    category: 'combos'
  },
  {
    id: 'combo-deadpool-wolverine',
    name: 'Combo Deadpool X Wolverine',
    description: '2 burgers temáticos, um vermelho com cheddar/bacon e outro amarelo com cream cheese/coração de frango, fritas e maionese.',
    price: 94.00,
    image: 'https://www.burgerfilms.com.br/images/combo-20deadpool-20x-20wolverine.png',
    category: 'combos'
  },
  {
    id: 'combo-sirizinho',
    name: 'Combo Turma do Sirizinho',
    description: '4 burgers coloridos de fraldinha 70g, 260g de fritas e copo colecionável.',
    price: 114.00,
    image: 'https://burgerfilms.chefware.com.br/99/600/0/combo-turma-do-sirizinho.jpg',
    category: 'combos'
  },
  {
    id: 'combo-mundo-invertido',
    name: 'Combo Mundo Invertido',
    description: '4 burgers em pães pretos com cheddar, calabresa, barbecue, bacon com mel, queijo coalho e fritas.',
    price: 124.00,
    image: 'https://www.burgerfilms.com.br/images/combo-20mundo-20invertido.png',
    category: 'combos'
  },
  {
    id: 'combo-patrulha-canina',
    name: 'Combo Patrulha Canina',
    description: '4 burgers coloridos de fraldinha 70g com queijos, bacon, pepperoni, calabresa, cebola, fritas e maionese.',
    price: 129.00,
    image: 'https://www.burgerfilms.com.br/images/combo-20patrulha-20canina-4hambuegueres.png',
    category: 'combos'
  },
  {
    id: 'combo-star-wars',
    name: 'Combo Star Wars',
    description: '4 burgers com queijo suíço, rúcula, cebola caramelizada e fritas.',
    price: 119.00,
    image: 'https://www.burgerfilms.com.br/images/casino-black-jack-double-burger.jpg', // Star Wars fallback style
    category: 'combos'
  }
];

export const AGENDA_ITEMS: AgendaItem[] = [
  {
    id: 'quarta',
    day: 'QUARTA',
    title: 'PUB FECHADO',
    subtitle: 'Dia de recarregar as energias e preparar os blends de cinema',
    image: 'https://www.burgerfilms.com.br/images/os-caca-fantasmas.jpg', // Minions-like mini-burgers image
  },
  {
    id: 'sexta',
    day: 'SEXTA',
    title: 'ARRAIÁ DO PUB',
    subtitle: 'E COMIDAS TÍPICAS (Bolo, Milho, Quentão)',
    image: 'https://www.burgerfilms.com.br/images/o-vendedor-de-linguica.jpg', // Delicious rustique food
    hasFlags: true
  },
  {
    id: 'sabado',
    day: 'SÁBADO',
    title: 'ARRAIÁ DO PUB E MÚSICA',
    subtitle: 'Show acústico ao vivo com Allan Acústico',
    image: 'https://www.burgerfilms.com.br/images/casino-black-jack-double-burger.jpg', // Live show vibes, using a signature burger or avatar
    dateBadge: '04/07',
    hasFlags: true
  },
  {
    id: 'domingo-quinta',
    day: 'DOMINGO A QUINTA',
    title: 'RODÍZIO DE MINI BURGERS',
    subtitle: '(Exceto na Quarta-feira) – Experimente todos os nossos sabores!',
    image: 'https://www.burgerfilms.com.br/images/o-sexto-sentido.jpg', // Six mini-burgers
  }
];
