// content.example.ts — The Graceful Ordinary fork content
// Roma / 1776-redesign-01 warm-editorial fork, source-checked 2026-05-06.

export type DisplayHeadingContent = {
  upright: string;
  italic: string;
  layout?: 'inline' | 'stacked';
};

const img = {
  hero: 'https://cdn.prod.website-files.com/606dbba8b22acf09f996aad0/6183f4ee2522cd7b7bd25e74_Footer-large-web.jpg',
  room: 'https://cdn.prod.website-files.com/606dbba8b22acf65d296aaf9/686b4919ffa8d3d4fba46965_the-graceful-ordinary-hospitality-design-03.jpg',
  foodWide: 'https://cdn.prod.website-files.com/606dbba8b22acf65d296aaf9/62ba1eda94f43a562e3b8efc_GalleryPix-Food-Horiz4.jpg',
  foodWideTwo: 'https://cdn.prod.website-files.com/606dbba8b22acf65d296aaf9/62ba1f66f6614c72d58114d7_GalleryPix-Food-Horiz3.jpg',
  foodVertical: 'https://cdn.prod.website-files.com/606dbba8b22acf65d296aaf9/61843926a3bdae28d554526a_GalleryPix-Food-hpg-Vert1.jpg',
  cocktails: 'https://cdn.prod.website-files.com/606dbba8b22acf65d296aaf9/62ba1f3a18e2ea3926e44e25_GalleryPix-Libations-Vert.jpeg',
};

