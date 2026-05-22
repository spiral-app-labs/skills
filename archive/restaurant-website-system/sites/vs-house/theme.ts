// theme.ts — V's House (vs-house)
// Forked from bamzi-01. Tuned for: warm-modern Vietnamese family kitchen,
// upscale-casual $$-$$ register, designer-built room (Hatsumi Kuzuu),
// 18-cocktail bar program, three generations on Bedford-Euless Road since 1982.
//
// Palette tuned away from pan-asian generic toward Vu-family-warm:
//   bgDark   → deep teal-charcoal (matches HDR-warm interior shots)
//   accent   → warm terracotta (lacquer red shifted toward Vietnamese-coffee-tone)
//   bgCream  → warm parchment (paler than the bistro-wasabi bone)
// Single-accent discipline preserved (audit Block 4 / template lock).

export const theme = {
  name: 'vs-house',
  archetype: 'vietnamese-heritage-family-kitchen',
  mode: 'mixed',

  color: {
    bgDark:        '#15201F', // deep teal-charcoal — warmer than bamzi green-black
    bgDarker:      '#0C1413', // deepest section (hero overlay, footer)
    bgCream:       '#F4ECDD', // warm parchment (Vu family heritage)
    bgWhite:       '#FFFFFF',
    bgSoft:        '#FAF5E9', // hover, subtle bands

    accent:        '#C8431C', // warm terracotta — lacquer red, NOT bamzi orange
    accentDark:    '#9C2F12',
    accentSoft:    'rgba(200, 67, 28, 0.12)',
    accentHair:    'rgba(200, 67, 28, 0.30)',

    gold:          '#C29A55', // small heritage detail (ledger lines, dividers, eyebrow nodes on dark)

    textDark:      '#15201F',
    textWhite:     '#FBF6EC',
    textMuted:     '#6B5E48',
    textMutedDark: '#B8AC95',

    borderLight:   '#E2D7BD',
    borderDark:    '#22302E',
    dotLeader:     '#C9BB97',
  },

  font: {
    display: 'var(--font-prata), "Times New Roman", serif',
    body:    'var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif',
  },

  type: {
    heroH1:        { size: 84, lineHeight: 88,   tracking: -1, weight: 400, transform: 'none' },
    heroH1Mobile:  { size: 52, lineHeight: 56,   tracking: -1, weight: 400, transform: 'none' },
    sectionH2:     { size: 72, lineHeight: 80,   tracking: -0.5, weight: 400, transform: 'none' },
    sectionH3:     { size: 40, lineHeight: 48,   tracking: 0,  weight: 400, transform: 'none' },
    sectionH4:     { size: 28, lineHeight: 36,   tracking: 0,  weight: 400, transform: 'none' },
    menuItem:      { size: 19, lineHeight: 26,   tracking: 0,  weight: 400, transform: 'none' },
    eyebrow:       { size: 12, lineHeight: 16,   tracking: 2.5, weight: 600, transform: 'uppercase' },
    navLabel:      { size: 13, lineHeight: 16,   tracking: 1.5, weight: 600, transform: 'uppercase' },
    button:        { size: 14, lineHeight: 16,   tracking: 1,  weight: 600, transform: 'uppercase' },
    body:          { size: 16, lineHeight: 28,   tracking: 0,  weight: 400, transform: 'none' },
    bodySm:        { size: 14, lineHeight: 22,   tracking: 0,  weight: 400, transform: 'none' },
    price:         { size: 16, lineHeight: 24,   tracking: 0,  weight: 500, transform: 'none' },
  },

  layout: {
    pagePadding:    { desktop: 40, mobile: 20 },
    sectionPadding: { desktop: 112, mobile: 72 },
    maxWidth: 1240,
    heroDecorSize: 260,
  },

  radius: {
    pill:   9999,
    button: 4,
    card:   2, // sharp corners — heritage-restaurant register
    input:  4,
  },

  motion: {
    intensity: 2,
    revealStagger:      0.08,
    revealDuration:     0.6,
    revealLift:         28,
    transitionDuration: 0.35,
    easing: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
} as const;

export type Theme = typeof theme;
