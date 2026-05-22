// theme.ts — velvet-shaker-01
//
// Tokens locked against inputs/framer-templates/velvet-shaker-01/meta/*.json.
// See research/template-audits/velvet-shaker-01.md §4 / §11 / §12 for source data.
//
// FIRST TWO-TOKEN TEMPLATE IN THE CATALOG. Canvas + ink, nothing else.
// FIRST SERIF-FREE TEMPLATE. Inter Tight only — size-only hierarchy, weight locked at 500.
// FIRST NON-STICKY-NAV TEMPLATE. No persistent book CTA — deliberate discipline statement.
//
// Do not add a third color. Do not add a serif. Do not add a second weight.
// Warmth comes from photography only.

export const theme = {
  name: 'velvet-shaker-01',
  archetype: 'dark-modernist-cocktail-bar',
  mode: 'dark',

  color: {
    // CANVAS — warm near-black. G channel 1 tick higher than R/B gives slight warmth.
    canvas: '#0F100A',
    // INK — warm candlelit-paper cream. Single text color, everywhere.
    ink:    '#E6E0C6',
    // Low-opacity ink for dividers / form-input borders. Derived from ink.
    inkLow: 'rgba(230, 224, 198, 0.18)',
    // Inverted submit button — only chrome in the system.
    buttonBg:   '#E6E0C6',
    buttonInk:  '#000000',
  },

  // SINGLE FAMILY. Inter Tight only. Weight locked at 500 everywhere.
  // Size alone carries hierarchy — 16 / 22 / 26 / 35 / 42 / 102.
  font: {
    sans: 'var(--font-inter-tight), "Inter Tight", "Inter", system-ui, sans-serif',
  },

  type: {
    // Massive display — /menu, /about, /contact h1 + footer wordmark echo.
    display:      { size: 102, lineHeight: 122.4, tracking: 0, weight: 500 },
    // Home editorial opener h2. About h1 continuation.
    displayMid:   { size: 42,  lineHeight: 50.4,  tracking: 0, weight: 500 },
    // "Romantic" label / 03//OCCASIONS section opener.
    h3Large:      { size: 35,  lineHeight: 42,    tracking: 0, weight: 500 },
    // Home h1 (small — template deliberately punts the display moment on home).
    // Also menu cocktail names + contact FAQ questions.
    h3:           { size: 26,  lineHeight: 31.2,  tracking: 0, weight: 500 },
    // Mixologist role labels.
    h4:           { size: 22,  lineHeight: 26.4,  tracking: 0, weight: 500 },
    // Body — note weight 500 (not 400). Whole site is one weight.
    body:         { size: 16,  lineHeight: 22,    tracking: 0, weight: 500 },
    // Nav / tiny labels. Lowercase.
    nav:          { size: 14,  lineHeight: 18,    tracking: 0, weight: 500 },
    micro:        { size: 12,  lineHeight: 16,    tracking: 0, weight: 500 },
  },

  layout: {
    pagePadding:    { desktop: 40, mobile: 20 },
    sectionPadding: { desktop: 120, mobile: 64 },
    maxWidth: 1360,
    proseWidth: 640,
  },

  // Flat chrome — radius near-zero. Form inputs get 2px concession only.
  radius: {
    zero:   0,
    input:  2,
    button: 2,
    pill:   9999,
  },

  motion: {
    intensity: 1,
    revealStagger:      0.08,
    revealDuration:     0.6,
    revealLift:         16,
    transitionDuration: 0.4,
    easing: [0.44, 0, 0.56, 1] as [number, number, number, number],
  },
} as const;

export type Theme = typeof theme;
