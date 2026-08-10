# Scraper de la preview de Lovable

Extrae el diseño de referencia desde la preview publicada en Lovable. Vive aparte del
proyecto Angular porque arrastra Puppeteer (descarga su propio Chromium) y no forma
parte del bundle de la aplicación.

```bash
cd tools/scraper
npm install
npm run scrape                       # URL por defecto
npm run scrape -- <url-de-preview>   # cualquier otra preview
```

## Por qué hacen falta dos pasos

`https://lovable.dev/preview/<token>` no devuelve la página: es el shell del editor de
Lovable y su HTML sólo trae `<title>Loading...</title>`. Al cargarlo:

1. Redirige a `/share-preview/<projectId>#preview_url=<url>%3F__lovable_token%3D<jwt>`.
2. Monta el proyecto real en un iframe apuntando a `id-preview--<projectId>.lovable.app`.

Ese host **exige el token firmado**: sin él responde con la pantalla de login de Lovable.
Por eso el scraper lee el `preview_url` del hash y navega ahí como página top-level, lo
que además evita capturar la barra de comentarios del editor.

## Qué genera (`out/`)

| Archivo | Contenido |
| --- | --- |
| `project-url.txt` | URL firmada resuelta (el token caduca) |
| `rendered.html` | DOM tras ejecutar el SPA y hacer scroll completo |
| `styles.css` | Todas las hojas de estilo concatenadas |
| `tokens.json` | Custom properties de `:root` — la paleta OKLCH y las fuentes |
| `outline.json` | Secciones, titulares, imágenes, enlaces y los SVG de los iconos, con estilos ya computados |
| `text.txt` | Texto en orden de lectura (útil para comparar contenido) |
| `full.png`, `mobile.png`, `section-NN.png` | Capturas a 1440px y 390px |
| `assets/` | Imágenes, fuentes y CSS descargados |

## Notas

- El `__lovable_token` es de corta duración: se re-resuelve en cada ejecución, no se cachea.
- `out/` no se versiona; es material de referencia regenerable.
- Los iconos del diseño son [Lucide](https://lucide.dev) inline; sus trazos se recuperan
  de `outline.json` y están replicados en `src/app/shared/icon/icon.ts`.
