const imageBase = '/images/bistro-wasabi';

export const links = {
  tock: 'https://www.exploretock.com/bistrowasabilakeinthehills',
  carryOut: 'https://order.toasttab.com/online/bistro-wasabi-lith-4590-w-algonquin-rd',
  giftCards: 'https://www.toasttab.com/bistro-wasabi-lith-4590-w-algonquin-rd/giftcards',
  delivery: 'https://www.ubereats.com/store/bistro-wasabi/jnP8YukWRxiW3drzGHnnrg',
  phone: 'tel:+18475152700',
  email: 'mailto:thebistrowasabi@gmail.com',
  lakeDirections:
    'https://www.google.com/maps/search/?api=1&query=4590%20W%20Algonquin%20Rd%2C%20Lake%20in%20the%20Hills%2C%20IL%2060156',
  hoffmanDirections:
    'https://www.google.com/maps/search/?api=1&query=1578%20W%20Algonquin%20Rd%2C%20Hoffman%20Estates%2C%20IL%2060192',
};

export const content = {
  brand: {
    name: 'Bistro Wasabi',
    tagline: 'Bistro Wasabi',
    description:
      'Refined sushi, polished fusion, martinis, wine, and steaks in Lake in the Hills and Hoffman Estates.',
    logoText: 'BISTRO WASABI',
    phone: '847-515-2700',
    email: 'thebistrowasabi@gmail.com',
    established: 'Since 2000',
    address: { line1: '4590 W Algonquin Rd', line2: 'Lake in the Hills, IL 60156' },
    hoursDisplay: [
      { day: 'Mon', value: 'Closed' },
      { day: 'Tue-Thu', value: '5:00-9:30' },
      { day: 'Fri-Sat', value: '5:00-9:30' },
      { day: 'Sun', value: '4:30-9:00' },
    ],
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 2 as const, open: '17:00', close: '21:30' },
        { day: 3 as const, open: '17:00', close: '21:30' },
        { day: 4 as const, open: '17:00', close: '21:30' },
        { day: 5 as const, open: '17:00', close: '21:30' },
        { day: 6 as const, open: '17:00', close: '21:30' },
        { day: 0 as const, open: '16:30', close: '21:00' },
      ],
      closures: [],
    },
  },

  nav: {
    items: [
      { label: 'Menu', href: '/menu' },
      { label: 'Locations', href: '/locations' },
      { label: 'Story', href: '/about' },
    ],
    cta: { label: 'Reserve', href: links.tock },
  },

  hero: {
    image: `${imageBase}/dining-room.jpg`,
    alt: 'Bistro Wasabi sushi bar with fish and vegetables prepared for service',
    eyebrow: 'Lake in the Hills + Hoffman Estates',
    lead:
      'Fresh sushi, polished fusion, martinis, wine nights, and steaks for the whole table.',
  },

  thumbnailNav: [
    {
      label: 'Menu',
      href: '/menu',
      image: `${imageBase}/menu-plate.jpg`,
      alt: 'Bistro Wasabi plated sushi and starters',
    },
    {
      label: 'Locations',
      href: '/locations',
      image: `${imageBase}/hero-sushi.jpg`,
      alt: 'Bistro Wasabi sushi rolls',
    },
    {
      label: 'Reserve',
      href: links.tock,
      image: `${imageBase}/favorite-1.jpg`,
      alt: 'Bistro Wasabi favorite sushi plate',
    },
    {
      label: 'Carry Out',
      href: links.carryOut,
      image: `${imageBase}/beef-roll.jpg`,
      alt: 'Bistro Wasabi asparagus beef roll',
    },
  ],

  locations: [
    {
      name: 'Lake in the Hills',
      role: 'Reservations, carry-out, gift cards, and delivery',
      address: '4590 W Algonquin Rd, Lake in the Hills, IL 60156',
      actions: [
        { label: 'Reserve on Tock', href: links.tock, primary: true },
        { label: 'Order Carry Out', href: links.carryOut, primary: true },
        { label: 'Directions', href: links.lakeDirections },
        { label: 'Call', href: links.phone },
      ],
    },
    {
      name: 'Hoffman Estates',
      role: 'Second Bistro Wasabi location',
      address: '1578 W Algonquin Rd, Hoffman Estates, IL 60192',
      actions: [
        { label: 'Directions', href: links.hoffmanDirections, primary: true },
        { label: 'Call', href: links.phone, primary: true },
        { label: 'Email', href: links.email },
      ],
    },
  ],

  proof: [
    {
      label: 'Fresh sushi',
      text: 'Clean fish, inventive maki, and visible sushi bar craft set the tone for dinner.',
    },
    {
      label: 'Martinis + wine',
      text: 'Cocktails, sake, Tuesday wine bottles, and Wednesday martinis are part of the draw.',
    },
    {
      label: 'For mixed tables',
      text: 'Steaks, shrimp and scallops, lamb, tempura, and desserts keep non-sushi guests in.',
    },
  ],

  specials: [
    { day: 'Tuesday', offer: 'Half-price bottles of wine under $100' },
    { day: 'Wednesday', offer: '$8 martinis' },
    { day: 'Sunday', offer: 'Mai Tai special' },
  ],

  about: {
    pageTitle: 'Story',
    image: `${imageBase}/hero-sushi.jpg`,
    headline: 'A polished sushi and fusion room, locally owned since 2000.',
    intro:
      'Bistro Wasabi blends traditional sushi with Mexican, Korean, and French-inspired appetizers, entrees, and desserts. The menu stretches beyond the sushi bar with broiled steaks, chops, charbroiled New York steak, martinis, sake, and wine.',
    badges: [
      { value: '2000', name: 'Established', descriptor: 'Locally owned' },
      { value: '2', name: 'Locations', descriptor: 'Algonquin Road' },
      { value: 'Tock', name: 'Reservations', descriptor: 'Preserved path' },
    ],
    storyHeadline: 'What guests remember',
    story:
      'The strongest story is precision without pretense: fresh sushi, inventive rolls, a moody room guests compare to a city night out, and enough breadth for the steak or martini person at the table.',
    storyImage: `${imageBase}/favorite-4.jpg`,
  },

  menu: {
    pageTitle: 'Menu',
    pageImage: `${imageBase}/menu-plate.jpg`,
    intro:
      'A focused pass through the menu breadth: sushi, starters, seafood, steaks, martinis, sake, and wine.',
    sections: [
      {
        title: 'Sushi & Maki',
        items: [
          {
            name: 'Bistro Wasabi Special',
            description: 'The house roll for a first taste of Bistro Wasabi.',
            price: 'Roll',
            image: `${imageBase}/favorite-1.jpg`,
          },
          {
            name: 'Dragon',
            description: 'A familiar favorite with the richness and polish guests expect.',
            price: 'Maki',
            image: `${imageBase}/hero-sushi.jpg`,
          },
          {
            name: 'Spicy Tuna Deluxe',
            description: 'A fresh-tuna classic for guests who start at the sushi bar.',
            price: 'Sushi',
            image: `${imageBase}/favorite-2.jpg`,
          },
          {
            name: 'Crazy Roll',
            description: 'Inventive maki with a sharper dinner-room finish.',
            price: 'Roll',
            image: `${imageBase}/favorite-3.jpg`,
          },
        ],
      },
      {
        title: 'Cold & Hot Starters',
        items: [
          {
            name: 'Crackled Tuna',
            description: 'A crisp, bright tuna starter with signature pull.',
            price: 'Starter',
            image: `${imageBase}/favorite-4.jpg`,
          },
          {
            name: 'Sashimi Carpaccio',
            description: 'Clean, refined, and built around sushi-bar precision.',
            price: 'Cold',
            image: `${imageBase}/contact-banner.jpg`,
          },
          {
            name: 'Raspberry Chipotle Shrimp',
            description: 'A fusion note that gives the starter list its Bistro Wasabi character.',
            price: 'Hot',
            image: `${imageBase}/starters.jpg`,
          },
          {
            name: 'Calamari Tempura',
            description: 'A familiar table starter for groups balancing sushi and warm dishes.',
            price: 'Hot',
            image: `${imageBase}/starters.jpg`,
          },
        ],
      },
      {
        title: 'Entrees & Steaks',
        items: [
          {
            name: 'Peppercorn Ahi Tuna',
            description: 'A peppercorn-seared seafood entree with dinner-room weight.',
            price: 'Entree',
            image: `${imageBase}/favorite-6.jpg`,
          },
          {
            name: 'Shrimp & Scallops',
            description: 'Generous seafood for the guest who wants the full entree path.',
            price: 'Entree',
            image: `${imageBase}/menu-plate.jpg`,
          },
          {
            name: 'New York Steak',
            description: 'Charbroiled steak keeps the table open to guests beyond sushi.',
            price: 'Steak',
            image: `${imageBase}/beef-roll.jpg`,
          },
          {
            name: 'Rack of Lamb',
            description: 'A special-occasion entree with a polished plate presence.',
            price: 'Entree',
            image: `${imageBase}/favorite-6.jpg`,
          },
        ],
      },
      {
        title: 'Martinis, Sake & Wine',
        items: [
          {
            name: 'Asian Pear Martini',
            description: 'A cool, aromatic martini that fits the room.',
            price: 'Martini',
            image: `${imageBase}/dining-room.jpg`,
          },
          {
            name: 'Mango Mango',
            description: 'A bright fruit-driven martini for the midweek ritual.',
            price: 'Martini',
            image: `${imageBase}/dining-room.jpg`,
          },
          {
            name: 'Sapporo',
            description: 'Beer, sake, cocktails, martinis, and wine give the dinner room its range.',
            price: 'Beer',
            image: `${imageBase}/menu-plate.jpg`,
          },
          {
            name: 'Tuesday Wine Bottles',
            description: 'Half-price bottles under $100 for a standing weekly reason to come back.',
            price: 'Special',
            image: `${imageBase}/favorite-3.jpg`,
          },
        ],
      },
    ],
  },

  reservation: {
    pageTitle: 'Reserve',
    pageImage: `${imageBase}/favorite-1.jpg`,
    headline: 'Choose the right path',
    intro:
      'Reserve Lake in the Hills on Tock, order carry-out on Toast, send a Toast gift card, or start delivery through Uber Eats.',
  },

  footer: {
    text: 'Bistro Wasabi. Locally owned since 2000.',
  },
} as const;

export type SiteContent = typeof content;
