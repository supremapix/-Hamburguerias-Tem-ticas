import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 1. Create a beautiful, authentic Burger Films Cinema Icon SVG (512x512)
// Combines Film Clapperboard / Cinema Reel and Gourmet Burger in Burger Films brand colors (#FFB800, #1A1A1A, #E50914, #FDFBF7)
const BURGER_FILMS_FAVICON_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A1A1A"/>
      <stop offset="100%" stop-color="#0D0D0D"/>
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFD000"/>
      <stop offset="100%" stop-color="#FF9900"/>
    </linearGradient>
    <filter id="popShadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="4" dy="6" stdDeviation="4" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>

  <!-- Dark Cinema Background Circle with Yellow Pop Border -->
  <rect width="512" height="512" rx="112" fill="url(#bgGrad)"/>
  <rect x="16" y="16" width="480" height="480" rx="96" fill="none" stroke="#FFB800" stroke-width="20" stroke-dasharray="24 12"/>

  <!-- Cinema Reel / Clapperboard Stripes at Top -->
  <g transform="translate(60, 50)">
    <rect x="0" y="0" width="392" height="44" rx="10" fill="#262626" stroke="#000" stroke-width="6"/>
    <!-- Diagonal Stripes -->
    <path d="M20 0 L50 44 M90 0 L120 44 M160 0 L190 44 M230 0 L260 44 M300 0 L330 44 M370 0 L400 44" stroke="#FFB800" stroke-width="18" stroke-linecap="round"/>
  </g>

  <!-- Big Delicious Film's Burger in Center -->
  <g filter="url(#popShadow)" transform="translate(64, 110)">
    <!-- Top Bun (Golden Baked) -->
    <path d="M40 140 C40 40, 344 40, 344 140 Z" fill="url(#goldGrad)" stroke="#1A1A1A" stroke-width="12"/>
    <!-- Sesame Seeds -->
    <ellipse cx="140" cy="80" rx="8" ry="4" fill="#FFFFFF" transform="rotate(-15 140 80)"/>
    <ellipse cx="192" cy="65" rx="8" ry="4" fill="#FFFFFF" transform="rotate(5 192 65)"/>
    <ellipse cx="244" cy="80" rx="8" ry="4" fill="#FFFFFF" transform="rotate(20 244 80)"/>
    <ellipse cx="110" cy="110" rx="7" ry="4" fill="#FFFFFF" transform="rotate(-25 110 110)"/>
    <ellipse cx="165" cy="105" rx="7" ry="4" fill="#FFFFFF"/>
    <ellipse cx="225" cy="105" rx="7" ry="4" fill="#FFFFFF" transform="rotate(15 225 105)"/>
    <ellipse cx="275" cy="115" rx="7" ry="4" fill="#FFFFFF" transform="rotate(30 275 115)"/>

    <!-- Fresh Green Lettuce Wave -->
    <path d="M25 142 Q45 125, 70 142 T120 142 T170 142 T220 142 T270 142 T320 142 T360 142 L360 162 L25 162 Z" fill="#22C55E" stroke="#1A1A1A" stroke-width="10"/>

    <!-- Ripe Red Tomatoes -->
    <rect x="50" y="162" width="130" height="24" rx="12" fill="#EF4444" stroke="#1A1A1A" stroke-width="10"/>
    <rect x="204" y="162" width="130" height="24" rx="12" fill="#EF4444" stroke="#1A1A1A" stroke-width="10"/>

    <!-- Thick Juicy Angus Patty -->
    <rect x="30" y="186" width="324" height="48" rx="18" fill="#451A03" stroke="#1A1A1A" stroke-width="12"/>
    <!-- Grill Marks -->
    <line x1="90" y1="192" x2="110" y2="228" stroke="#1F0A02" stroke-width="8" stroke-linecap="round"/>
    <line x1="160" y1="192" x2="180" y2="228" stroke="#1F0A02" stroke-width="8" stroke-linecap="round"/>
    <line x1="230" y1="192" x2="250" y2="228" stroke="#1F0A02" stroke-width="8" stroke-linecap="round"/>
    <line x1="290" y1="192" x2="310" y2="228" stroke="#1F0A02" stroke-width="8" stroke-linecap="round"/>

    <!-- Melted Cheddar Dripping Cheese -->
    <path d="M36 215 L348 215 L330 245 Q310 265, 290 240 Q260 275, 230 235 Q190 280, 160 235 Q130 270, 100 235 Q80 260, 55 235 Z" fill="#FFB800" stroke="#1A1A1A" stroke-width="10"/>

    <!-- Bottom Bun -->
    <path d="M50 245 L334 245 C334 285, 290 300, 192 300 C94 300, 50 285, 50 245 Z" fill="url(#goldGrad)" stroke="#1A1A1A" stroke-width="12"/>
  </g>

  <!-- Stars & Film Ribbon at bottom -->
  <g transform="translate(86, 420)">
    <rect x="0" y="0" width="340" height="42" rx="21" fill="#FFB800" stroke="#000" stroke-width="8"/>
    <text x="170" y="28" font-family="'Impact', 'Arial Black', sans-serif" font-size="24" font-weight="900" text-anchor="middle" fill="#000" letter-spacing="3">BURGER FILMS</text>
  </g>
