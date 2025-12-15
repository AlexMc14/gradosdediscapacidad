# Grados de Discapacidad - Web Profesional de Peritaje Médico

Página web profesional en Astro para **gradosdediscapacidad.es**, especializada en peritaje médico y valoración de grados de discapacidad en toda España.

## 🚀 Características Principales

- ✅ **SEO Optimizado**: Meta tags completos, Open Graph, Schema.org JSON-LD
- ✅ **Rendimiento Máximo**: SSG (Static Site Generation) para velocidad óptima
- ✅ **Diseño Responsive**: Mobile-first, adaptable a todos los dispositivos
- ✅ **Content Collections**: Sistema de blog y páginas provinciales dinámicas
- ✅ **Accesibilidad**: WCAG 2.1 compliant
- ✅ **Paleta de Colores Profesional**: Azul #1E3A8A + Verde #059669

## 📁 Estructura del Proyecto

```
web2perito/
├── public/              # Archivos estáticos
│   ├── logo.svg        # Logo profesional
│   ├── favicon.svg     # Favicon
│   └── robots.txt      # SEO
├── src/
│   ├── assets/         # Imágenes y estilos
│   │   └── styles/     # CSS global y variables
│   ├── components/     # Componentes reutilizables
│   │   ├── layout/     # Header, Footer
│   │   ├── seo/        # SEOHead, SchemaOrg
│   │   ├── ui/         # Button, LazyImage
│   │   └── ...
│   ├── content/        # Content Collections
│   │   ├── blog/       # Posts del blog
│   │   ├── provincias/ # Páginas provinciales
│   │   └── config.ts   # Configuración collections
│   ├── data/           # JSON con datos
│   │   ├── provincias.json  # 52 provincias España
│   │   ├── servicios.json   # Servicios ofrecidos
│   │   ├── testimonios.json # Testimonios clientes
│   │   └── faq.json         # Preguntas frecuentes
│   ├── layouts/        # Layouts de página
│   │   ├── BaseLayout.astro # Base con SEO
│   │   └── PageLayout.astro # Con Header+Footer
│   ├── lib/            # Utilidades
│   │   ├── seo.ts      # Helpers SEO
│   │   ├── utils.ts    # Utilidades generales
│   │   └── schema-generators.ts # JSON-LD
│   └── pages/          # Rutas de la web
│       └── index.astro # Homepage
└── astro.config.mjs    # Configuración Astro
```

## 🛠️ Tecnologías

- **Framework**: Astro 5.16.5
- **TypeScript**: Tipado estricto
- **CSS**: Variables CSS nativas (sin frameworks)
- **Integraciones**:
  - @astrojs/sitemap - Sitemap automático
  - @astrojs/check - Validación TypeScript

## 🚀 Comandos

```bash
# Desarrollo
npm run dev          # Inicia servidor en http://localhost:4321

# Producción
npm run build        # Build optimizado para producción
npm run preview      # Preview del build de producción

# Utilidades
npm run astro        # Ejecutar comandos de Astro
```

## 📊 Estado del Proyecto

### ✅ Completado

1. **Infraestructura Base**
   - Proyecto Astro inicializado con TypeScript
   - Estructura de carpetas completa
   - Configuración de path aliases

2. **Diseño y Marca**
   - Logo SVG profesional diseñado
   - Sistema de variables CSS con paleta corporativa
   - Tipografía (Inter) y espaciado consistente

3. **Componentes SEO**
   - SEOHead.astro (meta tags, Open Graph, Twitter Cards)
   - SchemaOrg.astro (JSON-LD flexible)
   - Generadores de schema (Organization, Article, LocalBusiness, FAQ, Breadcrumb)

4. **Layouts**
   - BaseLayout con SEO integrado
   - PageLayout con Header y Footer

5. **Componentes UI**
   - Button (variants: primary, secondary, outline)
   - LazyImage (optimizado)
   - Header con navegación responsive
   - Footer completo con enlaces

6. **Data**
   - 52 provincias de España (provincias.json)
   - 6 servicios principales (servicios.json)
   - 7 testimonios ficticios (testimonios.json)
   - 10 FAQs (faq.json)

