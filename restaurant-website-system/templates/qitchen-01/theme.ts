// theme.ts — qitchen-01
//
// Locked theme tokens for this template. These values were extracted directly
// from the original Framer template via computed-style inspection — see
// research/template-audits/qitchen-01.md §4 for the source data.
//
// PERSONALIZATION RULES (see audit §12 for the full manifest):
//   - SAFE TO SWAP: brand color hex within the warm-dark family,
//     accent (the template intentionally has none — adding one is a
//     structural choice, not a token swap), display/body font within
//     the same character class.
//   - DO NOT SWAP: light mode (different template), saturated accent,
//     non-uppercase headings, smaller display sizes (would break the
//     editorial register).

export const theme = {
  name: 'qitchen-01',
  archetype: 'fine-dining-japanese',
  mode: 'dark',

  color: {
    canvas:        '#0A0B0A', // body bg — warm near-black (G channel one notch above R/B)
    surface:       '#16181A', // header pill, buttons, cards, form fields
    surfaceHover:  '#1F2225', // subtle elevation on hover
    border:        '#2A2D30', // card and form-field hairlines
    text:          '#EFE7D2', // primary text — warm cream
    textMuted:     '#9A968F', // descriptions, secondary labels
    textInverse:   '#0A0B0A', // for buttons that invert (rare)
    overlay:       'rgba(10, 11, 10, 0.55)', // image-bottom scrim for title legibility
  },

  font: {
    // Display: Forum (Google Fonts). Loaded via next/font in app/layout.tsx.
    display: 'var(--font-forum), Georgia, serif',
    // Body: Satoshi (Fontshare). Loaded via Fontshare's CDN in app/layout.tsx.
    body: 'Satoshi, "Satoshi Placeholder", -apple-system, BlinkMacSystemFont, sans-serif',
  },

  // Display type scale — exact pixel values from qitchen, locked.
  // All weight 400, all uppercase, line-heights are tight (~0.8).
  type: {
    pageTitle:    { size: 112, lineHeight: 89.6, tracking: 0,    weight: 400, transform: 'uppercase' },
    sectionTitle: { size: 96,  lineHeight: 86.4, tracking: 0,    weight: 400, transform: 'uppercase' },
    sectionH2:    { size: 32,  lineHeight: 35.2, tracking: 1,    weight: 400, transform: 'uppercase' },
    itemName:     { size: 20,  lineHeight: 24,   tracking: 1,    weight: 400, transform: 'uppercase' },
    uiLabel:      { size: 12,  lineHeight: 12,   tracking: 1,    weight: 400, transform: 'uppercase' },
    body:         { size: 14,  lineHeight: 22,   tracking: 0,    weight: 400, transform: 'none' },
  },

  // Layout — the signature two-column split.
  layout: {
    splitRatio: { left: 60, right: 40 }, // image-left / content-right percentages on desktop
    headerOffset: { top: 24, left: 24 }, // floating header pill position
    pagePadding: { desktop: 32, mobile: 20 },
  },

  radius: {
    pill:   9999, // header pill, primary button
    card:   8,    // thumbnail nav cards, credibility badges
    field:  6,    // form input fields
  },

  motion: {
    intensity: 1, // subtle reveals only
    revealStagger: 0.15, // seconds between each load-in step
    revealDuration: 0.6, // single reveal duration
    revealLift: 24,      // px of upward translate on fade-in
    transitionDuration: 0.25, // hover/state transitions
    easing: [0.16, 1, 0.3, 1] as [number, number, number, number], // expo-out, Framer-feel
  },
} as const;

export type Theme = typeof theme;
