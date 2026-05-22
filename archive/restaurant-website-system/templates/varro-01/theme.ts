// theme.ts — varro-01
//
// Locked tokens extracted from inputs/framer-templates/varro-01/meta/*.json.
// See research/template-audits/varro-01.md §4 for source data and §12 for
// personalization rules.
//
// FIRST SERIOUS-ITALIAN HERITAGE TEMPLATE. Dark slate #1C2225 canvas,
// warm cream #F0EDE0 text, sand/tan #A78064 accent. Belleza display at
// every display size + Inter body sans (meta.body fallback is ambiguous).
// This is the fine-dining Italian workhorse, distinct from gusto's
// trattoria warmth and alinea's Michelin restraint.

export const theme = {
  name: 'varro-01',
  archetype: 'serious-italian-heritage-upscale',
  mode: 'dark',

  color: {
    // CANVAS
    canvas:     '#1C2225', // dark slate, slightly blue-undertoned (rgb(28,34,37))
    canvasSoft: '#242A2E', // one step lighter for optional section break
    // TEXT / SURFACES
    ink:        '#F0EDE0', // warm cream (rgb(240,237,224)) — all body + most headings
    inkMuted:   '#C8C4B5', // cream at reduced strength for captions / muted copy
    mat:        '#F0EDE0', // chef-card cream mat surface (same as ink, separate token for intent)
    // ACCENT
    accent:     '#A78064', // sand/tan heritage-luxury (rgb(167,128,100))
    accentSoft: '#8E6A52', // darker sand for hover
    // UTILITY
    cta:        '#000000', // button text on sand — pure black per meta.buttonAny
    divider:    '#2F3639', // hairline divider on dark canvas
    formLine:   '#4A4F52', // underline inputs on dark
  },

  font: {
    display: 'var(--font-belleza), "Belleza", "Cormorant SC", serif',
    body:    'var(--font-inter), "Inter", system-ui, sans-serif',
  },

  // Belleza carries every heading size. Body is Inter at small sizes only.
  // Per audit §4 — Belleza is single-weight 400 on Google Fonts.
  type: {
    heroDisplay: { size: 120, lineHeight: 120, tracking: -2.4, weight: 400, transform: 'uppercase' }, // "FROM ITALY'S HEARTLAND"
    sectionH2:   { size: 88,  lineHeight: 88,  tracking: -0.88, weight: 400, transform: 'uppercase' },
    sectionH3:   { size: 58,  lineHeight: 58,  tracking: -1.16, weight: 400, transform: 'uppercase' }, // menu dish names, category labels
    eyebrow:     { size: 22,  lineHeight: 24.2, tracking: -0.22, weight: 400, transform: 'uppercase' }, // "OUR CHEFS" eyebrows
    body:        { size: 16,  lineHeight: 26,   tracking: 0,    weight: 400, transform: 'none' }, // Inter body
    bodyLg:      { size: 18,  lineHeight: 30,   tracking: 0,    weight: 400, transform: 'none' },
    navLink:     { size: 12,  lineHeight: 16,   tracking: 0,    weight: 400, transform: 'none' }, // small anchor-style nav links
    button:      { size: 12,  lineHeight: 16,   tracking: 0,    weight: 500, transform: 'none' }, // sand/tan pill button
  },

  layout: {
    pagePadding:    { desktop: 48, mobile: 20 },
    sectionPadding: { desktop: 144, mobile: 80 },
    maxWidth: 1280,
    proseWidth: 620,
    formWidth:  560,
  },

  radius: {
    pill:   9999,
    button: 9999, // pill buttons
    card:   10,   // chef card mat
    input:  0,    // underline-only inputs
  },

  motion: {
    intensity: 2,
    revealStagger:      0.08,
    revealDuration:     0.7,
    revealLift:         50,       // matches meta matrix(1,0,0,1,0,50) translate
    marqueeDuration:    24,       // seconds per full marquee loop
    transitionDuration: 0.4,
    easing: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
} as const;

export type Theme = typeof theme;
