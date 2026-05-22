// content.example.ts — DiBenedetto Trattoria fork of gusto-01 (cucina-bella v2 base)
//
// Pre-fork audit: sites/dibenedetto-trattoria/audit.md
// Lead source: research/lead-qualification/schaumburg-leads-2026-05-02.md
//
// REGISTER NOTE — read before editing copy.
// DiBenedetto is heritage Italian trattoria + chef-owner + intimate strip-mall
// room + live music Wed/Fri/Sat. Sit it at $$ "neighborhood-Italian-with-
// occasion." gusto-01's date-night-trattoria default is acceptable here
// (matches the "live music + dancing" register), unlike Cucina Bella's
// family-casual register where it had to be softened.
//
// VERIFIED FACTS (live-fetched 2026-05-02):
//   • Address: 1766 W Algonquin Rd, Hoffman Estates, IL 60192
//   • Phone: (847) 496-5016
//   • Email: Dibenedettotrattoria@gmail.com
//   • Hours: Mon–Thu 4–9pm · Fri–Sat 4–10pm · Sun 4–8pm (dinner only, closed lunch)
//   • Chef-owner: Vittorio "Vito" Di Benedetto (signs replies "Mille Grazie!")
//   • Marketing Director: Denise A
//   • Founded: ~mid-2012 (oldest review Sep 2012 says "opened about 5 months ago")
//   • Live music + dancing: Wed / Fri / Sat (per Tripadvisor + Yelp listings)
//   • Private dining room: ~50 capacity
//   • Reservation widget: SpotHopper-managed (preserve-stack)
//   • Aggregate ratings: Tripadvisor 4.2★/41 (#7 of 104 Hoffman Estates),
//     Yelp 4.5★/143, OpenTable 4.6★/257, Birdeye 4.5★/326 (multi-source)
//
// Photo strategy:
//   • V1 placeholders: re-using cucina-bella warm Italian-American shots
//     (consistent register). Replace with real DiBenedetto photography
//     before pitch ship — owner shoot priority is (1) chef Vittorio at the
//     pass, (2) signature Veal Napoleon, (3) live-music night room shot.

const phoneMain = '+18474965016';
const reservationUrl =
  'https://www.spothopperapp.com/widgets/reservation/dibenedettotrattoria';

