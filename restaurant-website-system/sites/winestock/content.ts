// content.ts — Winestock Market & Lounge fork of bramble-01

export const content = {
  brand: {
    name: 'Winestock Market & Lounge',
    wordmark: 'WINESTOCK',
    tagline: 'Wine market by day, Woodstock lounge by night',
    description: 'Winestock Market & Lounge is a Woodstock Square wine bar and market serving hand-selected wines and spirits, small plates, flatbreads, sandwiches, charcuterie, craft beer, and live-music evenings.',
    address: '136 Cass St, Woodstock, IL 60098',
    addressShort: '136 CASS ST · WOODSTOCK IL',
    phone: '(815) 308-5610',
    email: 'info@shopwinestock.com',
    instagram: '@Winestockmarket',
    instagramUrl: 'https://www.facebook.com/Winestockmarket/',
    menuPdfUrl: '#menus',
    reservationUrl: 'mailto:info@shopwinestock.com?subject=Winestock%20visit',
    giftCardUrl: '#gift-cards',
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 2 as const, open: '10:00', close: '21:00' },
        { day: 3 as const, open: '10:00', close: '21:00' },
        { day: 4 as const, open: '10:00', close: '21:00' },
        { day: 5 as const, open: '10:00', close: '22:00' },
        { day: 6 as const, open: '10:00', close: '22:00' },
        { day: 0 as const, open: '12:00', close: '18:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.31538, lng: -88.4484481 },
  },

  hero: {
    slides: [
      { src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2000&q=80', alt: 'Wine bottles arranged in a warm market setting' },
      { src: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=2000&q=80', alt: 'Charcuterie board with wine glasses' },
      { src: 'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=2000&q=80', alt: 'Intimate lounge table with drinks' },
      { src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=2000&q=80', alt: 'Small live music stage in warm light' },
    ],
  },

  tagline: {
    body: 'A Cass Street wine market and lounge for hand-selected bottles, small plates, live music, and the easy Woodstock Square nights regulars keep coming back for.',
  },

  visitModes: [
    {
      eyebrow: 'Market',
      title: 'Hand-selected bottles',
      body: 'Shop artisanal wines and spirits from around the globe, with owner/staff guidance for pairings, parties, and gifts.',
    },
    {
      eyebrow: 'Lounge',
      title: 'Woodstock’s living room',
      body: 'Regulars describe the room as relaxed, friendly, and easy to settle into for wine, craft beer, conversation, and music.',
    },
    {
      eyebrow: 'Boards + bites',
      title: 'Small plates that travel',
      body: 'Flatbreads, sandwiches, charcuterie, and cheese boards work for a night in the lounge or something to bring home.',
    },
  ],

  proofQuotes: [
    {
      quote: 'All roads lead to Winestock. Friendly atmosphere, eclectic patrons and always phenomenal live music!',
      by: 'Laura Witlox, Google review',
    },
    {
      quote: 'Carolyn had several selections based on the menu I sent over. Exceptional service all around!',
      by: 'Rachel Lacsamana, Google review',
    },
    {
      quote: 'Winestock, a.k.a. Woodstock’s living room, is the best place to have a good evening with friends, wine and charcuterie in town.',
      by: 'StrandedOnAPlanet, Google review',
    },
  ],

  polaroids: [
    { src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80', alt: 'Curated wine bottles', rotation: -4 },
    { src: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=600&q=80', alt: 'Charcuterie and cheese board', rotation: 2 },
    { src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80', alt: 'Warm neighborhood bar interior', rotation: -2 },
    { src: 'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=600&q=80', alt: 'Wine glasses in a lounge setting', rotation: 5 },
    { src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=600&q=80', alt: 'Live music atmosphere', rotation: -3 },
    { src: 'https://images.unsplash.com/photo-1521133573892-e44906baee46?auto=format&fit=crop&w=600&q=80', alt: 'Friends gathered over drinks', rotation: 3 },
  ],

  hours: [
    { day: 'Monday', time: 'Closed' },
    { day: 'Tuesday – Thursday', bar: '10am – 9pm', kitchen: 'Small plates all day' },
    { day: 'Friday – Saturday', bar: '10am – 10pm', kitchen: 'Small plates + lounge nights' },
    { day: 'Sunday', bar: '12pm – 6pm', kitchen: 'Market bottles + boards' },
  ],

  menus: {
    title: 'Sip, Snack, Stay Awhile',
    centerpieceImage: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=800&q=80',
    food: {
      label: 'Small Plates',
      pdfUrl: '#small-plates',
      highlights: ['Flatbreads', 'Sandwiches', 'Charcuterie + cheese boards'],
    },
    drinks: {
      label: 'Wine + Spirits',
      pdfUrl: '#wine-spirits',
      highlights: ['Artisanal wines', 'Craft beer', 'Spirits + non-alcoholic drinks'],
    },
    fullMenuCta: { label: 'Contact Winestock', href: 'mailto:info@shopwinestock.com' },
  },

  floralBreak: {
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=2000&q=80',
    alt: 'Wine glasses raised during a warm evening gathering',
  },

  giftCards: {
    title: 'Market Bottles + Gifts',
    body: 'Shop hand-selected artisanal wines and spirits from around the globe, or build a gift around a bottle, cheese board, or easy Woodstock night out.',
    cta: { label: 'Ask About Gifts', href: 'mailto:info@shopwinestock.com?subject=Winestock%20gift%20question' },
  },
  careers: {
    title: 'Small Plates + Lounge Nights',
    body: 'Settle in for charcuterie and cheese boards, small plates, flatbreads, sandwiches, craft beer, and live music evenings that make Winestock feel like Woodstock’s living room.',
    cta: { label: 'See Live Updates', href: 'https://www.facebook.com/Winestockmarket/' },
  },

  social: {
    left: 'Follow Winestock',
    right: 'For music + market updates',
    handle: 'Facebook / Winestockmarket',
    url: 'https://www.facebook.com/Winestockmarket/',
  },

  mailingList: {
    title: 'Plan your next Woodstock Square stop',
    subtitle: 'Choose the handoff that matches your visit — no fake booking flow, just the real public contact paths Winestock uses today.',
    placeholder: 'email@example.com',
    cta: 'Contact Us',
  },

  contactActions: [
    {
      label: 'Email Winestock',
      href: 'mailto:info@shopwinestock.com?subject=Winestock%20visit',
      note: 'Bottle picks, boards, gifts, event questions, and visit planning.',
    },
    {
      label: 'Call (815) 308-5610',
      href: 'tel:+18153085610',
      note: 'Best for today’s hours, quick questions, and same-day details.',
    },
    {
      label: 'Facebook updates',
      href: 'https://www.facebook.com/Winestockmarket/',
      note: 'Live music, market updates, and the latest room energy.',
    },
  ],

  footer: {
    wordmark: 'Winestock',
    credit: '© 2026 · 136 Cass St, Woodstock, IL',
  },

  reservation: {
    heading: 'Contact Winestock',
    body: 'Questions about wine pairings, gift bottles, live music, or a visit? Send a note and the team can help point you in the right direction.',
    formFields: ['Name', 'Email', 'Phone', 'What can we help with?'],
    submitLabel: 'Email Winestock',
  },
} as const;

export type SiteContent = typeof content;
