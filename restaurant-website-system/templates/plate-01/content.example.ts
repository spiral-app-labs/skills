// content.example.ts — plate-01 placeholder content
//
// Unsplash placeholders — warm natural bistro food photography (seasonal,
// produce-forward, plated but casual). Forks MUST replace with real photos.
//
// MENU DATA STRUCTURE NOTE — the "dense menu with photo callouts" pattern is
// preserved by an intentional `MenuEntry` union, not by mechanical every-Nth
// photo insertion. Each menu section's `entries` array mixes item rows and
// photo callouts in author-chosen positions. This keeps the editorial feel
// per audit §12.4 (irregular photo placement is part of the locked cohesion).

export type MenuItemEntry = {
  type: 'item';
  name: string;
  description: string;
  price: string;
};

export type MenuPhotoEntry = {
  type: 'photo';
  src: string;
  alt: string;
};

export type MenuEntry = MenuItemEntry | MenuPhotoEntry;

export type MenuSection = {
  id: string;
  title: string;
  entries: MenuEntry[];
};

export const content = {
  brand: {
    name: 'Plate',
    tagline: 'Better food on every plate',
    description: 'A modern neighborhood bistro — seasonal menus, honest cooking, warm rooms.',
    address: { line1: '128 Mulberry Street', line2: 'Brooklyn, NY 11201' },
    phone: '(718) 555-0142',
    email: 'hello@plate.example.com',
    social: [
      { label: 'Instagram', href: '#' },
      { label: 'Facebook',  href: '#' },
      { label: 'Twitter',   href: '#' },
    ],
    // hoursConfig powers LiveOpenStatus (pure TZ-aware computation). Mirrors
    // the display-string `home.hours` block (~11:30 open, late close, 7 days).
    // day: 0=Sun..6=Sat.
    hoursConfig: {
      timezone: 'America/New_York',
      ranges: [
        { day: 0 as const, open: '10:00', close: '21:00' }, // Sun
        { day: 1 as const, open: '11:30', close: '22:00' }, // Mon
        { day: 2 as const, open: '11:30', close: '22:00' }, // Tue
        { day: 3 as const, open: '11:30', close: '22:00' }, // Wed
        { day: 4 as const, open: '11:30', close: '23:00' }, // Thu
        { day: 5 as const, open: '11:30', close: '23:00' }, // Fri
        { day: 6 as const, open: '10:00', close: '23:00' }, // Sat
      ],
      closures: [],
    },
    // Union Square, NYC — generic NYC default. Fork swap with real coords.
    geo: { lat: 40.7260, lng: -73.9897 },
  },

  nav: {
    primary: [
      { label: 'Home',    href: '/' },
      { label: 'Menu',    href: '/#menu' },
      { label: 'About',   href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Book a table', href: '#book' },
  },

  hero: {
    headline: 'Better food on\nevery plate',
    subcopy:
      'Seasonal, locally-sourced cooking served in a warm neighborhood room. Small plates, big flavors, honest prices.',
    cta: { label: 'Book a table', href: '#book' },
    secondaryCta: { label: 'See the menu', href: '#menu' },
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=1200&q=80',
        alt: 'Roasted squash dish with herbs',
      },
      {
        src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80',
        alt: 'Grain bowl with greens and citrus',
      },
    ],
  },

  // ── MENU ───────────────────────────────────────────────────────────────
  // Each section's entries array is intentionally ordered — photo callouts
  // land at author-chosen positions to preserve the editorial feel. Do not
  // auto-insert photos every Nth item; that looks mechanical.
  menu: [
    {
      id: 'starters',
      title: 'Starters',
      entries: [
        { type: 'item', name: 'Burrata & Stone Fruit', description: 'Peaches, basil, aged balsamic, toasted hazelnut', price: '$16' },
        { type: 'item', name: 'Tuna Crudo',            description: 'Yellowfin, preserved lemon, chili oil, crispy shallot', price: '$18' },
        { type: 'item', name: 'Roasted Beets',         description: 'Whipped goat cheese, pistachio, orange, mint', price: '$14' },
        { type: 'photo', src: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=900&q=80', alt: 'Starter plate with microgreens' },
        { type: 'item', name: 'Wood-Grilled Octopus',  description: 'Fingerling potato, lemon, salsa verde, capers', price: '$19' },
        { type: 'item', name: 'Market Salad',          description: 'Baby greens, shaved radish, champagne vinaigrette', price: '$12' },
      ],
    },
    {
      id: 'mains',
      title: 'Mains',
      entries: [
        { type: 'item', name: 'Seared Branzino',         description: 'Fennel confit, charred lemon, preserved orange butter', price: '$34' },
        { type: 'photo', src: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80', alt: 'Plated main course with herbs' },
        { type: 'item', name: 'Dry-Aged Ribeye',         description: '14oz, bone marrow butter, roasted shallot, watercress', price: '$52' },
        { type: 'item', name: 'Handmade Pappardelle',    description: 'Lamb neck ragù, pecorino, rosemary breadcrumb', price: '$28' },
        { type: 'item', name: 'Roasted Half Chicken',    description: 'Lemon-thyme jus, bread salad, market vegetables', price: '$26' },
        { type: 'photo', src: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80', alt: 'Grilled steak plate' },
        { type: 'item', name: 'Wild Mushroom Risotto',   description: 'Carnaroli, taleggio, truffle oil, fried sage', price: '$24' },
        { type: 'item', name: 'Harissa-Glazed Carrots',  description: 'Labneh, pomegranate, dukkah, warm flatbread', price: '$22' },
      ],
    },
    {
      id: 'sides',
      title: 'Sides',
      entries: [
        { type: 'item', name: 'Rosemary Fries',       description: 'Sea salt, garlic aioli',                  price: '$8' },
        { type: 'item', name: 'Charred Broccolini',   description: 'Chili flake, lemon, parmesan',            price: '$10' },
        { type: 'photo', src: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80', alt: 'Side dish with fresh herbs' },
        { type: 'item', name: 'Warm Focaccia',        description: 'Cultured butter, Maldon salt',            price: '$7' },
        { type: 'item', name: 'Whipped Potatoes',     description: 'Brown butter, chives',                    price: '$9' },
      ],
    },
    {
      id: 'desserts',
      title: 'Desserts',
      entries: [
        { type: 'item', name: 'Olive Oil Cake',       description: 'Citrus glaze, mascarpone, candied zest',  price: '$11' },
        { type: 'item', name: 'Dark Chocolate Pot',   description: 'Sea salt, olive oil, sourdough crumb',    price: '$12' },
        { type: 'photo', src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80', alt: 'Dessert plate with fresh fruit' },
        { type: 'item', name: 'Seasonal Tart',        description: 'Rotating fruit, vanilla chantilly',       price: '$10' },
        { type: 'item', name: 'Affogato',             description: 'Vanilla gelato, double espresso, amaretti', price: '$9' },
      ],
    },
    {
      id: 'drinks',
      title: 'Drinks',
      entries: [
        { type: 'item', name: 'House Negroni',        description: 'Barrel-aged, orange peel',                price: '$14' },
        { type: 'item', name: 'Smoked Old Fashioned', description: 'Rye, demerara, cherrywood smoke',         price: '$16' },
        { type: 'photo', src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80', alt: 'Cocktail with citrus garnish' },
        { type: 'item', name: 'Garden Spritz',        description: 'Gin, elderflower, cucumber, tonic',       price: '$13' },
        { type: 'item', name: 'Natural Wine — Glass', description: 'Ask your server for today\'s selection',  price: '$12+' },
        { type: 'item', name: 'House Lemonade',       description: 'Rosemary, lemon, honey (non-alc)',        price: '$7' },
      ],
    },
  ] satisfies MenuSection[],

  tagline: {
    heading: 'Bold flavours, local ingredients,\ncrafted with love',
    collage: [
      { src: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?auto=format&fit=crop&w=900&q=80', alt: 'Guests at a lively table' },
      { src: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80', alt: 'Chef plating at the pass' },
    ],
    trustIcons: ['Instagram', 'Facebook', 'Twitter'],
  },

  blog: {
    heading: 'Latest updates from Plate',
    posts: [
      {
        title: 'The fall menu is here',
        category: 'Seasonal',
        date: 'Oct 12, 2025',
        image: 'https://images.unsplash.com/photo-1572441713132-51c75654db73?auto=format&fit=crop&w=900&q=80',
        href: '#',
      },
      {
        title: 'Meet our new pastry chef',
        category: 'Team',
        date: 'Sep 28, 2025',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
        href: '#',
      },
      {
        title: 'Winter wine dinner — Nov 14',
        category: 'Events',
        date: 'Sep 14, 2025',
        image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80',
        href: '#',
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    heading: 'Frequently asked questions',
    items: [
      { q: 'Do you take reservations?',        a: 'Yes — we accept reservations up to 30 days in advance via the Book a table link in the nav. Walk-ins are welcome at the bar.' },
      { q: 'Are you kid-friendly?',            a: 'Absolutely. We have a shorter kids menu available on request and high chairs for the little ones.' },
      { q: 'Can you accommodate dietary restrictions?', a: 'Most of our menu can be adapted for vegetarian, gluten-free, and dairy-free diners. Flag any allergies when booking so the kitchen can plan ahead.' },
      { q: 'Is there parking nearby?',         a: 'Street parking is available along Mulberry. There is also a municipal garage two blocks east on Atlantic.' },
      { q: 'Do you host private events?',      a: 'Yes — our back room seats 24 for plated dinners or 40 standing. Email events@plate.example.com for availability.' },
      { q: 'What is the dress code?',          a: 'Smart casual. Come as you are — we just ask for no beachwear during dinner service.' },
    ],
  },

  closing: {
    heading: 'Come grab a bite\nat Plate',
    subcopy:
      'We are open seven days a week for lunch and dinner. Reservations recommended for parties of four or more.',
    cta: { label: 'Book a table', href: '#book' },
    secondaryCta: { label: 'Get directions', href: '#' },
    photo: {
      src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80',
      alt: 'Roasted main dish on a rustic plate',
    },
    hours: [
      { day: 'Mon – Wed', time: '11:30 AM – 10:00 PM' },
      { day: 'Thu – Fri', time: '11:30 AM – 11:00 PM' },
      { day: 'Saturday',  time: '10:00 AM – 11:00 PM' },
      { day: 'Sunday',    time: '10:00 AM – 9:00 PM'  },
    ],
  },

  wordmark: 'plate',

  footer: {
    tagline: 'Better food on every plate',
    columns: [
      {
        heading: 'Visit',
        lines: ['128 Mulberry Street', 'Brooklyn, NY 11201'],
      },
      {
        heading: 'Hours',
        lines: ['Mon – Wed: 11:30 – 10:00', 'Thu – Sun: until late'],
      },
      {
        heading: 'Contact',
        lines: ['(718) 555-0142', 'hello@plate.example.com'],
      },
    ],
    copyright: '© 2026 Plate Restaurant. All rights reserved.',
  },

  // ── ABOUT ──────────────────────────────────────────────────────────────
  about: {
    hero: {
      headline: 'A place for good\nfood & vibes',
      subcopy: 'Plate started with a simple idea — cook what is in season, keep the room warm, and let the food do the talking. Five years in, that is still the whole plan.',
      photos: [
        { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80', alt: 'Dining room interior with warm light' },
        { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80', alt: 'Table set for dinner service' },
      ],
    },
    values: {
      heading: 'How we do things at Plate',
      items: [
        { title: 'Simple, seasonal food',       body: 'Our menu changes with the market. We buy whole animals from two farms upstate, fish from the dock, and produce weekly from growers we know by name.' },
        { title: 'Thoughtful, no-compromise',   body: 'Every sauce is made here, every loaf is baked here, every pasta is rolled here. It takes longer. It tastes better.' },
        { title: 'Inviting hospitality',        body: 'We want you to linger. There is no table-turning pressure, no pretension, no minimum spend — just good food and a warm welcome.' },
      ],
    },
    staff: {
      heading: 'The people behind Plate',
      people: [
        { name: 'Ana Ruiz',        role: 'Chef & Co-owner',        photo: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80' },
        { name: 'Marcus Lee',      role: 'General Manager',        photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80' },
        { name: 'Jess Okafor',     role: 'Pastry Chef',            photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80' },
        { name: 'Theo Park',       role: 'Sous Chef',              photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80' },
        { name: 'Sam Reyes',       role: 'Bar Lead',               photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80' },
        { name: 'Priya Shah',      role: 'Front of House',         photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' },
      ],
    },
  },

  // ── CONTACT ────────────────────────────────────────────────────────────
  contact: {
    eyebrow: 'GET IN TOUCH',
    heading: 'Send us a message',
    subcopy: 'Questions about the menu, private events, or anything else — drop us a line and we will get back to you within a day.',
    form: {
      fields: [
        { name: 'name',    label: 'Your name',    type: 'text',     placeholder: 'Jane Doe' },
        { name: 'email',   label: 'Email',        type: 'email',    placeholder: 'jane@example.com' },
        { name: 'subject', label: 'Subject',      type: 'text',     placeholder: 'Reservation for 6' },
        { name: 'message', label: 'Message',      type: 'textarea', placeholder: 'Tell us a bit more...' },
      ],
      submitLabel: 'Send message',
    },
    info: {
      heading: 'Plate Restaurant',
      address: ['128 Mulberry Street', 'Brooklyn, NY 11201'],
      phone:   '(718) 555-0142',
      email:   'hello@plate.example.com',
      hours:   ['Mon – Wed: 11:30 – 10:00', 'Thu – Fri: 11:30 – 11:00', 'Sat: 10:00 – 11:00', 'Sun: 10:00 – 9:00'],
    },
  },
};
