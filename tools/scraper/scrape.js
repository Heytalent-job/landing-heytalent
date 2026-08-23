#!/usr/bin/env node
/**
 * Scraper de la preview de Lovable que sirve de referencia para esta landing.
 *
 * La URL pública (`/preview/<token>`) es sólo el shell del editor de Lovable:
 * redirige a `/share-preview/<projectId>#preview_url=<url + __lovable_token>` y
 * monta el proyecto real dentro de un iframe. Por eso el scraper hace dos pasos:
 *
 *   1. Abre la URL de share y lee el `preview_url` firmado del hash.
 *   2. Navega a esa URL como página top-level (sin el chrome de Lovable) y,
 *      una vez renderizado el SPA, vuelca DOM, CSS, tokens, textos y capturas.
 *
 * Uso:
 *   node scrape.js                 # usa la URL por defecto
 *   node scrape.js <url-preview>   # cualquier otra preview de Lovable
 *
 * Salida: ./out
 */
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const SHARE_URL = process.argv[2] || 'https://lovable.dev/preview/KvE99ZdUGHYZzjwmDIlfg7e1kJgCORX5';
const OUT = path.join(__dirname, 'out');
const DESKTOP = { width: 1440, height: 1000 };
const MOBILE = { width: 390, height: 844 };

const save = (name, data) =>
  fs.writeFileSync(path.join(OUT, name), data, typeof data === 'string' ? 'utf8' : undefined);

/** Resuelve la URL firmada del proyecto a partir de la URL de share. */
async function resolveProjectUrl(page) {
  await page.goto(SHARE_URL, { waitUntil: 'domcontentloaded', timeout: 90_000 });
  await page.waitForFunction(() => location.hash.includes('preview_url='), { timeout: 60_000 });

  const hash = new URL(page.url()).hash;
  const url = decodeURIComponent((hash.match(/preview_url=([^&]+)/) || [])[1] || '');
  if (!url) throw new Error(`No se encontró preview_url en: ${page.url()}`);
  return url;
}

/** Descarga a ./out/assets todo lo que la página pida (imágenes, fuentes, CSS). */
function captureAssets(page, seen) {
  page.on('response', async (res) => {
    const url = res.url();
    const type = res.headers()['content-type'] || '';
    if (!/(image|font|css)/.test(type)) return;
    if (seen.has(url) || /lovable\.dev|gpteng|sentry/.test(url)) return;
    try {
      const body = await res.buffer();
      seen.add(url);
      const name = (url.split('?')[0].split('/').pop() || 'asset').slice(-80);
      fs.writeFileSync(path.join(OUT, 'assets', name), body);
    } catch {
      /* respuestas redirigidas o sin cuerpo */
    }
  });
}

/** Recorre la página entera para disparar lazy-load y animaciones al hacer scroll. */
const scrollThrough = () =>
  new Promise((resolve) => {
    let y = 0;
    const step = () => {
      window.scrollBy(0, 400);
      y += 400;
      if (y < document.body.scrollHeight + 1200) setTimeout(step, 80);
      else {
        window.scrollTo(0, 0);
        setTimeout(resolve, 1000);
      }
    };
    step();
  });

/** Concatena todas las hojas de estilo accesibles. */
const collectCss = () =>
  [...document.styleSheets]
    .map((sheet) => {
      try {
        return (
          `/* ==== ${sheet.href || 'inline'} ==== */\n` +
          [...sheet.cssRules].map((rule) => rule.cssText).join('\n')
        );
      } catch {
        return `/* CORS: ${sheet.href} */`;
      }
    })
    .join('\n\n');

/** Custom properties de :root/.dark — la paleta y la tipografía del diseño. */
const collectTokens = () => {
  const vars = {};
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (!rule.selectorText || !/(^|,\s*)(:root|html|\.dark)\b/.test(rule.selectorText)) continue;
        for (const prop of rule.style) {
          if (prop.startsWith('--')) {
            vars[`${rule.selectorText} | ${prop}`] = rule.style.getPropertyValue(prop).trim();
          }
        }
      }
    } catch {
      /* hoja cross-origin */
    }
  }
  const cs = getComputedStyle(document.body);
  return { vars, body: { font: cs.fontFamily, size: cs.fontSize, color: cs.color, bg: cs.backgroundColor } };
};

