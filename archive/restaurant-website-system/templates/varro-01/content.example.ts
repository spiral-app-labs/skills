// content.example.ts — varro-01 placeholder content
//
// Unsplash placeholders: abundance Italian food (pasta / pizza / spread) +
// warm interior + sepia-graded chef portraits. Real forks MUST replace with
// photography shot with sepia/warm-desaturated grading for chef cards
// (see audit §12.4 — bright-daylight portraits break the module).

export const content = {
  brand: {
    name: 'Varro',
    tagline: 'From Italy\'s Heartland',
    description:
      'Serious upscale Italian heritage restaurant. Chef-driven kitchen across pasta, pizza, meats, and fish. Two locations: Milan and Zürich.',
    email: 'hello@varro.example',
    phone: '+39 02 1234 5678',
    address: {
      line1: 'P.za del Duomo',
      line2: '20122 Milano MI, Italy',
    },
    social: [
      { label: 'Instagram', href: '#' },
      { label: 'Facebook',  href: '#' },
      { label: 'X',         href: '#' },
    ],
    // Aliveness retrofit (2026-04-20): Milan primary-location hoursConfig + geo.
    // Parsed from contact.locations[0] (Milan): Tue–Thu 18:00–23:00,
    // Fri/Sat 12:00–15:00 & 18:00–24:00 (lunch + dinner), Sun 12:00–22:00, Mon closed.
    hoursConfig: {
      timezone: 'Europe/Rome',
      ranges: [
        { day: 2 as const, open: '18:00', close: '23:00' }, // Tue
        { day: 3 as const, open: '18:00', close: '23:00' }, // Wed
        { day: 4 as const, open: '18:00', close: '23:00' }, // Thu
        { day: 5 as const, open: '12:00', close: '15:00' }, // Fri lunch
        { day: 5 as const, open: '18:00', close: '24:00' }, // Fri dinner
        { day: 6 as const, open: '12:00', close: '15:00' }, // Sat lunch
        { day: 6 as const, open: '18:00', close: '24:00' }, // Sat dinner
        { day: 0 as const, open: '12:00', close: '22:00' }, // Sun
      ],
      closures: [],
    },
    geo: { lat: 45.4642, lng: 9.1900 }, // Milan Duomo
  },

  nav: {
    primary: [
      { label: 'Story',       href: '#about' },
      { label: 'Chefs',       href: '#chefs' },
      { label: 'Menu',        href: '#menu' },
      { label: 'Reservation', href: '#reserve' },
      { label: 'Contact',     href: '#contact' },
    ],
    cta: { label: 'Reserve a Table', href: '#reserve' },
  },

  hero: {
    eyebrow: 'Heritage Italian · Est. 1974',
    headline: 'From Italy\'s Heartland',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1200&q=80',
        alt: 'Overhead wood-fired pizza',
      },
      {
        src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80',
        alt: 'Plated pasta close-up',
      },
      {
        src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
        alt: 'Laid table with linen and glassware',
      },
    ],
  },

  about: {
    eyebrow: 'Our Story',
    heading: 'About Our Restaurant',
    paragraphs: [
      'Varro began in a small kitchen outside Bologna in 1974 — three generations ago, and still one family. What started as a single room with a wood-burning oven grew into a multi-discipline Italian kitchen that now serves Milan and Zürich.',
      'Our philosophy has never changed: use what the region grows, respect the traditions we inherited, and give every guest at the table the attention our grandmother gave hers. Pasta is rolled every morning; bread is baked twice a day; the pizza oven never goes cold.',
    ],
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=80',
    imageAlt: 'Warm dining room interior with Edison bulbs',
  },

  chefs: {
    eyebrow: 'Our Chefs',
    heading: 'The Kitchen',
    body:
      'Four chefs lead the Varro kitchen — each the custodian of a discipline that has defined Italian cooking for generations.',
    team: [
      {
        name: 'Marco Terzi',
        role: 'Executive Chef',
        bio: 'Led the kitchen for 18 years. Third-generation in his family kitchen.',
        photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Giulia Ferraro',
        role: 'Head of Pasta',
        bio: 'Trained in Emilia-Romagna. Rolls every sheet by hand each morning.',
        photo: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Lorenzo Bianchi',
        role: 'Pizzaiolo',
        bio: 'Certified by the AVPN. Keeps the wood-fired oven at 485°C.',
        photo: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Sofia De Luca',
        role: 'Pastry Chef',
        bio: 'Sicilian by birth, Milanese by training. Cannoli to tiramisù.',
        photo: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },

  manifesto: {
    line1: 'The Table Is the',
    line2: 'Center of Life',
    ornament: true,
  },

  menuMarquee: {
    phrase: 'Our Menu',
    separator: '◆',
    repeatCount: 8,
  },

  menu: {
    eyebrow: 'The Menu',
    heading: 'What We Serve',
    sections: [
      {
        id: 'meats-fish',
        label: 'Meats & Fish',
        dishes: [
          { name: 'Bistecca alla Fiorentina', description: '45-day dry-aged T-bone, rosemary, lemon', price: '€68' },
          { name: 'Branzino al Sale',          description: 'Whole salt-baked sea bass, Ligurian oil',  price: '€52' },
          { name: 'Ossobuco alla Milanese',    description: 'Braised veal shank, saffron risotto',      price: '€44' },
          { name: 'Tagliata di Manzo',         description: 'Sliced prime beef, arugula, parmesan',     price: '€46' },
        ],
      },
      {
        id: 'pizza',
        label: 'Pizza',
        dishes: [
          { name: 'Margherita D.O.P.',  description: 'San Marzano, buffalo mozzarella, basil',       price: '€18' },
          { name: 'Salsiccia e Friarielli', description: 'Neapolitan sausage, broccoli rabe, pecorino', price: '€22' },
          { name: 'Quattro Formaggi',   description: 'Mozzarella, gorgonzola, fontina, parmesan',     price: '€21' },
          { name: 'Tartufo Nero',       description: 'Fior di latte, black truffle, egg yolk',        price: '€34' },
        ],
      },
      {
        id: 'pasta',
        label: 'Pasta & Risotti',
        dishes: [
          { name: 'Tagliatelle al Ragù',       description: 'Slow-cooked beef and pork, Bolognese tradition', price: '€28' },
          { name: 'Cacio e Pepe',              description: 'Hand-cut tonnarelli, pecorino, black pepper',    price: '€26' },
          { name: 'Risotto ai Funghi',         description: 'Carnaroli, porcini, parmesan, truffle oil',      price: '€32' },
          { name: 'Lasagna della Nonna',       description: 'Four-layer lasagna, béchamel, 6-hour ragù',      price: '€30' },
        ],
      },
      {
        id: 'desserts',
        label: 'Desserts',
        dishes: [
          { name: 'Tiramisù Classico', description: 'Mascarpone, espresso, savoiardi, cocoa',     price: '€12' },
          { name: 'Cannoli Siciliani', description: 'Ricotta, candied orange, pistachio',         price: '€14' },
          { name: 'Panna Cotta',       description: 'Vanilla bean cream, wild berry coulis',       price: '€11' },
        ],
      },
      {
        id: 'sides',
        label: 'Side Dishes',
        dishes: [
          { name: 'Patate al Rosmarino',     description: 'Roasted potatoes, rosemary, sea salt',          price: '€8' },
          { name: 'Verdure Grigliate',       description: 'Grilled seasonal vegetables, olive oil',        price: '€10' },
          { name: 'Insalata Mista',          description: 'Mixed greens, shaved fennel, lemon dressing',   price: '€9' },
        ],
      },
    ],
  },

  reservation: {
    eyebrow: 'Book With Us',
    heading: 'Reserve Your Table',
    body: 'Reservations recommended Thursday through Sunday. Walk-ins welcome at the bar.',
    fields: {
      namePlaceholder: 'Full name',
      emailPlaceholder: 'Email address',
      datePlaceholder: 'Date',
      timePlaceholder: 'Time',
      partyPlaceholder: 'Party size',
      notesPlaceholder: 'Special requests (optional)',
    },
    cta: 'Reserve a Table',
    confirmation: 'Thank you. We will confirm your reservation shortly.',
  },

  contact: {
    eyebrow: 'Visit',
    heading: 'Contact',
    locations: [
      {
        name: 'Milan',
        address: 'P.za del Duomo, 20122 Milano MI, Italy',
        phone: '+39 02 1234 5678',
        email: 'milano@varro.example',
        hours: [
          { days: 'Tue – Thu', time: '18:00 – 23:00' },
          { days: 'Fri – Sat', time: '12:00 – 15:00 · 18:00 – 00:00' },
          { days: 'Sun',       time: '12:00 – 22:00' },
          { days: 'Mon',       time: 'Closed' },
        ],
      },
      {
        name: 'Zürich',
        address: 'Lindenhof, 8001 Zürich, Switzerland',
        phone: '+41 44 123 45 67',
        email: 'zurich@varro.example',
        hours: [
          { days: 'Tue – Thu', time: '18:00 – 23:00' },
          { days: 'Fri – Sat', time: '12:00 – 15:00 · 18:00 – 00:00' },
          { days: 'Sun',       time: '12:00 – 22:00' },
          { days: 'Mon',       time: 'Closed' },
        ],
      },
    ],
  },

  faq: {
    eyebrow: 'Good To Know',
    heading: 'Frequently Asked Questions',
    items: [
      {
        q: 'Do you take walk-ins?',
        a: 'Yes. The bar and lounge are available for walk-ins every evening. Dining-room seating is by reservation during peak hours.',
      },
      {
        q: 'Is there a dress code?',
        a: 'Smart casual. Jackets welcome but not required. We simply ask that beachwear and athleticwear stay for another venue.',
      },
      {
        q: 'Can you accommodate dietary restrictions?',
        a: 'Of course. Gluten-free, vegetarian, and most allergies can be accommodated with advance notice. Call us and we\'ll plan together.',
      },
      {
        q: 'Do you host private events?',
        a: 'Yes. Both locations offer private dining rooms for parties of 8 to 40. Full buyouts available. Email events@varro.example.',
      },
      {
        q: 'Is parking available?',
        a: 'Milan: valet service Thursday through Saturday. Zürich: public garage two blocks south at Bahnhofstrasse.',
      },
    ],
  },

  closing: {
    ornament: true,
    line1: 'We Look Forward',
    line2: 'To Your Visit',
  },

  footer: {
    wordmark: 'Varro',
    sitemap: {
      heading: 'Sitemap',
      links: [
        { label: 'Our Story', href: '#about' },
        { label: 'Menu',      href: '/menu' },
        { label: 'Reservation', href: '#reserve' },
        { label: 'Contact',   href: '/contact' },
        { label: 'Privacy',   href: '#' },
      ],
    },
    socials: {
      heading: 'Socials',
      links: [
        { label: 'Instagram', href: '#' },
        { label: 'Facebook',  href: '#' },
        { label: 'X',         href: '#' },
      ],
    },
    bottomBar: {
      copyright: '© 2026 Varro Restaurant',
      credit: 'A serious Italian heritage template',
    },
  },

  // Sub-page content (real routes, minimal)
  menuPage: {
    title: 'Menu',
    subtitle: 'Our full offering, served across pasta, pizza, meats, fish, and dolci.',
  },
  aboutPage: {
    title: 'Our Story',
    subtitle: 'Three generations. One kitchen. A single philosophy.',
    body: [
      'Varro opened in 1974 just outside Bologna as a single-room trattoria with one wood-burning oven. Our founder, Pietro Varro, believed that the table was where Italian life happened — and that belief still anchors every plate we serve.',
      'Fifty years later, we run two kitchens: one in Milan, one in Zürich. Each is led by a team of chefs who have each spent years training in the discipline they now carry. Pasta, pizza, wood-fired meats, and pastry — four disciplines, one standard.',
      'The menu changes with the season because the land changes with the season. But the standards do not change: ingredients from people we know, technique that honors where it came from, hospitality shaped by a family table.',
    ],
  },
  contactPage: {
    title: 'Contact',
    subtitle: 'We would love to hear from you.',
  },
};
