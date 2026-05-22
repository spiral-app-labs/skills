// theme.ts — cafe-olympic (latte-01 fork)
//
// Style-tuned away from the latte-01 European-coffee-bar default toward a
// Crystal-Lake corner-store breakfast diner with a Greek-American spine
// (audit Block 5 register-risk mitigation): warm cream canvas + ochre accent
// + diner-red CTA, plus a display serif on the wordmark for heritage signal.

export const theme = {
  name: 'cafe-olympic',
  archetype: 'crystal-lake-greek-american-diner',
  mode: 'light',

  color: {
    canvas:     '#FBF6E9',
    card:       '#FFFCF0',
    ink:        '#1F1A14',
    inkMuted:   '#5A4F40',
    divider:    '#E5DCC1',
    ctaBg:      '#9A2A1F',
    ctaText:    '#FBF6E9',
    chipBorder: '#D9CDA8',
    star:       '#F5B400',
    accent:     '#B8862E',
  },

  font: {
    sans: 'var(--font-poppins), ui-sans-serif, system-ui, sans-serif',
    display: 'var(--font-cormorant), "Cormorant Garamond", Georgia, serif',
  },

  type: {
    heroH1:     { size: 72,  lineHeight: 78,   tracking: -1, weight: 700, transform: 'uppercase' },
    sectionH2:  { size: 42,  lineHeight: 50.4, tracking: 0,  weight: 500, transform: 'none' },
    h3:         { size: 24,  lineHeight: 33.6, tracking: 0,  weight: 500, transform: 'none' },
    categoryLabel: { size: 14, lineHeight: 20, tracking: 0.2, weight: 500, transform: 'none' },
    itemName:   { size: 18,  lineHeight: 26,   tracking: 0,   weight: 500, transform: 'none' },
    itemDesc:   { size: 14,  lineHeight: 20,   tracking: 0,   weight: 400, transform: 'none' },
    price:      { size: 18,  lineHeight: 26,   tracking: 0,   weight: 500, transform: 'none' },
    body:       { size: 16,  lineHeight: 24,   tracking: 0,   weight: 400, transform: 'none' },
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

  radius: {
    pill:   9999,
    button: 9999,
    card:   24,
    photo:  20,
    chip:   9999,
  },

  motion: {
    intensity: 1,
    revealStagger:      0.06,
    revealDuration:     0.5,
    revealLift:         18,
    transitionDuration: 0.3,
    easing: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
} as const;

export type Theme = typeof theme;
