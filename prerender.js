import {NEW_BLOG_POSTS,getBlogPostForView} from './src/blogArticles.ts';
import fs from 'node:fs';
import path from 'node:path';
import { GLOBAL_SEO_DATA, NEIGHBORHOODS } from './src/seoData.ts';
import { getPageMetadata } from './src/pageMetadata.ts';

const dist = path.resolve('dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const routes = [...Object.keys(GLOBAL_SEO_DATA), ...NEIGHBORHOODS.map(item => item.slug), 'cardapio-imprimir', ...NEW_BLOG_POSTS.map(p=>'blog/'+p.slug)];

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
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    ...(view === 'home' ? ['<link rel="preload" as="image" href="/fun-burger-halloween.webp" fetchpriority="high">'] : [])
  ];
  html = html.replace('</head>', () => `${tags.join('\n')}\n</head>`);
  if(post){
    const readable=`<main style="max-width:780px;margin:4rem auto;padding:1rem;font:1rem/1.7 system-ui"><a href="/blog">Voltar ao blog</a><article><h1>${escape(post.title)}</h1><p>${escape(post.excerpt)}</p><img style="max-width:100%;height:auto" decoding="async" src="${escape(post.image)}" alt="${escape(post.imageAlt)}">${post.content.map(p=>`<p>${escape(p)}</p>`).join('')}<h2>Links e fontes</h2><ul>${post.links.map(([t,url])=>`<li><a href="${escape(url)}">${escape(t)}</a></li>`).join('')}</ul></article></main>`;
    html=html.replace(/<div id="root"><\/div>/,()=>'<div id="root">'+readable+'</div>');
  }
  const directory = view === 'home' ? dist : path.join(dist, view);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), html);
  console.log(`Generated metadata: ${view}`);
}
