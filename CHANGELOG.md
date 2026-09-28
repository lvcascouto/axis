# Changelog

All notable changes to AXIS will be documented in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to [Semantic Versioning](https://semver.org/).

## [3.0.0] — 2026-09-28

AXIS V3 is a structural refactor focused on making the foundation more systematic, scalable and easier to adapt across real projects.

### Added

- **Sass architecture:** Added the new `pages/` layer, expanding the architecture from five to six layers: `abstracts → base → layout → components → sections → pages`.
- **Page isolation:** Added `_home.scss`, `_error.scss` and the `pages/_index.scss` exporter for route-specific styles.
- **HTML partials:** Added `src/html/header.html` and `src/html/footer.html` for reusable markup fragments.
- **HTML injection:** Added `vite-plugin-html-inject` and `<load src="...">` support.
- **Multi-page readiness:** Extended `vite.config.js` with Rollup entry-point configuration via `rollupOptions.input`.
- **Container tokens:** Added the dedicated `abstracts/tokens/_container.scss` partial and separated container sizing from spacing.
- **PX → REM utility:** Added the `rem()` Sass function for converting unitless pixel values to `rem`.
- **Animation layer:** Added `base/_keyframes.scss` with reusable `fade-in`, `slide-up` and `spin` keyframes.
- **Semantic token areas:** Added dedicated semantic-token sections to applicable primitive token partials.
- **Expanded motion scale:** Added `600`, `800` and `1000` duration tokens.
- **Expanded opacity scale:** Added additional intermediate opacity tokens to provide a continuous range from `0` to `100`.
- **Expanded radius scale:** Added `none`, `2xl` and `3xl` radius tokens, including larger surface radii of 24px and 32px.
- **Expanded breakpoint map:** Added `3xs`, `xxl`, `3xl` and `4xl` while extending the full responsive range.
- **Expanded container map:** Added `xxl` and `3xl` container sizes.
- **Yarn workflow:** Added `yarn.lock` and standardized project setup/build commands around Yarn.

### Changed

- **Sass architecture:** Reorganized sections so `sections/` contains only global/reusable blocks such as header and footer; page-specific rules now live under `pages/`.
- **Comment conventions:** Standardized Sass and JavaScript comments around the `// ==` block style.
- **Documentation structure:** Removed secondary `README.md` files from implementation subdirectories and centralized project documentation at the repository root.
- **Token strategy:** Unified the spacing scale around 2px/4px micro increments and 8px macro anchors.
- **Typography scale:** Replaced the previous Major Third-based typography scale with a dedicated stepped scale and renamed font-weight tokens to semantic names such as `regular`, `medium`, `semi-bold`, `bold` and `extra-bold`.
- **Typography semantics:** Moved base and heading semantic typography tokens into `abstracts/tokens/_typography.scss`; `base/_typography.scss` now consumes those tokens to set element styles.
- **Line-height and tracking:** Added dedicated line-height and letter-spacing token scales.
- **Units:** Converted AXIS Sass values to `rem` wherever practical, including former pixel-based primitive values and component measurements.
- **Responsive mixins:** Rewrote `respond()` and `respond-up()` to use CSS comparison syntax (`width < value` and `width >= value`) instead of explicit `max-width` / `min-width` expressions.
- **Semantic consumption:** Adjusted components and project sections to consume semantic roles where appropriate instead of repeatedly mapping the same primitives in individual files.
- **Base styles:** Refined reset, global defaults and utility helpers for consistency with the V3 token system.
- **Components:** Updated Button, Card and Badge token usage and values to align with the revised scales and local semantic variables.
- **JavaScript documentation:** Cleaned `script.js` and `global.js` comments and clarified the responsibilities of `base/`, `components/` and `vendor/` areas directly in code.
- **Package manager:** Replaced the NPM-oriented workflow from V2 with Yarn-based dependency management in the project documentation and lockfile.
- **Vite configuration:** Reworked configuration comments in English and added HTML injection, multi-entry support and production asset output rules.

### Removed

- **`package-lock.json`:** Replaced by the tracked `yarn.lock` workflow.
- **Subdirectory README files:** Removed redundant README documentation from `src/`, `src/sass/` and `src/js/` implementation folders.
- **Page-specific styles from `sections/`:** Route-specific rules are no longer expected in global sections.
- **Major Third font-size tokens:** Removed the previous modular-ratio values from the primitive typography scale.
- **Container sizes from spacing:** Container constraints are now maintained in their own token partial.
- **Old responsive query construction:** The explicit `max-width` / `min-width` implementation has been replaced by CSS range syntax.

## [2.0.0] — 2026-05-14

### Added

- **Build System**: Full **Vite** integration for lightning-fast development (HMR) and automated production bundling.
- **JavaScript Architecture**: Modular architecture based on **ES Modules** (organized into `base/`, `components/`, and `vendor/` directories).
- **Dependency Management**: Implementation of `package.json` for professional package management via NPM.
- **Master Entry Point**: `script.js` now acts as the project orchestrator, importing both JavaScript modules and the Sass architecture.
- **Project Tooling**: Added essential CLI commands: `npm run dev`, `npm run build`, and `npm run preview`.

### Changed

- **Sass Workflow**: Migrated from `Live Sass Compiler` extension to Vite's native compiler (in-memory processing).
- **Favicon Strategy**: Moved `favicon.ico` to the project root for improved compatibility with crawlers and legacy browsers.
- **Asset Resolution**: Updated `index.html` to use absolute paths, ensuring reliable asset loading across different environments.
- **Project Documentation**: Refactored all README files to reflect the new automated workflow.

### Removed

- **Legacy Configuration**: Deleted `.vscode/settings.json` (removed dependency on third-party VS Code extensions).
- **Static CSS**: Removed the `src/css/` directory (styles are now processed dynamically in development).
- **Manual Minification**: Removed the `dist/script.min.js` placeholder (now handled automatically by the build pipeline).

## [1.0.0] — 2026-03-10

Initial release.

### Added

**Architecture**

- Five-layer Sass architecture following ITCSS principles: Abstracts → Base → Layout → Components → Sections
- Single entry point `main.scss` with full `@use` / `@forward` module system — no `@import`
- `.vscode/settings.json` pre-configured for Live Sass Compiler with dual output: expanded (`src/css/`) and compressed (`dist/`)

**Design Tokens** — 9 token files in `abstracts/tokens/`

- `_colors.scss` — grayscale scale (white → black) + 4 functional colors (green, yellow, red, blue)
- `_spacing.scss` — 8pt macro grid, micro UI scale, and semantic tokens `$gutter` and `$section-pad`
- `_typography.scss` — Major Third (1.25) scale + UI sizes, weights, line-heights and letter-spacings
- `_breakpoints.scss` — 6 desktop-first breakpoints: xxl, xl, lg, md, sm, xs
- `_motion.scss` — 5 durations + 4 easing curves (standard, in, out, back)
- `_elevation.scss` — 5 shadow levels (none → lg)
- `_layers.scss` — semantic z-index map: back, base, header, dropdown, overlay, modal, tooltip
- `_radius.scss` — 6 radius values: xs, sm, md, lg, xl, full
- `_opacity.scss` — 6 levels: 0, 20, 40, 60, 80, 100

**Functions** — `abstracts/functions/`

- `bp()` — safe breakpoint map access with `@error` on invalid keys
- `z()` — semantic z-index access with `@error` on invalid keys
- `color-dark()` / `color-light()` — color scaling via `color.scale()`

**Mixins** — `abstracts/mixins/`

- `container()` — centered wrapper with `padding-inline` and `margin-inline`
- `flex()` — shorthand flex container with optional direction, justify, align and gap
- `grid()` — fixed-column grid with configurable gap
- `grid-auto()` — responsive auto-fit grid using `minmax(min(100%, $min), 1fr)`
- `respond()` — desktop-first `max-width` media query
- `respond-up()` — `min-width` media query for progressive enhancement
- `absolute-center` — position absolute + translate(-50%, -50%)
- `focus-ring()` — accessible outline with configurable color and offset
- `visually-hidden` — accessible SR-only pattern
- `truncate()` — single-line and multi-line text truncation via `-webkit-line-clamp`

**Base layer**

- `_reset.scss` — box-sizing, margin/padding reset, accessible `focus-visible`, `text-size-adjust`, `scroll-behavior`
- `_typography.scss` — system-ui font stack, Major Third heading scale (h1 3.815rem → h6 1.25rem)
- `_global.scss` — responsive media, font inheritance for form elements, `prefers-reduced-motion`
- `_utilities.scss` — `.sr-only`, display, responsive visibility (`.hide-{bp}-down` / `.hide-{bp}-up`), position, text alignment, `.truncate`, `.truncate-2`, `.no-select`

**Layout layer**

- `_container.scss` — `.container` (default 1200px) + `.container-{sm|md|lg|xl|xxl}`
- `_flex.scss` — `.flex` with `flex-col`, `flex-wrap`, `justify-{start|center|between|end}`, `items-{stretch|center|start|end}`
- `_grid.scss` — `.grid-{1-12}`, `.col-span-{1-12}`, `.grid-auto`, responsive variants `.grid-{n}-{bp}` and `.col-span-{n}-{bp}`

**Components**

- `_button.scss` — base `.button`, sizes (sm/md/lg/xl), shapes (square/circle), variants (pill/ghost), disabled state
- `_card.scss` — `.card`, `.is-interactive` with hover/focus/active transitions, `.card__content` with `is-start`, `is-center`, `is-end`
- `_badge.scss` — inline pill badge using `currentColor`

**Sections**

- `_header.scss` and `_footer.scss` — empty partials, ready for project-specific styles

**Project structure**

- `index.html` — full meta setup: charset, viewport, SEO, Open Graph, Twitter Card, PWA manifest, favicons
- `assets/favicon/manifest.json` — PWA manifest template with icons
- `dist/script.min.js` — placeholder for manually minified JavaScript
- READMEs in every directory with guidelines, tips and best practices

---

### Upcoming Versions

Possible future improvements include:

- new base components
- documentation improvements
- example projects built with AXIS

---

_For upcoming changes, see open [issues](https://github.com/lucas16716/axis/issues) and [pull requests](https://github.com/lucas16716/axis/pulls)._