7. **Content Collections**
   - Configuración de collections (blog, provincias, legal)
   - 3 posts de blog de ejemplo:
     - Guía Completa del Grado de Discapacidad 2025
     - Grado 33%: Beneficios Completos
     - Discapacidad por Fibromialgia

8. **Homepage**
   - Hero section con CTAs
   - Sección de servicios (6 cards)
   - Proceso de trabajo (4 pasos)
   - Testimonios (3 destacados)
   - FAQ (6 preguntas)
   - Blog destacado (3 posts)
   - CTA final

### 🚧 Próximos Pasos Sugeridos

1. **Páginas Adicionales**
   - [ ] Página de contacto con formulario funcional
   - [ ] Página "Sobre Nosotros"
   - [ ] 6 páginas de servicios individuales
   - [ ] Páginas legales (Aviso Legal, Privacidad, Cookies)

2. **Sistema de Blog**
   - [ ] Página de listado de blog (/blog)
   - [ ] Página de post individual ([slug].astro)
   - [ ] Filtrado por categoría
   - [ ] Componentes de blog (BlogCard, RelatedPosts)

3. **Páginas Provinciales**
   - [ ] Página dinámica [provincia].astro
   - [ ] Layout ProvinciaLayout.astro
   - [ ] Crear contenido para las 10 provincias principales
   - [ ] Schema LocalBusiness por provincia

4. **Formulario de Contacto**
   - [ ] Componente ContactForm.astro
   - [ ] API endpoint /api/contact.ts
   - [ ] Validación client-side y server-side
   - [ ] Integración con servicio de email

5. **Contenido**
   - [ ] Crear 27 posts adicionales (completar mes 1 del roadmap)
   - [ ] Optimizar imágenes
   - [ ] Implementar interlinking estratégico

6. **SEO Avanzado**
   - [ ] Generar sitemap completo
   - [ ] Optimizar performance (Lighthouse 95+)
   - [ ] Añadir Google Analytics
   - [ ] Configurar Google Search Console

7. **Deploy**
   - [ ] Deploy en Vercel/Netlify
   - [ ] Configurar dominio gradosdediscapacidad.es
   - [ ] SSL automático
   - [ ] Variables de entorno

## 🎨 Paleta de Colores

```css
/* Principales */
--primary-blue: #1E3A8A      /* Confianza, profesionalidad */
--primary-green: #059669     /* Esperanza, accesibilidad */
--dark-gray: #374151         /* Texto principal */
--white: #FFFFFF             /* Fondos */

/* Secundarios */
--light-blue: #DBEAFE        /* Fondos suaves */
--light-green: #D1FAE5       /* Highlights */
--medium-gray: #6B7280       /* Texto secundario */
--light-gray: #F3F4F6        /* Backgrounds */
```

## 📈 Estrategia SEO

### Keywords Principales
- grado de discapacidad (18,000/mes)
- certificado de discapacidad (12,000/mes)
- discapacidad 33 por ciento (8,900/mes)
- peritaje médico madrid (890/mes)

### Roadmap de Contenido
- **Mes 1**: 30 artículos (~80,000 palabras)
- **Mes 3**: 90 artículos + 52 páginas provinciales
- **Mes 6**: 150+ artículos

## 📞 Información de Contacto (Placeholder)

- **Horario**: Lunes a Viernes, 9:00 - 20:00
- **Email**: Configurar en variables de entorno
- **Teléfono**: Configurar en variables de entorno

## 🔧 Variables de Entorno

Copiar `.env.example` a `.env` y configurar:

```bash
PUBLIC_SITE_URL=https://gradosdediscapacidad.es
CONTACT_EMAIL=info@gradosdediscapacidad.es
PUBLIC_RECAPTCHA_SITE_KEY=your_key
RECAPTCHA_SECRET_KEY=your_secret
EMAIL_API_KEY=your_email_api_key
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 📝 Licencia

Proyecto privado - Todos los derechos reservados

---

**Desarrollado con Astro** - Optimizado para SEO y conversión
