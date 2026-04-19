// theme.ts — alinea-01
//
// Locked tokens extracted from inputs/reference-sites/alinea-01/meta/*.json.
// See research/template-audits/alinea-01.md §4 for source data and §12 for
// personalization rules.
//
// FIRST LIGHT-MODE CEREMONIAL TEMPLATE IN THE CATALOG. The warm-gray strip
// (#A8A6A1) bookends the page; Cormorant Garamond 500 display + EB Garamond
// 300 body at 1.8× line-height carry the register. No accent color — same
// discipline as qitchen but inverted to light-mode.

export const theme = {
  name: 'alinea-01',
  archetype: 'light-mode-michelin-ceremonial',
  mode: 'light',

  color: {
    // CANVAS
    canvas:       '#FFFFFF', // body / primary section bg
    stripWarm:    '#A8A6A1', // the signature warm-gray header/footer strip
    stripWarmDark: '#8C8B88', // secondary warm-gray for dividers / mailing list strip
    bgMuted:      '#F3F1EC', // subtle off-white for the mailing list strip and secondary surfaces
    // TEXT
    text:         '#000000', // primary
    textStrip:    '#FFFFFF', // on the warm-gray strip
    textMuted:    '#5F5E5B', // editorial body muted
    // ACCENTS (minimal)
    tockBlue:     '#1E3A8A', // Tock widget's navy blue — kept because it's the reservation platform's own brand
    divider:      '#E5E2DC', // hairline editorial divider
  },

  font: {
    display: 'var(--font-cormorant), "EB Garamond", Garamond, serif', // Cormorant Garamond
    body:    'var(--font-eb-garamond), Garamond, "Times New Roman", serif', // EB Garamond (substitute for adobe-garamond-pro)
  },

  // Display = Cormorant Garamond weight 500. Body = EB Garamond weight 300 at 1.8× line-height.
  // Going outside these weights changes the register per audit §12.4.
  type: {
    heroWordmark:  { size: 96,  lineHeight: 104,   tracking: 0,    weight: 500, transform: 'none' }, // "Alinea" hero wordmark
    pageTitle:     { size: 64,  lineHeight: 78.8,  tracking: 0,    weight: 500, transform: 'none' }, // h1 on sub-pages
    sectionH2:     { size: 44.8, lineHeight: 58.2, tracking: 0,    weight: 500, transform: 'none' }, // 2.8rem section headings
    sectionH3:     { size: 35.2, lineHeight: 46.9, tracking: 0,    weight: 500, transform: 'none' }, // 2.2rem sub-headings
    cardLabel:     { size: 28,  lineHeight: 36,    tracking: 0,    weight: 500, transform: 'none' }, // dining-tier card labels
    body:          { size: 19.2, lineHeight: 34.56, tracking: 0,   weight: 300, transform: 'none' }, // editorial prose at 1.8× LH
    bodySm:        { size: 16,  lineHeight: 26,    tracking: 0,    weight: 300, transform: 'none' },
    navLabel:      { size: 14.4, lineHeight: 18,   tracking: 0.288, weight: 500, transform: 'none' }, // nav links
    button:        { size: 14,  lineHeight: 16,    tracking: 0.2,  weight: 500, transform: 'none' },
    eyebrow:       { size: 12,  lineHeight: 16,    tracking: 1.6,  weight: 500, transform: 'uppercase' }, // small caps section labels
  },

  layout: {
    pagePadding:    { desktop: 40, mobile: 20 },
    sectionPadding: { desktop: 112, mobile: 72 },
    maxWidth: 1200,
    proseWidth: 680, // editorial body column width
    stripHeight: 88, // header/footer strip height
  },

  radius: {
    pill:   9999,
    button: 2, // very subtle — editorial register resists pill buttons except for nav CTA
    card:   2,
    input:  2,
  },

  motion: {
    intensity: 1, // subtle; matches Alinea's editorial pace
    revealStagger:      0.08,
    revealDuration:     0.6,
    revealLift:         24,
    transitionDuration: 0.4,
    easing: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
} as const;

export type Theme = typeof theme;
