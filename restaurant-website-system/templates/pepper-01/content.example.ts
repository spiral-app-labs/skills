// content.example.ts — pepper-01 placeholder content
//
// Hotlinked Unsplash URLs for placeholders — crisp overhead product-shot pizza
// photography per audit §4. Forks MUST replace with real brand photography.
// Fork-agents should also replace the decoration ingredient set when the
// cuisine shifts (burger → cheese/pickle; wings → celery/chili-flake; etc).

export const content = {
  brand: {
    name: 'Pepper',
    tagline: 'Your pizza party starts here',
    description: 'Bright, casual pizza shop — order now, delivery or pickup.',
    address: { line1: '123 Pizza St', line2: 'Manhattan, New York, NY 10001' },
    phone: '+1 555 999 777',
    email: 'contact@pepper.pizza',
    deliveryEmail: 'delivery@pepper.pizza',
    orderHref: 'https://www.doordash.com/',
    hours: [
      { days: 'Mon–Fri', time: '9 AM – 10 PM' },
      { days: 'Saturday', time: '10 AM – 11 PM' },
      { days: 'Sunday',   time: '10 AM – 8 PM' },
    ],
    social: [
      { label: 'Instagram', href: '#' },
      { label: 'Trip Advisor', href: '#' },
      { label: 'Youtube', href: '#' },
      { label: 'Twitter', href: '#' },
    ],
  },

  nav: {
    primary: [
      { label: 'Home',    href: '/' },
      { label: 'Menu',    href: '/#menu' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: { label: 'Order Now', href: 'https://www.doordash.com/' },
  },

  hero: {
    headline: 'Your Pizza Party Starts Here!',
    subhead:  'Hot pies, bold flavors, and deals that keep the whole table happy. Tap order and we do the rest.',
    photo:    'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1400&q=80',
    photoAlt: 'Overhead shot of a pepperoni pizza with fresh basil',
  },

  fanFavorites: {
    heading: 'Fan Favorites',
    subhead: 'The most-ordered pies — crowd-tested, kitchen-approved.',
    dishes: [
      {
        name: 'Cheese Avalanche',
        desc: 'Triple-stack mozzarella, fontina, and aged parm on a slow-fermented crust.',
        price: '$18.99',
        photo: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Buffalo Bliss',
        desc: 'Crispy buffalo chicken, blue-cheese crumble, and a drizzle of hot honey.',
        price: '$19.99',
        photo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Mediterranean Marvel',
        desc: 'Feta, kalamata olives, sun-dried tomato, red onion, and oregano.',
        price: '$20.99',
        photo: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },

  deals: {
    heading: 'Hot Pizza, Hotter Deals',
    subhead: 'From family-sized deals to solo slices, find the perfect bite for your pizza cravings.',
    items: [
      {
        name: 'Spicy Duo Deal',
        inclusions: ['1 Medium Firecracker Inferno', '1 Medium Buffalo Bliss'],
        price: '$21.99',
        save:  'Save $4',
        color: 'deal-1' as const,
        photo: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Cheese Lovers Pair',
        inclusions: ['1 Medium Cheese Avalanche', '1 Medium Truffle Temptation'],
        price: '$22.99',
        save:  'Save $5',
        color: 'deal-2' as const,
        photo: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Veggie Delight Combo',
        inclusions: ['1 Medium Garden Supreme', '1 Medium Mediterranean Marvel'],
        price: '$21.99',
        save:  'Save $4',
        color: 'deal-3' as const,
        photo: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Meat Treat Combo',
        inclusions: ['1 Medium Carnivore Crush', '1 Medium Pepperoni Classic'],
        price: '$22.99',
        save:  'Save $5',
        color: 'deal-4' as const,
        photo: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=900&q=80',
      },
    ],
  },

  desserts: {
    heading: 'Save Room for Dessert!',
    subhead: 'Our desserts are worth it. Trust us, you won\'t want to miss these sweet delights.',
    items: [
      {
        name: 'Nutella Pizza',
        desc: 'Warm dough, molten Nutella, fresh strawberries.',
        price: '$11.99',
        photo: 'https://images.unsplash.com/photo-1464195244916-405fa0a82545?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Tiramisu Temptation',
        desc: 'Espresso-soaked ladyfingers layered with mascarpone.',
        price: '$9.99',
        photo: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
      },
      {
        name: 'Classic Cannoli',
        desc: 'Crisp pastry shells, sweet ricotta, dark chocolate chips.',
        price: '$8.99',
        photo: 'https://images.unsplash.com/photo-1587736908500-c25f18b5a972?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },

  locations: {
    heading: 'Find Your Nearest Pizza Spot',
    subhead: 'Five cities and counting. Pop in or order to your door.',
    tiles: [
      { city: 'New York',   photo: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=600&q=80' },
      { city: 'London',     photo: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80' },
      { city: 'Amsterdam',  photo: 'https://images.unsplash.com/photo-1534351590666-13e3e96c5017?auto=format&fit=crop&w=600&q=80' },
      { city: 'Berlin',     photo: 'https://images.unsplash.com/photo-1587330979470-3016b6702d89?auto=format&fit=crop&w=600&q=80' },
      { city: 'Bucharest',  photo: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=80' },
    ],
    accordion: [
      {
        title: 'Delivery Zones',
        body:  'We deliver within a 5-mile radius of each shop. Enter your zip at checkout to confirm coverage before ordering.',
      },
      {
        title: 'Delivery Methods & Fees',
        body:  'Delivery is $3.99 flat under $25 and free above. Pickup is always free and usually ready in 15 minutes.',
      },
      {
        title: 'Pickup Info', // [audit §12.2 — fixed the "Pickp" typo from source]
        body:  'Pickup hours match shop hours. Park out front in any marked spot and grab your order from the counter — ID ready for alcohol.',
      },
    ],
  },

  testimonial: {
    eyebrow: '5 STARS',
    heading: 'Pizza Perfection, Expertly Baked',
    body:    'Top foodies and chefs share their thoughts on why our pizzas stand out from the crowd.',
    quote:   'The most honest Neapolitan-NY crossover I\'ve found in the city. It\'s a perfect example of slow cooking, wood-fired care, yet craveable and unpretentious culinary experience.',
    name:    'Chef Marco Di Luca',
    photo:   'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=900&q=80',
    photoAlt: 'Portrait of Chef Marco Di Luca',
  },

  closingCTA: {
    heading: 'Delicious Deals, Just for You',
    subhead: 'Sign up for our newsletter and receive exclusive offers on new pizzas!',
    placeholder: 'Your email address',
    cta: 'Submit',
    photo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    photoAlt: 'Overhead pizza photo',
  },

  contact: {
    title: 'Contact Us',
    subtitle: 'Whether you have a question, feedback, or just want to say hi, we\'re always here for you. Reach out and let us know how we can make your experience even better.',
    addressBlocks: [
      { city: 'New York',   line1: '723 East St, New York, NY 10036', phone: '+1 212 555 444', email: 'contact@pepper.pizza' },
      { city: 'London',     line1: 'Argyle Building, Broadwick St, London', phone: '+44 20 7555 999', email: 'contact@pepper.pizza' },
      { city: 'Amsterdam',  line1: 'Rozengracht 221, 1016 LP Amsterdam', phone: '+31 20 555 333', email: 'contact@pepper.pizza' },
      { city: 'Berlin',     line1: 'Sonar Str 16, 12047 Berlin, Germany', phone: '+49 30 555 222', email: 'contact@pepper.pizza' },
    ],
    form: {
      heading: 'Write Us a Message',
      fields: [
        { name: 'firstName', label: 'First Name' },
        { name: 'lastName',  label: 'Last Name'  },
        { name: 'email',     label: 'Email',      type: 'email' },
        { name: 'message',   label: 'Your Message', type: 'textarea' },
      ],
      submit: 'Send Message',
    },
  },

  about: {
    title: 'About Pepper',
    subtitle: 'A Brooklyn pizza shop with city ambitions and a family kitchen\'s heart.',
    intro: 'We started in 2012 with one stone oven, two cousins, and a simple rule: serve the pie you\'d want delivered to your own kitchen table. Ten years and five cities later, the rule still stands.',
    stats: [
      { value: '5',   label: 'Cities' },
      { value: '12M+', label: 'Pies served' },
      { value: '4.9', label: 'Average rating' },
      { value: '30min', label: 'Average delivery' },
    ],
    paragraphs: [
      'Every dough is a 48-hour cold ferment, hand-stretched, and fired in a 900° stone deck. We source mozzarella from two cooperative dairies and our tomatoes from a single San Marzano grower.',
      'We hire slow and train on care. Ask any Pepper team member about the pizza — they\'ll have opinions, and they\'ll want to hear yours.',
    ],
    photo: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1400&q=80',
    photoAlt: 'Inside the Pepper kitchen',
  },

  // Confetti ingredient illustrations — emoji-based substitute for the source's
  // SVG/PNG ingredient cutouts. Fork-agents may swap for custom SVGs per cuisine.
  // Documented substitute per audit §6 (ConfettiHero "illustration-set" variant).
  confetti: [
    { emoji: '🌿', top: '8%',  left: '6%',  rotate: -14 },
    { emoji: '🍅', top: '18%', left: '86%', rotate: 12 },
    { emoji: '🫒', top: '42%', left: '4%',  rotate: 8 },
    { emoji: '🌶️', top: '58%', left: '92%', rotate: -18 },
    { emoji: '🍄', top: '72%', left: '10%', rotate: 6 },
    { emoji: '🧀', top: '30%', left: '80%', rotate: -10 },
    { emoji: '🌿', top: '80%', left: '78%', rotate: 14 },
    { emoji: '🧄', top: '12%', left: '40%', rotate: -6 },
  ],

  footer: {
    columns: [
      {
        heading: 'About',
        links: [
          { label: 'About Us',   href: '/about' },
          { label: 'Our Menu',   href: '/#menu' },
          { label: 'Contact',    href: '/contact' },
        ],
      },
      {
        heading: 'Policies',
        links: [
          { label: 'Privacy Policy', href: '#' },
          { label: 'Cookie Policy',  href: '#' },
          { label: 'Terms & Conditions', href: '#' },
          { label: 'Refunds & Cancellations', href: '#' },
        ],
      },
      {
        heading: 'Social',
        links: [
          { label: 'Instagram',    href: '#' },
          { label: 'Trip Advisor', href: '#' },
          { label: 'Youtube',      href: '#' },
          { label: 'Twitter',      href: '#' },
        ],
      },
    ],
    copy: '© 2026 Pepper. All rights reserved.',
  },
};
