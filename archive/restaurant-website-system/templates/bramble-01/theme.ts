// theme.ts — bramble-01
//
// Locked tokens extracted from inputs/framer-templates/bramble-01/meta/*.json.
// See research/template-audits/bramble-01.md §4 for source data and §12 for personalization rules.
//
// FIRST LIGHT-MODE TEMPLATE IN THE CATALOG. Section-level bg switching is
// structural — multiple backgrounds per page, not a single canvas.

export const theme = {
  name: 'bramble-01',
  archetype: 'retro-cocktail-bar-with-food',
  mode: 'light',

  color: {
    // SECTION BACKGROUNDS — template has multiple bg registers per page
    bgCream:       '#F5F2E8', // polaroid strip, mailing list, footer
    bgDark:        '#171717', // "The Menus", "Gift Cards / Careers"
    bgWhite:       '#FFFFFF', // browser body bg
    // TEXT
    textDark:      '#111111', // on cream sections
    textCream:     '#FCFFE2', // on dark sections — pale butter-yellow, NOT pure white
    textMuted:     '#6B6B6B', // muted body on cream sections
    textMutedCream: '#C2C0A8', // muted body on dark sections
    // Borders / accents
    borderDark:    '#2A2A2A', // on dark bg
    borderCream:   '#1F1F1F', // outlined buttons on cream
    polaroidBorder: '#FFFFFF', // white border on polaroids
    overlay:       'rgba(23, 23, 23, 0.25)', // hero scrim for wordmark legibility
    // No saturated accent — warmth comes from photography + palette + type.
  },

  font: {
    display: 'var(--font-crimson), Garamond, serif', // Crimson Pro
    body:    'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
  },

  // Display type scale — Crimson Pro at weight 300 is THE signature. Never bold.
  type: {
    heroWordmark:  { size: 160, lineHeight: 140, tracking: 0,  weight: 300, transform: 'uppercase' },
    pageTitle:     { size: 80,  lineHeight: 80,  tracking: 0,  weight: 300, transform: 'uppercase' },
    sectionH1:     { size: 56,  lineHeight: 60,  tracking: 0,  weight: 300, transform: 'uppercase' },
    sectionLabel:  { size: 72,  lineHeight: 80,  tracking: 0,  weight: 300, transform: 'none' }, // "Food" / "Drinks" in the Menus split
    taglineH2:     { size: 34,  lineHeight: 41,  tracking: 0,  weight: 300, transform: 'uppercase' },
    bodyH3:        { size: 24,  lineHeight: 29,  tracking: 0,  weight: 300, transform: 'uppercase' },
    marqueeItem:   { size: 48,  lineHeight: 56,  tracking: 2,  weight: 300, transform: 'uppercase' },
    button:        { size: 16,  lineHeight: 16,  tracking: 0,  weight: 600, transform: 'none' },   // Inter weight 600
    address:       { size: 12,  lineHeight: 16,  tracking: 2,  weight: 600, transform: 'uppercase' }, // tracked-out small caps
    body:          { size: 15,  lineHeight: 24,  tracking: 0,  weight: 400, transform: 'none' },
    bodySm:        { size: 13,  lineHeight: 20,  tracking: 0,  weight: 400, transform: 'none' },
  },

  layout: {
    pagePadding: { desktop: 40, mobile: 20 },
    sectionPadding: { desktop: 96, mobile: 64 },
    maxWidth: 1280,
    polaroid: {
      width: 260,
      aspect: '1 / 1',          // square interior
      borderWidth: 12,          // thin white border top/sides
      borderBottom: 40,         // caption-style thick bottom
      rotationRange: 6,         // ± degrees
    },
    slideshow: {
      intervalMs: 2800,
      transitionMs: 700,
    },
    marquee: {
      loopSeconds: 48,
    },
  },

  radius: {
    pill:   9999,
    button: 6,
    card:   4,
  },

  motion: {
    intensity: 2,
    revealStagger: 0.12,
    revealDuration: 0.6,
    revealLift: 24,
    transitionDuration: 0.3,
    easing: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
} as const;

export type Theme = typeof theme;
