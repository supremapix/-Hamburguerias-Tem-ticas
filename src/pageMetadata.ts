import {getBlogPostForView} from './blogArticles';
import { BF_ORIGIN, TRAVEL_HUB, getTravelGuide } from './travelGuides';
import { GLOBAL_SEO_DATA, NEIGHBORHOODS, type SEOMetadata } from './seoData';

// The build and client use one source of metadata. Delivery areas are not branches.
export function getPageMetadata(view: string): SEOMetadata {
  const post=getBlogPostForView(view);
  if(post){
    const origin='https://www.burgerfilms.com.br';
    const canonicalUrl=origin+'/blog/'+post.slug;
    const image=post.image.startsWith('/')?origin+post.image:post.image;
    return {...GLOBAL_SEO_DATA.blog,title:post.title+' | Burger Films',description:post.excerpt,canonicalUrl,ogImage:image,keywords:'Burger Films, gastronomia em Penha, Penha SC, Armação', structuredData:{'@context':'https://schema.org','@graph':[{'@type':'BlogPosting','@id':canonicalUrl+'#article',url:canonicalUrl,headline:post.title,description:post.excerpt,datePublished:post.dateIso,image,mainEntityOfPage:canonicalUrl,inLanguage:'pt-BR',publisher:{'@type':'Organization',name:'Burger Films',url:origin+'/'}},{'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:origin+'/'},{'@type':'ListItem',position:2,name:'Blog',item:origin+'/blog'},{'@type':'ListItem',position:3,name:post.title,item:canonicalUrl}]}]}};
  }
  const guide = getTravelGuide(view);
  if (guide || view === TRAVEL_HUB) {
    const canonicalUrl = BF_ORIGIN + '/' + view;
    const heading = guide?.title ?? 'Guia do Beto Carrero e Burger Films em Penha';
    const description = guide?.description ?? 'Roteiros para visitar o Beto Carrero World e comer em Penha. Confira os endereços da Burger Films e veja a unidade da Armação em vídeo.';
    return {
      ...GLOBAL_SEO_DATA.home,
      title: heading + ' | Burger Films',
      description, canonicalUrl,
      keywords: 'Beto Carrero World, Penha SC, Armação, Burger Films',
      ogImage: 'https://img.supremasite.com.br/burguer/img-og.webp',
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          { '@type': 'WebPage', '@id': canonicalUrl + '#webpage', url: canonicalUrl, name: heading, description, inLanguage: 'pt-BR' },
          { '@type': 'BreadcrumbList', itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: BF_ORIGIN + '/' },
            { '@type': 'ListItem', position: 2, name: 'Guia Beto Carrero', item: BF_ORIGIN + '/' + TRAVEL_HUB },
            ...(guide ? [{ '@type': 'ListItem', position: 3, name: guide.origin, item: canonicalUrl }] : [])
          ] }
        ]
      }
    };
  }
  if (view === 'cardapio-imprimir') {
    return { ...GLOBAL_SEO_DATA.home, title: 'Cardápio para imprimir | Burger Films', canonicalUrl: 'https://www.burgerfilms.com.br/cardapio-imprimir' };
  }
  const neighborhood = NEIGHBORHOODS.find(item => item.slug === view);
  const original = neighborhood?.seo ?? GLOBAL_SEO_DATA[view] ?? GLOBAL_SEO_DATA['not-found'];
  const meta = { ...original, ogImage: 'https://img.supremasite.com.br/burguer/img-og.webp' };
  if (view === 'home') {
    meta.title = 'Burger Films | Hamburgueria em Penha perto do Beto Carrero';
    meta.description = 'Conheça a Burger Films, hamburgueria temática em Penha SC. Uma opção para turistas, famílias e visitantes do Beto Carrero World. Confira unidades e cardápio.';
    meta.structuredData = {
      '@context': 'https://schema.org',
      '@graph': [
        ...GLOBAL_SEO_DATA['unidade-alfredo'].structuredData['@graph'],
        ...GLOBAL_SEO_DATA['unidade-eugenio'].structuredData['@graph'],
        { '@type': 'WebSite', '@id': `${meta.canonicalUrl}#website`, url: meta.canonicalUrl, name: 'Burger Films', inLanguage: 'pt-BR' }
      ]
    };
  }
  if (neighborhood) {
    meta.structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${meta.canonicalUrl}#webpage`,
      url: meta.canonicalUrl,
      name: meta.title,
      description: meta.description,
      about: {
        '@type': 'Service',
        name: `Delivery Burger Films — ${neighborhood.name}`,
        serviceType: 'Delivery de alimentos',
        areaServed: { '@type': 'Place', name: `${neighborhood.name}, Penha, SC` },
        provider: { '@type': 'Restaurant', name: 'Burger Films', url: 'https://www.burgerfilms.com.br/', telephone: '+5547992155989' }
      }
    };
  }
  // Use the established brand artwork instead of the dessert photo previously
  // assigned to every restaurant's logo and image.
  if (meta.structuredData['@graph']) {
    meta.structuredData = {
      ...meta.structuredData,
      '@graph': meta.structuredData['@graph'].map((entity: Record<string, unknown>) =>
        entity['@type'] === 'Restaurant'
          ? { ...entity, image: meta.ogImage, logo: 'https://www.burgerfilms.com.br/android-chrome-512x512.png' }
          : entity
      )
    };
  }
  return meta;
}
