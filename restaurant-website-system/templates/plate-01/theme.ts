// theme.ts — plate-01
//
// Locked tokens extracted from inputs/framer-templates/plate-01/meta/*.json.
// See research/template-audits/plate-01.md §4 for source data and §12 for
// personalization rules.
//
// FIRST MODERN-CASUAL BISTRO TEMPLATE IN THE CATALOG (plate-01).
// Warm off-white canvas (#F9F8F6) + warm near-black text (#1E1E1C) +
// terracotta accent (#B05927) + Urbanist-only typography (no serif).
// Second sans-only template after velvet-shaker. Body line-height is
// TIGHT at 1.3× — loosening shifts the register toward alinea.

export const theme = {
  name: 'plate-01',
  archetype: 'modern-casual-bistro-warm-light',
  mode: 'light',

  color: {
    // CANVAS
    canvas:       '#F9F8F6', // warm off-white / paper — NOT pure white
    canvasAlt:    '#F3F1EC', // subtle shadow surface for cards / forms
    // TEXT
    ink:          '#1E1E1C', // warm near-black — NOT pure #000
    inkMuted:     '#545454', // neutral mid-gray for body copy, captions, descriptions
    // ACCENT
    accent:       '#B05927', // terracotta / burnt-orange — PRIMARY accent
    accentDark:   '#8E4A28', // deeper terracotta for hover
    accentSoft:   '#FFC3A1', // pale peach — DO NOT use as a CTA fill (inconsistency on source /contact); kept only as a highlight swatch
    // UTILITY
    divider:      '#E5E2DC', // hairline divider between menu rows + FAQ rows
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
    button: 9999, // terracotta CTAs are pill-shaped
    card:   12,
    input:  8,
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
