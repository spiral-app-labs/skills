// content.example.ts — Vine & Plate fork of bramble-01

const reservationUrl = 'https://www.thevineandplate.com/res';
const orderUrl = 'https://www.toasttab.com/vine-and-plate-wine-bar-and-provisions-414-w-virginia-street';
const giftCardUrl = 'https://www.toasttab.com/vine-and-plate-wine-bar-and-provisions-414-w-virginia-street/giftcards?utmCampaign=onlineOrdering';
const foodPdfUrl = 'https://www.thevineandplate.com/_files/ugd/2955b6_763e5cc3e5144235856b294221ab6d41.pdf';
const drinksPdfUrl = 'https://www.thevineandplate.com/_files/ugd/2955b6_eb7408d6cf264e49a63f341107b5eeee.pdf';
const specialsPdfUrl = 'https://www.thevineandplate.com/_files/ugd/2955b6_293a5cb90df54d3cb423ed79e77c1e61.pdf';
const lunchPdfUrl = 'https://www.thevineandplate.com/_files/ugd/2955b6_a0123d18225d4da88ffe2ab1f922cf9c.pdf';

export const content = {
  brand: {
    name: 'Vine & Plate',
    siteUrl: 'https://www.thevineandplate.com',
    wordmark: 'VINE & PLATE',
    tagline: 'A love letter to wine and food',
    description:
      'A Crystal Lake wine bar pairing generous shared plates, by-the-glass pours, bottle nights, lunch, specials, Toast ordering, and reservations.',
    address: '414 W Virginia St, Crystal Lake, IL 60014',
    addressShort: '414 W VIRGINIA ST, CRYSTAL LAKE',
    phone: '815.893.0325',
    phoneHref: 'tel:+18158930325',
    email: 'thevineandplate@gmail.com',
    instagram: '@thevineandplate',
    instagramUrl: 'https://www.instagram.com/thevineandplate/',
    facebookUrl: 'https://www.facebook.com/thevineandplate/',
    reservationUrl,
    menuUrl: '/menu',
    orderUrl,
    giftCardUrl,
    foodPdfUrl,
    drinksPdfUrl,
    specialsPdfUrl,
    lunchPdfUrl,
    offTheVineUrl: 'https://www.thevineandplate.com/general-1',
    wineDinnerUrl: 'https://www.thevineandplate.com/winedinner',
    cateringUrl: 'https://www.thevineandplate.com/cateringandevents',
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 1 as const, open: '12:00', close: '22:00' },
        { day: 2 as const, open: '12:00', close: '22:00' },
        { day: 3 as const, open: '12:00', close: '22:00' },
        { day: 4 as const, open: '12:00', close: '22:00' },
        { day: 5 as const, open: '12:00', close: '23:00' },
        { day: 6 as const, open: '12:00', close: '23:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.2412, lng: -88.3295 },
  },

  hero: {
    slides: [
      {
        src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2000&q=80',
        alt: 'Bottles of red and white wine on a cellar wall',
      },
      {
        src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80',
        alt: 'Shared plates and wine glasses on a dinner table',
      },
      {
        src: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=2000&q=80',
        alt: 'Wine being poured into a glass',
      },
      {
        src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=80',
        alt: 'Warm restaurant dining room with glasses and plates set',
      },
    ],
  },

  tagline: {
    body:
      'Come for a glass, build a table around a few plates, or take a bottle home. Reservations, Toast, gift cards, and the next wine night stay close by.',
  },

  proof: [
    '4.7 OpenTable diner rating',
    'Wine nights every week',
    'Toast ordering available',
  ],

  polaroids: [
    { src: 'https://static.wixstatic.com/media/2955b6_0b8ed872fa9b4c01b4d2eeae2bd05061~mv2.jpg/v1/fit/w_1134,h_1036,q_90/2955b6_0b8ed872fa9b4c01b4d2eeae2bd05061~mv2.jpg', alt: 'Wine and shared plates at Vine and Plate', rotation: -4 },
    { src: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=700&q=80', alt: 'Wine tasting with small bites', rotation: 2 },
    { src: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=700&q=80', alt: 'Lunch plate with fresh ingredients', rotation: -2 },
    { src: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=700&q=80', alt: 'Guests sharing wine at a table', rotation: 5 },
    { src: 'https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=700&q=80', alt: 'Wine glasses set for dinner', rotation: -3 },
    { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=700&q=80', alt: 'Chef finishing a plate', rotation: 3 },
  ],

  hours: [
    { day: 'Monday', room: '12pm - 10pm', kitchen: '12pm - 9pm' },
    { day: 'Tuesday - Thursday', room: '12pm - 10pm', kitchen: '12pm - 9pm' },
    { day: 'Friday - Saturday', room: '12pm - 11pm', kitchen: '12pm - 10pm' },
    { day: 'Sunday', time: 'Closed' },
  ],

  menus: {
    title: 'Plates, Pours & Bottle Nights',
    eyebrow: 'Current favorites',
    body:
      'Start with the plates and pours that shape the night, then open the full menus whenever you want the complete current list.',
    centerpieceImage: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?auto=format&fit=crop&w=900&q=80',
    food: {
      label: 'Plates',
      pdfUrl: foodPdfUrl,
      items: [
        { name: 'Steak Sandwich', detail: 'Sourdough, greens, house sauce', price: '27' },
        { name: 'Steak Salad', detail: 'Pear, pecans, gorgonzola, balsamic or ranch', price: '27' },
        { name: 'Salmon Salad', detail: 'Sockeye salmon, beets, berries, goat cheese, avocado', price: '26' },
        { name: 'Roasted Brussels Sprouts', detail: 'Red onion, balsamic fig glaze', price: '9' },
      ],
    },
    wine: {
      label: 'Wine',
      pdfUrl: drinksPdfUrl,
      items: [
        { name: 'Wine Glass Wednesday', detail: 'Buy one glass, get one 50% off', price: 'Wed' },
        { name: 'Half Price Bottle Night', detail: 'Bottle-focused Thursday service', price: 'Thu' },
        { name: 'Curated Bottle List', detail: 'Old World, New World, sparkling, white, red, rose', price: 'List' },
        { name: 'Vine Club', detail: 'Monthly wine pickup with pairing notes', price: 'Club' },
      ],
    },
    quickLinks: [
      { label: 'Full food menu', href: foodPdfUrl },
      { label: 'Wine + drinks', href: drinksPdfUrl },
      { label: 'Specials', href: specialsPdfUrl },
      { label: 'Lunch', href: lunchPdfUrl },
    ],
    fullMenuCta: { label: 'Order on Toast', href: orderUrl },
    reserveCta: { label: 'Reserve a Table', href: reservationUrl },
  },

  reviewProof: {
    eyebrow: 'Why it works',
    heading: 'An easy wine night, not a complicated plan.',
    body:
      'Vine & Plate is strongest when the whole visit feels connected: a glass, shared plates, the bottle shelf, and the right next step when guests are ready.',
    cards: [
      {
        kicker: 'For dinner',
        title: 'Shared plates that make the wine decision easier.',
        body:
          'Steak, salmon, Brussels, lunch, and specials sit beside the wine path so guests can picture the table before they reserve.',
      },
      {
        kicker: 'For regulars',
        title: 'Bottle nights give people a reason to come back.',
        body:
          'Wine Glass Wednesday, half-price bottle night, Vine Club, and wine dinners read as a rhythm instead of scattered links.',
      },
      {
        kicker: 'For takeout',
        title: 'Toast, gifts, and Off The Vine stay familiar.',
        body:
          'Ordering, gift cards, and bottle browsing stay close by, so the next step feels familiar once guests know what kind of night they want.',
      },
    ],
    primaryCta: { label: 'Reserve a Table', href: reservationUrl },
    secondaryCta: { label: 'Wine Dinner', href: 'https://www.thevineandplate.com/winedinner' },
  },

  floralBreak: {
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2000&q=80',
    alt: 'Shelves of wine bottles in warm light',
  },

  giftCards: {
    title: 'Order Tonight',
    body:
      'Taking dinner home? Toast handles online ordering and digital gift cards, so checkout stays familiar.',
    cta: { label: 'Order on Toast', href: orderUrl },
    secondaryCta: { label: 'Gift Cards', href: giftCardUrl },
  },
  careers: {
    title: 'Off The Vine',
    body:
      'Browse bottles, plan a pickup, or follow the next wine dinner without leaving the Vine & Plate family.',
    cta: { label: 'Visit Off The Vine', href: 'https://www.thevineandplate.com/general-1' },
    secondaryCta: { label: 'Wine Dinner', href: 'https://www.thevineandplate.com/winedinner' },
  },

  social: {
    left: 'Follow',
    right: 'For wine nights',
    handle: '@thevineandplate',
    url: 'https://www.instagram.com/thevineandplate/',
  },

  mailingList: {
    title: 'Get the next pour',
    subtitle: 'Wine dinners, specials, club pickups, and bottle nights.',
    placeholder: 'email@example.com',
    cta: 'Subscribe',
  },

  footer: {
    wordmark: 'Vine & Plate',
    credit: 'Crystal Lake wine bar + provisions',
  },

  reservation: {
    heading: 'Reservations',
    body:
      'Book a table for a glass, a few plates, or the next wine night. For takeout, Toast stays ready when dinner is coming home.',
    primaryCta: { label: 'Reserve a Table', href: reservationUrl },
    secondaryCta: { label: 'Order on Toast', href: orderUrl },
    callCta: { label: 'Call 815.893.0325', href: 'tel:+18158930325' },
  },
} as const;

export type SiteContent = typeof content;
