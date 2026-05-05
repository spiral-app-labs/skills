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
    },
    drinks: {
      label: 'Wine + Spirits',
      pdfUrl: '#wine-spirits',
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
    subtitle: 'Email Winestock for bottle picks, boards, live music, and visit questions.',
    placeholder: 'email@example.com',
    cta: 'Contact Us',
  },

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
