# Hey Talent — landing

Recreación en Angular 21 de la landing de Hey Talent publicada como preview en Lovable
(un SPA de React). El diseño no se transcribió a ojo: se extrajo con el scraper incluido
en [tools/scraper/](tools/scraper/), que renderiza la página original y vuelca su DOM,
CSS, paleta, tipografía y assets.

## Puesta en marcha

```bash
npm install
npm start          # http://localhost:4200
npm run build      # bundle de producción en dist/
npm test           # tests unitarios (Vitest)
```

## Estructura

```
src/app/
  app.ts                     Shell: compone las secciones de la página
  data/site-content.ts       Todo el contenido y los enlaces, tipados
  shared/icon/icon.ts        Iconos Lucide inline, dimensionados desde el host
  components/
    site-header/             Cabecera sticky con menú compacto por debajo de 1024px
    hero/                    Degradado, buscador y manchas orgánicas
    categories/              "¿Qué buscas hoy?"
    features/                "Todo lo que necesitas"
    about/                   "Quiénes somos": cifras, contacto y tarjetas con foto
    site-footer/             Mapa del sitio en 6 columnas
```

El contenido vive separado de las plantillas en `data/site-content.ts`, de modo que
editar textos o enlaces no obliga a tocar los componentes.

## Diseño

Los tokens salen tal cual del original y viven en [src/styles.css](src/styles.css) como
custom properties. La paleta está en **OKLCH**, igual que la fuente:

| Token | Valor |
| --- | --- |
| `--primary` | `oklch(55% 0.21 279)` |
| `--secondary-foreground` | `oklch(35% 0.13 281)` |
| `--muted-foreground` | `oklch(52% 0.045 283)` |
| `--gradient-hero` | `linear-gradient(150deg, oklch(55% 0.21 279), oklch(66% 0.17 292))` |
| `--radius` | `1.25rem` |

Tipografía: **Baloo 2** para titulares (`--font-display`) y **DM Sans** para el cuerpo,
servidas desde Google Fonts. Los breakpoints replican los del original: 640px, 768px y
1024px.

En lugar de Tailwind se escribió CSS propio por componente, con las utilidades
compartidas (`.container`, `.btn`, `.blob`, sombras) en la hoja global.

## Verificación

Se comparó el build contra la captura del original a 1440px y 390px: el texto renderizado
coincide línea por línea (83/83) y las alturas de sección quedan dentro de ±8px.

> Los assets bajo `public/images/` provienen de la preview original y pertenecen a Hey Talent.
