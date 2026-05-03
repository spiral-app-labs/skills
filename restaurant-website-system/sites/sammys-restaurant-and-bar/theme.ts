// theme.ts — sammys-restaurant-and-bar (plate-01 fork, downshifted)
//
// Per audit.md Block 3 Principle 2.2: plate-01's default terracotta
// accent (#B05927) reads bistro and would mis-encode a hometown bar.
// Downshifted to a warm beer-bottle amber (#C77A2C) — same warmth,
// less fashion. Cream canvas + warm-near-black text retained.

export const theme = {
  name: 'sammys-01',
  archetype: 'hometown-diner-bar-warm-light',
  mode: 'light',

  color: {
    // CANVAS
    canvas:       '#FAF7F0', // warm cream — slightly more yellow than plate-01's neutral off-white, reads "diner counter"
    canvasAlt:    '#F3EEE2', // subtle shadow surface for cards / forms
    // TEXT
    ink:          '#1E1E1C', // warm near-black — NOT pure #000
    inkMuted:     '#5A5550', // warm mid-gray, slightly browner than plate-01
    // ACCENT — beer-bottle amber, NOT terracotta
    accent:       '#C77A2C', // amber — primary CTA
    accentDark:   '#A0601C', // deeper amber for hover
    accentSoft:   '#F4D7B4', // pale amber — highlight only
    // UTILITY
    divider:      '#E5DFD2', // hairline divider — slightly warmer than plate-01
    black:        '#000000', // pure black — sparing (icon strokes only)
  },

  font: {
    // Urbanist only — single typeface discipline. Multi-weight.
    display: 'var(--font-urbanist), ui-sans-serif, system-ui, sans-serif',
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
    wordmark:    { size: 240, lineHeight: 240,   tracking: -8,   weight: 700, transform: 'none' }, // massive footer wordmark
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
