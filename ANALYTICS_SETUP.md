# Google Analytics Setup Guide

## Obtener tu Google Analytics ID

1. Ve a [Google Analytics 4](https://analytics.google.com)
2. Crea una nueva propiedad (si no tienes cuenta)
3. Configura tu sitio web
4. En **Administración → Detalles de la propiedad**, copia el **ID de medición** (formato: `G-XXXXXXXXXX`)

## Configurar en el proyecto

### 1. Actualizar `src/index.html`

Reemplaza **ambas instancias** de `G-XXXXXXXXXX` con tu ID real:

```html
<!-- Línea ~19: en el script async -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TUIDALAQUI"></script>

<!-- Línea ~22: en la config -->
gtag('config', 'G-TUIDALAQUI', {
```

### 2. Actualizar `src/app/services/analytics.service.ts`

En el método `pageView()` (línea ~30) y en la declaración `declare let gtag`:

```typescript
gtag('config', 'G-TUIDALAQUI', {
  page_path: path,
});
```

## Uso en componentes

### Rastrear eventos personalizados

```typescript
import { AnalyticsService } from '@app/services/analytics.service';

constructor(private analytics: AnalyticsService) {}

onButtonClick() {
  this.analytics.trackButtonClick('cta-primary');
  // hacer algo...
}

onFormSubmit() {
  this.analytics.trackFormSubmission('contact-form');
  // enviar formulario...
}
```

### Métodos disponibles

- `pageView(path)` — Rastrear vista de página (automático en rutas)
- `event(name, params)` — Evento personalizado
- `trackFormSubmission(name)` — Envío de formulario
- `trackButtonClick(name)` — Clic en botón
- `trackScrollDepth(percentage)` — Profundidad de scroll

## Validar instalación

1. Abre tu sitio en desarrollo: `npm start`
2. Ve a [Google Analytics 4 Real-Time](https://analytics.google.com) → Real-time
3. Si todo está bien, verás visitantes activos y eventos llegando

## Privacidad

La configuración actual:
- ✅ Anonimiza IPs
- ✅ Desactiva señales de Google Ads
- ✅ Desactiva personalización de anuncios

Personaliza según RGPD/legislación local si es necesario.
