// Black Bear Bistro fork content.
//
// Sources checked 2026-04-27:
// - Official Squarespace site and current PDF links
// - Dinner_Menu_12_5_2025.pdf
// - 04252026specials.pdf
// - Veg_menu_final.pdf
// - TableAgent listing for reservation notes, category, and review volume

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

const images = {
  filet: '/images/black-bear/dinner-bottles.webp',
  poblano: '/images/black-bear/roasted-poblano.webp',
  plated: '/images/black-bear/plated-dish.webp',
  bottles: '/images/black-bear/dinner-bottles.webp',
  molcajete: '/images/black-bear/molcajete.webp',
  salmon: '/images/black-bear/reserved-salmon.webp',
  dessert: '/images/black-bear/pumpkin-pie.webp',
  dining: '/images/black-bear/catering-table.webp',
  market: '/images/black-bear/service-plate.webp',
  chef: '/images/black-bear/plated-dish.webp',
  table: '/images/black-bear/catering-table.webp',
  room: '/images/black-bear/catering-table.webp',
  service: '/images/black-bear/cocktail.webp',
};

export const content = {
  brand: {
    name: 'The Black Bear Bistro',
    shortName: 'Black Bear',
    tagline: 'Chef-driven New American cooking in downtown Algonquin',
    description:
      'A small, reservation-recommended New American bistro from Chef Santiago Suarez and Estela Suarez, serving creative wild game, seafood, vegetarian, vegan, and gluten-free dinner options.',
    address: { line1: '107 S Main St', line2: 'Algonquin, IL 60102' },
    phone: '(224) 678-9449',
    phoneHref: 'tel:+12246789449',
    email: 'theblackbearbistro@gmail.com',
    social: [
      { label: 'Instagram', href: 'https://www.instagram.com/theblackbearbistro/' },
      { label: 'Facebook', href: 'https://www.facebook.com/TheBlackBearBistro/' },
      { label: 'Yelp', href: 'https://www.yelp.com/biz/the-black-bear-bistro-algonquin-2' },
    ],
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 0 as const, open: '16:00', close: '21:00' },
        { day: 2 as const, open: '16:00', close: '21:00' },
        { day: 3 as const, open: '16:00', close: '21:00' },
        { day: 4 as const, open: '16:00', close: '21:00' },
        { day: 5 as const, open: '16:00', close: '21:00' },
        { day: 6 as const, open: '16:00', close: '21:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.16635164787412, lng: -88.29267063704378 },
  },

  links: {
    reserve: 'https://tableagent.com/chicago/the-black-bear-bistro/',
    reserveEmbed: 'https://tableagent.com/iframe/the-black-bear-bistro/',
    order: 'https://theblackbearbistro.square.site/',
    dinnerPdf: 'https://www.theblackbearbistro.com/s/Dinner_Menu_12_5_2025.pdf',
    specialsPdf: 'https://www.theblackbearbistro.com/s/04252026specials.pdf',
    vegPdf: 'https://www.theblackbearbistro.com/s/Veg_menu_final.pdf',
    giftCard: 'https://squareup.com/gift/QA73VV1TKDYBC/order',
    directions: 'https://www.google.com/maps/search/?api=1&query=107+S+Main+St+Algonquin+IL+60102',
  },

  nav: {
    primary: [
      { label: 'Home', href: '/' },
      { label: 'Menu', href: '/#menu' },
      { label: 'Specials', href: '/#specials' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Book table', href: 'https://tableagent.com/chicago/the-black-bear-bistro/' },
  },

  hero: {
    eyebrow: 'Chef-owned dinner on Main Street',
    headline: 'The Black Bear Bistro',
    subcopy:
      'Chef Santiago Suarez plates wild game, seafood, and vegan dishes alongside sauces regulars order by name — in a 25-seat Main Street dining room.',
    cta: { label: 'Book table', href: 'https://tableagent.com/chicago/the-black-bear-bistro/' },
    secondaryCta: { label: 'Our menu', href: '#menu' },
    utilityCta: { label: 'Order pickup', href: 'https://theblackbearbistro.square.site/' },
    highlights: ['#11 of 86 in Algonquin · Tripadvisor', '4.83/5 on TableAgent · 1,537 votes', 'Dinner Tue–Sun'],
    photos: [
      { src: images.filet, alt: 'Dinner plate with wine bottles at The Black Bear Bistro' },
      { src: images.poblano, alt: 'Roasted poblano dish from The Black Bear Bistro' },
    ],
  },

  menu: [
    {
      id: 'starters',
      title: 'Starters, soups & salads',
      entries: [
        { type: 'item', name: 'Fried Pickles & Avocados', description: 'Black garlic basil aioli', price: '$14' },
        { type: 'item', name: 'Crab Cakes Michoacan', description: 'Chile seco', price: '$17' },
        { type: 'item', name: 'Yellowfin Tuna Tartare', description: 'Wasabi, ginger, tomato, onion, capers, cayenne pepper', price: 'MP' },
        { type: 'photo', src: images.plated, alt: 'Composed appetizer plate from Black Bear Bistro' },
        { type: 'item', name: 'Calamari Grilled or Fried', description: 'Mango pico de gallo, tomatillo cocktail sauce', price: 'MP' },
        { type: 'item', name: 'Oaxaca Flatbread', description: 'Black fig, cremini, artichoke, basil', price: '$14' },
        { type: 'item', name: 'Black Bear Bistro Mushroom', description: 'Cup or bowl', price: '$6 / $10' },
        { type: 'item', name: 'House Salad', description: 'Choice of chipotle honey balsamic, spicy Thai cacahuate, chocolate-vanilla vinaigrette, or black garlic', price: '$6 / $10' },
      ],
    },
    {
      id: 'entrees',
      title: 'Dinner entrees',
      entries: [
        { type: 'item', name: 'Blackened Chicken Sandwich', description: 'Mole BBQ and fried onion rings', price: '$17' },
        { type: 'photo', src: images.salmon, alt: 'Plated seafood entree at The Black Bear Bistro' },
        { type: 'item', name: 'Crispy Frypan Pork Belly', description: 'Apple chutney, purple potato gratin, black cherry reduction', price: '$25' },
        { type: 'item', name: 'Roasted Poblano with Salmon', description: 'Purple potato gratin, chevre, fresh dill sauce, kabocha squash cake, prickly pear', price: '$28' },
        { type: 'item', name: 'Red Snapper', description: 'Pumpkin mash, tomato-corn salsa with mango and pear, Creole mustard', price: '$37' },
        { type: 'photo', src: images.molcajete, alt: 'Molcajete entree at The Black Bear Bistro' },
        { type: 'item', name: 'Angus Filet Mignon', description: 'Bison bone marrow butter, grilled Cajun garlic potato, tamarind port glaze', price: 'MP' },
        { type: 'item', name: 'Crab Cakes Michoacan', description: 'Spinach-mushroom risotto, smoked chile de cascabel', price: '$27' },
        { type: 'item', name: 'Pan Seared Atlantic Salmon Filet', description: 'Cajun honey butter over garlic fingerling potatoes, sweet bourbon sauce', price: '$29' },
        { type: 'item', name: 'Bistro Jambalaya', description: 'Andouille, shrimp, chicken, peppers, red wine Cajun tomato sauce', price: '$30' },
      ],
    },
    {
      id: 'specials',
      title: 'Rotating specials',
      entries: [
        { type: 'item', name: 'Sauteed Frog Legs', description: 'Shoestring fries with avocado honey dill tarragachi sauce', price: '$17' },
        { type: 'item', name: 'Baked Crimini Mushrooms', description: 'Stuffed with smoked salmon, saffron pan fried egg, roasted garlic, Marsala wine sauce', price: '$19' },
        { type: 'photo', src: images.bottles, alt: 'Wine bottles and dinner table at Black Bear Bistro' },
        { type: 'item', name: 'Mixed Grill of Elk, Quail & Wild Boar', description: 'Juniper berries vermouth wine reduction, feta cheese spinach potato cake', price: '$58' },
        { type: 'item', name: 'Seafood Paella', description: 'Shrimp, black mussel, calamari, andouille, cod, saffron rice, tomatoes, bell peppers, corn, peas', price: '$40' },
        { type: 'item', name: 'Black Angus 12 oz Ribeye', description: 'Horseradish, grilled onion terrine, green pepper bourbon bearnaise', price: '$55' },
        { type: 'item', name: 'Roasted Poblano Stuffed with Seafood', description: 'Scallops, lobster, goat cheese, avocado, mango jalapeno risotto, white wine beurre blanc', price: '$57' },
        { type: 'item', name: 'Pan Seared Duck Breast', description: 'Maple Leaf Farm duck, purple mashed potatoes, port wine blueberry sauce', price: '$48' },
      ],
    },
    {
      id: 'vegan-vegetarian',
      title: 'Vegan & vegetarian',
      entries: [
        { type: 'item', name: 'Roasted Cauliflower Tacos', description: 'Pico de gallo and chipotle sauce', price: '$19' },
        { type: 'item', name: 'Quinoa & Mushroom Burger', description: 'Poblano pepper, blue corn bread, avocado sauce', price: '$18' },
        { type: 'item', name: 'Roasted Whole Cauliflower', description: 'Ratatouille tahini drizzle', price: '$22' },
        { type: 'photo', src: images.dining, alt: 'Catered dinner spread from The Black Bear Bistro' },
        { type: 'item', name: 'Garlic and Zucchini Noodles', description: 'Candied walnuts, pecans, mushrooms, avocado garlic sauce', price: '$17' },
        { type: 'item', name: 'Confit Tomatoes, Basil, Roasted Garlic & Greens', description: 'Caramelized peaches and apples, chipotle pepper vinaigrette', price: '$17' },
        { type: 'item', name: 'Vegetable Paella', description: 'Saffron rice and confit tomato sauce', price: '$28' },
        { type: 'item', name: 'Vegan Enchiladas', description: 'Avocado, zucchini, roasted peppers, fresh tomato salsa', price: '$19' },
      ],
    },
    {
      id: 'desserts-sides',
      title: 'Sides & desserts',
      entries: [
        { type: 'item', name: 'Hand-Cut Fries', description: 'A dinner-table staple', price: '$6' },
        { type: 'item', name: 'Mac and Cheese', description: 'Rich, simple, and shareable', price: '$7' },
        { type: 'photo', src: images.dessert, alt: 'Pumpkin pie dessert from Black Bear Bistro' },
        { type: 'item', name: 'Honey Potato Pancake', description: 'Sweet-savory side for the table', price: '$7' },
        { type: 'item', name: 'Key Lime Pie', description: 'Classic tart finish', price: '$12' },
        { type: 'item', name: 'Raisin-Chocolate Chip Bread Pudding', description: 'Warm dessert with deep sweetness', price: '$12' },
        { type: 'item', name: "Jack Daniel's Pie", description: 'Boozy, rich, and made for sharing', price: '$12' },
        { type: 'item', name: 'Flourless Chocolate Cake', description: 'Dense chocolate finish', price: '$14' },
      ],
    },
  ] satisfies MenuSection[],

  tagline: {
    heading: 'Bold flavors, wild game,\nwarm Main Street hospitality',
    collage: [
      { src: images.market, alt: 'Cocktail and service detail from The Black Bear Bistro' },
      { src: images.chef, alt: 'Composed plate from The Black Bear Bistro' },
    ],
    trustIcons: ['Chef-owned', 'Small dining room', 'Special occasion favorite'],
  },

  reviews: {
    eyebrow: 'Why guests come back',
    heading: 'The kind of dinner people tell friends about',
    summary: [
      {
        title: 'Chef-owned care',
        body:
          'Guests notice when Santiago and Estela are close to the room: service feels personal, and the menu feels made by someone paying attention.',
      },
      {
        title: 'Adventure without stiffness',
        body:
          'Wild game, seafood, sauces, vegan dishes, and specials make dinner feel interesting without turning the room formal.',
      },
      {
        title: 'Small room, book ahead',
        body:
          'The cozy Main Street space is part of the appeal. Book ahead when dinner is the plan.',
      },
    ],
    items: [
      {
        label: 'Northwest Herald · Mystery Diner, 2021',
        quote:
          'The food is a wow.',
      },
      {
        label: 'Hidden-gem diner',
        quote:
          'Phenomenal preparation, delightfully unpretentious atmosphere, great wine selection, and one of the most flavorful appetizers I have ever had.',
      },
      {
        label: 'Special-occasion guest',
        quote:
          'Amazing from beginning to end. Excellent service, exciting menu choices, and every dish was delicious, filling, and beautiful.',
      },
      {
        label: 'Cozy bistro regular',
        quote:
          'The food was delicious and the presentation was artistic. Algonquin is so fortunate to have this wonderful, cozy bistro.',
      },
      {
        label: 'Friday-night diner',
        quote:
          'Make reservations. The appetizers were delicious, dinner was outstanding, and the chef does an incredible job in a small, charming room.',
      },
      {
        label: 'Wild-game regular',
        quote:
          'The mixed grill was cooked to perfection, the blueberry merlot reduction paired beautifully, and the menu felt creative and unique.',
      },
      {
        label: 'Main Street regular',
        quote:
          'The food has a ton of flavor. You can tell how much the chef cares, and it feels like a true hidden gem in Algonquin.',
      },
      {
        label: 'Birthday guest',
        quote:
          'A birthday celebration turned out amazing. Warm service, creative drinks, and a filet with tamarind glaze that stood out.',
      },
      {
        label: 'Food-lover table',
        quote:
          'Every dish feels made with care. The printed menu has so much to explore, from game options to fresh local produce.',
      },
      {
        label: 'Sauce enthusiast',
        quote:
          'Every sauce was spot on. The bison, poblano, soup, drinks, and service made it a new favorite place.',
      },
      {
        label: 'Date-night diner',
        quote:
          'The meal was filling, delicious, and fun to look at. Definitely worth a stop for a special occasion or date night.',
      },
      {
        label: 'Fox River regular',
        quote:
          'Possibly the best restaurant along the Fox River. Unique menu, personal service, and special options made to perfection.',
      },
      {
        label: 'Vegetarian-friendly guest',
        quote:
          'Even better than we remembered. Nothing disappointed, the vegetarian options were strong, and the service was top notch.',
      },
      {
        label: 'First-time guest',
        quote:
          'A quiet little restaurant you might walk right past, with wonderful wild game dishes and generous, accommodating service.',
      },
      {
        label: 'Algonquin local',
        quote:
          'One of the best meals I have ever had. Calamari, seafood paella, scallops, and gluten-free adjustments were all handled beautifully.',
      },
    ],
  },

  blog: {
    heading: 'Tonight at Black Bear',
    cta: { label: 'Download dinner PDF', href: 'https://www.theblackbearbistro.com/s/Dinner_Menu_12_5_2025.pdf' },
    posts: [
      {
        title: 'Recent specials include wild game, ribeye, duck, and seafood paella',
        category: 'Daily specials',
        date: 'Rotating menu',
        excerpt: 'Rotating plates keep the menu playful, seasonal, and worth checking before you book.',
        image: images.salmon,
        href: 'https://www.theblackbearbistro.com/s/04252026specials.pdf',
      },
      {
        title: 'Reserve before the small dining room fills',
        category: 'Reservations',
        date: 'Tue-Sun dinner',
        excerpt: 'The room is intimate, so reservations are the cleanest path for dinner and celebrations.',
        image: images.room,
        href: 'https://tableagent.com/chicago/the-black-bear-bistro/',
      },
      {
        title: 'Pickup and delivery stay available',
        category: 'Order online',
        date: 'Square',
        excerpt: 'For a night in, pickup and delivery run through the restaurant ordering page.',
        image: images.table,
        href: 'https://theblackbearbistro.square.site/',
      },
    ],
  },

  faq: {
    eyebrow: 'Before you go',
    heading: 'Everything diners need before dinner',
    items: [
      {
        q: 'Do you take reservations?',
        a: 'Yes. Reservations are recommended and can be booked through TableAgent. Parties larger than 6 should call the restaurant at (224) 678-9449.',
      },
      {
        q: 'What are the hours?',
        a: 'Dinner runs Sunday and Tuesday through Saturday from 4 PM to 9 PM. The restaurant is closed Monday.',
      },
      {
        q: 'Do you have vegan, vegetarian, and gluten-free options?',
        a: 'Yes. The restaurant publishes a separate vegan and vegetarian menu and asks guests to flag food sensitivities or allergies.',
      },
      {
        q: 'Can I order pickup or delivery?',
        a: 'Yes. Pickup and delivery orders run through the Square ordering page.',
      },
      {
        q: 'Where is the restaurant?',
        a: 'The Black Bear Bistro is at 107 S Main St in downtown Algonquin, near Algonquin Road and Main Street.',
      },
      {
        q: 'Do they handle catering or private events?',
        a: 'Yes. Catering and event inquiries can be submitted through the contact form or handled by calling the restaurant directly.',
      },
    ],
  },

  closing: {
    heading: 'Come grab a table\nat Black Bear',
    subcopy:
      'Dinner runs Sunday and Tuesday through Saturday from 4 PM to 9 PM. Book ahead for a relaxed Main Street night with the Suarez family.',
    cta: { label: 'Book table', href: 'https://tableagent.com/chicago/the-black-bear-bistro/' },
    secondaryCta: { label: 'Google maps', href: 'https://www.google.com/maps/search/?api=1&query=107+S+Main+St+Algonquin+IL+60102' },
    photo: { src: images.table, alt: 'Catered dinner spread with wine from The Black Bear Bistro' },
    hours: [
      { day: 'Sunday', time: '4 PM - 9 PM' },
      { day: 'Monday', time: 'Closed' },
      { day: 'Tue - Sat', time: '4 PM - 9 PM' },
    ],
  },

  wordmark: 'black bear',

  footer: {
    tagline: 'A chef-owned Algonquin bistro with the kind of menu people talk about after dinner.',
    columns: [
      { heading: 'Visit', lines: ['107 S Main St', 'Algonquin, IL 60102'] },
      { heading: 'Hours', lines: ['Sun, Tue-Sat: 4 PM - 9 PM', 'Monday: Closed'] },
      { heading: 'Contact', lines: ['(224) 678-9449', 'theblackbearbistro@gmail.com'] },
    ],
    copyright: '2026 The Black Bear Bistro. All rights reserved.',
  },

  about: {
    hero: {
      headline: 'Chef Santiago and Estela built a room worth finding',
      subcopy:
        'Head Chef Santiago Suarez brings nearly 30 years of food and hospitality experience to Main Street in downtown Algonquin. With Estela Suarez guiding the guest experience, Black Bear turns a small dining room into a warm, highly personal dinner.',
      photos: [
        { src: images.room, alt: 'Dinner spread with wine from The Black Bear Bistro' },
        { src: images.service, alt: 'Wine glass and bottle at The Black Bear Bistro' },
      ],
    },
    values: {
      heading: 'What makes the room feel different',
      items: [
        {
          title: 'Chef-owned',
          body: 'Santiago and Estela are close to the room, the kitchen, and every dinner service. That owner-operated care is the first thing guests feel.',
        },
        {
          title: 'Adventure on the plate',
          body: 'Wild game, seafood, vegan dishes, and rotating specials sit comfortably beside familiar bistro favorites.',
        },
        {
          title: 'Small-room warmth',
          body: 'The dining room is intimate, relaxed, and built for dinner conversations that can stretch a little longer.',
        },
      ],
    },
    staff: {
      heading: 'Experience signals',
      people: [
        {
          name: 'Chef Santiago Suarez',
          role: 'Nearly 30 years in food and hospitality',
          photo: images.chef,
          alt: 'Composed plate from The Black Bear Bistro',
        },
        {
          name: 'Estela Suarez',
          role: 'Warm owner-led hospitality',
          photo: images.room,
          alt: 'Dinner spread with wine from The Black Bear Bistro',
        },
        {
          name: 'Daily specials',
          role: 'Wild game, seafood, seasonal sauces',
          photo: images.salmon,
          alt: 'Plated seafood entree at The Black Bear Bistro',
        },
        {
          name: 'Vegan menu',
          role: 'Separate vegan and vegetarian options',
          photo: images.poblano,
          alt: 'Roasted poblano dish from The Black Bear Bistro',
        },
        {
          name: 'Wine and dinner',
          role: 'Built for date nights and celebrations',
          photo: images.bottles,
          alt: 'Dinner plate with wine bottles at The Black Bear Bistro',
        },
        {
          name: 'Catering/events',
          role: 'Private dining and off-site inquiries',
          photo: images.plated,
          alt: 'Composed plate from The Black Bear Bistro',
        },
      ],
    },
  },

  contact: {
    eyebrow: 'Catering and events',
    heading: 'Make the inquiry easy',
    subcopy:
      'For catering, private dinners, large parties, or allergy notes, contact details, map, phone, and form now sit in one clean path.',
    form: {
      fields: [
        { name: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Doe' },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'jane@example.com' },
        { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Catering for 20 guests' },
        { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell us the date, guest count, and what you need.' },
      ],
      submitLabel: 'Send inquiry',
    },
    info: {
      heading: 'The Black Bear Bistro',
      address: ['107 S Main St', 'Algonquin, IL 60102'],
      phone: '(224) 678-9449',
      email: 'theblackbearbistro@gmail.com',
      hours: ['Sunday: 4 PM - 9 PM', 'Monday: Closed', 'Tuesday-Saturday: 4 PM - 9 PM'],
    },
  },
};
