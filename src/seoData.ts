export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage: string;
  structuredData: any;
}

export interface NeighborhoodData {
  slug: string;
  name: string;
  description: string;
  distanceToBetoCarrero: string;
  localInfo: string;
  deliveryTime: string;
  deliveryFee: string;
  seo: SEOMetadata;
}

// Global restaurant base schema
const baseRestaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "@id": "https://www.burgerfilms.com.br/#restaurant",
  "name": "Burger Films Pub & Delivery",
  "image": "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
  "telephone": "+5547992155989",
  "url": "https://www.burgerfilms.com.br",
  "priceRange": "$$",
  "menu": "https://www.burgerfilms.com.br/#menu",
  "servesCuisine": ["Burgers", "Pizzas", "American", "Brazilian"],
  "logo": "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
  "sameAs": [
    "https://www.instagram.com/burgerfilms_/"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. Alfredo Brunetti, 631",
    "addressLocality": "Penha",
    "addressRegion": "SC",
    "postalCode": "88385-000",
    "addressCountry": "BR"
  }
};

export const GLOBAL_SEO_DATA: Record<string, SEOMetadata> = {
  "home": {
    title: "Burger Films | Melhor Hamburgueria de Penha - SC | Perto do Beto Carrero",
    description: "Eleita a melhor hamburgueria de Penha-SC! Saboreie nossos blends artesanais de cinema, rodízio de mini-burgers, pizzas e sobremesas ao lado do Beto Carrero.",
    keywords: "hamburgueria em Penha, hamburgueria Penha SC, hambúrguer artesanal Penha, melhor hamburgueria de Penha, pub em Penha SC, delivery de hambúrguer Penha, hamburgueria perto do Beto Carrero",
    canonicalUrl: "https://www.burgerfilms.com.br/",
    ogImage: "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          ...baseRestaurantSchema,
          "hasMenu": "https://www.burgerfilms.com.br/#menu",
          "acceptsReservations": "true",
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "18:00",
              "closes": "23:30"
            }
          ]
        },
        {
          "@type": "WebSite",
          "@id": "https://www.burgerfilms.com.br/#website",
          "url": "https://www.burgerfilms.com.br",
          "name": "Burger Films Pub & Delivery",
          "description": "Hamburgueria temática de cinema em Penha - SC",
          "publisher": {
            "@id": "https://www.burgerfilms.com.br/#restaurant"
          }
        }
      ]
    }
  },
  "quem-somos": {
    title: "Quem Somos | Burger Films - Luz, Câmera e Sabor em Penha - SC",
    description: "Conheça a história cinematográfica por trás da Burger Films Pub & Delivery. Descubra como transformamos blends artesanais em verdadeiras experiências dignas de Oscar.",
    keywords: "hamburgueria temática Penha, história Burger Films, pub temático Penha SC, gastronomia Penha, equipe Burger Films",
    canonicalUrl: "https://www.burgerfilms.com.br/quem-somos",
    ogImage: "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": "https://www.burgerfilms.com.br/quem-somos/#webpage",
          "url": "https://www.burgerfilms.com.br/quem-somos",
          "name": "Quem Somos | Burger Films Pub & Delivery",
          "description": "Conheça a história da melhor hamburgueria temática de Penha - SC",
          "mainEntity": {
            "@id": "https://www.burgerfilms.com.br/#restaurant"
          }
        }
      ]
    }
  },
  "contato": {
    title: "Contato e Localização | Burger Films Pub & Delivery em Penha - SC",
    description: "Fale com o nosso elenco! Entre em contato via WhatsApp, tire suas dúvidas ou nos faça uma visita em nossas unidades perto do Beto Carrero ou no Centro da Armação.",
    keywords: "contato Burger Films, telefone hamburgueria Penha, endereço Burger Films, reservas Penha SC, WhatsApp Burger Films",
    canonicalUrl: "https://www.burgerfilms.com.br/contato",
    ogImage: "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ContactPage",
          "@id": "https://www.burgerfilms.com.br/contato/#webpage",
          "url": "https://www.burgerfilms.com.br/contato",
          "name": "Contato e Localização | Burger Films Pub & Delivery",
          "description": "Canais de contato oficial, telefone e localização das nossas duas unidades em Penha - SC."
        }
      ]
    }
  },
  "unidade-alfredo": {
    title: "Unidade Alfredo Brunetti | Burger Films Perto do Beto Carrero",
    description: "Visite nossa unidade matriz ao lado do Parque Beto Carrero World. Hambúrguer artesanal, rodízio de mini-burgers e decoração de cinema para toda a família em Penha - SC.",
    keywords: "hamburgueria perto do Beto Carrero, Unidade Alfredo Brunetti Penha, rodízio de hambúrguer perto do Beto Carrero, pub Penha SC",
    canonicalUrl: "https://www.burgerfilms.com.br/unidade-alfredo",
    ogImage: "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          ...baseRestaurantSchema,
          "@id": "https://www.burgerfilms.com.br/unidade-alfredo/#restaurant",
          "name": "Burger Films - Unidade Alfredo Brunetti",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Alfredo Brunetti, 631",
            "addressLocality": "Penha",
            "addressRegion": "SC",
            "postalCode": "88385-000",
            "addressCountry": "BR"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "18:00",
              "closes": "23:30"
            }
          ]
        }
      ]
    }
  },
  "unidade-eugenio": {
    title: "Unidade Eugênio Krause | Burger Films no Centro da Armação",
    description: "Visite nossa unidade na Av. Eugênio Krause no centro de Armação, Penha - SC. Saboreie os melhores blends temáticos em um ambiente aconchegante de cinema.",
    keywords: "hamburgueria centro da armação, Unidade Eugenio Krause Penha, pub Penha SC, burger Penha",
    canonicalUrl: "https://www.burgerfilms.com.br/unidade-eugenio",
    ogImage: "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          ...baseRestaurantSchema,
          "@id": "https://www.burgerfilms.com.br/unidade-eugenio/#restaurant",
          "name": "Burger Films - Unidade Eugênio Krause",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Eugênio Krause, 3045",
            "addressLocality": "Penha",
            "addressRegion": "SC",
            "postalCode": "88385-000",
            "addressCountry": "BR"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "18:00",
              "closes": "23:30"
            }
          ]
        }
      ]
    }
  },
  "sitemap": {
    title: "Mapa do Site | Burger Films Pub & Delivery",
    description: "O roteiro completo do nosso site. Encontre todas as páginas de unidades, bairros atendidos pelo nosso delivery de hambúrguer, cardápio e contatos.",
    keywords: "sitemap Burger Films, mapa do site hamburgueria, guia do site Penha SC",
    canonicalUrl: "https://www.burgerfilms.com.br/sitemap",
    ogImage: "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.burgerfilms.com.br/sitemap/#webpage",
          "url": "https://www.burgerfilms.com.br/sitemap",
          "name": "Mapa do Site | Burger Films Pub & Delivery"
        }
      ]
    }
  }
};

