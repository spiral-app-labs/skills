// theme.ts - Grounds Coffee Bar fork
//
// Forked from latte-01. The layout keeps the warm cafe structure, while the
// palette picks up the evergreen storefront awnings from the Grounds exterior.
//
// Poppins-only single-family system. No serif pair; hierarchy comes from
// weight and size so the cafe/roaster content stays clean and crawlable.

export const theme = {
  name: 'grounds-coffee-bar',
  archetype: 'warm-cafe-roaster-wrapper',
  mode: 'light',

  color: {
    // CANVAS
    canvas:     '#FFFDF4', // warm cafe paper
    card:       '#FFFFFF', // clean lift for menu/blog cards
    // TEXT
    ink:        '#000000', // pure black for all headings + body
    inkMuted:   '#3F5148', // muted green-gray, picked up from the cafe awnings
    // DIVIDERS / CHROME
    divider:    '#DDE8DA', // subtle sage hairline
    // CTA
    ctaBg:      '#102E24', // dark evergreen CTA
    ctaText:    '#FFFFFF',
    // Eyebrow chip
    chipBorder: '#C9D7C6',
    star:       '#F5B400', // Google star yellow (rating chip only)
    // evergreen accent comes from the cafe storefront.
  },

  font: {
    // Poppins only - single humanist sans. Multi-weight 400/500/600/700.
    sans: 'var(--font-poppins), ui-sans-serif, system-ui, sans-serif',
  },

  // Per latte audit: h1 58/69.6/600, h2 42/50.4/500, h3 24/33.6/500, body 16/20.8/400.
  type: {
    heroH1:     { size: 58,  lineHeight: 69.6, tracking: 0,   weight: 600, transform: 'none' },
    sectionH2:  { size: 42,  lineHeight: 50.4, tracking: 0,   weight: 500, transform: 'none' },
    h3:         { size: 24,  lineHeight: 33.6, tracking: 0,   weight: 500, transform: 'none' },
    categoryLabel: { size: 14, lineHeight: 20, tracking: 0, weight: 500, transform: 'none' }, // pill tag
    itemName:   { size: 18,  lineHeight: 26,   tracking: 0,   weight: 500, transform: 'none' }, // menu item name
    itemDesc:   { size: 14,  lineHeight: 20,   tracking: 0,   weight: 400, transform: 'none' }, // menu item description
    price:      { size: 18,  lineHeight: 26,   tracking: 0,   weight: 500, transform: 'none' },
    body:       { size: 16,  lineHeight: 20.8, tracking: 0,   weight: 400, transform: 'none' },
    bodyLg:     { size: 18,  lineHeight: 28.8, tracking: 0,   weight: 400, transform: 'none' },
    navLabel:   { size: 15,  lineHeight: 20,   tracking: 0,   weight: 500, transform: 'none' },
    eyebrowSm:  { size: 13,  lineHeight: 18,   tracking: 0,   weight: 500, transform: 'none' },
    button:     { size: 15,  lineHeight: 20,   tracking: 0,   weight: 500, transform: 'none' },
  },

  layout: {
    pagePadding:    { desktop: 40, mobile: 20 },
    sectionPadding: { desktop: 96, mobile: 64 },
    maxWidth: 1200,
    proseWidth: 640,
  },

  // Radius scale: cards/photos 20-24, buttons pill 9999, small chips pill.
  radius: {
    pill:   9999,
    button: 9999, // pill CTA
    card:   24,
    photo:  20,
    chip:   9999,
  },

  motion: {
    intensity: 1, // lowest in catalog
    revealStagger:      0.06,
    revealDuration:     0.5,
    revealLift:         18,
    transitionDuration: 0.3,
    easing: [0.4, 0, 0.2, 1] as [number, number, number, number],
  },
} as const;

export type Theme = typeof theme;
