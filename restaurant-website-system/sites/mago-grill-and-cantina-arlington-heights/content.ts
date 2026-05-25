export const content = {
  brand: {
    name: 'Mago Grill & Cantina',
    wordmark: 'MAGO',
    tagline: 'Arlington Heights cantina',
    description:
      'Mago Grill & Cantina in downtown Arlington Heights serves tableside guacamole, moles, tacos, margaritas, tequila flights, group dining, catering, and online ordering.',
    address: '115 W Campbell St, Arlington Heights, IL 60005',
    addressShort: '115 W CAMPBELL ST, ARLINGTON HEIGHTS',
    phone: '847.253.2222',
    email: 'info@fwhg.com',
    instagram: '@magogrillcantina',
    instagramUrl: 'https://www.instagram.com/magogrillcantina/',
    officialUrl: 'https://www.magogrill.com/arlington-heights/',
    menuPdfUrl: 'https://www.magogrill.com/menus/',
    reservationUrl: 'https://www.opentable.com/r/mago-grill-and-cantina-arlington-heights',
    orderUrl:
      'https://order.toasttab.com/online/mago-grill-and-cantina-arlington-heights-115-w-campbell-street',
    groupDiningUrl: 'https://www.magogrill.com/group-dining/',
    cateringUrl: 'https://www.magogrill.com/catering/',
    giftCardUrl: 'https://www.magogrill.com/gift-cards/',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=115+W+Campbell+St,+Arlington+Heights,+IL+60005',
    callUrl: 'tel:+18472532222',
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 1 as const, open: '11:00', close: '22:00' },
        { day: 2 as const, open: '11:00', close: '22:00' },
        { day: 3 as const, open: '11:00', close: '22:00' },
        { day: 4 as const, open: '11:00', close: '22:00' },
        { day: 5 as const, open: '11:00', close: '23:00' },
        { day: 6 as const, open: '11:00', close: '23:00' },
        { day: 0 as const, open: '11:00', close: '21:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.0823, lng: -87.9843 },
  },

  hero: {
    eyebrow: 'ARLINGTON HEIGHTS CANTINA',
    line: 'Tableside guacamole, margaritas, moles, and 200-plus tequilas.',
    proof: '4.4 Google rating / 1,600-plus reviews',
    location: 'Downtown Arlington Heights in the Metropolis Performing Arts Centre Building.',
    slides: [
      {
        src: '/images/raw/plate.png',
        alt: 'Mago cantina table with molcajete guacamole, margarita flight, tacos, and mole plates',
        objectPosition: '55% center',
      },
    ],
  },

  tagline: {
    body:
      'A lively downtown Mexican cantina for reservations, online ordering, sidewalk seating, private fiestas, catering, and a deep tequila list.',
  },

  proofStats: [
    { value: '4.4', label: 'Google rating' },
    { value: '1,600+', label: 'public reviews' },
    { value: '200+', label: 'blue agave tequilas' },
    { value: '20-100', label: 'Fiesta Room guests' },
  ],

  highlights: [
    'Tableside guacamole',
    'Margarita flight',
    'Tequila flights',
    'Moles',
    'Tacos',
    'Sangria',
    'Zero-proof drinks',
    'Specials',
  ],

  hours: [
    { day: 'Monday - Thursday', time: '11AM - 10PM' },
    { day: 'Friday - Saturday', time: '11AM - 11PM' },
    { day: 'Sunday', time: '11AM - 9PM' },
    { day: 'Holiday hours', time: 'May vary' },
  ],

  menus: {
    title: 'Menus',
    centerpieceImage: '/images/raw/plate.png',
    food: {
      label: 'Food',
      pdfUrl: 'https://www.magogrill.com/menus/',
      items: ['Tableside guacamole', 'Moles', 'Tacos', 'Dinner specials'],
    },
    drinks: {
      label: 'Drinks / Tequila',
      pdfUrl: 'https://www.magogrill.com/menus/',
      items: ['Margarita flight', 'Tequila flights', 'Sangria', 'Zero-proof drinks'],
    },
    fullMenuCta: { label: 'See the Menu', href: 'https://www.magogrill.com/menus/' },
  },

  polaroids: [
    { src: '/images/raw/plate.png', alt: 'Tableside guacamole and margaritas', rotation: -4 },
    { src: '/images/raw/plate.png', alt: 'Tacos and mole plates', rotation: 2 },
    { src: '/images/raw/plate.png', alt: 'Mago cantina drinks', rotation: -2 },
  ],

  story: {
    eyebrow: 'CHEF STORY',
    title: 'Family recipes, moles, and tequila depth',
    body:
      'The public Mago story names Executive Chef Juan Luis Gonzalez, award-winning chefs Juan Luis Gonzalez and Ric Munoz, Grandma Paula family recipes, Mexico roots, and a 200-plus premium 100% blue agave tequila program.',
    notes: ['Grandma Paula family recipes', 'Moles and chef-driven Mexican cooking', '200-plus premium 100% blue agave tequilas'],
  },

  events: {
    title: 'Fiesta Room and group dining',
    body:
      'The Arlington Heights Fiesta Room hosts 20-100 guests with family-style menus, bar packages, and event planning assistance.',
    cta: { label: 'Plan Group Dining', href: 'https://www.magogrill.com/group-dining/' },
    secondaryCta: { label: 'Catering', href: 'https://www.magogrill.com/catering/' },
  },

  reviews: [
    {
      title: 'Food and tableside moments',
      body: 'The review packet trends strongest around Mexican food, tableside guacamole, signature dishes, and repeat visits.',
    },
    {
      title: 'Margaritas and tequila',
      body: 'Guests repeatedly call out margaritas, tequila, cantina drinks, and special-occasion energy.',
    },
    {
      title: 'Service and downtown room',
      body: 'Themes include friendly hospitality, downtown Arlington Heights ambiance, patio/location pull, and recommendations.',
    },
  ],

  location: {
    title: 'Downtown Arlington Heights',
    body:
      'Find Mago at 115 W Campbell St in the Metropolis Performing Arts Centre Building, with two dining rooms and sidewalk seating.',
  },

  floralBreak: {
    image: '/images/raw/plate.png',
    alt: 'Mago molcajete guacamole, margaritas, tacos, and mole plates',
  },

  giftCards: {
    title: 'Gift Cards',
    body: 'Send a Mago night out for margaritas, guacamole, moles, tacos, and downtown Arlington Heights hospitality.',
    cta: { label: 'Gift Cards', href: 'https://www.magogrill.com/gift-cards/' },
  },
  careers: {
    title: 'Group Dining',
    body: 'Bring office dinners, celebrations, and private parties into the Fiesta Room with family-style menus and bar packages.',
    cta: { label: 'Group Dining', href: 'https://www.magogrill.com/group-dining/' },
  },

  social: {
    left: 'Follow Mago',
    right: 'On Instagram',
    handle: '@magogrillcantina',
    url: 'https://www.instagram.com/magogrillcantina/',
  },

  mailingList: {
    title: 'Stay close to Mago',
    subtitle: 'For specials, menus, and Arlington Heights updates',
    placeholder: 'email@example.com',
    cta: 'Join',
  },

  footer: {
    wordmark: 'MAGO',
    credit: 'First preview build - 2026',
  },

  reservation: {
    heading: 'Reserve at Mago',
    body: 'Reservations route through the verified OpenTable profile for Mago Grill & Cantina Arlington Heights.',
    formFields: ['Name', 'Email', 'Phone', 'Party Size', 'Date', 'Time'],
    submitLabel: 'Reserve on OpenTable',
  },
} as const;

export type SiteContent = typeof content;
