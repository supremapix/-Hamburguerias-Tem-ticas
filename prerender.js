import {NEW_BLOG_POSTS,getBlogPostForView} from './src/blogArticles.ts';
import fs from 'node:fs';
import path from 'node:path';
import { GLOBAL_SEO_DATA, NEIGHBORHOODS } from './src/seoData.ts';
import { getPageMetadata } from './src/pageMetadata.ts';
import { BRUNETTI_AGENDA_LABEL, SURPRISE_ARTICLE, SURPRISE_WHATSAPP, BURGER_INSTAGRAM } from './src/surpriseAgenda.ts';
import { TRAVEL_GUIDES, TRAVEL_HUB, NEIGHBORHOOD_VIDEO_NOTES, PARK_DIRECTIONS, PARK_LODGING, SHORT_URL, getTravelGuide, guidePath } from './src/travelGuides.ts';

const dist = path.resolve('dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const routes = [...Object.keys(GLOBAL_SEO_DATA), ...NEIGHBORHOODS.map(item => item.slug), 'cardapio-imprimir', ...NEW_BLOG_POSTS.map(p=>'blog/'+p.slug), TRAVEL_HUB, ...TRAVEL_GUIDES.map(guidePath)];

for (const view of routes) {
  const meta = getPageMetadata(view);
  const post=getBlogPostForView(view);
  const noindex = view === 'not-found' || view === 'cardapio-imprimir';
  // Helmet owns these tags after navigation, so static home data cannot persist.
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta\b[^>]*(?:name="(?:description|keywords|robots|twitter:[^"]+)"|property="og:[^"]+")[^>]*>/gi, '')
    .replace(/<link\b[^>]*rel="canonical"[^>]*>/gi, '')
    .replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');
  const tags = [
    `<title>${escape(meta.title)}</title>`,
    `<meta data-rh="true" name="description" content="${escape(meta.description)}">`,
    `<meta data-rh="true" name="keywords" content="${escape(meta.keywords)}">`,
    `<meta data-rh="true" name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}">`,
    ...(view === 'not-found' ? [] : [`<link data-rh="true" rel="canonical" href="${escape(meta.canonicalUrl)}">`]),
    ...Object.entries({ type: post?'article':'website', title: meta.title, description: meta.description, url: meta.canonicalUrl, image: meta.ogImage, locale: 'pt_BR', site_name: 'Burger Films Pub & Delivery' }).map(([key, value]) => `<meta data-rh="true" property="og:${key}" content="${escape(value)}">`),
    ...Object.entries({ card: 'summary_large_image', title: meta.title, description: meta.description, image: meta.ogImage }).map(([key, value]) => `<meta data-rh="true" name="twitter:${key}" content="${escape(value)}">`),
    ...(view === 'not-found' ? [] : [`<script data-rh="true" type="application/ld+json">${JSON.stringify(meta.structuredData).replaceAll('<', '\\u003c')}</script>`]),
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
  ];
  html = html.replace('</head>', () => `${tags.join('\n')}\n</head>`);
  if (view === 'home') {
    const agenda = `<main style="max-width:780px;margin:4rem auto;padding:1rem;font:1rem/1.7 system-ui"><h1>Hamburgueria temática em Penha, SC</h1><p>Conheça as unidades na Armação e confira o <a href="/guia-beto-carrero">guia do Beto Carrero</a>.</p><section id="agenda"><h2>${escape(BRUNETTI_AGENDA_LABEL)}</h2><p>Programação recorrente às sextas, sábados e domingos na unidade da Av. Alfredo Brunetti, 631, Armação. Horários e programação podem mudar.</p><ul><li><a href="${escape(SURPRISE_WHATSAPP)}">Consultar no WhatsApp oficial</a></li><li><a href="${BURGER_INSTAGRAM}">Instagram oficial</a></li><li><a href="${SURPRISE_ARTICLE}">Guia para planejar a visita</a></li></ul></section></main>`;
    html = html.replace(/<div id="root"><\/div>/, () => '<div id="root">' + agenda + '</div>');
  }
  if(post){
    const readable=`<main style="max-width:780px;margin:4rem auto;padding:1rem;font:1rem/1.7 system-ui"><a href="/blog">Voltar ao blog</a><article><h1>${escape(post.title)}</h1><p>${escape(post.excerpt)}</p><img style="max-width:100%;height:auto" decoding="async" src="${escape(post.image)}" alt="${escape(post.imageAlt)}">${post.content.map(p=>`<p>${escape(p)}</p>`).join('')}<h2>Links e fontes</h2><ul>${post.links.map(([t,url])=>`<li><a href="${escape(url)}">${escape(t)}</a></li>`).join('')}</ul></article></main>`;
    html=html.replace(/<div id="root"><\/div>/,()=>'<div id="root">'+readable+'</div>');
  }
  const guide = getTravelGuide(view);
  const neighborhood = NEIGHBORHOODS.find(n => n.slug === view);
  if (guide || view === TRAVEL_HUB || neighborhood) {
    const title = guide?.title ?? (neighborhood ? `Delivery no bairro ${neighborhood.name}, Penha` : 'Beto Carrero e Burger Films: monte seu roteiro em Penha');
    const note = neighborhood ? NEIGHBORHOOD_VIDEO_NOTES[view] : 'O vídeo apresenta a unidade da Av. Eugênio Krause, 3045, na Armação, em Penha. A Burger Films não fica dentro do parque.';
    const links = view === TRAVEL_HUB
      ? [...TRAVEL_GUIDES.map(g => `<li><a href="/${escape(guidePath(g))}">${escape(g.origin)}</a></li>`), ...NEIGHBORHOODS.map(n => `<li><a href="/${escape(n.slug)}">${escape(n.name)}</a></li>`)].join('')
      : `<li><a href="/${TRAVEL_HUB}">Roteiros de outras cidades</a></li>`;
    const sections = guide?.sections.map(([t, p]) => `<section><h2>${escape(t)}</h2><p>${escape(p)}</p></section>`).join('') ?? '';
    const readable = `<main style="max-width:780px;margin:4rem auto;padding:1rem;font:1rem/1.7 system-ui"><a href="/">Burger Films</a><h1>${escape(title)}</h1><p>${escape(neighborhood?.description ?? meta.description)}</p><section id="video-burger-films"><h2>Conheça a unidade da Av. Eugênio Krause</h2><p>${escape(note)}</p><p>Vídeo de Suprema Vídeos. <a href="${SHORT_URL}">Abrir no YouTube</a></p></section>${sections}<h2>Confira antes de sair</h2><ul>${links}<li><a href="/unidade-eugenio">Av. Eugênio Krause, 3045</a></li><li><a href="/unidade-alfredo">Av. Alfredo Brunetti, 631</a></li><li><a href="/#menu">Cardápio da Burger Films</a></li><li><a href="${PARK_DIRECTIONS}">Como chegar ao Beto Carrero (guia oficial)</a></li><li><a href="${PARK_LODGING}">Onde se hospedar (guia oficial Beto Carrero)</a></li></ul></main>`;
    html = html.replace(/<div id="root"><\/div>/, () => '<div id="root">' + readable + '</div>');
  }
  const directory = view === 'home' ? dist : path.join(dist, view);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), html);
  console.log(`Generated metadata: ${view}`);
}
