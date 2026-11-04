import assert from 'node:assert/strict';
import fs from 'node:fs';
import { JSDOM } from 'jsdom';
import { GLOBAL_SEO_DATA, NEIGHBORHOODS } from '../src/seoData';
import { getPageMetadata } from '../src/pageMetadata';

const routes = [...Object.keys(GLOBAL_SEO_DATA), ...NEIGHBORHOODS.map(item => item.slug), 'cardapio-imprimir'];
for (const route of routes) {
  const html = fs.readFileSync(`dist/${route === 'home' ? '' : `${route}/`}index.html`, 'utf8');
  const document = new JSDOM(html).window.document;
  const metadata = getPageMetadata(route);
  assert.equal(document.title, metadata.title, route);
  assert.equal(document.querySelector('meta[property="og:title"]')?.getAttribute('content'), metadata.title);
  assert.equal(document.querySelectorAll('meta[name="description"]').length, 1);
  assert.equal(document.querySelectorAll('meta[name="robots"]').length, 1);
  const schemas = document.querySelectorAll('script[type="application/ld+json"]');
  if (route === 'not-found') {
    assert.match(document.querySelector('meta[name="robots"]')!.getAttribute('content')!, /noindex/);
    assert.equal(document.querySelectorAll('link[rel="canonical"]').length, 0);
    assert.equal(schemas.length, 0);
  } else {
    assert.equal(document.querySelectorAll('link[rel="canonical"]').length, 1);
    assert.equal(document.querySelector('link[rel="canonical"]')?.getAttribute('href'), metadata.canonicalUrl);
    assert.equal(schemas.length, 1, route);
    assert.deepEqual(JSON.parse(schemas[0].textContent!), metadata.structuredData);
  }
  if (route.startsWith('bairro-')) {
    assert.equal(metadata.structuredData['@type'], 'WebPage');
    assert.equal(metadata.structuredData.about['@type'], 'Service');
    assert.equal(metadata.structuredData.about.address, undefined);
  }
  if (route === 'cardapio-imprimir') assert.match(document.querySelector('meta[name="robots"]')!.getAttribute('content')!, /noindex/);
}
const { redirects } = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
assert.equal(redirects.length, 3);
for (const redirect of redirects) {
  assert(redirect.permanent);
  assert(redirect.destination.startsWith('/bairro-'));
  assert(fs.existsSync(`dist${redirect.destination}/index.html`));
  assert(!redirects.some((other: { source: string }) => other.source === redirect.destination), 'Redirect chain');
}
console.log(`SEO checks passed for ${routes.length} routes and ${redirects.length} redirects.`);
