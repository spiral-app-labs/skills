// theme.ts — bamzi-01
//
// Locked tokens extracted from inputs/framer-templates/bamzi-01/meta/*.json.
// See research/template-audits/bamzi-01.md §4 for source data and §12 for
// personalization rules.
//
// FIRST SATURATED-ACCENT TEMPLATE IN THE CATALOG. The accent does
// all the emphasis work across every section: eyebrow dots, CTA fills,
// timeline nodes, form submits. Single-accent discipline = the brand.

export const theme = {
  name: 'bamzi-01',
  archetype: 'accessible-casual-pan-asian-accent',
  mode: 'mixed', // dark hero + cream content + white cards + dark footer

  color: {
    // SECTION BACKGROUNDS
    bgDark:        '#0F1A1A', // hero, page headers, testimonial, footer — deep cool green-black
    bgCream:       '#F5F2EA', // content sections
    bgWhite:       '#FFFFFF', // cards, form fields
    // BRAND ACCENT — single color, relentless
    accent:        '#8D2618', // paprika red for warm-casual Mexican register
    accentSoft:    'rgba(141, 38, 24, 0.12)', // tint for subtle accent bg (eyebrow chips, hover)
    // TEXT
    textDark:      '#0F1A1A', // on cream/white
    textWhite:     '#FFFFFF', // on dark
    textMuted:     '#6B6B6B', // muted body on cream/white
    textMutedDark: '#B8B8B0', // muted body on dark
    // BORDERS
    borderLight:   '#E6E1D5', // on cream — card borders, menu row dividers
    borderDark:    '#1F2A2A', // on dark — subtle separators
    dotLeader:     '#C9C2B0', // the dotted leader in menu rows
  },

  font: {
    display: 'var(--font-prata), "Times New Roman", serif', // Prata (Google Fonts, weight 400)
    body:    'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
  },

  // Display type scale — Prata weight 400 throughout. Going heavier kills the elegance.
  type: {
    heroH1:        { size: 64, lineHeight: 80,   tracking: 0,  weight: 400, transform: 'none' },      // Dark hero title
    sectionH2:     { size: 96, lineHeight: 96,   tracking: 0,  weight: 400, transform: 'none' },      // Mid-page display H2
    sectionH3:     { size: 48, lineHeight: 57.6, tracking: 0,  weight: 400, transform: 'none' },      // Sub-section headings
    sectionH4:     { size: 32, lineHeight: 40,   tracking: 0,  weight: 400, transform: 'none' },      // Category block titles
    menuItem:      { size: 18, lineHeight: 26,   tracking: 0,  weight: 400, transform: 'none' },      // Menu item name (Prata-set)
    eyebrow:       { size: 12, lineHeight: 16,   tracking: 2,  weight: 600, transform: 'uppercase' }, // Orange-dot label (Inter)
    navLabel:      { size: 16, lineHeight: 19.2, tracking: 0,  weight: 600, transform: 'uppercase' }, // Inter weight 600 uppercase
    button:        { size: 16, lineHeight: 16,   tracking: 0,  weight: 600, transform: 'uppercase' },
    body:          { size: 16, lineHeight: 26,   tracking: 0,  weight: 400, transform: 'none' },
    bodySm:        { size: 14, lineHeight: 22,   tracking: 0,  weight: 400, transform: 'none' },
    price:         { size: 16, lineHeight: 24,   tracking: 0,  weight: 500, transform: 'none' },
  },

  layout: {
    pagePadding:    { desktop: 40, mobile: 20 },
    sectionPadding: { desktop: 112, mobile: 72 },
    maxWidth: 1200,
    heroDecorSize: 240, // leaf decoration width in hero
  },

  radius: {
    pill:   9999,
    button: 6,
    card:   12, // chef cards, blog cards
    input:  8,
  },

  motion: {
    intensity: 2,
    revealStagger:      0.1,
    revealDuration:     0.55,
    revealLift:         50, // matches observed matrix(1,0,0,1,0,50) → 0 transform from meta
    transitionDuration: 0.3,
    easing: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
} as const;

export type Theme = typeof theme;