export const content = {
  brand: {
    name: 'The Graceful Ordinary',
    tagline: 'Refined Rustic Dining',
    description: 'Chef-driven New American cooking from an open hearth in downtown St. Charles, Illinois.',
    logo: 'Graceful Ordinary',
    location: 'St. Charles, Illinois',
    established: 'St. Charles · Est. 2021',
    address: '3 E Main St',
    addressFull: '3 E Main St, St. Charles, IL 60174',
    phone: '(331) 235-5803',
    email: 'yourfriends@thegracefulordinary.com',
    reservationUrl: 'https://resy.com/cities/stc/the-graceful-ordinary',
    reservationPlatform: 'resy' as const,
    reservationRestref: '',
    hours: [
      { days: 'Tuesday & Wednesday', time: '4:00 PM to 10:00 PM' },
      { days: 'Thursday', time: '4:00 PM to 11:00 PM' },
      { days: 'Friday', time: '4:00 PM to 12:00 AM' },
      { days: 'Saturday', time: 'Lunch/Brunch and dinner hours vary; check Resy before visiting' },
      { days: 'Sunday', time: 'Brunch 10:00 AM to 2:00 PM · Dinner 4:00 PM to 9:00 PM' },
      { days: 'Monday & major holidays', time: 'Closed' },
    ],
    rating: { stars: 4.6, count: 593 },
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 2 as const, open: '16:00', close: '22:00' },
        { day: 3 as const, open: '16:00', close: '22:00' },
        { day: 4 as const, open: '16:00', close: '23:00' },
        { day: 5 as const, open: '16:00', close: '23:59' },
        { day: 6 as const, open: '12:00', close: '23:59' },
        { day: 0 as const, open: '10:00', close: '21:00' },
      ],
      closures: [],
    },
    geo: { lat: 41.9135806, lng: -88.3130267 },
  },

  nav: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Menu', href: '/menu' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Reserve', href: 'https://resy.com/cities/stc/the-graceful-ordinary' },
  },

  hero: {
    image: img.hero,
    eyebrow: 'Downtown St. Charles · Open-hearth New American',
    heading: { upright: 'There is grace', italic: 'in the ordinary.', layout: 'stacked' } as DisplayHeadingContent,
    primaryCta: { label: 'Reserve on Resy', href: 'https://resy.com/cities/stc/the-graceful-ordinary' },
    secondaryCta: { label: 'View Menu', href: '/menu' },
  },

  marquee: {
    items: ['Kane County Choice Awards', 'Chicago Tribune Readers’ Choice', 'FSR Top Independent Restaurant', 'Eater Chicago', 'Forbes Mentioned', 'Fox River Dining'],
    separator: '◆',
  },

  signatureSelections: {
    heading: { upright: 'From the', italic: 'Hearth' } as DisplayHeadingContent,
    fullMenuLink: { label: 'Full Menu', href: '/menu' },
    items: [
      {
        tag: 'Starter',
        name: 'Maytag Bleu Cheese',
        description: 'A guest-cited Graceful Ordinary staple from the rotating seasonal menu.',
        image: img.foodVertical,
      },
      {
        tag: 'Entrée',
        name: 'Sea Bass',
        description: 'Light, flaky and balanced — a recurring favorite in the Google review packet.',
        image: img.foodWide,
      },
      {
        tag: 'Cocktail',
        name: 'The Fig and the Furious',
        description: 'A named original from the bar program; repeatedly called out by guests.',
        image: img.cocktails,
      },
    ],
  },

  moreThanAMeal: {
    heading: { upright: 'New, yet', italic: 'familiar.' } as DisplayHeadingContent,
    body: [
      'In colonial times, an ordinary was the town tavern: a place to connect, collaborate, relax, and celebrate. This is The Graceful Ordinary’s version, refined.',
      'For owners Chris and Megan Curren, the restaurant is a place to be comfortable and an experience to be remembered — grounded in open-hearth cooking, seasonal menus, and St. Charles hospitality.',
    ],
    storyCta: { label: 'Our Story', href: '/about' },
    images: [img.room, img.foodWideTwo],
  },

  voicesOfExperience: {
    eyebrow: 'Highest-rated Google reviews',
    heading: { upright: 'Guests remember', italic: 'the details' } as DisplayHeadingContent,
    testimonials: [
      { quote: 'The venison was cooked perfectly and packed with flavor.', attribution: '', platform: 'Google Review' },
      { quote: 'A unique, elevated dining experience… worth the trip.', attribution: '', platform: 'Google Review' },
      { quote: 'Skip downtown Chicago and come out here.', attribution: '', platform: 'Google Review' },
      { quote: 'The fig and the furious cocktail was 10/10.', attribution: '', platform: 'Google Review' },
      { quote: 'The food is truly an experience.', attribution: '', platform: 'Google Review' },
      { quote: 'A much calmer and elegant life.', attribution: '', platform: 'Google Review' },
      { quote: 'Stylish thoughtfully designed rooms with a view of the Fox River.', attribution: '', platform: 'Google Review' },
      { quote: 'Best Restaurant in the burbs by far!', attribution: '', platform: 'Google Review' },
    ],
  },

  quoteOverlay: {
    image: img.foodWide,
    quote: 'A traditional tavern with a fresh twist — prepared on an open hearth, refined rustic.',
    attribution: '— The Graceful Ordinary',
  },

  reservationStrip: {
    eyebrow: 'Ready to dine?',
    heading: { upright: 'Reserve your', italic: 'table', trailingUpright: ' tonight' } as DisplayHeadingContent & { trailingUpright?: string },
    primaryCta: { label: 'Reserve on Resy', href: 'https://resy.com/cities/stc/the-graceful-ordinary' },
    secondaryCta: { label: 'Call (331) 235-5803', href: 'tel:+13312355803' },
  },

  footer: {
    tagline: 'Refined rustic dining on the Fox River',
    description: '3 E Main St, St. Charles, Illinois — chef-driven seasonal menus, open-hearth cooking, thoughtful wine, and a bar program worth arriving early for.',
    badges: ['Reserve on Resy', 'Weekly-changing menu', 'Press-recognized St. Charles dining'],
    copyright: '© 2026 The Graceful Ordinary · All rights reserved',
  },

  menu: {
    pageTitle: 'The Menu',
    eyebrow: 'Weekly-changing New American menu · open-hearth cooking · refined rustic',
    notice: 'Menu items are source-derived examples from the official menu and may change weekly.',
    pageImage: img.foodWide,
    tabs: ['Snacks', 'Starters', 'Mains', 'Dessert', 'Wine & Cocktails'],
    sections: {
      Snacks: {
        intro: 'Small opening bites and shareable first tastes.',
        items: [
          { name: 'Smoked Salmon Deviled Eggs', description: 'A refined-rustic start from the official menu archive.', price: 'Market' },
          { name: 'Maytag Bleu Cheese', description: 'Rich, creamy and repeatedly remembered by guests.', price: 'Market' },
          { name: 'Bone Marrow', description: 'Open-hearth richness for the table.', price: 'Market' },
        ],
      },
      Starters: {
        intro: 'Seasonal plates built around texture, fire and produce.',
        items: [
          { name: 'Octopus Carpaccio', description: 'One of the menu’s more distinctive chef-driven starters.', price: 'Market' },
          { name: 'Ramp Cavatelli', description: 'Seasonal pasta with the menu’s weekly-changing spirit.', price: 'Market' },
          { name: 'PEI Mussels', description: 'A guest-visible seafood favorite from current preview/source evidence.', price: 'Market' },
        ],
      },
      Mains: {
        intro: 'Open-hearth dishes, seasonal entrées and special-occasion plates.',
        items: [
          { name: 'Sea Bass', description: 'Light, flaky and beautifully balanced in guest reviews.', price: 'Market' },
          { name: 'Venison', description: 'Perfectly prepared and called out in the captured review packet.', price: 'Market' },
          { name: 'Delmonico Ribeye', description: 'A steakhouse-caliber plate within a chef-driven New American menu.', price: 'Market' },
          { name: 'Beer Braised Short Rib Bourguignon', description: 'Refined rustic comfort from the official menu evidence.', price: 'Market' },
        ],
      },
      Dessert: {
        intro: 'Seasonal sweets, brunch favorites and celebration closers.',
        items: [
          { name: 'Peanut Butter Chocolate Cake', description: 'A remembered finish from Valentine’s Day review evidence.', price: 'Market' },
          { name: 'Banana Ice Cream', description: 'Guest-cited dessert pairing from the Google packet.', price: 'Market' },
          { name: 'Beignets', description: 'A brunch favorite called “next level” by guests.', price: 'Market' },
        ],
      },
      'Wine & Cocktails': {
        intro: 'Thoughtful wine direction, originals from the bar, and zero-proof alternatives.',
        items: [
          { name: 'The Fig and the Furious', description: 'Signature cocktail praised directly in Google reviews.', price: 'Market' },
          { name: 'TGO Clover', description: 'Creative, balanced and called out in recent guest notes.', price: 'Market' },
          { name: 'Cabin Fever', description: 'A cocktail worth the visit alone, according to guests.', price: 'Market' },
          { name: 'Espresso Martini', description: 'A bar-team recommendation guests specifically remember.', price: 'Market' },
        ],
      },
    },
    disclosure: 'The official menu changes weekly. Please confirm current dishes, pricing, Saturday brunch/lunch wording, and availability with the restaurant or Resy before visiting.',
    partners: {
      eyebrow: 'Press & Proof',
      heading: { upright: 'Featured across', italic: 'the region' } as DisplayHeadingContent,
      list: ['Kane County Chronicle', 'Chicago Magazine', 'FSR Magazine', 'Chicago Tribune', 'Eater Chicago', 'Forbes', 'Daily Herald'],
    },
  },

  about: {
    pageTitle: { upright: 'The Graceful', italic: 'Ordinary', layout: 'stacked' } as DisplayHeadingContent,
    pageImage: img.room,
    manifesto: 'A town tavern, refined: comfortable enough to feel familiar, thoughtful enough to make an evening memorable.',
    chef: {
      name: 'Chris Curren',
      role: 'Chef / Owner, with Megan Curren',
      portrait: img.foodVertical,
    },
    storyHeading: { upright: 'Refined', italic: 'rustic' } as DisplayHeadingContent,
    timeline: [
      { phase: 'The Ordinary', body: 'The name reaches back to the town tavern: a place to eat, drink, connect, relax and celebrate.' },
      { phase: 'St. Charles Roots', body: 'Chris and Megan Curren created The Graceful Ordinary in the community where they live.' },
      { phase: 'Open Hearth', body: 'The menu is prepared with a fresh twist around fire, seasonal ingredients and New American technique.' },
      { phase: 'Team & Wine', body: 'Chef de Cuisine Adam Kappesser and Wine Director Jack Sonin add depth to the kitchen, cellar and guest experience.' },
    ],
    partners: {
      eyebrow: 'Public proof',
      heading: { upright: 'Press worth', italic: 'surfacing' } as DisplayHeadingContent,
      list: [
        { name: 'Kane County Choice Awards', description: 'Best of the Fox Restaurant and Romantic Dinner.' },
        { name: 'Chicago Tribune Readers’ Choice', description: 'Recognized among suburban restaurant standouts.' },
        { name: 'FSR Magazine', description: 'Listed in America’s Top 50 Independent Restaurants for 2023.' },
        { name: 'Eater Chicago / Forbes / Daily Herald', description: 'Press archive contains regional and national credibility that should not stay buried.' },
      ],
    },
    cta: {
      eyebrow: 'Ready to dine?',
      heading: { upright: 'Join us', italic: 'in St. Charles' } as DisplayHeadingContent,
      primary: { label: 'Reserve on Resy', href: 'https://resy.com/cities/stc/the-graceful-ordinary' },
      secondary: { label: 'Call (331) 235-5803', href: 'tel:+13312355803' },
    },
  },

  contact: {
    pageTitle: { upright: 'Contact &', italic: 'Reservations', layout: 'stacked' } as DisplayHeadingContent,
    pageImage: img.cocktails,
    findUs: {
      eyebrow: 'Visit Us',
      heading: { upright: 'Find us', italic: 'downtown.' } as DisplayHeadingContent,
    },
    reserve: {
      eyebrow: 'Online Reservations',
      heading: 'Reserve Your Table',
      body: 'Reservations are handled through Resy. Walk-ins may be available, but special occasions should book ahead.',
      cta: { label: 'Reserve on Resy', href: 'https://resy.com/cities/stc/the-graceful-ordinary' },
    },
    goodToKnow: {
      eyebrow: 'Good to Know',
      items: [
        'Official address: 3 E Main St, St. Charles, IL',
        'Reservations recommended; bar seating may be limited',
        'Menu changes weekly; verify current dishes before visiting',
        'Saturday lunch/brunch wording differs across official blocks',
        'Private events and special occasions are core use cases',
        'Cocktails, wine, and zero-proof options are part of the experience',
      ],
    },
    bottomQuote: {
      image: img.hero,
      quote: 'A place to be comfortable and an experience to be remembered.',
    },
  },
} as const;

export type SiteContent = typeof content;
