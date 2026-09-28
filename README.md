<div align="center">

<img src="public/assets/favicon/favicon.svg" width="130" height="130" alt="AXIS logo"/>

# AXIS

**A modular Front-End foundation built with Vite, Sass and JavaScript for structuring and scaling web projects**

_Structure first. Define the identity. Code faster._

[![Version](https://img.shields.io/badge/version-3.0.0-e8e4de?style=flat-square&labelColor=10b981&color=1c1b2e)](https://github.com/lvcascouto/axis/releases)&nbsp;
[![Template](https://img.shields.io/badge/template-ready-e8e4de?style=flat-square&labelColor=3437e6&color=1c1b2e)](https://github.com/lvcascouto/axis/generate)&nbsp;
[![License](https://img.shields.io/badge/license-MIT-e8e4de?style=flat-square&labelColor=ef4444&color=1c1b2e)](https://github.com/lvcascouto/axis/blob/main/LICENSE)

🇧🇷 [Ler em Português](./README-ptbr.md)

</div>

## What is AXIS?

AXIS is a modular Front-End foundation built with **Vite, Sass and JavaScript**, created to provide a clean architectural starting point for new web projects without imposing a visual identity or a specific UI framework.

AXIS is **not a framework**. It is a structured foundation designed to shorten the path from setup to implementation while keeping the project organized, scalable and easy to evolve.

Version 3.0 expands the original five-layer Sass architecture into six layers, introduces a more systematic token strategy, adds page-level style isolation, HTML partial injection, a Vite configuration prepared for multiple pages, and a Yarn-based workflow.

## Features

- 6-layer Sass architecture inspired by ITCSS
- Primitive + semantic design token workflow
- Unified spacing and typography scales
- Responsive system using modern CSS comparison syntax
- Dedicated layer for page- and route-specific styles
- Reusable global sections for header and footer
- HTML partial injection with `vite-plugin-html-inject`
- Vite configuration prepared for multiple pages
- Native ES Modules structure
- Neutral, token-driven components
- Responsive Flex and Grid utilities
- Foundation with a focus on accessibility and motion preferences
- Starter template with SEO, Open Graph and PWA metadata
- Production build pipeline powered by Vite
- Yarn-based dependency management with a tracked lockfile
- Motion-ready structure with keyframes and animation tokens
- Fully customizable foundation

## Philosophy

AXIS follows a simple principle:

> **Front-End foundations should accelerate development — not dictate design.**

The system prioritizes:

- **structure over opinionated UI**
- **organization over excessive abstractions**
- **flexibility over rigid systems**

Each layer has a clear responsibility. Each file should make the project easier to understand, extend and maintain.

## Conventions

AXIS follows a set of conventions to keep the foundation predictable, consistent and easy to evolve.

- **Structured comments:** code blocks use the visual `// ==` convention to identify sections and responsibilities.
- **Relative units:** dimensional values in the foundation are expressed in `rem`, using the `rem()` function when necessary.
- **Tokens before values:** components and sections should prioritize existing tokens instead of hardcoded values.
- **Semantic tokens:** primitive values should be mapped to semantic roles when they represent a specific project intent.
- **Isolated responsibilities:** page-specific styles belong in `pages/`, while reusable blocks belong in `components/` or `sections/`.
- **Neutral foundation:** AXIS provides structure, not a ready-made visual identity. The consuming project defines the visual language.

## Architecture at a Glance

| Layer         | Responsibility                                             |
| ------------- | ---------------------------------------------------------- |
| `abstracts/`  | Tokens, functions and mixins. Generates no CSS by itself.  |
| `base/`       | Reset, typography, global styles, keyframes and utilities. |
| `layout/`     | Structural systems such as containers, Flex and Grid.      |
| `components/` | Reusable, neutral UI components driven by tokens.          |
| `sections/`   | Global and reusable sections such as header and footer.    |
| `pages/`      | Isolated styles for specific pages or routes.              |

The Sass order is:

```text
Abstracts → Base → Layout → Components → Sections → Pages
```

## Stack

| Technology              | Purpose                                                  |
| ----------------------- | -------------------------------------------------------- |
| Vite                    | Development server, HMR and build pipeline               |
| Sass (SCSS)             | Modular styling architecture and design token system     |
| JavaScript              | Native ES Modules and frontend logic                     |
| HTML5                   | Semantic templates with SEO, Open Graph and PWA metadata |
| Yarn                    | Dependency installation and reproducible setup           |
| vite-plugin-html-inject | HTML partial injection through `<load>`                  |

## Project Structure

```text
axis/
├── public/
│   ├── assets/
│   │   ├── docs/                → Downloadable documents
│   │   ├── favicon/             → SVG/PNG icons and app icons
│   │   ├── media/
│   │   │   ├── img/             → Raster images
│   │   │   └── video/           → Videos
│   │   └── svg/                 → Vectors, icons and illustrations
│   ├── favicon.ico              → Legacy/root favicon
│   ├── manifest.json            → PWA configuration
│   └── README-manifest.md       → PWA configuration guide and documentation
├── src/
│   ├── html/
│   │   ├── header.html          → Reusable header fragment
│   │   └── footer.html          → Reusable footer fragment
│   ├── js/
│   │   ├── base/                → Global scripts and helpers
│   │   ├── components/          → Component-specific JS modules
│   │   ├── vendor/              → Third-party integrations
│   │   └── script.js            → Main JS + Sass entry point
│   └── sass/
│       ├── abstracts/
│       │   ├── tokens/           → Primitive and semantic tokens
│       │   ├── functions/        → Utility functions and token access
│       │   └── mixins/           → Layout, responsive and a11y mixins
│       ├── base/                → Reset, global styles, typography, keyframes and utilities
│       ├── layout/              → Container, Flex and Grid systems
│       ├── components/          → Neutral and reusable UI components
│       ├── sections/            → Global and reusable sections
│       ├── pages/               → Page/route-specific styles
│       └── main.scss            → Main Sass entry point
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── index.html
├── LICENSE
├── package.json
├── README.md
├── README-ptbr.md
├── vite.config.js
└── yarn.lock
```

## Sass Architecture

AXIS organizes Sass into **six layers** with clear responsibilities, following ITCSS principles:

### 1. Abstracts

The foundation of the system. Nothing here generates CSS directly.

- `tokens/` — primitive scales and areas for project semantic tokens
- `functions/` — validated access to breakpoints and z-index layers, color helpers and the `rem()` function
- `mixins/` — reusable helpers for layout, responsiveness, accessibility and text

### 2. Base

Global normalization and element defaults.

- `_reset.scss` — box sizing, margin/padding reset and normalization of base styles
- `_global.scss` — focus, reduced motion, document/media defaults and form font inheritance
- `_typography.scss` — consumes semantic typography tokens and applies them to HTML elements
- `_keyframes.scss` — shared keyframes such as `fade-in`, `slide-up` and `spin`
- `_utilities.scss` — structural helpers for display, visibility, positioning, alignment, interaction and truncation

### 3. Layout

Structural systems without embedded visual identity.

- `_container.scss` — `.container` and its variants
- `_flex.scss` — alignment and direction utilities
- `_grid.scss` — fixed, automatic and responsive grids

### 4. Components

Neutral, token-driven UI components.

- `_button.scss` — sizes, shapes, variants and disabled state
- `_card.scss` — static/interactive card structure and alignment modifiers
- `_badge.scss` — inline pill-style badge

Components use local semantic variables based on AXIS primitives, keeping visual customization outside the foundation.

### 5. Sections

Global, reusable sections that belong to the site shell rather than a specific route.

- `_header.scss`
- `_footer.scss`

The boilerplate keeps these partials free from project-specific hardcoded content.

### 6. Pages

Page- and route-specific styles that should not pollute global components or sections.

- `_home.scss`
- `_error.scss`
- `_index.scss`

Use this layer for rules exclusive to a specific page or route.

## Design Token System

AXIS V3 separates **primitive values** from **semantic intent**. Primitive tokens define reusable scales; semantic tokens describe how those values are used within the project.

### Token Files

| Token               | Defines                                                                    |
| ------------------- | -------------------------------------------------------------------------- |
| `_colors.scss`      | Grayscale scale, functional colors and semantic token area                 |
| `_spacing.scss`     | Unified spacing scale from micro UI to layout                              |
| `_typography.scss`  | Font sizes, weights, line-heights, letter-spacing and typography semantics |
| `_breakpoints.scss` | Desktop-first viewport boundaries                                          |
| `_container.scss`   | Named maximum layout widths                                                |
| `_motion.scss`      | Durations and easing curves                                                |
| `_elevation.scss`   | Shadow hierarchy                                                           |
| `_layers.scss`      | Semantic z-index map                                                       |
| `_radius.scss`      | Border-radius scale                                                        |
| `_opacity.scss`     | Transparency scale                                                         |

### Spacing

The system uses a unified spacing scale, combining **2px and 4px subdivisions for micro UI** with **larger anchors based on 8px for layout**, all expressed in `rem`.

```scss
$space-0: 0;
$space-2: 0.125rem; // 2px
$space-4: 0.25rem; // 4px
$space-6: 0.375rem; // 6px
$space-8: 0.5rem; // 8px
$space-10: 0.625rem; // 10px
$space-12: 0.75rem; // 12px
$space-14: 0.875rem; // 14px
$space-16: 1rem; // 16px
$space-20: 1.25rem; // 20px
$space-24: 1.5rem; // 24px
$space-28: 1.75rem; // 28px
$space-32: 2rem; // 32px
$space-36: 2.25rem; // 36px
$space-40: 2.5rem; // 40px
$space-48: 3rem; // 48px
$space-56: 3.5rem; // 56px
$space-64: 4rem; // 64px
$space-80: 5rem; // 80px
$space-96: 6rem; // 96px
$space-128: 8rem; // 128px
```

Semantic layout tokens such as `$gutter`, `$row-gap` and `$section-pad` derive from this scale.

### Typography

In V3, the typography scale no longer relies on the Major Third ratio. The system now uses a more controlled stepped scale to support UI and layout decisions, with dedicated tokens for:

- size
- weight
- line-height
- letter-spacing
- base and heading semantics

Example weight naming:

```scss
$weight-regular: 400;
$weight-medium: 500;
$weight-semi-bold: 600;
$weight-bold: 700;
$weight-extra-bold: 800;
```

### Breakpoints

V3 expands the desktop-first system:

```text
3xs  376px
xxs  480px
xs   576px
sm   640px
md   768px
lg   1024px
xl   1280px
xxl  1400px
3xl  1536px
4xl  1920px
```

Values are stored as `rem` in the token map.

### Containers

Container widths now live in a dedicated partial, separate from the spacing scale:

```text
sm   576px
md   768px
lg   1024px
xl   1280px
xxl  1400px
3xl  1536px
```

The default `.container` uses the `xxl` token, resulting in a maximum width of **1400px**.

### Motion, Radius and Opacity

V3 expands the scales used by components and interactions:

- **Motion:** `100`, `200`, `300`, `400`, `500`, `600`, `800`, `1000`
- **Radius:** `none`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`, `full`
- **Opacity:** `0`, `5`, `10`, `20`, `30`, `40`, `50`, `60`, `70`, `80`, `90`, `100`

The `2xl` and `3xl` radius tokens represent 24px and 32px for larger surfaces.

## Semantic Token Layer

Applicable token partials now include a dedicated area for project semantic aliases, avoiding repeated remapping in component and section files.

Conceptually:

```scss
// Primitive
$blue-500: #3437e6;

// Semantic
$color-primary: $blue-500;
```

This allows the project to work with roles such as `primary`, `surface`, `text`, `border` or `focus` instead of remapping the same primitive value across multiple files.

Mapping partials such as breakpoints, containers and layers remain focused on their maps and do not require a semantic layer.

## Responsive System

Responsive mixins now use modern width comparison syntax:

```scss
@include mix.respond(md) {
  // width < md
}

@include mix.respond-up(md) {
  // width >= md
}
```

This replaces the previous explicit `max-width` / `min-width` construction and keeps the API aligned with the expected behavior.

## Accessibility & Motion

AXIS includes structural resources to make accessible interfaces easier to build and to respect motion preferences:

- focus indicators with `:focus-visible`
- `visually-hidden` utility
- `prefers-reduced-motion` support
- inherited typography and color in form controls
- semantic HTML structure as the template baseline

AXIS provides the technical foundation; final accessibility implementation remains the responsibility of the consuming project.

## Functions and Mixins

### Functions

The core includes:

- `bp($size)` — validated access to the breakpoint map
- `z($layer)` — validated access to the z-index map
- `rem($pixel)` — converts unitless pixel values to `rem`
- `color-dark($color, $amount)` — reduces a color's lightness
- `color-light($color, $amount)` — increases a color's lightness

### Mixins

Main mixins include:

- `container()`
- `flex()`
- `grid()`
- `grid-auto()`
- `respond()`
- `respond-up()`
- `absolute-center`
- `visually-hidden`
- `focus-ring()`
- `truncate()`

## Components

### Button

```html
<button class="button size-sm">Small</button>
<button class="button size-md is-pill">Medium</button>
<button class="button size-lg is-ghost">Large</button>
<button class="button size-xl" disabled>Disabled</button>
```

Main modifiers demonstrated in the boilerplate: `size-sm`, `size-md`, `size-lg`, `size-xl`, `is-pill` and `is-ghost`.

### Card

```html
<div class="card is-interactive">
  <div class="card__content is-center">
    <h4>Title</h4>
    <p>Card content.</p>
  </div>
</div>
```

Examples of modifiers and states: `is-interactive` and `is-center`.

### Badge

```html
<span class="badge">Default</span>
```

The components are intentionally neutral. AXIS provides the structure; the consuming project defines the visual language.

## Layout System

### Container

```html
<div class="container">
  <!-- max-width: 1400px (default) -->
  <div class="container-sm"><!-- max-width: 576px --></div>
  <div class="container-md"><!-- max-width: 768px --></div>
  <div class="container-lg"><!-- max-width: 1024px --></div>
  <div class="container-xl"><!-- max-width: 1280px --></div>
  <div class="container-xxl"><!-- max-width: 1400px --></div>
  <div class="container-3xl"><!-- max-width: 1536px --></div>
</div>
```

### Flex

```html
<div class="flex items-center justify-between">
  <div class="flex flex-col items-start">
    <div class="flex flex-wrap justify-center"></div>
  </div>
</div>
```

Available modifiers: `flex-col`, `flex-wrap`, `justify-start`, `justify-center`, `justify-between`, `justify-end`, `items-stretch`, `items-center`, `items-start`, `items-end`, `items-baseline`.

### Grid

```html
<div class="grid-3">
  <!-- 3 fixed columns -->
</div>

<div class="grid-3 grid-1-md">
  <!-- 3 columns → 1 column at md -->
</div>

<div class="grid-auto">
  <!-- responsive automatic columns -->
  <div class="col-span-2"><!-- item spans 2 columns --></div>
</div>
```

> Responsive `.grid-{n}-{bp}` variants override only `grid-template-columns`. The base `.grid-{n}` class should always be present on the element.

## HTML Partials and Multi-Page Support

AXIS V3 adds `src/html/` for reusable markup fragments:

```html
<load src="src/html/header.html" />

<main></main>

<load src="src/html/footer.html" />
```

The Vite configuration uses `vite-plugin-html-inject` to process these partials.

`vite.config.js` also exposes Rollup entry points through `rollupOptions.input`, leaving the foundation ready to grow into a multi-page setup without changing the build architecture.

## JavaScript Structure

`src/js/script.js` remains the main entry point. It imports the Sass architecture and provides clear points for registering:

```text
src/js/
├── base/        → global scripts and helpers
├── components/  → isolated UI logic
└── vendor/      → third-party integrations
```

In V3, internal documentation was simplified and directory responsibilities are now explained directly in code comments, reducing the need for secondary README files scattered across implementation folders.

## How to Use AXIS

### 1. Create your repository from the Template

AXIS is a repository template. On GitHub, click the green **Use this template → Create a new repository** button to generate a clean project. Then clone your new repository:

```bash
git clone https://github.com/YOUR-USERNAME/your-project-name.git
cd your-project-name
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Start the development server

```bash
yarn dev
```

Vite starts the local development server with HMR. Changes to `.scss`, `.js` and HTML partials are included in the development flow.

### 4. Generate a production build

```bash
yarn build
```

Vite compiles Sass, bundles modules and generates optimized production files in the `dist/` directory.

### 5. Preview the production build

```bash
yarn preview
```

## Starting a New Project with AXIS

A recommended flow:

1. **Update the project identity**
   - `package.json`
   - `index.html`
   - `public/manifest.json`
   - favicon and social-sharing assets

2. **Configure primitive tokens**
   - colors
   - typography
   - spacing
   - radius
   - motion
   - opacity
   - elevation
   - breakpoints and containers

3. **Define semantic tokens**
   - create aliases such as `primary`, `surface`, `text`, `border`, `focus` or motion roles when appropriate

4. **Configure the global structure**
   - header/footer in `src/html/` and `src/sass/sections/`
   - reusable patterns in `src/sass/components/`
   - page-specific styles in `src/sass/pages/`

5. **Build the interface**
   - use AXIS layout utilities as the structural foundation
   - keep page and component rules isolated
   - add JavaScript only where interaction actually requires it

6. **Validate the production build**

```bash
yarn build
```

## Production Workflow

The production pipeline is handled by Vite. Running `yarn build` processes Sass and JavaScript, resolves assets and generates the `dist/` directory ready for deployment.

When final CSS size is critical, unused-style removal can be handled as a project-specific optimization step by the consuming project.

## Versioning

AXIS follows semantic versioning:

- `MAJOR` — breaking architectural or API changes
- `MINOR` — new backward-compatible features
- `PATCH` — backward-compatible fixes and adjustments

See the [CHANGELOG](./CHANGELOG.md) to follow changes between versions.

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) to learn how to open issues and propose improvements.

If AXIS helped you or accelerated your project, consider supporting its development:

☕ [Buy Me a Coffee](https://buymeacoffee.com/lucascode)

## License

MIT License — © 2026 Lucas Couto

See the [LICENSE](./LICENSE) file for details.

<br>
<br>
<br>

<div align="center">

`</>`

**AXIS // Front-End Foundation**

Developed by [**ʟᴜᴄᴀꜱ ᴄᴏᴜᴛᴏ**](https://github.com/lvcascouto)

</div>
