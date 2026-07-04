import fs from 'fs';
import path from 'path';

// Define the absolute list of routes to pre-render
const ROUTES = [
  {
    path: 'quem-somos',
    title: 'Quem Somos | Burger Films - Luz, Câmera e Sabor em Penha - SC',
    description: 'Conheça a história cinematográfica por trás da Burger Films Pub & Delivery. Descubra como transformamos blends artesanais em verdadeiras experiências dignas de Oscar.',
    keywords: 'hamburgueria temática Penha, história Burger Films, pub temático Penha SC, gastronomia Penha',
    canonical: 'https://www.burgerfilms.com.br/quem-somos',
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AboutPage",
          "@id": "https://www.burgerfilms.com.br/quem-somos/#webpage",
          "url": "https://www.burgerfilms.com.br/quem-somos",
          "name": "Quem Somos | Burger Films Pub & Delivery",
          "description": "Conheça a história da melhor hamburgueria temática de Penha - SC"
        }
      ]
    }
  },
  {
    path: 'contato',
    title: 'Contato e Localização | Burger Films Pub & Delivery em Penha - SC',
    description: 'Fale com o nosso elenco! Entre em contato via WhatsApp, tire suas dúvidas ou nos faça uma visita em nossas unidades perto do Beto Carrero ou no Centro da Armação.',
    keywords: 'contato Burger Films, telefone hamburgueria Penha, endereço Burger Films, reservas Penha SC, WhatsApp Burger Films',
    canonical: 'https://www.burgerfilms.com.br/contato',
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "ContactPage",
          "@id": "https://www.burgerfilms.com.br/contato/#webpage",
          "url": "https://www.burgerfilms.com.br/contato",
          "name": "Contato e Localização | Burger Films Pub & Delivery"
        }
      ]
    }
  },
  {
    path: 'sitemap',
    title: 'Mapa do Site | Burger Films Pub & Delivery',
    description: 'O roteiro completo do nosso site. Encontre todas as páginas de unidades, bairros atendidos pelo nosso delivery de hambúrguer, cardápio e contatos.',
    keywords: 'sitemap Burger Films, mapa do site hamburgueria, guia do site Penha SC',
    canonical: 'https://www.burgerfilms.com.br/sitemap',
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
  },
  {
    path: 'unidade-alfredo',
    title: 'Unidade Alfredo Brunetti | Burger Films Perto do Beto Carrero',
    description: 'Visite nossa unidade matriz ao lado do Parque Beto Carrero World. Hambúrguer artesanal, rodízio de mini-burgers e decoração de cinema para toda a família em Penha - SC.',
    keywords: 'hamburgueria perto do Beto Carrero, Unidade Alfredo Brunetti Penha, rodízio de hambúrguer perto do Beto Carrero',
    canonical: 'https://www.burgerfilms.com.br/unidade-alfredo',
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Restaurant",
          "@id": "https://www.burgerfilms.com.br/unidade-alfredo/#restaurant",
          "name": "Burger Films - Unidade Alfredo Brunetti",
          "telephone": "+5547992155989",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Alfredo Brunetti, 631",
            "addressLocality": "Penha",
            "addressRegion": "SC",
            "postalCode": "88385-000",
            "addressCountry": "BR"
          }
        }
      ]
    }
  },
  {
    path: 'unidade-eugenio',
    title: 'Unidade Eugênio Krause | Burger Films no Centro da Armação',
    description: 'Visite nossa unidade na Av. Eugênio Krause no centro de Armação, Penha - SC. Saboreie os melhores blends temáticos em um ambiente aconchegante de cinema.',
    keywords: 'hamburgueria centro da armação, Unidade Eugenio Krause Penha, pub Penha SC',
    canonical: 'https://www.burgerfilms.com.br/unidade-eugenio',
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Restaurant",
          "@id": "https://www.burgerfilms.com.br/unidade-eugenio/#restaurant",
          "name": "Burger Films - Unidade Eugênio Krause",
          "telephone": "+5547992155989",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Eugênio Krause, 3045",
            "addressLocality": "Penha",
            "addressRegion": "SC",
            "postalCode": "88385-000",
            "addressCountry": "BR"
          }
        }
      ]
    }
  },
  {
    path: 'bairro-centro',
    title: 'Hambúrguer Delivery Centro Penha SC | Burger Films Pub',
    description: 'Procurando o melhor delivery de hambúrguer artesanal no Centro de Penha, SC? Peça na Burger Films! Blends premium de cinema, entrega rápida e combos de tirar o fôlego.',
    keywords: 'delivery de hambúrguer centro Penha, hamburgueria Centro Penha SC, pedir lanche Centro Penha',
    canonical: 'https://www.burgerfilms.com.br/bairro-centro',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Burger Films Delivery - Centro Penha SC",
      "telephone": "+5547992155989",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Penha",
        "addressRegion": "SC",
        "streetAddress": "Centro"
      }
    }
  },
  {
    path: 'bairro-armacao',
    title: 'Delivery de Hambúrguer Armação Penha SC | Burger Films',
    description: 'O melhor hambúrguer artesanal na Armação em Penha, SC. Peça delivery ou visite nossas unidades perto do Beto Carrero. Sabor de cinema quente na sua mesa!',
    keywords: 'hamburgueria Armação Penha, delivery Armação Penha SC, hambúrguer perto do Beto Carrero',
    canonical: 'https://www.burgerfilms.com.br/bairro-armacao',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Burger Films Delivery - Armação Penha SC",
      "telephone": "+5547992155989",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Penha",
        "addressRegion": "SC",
        "streetAddress": "Armação"
      }
    }
  },
  {
    path: 'bairro-praia-grande',
    title: 'Delivery de Hambúrguer Praia Grande Penha SC | Burger Films',
    description: 'Hambúrguer artesanal premium na Praia Grande, Penha, SC. Delivery de lanches temáticos, porções e pizzas de cinema. Peça online agora mesmo!',
    keywords: 'delivery Praia Grande Penha, hamburgueria Praia Grande SC, lanches Praia Grande Penha',
    canonical: 'https://www.burgerfilms.com.br/bairro-praia-grande',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Burger Films Delivery - Praia Grande Penha SC",
      "telephone": "+5547992155989",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Penha",
        "addressRegion": "SC",
        "streetAddress": "Praia Grande"
      }
    }
  },
  {
    path: 'bairro-gravata',
    title: 'Hambúrguer Delivery Gravatá Penha SC | Burger Films',
    description: 'Quer hambúrguer artesanal suculento no Gravatá em Penha, SC? A Burger Films entrega lanches de cinema super quentes. Faça seu pedido pelo WhatsApp!',
    keywords: 'delivery Gravata Penha, hamburgueria Gravata Penha SC, pedir hambúrguer Gravata',
    canonical: 'https://www.burgerfilms.com.br/bairro-gravata',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Burger Films Delivery - Gravatá Penha SC",
      "telephone": "+5547992155989",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Penha",
        "addressRegion": "SC",
        "streetAddress": "Gravatá"
      }
    }
  },
  {
    path: 'bairro-santa-lidia',
    title: 'Delivery de Hambúrguer Santa Lídia Penha SC | Burger Films',
    description: 'Hambúrguer de cinema e pizzas artesanais na Santa Lídia, Penha, SC. O delivery mais rápido, confiável e saboroso da região. Peça pelo WhatsApp!',
    keywords: 'delivery Santa Lidia Penha, hamburgueria Santa Lidia Penha, lanches Santa Lidia',
    canonical: 'https://www.burgerfilms.com.br/bairro-santa-lidia',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Burger Films Delivery - Santa Lídia Penha SC",
      "telephone": "+5547992155989",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Penha",
        "addressRegion": "SC",
        "streetAddress": "Santa Lídia"
      }
    }
  },
  {
    path: 'bairro-sao-cristovao',
    title: 'Delivery de Hambúrguer São Cristóvão Penha SC | Burger Films',
    description: 'Lanches de cinema e combos de hambúrguer artesanal no São Cristóvão, Penha, SC. Peça pelo delivery e receba com total rapidez, carinho e segurança.',
    keywords: 'delivery Sao Cristovao Penha, pedir lanche Sao Cristovao, hamburgueria Sao Cristovao SC',
    canonical: 'https://www.burgerfilms.com.br/bairro-sao-cristovao',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Burger Films Delivery - São Cristóvão Penha SC",
      "telephone": "+5547992155989",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Penha",
        "addressRegion": "SC",
        "streetAddress": "São Cristóvão"
      }
    }
  },
  {
    path: 'bairro-sao-miguel',
    title: 'Delivery de Hambúrguer Praia de São Miguel Penha SC | Burger Films',
    description: 'Hambúrguer artesanal e porções quentinhas na Praia de São Miguel, Penha, SC. Peça pelo nosso delivery e aproveite um espetáculo de sabor.',
    keywords: 'delivery Sao Miguel Penha, hamburgueria Sao Miguel Penha SC, lanches Sao Miguel',
    canonical: 'https://www.burgerfilms.com.br/bairro-sao-miguel',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Burger Films Delivery - Praia de São Miguel Penha SC",
      "telephone": "+5547992155989",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Penha",
        "addressRegion": "SC",
        "streetAddress": "Praia de São Miguel"
      }
    }
  }
];

