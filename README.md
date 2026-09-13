# Hey Talent — Monorepo

Monorepo con npm workspaces. Un solo `node_modules` en la raíz, un solo
`package-lock.json`, y cada app/paquete con su propio `package.json`.

## Estructura

```
.
├─ apps/
│  └─ landing/        Landing pública (Angular 21) → heytalent.com
├─ packages/
│  └─ ui/             Design system compartido (@heytalent/ui)
├─ tools/
│  └─ scraper/        Utilidad puntual, fuera de los workspaces
├─ tsconfig.base.json Opciones de TS comunes + alias @heytalent/*
└─ package.json       Workspaces y scripts raíz
```

## Requisitos

- Node 22.x — ojo: con Node v22.17 el CLI de Angular 22 no arranca, por eso
  este repo está fijado a `@angular/cli@21`.
- npm 10.9.2

## Uso

```bash
npm install                      # instala TODO el monorepo desde la raíz
npm start                        # levanta la landing (atajo)
npm run build                    # build de todos los workspaces
npm test                         # tests de todos los workspaces
```

Para trabajar sobre una app concreta se usa `-w` con el nombre del paquete:

```bash
npm start -w @heytalent/landing
npm run build -w @heytalent/landing
```

## Paquetes compartidos

`packages/ui` se consume **desde el código fuente**, sin paso de build
intermedio: el alias `@heytalent/ui` de `tsconfig.base.json` apunta a
`packages/ui/src/index.ts` y el compilador de Angular lo incluye en el bundle
de cada app. Esto evita tener que recompilar una librería antes de levantar el
front. La contrapartida es que el paquete no es publicable a npm tal cual; si
alguna vez hace falta, se le añade `ng-packagr`.

Regla: si algo solo lo usa una app, vive en esa app. Solo sube a `packages/`
lo que de verdad comparten dos o más.

## Añadir el frontend de producto

```bash
npx -w @heytalent/landing ng new web --directory apps/web --style css --skip-install
```

Después: renombrar el paquete a `@heytalent/web`, apuntar sus `tsconfig` a
`../../tsconfig.base.json` y añadir `@heytalent/ui` a sus dependencias, igual
que en `apps/landing`.

## Añadir el backend

Va en `apps/api` como un workspace más (NestJS encaja bien con un equipo
Angular: mismo TypeScript, mismos decoradores, misma inyección de
dependencias). El contrato front ↔ back se comparte creando `packages/shared`
con los DTOs y añadiendo su alias a `tsconfig.base.json`, igual que
`@heytalent/ui`.
