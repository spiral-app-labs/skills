// content.example.ts — Shirley's Piano Bar prospect fork
//
// This fork keeps velvet-shaker's nocturnal drinks-led structure, but shifts
// the sales path toward live music, song requests, private parties, and the
// Shirley story. Shirley's already has a page-native menu; the opportunity is
// unifying the calendar, cocktails, events, and story into one late-night path.

const img = {
  venueHero:
    'https://images.squarespace-cdn.com/content/v1/6997a3ff7116a7075fc62247/425133c2-02e2-489d-9a56-f7ae0d90d6cf/SPB-Venue-06-1024x682.jpg',
  venueBar:
    'https://images.squarespace-cdn.com/content/v1/6997a3ff7116a7075fc62247/7c0381c3-a3dc-41ee-bc2e-a60e1f39f269/SPB-Venue-02-1536x1024.jpg',
  venueRoom:
    'https://images.squarespace-cdn.com/content/v1/6997a3ff7116a7075fc62247/d01cd1fa-f686-4547-ab44-b4815d3fb922/SPB-Venue-01-1024x682.jpg',
  venuePiano:
    'https://images.squarespace-cdn.com/content/v1/6997a3ff7116a7075fc62247/fd6ecd6a-5728-43d6-94b4-9f9ed83936b5/SPB-Venue-03-1024x682.jpg',
  venueSign:
    'https://images.squarespace-cdn.com/content/v1/6997a3ff7116a7075fc62247/0a85d8df-63d8-4d32-9b4b-84a985a89db2/SPB-Venue-14-1024x682.jpg',
  venueShelf:
    'https://images.squarespace-cdn.com/content/v1/6997a3ff7116a7075fc62247/36425f17-e6da-4098-84f8-9f28b62099dd/SPB-Venue-05-1024x682.jpg',
  party:
    'https://images.squarespace-cdn.com/content/v1/6997a3ff7116a7075fc62247/c5f24e50-4f50-4db3-9bc4-31a2f96aa6cc/Screenshot+2026-02-19+at+9.25.10%E2%80%AFPM.png',
  storyCouple:
    'https://images.squarespace-cdn.com/content/v1/6997a3ff7116a7075fc62247/61b8659f-0a55-40b7-b72b-a4b165d29b15/spb-story-v1.jpg',
  shirley:
    'https://images.squarespace-cdn.com/content/v1/6997a3ff7116a7075fc62247/788bf08e-cd56-40af-96dc-e65414ecc13a/about-pic.png',
};

