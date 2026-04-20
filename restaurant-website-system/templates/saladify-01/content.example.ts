// content.example.ts — saladify-01 placeholder content
//
// Hotlinked Unsplash URLs — bright, saturated, clean-product-shot grading per
// audit §12.4. Real forks must replace with real dish + ingredient photography.
//
// DUAL-ARCHETYPE NOTE: default content here is meal-kit-leaning (audit §9
// "70% meal-kit / 30% storefront"). To flip to fast-casual storefront:
//   1. Rename howItWorks.steps[1].label "Get It Delivered" → "Made Fresh" or "Pick It Up"
//   2. Add a locations row (see LOCATIONS FORK CONTENT below, currently commented out)
//   3. Swap testimonials for Google/Yelp review screenshots (swap source + avatar URLs)

export const content = {
  brand: {
    name: 'Saladify',
    wordmark: 'Saladify',
    tagline: 'Revitalize Your Routine With Fresh Greens',
    description: 'Fresh, nutrient-rich salads and bowls, crafted to taste and delivered to your door.',
    address: { line1: '1420 Market St', line2: 'Austin, TX 78701' },
    phone: '(512) 555-0187',
    email: 'hello@saladify.example',
    hours: [
      { day: 'Mon–Fri', hours: '10am – 9pm' },
      { day: 'Sat',     hours: '11am – 9pm' },
      { day: 'Sun',     hours: '11am – 7pm' },
    ],
    social: [
      { label: 'Instagram', href: '#' },
      { label: 'Facebook',  href: '#' },
      { label: 'TikTok',    href: '#' },
    ],
  },

  nav: {
    primary: [
      { label: 'Home',    href: '/' },
      { label: 'Menu',    href: '/menu' },
      { label: 'About',   href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Order Now', href: '#order' },
  },

  hero: {
    h1: 'Revitalize Your Routine With Fresh Greens',
    sub: 'Packed with care, crafted to taste. Our chef-made salads are the effortless way to eat well — every single day.',
    cta: { label: 'Order Now', href: '#order' },
    secondaryCta: { label: 'View Menu', href: '/menu' },
    bowlImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80',
    bowlAlt: 'Fresh salad bowl with mixed greens',
    // Ingredient-burst floating PNGs — positioned absolutely around hero.
    // NOTE: audit recommends isolated vegetable PNGs. For placeholders we use
    // Unsplash-cropped images that read as ingredient bursts. Real forks should
    // swap for true transparent-bg cutouts.
    ingredients: [
      { src: 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?auto=format&fit=crop&w=240&q=80', alt: 'Cherry tomatoes', top: '8%',  left: '2%',  size: 120, rot: -10 },
      { src: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=240&q=80', alt: 'Fresh greens',  top: '12%', right: '4%', size: 140, rot: 12 },
      { src: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=240&q=80', alt: 'Red chili pepper', bottom: '14%', left: '6%', size: 100, rot: -8 },
      { src: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=240&q=80', alt: 'Lemon wedge',    bottom: '10%', right: '8%', size: 110, rot: 14 },
    ],
    trustRow: [
      { label: 'Fresh Ingredients', icon: 'leaf' },
      { label: 'Fast Delivery',     icon: 'bolt' },
      { label: '100% Organic',      icon: 'check' },
    ],
  },

  introRow: {
    bg: 'peach',
    items: [
      'Pick from fresh, chef-crafted salads, customized to your taste and diet.',
      'Packed with care, kept fresh, and delivered right to your door.',
      'For any meal or snack, just toss in your dressing and enjoy!',
    ],
  },

  dishCarousel: {
    dishes: [
      { id: 'grilled-chicken',   name: 'Grilled Chicken Salad',  tile: 'pink',   image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80', price: 13.95 },
      { id: 'rainbow-crunch',    name: 'Rainbow Crunch',         tile: 'lime',   image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80', price: 11.50 },
      { id: 'spicy-southwest',   name: 'Spicy Southwest',        tile: 'orange', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=800&q=80', price: 12.25 },
      { id: 'classic-caesar',    name: 'Classic Caesar',         tile: 'blue',   image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80', price: 11.95 },
      { id: 'mediterranean',     name: 'Mediterranean Quinoa',   tile: 'teal',   image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=800&q=80', price: 12.95 },
      { id: 'berry-spinach',     name: 'Berry Spinach Delight',  tile: 'pink',   image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=800&q=80', price: 6.22 },
    ],
  },

  nutrientsBand: {
    heading: 'Nutrients Rich Ingredients For No Effort Meals',
    body:
      'Every bowl starts with produce sourced from farms we trust — leafy greens, heirloom tomatoes, crisp peppers, and the kind of seasonal fruit you taste long after lunch is over. No shortcuts, no fillers.',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fresh vegetables composition',
  },

  howItWorks: {
    heading: 'How It Works',
    steps: [
      {
        number: '01',
        label: 'Pick Your Favorites',
        body: 'Browse our seasonal menu and build a box of salads, bowls, and sides that fit your week.',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
      },
      {
        // FORK NOTE: for fast-casual storefront, rename label to "Pick It Up"
        // or "Made Fresh in Minutes" and update body accordingly.
        number: '02',
        label: 'Get It Delivered',
        body: 'We pack and ship next-day in insulated, fully recyclable boxes. Fresh when it lands at your door.',
        image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=600&q=80',
      },
      {
        number: '03',
        label: 'Enjoy Healthier',
        body: 'Toss in your dressing, pair with a favorite protein, and feel good every bite along the way.',
        image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80',
      },
    ],
  },

  farmFreshBand: {
    heading: 'Farm-Fresh Ingredients For A Healthier You',
    body:
      'We partner directly with regional farms to bring peak-season produce from the field to your fork — with fewer miles and more flavor in every bite.',
    cta: { label: 'Order Now', href: '#order' },
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Row of produce-filled jars',
    badgeLabel: 'Fresh Vegetables',
  },

  testimonials: {
    heading: 'Hear From The Community',
    sub: 'Over 10,000 members eating better every week.',
    items: [
      {
        name: 'Michael Green',
        handle: '@mgreen',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        quote:
          'The Rainbow Crunch is the most craveable lunch I have had all year. Deliveries always land fresh.',
      },
      {
        name: 'Priya Shah',
        handle: '@priyas',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        quote:
          'I cancelled three other subscriptions after my first week. The produce quality is on another level.',
      },
      {
        name: 'Daniel Okafor',
        handle: '@danokafor',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        quote:
          'Portion sizes are honest, flavor is outstanding, and the packaging is the first compostable I trust.',
      },
      {
        name: 'Sofia Ramirez',
        handle: '@sofiarmz',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=120&q=80',
        rating: 5,
        quote:
          'I have not missed making lunch once. The Mediterranean Quinoa is now my Monday ritual.',
      },
    ],
  },

  blogGuide: {
    heading: 'The Saladify Guide For A Healthy Living',
    sub: 'Recipes, tips, and the science of eating well.',
    posts: [
      {
        tag: 'Quick & Easy',
        title: 'Secret To A Perfect Salad Every Single Time',
        date: 'Apr 12, 2026',
        image: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=800&q=80',
        href: '#',
      },
      {
        tag: 'Seasonal',
        title: 'Refreshing Summer Salads To Try This Week',
        date: 'Apr 5, 2026',
        image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
        href: '#',
      },
      {
        tag: 'Nutrition',
        title: '5 Fresh Ingredients To Boost Your Immunity',
        date: 'Mar 28, 2026',
        image: 'https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?auto=format&fit=crop&w=800&q=80',
        href: '#',
      },
    ],
  },

  brightBand: {
    heading: 'Brighten Your Day With Vibrant, Fresh Salads From The Garden.',
    cta: { label: 'Order Now', href: '#order' },
  },

  photoStrip: [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=600&q=80',
  ],

  newsletter: {
    heading: 'Join Our Newsletter',
    body: 'Get weekly recipes, seasonal menu drops, and member-only deals.',
    placeholder: 'Email address',
    cta: 'Subscribe',
  },

  // MENU page
  menuPage: {
    title: 'Crafted With Care. Served With Flavor.',
    sub: 'Chef-made, nutrient-dense, and never frozen. Build a box or come pick one up.',
    bestSelling: {
      heading: 'Best Selling Item',
      ids: ['grilled-chicken', 'rainbow-crunch', 'spicy-southwest'],
    },
    allItems: {
      heading: 'All Item',
      categories: ['Salads', 'Soups', 'Powercups'],
      items: [
        { name: 'Grilled Chicken Avocado', category: 'Salads',    tile: 'pink',   image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80', ingredients: 'Grilled chicken, avocado, kale, lemon vinaigrette', price: 8.99 },
        { name: 'Berry Spinach Delight',   category: 'Salads',    tile: 'blue',   image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=600&q=80', ingredients: 'Spinach, strawberries, walnuts, feta, balsamic', price: 6.22 },
        { name: 'Classic Caesar',          category: 'Salads',    tile: 'lime',   image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80', ingredients: 'Romaine, parmesan, croutons, classic caesar', price: 11.95 },
        { name: 'Buffalo Chicken Wrap',    category: 'Salads',    tile: 'orange', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=600&q=80', ingredients: 'Buffalo chicken, romaine, blue cheese, carrot',  price: 10.50 },
        { name: 'Grilled Chicken',         category: 'Salads',    tile: 'teal',   image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80', ingredients: 'Grilled chicken, mixed greens, cucumber, tomato', price: 13.95 },
        { name: 'Mediterranean Quinoa',    category: 'Salads',    tile: 'pink',   image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80', ingredients: 'Quinoa, chickpeas, cucumber, olives, feta, herbs',  price: 12.95 },
        { name: 'Tomato Basil Bisque',     category: 'Soups',     tile: 'orange', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80', ingredients: 'Heirloom tomato, basil, cream, toasted baguette',   price: 7.50 },
        { name: 'Green Detox Cup',         category: 'Powercups', tile: 'lime',   image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80', ingredients: 'Kale, spinach, apple, ginger, lemon, spirulina',    price: 8.25 },
      ],
    },
  },

  // ABOUT page (rebuilt — 404 in source)
  aboutPage: {
    hero: {
      title: 'Food That Feels Good To Eat.',
      sub:   'We started Saladify in 2019 with one simple rule — if we would not feed it to the people we love, it does not make the menu.',
    },
    intro: {
      heading: 'Small farms. Real cooks. Honest ingredients.',
      paragraphs: [
        'Saladify grew out of a tiny kitchen in East Austin where our founders, Maya and Jonah, started cooking lunch for friends who were tired of sad desk salads. What began as weekly drop-offs in glass jars is now a team of 40 makers, growers, and delivery partners serving thousands of bowls every week.',
        'Every recipe on our menu is built around peak-season produce from farms within 200 miles of our kitchen. Nothing frozen, nothing reheated, nothing you would not recognize on a grocery shelf. We keep our sourcing radius small on purpose — it is how we can promise freshness, and how we pay farmers fairly.',
        'Our chefs rotate the menu with the seasons and test every new recipe with our community before it ships. If a dish does not get an honest thumbs-up from at least 100 real eaters, it does not make the cut.',
      ],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80',
      imageAlt: 'Team plating a salad in the kitchen',
    },
    values: {
      heading: 'What We Stand For',
      items: [
        { title: 'Peak-season produce', body: 'We cook with what is actually ripe, not what is merely available.' },
        { title: 'Fair-pay sourcing',   body: 'We pay our farm partners more than wholesale — always.' },
        { title: 'Real packaging',      body: 'Fully compostable bowls, lids, and utensils. No greenwashing.' },
        { title: 'No shortcuts',        body: 'Hand-chopped, hand-tossed, hand-packed. Every single bowl.' },
      ],
    },
  },

  // CONTACT page (rebuilt — 404 in source)
  contactPage: {
    hero: {
      title: 'Say Hello.',
      sub:   'Questions about an order, a catering quote, or just want to chat about produce? We read every message.',
    },
    channels: [
      { label: 'General',   value: 'hello@saladify.example',    href: 'mailto:hello@saladify.example' },
      { label: 'Catering',  value: 'catering@saladify.example', href: 'mailto:catering@saladify.example' },
      { label: 'Press',     value: 'press@saladify.example',    href: 'mailto:press@saladify.example' },
      { label: 'Phone',     value: '(512) 555-0187',            href: 'tel:+15125550187' },
    ],
    form: {
      heading: 'Send Us A Note',
      nameLabel:    'Your name',
      emailLabel:   'Your email',
      topicLabel:   'Topic',
      topics: ['General question', 'Catering inquiry', 'Subscription support', 'Press / partnership'],
      messageLabel: 'Your message',
      cta:          'Send Message',
    },
    visit: {
      heading: 'Come Visit',
      address: '1420 Market St, Austin, TX 78701',
      hours: [
        { day: 'Mon–Fri', hours: '10am – 9pm' },
        { day: 'Sat',     hours: '11am – 9pm' },
        { day: 'Sun',     hours: '11am – 7pm' },
      ],
    },
  },
};
