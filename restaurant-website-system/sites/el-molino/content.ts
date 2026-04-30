import type { HoursConfig } from './lib/hours';

const hoursConfig = {
  timezone: 'America/Chicago',
  ranges: [
    { day: 0, open: '12:00', close: '20:00' },
    { day: 2, open: '16:00', close: '21:00' },
    { day: 3, open: '16:00', close: '21:00' },
    { day: 4, open: '16:00', close: '21:00' },
    { day: 5, open: '16:00', close: '22:00' },
    { day: 6, open: '16:00', close: '22:00' },
  ],
  closures: [],
} satisfies HoursConfig;

export const content = {
  brand: {
    name: 'El Molino',
    fullName: 'El Molino Mexican Restaurant',
    tagline: 'Puebla recipes. Carpentersville since 1984.',
    description:
      'A new Zepeda-family chapter at a 1984 Carpentersville Mexican landmark, with house salsas, fresh tortillas, margaritas, and a warmer renovated room.',
    address: {
      line1: '2112 Elgin Rd',
      line2: 'Carpentersville, IL 60110',
    },
    phone: '(847) 551-1602',
    phoneTel: '+18475511602',
    email: 'info@thenewmolino.com',
    website: 'https://thenewmolino.com/',
    menuPdf: 'https://thenewmolino.com/menu/menu.pdf',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=42.1480327,-88.2581124',
    reserveUrl: 'https://www.google.com/search?q=El+Molino+Mexican+Restaurant+Carpentersville+reserve',
    hours: [
      { days: 'Sunday', time: '12:00 PM - 8:00 PM' },
      { days: 'Monday', time: 'Closed' },
      { days: 'Tuesday - Thursday', time: '4:00 PM - 9:00 PM' },
      { days: 'Friday - Saturday', time: '4:00 PM - 10:00 PM' },
    ],
    hoursConfig,
    geo: { lat: 42.1480327, lng: -88.2581124 },
  },

  nav: [
    { label: 'Menu', href: '#menu' },
    { label: 'Story', href: '#story' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Visit', href: '#visit' },
  ],

  hero: {
    eyebrow: 'Puebla recipes. Carpentersville since 1984.',
    heading: 'El Molino',
    sub:
      'Now under Zepeda-family ownership and management. House salsas, fresh tortillas, margaritas, and a renovated room for Carpentersville since 1984.',
    primary: { label: 'View Menu', href: '#menu' },
    secondary: { label: 'Call or Get Directions', href: '#visit' },
    image: {
      src: '/photos/dining-room.jpeg',
      alt: 'The renovated El Molino dining room with cream walls, wood beams, teal booths, and terracotta tile.',
    },
  },

  management: {
    label: 'Under new ownership and management',
    body:
      'El Molino is led by a new Zepeda-family team, with no direct relation to prior ownership. Same Carpentersville landmark, fresh room, clearer hospitality.',
  },

  proof: [
    { value: '4.3', label: 'rating from 886 public reviews' },
    { value: '1984', label: 'Carpentersville landmark' },
    { value: '64', label: 'review mentions for margaritas' },
    { value: '30', label: 'newest written reviews audited' },
  ],

  story: {
    eyebrow: 'A new family chapter',
    heading: 'The old landmark, warmed back up.',
    body:
      'El Molino has fed Carpentersville since 1984. The Zepeda family reopened it with Puebla-rooted recipes, a six-month renovation, and a brighter room that still feels unmistakably Mexican.',
    points: [
      {
        title: 'House salsas lead the table',
        body:
          'Reviews keep coming back to the salsas, tortillas, mole, tacos, and fajitas. The site now leads with those signatures instead of a generic ownership announcement.',
      },
      {
        title: 'The room is part of the promise',
        body:
          'Cream walls, wood beams, terracotta tile, teal booths, warm pendants, and artwork create the quieter post-renovation register guests are noticing.',
      },
      {
        title: 'Hospitality has names',
        body:
          'Daniel and Juan show up repeatedly in fresh guest comments. The homepage gives that service proof a real place in the story.',
      },
    ],
  },

  menu: {
    eyebrow: 'Readable from your phone',
    heading: 'Menu highlights',
    note:
      'A cleaner path than a tiny PDF: clear sections, visible signatures, and fewer surprises before guests order.',
    categories: [
      {
        title: 'Antojitos',
        items: [
          { name: 'Nachos El Molino', desc: 'Chihuahua cheese, beans, machaca beef, sour cream, tomato, onion, and cilantro.' },
          { name: 'Queso Fundido', desc: 'Melted Chihuahua cheese with chorizo, served with warm tortillas.' },
          { name: 'Guacamole de la Casa', desc: 'Avocado, lime, cilantro, onion, tomato, and chips.' },
        ],
      },
      {
        title: 'Tacos & Enchiladas',
        items: [
          { name: 'Carne Asada Tacos', desc: 'A go-to order with salsa, onion, cilantro, and fresh tortillas.' },
          { name: 'Enchiladas Suizas', desc: 'Rolled tortillas, melted cheese, and salsa verde.' },
          { name: 'Chiles Rellenos', desc: 'Roasted poblano peppers with cheese, salsa, rice, and beans.' },
        ],
      },
      {
        title: 'House Plates',
        items: [
          { name: 'Mole Poblano', desc: 'A Puebla-rooted signature and one of the core flavor signals for the new chapter.' },
          { name: 'Fajitas', desc: 'Sizzling peppers, onions, tortillas, rice, beans, and choice of protein.' },
          { name: 'Machaca Chimichanga', desc: 'A regulars-return dish called out in recent reviews.' },
        ],
      },
      {
        title: 'Bar & Sweets',
        items: [
          { name: 'House Margarita', desc: 'Classic lime, salt rim, and a back-room bar made for a slower night out.' },
          { name: 'Mango Margarita', desc: 'A guest favorite from the newest review pass.' },
          { name: 'Fried Ice Cream', desc: 'A long-running El Molino dessert that regulars still look for.' },
        ],
      },
    ],
  },

  paths: [
    {
      title: 'Eat',
      body: 'Tacos, mole, fajitas, enchiladas, fresh tortillas, and house salsas.',
      image: '/photos/booth-mural.jpeg',
      alt: 'A private El Molino booth with warm lighting and religious artwork above the table.',
    },
    {
      title: 'Drink',
      body: 'Margaritas, tequila, beer, and a renovated back-room bar for date night or a second round.',
      image: '/photos/bar-room.jpeg',
      alt: 'The renovated El Molino bar with tall stools, glassware, and white wood trim.',
    },
    {
      title: 'Gather',
      body: 'Patio, booths, private-room style seating, birthdays, and small-group dinners.',
      image: '/photos/private-table.jpeg',
      alt: 'A round El Molino dining table set for a small group.',
    },
  ],

  reviews: {
    eyebrow: 'What people are noticing',
    heading: 'A brighter room, handmade staples, and service that feels personal.',
    aggregate: '4.3 rating from 886 public reviews',
    items: [
      {
        text: 'Authentic Mexican food in a great atmosphere.',
        rating: 4,
        theme: 'Atmosphere',
      },
      {
        text: 'The food itself certainly was authentic, very filling and cooked perfectly.',
        rating: 5,
        theme: 'Authentic plates',
      },
      {
        text: 'I got fajitas and a mango margarita it was delicious.',
        rating: 5,
        theme: 'Fajitas and margaritas',
      },
      {
        text: 'The salsas they bring out are to die for, the tortillas are homemade.',
        rating: 5,
        theme: 'House salsas',
      },
      {
        text: 'Very nice for a date night or just going for a drink at the bar.',
        rating: 5,
        theme: 'Date night',
      },
      {
        text: 'Ask for Daniel; he is very friendly and provides excellent service.',
        rating: 5,
        theme: 'Service',
      },
      {
        text: 'Gracias Juan, por hacernos sentir como en casa.',
        rating: 5,
        theme: 'Hospitality',
      },
      {
        text: 'They make their own fresh tortillas every morning.',
        rating: 5,
        theme: 'Fresh tortillas',
      },
      {
        text: 'A beautiful looking restaurant, easy parking, beautiful bar areas and a wonderful staff.',
        rating: 5,
        theme: 'Room and bar',
      },
    ],
  },
} as const;

export type Content = typeof content;
