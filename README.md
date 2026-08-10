# HeyTalent — Landing page (Angular)

Landing page de HeyTalent construida con **Angular 21** (componentes standalone, señales y
detección de cambios zoneless).

## Requisitos

- Node.js `^20.19` / `^22.12` o superior (probado con v22.17)
- npm 10+

## Comandos

```bash
npm install       # instalar dependencias
npm start         # servidor de desarrollo en http://localhost:4200
npm run build     # build de producción en dist/heytalent
```

## Estructura

```
src/
├─ index.html                  # metadatos, fuente Nunito
├─ styles.css                  # design tokens (:root) + primitivas compartidas
└─ app/
   ├─ app.ts / app.html        # shell que compone las secciones
   ├─ data/site-content.ts     # todo el contenido de la landing (textos, links, listas)
   ├─ shared/
   │  ├─ icon/                 # set de íconos SVG inline
   │  ├─ logo/                 # logo HeyTalent en SVG
   │  └─ validators.ts         # validadores del formulario
   └─ components/
      ├─ site-header/          # nav sticky + menú móvil
      ├─ hero/                 # hero, stats y tira de imágenes
      ├─ about/                # misión, visión y pilares
      ├─ services/             # grid de servicios
      ├─ how-it-works/         # bloques imagen + checklist
      ├─ testimonials/         # opiniones
      ├─ signup/               # formulario reactivo de inscripción
      └─ site-footer/          # footer
```

## Notas de implementación

- **Contenido separado del markup**: textos, enlaces y listas viven en
  `src/app/data/site-content.ts`. Para editar la copy no hace falta tocar los templates.
- **Formulario**: reactivo (`FormBuilder`), con las mismas reglas de la versión original —
  nombre ≥ 3 caracteres, correo con formato válido, universidad, carrera ≥ 2 caracteres e
  interés obligatorios. Al enviar solo muestra la confirmación en pantalla: **todavía no hay
  backend**, así que los datos no se persisten ni se envían a ningún lado.
- **Scroll suave**: se hace con `scroll-behavior: smooth` + `scroll-padding-top` en CSS, en vez
  de listeners de JavaScript.
- **Imágenes**: se cargan desde Unsplash por URL. Si se quiere independencia de terceros,
  conviene descargarlas a `public/` y apuntar las rutas ahí.
