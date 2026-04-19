// theme.ts — 1776-redesign-01
//
// Locked theme tokens extracted from inputs/reference-sites/1776-redesign-01/meta/*.json.
// See research/template-audits/1776-redesign-01.md §4 for source data and §12 for personalization rules.

export const theme = {
  name: '1776-redesign-01',
  archetype: 'modern-upscale-destination',
  mode: 'dark',

  color: {
    canvas:        '#0D1B2A', // body bg — deep navy with cool blue cast
    surface:       '#050C16', // footer bg, button bg, card bg — near-black with navy undertone (deeper than canvas)
    surfaceAlt:    '#152234', // slightly elevated surface for testimonial cards
    surfaceHover:  '#1B2A3F', // hover/active state
    border:        '#2A3B4E', // hairline borders on cards and form fields
    text:          '#F5F0E8', // primary text — warm cream
    textMuted:     '#8B92A0', // body copy / descriptions
    textSubtle:    '#5C6878', // tertiary / disclosures
    accent:        '#C9A96E', // brand accent — muted amber/champagne. Used for eyebrows, primary CTA fill, italic display emphasis, footer badges.
    accentHover:   '#D4B57E',
    overlay:       'rgba(13, 27, 42, 0.65)', // hero scrim for text legibility
    overlayDeep:   'rgba(5, 12, 22, 0.85)',
  },

  font: {
    // Display: Cormorant Garamond (Google Fonts). Critical: italic variant must load.
    display: 'var(--font-cormorant), Garamond, serif',
    // Body: DM Sans (Google Fonts).
    body: 'var(--font-dm-sans), -apple-system, BlinkMacSystemFont, sans-serif',
  },

  // Type scale — exact pixel values from 1776, locked.
  // Display tracking is loose (~6% on hero) which is characteristic of garamond display.
  type: {
    pageTitle:    { size: 115, lineHeight: 109, tracking: 6,    weight: 400, transform: 'uppercase' },
    pageTitleMd:  { size: 100, lineHeight: 95,  tracking: 6,    weight: 400, transform: 'uppercase' },
    sectionH1:    { size: 64,  lineHeight: 70,  tracking: 2.56, weight: 400, transform: 'none' },
    sectionH2:    { size: 48,  lineHeight: 48,  tracking: 1.92, weight: 400, transform: 'none' },
    cardTitle:    { size: 24,  lineHeight: 32,  tracking: 0.72, weight: 400, transform: 'none' },
    navLink:      { size: 14,  lineHeight: 20,  tracking: 1.2,  weight: 400, transform: 'none' },
    eyebrow:      { size: 10,  lineHeight: 15,  tracking: 3,    weight: 500, transform: 'uppercase' }, // amber-colored typically
    button:       { size: 12,  lineHeight: 18,  tracking: 1.5,  weight: 500, transform: 'uppercase' },
    body:         { size: 15,  lineHeight: 24,  tracking: 0,    weight: 400, transform: 'none' },
    bodySm:       { size: 13,  lineHeight: 20,  tracking: 0,    weight: 400, transform: 'none' },
    micro:        { size: 11,  lineHeight: 16,  tracking: 1.5,  weight: 400, transform: 'uppercase' },
  },

  layout: {
    pagePadding: { desktop: 32, mobile: 20 },
    sectionPadding: { desktop: 96, mobile: 64 }, // vertical between sections
    headerOffset: { top: 24, side: 0 }, // floating header pill — centered horizontally
    maxWidth: 1280,
    cardRadius: 12,
    pillRadius: 9999,
  },

  radius: {
    pill:   9999, // header pill, buttons, tag pills
    card:   12,   // featured cards, testimonial cards
    field:  6,    // form input fields
    image:  8,    // image containers in cards
  },

  motion: {
    intensity: 2, // moderate — richer transitions than qitchen, plus marquee
    revealStagger: 0.12,
    revealDuration: 0.7,
    revealLift: 30,
    transitionDuration: 0.3,
    transitionEasing: 'cubic-bezier(0.4, 0, 0.2, 1)', // observed in meta — Tailwind/Material default
    easing: [0.4, 0, 0.2, 1] as [number, number, number, number],
    marqueeSpeed: 60, // seconds for one full loop
  },
} as const;

export type Theme = typeof theme;