/** Estructura semántica con los estilos ya resueltos por el navegador. */
const collectOutline = () => {
  const styleOf = (el) => {
    const c = getComputedStyle(el);
    return {
      color: c.color,
      bg: c.backgroundColor,
      bgImage: c.backgroundImage !== 'none' ? c.backgroundImage.slice(0, 240) : undefined,
      font: c.fontFamily.split(',')[0],
      size: c.fontSize,
      weight: c.fontWeight,
      radius: c.borderRadius,
      padding: c.padding,
      shadow: c.boxShadow !== 'none' ? c.boxShadow.slice(0, 160) : undefined,
      letterSpacing: c.letterSpacing,
      lineHeight: c.lineHeight,
    };
  };
  return {
    title: document.title,
    lang: document.documentElement.lang,
    sections: [...document.querySelectorAll('header, section, footer, nav')].map((el, i) => ({
      i,
      tag: el.tagName.toLowerCase(),
      cls: typeof el.className === 'string' ? el.className : '',
      height: Math.round(el.getBoundingClientRect().height),
      style: styleOf(el),
      text: (el.innerText || '').trim().slice(0, 1500),
    })),
    headings: [...document.querySelectorAll('h1,h2,h3,h4')].map((h) => ({
      tag: h.tagName.toLowerCase(),
      text: h.innerText.trim(),
      ...styleOf(h),
    })),
    images: [...document.querySelectorAll('img')].map((i) => ({
      src: i.src,
      alt: i.alt,
      w: i.naturalWidth,
      h: i.naturalHeight,
    })),
    links: [...document.querySelectorAll('a')].map((a) => ({
      text: a.innerText.trim().slice(0, 60),
      href: a.getAttribute('href'),
    })),
    // Los iconos son SVG inline (Lucide): se guardan enteros para poder replicarlos.
    svgs: [...document.querySelectorAll('svg')].map((s) => s.outerHTML.slice(0, 900)),
  };
};

(async () => {
  fs.mkdirSync(path.join(OUT, 'assets'), { recursive: true });

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  try {
    const page = await browser.newPage();
    await page.setViewport(DESKTOP);

    console.log('→ resolviendo token de share…');
    const projectUrl = await resolveProjectUrl(page);
    console.log('→ proyecto:', projectUrl.split('?')[0]);
    save('project-url.txt', projectUrl);

    const seen = new Set();
    captureAssets(page, seen);

    await page.goto(projectUrl, { waitUntil: 'networkidle0', timeout: 90_000 });
    await new Promise((r) => setTimeout(r, 4000));
    await page.evaluate(scrollThrough);

    // El badge de Lovable no forma parte del diseño: fuera antes de capturar.
    await page.evaluate(() =>
      document.querySelectorAll('[id*="lovable"], [class*="lovable"]').forEach((el) => el.remove()),
    );

    save('rendered.html', await page.content());
    save('text.txt', await page.evaluate(() => document.body.innerText));
    save('styles.css', await page.evaluate(collectCss));
    save('tokens.json', JSON.stringify(await page.evaluate(collectTokens), null, 2));

    const outline = await page.evaluate(collectOutline);
    save('outline.json', JSON.stringify(outline, null, 2));

    await page.screenshot({ path: path.join(OUT, 'full.png'), fullPage: true });
    const sections = await page.$$('header, section, footer');
    for (const [i, el] of sections.entries()) {
      await el.screenshot({ path: path.join(OUT, `section-${String(i).padStart(2, '0')}.png`) }).catch(() => {});
    }

    await page.setViewport(MOBILE);
    await new Promise((r) => setTimeout(r, 1500));
    await page.screenshot({ path: path.join(OUT, 'mobile.png'), fullPage: true });

    console.log(`✔ listo → ${OUT}`);
    console.log(`  secciones: ${sections.length} | assets: ${seen.size} | titulares: ${outline.headings.length}`);
  } finally {
    await browser.close();
  }
})().catch((err) => {
  console.error('✖ scraping fallido:', err.message);
  process.exit(1);
});
