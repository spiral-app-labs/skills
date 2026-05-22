export const theme = {
  name: 'port-edward',
  archetype: 'fox-river-heritage-seafood',
  mode: 'light',

  color: {
    canvas: '#F6F0E3',
    canvasDark: '#17343C',
    canvasAlt: '#ECE0C8',
    ink: '#21363A',
    inkOnDark: '#FCF8EC',
    inkMuted: '#756456',
    hairline: '#D8CBB2',
    accent: '#A4442F',
    accentDark: '#742D25',
    river: '#2E6570',
    brass: '#B58958',
  },

  font: {
    display: 'var(--font-imbue), "EB Garamond", Georgia, serif', // Imbue Variable — primary
    body:    'var(--font-imbue), "EB Garamond", Georgia, serif', // Imbue is used for body prose too
    script:  'var(--font-labelle), "Brush Script MT", cursive',  // La Belle Aurore — French caption accents
    sans:    'var(--font-inter), system-ui, sans-serif',         // Inter — form input utility sans (Geist substitute; Geist is not on Google Fonts)
  },

  type: {
    heroH1:      { size: 112, lineHeight: 106, tracking: 0, weight: 700, transform: 'uppercase' },
    sectionH2Lg: { size: 72,  lineHeight: 76,  tracking: 0, weight: 500, transform: 'none' },
    sectionH2:   { size: 56,  lineHeight: 62,  tracking: 0, weight: 500, transform: 'none' },
    sectionH2Sm: { size: 40,  lineHeight: 46,  tracking: 0, weight: 500, transform: 'none' },
    cardH3:      { size: 32,  lineHeight: 36,  tracking: 0, weight: 500, transform: 'none' },
    body:        { size: 18,  lineHeight: 30,  tracking: 0,    weight: 400, transform: 'none' }, // editorial prose
    bodySm:      { size: 15,  lineHeight: 24,  tracking: 0,    weight: 400, transform: 'none' },
    wordmark:    { size: 20,  lineHeight: 24,  tracking: 0,    weight: 900, transform: 'uppercase' },
    eyebrow:     { size: 12,  lineHeight: 16,  tracking: 0,    weight: 900, transform: 'uppercase' },
    navLabel:    { size: 15,  lineHeight: 20,  tracking: 0,    weight: 400, transform: 'none' },
    button:      { size: 14,  lineHeight: 16,  tracking: 0,    weight: 900, transform: 'uppercase' },
    script:      { size: 34,  lineHeight: 40,  tracking: 0,    weight: 400, transform: 'none' },
  },

  layout: {
    pagePadding:    { desktop: 48, mobile: 20 },
    sectionPadding: { desktop: 128, mobile: 80 },
    maxWidth: 1280,
    proseWidth: 680,
  },

  radius: {
    pill:   9999,
    button: 0,   // hard rectangles — brochure feel resists rounding
    card:   4,   // cards have hairline borders, barely-there radius
    input:  4,
  },

  motion: {
    intensity: 2,
    revealStagger:      0.1,
    revealDuration:     0.7,
    revealLift:         32,
    // scrapbook rotation range — vignette photos drift between these angles
    rotationRange: [-3, -2, 2, 3, 5] as const,
    transitionDuration: 0.4,
    easing: [0.44, 0, 0.56, 1] as [number, number, number, number], // cubic-bezier from source meta
  },
} as const;

export type Theme = typeof theme;