</svg>`;

// 2. Create the emulated Toy Story Sheriff Woody illustration SVG
// Character Woody: Cowboy hat, stitched brown brim, yellow/red plaid shirt, cowhide vest, sheriff star badge, friendly big smile
const SHERIFF_WOODY_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
  <defs>
    <linearGradient id="bgWoody" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A1A1A"/>
      <stop offset="100%" stop-color="#2D1810"/>
    </linearGradient>
    <linearGradient id="hatGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#8B4513"/>
      <stop offset="100%" stop-color="#5C2E0B"/>
    </linearGradient>
    <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFDFBA"/>
      <stop offset="100%" stop-color="#F5CBA7"/>
    </linearGradient>
    <linearGradient id="goldStar" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFE600"/>
      <stop offset="100%" stop-color="#D49A00"/>
    </linearGradient>
    <filter id="charShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="3" dy="6" stdDeviation="6" flood-color="#000000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <!-- Cinema Backdrop with Film Frame -->
  <rect width="600" height="600" rx="36" fill="url(#bgWoody)"/>
  
  <!-- Film Sprocket Holes along left and right -->
  <g fill="#FFB800" opacity="0.3">
    <rect x="15" y="30" width="25" height="20" rx="4"/>
    <rect x="15" y="80" width="25" height="20" rx="4"/>
    <rect x="15" y="130" width="25" height="20" rx="4"/>
    <rect x="15" y="180" width="25" height="20" rx="4"/>
    <rect x="15" y="230" width="25" height="20" rx="4"/>
    <rect x="15" y="280" width="25" height="20" rx="4"/>
    <rect x="15" y="330" width="25" height="20" rx="4"/>
    <rect x="15" y="380" width="25" height="20" rx="4"/>
    <rect x="15" y="430" width="25" height="20" rx="4"/>
    <rect x="15" y="480" width="25" height="20" rx="4"/>
    <rect x="15" y="530" width="25" height="20" rx="4"/>

    <rect x="560" y="30" width="25" height="20" rx="4"/>
    <rect x="560" y="80" width="25" height="20" rx="4"/>
    <rect x="560" y="130" width="25" height="20" rx="4"/>
    <rect x="560" y="180" width="25" height="20" rx="4"/>
    <rect x="560" y="230" width="25" height="20" rx="4"/>
    <rect x="560" y="280" width="25" height="20" rx="4"/>
    <rect x="560" y="330" width="25" height="20" rx="4"/>
    <rect x="560" y="380" width="25" height="20" rx="4"/>
    <rect x="560" y="430" width="25" height="20" rx="4"/>
    <rect x="560" y="480" width="25" height="20" rx="4"/>
    <rect x="560" y="530" width="25" height="20" rx="4"/>
  </g>

  <!-- Golden Stage Light Glow -->
  <circle cx="300" cy="280" r="230" fill="#FFB800" opacity="0.12"/>

  <!-- Character Group with Shadow -->
  <g filter="url(#charShadow)">
    
    <!-- Body / Yellow Checked Shirt -->
    <g id="shirt" transform="translate(0, 390)">
      <!-- Shoulders & Chest -->
      <path d="M160 100 L230 20 L370 20 L440 100 L450 210 L150 210 Z" fill="#FFE135" stroke="#1A1A1A" stroke-width="8"/>
      <!-- Red Plaid Lines -->
      <path d="M190 20 L190 210 M230 20 L230 210 M270 20 L270 210 M330 20 L330 210 M370 20 L370 210 M410 20 L410 210" stroke="#D32F2F" stroke-width="3" stroke-dasharray="8 6"/>
      <path d="M160 60 L440 60 M150 110 L450 110 M150 160 L450 160" stroke="#D32F2F" stroke-width="3" stroke-dasharray="8 6"/>

      <!-- Cowhide Vest (Black & White Pattern) -->
      <!-- Left Vest Flap -->
      <path d="M160 100 L230 20 L280 20 L270 210 L150 210 Z" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="8"/>
      <!-- Right Vest Flap -->
      <path d="M440 100 L370 20 L320 20 L330 210 L450 210 Z" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="8"/>
      <!-- Cow Spots -->
      <ellipse cx="200" cy="80" rx="22" ry="32" fill="#1A1A1A" transform="rotate(-15 200 80)"/>
      <ellipse cx="245" cy="150" rx="18" ry="24" fill="#1A1A1A"/>
      <ellipse cx="180" cy="170" rx="20" ry="16" fill="#1A1A1A"/>
      <ellipse cx="395" cy="85" rx="24" ry="30" fill="#1A1A1A" transform="rotate(20 395 85)"/>
      <ellipse cx="350" cy="155" rx="22" ry="20" fill="#1A1A1A"/>
      <ellipse cx="420" cy="175" rx="18" ry="18" fill="#1A1A1A"/>

      <!-- Red Bandana / Scarf Around Neck -->
      <path d="M240 10 L360 10 L300 70 Z" fill="#D32F2F" stroke="#1A1A1A" stroke-width="6"/>
      <ellipse cx="270" cy="30" rx="4" ry="4" fill="#FFFFFF"/>
      <ellipse cx="330" cy="30" rx="4" ry="4" fill="#FFFFFF"/>
      <ellipse cx="300" cy="45" rx="4" ry="4" fill="#FFFFFF"/>

      <!-- Golden Sheriff Star Badge on Chest -->
      <g transform="translate(205, 95) scale(0.9)">
        <!-- 6-Pointed Star -->
        <polygon points="25,0 32,15 49,15 35,26 40,43 25,32 9,43 15,26 1,15 17,15" fill="url(#goldStar)" stroke="#614300" stroke-width="2"/>
        <circle cx="25" cy="22" r="5" fill="#FFE600"/>
        <!-- Star tips balls -->
        <circle cx="25" cy="0" r="3" fill="#D49A00"/>
        <circle cx="49" cy="15" r="3" fill="#D49A00"/>
        <circle cx="40" cy="43" r="3" fill="#D49A00"/>
        <circle cx="9" cy="43" r="3" fill="#D49A00"/>
        <circle cx="1" cy="15" r="3" fill="#D49A00"/>
      </g>
    </g>

    <!-- Head & Neck -->
    <g id="head">
      <!-- Neck -->
      <rect x="270" y="340" width="60" height="70" rx="10" fill="url(#skinGrad)" stroke="#1A1A1A" stroke-width="7"/>

      <!-- Ears -->
      <ellipse cx="205" cy="275" rx="22" ry="30" fill="url(#skinGrad)" stroke="#1A1A1A" stroke-width="7"/>
      <path d="M200 265 Q212 275, 204 288" stroke="#D4A373" stroke-width="5" fill="none"/>
      
      <ellipse cx="395" cy="275" rx="22" ry="30" fill="url(#skinGrad)" stroke="#1A1A1A" stroke-width="7"/>
      <path d="M400 265 Q388 275, 396 288" stroke="#D4A373" stroke-width="5" fill="none"/>

      <!-- Face Shape -->
      <path d="M220 230 C220 160, 380 160, 380 230 C380 320, 340 370, 300 370 C260 370, 220 320, 220 230 Z" fill="url(#skinGrad)" stroke="#1A1A1A" stroke-width="8"/>

      <!-- Hair visible below hat -->
      <path d="M218 220 Q235 240, 245 225 Q260 215, 270 225 Q285 210, 300 220 Q315 210, 330 225 Q340 215, 355 225 Q365 240, 382 220 L382 205 L218 205 Z" fill="#4A2511" stroke="#1A1A1A" stroke-width="6"/>

      <!-- Big Friendly Eyes -->
      <!-- Left Eye -->
      <ellipse cx="265" cy="255" rx="22" ry="26" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="6"/>
      <circle cx="268" cy="255" r="14" fill="#6F4E37"/>
      <circle cx="268" cy="255" r="8" fill="#1A1A1A"/>
      <circle cx="264" cy="250" r="4" fill="#FFFFFF"/>

      <!-- Right Eye -->
      <ellipse cx="335" cy="255" rx="22" ry="26" fill="#FFFFFF" stroke="#1A1A1A" stroke-width="6"/>
      <circle cx="332" cy="255" r="14" fill="#6F4E37"/>
      <circle cx="332" cy="255" r="8" fill="#1A1A1A"/>
      <circle cx="328" cy="250" r="4" fill="#FFFFFF"/>

      <!-- Expressive Eyebrows -->
      <path d="M245 220 Q265 210, 285 222" stroke="#4A2511" stroke-width="8" stroke-linecap="round" fill="none"/>
      <path d="M315 222 Q335 210, 355 220" stroke="#4A2511" stroke-width="8" stroke-linecap="round" fill="none"/>

      <!-- Nose -->
      <path d="M298 250 L295 285 Q302 290, 308 285" stroke="#1A1A1A" stroke-width="6" fill="none" stroke-linecap="round"/>

      <!-- Iconic Woody Smile & Dimple -->
      <path d="M255 305 Q300 345, 345 305" stroke="#1A1A1A" stroke-width="7" fill="#FFFFFF"/>
      <path d="M255 305 Q300 355, 345 305" stroke="#1A1A1A" stroke-width="6" fill="#A83232"/>
      <!-- Teeth -->
      <path d="M265 308 Q300 325, 335 308" fill="#FFFFFF"/>
      <!-- Cheeks Flush -->
      <circle cx="240" cy="285" r="12" fill="#FF8A80" opacity="0.4"/>
      <circle cx="360" cy="285" r="12" fill="#FF8A80" opacity="0.4"/>
    </g>

    <!-- Iconic Cowboy Hat -->
    <g id="cowboy-hat">
      <!-- Hat Crown -->
      <path d="M210 180 C200 70, 240 40, 300 50 C360 40, 400 70, 390 180 Z" fill="url(#hatGrad)" stroke="#1A1A1A" stroke-width="10"/>
      <!-- Crown Crease Top -->
      <path d="M270 50 Q300 75, 330 50" stroke="#3D1F07" stroke-width="12" fill="none" stroke-linecap="round"/>
      
      <!-- Hat Band (Dark Brown Leather) -->
      <path d="M205 170 C240 185, 360 185, 395 170 L398 185 C360 200, 240 200, 202 185 Z" fill="#2B1405" stroke="#1A1A1A" stroke-width="6"/>

      <!-- Hat Brim (Wide and Curved) -->
      <path d="M80 185 C140 145, 230 185, 300 185 C370 185, 460 145, 520 185 C550 215, 450 235, 300 235 C150 235, 50 215, 80 185 Z" fill="url(#hatGrad)" stroke="#1A1A1A" stroke-width="10"/>
      
      <!-- Stitching around Brim Edge (Iconic Woody detail) -->
      <path d="M100 185 Q300 230, 500 185" stroke="#3D1F07" stroke-width="5" stroke-dasharray="10 8" fill="none"/>
    </g>
  </g>

  <!-- Cinema Title Banner: PERSONAGEM WOODY -->
  <g transform="translate(60, 515)">
    <rect x="0" y="0" width="480" height="60" rx="30" fill="#FFB800" stroke="#1A1A1A" stroke-width="8"/>
    <text x="240" y="40" font-family="'Impact', 'Arial Black', sans-serif" font-size="28" font-weight="900" text-anchor="middle" fill="#1A1A1A" letter-spacing="2">
      🤠 XERIFE WOODY • TOY STORY
    </text>
  </g>
</svg>`;

