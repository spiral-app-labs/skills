// theme.ts — Da Baffone fork
//
// Locked tokens extracted from inputs/framer-templates/gusto-01/meta/*.json.
// See research/template-audits/gusto-01.md §4 for source data and §12 for
// personalization rules.
//
// DARK-MONOLITHIC heritage-Italian trattoria. All four pages render on the
// warm-black canvas #0F110C (not two-mode as source.md initially claimed —
// the audit corrected this). Cream text #FFFCF4 + italic-led Sorts Mill
// Goudy display + Figtree body carry the register. Lavender #9E9EFF is kept
// as a whisper micro-accent only (nav + tiny glyphs); replaced with a warm
// Tuscan-red secondary accent on primary chrome where lavender reads too
// pale against the dark canvas.

export const theme = {
  name: 'da-baffone',
  archetype: 'dark-monolithic-heritage-italian-trattoria',
  mode: 'dark',

  color: {
    // CANVAS
    canvas:        '#0F110C', // warm-black — all 4 pages. NOT navy (1776), NOT pure black (qitchen).
    surface:       '#17190F', // very subtle elevation on sidebar cards + hours-table container
    overlay:       'rgba(14,16,17,0.72)', // testimonial-overlay card bg on hero photos (backdrop-blur)
    buttonBgDark:  'rgba(14,16,17,0.28)', // semi-translucent dark button variant
    // TEXT
    ink:           '#FFFCF4', // warm cream primary — tablecloth cream, load-bearing
    inkMuted:      'rgba(255,252,244,0.65)', // secondary text (descriptions, meta)
    inkQuiet:      'rgba(255,252,244,0.42)', // tertiary (meta captions, heritage stamp)
    white:         '#FFFFFF',
    // ACCENTS
    accent:        '#9E9EFF', // lavender — nav link + micro-accent only. Whispered, not load-bearing.
    accentWarm:    '#C69A4E', // ochre — used on the star-rating glyph so it reads against dark.
    // UTILITY
    divider:       'rgba(255,252,244,0.12)', // hairline editorial dividers
    dividerStrong: 'rgba(255,252,244,0.22)',
  },

  font: {
    display: 'var(--font-sorts-mill-goudy), "EB Garamond", Garamond, serif', // Sorts Mill Goudy (Google Fonts)
    body:    'var(--font-figtree), ui-sans-serif, system-ui, -apple-system, sans-serif',
  },

  // Display = Sorts Mill Goudy 400 (italics are load-bearing). Body = Figtree 400.
  // Single display size (48px) is part of the register — tight scale is deliberate.
  type: {
    heroQuote:     { size: 48,  lineHeight: 52.8, tracking: 0,    weight: 400, transform: 'none', italic: true  },
    pageTitle:     { size: 48,  lineHeight: 52.8, tracking: 0,    weight: 400, transform: 'none', italic: false },
    manifestoH2:   { size: 48,  lineHeight: 52.8, tracking: 0,    weight: 400, transform: 'none', italic: false },
    ownerName:     { size: 20,  lineHeight: 24,   tracking: 0,    weight: 400, transform: 'none', italic: false },
    body:          { size: 15,  lineHeight: 22,   tracking: 0,    weight: 400, transform: 'none', italic: false }, // bumped from source's 14px for readability per audit §7
    bodySm:        { size: 13,  lineHeight: 18,   tracking: 0,    weight: 400, transform: 'none', italic: false },
    menuSection:   { size: 15,  lineHeight: 18,   tracking: 0,    weight: 400, transform: 'none', italic: false },
    navLabel:      { size: 12,  lineHeight: 16,   tracking: 0.2,  weight: 400, transform: 'none', italic: false },
    button:        { size: 12,  lineHeight: 16,   tracking: 0.2,  weight: 500, transform: 'none', italic: false },
    chip:          { size: 11,  lineHeight: 14,   tracking: 0.4,  weight: 500, transform: 'none', italic: false },
    stamp:         { size: 11,  lineHeight: 14,   tracking: 0.8,  weight: 400, transform: 'none', italic: false },
  },

  layout: {
    pagePadding:    { desktop: 24, mobile: 16 },
    sectionPadding: { desktop: 96, mobile: 64 },
    maxWidth:       1440,
    heroGap:        12, // tight gap between the 3 hero cards — editorial density, not generous
    cardRadius:     16,
  },

  radius: {
    pill:   9999,
    button: 9999, // pill buttons for CTAs
    card:   16,
    chip:   9999,
    input:  8,
  },

  motion: {
    intensity: 1, // restrained — heritage register resists heavy motion
    revealStagger:      0.08,
    revealDuration:     0.6,
    revealLift:         16,
    transitionDuration: 0.35,
    easing: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
} as const;

export type Theme = typeof theme;
