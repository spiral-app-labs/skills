// theme.ts — sammys-restaurant-and-bar (personalized tavern pass)
//
// The hero moved Sammy's out of the light Plate template and into a warm
// neighborhood-bar register: dark wood, amber beer light, cream type, and
// condensed sign-painter headings. These tokens carry that language through
// the rest of the fork so the hero does not feel pasted onto a cream bistro.

export const theme = {
  name: 'sammys-01',
  archetype: 'hometown-diner-bar-amber-tavern',
  mode: 'dark',

  color: {
    // CANVAS
    canvas:       '#090503', // near-black tavern room
    canvasAlt:    '#160D08', // dark wood surface for cards / forms
    // TEXT
    ink:          '#F7F0E4', // warm cream, not stark white
    inkMuted:     '#BDAF9A', // beer-lit muted copy
    // ACCENT — beer-bottle amber, NOT terracotta
    accent:       '#D9A23A', // hero gold — primary CTA / rules
    accentDark:   '#E6B84D', // brighter amber for hover
    accentSoft:   '#3A2510', // smoked amber surface
    // UTILITY
    divider:      '#3B2A1C', // low-contrast bar-top hairline
    black:        '#000000', // pure black — sparing (icon strokes only)
  },

  font: {
    // Oswald for sign-painter headings; Urbanist for dense readable body.
    display: 'var(--font-sammy-condensed), Impact, Arial Narrow, sans-serif',
    body:    'var(--font-urbanist), ui-sans-serif, system-ui, sans-serif',
  },

  // Observed from meta/home.json computed styles.
  // Weight 500 for headings, 400 for body. Size + weight contrast carries
  // all hierarchy (no italic, no small-caps, no tracking gymnastics).
  type: {
    heroH1:      { size: 80,  lineHeight: 80,    tracking: 0,    weight: 500, transform: 'none' }, // LH = font-size (1.0×) — tight "statement" feel
    sectionH2:   { size: 36,  lineHeight: 36,    tracking: 0,    weight: 500, transform: 'none' },
    sectionH3:   { size: 28,  lineHeight: 28,    tracking: 0,    weight: 500, transform: 'none' },
    body:        { size: 16,  lineHeight: 20.8,  tracking: 0,    weight: 400, transform: 'none' }, // 1.3× — LOCKED, don't loosen
    bodySm:      { size: 14,  lineHeight: 18.2,  tracking: 0,    weight: 400, transform: 'none' },
    navLabel:    { size: 14,  lineHeight: 18,    tracking: 0,    weight: 500, transform: 'none' },
    button:      { size: 14,  lineHeight: 16,    tracking: 0,    weight: 500, transform: 'none' },
    eyebrow:     { size: 12,  lineHeight: 16,    tracking: 1.6,  weight: 500, transform: 'uppercase' },
    wordmark:    { size: 240, lineHeight: 240,   tracking: 0,    weight: 700, transform: 'uppercase' },
  },

  layout: {
    pagePadding:    { desktop: 40, mobile: 20 },
    sectionPadding: { desktop: 112, mobile: 72 },
    maxWidth: 1200,
    maxWidthNarrow: 860,
  },

  radius: {
    pill:   9999,
    button: 9999,
    card:   20, // bumped from 12 → 20: softer, more "neighborhood" feel; still not pillowy
    input:  10,
    image:  24, // dedicated image radius for hero/menu/review photography
  },

  motion: {
    intensity: 1, // subtle reveals only — no marquees, no parallax
    revealStagger:      0.08,
    revealDuration:     0.5,
    revealLift:         16,
    transitionDuration: 0.3,
    easing: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
} as const;

export type Theme = typeof theme;
