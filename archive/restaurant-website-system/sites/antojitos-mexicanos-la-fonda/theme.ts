// theme.ts — pepper-01
//
// Locked tokens ground-truthed from inputs/framer-templates/pepper-01/meta/*.json
// and color-picked from /tmp/pepper-view/desktop-home.png (deal-card hex tokens
// — meta doesn't capture section bg so these are `[inferred]` per audit §4).
// See research/template-audits/pepper-01.md §4 for source data and §12 for
// personalization rules.
//
// FIRST ORDER-PRIMARY + FIRST SATURATED-CANDY-PALETTE TEMPLATE IN THE CATALOG.
// Cherry Bomb One bubble-letter wordmark (display, single weight 400) +
// Gabarito weight 800 on every headline carries the casual / party register.
// Brand red #FF003C flood (wordmark + footer + red pills). 4-card candy deal
// palette — red / yellow / green / orange — is the signature conversion surface.
// Intensity stays low (motion rating 1) — hover transitions only.

export const theme = {
  name: 'pepper-01',
  archetype: 'light-casual-order-primary-pizza-takeout',
  mode: 'light',

  color: {
    // CANVAS
    canvas:      '#FFFFFF', // body / primary section bg — pure white [observed]
    canvasWarm:  '#FFFBF0', // soft cream for subtle section breaks [inferred]
    // INK
    ink:         '#1A1A1A', // primary text / dark pill button bg [observed]
    inkSoft:     '#5A5A5A', // muted body copy
    // BRAND ACCENT (the #FF003C flood)
    accent:      '#FF003C', // brand red — wordmark, footer band, red pills [observed]
    accentHover: '#E00035', // hover-darker variant
    // CANDY DEAL-CARD PALETTE — [inferred, color-picked from desktop-home.png]
    accentDeal1: '#E8223B', // red deal card — Spicy Duo
    accentDeal2: '#F5C945', // yellow deal card — Cheese Lovers
    accentDeal3: '#3DAE4E', // green deal card — Veggie Delight
    accentDeal4: '#E87521', // orange deal card — Meat Treat
    // DARK SECTION
    bgDark:      '#1A1A1A', // testimonial band bg [inferred]
    textOnDark:  '#FFFFFF',
    textOnBrand: '#FFFFFF',
    // UTILITY
    cardBorder:  '#EFEDE8', // subtle off-white card outline
    divider:     '#EAEAEA',
    shadowCard:  'rgba(26, 26, 26, 0.06)',
  },

  font: {
    // Cherry Bomb One — brand-moment only (wordmark, footer brand). Single weight 400.
    display: 'var(--font-cherry-bomb), "Cherry Bomb One", "Fredoka", system-ui, sans-serif',
    // Gabarito — headlines (weight 800) + body + UI. Heavy geometric sans.
    body:    'var(--font-gabarito), "Gabarito", "Plus Jakarta Sans", system-ui, sans-serif',
  },

  // All headlines are Gabarito weight 800. Wordmark-only Cherry Bomb One weight 400.
  // Per audit §12.4 — changing these weights breaks the register.
  type: {
    wordmark:    { size: 36, lineHeight: 43.2, tracking: 0, weight: 400, transform: 'none' }, // Cherry Bomb One wordmark [observed]
    heroH1:      { size: 80, lineHeight: 96,   tracking: -1, weight: 800, transform: 'none' }, // Gabarito hero H1 [observed]
    sectionH2:   { size: 50, lineHeight: 60,   tracking: -0.5, weight: 800, transform: 'none' }, // Gabarito H2 [observed]
    cardTitle:   { size: 28, lineHeight: 39.2, tracking: 0, weight: 800, transform: 'none' }, // Gabarito H3 dish-name [observed]
    dealTitle:   { size: 32, lineHeight: 40,   tracking: 0, weight: 800, transform: 'none' }, // Gabarito deal-card name
    price:       { size: 22, lineHeight: 28,   tracking: 0, weight: 800, transform: 'none' }, // price / save-amount inside deals
    body:        { size: 16, lineHeight: 24,   tracking: 0, weight: 400, transform: 'none' }, // body copy
    bodySm:      { size: 14, lineHeight: 20,   tracking: 0, weight: 500, transform: 'none' },
    navLabel:    { size: 14, lineHeight: 20,   tracking: 0, weight: 600, transform: 'none' }, // nav links
    button:      { size: 15, lineHeight: 20,   tracking: 0, weight: 700, transform: 'none' },
    eyebrow:     { size: 12, lineHeight: 16,   tracking: 1.2, weight: 700, transform: 'uppercase' },
  },

  layout: {
    pagePadding:    { desktop: 40, mobile: 20 },
    sectionPadding: { desktop: 96, mobile: 64 },
    maxWidth: 1200,
    cardGap:  24,
  },

  radius: {
    pill:   9999, // order-now buttons, accordion pills
    button: 9999,
    card:   24,   // deal cards + dish cards
    cardSm: 16,   // dessert cards (tighter)
    input:  12,
  },

  motion: {
    intensity: 1, // hover-only per audit §4 — no scroll-driven motion
    hoverLift: 4,
    hoverScale: 1.02,
    transitionDuration: 0.25,
    easing: [0.4, 0, 0.2, 1] as [number, number, number, number],
    // A single slow marquee on the location strip is the only continuous motion
    marqueeDuration: 40, // seconds
  },
} as const;

export type Theme = typeof theme;
