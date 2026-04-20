// content.example.ts — latte-01 placeholder content
//
// Hotlinked Unsplash URLs — warm-daylight / wood-staged top-down photography
// per audit §12.1. Forks MUST replace with real venue + product photography.
// Placeholder addresses must be replaced on ship — audit §12.2 + §12.5.

export const content = {
  brand: {
    name: 'Latte Haven',
    tagline: 'Brewed to perfection',
    description: 'Your perfect spot for coffee, pastries, and more.',
    address: { line1: '218 Willow Street', line2: 'Burlington, VT 05401' },
    phone: '(555) 987-6543',
    email: 'hello@lattehaven.example',
    social: [
      { label: 'Instagram', href: '#' },
      { label: 'Facebook',  href: '#' },
      { label: 'Twitter',   href: '#' },
    ],
    hours: [
      { days: 'Mon–Thu', time: '11:00 AM – 9:00 PM' },
      { days: 'Fri–Sat', time: '11:00 AM – 10:00 PM' },
      { days: 'Sun',     time: '12:00 PM – 8:00 PM' },
    ],
  },

  nav: {
    primary: [
      { label: 'Menu',    href: '/menu' },
      { label: 'About',   href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },

  hero: {
    ratingChip: { provider: 'Google', stars: 5, score: '4.9' },
    h1: 'Brewed to perfection',
    sub: 'Your perfect spot for coffee, pastries, and more.',
    cta: { label: 'Explore menu', href: '#menu' },
    photos: [
      { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80', alt: 'Hot chocolate with marshmallows on wood table' },
      { src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1400&q=80', alt: 'Latte art top-down on wood table' },
      { src: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80', alt: 'Café interior warm daylight' },
    ],
  },

  menu: {
    heading: 'Our Menu',
    eyebrow: 'Crafted daily',
    categories: [
      {
        id: 'coffee',
        label: 'Coffee',
        photo: { src: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80', alt: 'Latte art on wood' },
        items: [
          { name: 'Espresso',   desc: 'Rich, concentrated shot.',               price: '$2.50' },
          { name: 'Americano',  desc: 'Espresso diluted with hot water.',       price: '$3.00' },
          { name: 'Latte',      desc: 'Espresso with steamed milk.',            price: '$4.95' },
          { name: 'Cappuccino', desc: 'Equal parts espresso, milk, foam.',      price: '$4.95' },
          { name: 'Flat White', desc: 'Velvety microfoam over two shots.',      price: '$4.95' },
          { name: 'Macchiato',  desc: 'Espresso marked with a dollop of foam.', price: '$4.95' },
          { name: 'Mocha',      desc: 'Espresso, chocolate, steamed milk.',     price: '$4.95' },
          { name: 'Cold Brew',  desc: 'Slow-steeped 18 hours.',                 price: '$4.95' },
        ],
      },
      {
        id: 'specialty',
        label: 'Specialty Lattes',
        photo: { src: 'https://images.unsplash.com/photo-1545665225-b23b99e4d45e?auto=format&fit=crop&w=1200&q=80', alt: 'Chai latte on wood' },
        items: [
          { name: 'Matcha Latte',         desc: 'Stone-ground matcha, oat milk.',       price: '$4.50' },
          { name: 'Turmeric Latte',       desc: 'Golden milk with black pepper.',       price: '$4.50' },
          { name: 'Chai Latte',           desc: 'House-spiced chai concentrate.',       price: '$4.00' },
          { name: 'Honey Lavender Latte', desc: 'Wildflower honey, culinary lavender.', price: '$5.00' },
        ],
      },
      {
        id: 'hot-cold',
        label: 'Hot & Cold Beverages',
        photo: { src: 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?auto=format&fit=crop&w=1200&q=80', alt: 'Hot chocolate with marshmallows' },
        items: [
          { name: 'Tea',           desc: 'Rotating single-origin selection.',     price: '$3.00' },
          { name: 'Hot Chocolate', desc: 'Valrhona ganache, whole milk.',          price: '$4.50' },
          { name: 'Golden Milk',   desc: 'Turmeric, ginger, black pepper.',        price: '$4.00' },
          { name: 'Iced Tea',      desc: 'Fresh-brewed, lightly sweetened.',       price: '$3.50' },
        ],
      },
      {
        id: 'tea',
        label: 'Tea & Other Beverages',
        photo: { src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80', alt: 'Teacup with loose leaf tea' },
        items: [
          { name: 'Earl Grey',      desc: 'Bergamot-scented black tea.',           price: '$3.50' },
          { name: 'Jasmine Green',  desc: 'Jasmine-scented Chinese green.',         price: '$3.50' },
          { name: 'Rooibos',        desc: 'South African red-bush, caffeine-free.', price: '$3.50' },
          { name: 'Sparkling Water', desc: 'Still or sparkling, lime wedge.',       price: '$2.50' },
        ],
      },
      {
        id: 'pastries',
        label: 'Pastries & Baked Goods',
        photo: { src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80', alt: 'Fresh croissant on wood board' },
        items: [
          { name: 'Croissant', desc: 'Laminated butter dough, baked daily.', price: '$3.00' },
          { name: 'Muffins',   desc: 'Rotating flavors. Ask the barista.',    price: '$2.50' },
          { name: 'Scones',    desc: 'Cream scones with seasonal fruit.',     price: '$4.00' },
          { name: 'Cookies',   desc: 'Chocolate chunk or oatmeal raisin.',    price: '$2.50' },
          { name: 'Brownies',  desc: 'Dark chocolate, sea salt finish.',      price: '$3.00' },
        ],
      },
    ],
  },

  blog: {
    heading: 'Latest coffee news',
    eyebrow: 'Stories & guides',
    posts: [
      {
        title: 'Exploring the World of Coffee Origins',
        date: 'Mar 15, 2024',
        image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=900&q=80',
        href: '#',
      },
      {
        title: '5 Ways to Elevate Your Coffee Experience at Home',
        date: 'Feb 28, 2024',
        image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=900&q=80',
        href: '#',
      },
      {
        title: 'Eco-Friendly Practices at Latte Haven',
        date: 'Feb 5, 2024',
        image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247cd?auto=format&fit=crop&w=900&q=80',
        href: '#',
      },
    ],
  },

  love: {
    eyebrow: 'Latte Haven',
    heading: 'We love coffee',
    body: [
      'Everything we serve starts with beans we know — farmers we\'ve met, roasters we trust, and a house roast we dial in every morning.',
      'Pull up a chair, stay for an hour, or grab it to go. Either way, we\'re glad you stopped by.',
    ],
    cta: { label: 'Explore menu', href: '#menu' },
    image: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Café interior, warm daylight',
  },

  closing: {
    wordmark: 'Latte Haven',
    tagline: 'Brewed to perfection',
  },

  // CONTACT page
  contact: {
    heading: 'Visit us',
    sub: 'Drop by for a pour-over, or send us a note — we usually reply the same day.',
    formHeading: 'Send a message',
    formFields: {
      name: 'Your name',
      email: 'Email address',
      message: 'What can we help with?',
      submit: 'Send message',
    },
  },

  // ABOUT page
  about: {
    heading: 'Our story',
    sub: 'A neighborhood café built on small-batch roasts and good mornings.',
    paragraphs: [
      'Latte Haven opened in 2019 as a one-machine, three-stool coffee bar on Willow Street. We outgrew the stools by year two, kept the machine, and settled into a wood-tabled room that smells, most days, like cardamom and warm milk.',
      'We source beans from roasters we can call — Onyx, Sey, Passenger — and dial in our house espresso every morning before the door opens. Pastries come from the bakery two doors down; what we pour, we taste first.',
      'If you\'re a regular, thank you. If you\'re new, the decaf is honest, the wifi is real, and the corner booth is the quiet one.',
    ],
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Barista pulling a shot at Latte Haven',
  },

  // MENU page — mirrors the home menu but in a dedicated layout
  menuPage: {
    heading: 'The full menu',
    sub: 'Everything we\'re pouring and baking today. Prices include tax.',
  },
};
