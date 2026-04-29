// content.example.ts - Grounds Coffee Bar prospect fork
//
// Built from latte-01 as a cafe-first canonical wrapper. The inline menu is a
// prototype surface assembled from visible third-party favorites and cafe
// standard categories because the current cafe /menu path returns 404.

const officialBeansImage =
  'https://static.wixstatic.com/media/11062b_2974cb752e974ea192d619ea0d64120d~mv2.jpg/v1/fill/w_980%2Ch_565%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/11062b_2974cb752e974ea192d619ea0d64120d~mv2.jpg';

const officialExteriorImage =
  'https://static.wixstatic.com/media/8454c7_ab5643e597b54ee79d8d1474c6ff25dc~mv2.png/v1/fill/w_900%2Ch_675%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_avif%2Cquality_auto/Grounds%20Outside%20View.png';

const cafeDrinkImage =
  'https://cdn10.localdatacdn.com/il/crystal-lake/3444367/original/GvxCQ2QPw8.jpeg';

export const content = {
  brand: {
    name: 'Grounds Coffee Bar',
    shortName: 'Grounds',
    tagline: 'Cozy coffee, breakfast, and roasted beans in downtown Crystal Lake',
    description:
      'A cozy Crystal Lake cafe for Honey Bee lattes, nitro cold brew, breakfast, pastries, local goods, and small-batch Grounds beans.',
    address: { line1: '89 N Williams St', line2: 'Crystal Lake, IL 60014' },
    phone: '(815) 900-1339',
    email: 'info@groundscb.com',
    social: [
      { label: 'Cafe site', href: 'https://www.groundscb.com/' },
      { label: 'Roaster', href: 'https://www.groundscoffeeroasters.com/' },
      { label: 'Instagram', href: '#' },
    ],
    hours: [
      { days: 'Mon-Sun', time: '7:00 AM - 3:00 PM' },
    ],
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 0 as const, open: '07:00', close: '15:00' },
        { day: 1 as const, open: '07:00', close: '15:00' },
        { day: 2 as const, open: '07:00', close: '15:00' },
        { day: 3 as const, open: '07:00', close: '15:00' },
        { day: 4 as const, open: '07:00', close: '15:00' },
        { day: 5 as const, open: '07:00', close: '15:00' },
        { day: 6 as const, open: '07:00', close: '15:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.24342, lng: -88.316978 },
    links: {
      cafeWebsite: 'https://www.groundscb.com/',
      order: 'https://www.groundscb.com/',
      legacyOrderCandidate: 'https://www.groundscl.com/',
      roasterHome: 'https://www.groundscoffeeroasters.com/',
      shop: 'https://www.groundscoffeeroasters.com/category/single-origins-blends',
      subscriptions: 'https://www.groundscoffeeroasters.com/subscriptions',
      directions:
        'https://www.google.com/maps/search/?api=1&query=Grounds%20Coffee%20Bar%2089%20N%20Williams%20St%20Crystal%20Lake%20IL%2060014',
    },
  },

  nav: {
    primary: [
      { label: 'Menu', href: '/menu' },
      { label: 'Order', href: 'https://www.groundscb.com/' },
      { label: 'Beans', href: 'https://www.groundscoffeeroasters.com/category/single-origins-blends' },
      { label: 'Visit', href: '/contact' },
    ],
  },

  hero: {
    ratingChip: { provider: 'Google', stars: 5, score: '4.5' },
    h1: 'Cozy coffee for downtown Crystal Lake',
    sub:
      'Honey Bee lattes, nitro cold brew, breakfast sandwiches, fresh pastries, laptop-friendly seating, and Grounds beans to take home.',
    cta: { label: 'View cafe menu', href: '/menu' },
    secondaryCta: { label: 'Order online', href: 'https://www.groundscb.com/' },
    daypart: {
      morning: 'Good morning - Honey Bee lattes, nitro cold brew, and pastries are ready.',
      midday: 'Settle in - breakfast sandwiches, oatmeal, local pastries, and strong coffee till 3.',
      closing: 'Last cafe stretch - grab a seasonal latte or beans for tomorrow.',
      closed: 'Closed for the day - beans and subscriptions are still available online.',
    },
    photos: [
      { src: cafeDrinkImage, alt: 'Grounds Coffee drinks and acai bowl on a cafe table' },
      { src: officialExteriorImage, alt: 'Grounds Coffee Bar storefront in downtown Crystal Lake' },
      { src: officialBeansImage, alt: 'Three Grounds Coffee roast levels on a wood surface' },
    ],
  },

  menu: {
    heading: 'Cafe menu',
    eyebrow: 'Review-backed favorites',
    categories: [
      {
        id: 'coffee-bar',
        label: 'Coffee Bar',
        photo: { src: cafeDrinkImage, alt: 'Iced Grounds Coffee drinks on a cafe table' },
        items: [
          { name: 'Drip Coffee', desc: 'Fresh-brewed Grounds roast.', price: 'from $3' },
          { name: 'Americano', desc: 'Espresso stretched with hot water.', price: 'from $3.75' },
          { name: 'Latte', desc: 'Espresso with steamed milk, hot or iced.', price: 'from $5' },
          { name: 'Cappuccino', desc: 'Classic espresso, steamed milk, and foam.', price: 'from $5' },
          { name: 'Nitro Cold Brew', desc: 'Smooth draft cold brew guests call very good.', price: 'from $5' },
        ],
      },
      {
        id: 'signature-lattes',
        label: 'Signature Lattes',
        photo: {
          src: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=1200&q=80',
          alt: 'Latte art on a wood table',
        },
        items: [
          { name: 'Honey Bee Latte', desc: 'A named favorite: balanced, honeyed, not overly sweet.', price: 'from $5.75' },
          { name: 'Nutella Latte', desc: 'Chocolate-hazelnut espresso drink guests remember.', price: 'from $5.75' },
          { name: 'Cinnamon Roll Latte', desc: 'Warm spice, espresso, and milk.', price: 'from $5.75' },
          { name: 'Chocolate Covered Strawberry Latte', desc: 'Smooth seasonal latte with chocolate, strawberry, and coffee.', price: 'seasonal' },
          { name: 'Coco Mocho Latte', desc: 'Barista-recommended seasonal-style latte.', price: 'seasonal' },
        ],
      },
      {
        id: 'tea-matcha',
        label: 'Tea & Matcha',
        photo: {
          src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=1200&q=80',
          alt: 'Loose leaf tea cup on a wood surface',
        },
        items: [
          { name: 'Matcha Latte', desc: 'Green tea matcha with steamed milk.', price: 'from $5.50' },
          { name: 'Chai Latte', desc: 'Spiced chai, hot or iced; a repeat-review favorite.', price: 'from $5' },
          { name: 'Hot Chocolate', desc: 'Chocolate and steamed milk.', price: 'from $4.50' },
          { name: 'Loose Leaf Tea', desc: 'Rotating hot tea selection.', price: 'from $3.50' },
          { name: 'Seasonal Iced Tea', desc: 'Fresh, bright, and easy to grab to go.', price: 'from $3.75' },
        ],
      },
      {
        id: 'breakfast',
        label: 'Breakfast & Lunch',
        photo: {
          src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80',
          alt: 'Breakfast sandwich and coffee',
        },
        items: [
          { name: 'Breakfast Burrito', desc: 'Guest favorite for a real morning meal.', price: 'ask barista' },
          { name: 'Breakfast Sandwich', desc: 'Comfortable cafe breakfast with coffee.', price: 'ask barista' },
          { name: 'Avocado Toast', desc: 'Vegetarian-friendly cafe standby.', price: 'ask barista' },
          { name: 'Gluten Free Oatmeal', desc: 'Warm oatmeal with cafe toppings.', price: 'ask barista' },
          { name: 'Hot Sandwiches', desc: 'Rotating lunch-friendly sandwiches.', price: 'ask barista' },
        ],
      },
      {
        id: 'pastries',
        label: 'Pastries',
        photo: {
          src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=80',
          alt: 'Fresh croissants on a tray',
        },
        items: [
          { name: 'Chocolate Croissant', desc: 'Cafe-case favorite guests mention by name.', price: 'ask barista' },
          { name: 'Blueberry Muffin', desc: 'Simple, quick, and coffee-ready.', price: 'ask barista' },
          { name: 'Scones', desc: 'A recent staff-and-regulars favorite.', price: 'ask barista' },
          { name: 'Seasonal Bread', desc: 'Pumpkin, gingerbread, or whatever is fresh.', price: 'seasonal' },
          { name: 'Local Treats & Goods', desc: 'Pastries, soaps, pantry finds, and small local gifts.', price: 'varies' },
        ],
      },
    ],
  },

  reviews: {
    eyebrow: 'What locals keep saying',
    heading: 'Cozy, friendly, and full of named favorites',
    intro:
      'The Google review packet repeats the same signals: warm staff, quick service, comfortable seating, local goods, fresh pastries, and drinks people remember by name.',
    stats: [
      { value: '5/5', label: 'food, service, and atmosphere repeated across the review packet' },
      { value: 'No wait', label: 'called out by a takeout reviewer' },
      { value: '$1-20', label: 'typical coffee, brunch, and takeout spend in the reviews' },
    ],
    themes: [
      {
        title: 'Stay a while',
        body: 'Cozy but airy, with couches, tables, outdoor seating, and laptop-friendly corners.',
      },
      {
        title: 'Ask the barista',
        body: 'Reviewers repeatedly mention friendly staff helping with drink picks and remakes.',
      },
      {
        title: 'Order the named drinks',
        body: 'Honey Bee, Nutella, chai, nitro cold brew, and seasonal lattes all show up by name.',
      },
    ],
    quotes: [
      {
        quote: 'Such a cozy spot with amazing coffee and a warm, inviting atmosphere.',
        name: 'Maria Tulba',
        detail: 'Google review - brunch',
      },
      {
        quote: 'The honeybee latte was also really good. It was not overly sweet.',
        name: 'Chuck Roast',
        detail: 'Google review - takeout',
      },
      {
        quote: 'Great place to set up your laptop and work for a few hours or meet up with a friend.',
        name: 'Stephanie Podgor',
        detail: 'Google review - seasonal latte',
      },
      {
        quote: 'The hot coffee is exceptional. The ambience is relaxing especially the green plush velvety chairs.',
        name: 'James Steele',
        detail: 'Google review - dine in',
      },
      {
        quote: 'Left my wallet here and they were kind enough to look for it first thing in the morning.',
        name: 'Cora',
        detail: 'Google review - service',
      },
    ],
  },

  blog: {
    heading: 'Roaster beans & subscriptions',
    eyebrow: 'Take Grounds home',
    posts: [
      {
        title: 'Day Break roast lineup',
        date: 'Light, medium, and dark roasts',
        image: officialBeansImage,
        href: 'https://www.groundscoffeeroasters.com/category/single-origins-blends',
        cta: 'Shop beans',
      },
      {
        title: 'Colombia and Guatemala single origins',
        date: 'Whole bean bags from the roaster shop',
        image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=80',
        href: 'https://www.groundscoffeeroasters.com/category/single-origins-blends',
        cta: 'Browse roasts',
      },
      {
        title: 'Coffee subscriptions',
        date: 'Weekly, every-two-week, and monthly options',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=80',
        href: 'https://www.groundscoffeeroasters.com/subscriptions',
        cta: 'Explore subscriptions',
      },
    ],
  },

  love: {
    eyebrow: 'Grounds Coffee Bar',
    heading: 'A cafe people use like a second living room',
    body: [
      'The review themes are unusually clear: people come for the coffee, but they remember the seating, the baristas, the seasonal drinks, the pastries, and the little local goods by the register.',
      'This site makes that experience easy to understand before a guest arrives, then connects them to the existing order path, roaster beans, and subscriptions without a domain hunt.',
    ],
    cta: { label: 'Shop roaster beans', href: 'https://www.groundscoffeeroasters.com/category/single-origins-blends' },
    image: officialExteriorImage,
    imageAlt: 'Grounds Coffee Bar storefront in downtown Crystal Lake',
  },

  closing: {
    wordmark: 'Grounds Coffee Bar',
    tagline: 'Cozy cafe mornings, friendly baristas, beans for home.',
  },

  contact: {
    heading: 'Visit downtown Crystal Lake',
    sub: 'Find the cafe on Williams Street, order through the current cafe path, or head to the roaster shop for beans and subscriptions.',
    formHeading: 'Ask Grounds',
    formFields: {
      name: 'Your name',
      email: 'Email address',
      message: 'What can we help with?',
      submit: 'Send message',
    },
  },

  about: {
    heading: 'Coffee, comfort, and local goods',
    sub: 'Grounds is a downtown Crystal Lake coffee bar with a roaster shop, a comfortable room, and regulars who know their drinks by name.',
    paragraphs: [
      'The cafe should answer the morning questions fast: what can I order, when are you open, where do I go, and can I order ahead?',
      'The guest story is warmer than a plain menu. Reviewers talk about green plush chairs, outdoor seating, local soaps and pantry finds, friendly baristas, pup cups, pastries, and seasonal drinks they came back for.',
      'The roaster side adds the take-home path: whole bean bags, subscriptions, and coffee for tomorrow. The current roaster site has the commerce content; this fork makes it part of one guest journey.',
    ],
    image: officialBeansImage,
    imageAlt: 'Grounds Coffee roast samples on a wood surface',
  },

  menuPage: {
    heading: 'The cafe menu',
    sub: 'Coffee, seasonal lattes, breakfast, pastries, hours, address, and ordering in one crawlable cafe path.',
  },
};
