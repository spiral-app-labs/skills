// theme.ts — latte-01
//
// Locked tokens extracted from inputs/framer-templates/latte-01/meta/*.json.
// See research/template-audits/latte-01.md §4 for source data and §12 for
// personalization rules.
//
// FIRST POPPINS-ONLY (single-family) TEMPLATE. No serif pair — hierarchy
// comes from weight (600 → 500 → 400) and size (58 → 42 → 24 → 16). Warmth
// lives inside the wood-staged product photography, not in accent color.

export const theme = {
  name: 'latte-01',
  archetype: 'warm-cafe-specialty-coffee',
  mode: 'light',

  color: {
    // CANVAS
    canvas:     '#FFFBF0', // cream / ivory — warmer than bramble's #F5F2E8
    card:       '#FFFEF8', // slightly paler cream for lifted menu/blog cards
    // TEXT
    ink:        '#000000', // pure black for all headings + body
    inkMuted:   '#4A4A4A', // dates, muted sublabels
    // DIVIDERS / CHROME
    divider:    '#EDE8D8', // subtle cream-on-cream hairline
    // CTA
    ctaBg:      '#000000', // solid black pill CTA
    ctaText:    '#FFFFFF',
    // Eyebrow chip
    chipBorder: '#E0D9C2',
    star:       '#F5B400', // Google star yellow (rating chip only)
    // no accent color — warmth is photography-delivered
  },

  font: {
    // Poppins only — single humanist sans. Multi-weight 400/500/600/700.
    sans: 'var(--font-poppins), ui-sans-serif, system-ui, sans-serif',
  },

  // Per audit §4: h1 58/69.6/600, h2 42/50.4/500, h3 24/33.6/500, body 16/20.8/400.
  type: {
    heroH1:     { size: 58,  lineHeight: 69.6, tracking: 0,   weight: 600, transform: 'none' },
    sectionH2:  { size: 42,  lineHeight: 50.4, tracking: 0,   weight: 500, transform: 'none' },
    h3:         { size: 24,  lineHeight: 33.6, tracking: 0,   weight: 500, transform: 'none' },
    categoryLabel: { size: 14, lineHeight: 20, tracking: 0.2, weight: 500, transform: 'none' }, // pill tag
    itemName:   { size: 18,  lineHeight: 26,   tracking: 0,   weight: 500, transform: 'none' }, // menu item name
    itemDesc:   { size: 14,  lineHeight: 20,   tracking: 0,   weight: 400, transform: 'none' }, // menu item description
    price:      { size: 18,  lineHeight: 26,   tracking: 0,   weight: 500, transform: 'none' },
    body:       { size: 16,  lineHeight: 20.8, tracking: 0,   weight: 400, transform: 'none' },
    bodyLg:     { size: 18,  lineHeight: 28.8, tracking: 0,   weight: 400, transform: 'none' },
    navLabel:   { size: 15,  lineHeight: 20,   tracking: 0,   weight: 500, transform: 'none' },
    eyebrowSm:  { size: 13,  lineHeight: 18,   tracking: 0.2, weight: 500, transform: 'none' },
    button:     { size: 15,  lineHeight: 20,   tracking: 0,   weight: 500, transform: 'none' },
  },

  layout: {
    pagePadding:    { desktop: 40, mobile: 20 },
    sectionPadding: { desktop: 96, mobile: 64 },
    maxWidth: 1200,
    proseWidth: 640,
  },

  // Radius scale: cards/photos 20–24, buttons pill 9999, small chips pill.
  radius: {
    pill:   9999,
    button: 9999, // pill CTA
    card:   24,
    photo:  20,
    chip:   9999,
  },

  motion: {
    intensity: 1, // lowest in catalog — Latte ties with Alinea
    revealStagger:      0.06,
    revealDuration:     0.5,
    revealLift:         18,
    transitionDuration: 0.3,
    easing: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
} as const;

export type Theme = typeof theme;