export const NEIGHBORHOODS: NeighborhoodData[] = [
  {
    slug: "bairro-centro",
    name: "Centro",
    description: "Delivery rápido de lanches temáticos, combos especiais e pizzas artesanais no Centro de Penha. O sabor digno de Oscar entregue no conforto do seu lar.",
    distanceToBetoCarrero: "Apenas 4 km de distância, cerca de 8 minutos de carro.",
    localInfo: "O Centro é o núcleo administrativo e comercial de Penha, com fluxo vibrante o ano todo. Nosso sistema de entregas atende toda a região central com rapidez máxima, mantendo seus hambúrgueres sempre suculentos e batatas fritas super crocantes!",
    deliveryTime: "30 a 45 min",
    deliveryFee: "R$ 5,00",
    seo: {
      title: "Hambúrguer Delivery Centro Penha SC | Burger Films Pub",
      description: "Procurando o melhor delivery de hambúrguer artesanal no Centro de Penha, SC? Peça na Burger Films! Blends premium de cinema, entrega rápida e combos de tirar o fôlego.",
      keywords: "delivery de hambúrguer centro Penha, hamburgueria Centro Penha SC, pedir lanche Centro Penha, pizza centro Penha SC",
      canonicalUrl: "https://www.burgerfilms.com.br/bairro-centro",
      ogImage: "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://www.burgerfilms.com.br/bairro-centro/#localbusiness",
            "name": "Burger Films Delivery - Centro Penha SC",
            "image": "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
            "telephone": "+5547992155989",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Penha",
              "addressRegion": "SC",
              "addressCountry": "BR",
              "streetAddress": "Centro"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Centro, Penha - SC"
            }
          }
        ]
      }
    }
  },
  {
    slug: "bairro-armacao",
    name: "Armação",
    description: "Delivery de hambúrguer premium e pizzas de cinema na Armação em Penha. Localizado pertinho do Beto Carrero, atendendo turistas, hotéis e moradores.",
    distanceToBetoCarrero: "Localizado de 1 a 3 km de distância, de 2 a 5 minutos.",
    localInfo: "O bairro Armação do Itapocoroy é o principal polo turístico de Penha, onde ficam nossas duas unidades. Entregamos em pousadas, hotéis, condomínios e residências com embalagens térmicas especiais que preservam a temperatura ideal!",
    deliveryTime: "25 a 40 min",
    deliveryFee: "R$ 4,00",
    seo: {
      title: "Delivery de Hambúrguer Armação Penha SC | Burger Films",
      description: "O melhor hambúrguer artesanal na Armação em Penha, SC. Peça delivery ou visite nossas unidades perto do Beto Carrero. Sabor de cinema quente na sua mesa!",
      keywords: "hamburgueria Armação Penha, delivery Armação Penha SC, hambúrguer perto do Beto Carrero, pedir pizza Armação Penha",
      canonicalUrl: "https://www.burgerfilms.com.br/bairro-armacao",
      ogImage: "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://www.burgerfilms.com.br/bairro-armacao/#localbusiness",
            "name": "Burger Films Delivery - Armação Penha SC",
            "image": "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
            "telephone": "+5547992155989",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Penha",
              "addressRegion": "SC",
              "addressCountry": "BR",
              "streetAddress": "Armação"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Armação, Penha - SC"
            }
          }
        ]
      }
    }
  },
  {
    slug: "bairro-praia-grande",
    name: "Praia Grande",
    description: "O melhor hambúrguer artesanal de cinema entregue na Praia Grande, Penha. Saboreie nossos blends exclusivos curtindo a brisa do mar ou em sua residência.",
    distanceToBetoCarrero: "Aproximadamente 5 km de distância, cerca de 10 minutos de carro.",
    localInfo: "Praia Grande é internacionalmente conhecida pela sua natureza preservada e ondas perfeitas. Atendemos toda a orla e ruas internas com entrega ultra ágil para você repor as energias com estilo após um dia de praia ou surf.",
    deliveryTime: "35 a 50 min",
    deliveryFee: "R$ 6,00",
    seo: {
      title: "Delivery de Hambúrguer Praia Grande Penha SC | Burger Films",
      description: "Hambúrguer artesanal premium na Praia Grande, Penha, SC. Delivery de lanches temáticos, porções e pizzas de cinema. Peça online agora mesmo!",
      keywords: "delivery Praia Grande Penha, hamburgueria Praia Grande SC, lanches Praia Grande Penha, pizza Praia Grande Penha",
      canonicalUrl: "https://www.burgerfilms.com.br/bairro-praia-grande",
      ogImage: "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://www.burgerfilms.com.br/bairro-praia-grande/#localbusiness",
            "name": "Burger Films Delivery - Praia Grande Penha SC",
            "image": "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
            "telephone": "+5547992155989",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Penha",
              "addressRegion": "SC",
              "addressCountry": "BR",
              "streetAddress": "Praia Grande"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Praia Grande, Penha - SC"
            }
          }
        ]
      }
    }
  },
  {
    slug: "bairro-gravata",
    name: "Gravatá",
    description: "Delivery de hambúrguer artesanal premium e combos de cinema no Gravatá, Penha. Rapidez incrível e muito sabor na divisa com Navegantes.",
    distanceToBetoCarrero: "Cerca de 6 km de distância, aproximadamente 12 minutos de carro.",
    localInfo: "O Gravatá é um dos bairros que mais cresce em Penha, excelente para caminhadas na areia e lazer. Nosso delivery chega super rápido com batatas fritas sequinhas, maionese artesanal e refrigerante trincando de gelado.",
    deliveryTime: "35 a 50 min",
    deliveryFee: "R$ 7,00",
    seo: {
      title: "Hambúrguer Delivery Gravatá Penha SC | Burger Films",
      description: "Quer hambúrguer artesanal suculento no Gravatá em Penha, SC? A Burger Films entrega lanches de cinema super quentes. Faça seu pedido pelo WhatsApp!",
      keywords: "delivery Gravata Penha, hamburgueria Gravata Penha SC, pedir hambúrguer Gravata, pizza Gravata Penha",
      canonicalUrl: "https://www.burgerfilms.com.br/bairro-gravata",
      ogImage: "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://www.burgerfilms.com.br/bairro-gravata/#localbusiness",
            "name": "Burger Films Delivery - Gravatá Penha SC",
            "image": "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
            "telephone": "+5547992155989",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Penha",
              "addressRegion": "SC",
              "addressCountry": "BR",
              "streetAddress": "Gravatá"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Gravatá, Penha - SC"
            }
          }
        ]
      }
    }
  },
  {
    slug: "bairro-santa-lidia",
    name: "Santa Lídia",
    description: "Atendimento completo e delivery na tradicional região de Santa Lídia, Penha. Sabor de cinema e qualidade inigualável perto da entrada de Penha.",
    distanceToBetoCarrero: "Apenas 3 km de distância, cerca de 5 minutos da entrada do parque.",
    localInfo: "Santa Lídia é o bairro que acolhe os visitantes vindos da rodovia BR-101. Oferecemos entrega expressa para moradores, chácaras, sítios e pousadas charmosas da região, levando lanches incríveis com rapidez cinematográfica.",
    deliveryTime: "30 a 45 min",
    deliveryFee: "R$ 5,00",
    seo: {
      title: "Delivery de Hambúrguer Santa Lídia Penha SC | Burger Films",
      description: "Hambúrguer de cinema e pizzas artesanais na Santa Lídia, Penha, SC. O delivery mais rápido, confiável e saboroso da região. Peça pelo WhatsApp!",
      keywords: "delivery Santa Lidia Penha, hamburgueria Santa Lidia Penha, lanches Santa Lidia, pizza Santa Lidia Penha",
      canonicalUrl: "https://www.burgerfilms.com.br/bairro-santa-lidia",
      ogImage: "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://www.burgerfilms.com.br/bairro-santa-lidia/#localbusiness",
            "name": "Burger Films Delivery - Santa Lídia Penha SC",
            "image": "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
            "telephone": "+5547992155989",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Penha",
              "addressRegion": "SC",
              "addressCountry": "BR",
              "streetAddress": "Santa Lídia"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Santa Lídia, Penha - SC"
            }
          }
        ]
      }
    }
  },
  {
    slug: "bairro-sao-cristovao",
    name: "São Cristóvão",
    description: "Hambúrguer artesanal, combos imperdíveis e porções de cinema entregues no São Cristóvão, Penha. Peça e junte a família para um verdadeiro banquete.",
    distanceToBetoCarrero: "Cerca de 5 km de distância, aproximadamente 10 minutos de carro.",
    localInfo: "São Cristóvão é um bairro super familiar e residencial de Penha, lar de muitos clientes fiéis que amam nossos combos especiais de cinema e as famosas porções como o Edward Mãos de Palito.",
    deliveryTime: "30 a 45 min",
    deliveryFee: "R$ 5,00",
    seo: {
      title: "Delivery de Hambúrguer São Cristóvão Penha SC | Burger Films",
      description: "Lanches de cinema e combos de hambúrguer artesanal no São Cristóvão, Penha, SC. Peça pelo delivery e receba com total rapidez, carinho e segurança.",
      keywords: "delivery Sao Cristovao Penha, pedir lanche Sao Cristovao, hamburgueria Sao Cristovao SC, pizza Sao Cristovao Penha",
      canonicalUrl: "https://www.burgerfilms.com.br/bairro-sao-cristovao",
      ogImage: "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://www.burgerfilms.com.br/bairro-sao-cristovao/#localbusiness",
            "name": "Burger Films Delivery - São Cristóvão Penha SC",
            "image": "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
            "telephone": "+5547992155989",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Penha",
              "addressRegion": "SC",
              "addressCountry": "BR",
              "streetAddress": "São Cristóvão"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "São Cristóvão, Penha - SC"
            }
          }
        ]
      }
    }
  },
  {
    slug: "bairro-sao-miguel",
    name: "Praia de São Miguel",
    description: "Delivery de lanches temáticos e pizzas quentinhas na Praia de São Miguel, Penha. Uma combinação deliciosa que une a brisa caiçara ao sabor do cinema.",
    distanceToBetoCarrero: "Aproximadamente 7 km de distância, cerca de 14 minutos de carro.",
    localInfo: "A Praia de São Miguel é um recanto de pescadores super tranquilo e charmoso. Atendemos toda a sua extensão, levando a comodidade do delivery de lanches artesanais até a orla mais aconchegante da cidade.",
    deliveryTime: "40 a 55 min",
    deliveryFee: "R$ 8,00",
    seo: {
      title: "Delivery de Hambúrguer Praia de São Miguel Penha SC | Burger Films",
      description: "Hambúrguer artesanal e porções quentinhas na Praia de São Miguel, Penha, SC. Peça pelo nosso delivery e aproveite um espetáculo de sabor.",
      keywords: "delivery Sao Miguel Penha, hamburgueria Sao Miguel Penha SC, lanches Sao Miguel, pizza Sao Miguel Penha",
      canonicalUrl: "https://www.burgerfilms.com.br/bairro-sao-miguel",
      ogImage: "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
      structuredData: {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": "https://www.burgerfilms.com.br/bairro-sao-miguel/#localbusiness",
            "name": "Burger Films Delivery - Praia de São Miguel Penha SC",
            "image": "https://img.burgerfilms.com.br/meu-churros-favorito.webp",
            "telephone": "+5547992155989",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Penha",
              "addressRegion": "SC",
              "addressCountry": "BR",
              "streetAddress": "Praia de São Miguel"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Praia de São Miguel, Penha - SC"
            }
          }
        ]
      }
    }
  }
];