export const content = {
  brand: {
    name: 'DiBenedetto Trattoria',
    legalName: 'DiBenedetto Trattoria',
    tagline: 'Family Italian on Algonquin Road since 2012',
    description:
      "Chef-owned Italian trattoria in Hoffman Estates — pasta made-to-order, live music Wednesday, Friday, and Saturday, and Vittorio at the door. Mille grazie for 13 years.",
    since: '2012',
    city: 'Hoffman Estates',
    address: {
      line1: '1766 W Algonquin Rd',
      line2: 'Hoffman Estates, IL 60192',
      country: 'United States',
    },
    phone: phoneMain,
    phoneDisplay: '(847) 496-5016',
    email: 'Dibenedettotrattoria@gmail.com',
    mapEmbed:
      'https://maps.google.com/maps?q=1766+W+Algonquin+Rd%2C+Hoffman+Estates%2C+IL+60192&z=15&output=embed',
    mapLink:
      'https://www.google.com/maps/dir/?api=1&destination=1766+W+Algonquin+Rd%2C+Hoffman+Estates%2C+IL+60192',
    reservationUrl,
    reservationProvider: 'SpotHopper',
    social: [
      {
        label: 'Tripadvisor',
        href: 'https://www.tripadvisor.com/Restaurant_Review-g36141-d3472618-Reviews-DiBenedetto_Trattoria-Hoffman_Estates_Illinois.html',
      },
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/DiBenedettoTrattoria/',
      },
    ],
    sisterVenues: [] as Array<{ name: string; city: string; url: string }>,
    cateringPhone: phoneMain,
    cateringPhoneDisplay: '(847) 496-5016',
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 1 as const, open: '16:00', close: '21:00' },
        { day: 2 as const, open: '16:00', close: '21:00' },
        { day: 3 as const, open: '16:00', close: '21:00' },
        { day: 4 as const, open: '16:00', close: '21:00' },
        { day: 5 as const, open: '16:00', close: '22:00' },
        { day: 6 as const, open: '16:00', close: '22:00' },
        { day: 0 as const, open: '16:00', close: '20:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.0925892, lng: -88.1239045 },
    reservationNote:
      'Dinner only. Reservations on the SpotHopper widget. Walk-ins welcome at the bar; live music nights book up early.',
  },

  nav: {
    primary: [
      { label: 'Menu', href: '/menu' },
      { label: 'Reserve', href: reservationUrl },
      { label: 'About', href: '/about' },
      { label: 'Visit', href: '/contact' },
    ],
  },

  photos: {
    diningRoomBrick: '/images/dibenedetto/food9.jpg',
    barWide: '/images/dibenedetto/wine-bar.jpg',
    threePlateSpread: '/images/dibenedetto/food7.jpg',
    chickenParmRedSauce: '/images/dibenedetto/food6.jpg',
    fruttiDiMare: '/images/dibenedetto/food5.jpg',
    redSaucePasta: '/images/dibenedetto/red-sauce-pasta.jpg',
    carbonara: '/images/dibenedetto/carbonara.jpg',
    pappardelleMushroom: '/images/dibenedetto/pappardelle-mushroom.jpg',
    cocktails: '/images/dibenedetto/cocktails.jpg',
    dessertMartini: '/images/dibenedetto/dessert-martini.jpg',
    tiramisu: '/images/dibenedetto/tiramisu.jpg',
    pannaCotta: '/images/dibenedetto/panna-cotta.jpg',
    logoTomato: '/images/dibenedetto/logo-tomato.png',
  },

  home: {
    hero: {
      mainPhoto: '/images/dibenedetto/hero-dinner.jpg',
      mainPhotoAlt:
        'Italian dinner table with wine, bread, and a plate being served — DiBenedetto Trattoria',
      secondaryCards: [
        {
          chip: 'Italian Kitchen',
          photo: '/images/dibenedetto/food7.jpg',
          alt: "Three-plate spread of DiBenedetto's classics",
          href: '/menu',
        },
        {
          chip: 'Wine & Music',
          photo: '/images/dibenedetto/wine-bar.jpg',
          alt: 'Warm bar with wine bottles where live music plays Wed/Fri/Sat',
          href: '/contact',
        },
      ],
      testimonial: {
        quote: 'DiBenedetto Trattoria',
        wordmark: true,
        body:
          "Chef-owner Vittorio cooks the room he owns. Pasta made-to-order. Live music Wed · Fri · Sat. Mille grazie for 13 years.",
        rating: 4.5,
        reviewCount: 326,
        ratingLabel: 'Multi-platform avg',
        reviewLabel: '#7 of 104 in Hoffman Estates',
        primaryCta: { label: 'Reserve a Table', href: reservationUrl, external: true },
        secondaryCta: { label: 'View Menu', href: '/menu' },
      },
      sidebar: {
        ctaLabel: 'Reserve a Table',
        ctaHref: reservationUrl,
        hoursHeading: 'Dinner Hours',
        hours: [
          { day: 'Monday', time: '4:00 PM – 9:00 PM' },
          { day: 'Tuesday', time: '4:00 PM – 9:00 PM' },
          { day: 'Wednesday', time: '4:00 PM – 9:00 PM · Live Music' },
          { day: 'Thursday', time: '4:00 PM – 9:00 PM' },
          { day: 'Friday', time: '4:00 PM – 10:00 PM · Live Music' },
          { day: 'Saturday', time: '4:00 PM – 10:00 PM · Live Music' },
          { day: 'Sunday', time: '4:00 PM – 8:00 PM' },
        ],
      },
    },

    proof: {
      eyebrow: 'Already Loved in Hoffman Estates',
      heading: "13 years of regulars the website has been hiding.",
      body:
        "DiBenedetto Trattoria has been quietly cooking for Hoffman Estates since 2012 — Tripadvisor #7 of 104, OpenTable 4.6★, 326 reviews aggregated across platforms. Until now those signals lived everywhere except this site.",
      stats: [
        { value: 'Since 2012', label: 'Chef-owned by Vittorio Di Benedetto' },
        { value: '#7 of 104', label: "Tripadvisor — Hoffman Estates restaurants" },
        { value: '4.6★ / 257', label: 'OpenTable diners' },
        { value: '326 reviews', label: 'Aggregate · Google · Yelp · Tripadvisor' },
      ],
    },

    story: {
      eyebrow: 'A Chef and the Room He Owns',
      heading: 'Vittorio cooks the room he owns.',
      body:
        "DiBenedetto Trattoria opened on Algonquin Road in 2012 with one idea: that dinner is better when the chef walks the floor. Thirteen years later that's still the rule. Vittorio cooks, comps the limoncello when the table's full, and goes off-menu when a regular asks. The room is small on purpose. Live music plays Wednesday, Friday, and Saturday — same as the day it opened.",
      quote: '"Mille grazie." — Vittorio',
      photo: '/images/dibenedetto/food7.jpg',
      photoAlt: 'A spread of classic DiBenedetto plates',
    },

    signatureDishes: {
      eyebrow: 'On the Menu',
      heading: 'The dishes regulars come back for.',
      items: [
        {
          name: 'Veal Napoleon',
          desc:
            "Veal layered with eggplant, Gorgonzola, and parmigiana, topped with house Suprema sauce — the dish Denise wrote a paragraph about.",
          price: '$32',
          photo: '/images/dibenedetto/food6.jpg',
        },
        {
          name: 'Orecchiette Turiddu',
          desc:
            "House specialty pasta, Southern-Italian roots, mentioned by name across Google, Yelp, and Tripadvisor.",
          price: '$26',
          photo: '/images/dibenedetto/red-sauce-pasta.jpg',
        },
        {
          name: 'Chicken Francese',
          desc:
            "Lightly egg-dipped, butter, white wine, lemon — a regular order on the live-music nights.",
          price: '$26',
          photo: '/images/dibenedetto/food7.jpg',
        },
      ],
    },

    wine: {
      eyebrow: 'Wine, Bar, and Live Music',
      heading: 'A small bar with three nights of live music.',
      body:
        "The bar runs Italian wines by the glass and the bottle, dessert martinis, espresso, and after-dinner liqueurs. Wednesday, Friday, and Saturday a singer plays from the corner where regulars sit. \"Added bonus was live music playing,\" — jimpinman, Tripadvisor.",
      photo: '/images/dibenedetto/wine-bar.jpg',
      photoAlt: 'DiBenedetto bar with wine bottles and warm light',
      badges: ['Italian Wine', 'Live Music Wed · Fri · Sat', 'Walk-Ins Welcome', 'Private Room (50)'],
    },

    reviews: {
      eyebrow: "What Guests Are Saying",
      heading: 'Five-star reviews from real guests, in their own words.',
      sourceLabel: 'Read all reviews on Google',
      sourceHref:
        'https://www.google.com/maps/place/DiBenedetto+Trattoria/@42.0925892,-88.1239045,17z',
      items: [
        {
          quote:
            "From start to finish amazing place. The space was packed and yet the chef prepared something special for us that was not on the menu. The best Veal Napoleon we have ever tasted. The owner checked on us a few times and offered us complimentary desserts.",
          author: 'Denise M',
          theme: 'Veal Napoleon · Owner came over · 5/5',
          rating: 5,
        },
        {
          quote:
            "We fell into this family restaurant by luck and plan on making it an annual event. Friday night they had a female singer that was WONDERFUL. Classic Italian food in generous quantities. Fine wine and a great atmosphere rounded out a perfect evening.",
          author: 'Brad K',
          theme: 'Live music · Birthday · 5/5',
          rating: 5,
        },
        {
          quote:
            "Owner is very gracious and makes you feel at home with every visit. Has become a favorite restaurant due to quality of food and feeling like visiting friends.",
          author: 'MWG',
          theme: 'Owner-as-host · 5/5',
          rating: 5,
        },
        {
          quote:
            "I had Fettuccine Harry's Bar pasta. All of the pasta ingredients tasted fresh. My server Elena met all my needs and was very patient when I asked many questions about the menu.",
          author: 'Jim M',
          theme: "Fettuccine Harry's Bar · Elena · 5/5",
          rating: 5,
        },
        {
          quote:
            "Located in a small strip mall you wouldn't expect such great quality Italian food. Our gourmet group loved the chicken Francese, lasagna, clams, pasta primavera and orecchiette turiddu. Not your run of the mill Italian.",
          author: 'Ginger0529',
          theme: 'Strip-mall surprise · 5/5',
          rating: 5,
        },
        {
          quote:
            "I had one of the absolutely most flavorful gluten free meals ever. Portions were large. Last bite was as good as the first.",
          author: 'drfate1',
          theme: 'Gluten-free done right · 5/5',
          rating: 5,
        },
        {
          quote:
            "The veal was so tender you didn't even need a knife to cut into it. And the grilled calamari is so tender and prepared so perfectly. And they had a singer while dining.",
          author: 'Moneysal',
          theme: 'Veal · Grilled calamari · 5/5',
          rating: 5,
        },
        {
          quote:
            "Excellent authentic Italian food, good wines, and friendly staff.",
          author: 'Dave Boesche',
          theme: 'Authentic + wine · 5/5',
          rating: 5,
        },
      ],
    },
  },

  menu: {
    hero: {
      photo: '/images/dibenedetto/red-sauce-pasta.jpg',
      photoAlt: 'Pasta in DiBenedetto red sauce',
      testimonial: {
        quote: 'Everything is made to order. Patience is appreciated.',
        body:
          "Antipasti, soups & salads, house specials, build-your-own pasta, chicken & veal, fish, dessert, and dessert martinis at the bar. Dinner only — reservations recommended on live-music nights.",
        rating: 4.5,
        reviewCount: 326,
        ratingLabel: 'Aggregate',
        reviewLabel: 'Google · Yelp · OpenTable · Tripadvisor',
      },
    },
    sections: [
      {
        label: 'Antipasti | Appetizers',
        items: [
          { name: 'Stuffed Mushrooms', desc: 'House-made, four-cheese stuffing in butter sauce — the appetizer named in dozens of public reviews', price: '$14', photo: '/images/dibenedetto/food7.jpg' },
          { name: 'Bruschetta', desc: 'Toasted Italian bread, heirloom tomatoes, basil, garlic, parmigiana', price: '$11', photo: '/images/dibenedetto/food7.jpg' },
          { name: 'Fried Calamari', desc: 'Lightly battered, served with marinara', price: '$15', photo: '/images/dibenedetto/food5.jpg' },
          { name: 'Grilled Calamari', desc: '"So tender and prepared so perfectly" — Moneysal. Sun-dried tomatoes, asparagus.', price: '$17', photo: '/images/dibenedetto/food5.jpg' },
          { name: 'Smelt', desc: '"What a portion. Excellent." — BelikinBeer. Crisp-fried smelt, lemon.', price: '$13', photo: '/images/dibenedetto/food5.jpg' },
          { name: 'Steamed Clams or Mussels', desc: 'Red or white sauce, garlic-forward', price: '$16', photo: '/images/dibenedetto/food5.jpg' },
        ],
      },
      {
        label: 'Zuppa & Insalate | Soup & Salad',
        items: [
          { name: 'Minestrone', desc: 'Fresh vegetables and herbs (cup or bowl)', price: '$6 / $9', photo: '/images/dibenedetto/food6.jpg' },
          { name: 'Pasta e Fagioli', desc: 'Fresh vegetables and beans, topped with pasta', price: '$6 / $9', photo: '/images/dibenedetto/food6.jpg' },
          { name: 'Caesar Salad', desc: 'Made to order, classic dressing', price: '$10', photo: '/images/dibenedetto/food7.jpg' },
          { name: 'House Salad', desc: 'Romaine, tomatoes, cucumbers, olives, peperoncinis', price: '$9', photo: '/images/dibenedetto/food7.jpg' },
          { name: 'Gorgonzola Salad', desc: 'Romaine, pears, Gorgonzola, candied pecans', price: '$12', photo: '/images/dibenedetto/food7.jpg' },
        ],
      },
      {
        label: 'Specials Della Casa | House Specials',
        items: [
          { name: 'Veal Napoleon', desc: '"The best Veal Napoleon we have ever tasted with a home made Supreme Sauce. Enough for two meals." — Denise M. Veal layered with eggplant, Gorgonzola, parmigiana, fresh mozzarella, suprema sauce.', price: '$32', photo: '/images/dibenedetto/food6.jpg' },
          { name: 'Orecchiette Turiddu', desc: 'House specialty pasta, named in multiple public reviews. Southern-Italian roots.', price: '$26', photo: '/images/dibenedetto/red-sauce-pasta.jpg' },
          { name: "Lasagna Romana", desc: 'House-made meat lasagna, slow-baked, named across Google + Yelp + Tripadvisor.', price: '$24', photo: '/images/dibenedetto/red-sauce-pasta.jpg' },
          { name: 'Saltimbocca (Veal or Chicken)', desc: 'Topped with prosciutto and mozzarella, baked in sherry-wine sauce over pasta.', price: '$28 / $32', photo: '/images/dibenedetto/food7.jpg' },
          { name: 'Osso Buco', desc: '"The ossobuco is braised so it is very soft." — Vittorio. Bone-in braised veal shank over risotto.', price: '$36', photo: '/images/dibenedetto/food6.jpg' },
          { name: 'Risotto of the Day', desc: 'Ask your server.', price: 'Market', photo: '/images/dibenedetto/pappardelle-mushroom.jpg' },
        ],
      },
      {
        label: 'Personalizza La Tua Pasta | Build-Your-Own Pasta',
        items: [
          { name: 'Marinara', desc: 'Tomatoes, garlic, herbs', price: '$18', photo: '/images/dibenedetto/red-sauce-pasta.jpg' },
          { name: 'Bolognese', desc: 'Hearty meat sauce', price: '$20', photo: '/images/dibenedetto/red-sauce-pasta.jpg' },
          { name: 'Suprema', desc: 'Alfredo + marinara, the house combo', price: '$19', photo: '/images/dibenedetto/carbonara.jpg' },
          { name: 'Vodka', desc: 'Tomatoes, vodka, cream', price: '$20', photo: '/images/dibenedetto/carbonara.jpg' },
          { name: 'Carbonara', desc: 'Cream, prosciutto, eggs', price: '$22', photo: '/images/dibenedetto/carbonara.jpg' },
          { name: "Fettuccine Harry's Bar", desc: '"All of the pasta ingredients tasted fresh." — Jim M', price: '$22', photo: '/images/dibenedetto/carbonara.jpg' },
          { name: 'Aglio e Olio', desc: 'Garlic, olive oil, parmigiana, crushed red pepper', price: '$16', photo: '/images/dibenedetto/pappardelle-mushroom.jpg' },
          { name: 'Brandy Cream', desc: 'Bow-tie pasta, brandy cream sauce', price: '$22', photo: '/images/dibenedetto/carbonara.jpg' },
        ],
      },
      {
        label: 'Pollo & Vitello | Chicken & Veal',
        items: [
          { name: 'Chicken Francese', desc: '"The chicken Francese… cut above the usual." — Ginger0529. Egg-dipped, butter, white wine, lemon.', price: '$26', photo: '/images/dibenedetto/food7.jpg' },
          { name: 'Veal Francese', desc: 'Same preparation, with veal medallions', price: '$32', photo: '/images/dibenedetto/food7.jpg' },
          { name: 'Chicken Marsala', desc: 'Mushrooms in sherry-wine sauce, over pasta', price: '$26', photo: '/images/dibenedetto/pappardelle-mushroom.jpg' },
          { name: 'Veal Marsala', desc: 'Same, with veal medallions', price: '$32', photo: '/images/dibenedetto/pappardelle-mushroom.jpg' },
          { name: 'Chicken Piccata', desc: 'Lemon, capers, white-wine sauce, over pasta', price: '$26', photo: '/images/dibenedetto/food7.jpg' },
          { name: 'Veal Piccata', desc: 'Same, with veal medallions', price: '$32', photo: '/images/dibenedetto/food7.jpg' },
          { name: 'Chicken Parmigiana', desc: 'Lightly breaded, baked with marinara and mozzarella, over spaghetti', price: '$24', photo: '/images/dibenedetto/food6.jpg' },
          { name: 'Veal Parmigiana', desc: 'Same, with veal cutlets', price: '$30', photo: '/images/dibenedetto/food6.jpg' },
        ],
      },
      {
        label: 'Pesce | Fish',
        items: [
          { name: 'Linguine alle Vongole', desc: 'Little-neck clams, red or white sauce, over linguine', price: '$28', photo: '/images/dibenedetto/food5.jpg' },
          { name: 'Linguine alle Cozze', desc: 'Mussels, red or white sauce, over linguine', price: '$26', photo: '/images/dibenedetto/food5.jpg' },
          { name: 'Shrimp Scampi', desc: 'Garlic, butter, white wine, lemon, over linguine', price: '$28', photo: '/images/dibenedetto/food5.jpg' },
          { name: 'Salmon', desc: 'Pan-roasted, lemon-butter, served with seasonal vegetables', price: '$28', photo: '/images/dibenedetto/food5.jpg' },
          { name: 'Fresh Fish of the Day', desc: 'Ask your server', price: 'Market', photo: '/images/dibenedetto/food5.jpg' },
        ],
      },
      {
        label: 'Dolci | Dessert',
        items: [
          { name: 'Limoncello Cake', desc: '"I loved the Lemoncello cake for dessert." — LadyshipII. House-made.', price: '$9', photo: '/images/dibenedetto/panna-cotta.jpg' },
          { name: 'Tiramisu', desc: 'Mascarpone, ladyfingers, espresso, cocoa', price: '$8', photo: '/images/dibenedetto/tiramisu.jpg' },
          { name: 'Cannoli', desc: 'Crisp shells, sweet ricotta, candied citrus', price: '$8', photo: '/images/dibenedetto/panna-cotta.jpg' },
          { name: 'Affogato', desc: 'Vanilla gelato, hot espresso poured tableside', price: '$8', photo: '/images/dibenedetto/dessert-martini.jpg' },
        ],
      },
      {
        label: 'Hot Drinks, Dessert Martinis & Liqueurs',
        items: [
          { name: 'Espressotini', desc: 'Espresso dessert martini', price: '$13', photo: '/images/dibenedetto/dessert-martini.jpg' },
          { name: 'Chocolatini', desc: 'Chocolate dessert martini', price: '$13', photo: '/images/dibenedetto/dessert-martini.jpg' },
          { name: 'Espresso / Cappuccino', desc: 'Italian coffee', price: '$5', photo: '/images/dibenedetto/cocktails.jpg' },
          { name: 'Liqueurs', desc: 'Limoncello · Frangelico · Disaronno · Sambuca · Grand Marnier', price: '$10', photo: '/images/dibenedetto/cocktails.jpg' },
        ],
      },
      {
        label: 'Private Dining & Catering',
        items: [
          { name: 'Private Room (50 seats)', desc: 'Banquets, rehearsal dinners, birthdays, corporate. Owner Vittorio plans the menu with you.', price: 'Inquire', photo: '/images/dibenedetto/food9.jpg' },
          { name: 'Off-Premise Catering', desc: 'Trays, family-style, holidays. Call to plan.', price: 'Inquire', photo: '/images/dibenedetto/food7.jpg' },
        ],
      },
    ],
  },

  about: {
    hero: {
      title: 'About DiBenedetto Trattoria',
      intro:
        "Family Italian on Algonquin Road since 2012 — a strip-mall room run by a chef who walks the floor, a singer in the corner three nights a week, and a kitchen that bends the menu when you ask.",
      leftPhoto: '/images/dibenedetto/food9.jpg',
      leftAlt: 'DiBenedetto dining room, warm light',
      rightPhoto: '/images/dibenedetto/wine-bar.jpg',
      rightAlt: 'Bar where the live music plays',
    },
    manifesto: {
      heading: 'Vittorio cooks the room he owns.',
      body: [
        "DiBenedetto Trattoria opened on Algonquin Road in 2012. Chef-owner Vittorio Di Benedetto runs the kitchen and walks the dining room — the same way for thirteen years.",
        "The room is small on purpose. White tablecloths, brick on the walls, a bar built for company. Wednesday, Friday, and Saturday a singer plays from the corner. The menu reads classic Italian — veal, pasta made-to-order, fish, the Veal Napoleon a guest wrote a paragraph about — but the rule of the kitchen is older than the menu: if you ask, and we have the ingredients, we will make it.",
      ],
    },
    owners: {
      name: 'Chef Vittorio Di Benedetto',
      bio:
        "Vittorio is the chef. He is also the owner. On most nights he is the host, the table-checker, and the person who comps the limoncello when you say you're full. He signs his replies \"Mille Grazie!\" — and he means it.",
      bio2:
        "Marketing and events run through Denise. The kitchen runs through Vittorio. The promise is the same as it was on opening night in 2012: a family meal, a fair price, and a room that has been quietly running for thirteen years.",
      cta: { label: 'Reserve a Table', href: reservationUrl },
    },
  },

  contact: {
    heroTitle: 'Visit Us',
    heroSubtitle:
      "Dinner only. Reserve on the SpotHopper widget below — walk-ins welcome at the bar. Live music nights (Wed / Fri / Sat) book up early.",
    heroPhoto: '/images/dibenedetto/food9.jpg',
    heroPhotoAlt: 'DiBenedetto dining room',
    formHeading: 'Get in touch',
    formSubheading:
      "For reservations, please use the widget. For private events (50-seat room), email or call below.",
    formFields: {
      nameLabel: 'Your name',
      emailLabel: 'Email address',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      submitLabel: 'Send message',
    },
    infoHeading: 'Find us',
    mapCaption: 'Forest View Plaza, 1766 W Algonquin Rd, Hoffman Estates.',
  },
};
