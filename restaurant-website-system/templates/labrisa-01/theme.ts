// theme.ts — labrisa-01
//
// Locked tokens extracted from inputs/framer-templates/labrisa-01/meta/*.json.
// See research/template-audits/labrisa-01.md §4 for source data and §12 for
// personalization rules.
//
// FIRST FRENCH-RIVIERA TEMPLATE IN THE CATALOG. Two-token cream + cocoa
// (#FAF7ED / #452D26) with no accent — "paper and ink" discipline. Imbue
// Variable at 150px H1 across every entry page is the scale signature; 12px
// tracked-uppercase Imbue-black wordmark is the eyebrow/label system.

export const theme = {
  name: 'labrisa-01',
  archetype: 'french-riviera-coastal-upscale',
  mode: 'light',

  color: {
    // CANVAS
    canvas:      '#FAF7ED', // warm cream paper — primary body bg
    canvasDark:  '#452D26', // deep cocoa — mode-flip band bg + dark footer
    // TEXT
    ink:         '#452D26', // deep cocoa — primary text on cream
    inkOnDark:   '#FAF7ED', // cream reverse — on cocoa bands
    inkMuted:    '#7A5A50', // softened cocoa for captions / muted prose
    // UTILITY
    hairline:    '#E8DFC8', // subtle cream-ink line for card borders / dividers
  },

  font: {
    display: 'var(--font-imbue), "EB Garamond", Georgia, serif', // Imbue Variable — primary
    body:    'var(--font-imbue), "EB Garamond", Georgia, serif', // Imbue is used for body prose too
    script:  'var(--font-labelle), "Brush Script MT", cursive',  // La Belle Aurore — French caption accents
    sans:    'var(--font-inter), system-ui, sans-serif',         // Inter — form input utility sans (Geist substitute; Geist is not on Google Fonts)
  },

  // Display = Imbue weight 400 (contrast carries weight, not boldness).
  // Eyebrow/wordmark = Imbue weight 900, 12px letter-spacing, uppercase.
  // 150px H1 locked across all entry pages — responsive ramp 150 → 96 → 72 → 56.
  // See audit §12.4 — downsizing the H1 below 100px shifts register.
  type: {
    heroH1:      { size: 150, lineHeight: 150, tracking: -1.5, weight: 400, transform: 'none' }, // page-opening display
    sectionH2Lg: { size: 100, lineHeight: 100, tracking: -1.0, weight: 400, transform: 'none' }, // "Bienvenue!" / "The Journal"
    sectionH2:   { size: 75,  lineHeight: 78,  tracking: -0.6, weight: 400, transform: 'none' }, // pull-quote / "Opening hours"
    sectionH2Sm: { size: 50,  lineHeight: 54,  tracking: -0.3, weight: 400, transform: 'none' }, // menu category headers
    cardH3:      { size: 40,  lineHeight: 44,  tracking: -0.4, weight: 400, transform: 'none' }, // card labels
    body:        { size: 18,  lineHeight: 30,  tracking: 0,    weight: 400, transform: 'none' }, // editorial prose
    bodySm:      { size: 15,  lineHeight: 24,  tracking: 0,    weight: 400, transform: 'none' },
    wordmark:    { size: 20,  lineHeight: 24,  tracking: 12,   weight: 900, transform: 'uppercase' }, // LA BRISA eyebrow/label
    eyebrow:     { size: 12,  lineHeight: 16,  tracking: 2.4,  weight: 900, transform: 'uppercase' }, // section eyebrow label
    navLabel:    { size: 15,  lineHeight: 20,  tracking: 0,    weight: 400, transform: 'none' },
    button:      { size: 14,  lineHeight: 16,  tracking: 1.6,  weight: 900, transform: 'uppercase' },
    script:      { size: 36,  lineHeight: 40,  tracking: 0,    weight: 400, transform: 'none' }, // La Belle Aurore caption
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
    intensity: 3, // scrapbook-drift — higher than alinea/qitchen
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
