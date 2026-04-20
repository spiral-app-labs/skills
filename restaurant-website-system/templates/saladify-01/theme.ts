// theme.ts — saladify-01
//
// Locked tokens extracted from inputs/framer-templates/saladify-01/meta/*.json.
// See research/template-audits/saladify-01.md §4 for source data and §12 for
// personalization rules.
//
// FIRST BRIGHT-LIGHT-GREEN PALETTE IN THE CATALOG. Spring-green section bg +
// deep-forest-green + deep-red-brown accents + cream subsection bg + orange
// CTA pop. Passion One chunky display + Bricolage Grotesque body.
//
// DUAL-ARCHETYPE: As-shipped reads meal-kit (70%); flips to fast-casual
// storefront with 3 content edits documented in README.

export const theme = {
  name: 'saladify-01',
  archetype: 'bright-light-fast-casual-health-meal-kit-hybrid',
  mode: 'light',

  color: {
    // CANVAS
    canvas:             '#FFFFFF', // body / primary section bg
    canvasGreenSection: '#D5E9A5', // spring-green hero + closing-CTA band bg (color-picked from /tmp/saladify-view/)
    canvasCream:        '#FFF2E6', // warm cream subsection bg (intro row, How-It-Works, testimonials)
    canvasPeach:        '#FCE8D4', // slightly warmer peach for intro row variation
    // ACCENTS
    accentGreen:        '#123A14', // deep forest green — H1 color, Farm-Fresh band bg, primary accent (rgb(18,58,20))
    accentBrown:        '#331612', // deep red-brown — Nutrients band bg, footer bg, /menu H1, dish names (rgb(51,22,18))
    accentOrange:       '#E67E3B', // Order Now CTA — contrast pop from outside core palette (audit personalization opportunity)
    accentOrangeDark:   '#C86A2D', // hover state for orange CTA
    // DISH TILE PASTELS — rotating bg for DishTileCard (menu playful-catalog identity)
    tilePink:    '#FFD6DA',
    tileBlue:    '#CDE4F0',
    tileLime:    '#DDEEAE',
    tileOrange:  '#FFD9B0',
    tileTeal:    '#B9DED9',
    // TEXT
    text:         '#1A1A1A',
    textOnDark:   '#FFFFFF',
    textOnGreen:  '#FFFFFF',
    textMuted:    '#5A5A5A',
    divider:      '#E5E2DC',
  },

  font: {
    display: 'var(--font-passion-one), "Passion One", system-ui, sans-serif', // Passion One — chunky rounded display
    body:    'var(--font-bricolage), "Bricolage Grotesque", system-ui, sans-serif', // Bricolage Grotesque — variable humanist sans
  },

  // Passion One 400 is its sole weight and reads visually bold.
  // Bricolage weight 400 body, 700 button labels.
  type: {
    heroH1:     { size: 88,  lineHeight: 96.8, tracking: 0,    weight: 400, transform: 'none' },
    pageTitle:  { size: 72,  lineHeight: 78,   tracking: 0,    weight: 400, transform: 'none' },
    sectionH2:  { size: 56,  lineHeight: 62,   tracking: 0,    weight: 400, transform: 'none' },
    dishName:   { size: 28,  lineHeight: 34,   tracking: 0.28, weight: 400, transform: 'none' },
    stepLabel:  { size: 24,  lineHeight: 30,   tracking: 0,    weight: 400, transform: 'none' },
    body:       { size: 17,  lineHeight: 27,   tracking: 0,    weight: 400, transform: 'none' },
    bodySm:     { size: 14,  lineHeight: 22,   tracking: 0,    weight: 400, transform: 'none' },
    button:     { size: 16,  lineHeight: 20,   tracking: 0.2,  weight: 700, transform: 'none' },
    navLabel:   { size: 15,  lineHeight: 20,   tracking: 0,    weight: 500, transform: 'none' },
    price:      { size: 20,  lineHeight: 24,   tracking: 0,    weight: 700, transform: 'none' },
  },

  layout: {
    pagePadding:    { desktop: 40, mobile: 20 },
    sectionPadding: { desktop: 96, mobile: 64 },
    maxWidth: 1280,
    proseWidth: 680,
  },

  radius: {
    pill:   9999,
    button: 9999, // pill buttons throughout — matches the rounded-warm character
    card:   20,
    tile:   24,
    input:  12,
  },

  motion: {
    intensity: 2, // moderate — carousel + reveals + hover fades
    revealStagger:      0.08,
    revealDuration:     0.6,
    revealLift:         24,
    transitionDuration: 0.4,
    easing: [0.44, 0, 0.56, 1] as [number, number, number, number], // matches meta transition cubic-bezier
  },
} as const;

export type Theme = typeof theme;
