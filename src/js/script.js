// ===================================================
// AXIS ▪︎ MAIN JS ENTRY POINT
// Acts as the bundler master, importing all JS modules
// and the Sass architecture to be processed by Vite.
// ===================================================

import "../sass/main.scss";

// == 1. Base Global ==
// Global scripts, helpers, and utility functions (e.g., globals, formatters)
import "./base/global.js";

// == 2. Vendor (Libs) ==
// Configuration and initialization for third-party libraries (e.g., Swiper, GSAP)

// == 3. Components ==
// Isolated JavaScript logic for UI components (e.g., menus, modals, tabs)
