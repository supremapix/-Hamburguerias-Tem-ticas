import { MenuItem, AgendaItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- Burgers de Cinema (16 itens) ---
  {
    id: 'hulk-smash',
    name: 'Hulk Smash',
    description: 'Pão Green C/ Gergelim, Smash 70g, Queijo Prato, Alface',
    price: 19.90,
    image: 'https://burgerfilms.chefware.com.br/6/600/0/hulk-smash.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'meu-primeiro-amor',
    name: 'Meu Primeiro Amor',
    description: 'Pão Brioche, Queijo Mussarela, 90g Blend Bovino',
    price: 25.90,
    image: 'https://burgerfilms.chefware.com.br/73/600/0/meu-primeiro-amor.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'fuga-das-galinhas',
    name: 'Fuga Das Galinhas',
    description: 'Pão Brioche, 120g Hamburguer De Frango, Queijo Mussarela, Bacon, Alface, Tomate',
    price: 34.90,
    image: 'https://burgerfilms.chefware.com.br/94/600/0/fuga-das-galinhas.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'panico-na-floresta',
    name: 'Pânico Na Floresta',
    description: 'Pão Brioche, Queijo Mussarela, Alface, Tomate, Picles, 120g Blend Bovino',
    price: 35.90,
    image: 'https://burgerfilms.chefware.com.br/137/600/0/panico-na-floresta.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'o-vendedor-de-linguica',
    name: 'O Vendedor De Linguiça',
    description: 'Pão Brioche, Queijo Prato, Linguiça Calabresa, Cebola Caramelizada, Alface, Tomate, 120g Blend Bovino',
    price: 39.90,
    image: 'https://burgerfilms.chefware.com.br/114/600/0/o-vendedor-de-linguica.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'bastardos-inglorios',
    name: 'Bastardos Inglórios',
    description: 'Pão Australiano, 120g Hamburguer De Linguiça Blumenau, Queijo Cheddar, Cebola Caramelizada, Alface, Tomate',
    price: 37.90,
    image: 'https://burgerfilms.chefware.com.br/107/600/0/bastardos-inglorios.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'o-iluminado',
    name: 'O Iluminado',
    description: 'Pão Brioche, 120g Hamburguer De Picanha, Queijo Prato, Bacon, Alface, Tomate',
    price: 44.90,
    image: 'https://burgerfilms.chefware.com.br/106/600/0/o-iluminado.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'pantera-negra',
    name: 'Pantera Negra',
    description: 'Pão Black C/ Gergelim, 120g Blend Bovino, Cream Cheese, Bacon, Alface, Tomate',
    price: 45.90,
    image: 'https://burgerfilms.chefware.com.br/77/600/0/pantera-negra.jpg',
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
    description: 'Pão Crocante, 2 90g Blend Bovino, Queijo Mussarela, Bacon, Barbecue C/ Whisky',
    price: 45.90,
    image: 'https://img.burgerfilms.com.br/casino-black-jack-double-burger.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'coracao-valente',
    name: 'Coração Valente',
    description: 'Pão Crocante, 120g Burger Fraldinha, Corações De Frango, Queijo Cheddar, Barbecue C/ Whisky',
    price: 45.90,
    image: 'https://burgerfilms.chefware.com.br/96/600/0/coracao-valente.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'onde-os-fracos-nao-tem-vez',
    name: 'Onde Os Fracos Não Tem Vez',
    description: 'Pão Crocante, 2 90g Blend Bovino, Ovo, Bacon, Queijo Cheddar, Queijo Mussarela, Queijo Prato, Presunto, Alface, Tomate, Picles',
    price: 59.90,
    image: 'https://burgerfilms.chefware.com.br/84/600/0/onde-os-fracos-nao-tem-vez.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'monstros-sa',
    name: 'Monstros S.a',
    description: 'Pão Blue Monster C/ Gergelim, 250g Blend Bovino, Queijo Coalho, Bacon, Cebola Caramelizada, Alface, Tomate',
    price: 64.90,
    image: 'https://burgerfilms.chefware.com.br/97/600/0/monstros-s-a.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'jurassic-park',
    name: 'Jurassic Park',
    description: 'Pão Blue Monster C/ Gergelim, 2 250g Blend Bovino, Queijo Prato, Queijo Mussarela, Bacon, Calabresa, Alface, Tomate, Picles',
    price: 79.90,
    image: 'https://burgerfilms.chefware.com.br/82/600/0/jurassic-park.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'matilda',
    name: 'Matilda',
    description: 'Pão Brioche, 120g Hamburguer De Linguiça Blumenau, Queijo Coalho, Bacon, Doce de Leite',
    price: 39.90,
    image: 'https://burgerfilms.chefware.com.br/122/600/0/matilda.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },
  {
    id: 'spider-burguer',
    name: 'Spider Burguer',
    description: 'Pão Crocante, 120g Burger Fraldinha, Teia de Parmesão, Geleia De Bacon, Alface E Tomate',
    price: 45.90,
    image: 'https://burgerfilms.chefware.com.br/112/600/0/spider-burguer.jpg',
    category: 'lanches',
    subcategory: 'cinema'
  },

  // --- Copa do Mundo 2026- Burguers Ed.Limtada (8 itens) ---
  {
    id: 'alemanha-burguer',
    name: 'Alemanha Burguer - Prost!!',
    description: 'Pão Preto C/ Gergelim, Hamburguer Linguiça Blumenau 120gr, Queijo Prato, Cebola Caramelizada, Alface, Tomate, Maionese Caseira',
    price: 41.90,
    image: 'https://burgerfilms.chefware.com.br/136/600/0/alemanha-burguer-prost.jpg',
    category: 'lanches',
    subcategory: 'copa'
  },
  {
    id: 'brasil-burguer',
    name: 'Brasil Burguer - Hexa Neles!',
    description: 'Pão Verde C/ Gergelim, Hamburguer Picanha 120gr, Queijo Coalho, Crispy De Couve, Bacon Fatiado, Molho Barbecue',
    price: 49.90,
    image: 'https://burgerfilms.chefware.com.br/128/600/0/brasil-burguer-hexa-neles.jpg',
    category: 'lanches',
    subcategory: 'copa'
  },
  {
    id: 'mexico-burguer',
    name: 'México Burguer - Árriba!!',
    description: 'Hamburguer Fraldinha 12gr, Cheddar, Farofa De Doritos, Geleia De Pimenta, Alface, Tomate',
    price: 41.90,
    image: 'https://burgerfilms.chefware.com.br/129/600/0/mexico-burguer-arriba.jpg',
    category: 'lanches',
    subcategory: 'copa'
  },
  {
    id: 'burguer-estados-unidos',
    name: 'Burguer Estados Unidos - Party Of USA',
    description: 'Pão Vermelho C/ Gergelim, Hamburguer Costela 120gr, Cheddar, Bacon Fatiado, Picles, Molho Barbecue, Alface, Tomate',
    price: 41.90,
    image: 'https://burgerfilms.chefware.com.br/130/600/0/burguer-estados-unidos-party-of-usa.jpg',
    category: 'lanches',
    subcategory: 'copa'
  },
  {
    id: 'argentina-burguer',
    name: 'Argentina Burguer - La Mano de dios',
    description: 'Hamburguer Costela 120gr, Queijo Mussarela, Calabresa Fatiada, Cebola Crispy, Maionese De Chimichurri, Alface, Tomate',
    price: 41.90,
    image: 'https://burgerfilms.chefware.com.br/131/600/0/argentina-burguer-la-mano-de-dios.jpg',
    category: 'lanches',
    subcategory: 'copa'
  },
  {
    id: 'espanha-burguer',
    name: 'Espanha Burguer - Olé Touro!!',
    description: 'Pão Vermelho C/ Gergelim, Hamburguer Fraldinha 12gr, Queijo Prato, Presunto, Ovo, Alface, Tomate, Maionese De Bacon',
    price: 43.90,
    image: 'https://burgerfilms.chefware.com.br/132/600/0/espanha-burguer-ole-touro.jpg',
    category: 'lanches',
    subcategory: 'copa'
  },
  {
    id: 'inglaterra-burguer',
    name: 'Inglaterra Burguer - Keep Calm And Eat a Burguer',
    description: 'Pão Vermelho C/ Gergelim, Hamburguer Fraldinha 12gr, Bacon Crocante, Queijo Cheddar, Cebola Caramelizada, Redução de Molho Inglês',
    price: 41.90,
    image: 'https://burgerfilms.chefware.com.br/134/600/0/inglaterra-burguer-keep-calm-and-eat-a-burguer.jpg',
    category: 'lanches',
    subcategory: 'copa'
  },
  {
    id: 'franca-burguer',
    name: 'França Burguer - Tour De France',
    description: 'Pão Azul C/ Gergelim, Hamburguer Fraldinha 12gr, Queijo Brie, Cogumelos Paris Salteados, Cebola Crispy, Alface, Tomate',
    price: 47.90,
    image: 'https://burgerfilms.chefware.com.br/135/600/0/franca-burguer-tour-de-france.jpg',
    category: 'lanches',
    subcategory: 'copa'
  },

  // --- Minions Burger (4 itens) ---
  {
    id: 'caca-fantasmas',
    name: 'Os Caça Fantasmas',
    description: '2 Mini Burgers 45g Queijo Mussarela E Alface E Tomate, 2 Mini Burgers 45g Queijo Prato E Bacon, Acompanha Fritas E Maionese Caseira',
    price: 56.90,
    image: 'https://burgerfilms.chefware.com.br/115/600/0/os-caca-fantasmas.jpg',
    category: 'lanches',
    subcategory: 'minions'
  },
  {
    id: 'sexto-sentido',
    name: 'O Sexto Sentido',
    description: '2 Mini Burgers 45g Queijo Prato E Bacon, 2 Mini Burgers 45g Queijo Cheddar E Cebola Caramelizada, 2 Mini Burgers 45g Queijo Mussarela E Alface E Tomate, Acompanha Fritas E Maionese Caseira',
    price: 79.90,
    image: 'https://burgerfilms.chefware.com.br/116/600/0/o-sexto-sentido.jpg',
    category: 'lanches',
    subcategory: 'minions'
  },
  {
    id: 'liga-da-justica',
    name: 'Liga Da Justiça',
    description: '2 Mini Burgers 45g Queijo Mussarela E Alface E Tomate, 2 Mini Burgers 45g Queijo Prato E Bacon, 2 Mini Burgers 45g Queijo Cheddar E Cebola Caramelizada, 2 Mini Burgers 45g Queijo Mussarela E Calabresa, Acompanha Fritas E Maionese Caseira',
    price: 96.90,
    image: 'https://burgerfilms.chefware.com.br/20/600/0/liga-da-justica.jpg',
    category: 'lanches',
    subcategory: 'minions'
  },
  {
    id: '12-homens-segredo',
    name: '12 Homens E 1 Segredo',
    description: '3 Mini Burgers 45g Queijo Mussarela E Alface E Tomate, 3 Mini Burgers 45g Queijo Prato E Bacon, 3 Mini Burgers 45g Queijo Cheddar E Cebola Caramelizada, 3 Mini Burgers 45g Queijo Mussarela E Calabresa, Acompanha Fritas E Maionese Caseira',
    price: 149.90,
    image: 'https://burgerfilms.chefware.com.br/19/600/0/12-homens-e-1-segredo.jpg',
    category: 'lanches',
    subcategory: 'minions'
  },

  // --- Combos (10 itens) ---
  {
    id: 'combo-fenda-bikini',
    name: 'Combo Fenda Do Bikini',
    description: '4 Smash Burger 70g, 1 Pão Rosa Com Queijo Mussarela Calabresa Cebola Alface E Toimate, 1 Vermelho C Queijo Prato Bacon Fatiado Alface E Tomate, 1 Amarelo Com Queijo Coalho Bacon Com Redução no Barbecue Alface e Tomate, 1 Verde Com Cream Cheese Anel de Cebola Alface e Tomate, Acompanha Fritas E Maionese Caseira',
    price: 94.90,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80',
    category: 'combos'
  },
  {
    id: 'combo-mario-luigi',
    name: 'Combo Mario E Luigi',
    description: '4 Burguers de Fraldinha 70gr, 2 Pães Vermelhos C/Gergelim Cheddar Cebola Caramelizada Alface e Tomate, 2 Pães Vermelhos C/Gergelim Mussarela Pepperoni Alface e Tomate, Acompanha Fritas E Maionese Caseira',
    price: 94.90,
    image: 'https://burgerfilms.chefware.com.br/43/600/0/combo-mario-e-luigi.jpg',
    category: 'combos'
  },
  {
    id: 'combo-stitch',
    name: 'Combo Stitch',
    description: '4 Burguers de Fraldinha 70gr, 2 Pães Azuis C/Gergelim Molho da Casa Mussarela Alface e Tomate, 2 Pães Vermelhos C/Gergelim Cream Cheese Farofa de Bacon Alface e Tomate, Acompanha Fritas E Maionese Caseira, Copo Colecionável Ed Limitada',
    price: 94.90,
    image: 'https://burgerfilms.chefware.com.br/108/600/0/combo-stitch.jpg',
    category: 'combos'
  },
  {
    id: 'combo-sonic-knuckles',
    name: 'Combo Sonic & Knuckles',
    description: '4 Burguers de Fraldinha 70gr, 2 Pães Azuis C/Gergelim Queijo Prato Calabresa Fatiada Alface e Tomate, 2 Pães Vermelhos C/Gergelim Queijo Mussarela Alface e Tomate, Acompanha Fritas E Maionese Caseira',
    price: 94.90,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
    category: 'combos'
  },
  {
    id: 'combo-sith-star-wars',
    name: 'Combo Sith - Star Wars',
    description: '2 Darth Vader (pão Preto C/ Gergelim Burger Fraldinha 70g Cheddar Cebola Caramelizada Alface E Tomate, 2 Darth Maul (pão Vermelho C/ Gergelim Burger 70g Fraldinha Queijo Prato Pepperoni Alface E Tomate, Acompanha Fritas E Maionese Caseira',
    price: 94.90,
    image: 'https://burgerfilms.chefware.com.br/64/600/0/combo-sith-star-wars.jpg',
    category: 'combos'
  },
  {
    id: 'combo-divertidamente',
    name: 'Combo Divertidamente',
    description: 'Nojinho: Pão Verde C/ Gergelim. Burger Fraldinha 70g. Queijo Prato. Bacon. Alface E Tomate, Raiva: Pão Vermelho C/ Gergelim. Burger Fraldinha 70g. Queijo Mussarela. Alface E Tomate., Tristeza: Pão Azul C/ Gergelim. Burger Fraldinha 70g. Cheddar. Pepperoni. Alface E Tomate., Medo: Pão Roxo C/ Gergelim. Burger Fraldinha 70g. Cream Cheese. Calabresa. Alface E Tomate., Acompanha Fritas E Maionese Caseira',
    price: 94.90,
    image: 'https://burgerfilms.chefware.com.br/117/600/0/combo-divertidamente.jpg',
    category: 'combos'
  },
  {
    id: 'combo-deadpool-x-wolverine',
    name: 'Combo Deadpool X Wolverine',
    description: 'Deadpool - Pão Vermelho C/Gergelim, Burguer de Fraldinha 70g, Cheddar, Cubos de Bacon c/Barbecue, Alface e Tomate, Wolverine - Pão Amarelo C/Gergelim, Burguer de Fraldinha 70gr, Cream Cheese, Coração de Frango, Alface, Tomate, Acompanha 130g De Fritas e maionese Caseira',
    price: 59.90,
    image: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?w=600&auto=format&fit=crop&q=80',
    category: 'combos'
  },
  {
    id: 'combo-turma-do-sirizinho',
    name: 'Combo Turma do Sirizinho',
    description: 'Pão Vermelho C/ Gergelim 70gr Fraldinha Mussarela Bacon Fatiado Alface e Tomate, Pão Azul C/ Gergelim 70gr Fraldinha Cream Cheese Pepperoni Alface e Tomate, Pão Amarelo C/ Gergelim 70gr Fraldinha Cheddar Calabresa Alface e Tomate, Pão Preto C/ Gergelim 70gr Fraldinha Queijo Prato Crispy de Bacon Alface e Tomate, 260g de Fritas, Copo Colecionável da turma do Sirizinho',
    price: 92.90,
    image: 'https://burgerfilms.chefware.com.br/99/600/0/combo-turma-do-sirizinho.jpg',
    category: 'combos'
  },
  {
    id: 'combo-patrulha-canina',
    name: 'Combo Patrulha Canina',
    description: '4 Burguers de Fraldinha 70gr, 1 Pão Vermelho C/Gergelim Cream Cheese Bacon Alface e Tomate, 1 Pão Azul C/Gergelim Cheddar Pepperoni Alface e Tomate, 1 Pão Amarelo C/Gergelim Mussarela Cebola Caramelizada Alface e Tomate, 1 Pão Rosa C/Gergelim Queijo Prato Calabresa Alface e Tomate, Acompanha Fritas E Maionese Caseira',
    price: 94.90,
    image: 'https://img.burgerfilms.com.br/combo-20patrulha-20canina-4hambuegueres.png',
    category: 'combos'
  },
  {
    id: 'combo-he-man',
    name: 'Combo do HE-MAN',
    description: 'HE-MAN: 2 Pães amarelos c/gergelim, Burguer Fraldinha 70gr, queijo coalho grelhado, geleia de bacon, alface e tomate. Esqueleto: 2 Pães roxos c/gergelim, Burguer de Fraldinha 70gr, queijo cheddar, calabresa, crispy de cebola, alface e tomate. Acompanha 260gr de fritas.',
    price: 94.90,
    image: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?w=600&auto=format&fit=crop&q=80',
    category: 'combos'
  },

  // --- Petiscos de Cinema (11 itens) ---
  {
    id: 'de-volta-batatas-fritas',
    name: 'De Volta Para As Batatas Fritas',
    description: 'Porção 130g Fritas Pequena',
    price: 10.90,
    image: 'https://burgerfilms.chefware.com.br/25/600/0/de-volta-para-as-batatas-fritas.jpg',
    category: 'petiscos'
  },
  {
    id: 'curtindo-vida-adoidado',
    name: 'Curtindo A Vida Adoidado',
    description: 'Dadinho De Tapioca, Molho De Geleia De Pimenta',
    price: 27.90,
    image: 'https://burgerfilms.chefware.com.br/24/600/0/curtindo-a-vida-adoidado.jpg',
    category: 'petiscos'
  },
  {
    id: 'procurando-nemo',
    name: 'Procurando Nemo',
    description: '400g De Tiras De Peixe Empanado, Batata Rustica, Acompanha Molho Tartaro',
    price: 79.90,
    image: 'https://burgerfilms.chefware.com.br/118/600/0/procurando-nemo.jpg',
    category: 'petiscos'
  },
  {
    id: 'galinho-chicken-little',
    name: 'O Galinho Chiken Little',
    description: '400g De Tiras De Frango Empanado, Potinho De Barbecue C/whisky, Potinho Maionese Caseira',
    price: 52.90,
    image: 'https://burgerfilms.chefware.com.br/27/600/0/o-galinho-chiken-little.jpg',
    category: 'petiscos'
  },
  {
    id: 'batata-feira-13',
    name: 'Batata Feira 13',
    description: 'Cheddar, Cubos De Calabresa E Bacon, 400g De Fritas',
    price: 51.90,
    image: 'https://burgerfilms.chefware.com.br/23/600/0/batata-feira-13.jpg',
    category: 'petiscos'
  },
  {
    id: 'batata-simples',
    name: 'Batata Simples',
    description: '400g De Batata Frita Extra Fina Mc Cain',
    price: 39.90,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&auto=format&fit=crop&q=80',
    category: 'petiscos'
  },
  {
    id: 'croquete-das-galaxias',
    name: 'Croquete Das Galaxias',
    description: '4 Unidades De Croquetes De Carne, Acompanha Mostarda Escura',
    price: 34.90,
    image: 'https://burgerfilms.chefware.com.br/57/600/0/croquete-das-galaxias.jpg',
    category: 'petiscos'
  },
  {
    id: 'quarteto-fantastico',
    name: 'Quarteto Fantástico',
    description: '4 Mini Coxinhas De Frango Com Queijo Brie, Acompanha Geléia de Pimenta Dedo De moca',
    price: 32.90,
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&auto=format&fit=crop&q=80',
    category: 'petiscos'
  },
  {
    id: 'edward-maos-palito',
    name: 'Edward Mãos De Palito',
    description: 'Bastões De Queijo Empanado. Acompanha Barbecue Artesanal C/ Whisky',
    price: 24.90,
    image: 'https://img.burgerfilms.com.br/edward-maos-de-palito-bastoes-de-queijo-empanado-barbecue-whisky-burger-films.webp',
    category: 'petiscos'
  },
  {
    id: 'star-wars-bolinho-aipim',
    name: 'Star Wars O bolinho Contra-Ataca - Aipim c Carne Seca',
    description: '4 Bolinhos Mc Cain de Aipim Com Carne Seca, Acompanha Barbecue Artesanal',
    price: 32.90,
    image: 'https://burgerfilms.chefware.com.br/119/600/0/star-wars-o-bolinho-contra-ataca-aipim-c-carne-seca.jpg',
    category: 'petiscos'
  },
  {
    id: 'star-wars-bolinho-pepperoni',
    name: 'Star Wars O bolinho Contra-Ataca - Pepperoni com Queijo',
    description: '4 Bolinhos de Pepperoni Com Queijo, Acompanha Barbecue Artesanal',
    price: 32.90,
    image: 'https://burgerfilms.chefware.com.br/120/600/0/star-wars-o-bolinho-contra-ataca-pepperoni-com-queijo.jpg',
    category: 'petiscos'
  },

  // --- Pizzas (6 itens) ---
  {
    id: 'pizza-frango-catupiry',
    name: 'Frango com Catupiry',
    description: 'Molho de tomate, Queijo Mussarela, Frango, Catupiry, Orégano, Massa de fermentação natural',
    price: 39.90,
    image: 'https://burgerfilms.chefware.com.br/101/600/0/frango-com-catupiry.jpg',
    category: 'pizzas'
  },
  {
    id: 'pizza-calabresa',
    name: 'Pizza de Calabresa',
    description: 'Molho de Tomate, Queijo Mussarela, Calabresa Fatiada, Orégano, Massa de fermentação natural',
    price: 39.90,
    image: 'https://burgerfilms.chefware.com.br/102/600/0/pizza-de-calabresa.jpg',
    category: 'pizzas'
  },
  {
    id: 'pizza-marguerita',
    name: 'Pizza de Marguerita',
    description: 'Molho de tomate, Queijo Mussarela, Tomate, Manjericão, Orégano, Massa de fermentação natural',
    price: 39.90,
    image: 'https://burgerfilms.chefware.com.br/103/600/0/pizza-de-marguerita.jpg',
    category: 'pizzas'
  },
  {
    id: 'pizza-3-queijos',
    name: '3 Queijos',
    description: 'Molho de Tomate, Queijo Mussarela, Tomate, Manjericão, Orégano, Massa de fermentação natural',
    price: 39.90,
    image: 'https://burgerfilms.chefware.com.br/104/600/0/3-queijos.jpg',
    category: 'pizzas'
  },
  {
    id: 'pizza-bacon-milho',
    name: 'Pizza De Bacon Com Milho',
    description: 'Massa de fermentação natural, Molho de Tomate, Queijo Mussarela, Bacon, Milho, Tam:20x15 cm',
    price: 39.90,
    image: 'https://burgerfilms.chefware.com.br/124/600/0/pizza-de-bacon-com-milho.jpg',
    category: 'pizzas'
  },
  {
    id: 'pizza-pepperoni',
    name: 'Piza de Pepperoni',
    description: 'Massa de fermentação natural, Molho de tomate, Queijo Mussarela, Pepperoni, Tam:20x15 cm',
    price: 39.90,
    image: 'https://burgerfilms.chefware.com.br/125/600/0/piza-de-pepperoni.jpg',
    category: 'pizzas'
  },

  // --- Bebidas (7 itens) ---
  {
    id: 'bebida-diversos',
    name: 'Diversos',
    description: 'Água Com Gás, Água Sem Gás, Água Tônica, Água Tônica Zero, Café, H2o Limão, H2o Limoneto, Oscarchaça, Oscarchaça 3d',
    price: 6.90,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&auto=format&fit=crop&q=80',
    category: 'bebidas'
  },
  {
    id: 'cervejas-penhasco',
    name: 'Cervejas Penhasco',
    description: 'Cerveja Artesanal Penhasco 500ml',
    price: 24.90,
    image: 'https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=600&auto=format&fit=crop&q=80',
    category: 'bebidas'
  },
  {
    id: 'refrigerantes',
    name: 'Refrigerantes',
    description: 'Coca 2l, Coca 600ml, Coca Cola, Coca Zero, Coca zero 600ml, Fanta Laranja, Fanta Uva, Guaraná Antartica, Guaraná Zero, Schweppes Citrus, Sprite',
    price: 8.90,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&auto=format&fit=crop&q=80',
    category: 'bebidas'
  },
  {
    id: 'sucos',
    name: 'Sucos',
    description: 'Dell Valle Pêssego, Dell Valle Uva',
    price: 8.90,
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&auto=format&fit=crop&q=80',
    category: 'bebidas'
  },
  {
    id: 'cerveja-long-neck',
    name: 'Cerveja Long Neck',
    description: 'Corona, Corona Zero Alcool, Heineken, Heineken Zero Álcool, Oscar Beer',
    price: 15.90,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&auto=format&fit=crop&q=80',
    category: 'bebidas'
  },
  {
    id: 'cerveja-lata',
    name: 'Cerveja Lata',
    description: 'Amstel, Brahma, Skol',
    price: 8.90,
    image: 'https://images.unsplash.com/photo-1584225065152-4a1454aa3d4e?w=600&auto=format&fit=crop&q=80',
    category: 'bebidas'
  },
  {
    id: 'growlers',
    name: 'Growlers',
    description: 'Garrafa 1 Litro. Chopp Artesanal Da Patanegra - São Bento Do Sul',
    price: 30.90,
    image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=600&auto=format&fit=crop&q=80',
    category: 'bebidas'
  },

  // --- Sobremesas (4 itens) ---
  {
    id: 'brownie-sumiu',
    name: 'Apertem Os Cintos, O \'brownie\' Sumiu!',
    description: 'Pedaço De Brownie C Castanha',
    price: 17.90,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&auto=format&fit=crop&q=80',
    category: 'sobremesas'
  },
  {
    id: 'simpsons-mini-donuts',
    name: 'Simpsons Mini Donuts',
    description: '¨6 Mini Donuts Com Cobertura de Glacê de Chocolate',
    price: 25.90,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=80',
    category: 'sobremesas'
  },
  {
    id: 'meu-churros-favorito',
    name: 'Meu Churros Favorito',
    description: 'Deliciosos churros fritos cobertos com açúcar e canela, acompanhados de doce de leite.',
    price: 16.90,
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=600&auto=format&fit=crop&q=80',
    category: 'sobremesas'
  },
  {
    id: 'hora-brigadeiro',
    name: 'A Hora Do Brigadeiro',
    description: 'Brigadeiro De Colher 50% Cacau, 80gr',
    price: 13.90,
    image: 'https://img.burgerfilms.com.br/a-hora-do-brigadeiro-brigadeiro-de-colher-50-cacau-burger-films.webp',
    category: 'sobremesas'
  },

  // --- Guloseimas e lojinha (1 itens) ---
  {
    id: 'bala-halls',
    name: 'Bala Halls',
    description: 'Cereja',
    price: 4.50,
    image: 'https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=600&auto=format&fit=crop&q=80',
    category: 'guloseimas'
  }
];

export const AGENDA_ITEMS: AgendaItem[] = [
  {
    id: 'quarta',
    day: 'QUARTA',
    title: 'PUB FECHADO',
    subtitle: 'Dia de recarregar as energias e preparar os blends de cinema',
    image: 'https://burgerfilms.chefware.com.br/115/600/0/os-caca-fantasmas--.jpg',
  },
  {
    id: 'sexta',
    day: 'SEXTA',
    title: 'ARRAIÁ DO PUB',
    subtitle: 'E COMIDAS TÍPICAS (Bolo, Milho, Quentão)',
    image: 'https://burgerfilms.chefware.com.br/114/600/0/o-vendedor-de-linguica.jpg',
    hasFlags: true
  },
  {
    id: 'sabado',
    day: 'SÁBADO',
    title: 'ARRAIÁ DO PUB E MÚSICA',
    subtitle: 'Show acústico ao vivo com Allan Acústico',
    image: 'https://img.burgerfilms.com.br/casino-black-jack-double-burger.jpg',
    dateBadge: '04/07',
    hasFlags: true
  },
  {
    id: 'domingo-quinta',
    day: 'DOMINGO A QUINTA',
    title: 'RODÍZIO DE MINI BURGERS',
    subtitle: '(Exceto na Quarta-feira) – Experimente todos os nossos sabores!',
    image: 'https://burgerfilms.chefware.com.br/116/600/0/o-sexto-sentido--.jpg',
  }
];