async function buildAssets() {
  console.log('Generating RealFaviconGenerator compliant icons and Woody graphic...');

  // Ensure public directory exists
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 1. Save SVG files
  fs.writeFileSync(path.join(publicDir, 'personagem-woody.svg'), SHERIFF_WOODY_SVG, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'safari-pinned-tab.svg'), BURGER_FILMS_FAVICON_SVG, 'utf-8');
  console.log('  ✓ Created /public/personagem-woody.svg');
  console.log('  ✓ Created /public/safari-pinned-tab.svg');

  // Also convert Woody SVG to a crisp 600x600 WebP and PNG for full compatibility
  await sharp(Buffer.from(SHERIFF_WOODY_SVG))
    .resize(600, 600)
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, 'personagem-woody.webp'));
  console.log('  ✓ Created /public/personagem-woody.webp');

  const svgBuffer = Buffer.from(BURGER_FILMS_FAVICON_SVG);

  // 2. Generate standard RealFaviconGenerator PNGs:
  // - favicon-16x16.png
  await sharp(svgBuffer).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
  console.log('  ✓ Created /public/favicon-16x16.png');

  // - favicon-32x32.png
  await sharp(svgBuffer).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  console.log('  ✓ Created /public/favicon-32x32.png');

  // - favicon.png (standard high-res)
  await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'favicon.png'));
  console.log('  ✓ Created /public/favicon.png');

  // - apple-touch-icon.png (180x180)
  await sharp(svgBuffer).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('  ✓ Created /public/apple-touch-icon.png');

  // - android-chrome-192x192.png (192x192)
  await sharp(svgBuffer).resize(192, 192).png().toFile(path.join(publicDir, 'android-chrome-192x192.png'));
  console.log('  ✓ Created /public/android-chrome-192x192.png');

  // - android-chrome-512x512.png (512x512)
  await sharp(svgBuffer).resize(512, 512).png().toFile(path.join(publicDir, 'android-chrome-512x512.png'));
  console.log('  ✓ Created /public/android-chrome-512x512.png');

  // - Generate standard multi-image favicon.ico (containing 16x16, 32x32, 48x48)
  // Sharp can generate standard ico or 32x32 PNG with .ico extension (supported by all modern browsers)
  const icoBuffer = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('  ✓ Created /public/favicon.ico');

  // 3. Generate site.webmanifest (RealFaviconGenerator standard)
  const webManifest = {
    "name": "Burger Films Pub & Delivery",
    "short_name": "Burger Films",
    "icons": [
      {
        "src": "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    "theme_color": "#FFB800",
    "background_color": "#1A1A1A",
    "display": "standalone",
    "start_url": "/"
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(webManifest, null, 2), 'utf-8');
  // Also update manifest.json for backward compatibility
  fs.writeFileSync(path.join(publicDir, 'manifest.json'), JSON.stringify(webManifest, null, 2), 'utf-8');
  console.log('  ✓ Created /public/site.webmanifest & /public/manifest.json');

  // 4. Generate browserconfig.xml for Windows / Edge tiles
  const browserConfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
    <msapplication>
        <tile>
            <square150x150logo src="/android-chrome-192x192.png"/>
            <TileColor>#FFB800</TileColor>
        </tile>
    </msapplication>
</browserconfig>`;
  fs.writeFileSync(path.join(publicDir, 'browserconfig.xml'), browserConfig, 'utf-8');
  console.log('  ✓ Created /public/browserconfig.xml');

  console.log('All icons and character assets generated successfully!');
}

buildAssets().catch(err => {
  console.error('Error generating assets:', err);
  process.exit(1);
});
