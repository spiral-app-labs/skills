// theme.ts — Addison's Steakhouse
//
// Locked theme tokens extracted from inputs/reference-sites/1776-redesign-01/meta/*.json.
// See research/template-audits/1776-redesign-01.md §4 for source data and §12 for personalization rules.

export const theme = {
  name: 'addisons-steakhouse',
  archetype: 'warm-neighborhood-steakhouse',
  mode: 'dark',

  color: {
    canvas:        '#11170F',
    surface:       '#080C08',
    surfaceAlt:    '#1B2419',
    surfaceHover:  '#263222',
    border:        '#3E4938',
    text:          '#F8F0E6',
    textMuted:     '#B6AA9C',
    textSubtle:    '#7F766D',
    accent:        '#D1A451',
    accentHover:   '#E0B967',
    overlay:       'rgba(17, 23, 15, 0.66)',
    overlayDeep:   'rgba(8, 12, 8, 0.88)',
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