export const content = {
  brand: {
    name: "Shirley's Piano Bar",
    tagline: "Barrington's late-night piano bar",
    description:
      "Live piano, classic cocktails, song requests, and private parties in downtown Barrington, Illinois.",
    city: 'Barrington, IL',
    address: {
      line1: '104 North Cook Street',
      line2: 'Barrington, Illinois 60010',
    },
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 0 as const, open: '16:00', close: '00:00' }, // Sun
        { day: 2 as const, open: '18:00', close: '01:00' }, // Tue
        { day: 3 as const, open: '18:00', close: '01:00' }, // Wed
        { day: 4 as const, open: '18:00', close: '01:00' }, // Thu
        { day: 5 as const, open: '18:00', close: '02:00' }, // Fri
        { day: 6 as const, open: '18:00', close: '02:00' }, // Sat
      ],
      closures: [],
    },
    geo: { lat: 42.1544, lng: -88.1364 },
    phone: '224-888-1880',
    phoneHref: 'tel:2248881880',
    email: 'info@shirleyspianobar.com',
    emailHref: 'mailto:info@shirleyspianobar.com',
    url: 'https://www.shirleyspianobar.com/',
  },

  nav: {
    links: [
      { label: 'home', href: '/' },
      { label: 'live music', href: '/live-music' },
      { label: 'menu', href: '/menu' },
      { label: 'parties', href: '/parties' },
      { label: 'story', href: '/story' },
      { label: 'visit', href: '/contact' },
    ],
  },

  home: {
    heroEyebrow: 'live music · classic cocktails · song requests welcome',
    heroH1: "Barrington's Late-Night Piano Bar",
    heroSub:
      'A small downtown room that starts intimate, gets lively by music time, and turns request-friendly piano into the reason to stay for one more drink.',
    heroImage: { src: img.venueHero, alt: "Inside Shirley's Piano Bar at night" },
    heroCtas: [
      { label: "Tonight's music", href: '/live-music' },
      { label: 'Plan a party', href: '/parties' },
    ],
    cocktailPhotoRow: [
      { src: img.venueBar, alt: "Shirley's bar with bottles and warm lighting" },
      { src: img.venueRoom, alt: "Candled lounge tables inside Shirley's Piano Bar" },
      { src: img.venuePiano, alt: "Stage and piano lighting at Shirley's" },
      { src: img.venueShelf, alt: "Back bar and glassware at Shirley's" },
    ],
    editorialParagraph:
      "Shirley's works because guests remember the human parts: Jess and the bar team making people feel cared for, drinks that land, performers who can turn requests into a sing-along, and birthday groups finishing the night somewhere that feels personal.",
    galleryLink: { label: 'see the story', href: '/story' },
    asymmetricGallery: {
      left: { src: img.party, alt: "Group celebration at Shirley's Piano Bar", aspect: 'portrait' as const },
      right: { src: img.venueSign, alt: "Late-night exterior sign for Shirley's", aspect: 'landscape' as const },
    },
    cocktailsNoPrice: [
      { name: 'Smoked Old Fashioned', desc: 'Buffalo Trace bourbon, bitters, demerara, smoked cherry wood' },
      { name: 'Black Manhattan', desc: 'Evan Williams Single Barrel, amaro, bitters, demerara' },
      { name: 'Espresso Martini', desc: 'espresso vodka, mocha espresso, Kahlua, chocolate bitters' },
      { name: 'Dirty Shirley Martini', desc: 'vodka or gin, dry vermouth, house brine, stuffed olives' },
      { name: 'Blackberry Bramble', desc: "Hendrick's gin, creme de mure, blackberry puree, lemon" },
      { name: 'Spicy Margarita', desc: 'reposado tequila, Gran Gala, Ancho Reyes Verde, lime, jalapeno' },
    ],
    numberedEyebrow: { number: '03', label: 'REGULAR NIGHTS' },
    occasions: [
      {
        heading: 'Request Nights',
        body: 'Settle in, call out a song, and let the player steer the room. Guest reviews make one thing clear: the best calendar cards should tell people the performer style, not just the start time.',
        photo: { src: img.venuePiano, alt: "Piano-night lighting at Shirley's" },
      },
      {
        heading: 'Songwriter Showcase',
        body: 'A recurring stage for local artists, original songs, and a room that listens before it joins in.',
        photo: { src: img.venueRoom, alt: "Intimate lounge setup for live music" },
      },
      {
        heading: 'Private Sing-Alongs',
        body: 'Birthdays, after-dinner groups, client nights, and buyouts can be shaped around dedications, themes, and cocktails that make the guest of honor feel known.',
        photo: { src: img.party, alt: "Private group celebration at Shirley's" },
      },
    ],
    brandStory: {
      paragraph:
        "The bar is named for Shirley Engblom, remembered as a generous host and the social spark beside Verne, a Chicagoland musician. Their gatherings mixed live music, drinks, and laughter; this room carries that house-party spirit into downtown Barrington.",
      thumbnails: [
        { src: img.storyCouple, alt: 'Historic photo of Shirley and Verne' },
        { src: img.shirley, alt: 'Portrait of Shirley' },
        { src: img.venueBar, alt: "Shirley's warm bar interior" },
      ],
    },
    events: {
      label: 'tonight / this week',
      items: [
        {
          date: 'Tue, Apr 28',
          time: '8:00 PM - 11:00 PM',
          title: "Chris Heroldt LIVE at Shirley's Piano Bar",
          desc: 'Piano and vocals from a longtime Chicago rock, jazz, and blues performer.',
          href: '/live-music',
        },
        {
          date: 'Fri, May 1',
          time: '8:00 PM - 11:59 PM',
          title: 'Jennifer Lee Knuth LIVE',
          desc: 'Chicago-based vocalist, multi-instrumentalist, and high-energy bar performer.',
          href: '/live-music',
        },
        {
          date: 'Sat, May 2',
          time: '8:00 PM - 11:59 PM',
          title: "Peter Miletic LIVE at Shirley's Piano Bar",
          desc: 'Piano performance shaped for showmanship, listening, and guest requests.',
          href: '/live-music',
        },
        {
          date: 'Sun, May 3',
          time: '7:00 PM - 10:00 PM',
          title: 'Emily Popli LIVE',
          desc: 'Singer-songwriter blending soul, pop, and country influences.',
          href: '/live-music',
        },
      ],
      cta: { label: 'View full calendar', href: '/live-music' },
    },
    reviewProof: {
      eyebrow: 'from the room',
      heading: 'Why guests come back',
      intro:
        "Ask people what they love about Shirley's and the same notes keep coming up: warm bartenders, drinks that land, request-friendly piano, birthday groups after dinner, and a small room that fills up once the music starts.",
      themes: [
        {
          heading: 'Friendly bar team',
          body: 'Reviews repeatedly call out Jess and the bartenders as friendly, attentive, quick, kind, professional, and hard-working.',
          signal: 'service',
        },
        {
          heading: 'Request-friendly music',
          body: 'Guests name-check Emily Popli, Brandon, the Piano Man, and nights where friends joined in for a song.',
          signal: 'live music',
        },
        {
          heading: 'Birthday groups',
          body: 'Birthday parties, after-dinner groups, and friends looking for something different show up again and again in the reviews.',
          signal: 'celebrations',
        },
        {
          heading: 'Small room, big energy',
          body: 'People describe an intimate room with limited seating that can feel packed, loud, and fun when the live music starts.',
          signal: 'atmosphere',
        },
      ],
    },
  },

  menu: {
    h1: 'Cocktail Menu',
    intro:
      "A crawlable, polished version of Shirley's existing drink list: signature cocktails first, then wine, beer and seltzers, and zero-proof options.",
    photoStrip: [
      { src: img.venueShelf, alt: "Back bar at Shirley's Piano Bar" },
      { src: img.venueBar, alt: "Cocktail bar seating at Shirley's" },
      { src: img.venueRoom, alt: "Candlelit tables at Shirley's" },
      { src: img.venueHero, alt: "Warm late-night venue lighting at Shirley's" },
    ],
    categories: [
      {
        title: 'Signature Cocktails',
        items: [
          { name: 'Smoked Old Fashioned', desc: 'Buffalo Trace Bourbon, bitters, demerara syrup, cherry wood smoked, cherry' },
          { name: 'Black Manhattan', desc: 'Evan Williams Single Barrel, amaro, bitters, demerara syrup, cherry' },
          { name: 'Espresso Martini', desc: 'Three Olives Vodka, mocha espresso, Kahlua, chocolate bitters' },
          { name: 'Dirty Shirley Martini', desc: 'Grey Goose vodka, dry vermouth, brine, choice of blue cheese, garlic, jalapeno, or pimento olives' },
          { name: 'Blackberry Bramble', desc: "Hendrick's gin, creme de mure, blackberry puree, lemon juice" },
          { name: 'Blue Hawaiian', desc: 'Bacardi rum, Malibu, blue curacao, lime, coconut creme, pineapple juice' },
          { name: 'Spicy Margarita', desc: 'Gran Centenario Reposado, Gran Gala, Ancho Reyes Verde, lime juice, jalapeno' },
        ],
      },
      {
        title: 'Wine',
        items: [
          { name: 'Josh Cellars', desc: 'Cabernet Sauvignon or Merlot' },
          { name: 'Chateau Michelle', desc: 'Cabernet Sauvignon' },
          { name: 'Honest Thief', desc: 'Cabernet Sauvignon' },
          { name: 'Meiomi', desc: 'Pinot Noir or Chardonnay' },
          { name: 'Firesteed', desc: 'Pinot Noir' },
          { name: 'Kim Crawford', desc: 'Sauvignon Blanc' },
          { name: 'Ruffino', desc: 'Pinot Grigio or Prosecco' },
        ],
      },
      {
        title: 'Beer & Seltzers',
        items: [
          { name: 'Bottled Beer', desc: 'Blue Moon, Bud Light, Budweiser, Coors Light, Guinness, Heineken, Lagunitas IPA, Michelob Ultra, Miller High Life, Miller Lite, Modelo, Pacifico, Zombie Dust' },
          { name: 'Draft Beer', desc: 'Art History, Half Acre, Maplewood, Stella Artois' },
          { name: 'Seltzers & Cider', desc: '2 Towns Bright Cider, White Claw, High Noon' },
        ],
      },
      {
        title: 'Zero-Proof',
        items: [
          { name: "Shirley's Signature Shirley Temple", desc: "Seagram's ginger ale, Sprite, grenadine, maraschino cherry" },
          { name: 'Cucumber Mojito', desc: 'Cucumber, mint, sugar, lime, soda' },
          { name: 'Mionetto Spritz', desc: 'Mionetto NA aperitivo, Mionetto NA prosecco, orange, soda' },
          { name: 'Fre', desc: 'Non-alcoholic red blend or chardonnay' },
          { name: 'Non-Alcoholic Beer', desc: 'Heineken NA and Athletic Brewing NA' },
        ],
      },
    ],
    cantFind: {
      heading: 'Pair a drink with the set.',
      body:
        'Browse the calendar before you choose the first round: the best drink list here is the one that fits the player, the table, and the songs you want to hear.',
      linkLabel: 'see live music',
      linkHref: '/live-music',
      photos: [
        { src: img.venuePiano, alt: "Piano stage at Shirley's" },
        { src: img.party, alt: "Guests celebrating at Shirley's" },
      ],
    },
  },

  liveMusic: {
    h1: 'Live Music',
    eyebrow: '(calendar and performers)',
    intro:
      "Tonight's performer belongs near the front door of the website. Reviews show that request fit matters, so the calendar should help guests choose the kind of night they want while preserving the official Google Calendar / ICS habit.",
    events: [
      { date: 'Tuesday, April 28, 2026', shortDate: 'Apr 28', startDate: '2026-04-28T20:00:00-05:00', time: '8:00 PM - 11:00 PM', title: "Chris Heroldt LIVE at Shirley's Piano Bar", desc: 'Piano and vocals from a longtime Chicago rock, jazz, and blues performer.' },
      { date: 'Friday, May 1, 2026', shortDate: 'May 1', startDate: '2026-05-01T20:00:00-05:00', time: '8:00 PM - 11:59 PM', title: 'Jennifer Lee Knuth LIVE at Shirley\'s Piano Bar', desc: 'Chicago-based vocalist, multi-instrumentalist, and performer with deep live-entertainment experience.' },
      { date: 'Saturday, May 2, 2026', shortDate: 'May 2', startDate: '2026-05-02T20:00:00-05:00', time: '8:00 PM - 11:59 PM', title: "Peter Miletic LIVE at Shirley's Piano Bar", desc: 'Piano music built for showmanship, listening pleasure, private events, and request-friendly rooms.' },
      { date: 'Sunday, May 3, 2026', shortDate: 'May 3', startDate: '2026-05-03T19:00:00-05:00', time: '7:00 PM - 10:00 PM', title: 'Emily Popli LIVE at Shirley\'s Piano Bar', desc: 'Chicago-based singer-songwriter blending soul, pop, country, and original storytelling.' },
      { date: 'Tuesday, May 5, 2026', shortDate: 'May 5', startDate: '2026-05-05T19:00:00-05:00', time: '7:00 PM - 11:00 PM', title: 'Songwriter Showcase Night', desc: 'Local artists share original songs and stories in an intimate, supportive room.' },
      { date: 'Thursday, May 7, 2026', shortDate: 'May 7', startDate: '2026-05-07T20:00:00-05:00', time: '8:00 PM - 11:00 PM', title: 'Adam Nelson LIVE at Shirley\'s Piano Bar', desc: 'Interactive all-request piano performance, original music, and audience engagement.' },
      { date: 'Friday, May 8, 2026', shortDate: 'May 8', startDate: '2026-05-08T20:00:00-05:00', time: '8:00 PM - 11:59 PM', title: "Kaleen Dolan LIVE at Shirley's Piano Bar", desc: 'Chicago performer covering pop, rock, hip hop, rap, jazz, blues, soul, and piano-bar favorites.' },
      { date: 'Sunday, May 24, 2026', shortDate: 'May 24', startDate: '2026-05-24T19:00:00-05:00', time: '7:00 PM - 10:00 PM', title: "Brandon Covelli LIVE at Shirley's Piano Bar", desc: 'Classically trained pianist focused on jazz and contemporary music; guest reviews specifically call out Brandon nights.' },
    ],
    cta: { label: 'Ask about a private music night', href: '/parties' },
  },

  parties: {
    eyebrow: '(private parties and buyouts)',
    h1: 'Private Parties & Buyouts',
    intro:
      "For birthdays, after-dinner groups, client nights, holiday parties, rehearsal after-parties, or a full venue buyout, Shirley's turns the room into a song-request celebration rather than a standard banquet booking.",
    heroImage: { src: img.party, alt: "Private party at Shirley's Piano Bar" },
    options: [
      {
        heading: 'Reserved Area',
        body: 'A designated space for smaller groups that want live music, cocktails, and the energy of the room without losing the intimate feel people mention in reviews.',
      },
      {
        heading: 'Partial Buyout',
        body: 'More exclusivity for mid-size groups while keeping the late-night pulse of Shirley\'s intact.',
      },
      {
        heading: 'Full Venue Buyout',
        body: 'Capacity up to 60 guests, with seating for 45, custom music flow, request notes, and a private-room feel.',
      },
    ],
    customizations: [
      'Signature cocktail naming',
      'Song dedications',
      'Performer-fit notes for the request style you want',
      'Curated themes like Sinatra & Standards or 80s Piano Night',
      'Extended late-night hours',
      'Custom beverage packages',
    ],
  },

  about: {
    h1Part1: 'A piano bar named for',
    h1Part2: 'Shirley',
    stats: [
      { value: '60', label: 'Private-event capacity' },
      { value: '45', label: 'Seated guests' },
      { value: '4', label: 'Public nights weekly' },
      { value: '1', label: 'Downtown Barrington room' },
    ],
    story:
      'Our story begins with Shirley Engblom, a spirited host married to Verne, a Chicagoland musician. Their Skokie gatherings were known for live music, drinks, and laughter: Verne was the piano man, Shirley was the social butterfly, and together they were the life of the party.',
    aboutGallery: [
      { src: img.storyCouple, alt: 'Shirley and Verne in a historic photo' },
      { src: img.shirley, alt: 'Portrait of Shirley Engblom' },
    ],
    performersHeading: 'Performers and room rituals',
    regulars: [
      {
        heading: 'All-request piano',
        body: 'The core Shirley gesture: players invite the room in and let requests shape the night.',
        photo: { src: img.venuePiano, alt: "Piano stage at Shirley's" },
      },
      {
        heading: 'Local voices',
        body: 'Songwriter Showcase nights give Barrington a listening-room moment inside a cocktail bar.',
        photo: { src: img.venueRoom, alt: "Lounge tables during a Shirley's music night" },
      },
      {
        heading: 'Celebration energy',
        body: 'The story only lands when guests can imagine their table becoming part of the music.',
        photo: { src: img.party, alt: "Group celebration at Shirley's" },
      },
    ],
  },

  contact: {
    eyebrow: '(visit and contact)',
    h1: "Visit Shirley's",
    bookNow: {
      heading: 'Contact',
      viaEmail: { label: 'Email', value: 'info@shirleyspianobar.com', href: 'mailto:info@shirleyspianobar.com' },
      whatsapp: { label: 'Phone', value: '224-888-1880', href: 'tel:2248881880' },
    },
    visit: {
      heading: 'Visit us',
      address: [
        "Shirley's Piano Bar",
        '104 North Cook Street',
        'Barrington, Illinois 60010',
      ],
      directionsLink: 'https://www.google.com/maps/search/?api=1&query=104+North+Cook+Street+Barrington+IL+60010',
      hoursHeading: 'Hours',
      hours: [
        'Monday | Private events only',
        'Tuesday - Thursday | 6:00 pm - 1:00 am',
        'Friday - Saturday | 6:00 pm - 2:00 am',
        'Sunday | 4:00 pm - 12:00 am',
      ],
    },
    socials: {
      heading: 'Follow',
      links: [
        { label: 'Facebook', href: 'https://www.facebook.com/shirleyspianobar/' },
        { label: 'Instagram', href: 'https://www.instagram.com/shirleyspianobar/' },
      ],
    },
    form: {
      heading: 'Plan a Shirley night',
      fields: {
        fullName: { label: 'Full name', placeholder: 'Name' },
        email: { label: 'Email', placeholder: 'Email' },
        phone: { label: 'Phone', placeholder: 'Phone' },
        website: { label: 'Event date', placeholder: 'Preferred date or month' },
        howFound: { label: 'Occasion', placeholder: 'Select' },
        interestLabel: 'What are you interested in?',
        interestOptions: ['Reserved area', 'Partial buyout', 'Full venue buyout', 'Live music question'],
        message: { label: 'Tell us more', placeholder: 'Guest count, timing, music ideas, and anything you want the night to feel like' },
      },
      submit: 'Send inquiry',
    },
    interiorStrip: [
      { src: img.venueBar, alt: "Shirley's bar interior" },
      { src: img.venueRoom, alt: "Tables and candles at Shirley's" },
      { src: img.venuePiano, alt: "Live music setup at Shirley's" },
      { src: img.venueShelf, alt: "Back bar at Shirley's" },
    ],
    faqHeading: 'FAQ',
    faqs: [
      {
        q: "What are Shirley's public hours?",
        a: 'Monday is private-events only. Public hours are Tuesday through Thursday from 6:00 pm to 1:00 am, Friday and Saturday from 6:00 pm to 2:00 am, and Sunday from 4:00 pm to midnight.',
      },
      {
        q: 'Where is the bar located?',
        a: 'Shirley\'s is at 104 North Cook Street in downtown Barrington, Illinois, near the Metra Northwest Line.',
      },
      {
        q: 'Do you host private parties?',
        a: 'Yes. Shirley\'s offers reserved areas, partial buyouts, and full venue buyouts with capacity up to 60 guests and seating for 45.',
      },
      {
        q: 'Is there a zero-proof menu?',
        a: 'Yes. The menu includes zero-proof cocktails, non-alcoholic wine, and non-alcoholic beer.',
      },
      {
        q: 'Can guests request songs?',
        a: 'Song requests are part of the identity of the room, especially on piano-led nights. Each performer has a different catalog and style, so checking the calendar helps you pick the right night.',
      },
    ],
  },

  footer: {
    visitHeading: 'Visit us',
    contactHeading: 'Contact',
    socialsHeading: 'Follow',
    links: [
      { label: 'home', href: '/' },
      { label: 'live music', href: '/live-music' },
      { label: 'menu', href: '/menu' },
      { label: 'parties', href: '/parties' },
      { label: 'story', href: '/story' },
      { label: 'visit', href: '/contact' },
    ],
    colophon: "Prospect build for Shirley's Piano Bar.",
  },
} as const;

export type Content = typeof content;
