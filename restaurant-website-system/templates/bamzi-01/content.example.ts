// content.example.ts — bamzi-01 placeholder content
//
// Hotlinked Unsplash URLs as placeholders. Forks MUST replace photos — the warm-tungsten
// food + clean-chef-portrait grading is cohesion-critical per audit §12.4.

export const content = {
  brand: {
    name: 'Bamzi',
    tagline: 'Delicious food & wonderful eating experience',
    description: 'We serve food, harmony, & laughter since 1998.',
    since: 'Since from 1998',
    address: '256 North Neuveill, AvenueNeuveill, PA 19302',
    phone: '+123 (456) 789 00',
    email: 'info@bamzi.com',
    instagram: '@bamzi',
    social: [
      { label: 'Instagram', href: '#' },
      { label: 'Facebook',  href: '#' },
      { label: 'Twitter',   href: '#' },
    ],
    // Powers <LiveOpenStatus /> — see shared/lib/hours.ts HoursConfig schema.
    // Fork rule: update timezone + ranges to match real venue. Add closures array for holidays.
    // From content.about.hours: Mon-Fri 11-23, Sat 11-00, Sun 12-22.
    hoursConfig: {
      timezone: 'America/New_York',
      ranges: [
        { day: 0 as const, open: '12:00', close: '22:00' }, // Sunday
        { day: 1 as const, open: '11:00', close: '23:00' }, // Monday
        { day: 2 as const, open: '11:00', close: '23:00' }, // Tuesday
        { day: 3 as const, open: '11:00', close: '23:00' }, // Wednesday
        { day: 4 as const, open: '11:00', close: '23:00' }, // Thursday
        { day: 5 as const, open: '11:00', close: '23:00' }, // Friday
        { day: 6 as const, open: '11:00', close: '24:00' }, // Saturday
      ],
      closures: [],
    },
    // Primary location lat/lng — powers <LiveMapEmbed />. Fork rule: replace with real coords.
    geo: { lat: 40.7208, lng: -73.9871 }, // NYC LES placeholder
  },

  nav: {
    primary: [
      { label: 'About',   href: '/about' },
      { label: 'News',    href: '/news' },
      { label: 'Contact', href: '/contact' },
    ],
    dropdown: {
      label: 'Pages',
      items: [
        { label: 'Home',    href: '/' },
        { label: 'Menu',    href: '/menu' },
        { label: 'About',   href: '/about' },
        { label: 'News',    href: '/news' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    cta: { label: 'Menu', href: '/menu' },
  },

  hero: {
    eyebrow: null,
    title: 'Delicious food & wonderful eating experience',
    subtitle: 'We serve food, harmony, & laughter since 1998',
    cta: { label: 'Book a Table', href: '/menu#reserve' },
    plateImage: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1400&q=80',
    plateAlt: 'Plated sushi spread',
  },

  mission: {
    eyebrow: 'Our Mission',
    title: 'Immerse yourself in an asian experience.',
    body:
      'The artistry of sushi and rolls, meticulously crafted with traditional Japanese recipes and an eye for detail. Savor the perfect harmony.',
    cta: { label: 'Food Menu', href: '/menu' },
    phone: '+123 456 789 00',
    image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Chef preparing sushi',
  },

  categoryStrip: {
    eyebrow: 'Popular Category',
    title: 'Immerse yourself in an asian experience.',
    categories: [
      { label: 'Soup & Ramen',      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80' },
      { label: 'Sushi & Tashimi',   image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=600&q=80' },
      { label: 'Meat & Dishes',     image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80' },
    ],
  },

  bigHeadline: 'Delicious food and wonderful eating experience',

  featured: [
    {
      eyebrow: 'Famous sushi\'s',
      side: 'left' as const,
      image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Sushi rolls on wood board',
      items: [
        { name: 'Philadelphia roll', desc: 'Ricotta, goat cheese, beetroot and dofferini',  price: '$51.75' },
        { name: 'California roll',   desc: 'Spallo Cotto, Mortadello, Culoccione',           price: '$71.25' },
        { name: 'Shrimp tempura',    desc: 'Our selection of fresh oysters, limes',          price: '$69.50' },
        { name: 'Tekka maki',        desc: 'Truffle moshi, pepper sauce',                    price: '$90.00' },
      ],
    },
    {
      eyebrow: 'Sea fish & dishes',
      side: 'right' as const,
      image: 'https://images.unsplash.com/photo-1617196701537-7329482cc9fe?auto=format&fit=crop&w=900&q=80',
      imageAlt: 'Grilled fish plate',
      items: [
        { name: 'Crispy skin chicken',  desc: 'Pricky Pear, Chancuca, Key Lime',             price: '$66.20' },
        { name: 'Ebony fillet steak',   desc: 'Purple Corn, Pineapple, Apple',               price: '$89.00' },
        { name: 'Tommy\'s margarita',   desc: 'Tomato, Salt, Black Pepper',                  price: '$32.40' },
        { name: 'Wild mushrooms arancini', desc: 'Truffle moshi, pepper sauce',              price: '$36.80' },
      ],
    },
  ],

  testimonial: {
    eyebrow: 'Testimonials',
    quote:
      'Authentic sushi and rolls, expertly crafted with care, tradition, and exceptional flavors.',
    attribution: {
      role: 'Head of Area',
      name: 'Natalia T. Morgan',
    },
    chefImage: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=900&q=80',
    chefAlt: 'Chef in white coat smiling',
  },

  blog: {
    eyebrow: 'News & Insights',
    title: 'Restaurant blog & update',
    posts: [
      { id: 'panera-automated-coffee', date: 'Jul 12, 2023', title: 'Panera Bread brews automated coffee brewing systems.',        image: 'https://images.unsplash.com/photo-1559305616-0e57adbda1c0?auto=format&fit=crop&w=800&q=80', href: '#' },
      { id: 'subway-deli',             date: 'Feb 18, 2023', title: 'Subway rolls out deli-style fresh cut meats.',                image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', href: '#' },
      { id: 'burger-king-ghost',       date: 'Aug 11, 2023', title: 'Burger King launches Ghost Pepper Whopper sandwich.',         image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80', href: '#' },
      { id: 'chipotle-plant',          date: 'Dec 20, 2023', title: 'Chipotle tests new plant-based chorizo options.',             image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80', href: '#' },
      { id: 'taft-tees-cafe',          date: 'Dec 05, 2023', title: 'Tall Trees Cafe pulls attention for sandwich fees.',          image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80', href: '#' },
      { id: 'sweetgreen-fried-apple',  date: 'Jan 15, 2024', title: 'Sweetgreen launches air-fried ripple fries.',                 image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80', href: '#' },
    ],
  },

  timelessFooter: {
    image: 'https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&w=1600&q=80',
    title: 'Timeless recipes tosavor & enjoy',
  },

  // ABOUT page content
  about: {
    hero: {
      title: 'Since from 1998',
      subtitle: 'We serve food, harmony, & laughter since 1998',
    },
    immerse: {
      eyebrow: 'Our Mission',
      title: 'Immerse yourself in an asian experience.',
      body: 'The artistry of sushi and rolls, meticulously crafted with traditional Japanese recipes and an eye for detail. Savor the perfect harmony.',
      statBig: '30+',
      statLabel: 'Years of service',
      chefImage: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=600&q=80',
      chefName: 'Natalia T. Morgan',
      chefRole: 'Head of Area',
    },
    journey: {
      eyebrow: 'Decent & Honest',
      title: 'Meet with our decent & honest journey',
      body: 'The desire to bring you the finest and most well-selected Japanese dishes is our long-established tradition and goal.',
      milestones: [
        { year: '2013', title: 'Journey was started', body: 'First opened doors with a focus on authentic Japanese techniques.' },
        { year: '2018', title: 'First restaurant',     body: 'Expanded into the full-service flagship with chef Morgan leading the kitchen.' },
        { year: '2021', title: 'Famous service awards', body: 'Recognized by local press for hospitality and consistency.' },
        { year: '2024', title: 'Jp CP award',           body: 'Honored in the Japanese culinary awards panel.' },
      ],
    },
    hours: {
      eyebrow: 'Get a free booking',
      title: 'Indulge in an idyllic escape: combine with heart-warming stillness.',
      times: [
        { day: 'Monday – Friday', time: '11:00 am – 11:00 pm' },
        { day: 'Saturday',        time: '11:00 am – 12:00 am' },
        { day: 'Sunday',          time: '12:00 pm – 10:00 pm' },
      ],
      cta: { label: 'Book a Table', href: '/menu#reserve' },
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80',
    },
    chefs: {
      eyebrow: 'Meet with our chefs',
      title: 'Meet with our chefs',
      team: [
        { name: 'Carlos E. Ashcroft',  role: 'Head Chef',      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=600&q=80' },
        { name: 'Andrew W. Huxley',    role: 'Sous Chef',      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80' },
        { name: 'Ricardo P. Winslow',  role: 'Pastry Chef',    image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?auto=format&fit=crop&w=600&q=80' },
      ],
    },
    values: {
      eyebrow: 'Our Values',
      title: 'A restaurant where every piece of food becomes part of an unforgettable culinary journey.',
      items: [
        { title: 'Quality dishes',  body: 'Sourced daily from coastal markets and trusted farms.' },
        { title: 'On-the-food serve', body: 'Plates finished tableside when the moment calls for it.' },
        { title: 'Ready-easy bite',  body: 'A short menu of same-day bites for the bar-first crowd.' },
      ],
    },
  },

  // MENU page content
  menuPage: {
    hero: {
      title: 'Since from 1998',
      subtitle: 'We serve food, harmony, & laughter since 1998',
    },
    categories: [
      {
        eyebrow: 'Popular Menu',
        title: 'Famous sushi\'s',
        items: [
          { name: 'Philadelphia roll',     desc: 'Ricotta, goat cheese, beetroot and dofferini', price: '$51.75' },
          { name: 'California roll',       desc: 'Spallo Cotto, Mortadello, Culoccione',          price: '$71.25' },
          { name: 'Shrimp tempura',        desc: 'Our selection of fresh oysters, limes',         price: '$69.50' },
          { name: 'Seaweed, spiral shaped fries', desc: 'Truffle moshi, pepper sauce',            price: '$90.00' },
        ],
      },
      {
        eyebrow: 'Sea & Fish',
        title: 'Sea fish & dishes',
        items: [
          { name: 'Crispy skin chicken',   desc: 'Pricky Pear, Chancuca, Key Lime',               price: '$66.20' },
          { name: 'Ebony fillet steak',    desc: 'Purple Corn, Pineapple, Apple',                 price: '$89.00' },
          { name: 'Tommy\'s margarita',    desc: 'Tomato, Salt, Black Pepper',                    price: '$32.40' },
          { name: 'Wild mushrooms arancini', desc: 'Truffle moshi, pepper sauce',                 price: '$36.80' },
        ],
      },
      {
        eyebrow: 'Mini Menu',
        title: 'Fries & sandwich',
        items: [
          { name: 'Crispy, salted friesia roll', desc: 'Ricotta, goat cheese, beetroot and dofferini', price: '$51.75' },
          { name: 'Topped with melted cheese',   desc: 'Spallo Cotto, Mortadello, Culoccione',          price: '$71.25' },
          { name: 'Chili cheese fries',           desc: 'Our selection of fresh oysters, limes',        price: '$69.50' },
          { name: 'Seaweed, spiral shaped fries', desc: 'Truffle moshi, pepper sauce',                  price: '$90.00' },
        ],
      },
      {
        eyebrow: 'Main Course',
        title: 'Kebab & dry thing',
        items: [
          { name: 'Chicken with kebab',      desc: 'Ricotta, goat cheese, beetroot and dofferini', price: '$51.75' },
          { name: 'Beef seekh kebab',        desc: 'Spallo Cotto, Mortadello, Culoccione',          price: '$71.25' },
          { name: 'Shish kebab',             desc: 'Our selection of fresh oysters, limes',         price: '$69.50' },
          { name: 'Tandoori chicken tikka',  desc: 'Truffle moshi, pepper sauce',                   price: '$90.00' },
        ],
      },
    ],
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'Happy person says',
      entries: [
        { stars: 5, quote: 'Classic Italian dishes, handmade pasta bursting with rich flavors and authentic culinary tradition.', name: 'William',           role: 'Food Blogger',       avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
        { stars: 5, quote: 'Vibrant Korean cuisine, blending traditional flavors, delicate textures, and global inspiration beautifully.', name: 'Henry', role: 'Product Designer',   avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&q=80' },
        { stars: 5, quote: 'Authentic sushi & rolls, expertly crafted with care, tradition, and exceptional flavors.',             name: 'Natalia T. Morgan', role: 'Head of Area',       avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80' },
      ],
    },
    reservation: {
      eyebrow: 'Appointment',
      title: 'Make reservation',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80',
    },
  },

  // NEWS page (reuses blog array above)
  newsPage: {
    hero: {
      title: 'News & insights',
      subtitle: 'We serve food, harmony, & laughter since 1998',
    },
  },

  // CONTACT page
  contactPage: {
    hero: {
      title: 'Get in touch',
      subtitle: 'We serve food, harmony, & laughter since 1998',
    },
    photos: [
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=900&q=80',
    ],
    headline: {
      eyebrow: 'Watch on here',
      title: 'A restaurant where every dish is crafted to create an unforgettable culinary journey.',
    },
    infoCards: [
      { icon: 'map',   label: 'Our Location',       lines: ['256 North Neuveill', 'AvenueNeuveill, PA 19302'] },
      { icon: 'phone', label: 'On the food serve',  lines: ['info@bamzi.com',    '+123 (456) 789 00'] },
    ],
    form: {
      eyebrow: 'Let\'s talk with us',
      title: 'Tell us anything you want',
    },
  },
};
