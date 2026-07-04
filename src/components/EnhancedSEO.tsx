import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { GLOBAL_SEO_DATA, NEIGHBORHOODS, SEOMetadata } from '../seoData';

interface EnhancedSEOProps {
  view: string;
}

export default function EnhancedSEO({ view }: EnhancedSEOProps) {
  // Find metadata for current page view
  let meta: SEOMetadata | undefined = GLOBAL_SEO_DATA[view];

  // If view is a neighborhood slug (e.g. 'bairro-centro'), find its SEO
  if (!meta && view.startsWith('bairro-')) {
    const neighborhood = NEIGHBORHOODS.find(n => n.slug === view);
    if (neighborhood) {
      meta = neighborhood.seo;
    }
  }

  // Fallback to home if page metadata is not found
  if (!meta) {
    meta = GLOBAL_SEO_DATA['home'];
  }

  // Register Service Worker in browser environment only
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((reg) => {
            console.log('Service Worker registrado com sucesso:', reg.scope);
          })
          .catch((err) => {
            console.error('Falha ao registrar o Service Worker:', err);
          });
      });
    }
  }, []);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={meta.canonicalUrl} />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#1A1A1A" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.ogImage} />
      <meta property="og:url" content={meta.canonicalUrl} />
      <meta property="og:site_name" content="Burger Films Pub & Delivery" />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.ogImage} />

      {/* Resource Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://img.burgerfilms.com.br" />
      
      {/* Font Preloads and Optimization */}
      <link 
        rel="preload" 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" 
        as="style" 
      />
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap" 
      />

      {/* Critical CSS Reset inline optimization */}
      <style>{`
        /* Critical CSS reset for fast FCP */
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background-color: #F8F5F0;
          color: #1A1A1A;
          -webkit-font-smoothing: antialiased;
        }
        /* Custom scrollbar for desktop design parity */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        ::-webkit-scrollbar-thumb {
          background: #1A1A1A;
          border-radius: 9999px;
        }
      `}</style>

      {/* Structured Data completos JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(meta.structuredData)}
      </script>
    </Helmet>
  );
}