function runPrerender() {
  const distDir = path.join(process.cwd(), 'dist');
  const templatePath = path.join(distDir, 'index.html');

  if (!fs.existsSync(templatePath)) {
    console.error(`Erro: Arquivo modelo de build não encontrado em ${templatePath}`);
    console.error('Por favor, execute "npm run build" antes de rodar o pre-render.');
    process.exit(1);
  }

  const templateContent = fs.readFileSync(templatePath, 'utf-8');

  console.log(`Iniciando pre-renderização para ${ROUTES.length} rotas...`);

  ROUTES.forEach((route) => {
    // Determine subdirectory path inside dist/
    const routeDir = path.join(distDir, route.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }

    // Build optimized meta and schema strings
    const titleTag = `<title>${route.title}</title>`;
    const descriptionMeta = `<meta name="description" content="${route.description}" />`;
    const keywordsMeta = `<meta name="keywords" content="${route.keywords}" />`;
    const canonicalLink = `<link rel="canonical" href="${route.canonical}" />`;
    const schemaScript = `<script type="application/ld+json">${JSON.stringify(route.structuredData)}</script>`;

    // Resource hints and critical font optimizations
    const resourceHints = `
    <!-- Pre-rendered Optimization Resource Hints -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
    <link rel="dns-prefetch" href="https://img.burgerfilms.com.br" />
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" as="style" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" />
    `;

    // Perform replacements inside the head of the index.html template
    let prerenderedHTML = templateContent;

    // Replace Title
    prerenderedHTML = prerenderedHTML.replace(
      /<title>.*?<\/title>/gi,
      titleTag
    );

    // Replace Description
    prerenderedHTML = prerenderedHTML.replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/?>/gi,
      descriptionMeta
    );

    // Replace Canonical Link
    prerenderedHTML = prerenderedHTML.replace(
      /<link\s+rel="canonical"\s+href=".*?"\s*\/?>/gi,
      canonicalLink
    );

    // Replace or Inject Keywords and Schema (we append them to the beginning of the head)
    const injectedHeadElements = `${keywordsMeta}\n    ${schemaScript}\n    ${resourceHints}`;
    prerenderedHTML = prerenderedHTML.replace(
      '<head>',
      `<head>\n    ${injectedHeadElements}`
    );

    // Write final customized HTML to subpage directory
    const outputFilePath = path.join(routeDir, 'index.html');
    fs.writeFileSync(outputFilePath, prerenderedHTML, 'utf-8');
    console.log(`  ✓ Rota pre-renderizada: /${route.path} -> ${outputFilePath}`);
  });

  console.log('Pre-renderização concluída com sucesso absoluto!');
}

runPrerender();
