// content.example.ts \u2014 Cucina Bella Algonquin fork of gusto-01
//
// REGISTER NOTE \u2014 read before editing copy.
// gusto-01's date-night-trattoria default is the Walnut failure mode for this
// brand. Cucina Bella is family-casual Italian-American, dinner-only on Main
// Street, not $$-$$$ date-night. Soften via copy tone, photo selection, hero
// composition, and proof framing \u2014 palette/type stay locked.
//
// VERIFIED FACTS (live-fetched from cucinabellaalgonquin.com on 2026-04-28
// via the site's own /site-config.json + /assets/menus/algonquin.csv):
//   \u2022 Address: 220 South Main Street, Algonquin, IL 60102
//   \u2022 Phone: 847-458-2504 main / 847-456-1012 catering
//   \u2022 Email: info@cucinabellaalgonquin.com
//   \u2022 Hours: DINNER ONLY (Mon closed; Tue\u2013Thu 4\u20139pm; Fri\u2013Sat 4\u201310pm; Sun 4\u20139pm)
//   \u2022 Toast Tables URL captured from homepage RSVP button (HTTP 200 verified)
//   \u2022 Origin: Sannicandro, Italy. "Tony's parents started a family of eight
//     children in Sannicandro" \u2014 verbatim from current site.
//   \u2022 Sister venues: cucinabellagalena.com + bellaswoodfirepizza.com
//   \u2022 Tripadvisor: 4.5 / 428 reviews / #2 of 121 in Algonquin (per
//     deep-research doc 2026-04-27).
//
// UNVERIFIED (still owner-input only):
//   \u2022 Founding year \u2014 not present anywhere on current site or sister sites.
//   \u2022 Specific award name \u2014 site says "Award-Winning" without naming one.
//
// Photo strategy:
//   \u2022 First-party (downloaded from cucinabellaalgonquin.com): food5
//     (frutti di mare), food6 (chicken parm), food7 (3-plate spread), food9
//     (brick dining room). These are real Cucina Bella photos.
//   \u2022 Unsplash CC0 (downloaded 2026-04-28): tiramisu, carbonara,
//     pappardelle-mushroom, red-sauce-pasta, bar, dessert-martini,
//     panna-cotta, cocktails. Used for items where the original
//     first-party shots were low-quality or missing.

const phoneMain = '+18474582504';
const phoneCatering = '+18474561012';
const toastReservationUrl =
  'https://tables.toasttab.com/restaurants/192542ce-26a3-475f-a72a-745e78307085/reserve';

export const content = {
  brand: {
    name: 'Cucina Bella',
    legalName: 'Cucina Bella Algonquin',
    tagline: 'Family-run Italian on Main Street, Algonquin',
    description:
      'Family-run dinner kitchen on Main Street in Algonquin \u2014 Sannicandro recipes, red-sauce classics, brick-walled dining room, full bar.',
    since: '',
    city: 'Algonquin',
    address: {
      line1: '220 South Main Street',
      line2: 'Algonquin, IL 60102',
      country: 'United States',
    },
    phone: phoneMain,
    phoneDisplay: '(847) 458-2504',
    cateringPhone: phoneCatering,
    cateringPhoneDisplay: '(847) 456-1012',
    email: 'info@cucinabellaalgonquin.com',
    mapEmbed:
      'https://maps.google.com/maps?q=220%20South%20Main%20Street%2C%20Algonquin%2C%20IL%2060102&z=15&output=embed',
    mapLink:
      'https://www.google.com/maps/dir/?api=1&destination=220%20South%20Main%20Street%2C%20Algonquin%2C%20IL%2060102',
    reservationUrl: toastReservationUrl,
    reservationProvider: 'Toast Tables',
    social: [
      {
        label: 'Tripadvisor',
        href: 'https://www.tripadvisor.com/Restaurant_Review-g35517-d2210127-Reviews-Cucina_Bella-Algonquin_Illinois.html',
      },
    ],
    sisterVenues: [
      {
        name: 'Cucina Bella Galena',
        city: 'Galena, IL',
        url: 'https://cucinabellagalena.com',
      },
      {
        name: "Bella's Woodfire Pizza",
        city: 'Algonquin, IL',
        url: 'https://bellaswoodfirepizza.com',
      },
    ],
    // Verified hours from Cucina Bella's own /site-config.json (2026-04-28):
    //   Mon closed, Tue\u2013Thu 16:00\u201321:00, Fri\u2013Sat 16:00\u201322:00, Sun 16:00\u201321:00.
    hoursConfig: {
      timezone: 'America/Chicago',
      ranges: [
        { day: 2 as const, open: '16:00', close: '21:00' },
        { day: 3 as const, open: '16:00', close: '21:00' },
        { day: 4 as const, open: '16:00', close: '21:00' },
        { day: 5 as const, open: '16:00', close: '22:00' },
        { day: 6 as const, open: '16:00', close: '22:00' },
        { day: 0 as const, open: '16:00', close: '21:00' },
      ],
      closures: [],
    },
    geo: { lat: 42.16557, lng: -88.29412 },
    reservationNote:
      'Dinner only. Reservations on Toast Tables. Walk-ins welcome at the bar.',
  },

  nav: {
    primary: [
      { label: 'Menu', href: '/menu' },
      { label: 'Reserve', href: toastReservationUrl },
      { label: 'About', href: '/about' },
      { label: 'Visit', href: '/contact' },
    ],
  },

  photos: {
    diningRoomBrick: '/images/cucina-bella/food9.jpg',
    barWide: '/images/cucina-bella/wine-bar.jpg',
    threePlateSpread: '/images/cucina-bella/food7.jpg',
    chickenParmRedSauce: '/images/cucina-bella/food6.jpg',
    fruttiDiMare: '/images/cucina-bella/food5.jpg',
    redSaucePasta: '/images/cucina-bella/red-sauce-pasta.jpg',
    carbonara: '/images/cucina-bella/carbonara.jpg',
    pappardelleMushroom: '/images/cucina-bella/pappardelle-mushroom.jpg',
    cocktails: '/images/cucina-bella/cocktails.jpg',
    dessertMartini: '/images/cucina-bella/dessert-martini.jpg',
    tiramisu: '/images/cucina-bella/tiramisu.jpg',
    pannaCotta: '/images/cucina-bella/panna-cotta.jpg',
    logoTomato: '/images/cucina-bella/logo-tomato.png',
  },

  home: {
    hero: {
      mainPhoto: '/images/cucina-bella/hero-dinner.jpg',
      mainPhotoAlt:
        'Italian dinner table with wine glasses, bread, and a plate being served',
      secondaryCards: [
        {
          chip: 'Italian Kitchen',
          photo: '/images/cucina-bella/food7.jpg',
          alt: 'Three-plate Italian-American spread: veal, penne, shrimp scampi',
          href: '/menu',
        },
        {
          chip: 'Wine & Bar',
          photo: '/images/cucina-bella/wine-bar.jpg',
          alt: 'Warm Italian bar with wine bottles and Edison bulbs',
          href: '/contact',
        },
      ],
      testimonial: {
        quote: 'Cucina Bella',
        wordmark: true,
        body:
          'Sannicandro recipes with the kind of bold garlic regulars come back for \u2014 red-sauce classics, generous portions, and a brick-walled dining room two blocks off the Fox River.',
        rating: 4.5,
        reviewCount: 428,
        ratingLabel: 'Tripadvisor',
        reviewLabel: 'Reviews + #2 of 121 in Algonquin',
        primaryCta: { label: 'Reserve a Table', href: toastReservationUrl, external: true },
        secondaryCta: { label: 'View Menu', href: '/menu' },
      },
      sidebar: {
        ctaLabel: 'Reserve a Table',
        ctaHref: toastReservationUrl,
        hoursHeading: 'Dinner Hours',
        hours: [
          { day: 'Monday', time: 'Closed' },
          { day: 'Tuesday', time: '4:00 PM \u2013 9:00 PM' },
          { day: 'Wednesday', time: '4:00 PM \u2013 9:00 PM' },
          { day: 'Thursday', time: '4:00 PM \u2013 9:00 PM' },
          { day: 'Friday', time: '4:00 PM \u2013 10:00 PM' },
          { day: 'Saturday', time: '4:00 PM \u2013 10:00 PM' },
          { day: 'Sunday', time: '4:00 PM \u2013 9:00 PM' },
        ],
      },
    },

    proof: {
      eyebrow: 'Already Loved in Algonquin',
      heading: 'A neighborhood favorite the website has been hiding.',
      body:
        'Cucina Bella shows up at the top of Tripadvisor\u2019s Algonquin restaurants and has nearly 430 public reviews \u2014 most calling out the red sauce, the family welcome, and the value for the portion. Those signals now sit beside the menu, hours, and reservation path guests need most.',
      stats: [
        { value: '4.5\u2605', label: 'Tripadvisor rating, public' },
        { value: '428', label: 'Tripadvisor reviews and counting' },
        { value: '#2 of 121', label: 'Restaurants in Algonquin' },
      ],
    },

    story: {
      eyebrow: 'A Family from Sannicandro',
      heading: 'From Sannicandro to Main Street, Algonquin.',
      body:
        'Cucina Bella is rooted in a family that started with eight children in Sannicandro, Italy, and never stopped cooking the way home tasted. The kitchen runs on red sauce, slow Sundays, Nonna\u2019s meat lasagna (Tony\u2019s favorite), and the kind of recipes that travel well when a family gets large.',
      quote: 'A taste of home, made for a table that keeps growing.',
      photo: '/images/cucina-bella/food7.jpg',
      photoAlt: 'Three-plate spread of Italian-American classics',
    },

    signatureDishes: {
      eyebrow: 'On the Menu',
      heading: 'The dishes guests come back for.',
      items: [
        {
          name: 'Stuffed Mushrooms',
          desc: 'Stuffed with our four cheeses in butter sauce \u2014 the appetizer named in dozens of public reviews.',
          price: '$19.50',
          photo: '/images/cucina-bella/food7.jpg',
        },
        {
          name: 'Nonna\u2019s Meat Lasagna',
          desc: 'Homemade with meat sauce, peas, and parmigiana. Tony\u2019s favorite.',
          price: '$26',
          photo: '/images/cucina-bella/red-sauce-pasta.jpg',
        },
        {
          name: 'Linguine Con Vongole',
          desc: 'Little neck clams in red or white sauce, generous and garlicky over linguine.',
          price: '$30.95',
          photo: '/images/cucina-bella/food5.jpg',
        },
      ],
    },

    wine: {
      eyebrow: 'Wine, Bar, and Dessert Martinis',
      heading: 'A small bar with a real Italian wine list.',
      body:
        'The bar carries Italian reds and whites, dessert martinis (Espressotini, Chocolatini), espresso and after-dinner liqueurs (Limoncello, Frangelico, Disaronno, Sambuca, Grand Marnier), and the kind of hot drinks that close out a long dinner. The room is built for company \u2014 brick walls, warm wood, and a corner where regulars sit at the bar.',
      photo: '/images/cucina-bella/wine-bar.jpg',
      photoAlt: 'Italian bar with bottles, glassware, and warm Edison bulbs',
      badges: ['Italian Wine', 'Dessert Martinis', 'Family Welcome', 'Walk-Ins'],
    },

    reviews: {
      eyebrow: 'What Guests Are Saying',
      heading: 'Five-star reviews from real guests, in their own words.',
      sourceLabel: 'Read all reviews on Google',
      sourceHref:
        'https://www.google.com/maps/place/Cucina+Bella+Algonquin/@42.16557,-88.29412,15z',
      items: [
        {
          quote:
            'I absolutely loved the bold garlic flavors in every dish. The service was warm and attentive, the atmosphere felt inviting, and the pricing was very reasonable for the quality offered.',
          author: 'Betty Torres',
          theme: 'Bold garlic \u00b7 5/5/5',
          rating: 5,
        },
        {
          quote:
            'Came tonight for my Birthday dinner. AMAZING! Filet with scallops and shrimp, and the suprema penne. Staff very friendly and the Owners even checked on how everything was.',
          author: 'Brian Rowe',
          theme: 'Birthday dinner \u00b7 5/5/5',
          rating: 5,
        },
        {
          quote:
            'Everything we ordered was absolutely delicious. The Chicken Saltimbocca was incredibly tender and full of flavor, and the Chicken Parm was cooked beautifully.',
          author: 'Lucas Bradley',
          theme: 'Chicken Saltimbocca + Parm \u00b7 5/5/5',
          rating: 5,
        },
        {
          quote:
            'The B E S T bruschetta I\u2019ve ever had! Staff was all very nice and helpful. Food serving size was incredibly huge \u2014 leftovers for days.',
          author: 'Megan Maness',
          theme: 'Bruschetta + portions',
          rating: 5,
        },
        {
          quote:
            'The pork is so tender and tasty. The salmon is perfectly cooked and we love the creamy sauce with pasta. The carrot cake is divine \u2014 so moist and flavorful.',
          author: 'Net B.',
          theme: 'Pork \u00b7 Salmon \u00b7 Carrot cake',
          rating: 5,
        },
        {
          quote:
            'Love the heavy garlic served here. If you enjoy garlic, their food will taste significantly better than other Italian spots. Service, ambience, prices and wine pours all outstanding.',
          author: 'Mark Halverson',
          theme: 'Heavy garlic \u00b7 5/5/5',
          rating: 5,
        },
        {
          quote:
            'I had hosted my daughter\u2019s baby shower there and the entire experience from start to finish was nothing less than fantastic. The planning process with Erin was so organized.',
          author: 'Kim Pawlak',
          theme: 'Catering + events',
          rating: 5,
        },
        {
          quote:
            'Cucina Bella is a perfect, classy local spot to frequent on a weekend evening. So impressed by their portion sizes and tasty cocktails.',
          author: 'Christopher Drenth',
          theme: 'Local favorite',
          rating: 5,
        },
      ],
    },
  },

  // ===========================================================================
  // MENU \u2014 verified verbatim from cucinabellaalgonquin.com/assets/menus/algonquin.csv
  // (live-fetched 2026-04-28, 92 items). Pricing is real. Items are exact.
  // ===========================================================================
  menu: {
    hero: {
      photo: '/images/cucina-bella/red-sauce-pasta.jpg',
      photoAlt: 'Spaghetti in slow-simmered red sauce',
      testimonial: {
        quote: 'Italian-American, the way the family cooks it.',
        body:
          'Antipasti, soups and salads, house specials, build-your-own pasta, chicken and veal, fish, kids\u2019 menu, and dessert martinis at the bar. Dinner only \u2014 reservations recommended.',
        rating: 4.5,
        reviewCount: 428,
        ratingLabel: 'Tripadvisor',
        reviewLabel: 'Reviews + #2 of 121 in Algonquin',
      },
    },
    sections: [
      {
        label: 'Antipasti | Appetizers',
        items: [
          { name: 'Antipasto Platter', desc: 'Assorted Italian meats & cheeses & roasted red peppers', price: '$18', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Bruschetta', desc: 'Italian garlic bread topped w/ tomatoes, basil, fresh olive oil & parmigiana', price: '$12', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Caprese Platter', desc: 'Fresh mozzarella w/ tomatoes, basil & roasted red peppers', price: '$12.95', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Stuffed Mushrooms', desc: 'Stuffed w/ our four cheeses in butter sauce', price: '$19.50', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Fried Calamari', desc: 'Calamari dipped in batter & fried', price: '$16.50', photo: '/images/cucina-bella/food5.jpg' },
          { name: 'Grilled Calamari', desc: 'Calamari grilled, then saut\u00e9ed w/ sundried tomatoes & asparagus', price: '$17.50', photo: '/images/cucina-bella/food5.jpg' },
          { name: 'Sausage & Peppers', desc: 'Saut\u00e9ed in sherry wine w/ marinara', price: '$16', photo: '/images/cucina-bella/food6.jpg' },
          { name: 'Goat Cheese Marinara', desc: 'Served w/ garlic crostinis', price: '$14.95', photo: '/images/cucina-bella/food6.jpg' },
          { name: 'Steamed Clams or Mussels', desc: 'Sauteed w/ red or white sauce', price: '$17', photo: '/images/cucina-bella/food5.jpg' },
          { name: 'Baked Clams', desc: '1/2 dozen \u00b7 full dozen', price: '$17 / $26', photo: '/images/cucina-bella/food5.jpg' },
        ],
      },
      {
        label: 'Zuppa & Insalate | Soup & Salad',
        items: [
          { name: 'Minestrone', desc: 'Made w/ fresh vegetables & herbs (cup or bowl)', price: '$6 / $9', photo: '/images/cucina-bella/food6.jpg' },
          { name: 'Pasta Fagioli', desc: 'Made w/ fresh vegetables & beans, topped w/ pasta (cup or bowl)', price: '$6 / $9', photo: '/images/cucina-bella/food6.jpg' },
          { name: 'Caesar Salad', desc: 'Traditional, made to order', price: '$10.95', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Dinner Salad', desc: 'Romaine, iceberg, tomatoes, cucumbers, olives, onions, peperoncinis & carrots', price: '$9.95', photo: '/images/cucina-bella/food7.jpg' },
          { name: "Bella\u2019s Chopped Salad", desc: 'Salami, fontanella cheese, artichoke hearts, hearts of palm, tomatoes, red onions, olives & peppered salami', price: '$13.95', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Gorgonzola Salad', desc: 'Romaine, pears, blue cheese & candied pecans', price: '$12.95', photo: '/images/cucina-bella/food7.jpg' },
        ],
      },
      {
        label: 'Specials Della Casa | House Specials',
        items: [
          { name: "Nonna\u2019s Meat Lasagna", desc: 'Homemade with meat sauce, peas & parmigiana \u2014 Tony\u2019s favorite!', price: '$26', photo: '/images/cucina-bella/red-sauce-pasta.jpg' },
          { name: 'Lasagna', desc: 'Ricotta & mozzarella cheese, topped w/ marinara', price: '$25.95', photo: '/images/cucina-bella/red-sauce-pasta.jpg' },
          { name: 'Bella Pasta', desc: 'Shrimp, garlic, onions & stewed tomatoes, served over linguine', price: '$27.95', photo: '/images/cucina-bella/food5.jpg' },
          { name: 'Eggplant Parmigiana', desc: 'Egg battered slices of eggplant, layered w/ cheese & marinara', price: '$21.95', photo: '/images/cucina-bella/food6.jpg' },
          { name: 'Stuffed Eggplant', desc: 'Stuffed w/ ricotta, served w/ marinara & mozzarella', price: '$22.95', photo: '/images/cucina-bella/food6.jpg' },
          { name: 'Tortellini Paglia Fino', desc: 'Cheese tortellini, prosciutto, mushrooms & peas in a cream sauce', price: '$26', photo: '/images/cucina-bella/carbonara.jpg' },
          { name: 'Cavatelli', desc: 'Ricotta pasta w/ vodka sauce', price: '$24', photo: '/images/cucina-bella/carbonara.jpg' },
          { name: 'Ravioli Bella', desc: 'Ravioli stuffed w/ ricotta cheese, topped w/ marinara', price: '$23', photo: '/images/cucina-bella/red-sauce-pasta.jpg' },
          { name: 'Gnocchi', desc: 'Made w/ potatoes & cheese, topped w/ a tomato butter sauce', price: '$24', photo: '/images/cucina-bella/red-sauce-pasta.jpg' },
          { name: 'Veal Napoleon', desc: 'Veal layered w/ eggplant, Gorgonzola, parmigiana & fresh mozzarella, topped w/ suprema sauce', price: '$32', photo: '/images/cucina-bella/food6.jpg' },
          { name: 'Veal Braciola', desc: 'Tender veal cutlets, rolled & stuffed w/ prosciutto, roasted red peppers, spinach & mozzarella, lightly breaded over linguine in suprema sauce', price: '$34', photo: '/images/cucina-bella/food6.jpg' },
          { name: 'Pork Osso Bucco', desc: 'Braised bone-in pork shank, served over parmigiana risotto, topped w/ red Demi glaze', price: '$36', photo: '/images/cucina-bella/food6.jpg' },
          { name: '8oz Filet Mignon', desc: 'Grilled w/ potatoes in a sherry wine sauce', price: 'Market', photo: '/images/cucina-bella/food6.jpg' },
          { name: 'Medallions Gorgonzola', desc: 'Grilled w/ potatoes in a Gorgonzola cream sauce', price: 'Market', photo: '/images/cucina-bella/food6.jpg' },
          { name: 'Risotto of the Day', desc: 'Ask your server', price: 'Market', photo: '/images/cucina-bella/pappardelle-mushroom.jpg' },
        ],
      },
      {
        label: 'Personalizza La Tua Pasta | Build Your Own Pasta',
        items: [
          { name: 'Marinara', desc: 'Meatless w/ tomatoes, garlic & herbs', price: '$18.95', photo: '/images/cucina-bella/red-sauce-pasta.jpg' },
          { name: 'Arrabiata', desc: 'Spicy marinara w/ basil', price: '$19.95', photo: '/images/cucina-bella/red-sauce-pasta.jpg' },
          { name: 'Bolognese', desc: 'Hearty meat sauce', price: '$20.95', photo: '/images/cucina-bella/red-sauce-pasta.jpg' },
          { name: 'Suprema', desc: 'Alfredo & marinara combined', price: '$19.95', photo: '/images/cucina-bella/carbonara.jpg' },
          { name: 'Vodka', desc: 'Fresh tomatoes, vodka & cream', price: '$20.95', photo: '/images/cucina-bella/carbonara.jpg' },
          { name: 'Carbonara', desc: 'Creamy white sauce w/ prosciutto & eggs', price: '$22.95', photo: '/images/cucina-bella/carbonara.jpg' },
          { name: 'Pomodoro', desc: 'Fresh plum tomatoes & basil', price: '$18.95', photo: '/images/cucina-bella/red-sauce-pasta.jpg' },
          { name: 'Alfredo', desc: 'Cream sauce w/ Parmesan cheese', price: '$20.95', photo: '/images/cucina-bella/carbonara.jpg' },
          { name: 'Aglio Olio', desc: 'Garlic, olive oil, parmigiana & crushed red pepper', price: '$16.95', photo: '/images/cucina-bella/pappardelle-mushroom.jpg' },
          { name: 'Diablo', desc: 'Onion, giardiniera peppers, fresh tomatoes, marinara & spicy white wine sauce', price: '$21.95', photo: '/images/cucina-bella/red-sauce-pasta.jpg' },
        ],
      },
      {
        label: 'Pollo & Vitello | Chicken & Veal',
        items: [
          { name: 'Chicken Parmigiano', desc: 'Lightly breaded & baked w/ marinara & mozzarella, served over spaghetti', price: '$26.95', photo: '/images/cucina-bella/food6.jpg' },
          { name: 'Veal Parmigiano', desc: 'Lightly breaded & baked w/ marinara & mozzarella, served over spaghetti', price: '$32.95', photo: '/images/cucina-bella/food6.jpg' },
          { name: 'Chicken Saltimbocca', desc: 'Topped w/ prosciutto & mozzarella, baked in sherry wine sauce over pasta', price: '$27.95', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Veal Saltimbocca', desc: 'Topped w/ prosciutto & mozzarella, baked in sherry wine sauce over pasta', price: '$33.95', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Chicken Marsala', desc: 'Sauteed w/ mushrooms in a sherry wine sauce, served over pasta', price: '$26.95', photo: '/images/cucina-bella/pappardelle-mushroom.jpg' },
          { name: 'Veal Marsala', desc: 'Sauteed w/ mushrooms in a sherry wine sauce, served over pasta', price: '$32.95', photo: '/images/cucina-bella/pappardelle-mushroom.jpg' },
          { name: 'Chicken Francese', desc: 'Lightly dipped in egg, saut\u00e9ed w/ butter, white wine & lemon, over pasta', price: '$26.95', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Veal Francese', desc: 'Lightly dipped in egg, saut\u00e9ed w/ butter, white wine & lemon, over pasta', price: '$32.95', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Chicken Vesuvio', desc: 'Garlic, white wine, herbs, peas & potatoes', price: '$26.95', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Veal Vesuvio', desc: 'Garlic, white wine, herbs, peas & potatoes', price: '$32.95', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Chicken Piccata', desc: 'Sauteed w/ lemon, capers & wine sauce, served over pasta', price: '$26.95', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Veal Piccata', desc: 'Sauteed w/ lemon, capers & wine sauce, served over pasta', price: '$32.95', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Chicken Milanese', desc: 'Lightly breaded & saut\u00e9ed w/ lemon, served w/ peppers & potatoes', price: '$26.95', photo: '/images/cucina-bella/food7.jpg' },
          { name: 'Veal Milanese', desc: 'Lightly breaded & saut\u00e9ed w/ lemon, served w/ peppers & potatoes', price: '$32.95', photo: '/images/cucina-bella/food7.jpg' },
        ],
      },
      {
        label: 'Pesce | Fish',
        items: [
          { name: 'Linguine Con Vongole', desc: 'Little neck clams in red or white sauce', price: '$30.95', photo: '/images/cucina-bella/food5.jpg' },
          { name: 'Linguine Con Cozze', desc: 'Mussels in red or white sauce', price: '$30.95', photo: '/images/cucina-bella/food5.jpg' },
          { name: 'Clams Posillipo', desc: 'Clams & mussels in red or white sauce, served over linguine', price: '$32.95', photo: '/images/cucina-bella/food5.jpg' },
          { name: 'Shrimp Portofino', desc: 'Sundried tomatoes & mushrooms, in a sherry wine sauce, over linguine', price: '$32.95', photo: '/images/cucina-bella/food5.jpg' },
          { name: 'Zuppa Di Mare', desc: 'Scallops, shrimp, mussels, clams & calamari over linguine in a light red sauce', price: 'Market', photo: '/images/cucina-bella/food5.jpg' },
          { name: 'Fresh Fish of the Day', desc: 'Ask your server', price: 'Market', photo: '/images/cucina-bella/food5.jpg' },
        ],
      },
      {
        label: 'Cena di Giovanotti | Kids Menu',
        items: [
          { name: 'Build Your Own Pasta', desc: 'Choose your shape and your sauce', price: '$14', photo: '/images/cucina-bella/red-sauce-pasta.jpg' },
          { name: 'Chicken Fingers & Fries', desc: '', price: '$12.95', photo: '/images/cucina-bella/food6.jpg' },
          { name: 'Ravioli', desc: '', price: '$14', photo: '/images/cucina-bella/red-sauce-pasta.jpg' },
        ],
      },
      {
        label: 'Dessert',
        items: [
          { name: 'Tiramisu', desc: 'Mascarpone, ladyfingers, espresso, cocoa', price: '', photo: '/images/cucina-bella/tiramisu.jpg' },
          { name: 'Cannoli', desc: 'Crisp shells, sweet ricotta', price: '', photo: '/images/cucina-bella/panna-cotta.jpg' },
          { name: 'Carrot Cake', desc: '\u201cDivine, so moist and flavorful,\u201d per public reviews', price: '', photo: '/images/cucina-bella/panna-cotta.jpg' },
          { name: 'Cheesecake', desc: 'House cheesecake', price: '', photo: '/images/cucina-bella/panna-cotta.jpg' },
          { name: 'Molten Lava Cake', desc: 'Warm chocolate cake with molten center', price: '', photo: '/images/cucina-bella/panna-cotta.jpg' },
          { name: 'Beignets', desc: 'Light, sugar-dusted', price: '', photo: '/images/cucina-bella/panna-cotta.jpg' },
          { name: 'Chocolate Mousse', desc: '', price: '', photo: '/images/cucina-bella/panna-cotta.jpg' },
          { name: 'Affogato', desc: 'Vanilla gelato drowned in hot espresso', price: '', photo: '/images/cucina-bella/dessert-martini.jpg' },
          { name: 'Gelato', desc: 'Italian-style ice cream', price: '', photo: '/images/cucina-bella/panna-cotta.jpg' },
        ],
      },
      {
        label: 'Hot Drinks, Dessert Martinis & Liqueurs',
        items: [
          { name: 'Espressotini', desc: 'Espresso dessert martini', price: '', photo: '/images/cucina-bella/dessert-martini.jpg' },
          { name: 'Chocolatini', desc: 'Chocolate dessert martini', price: '', photo: '/images/cucina-bella/dessert-martini.jpg' },
          { name: 'Espresso / Cappuccino', desc: 'Italian coffee', price: '', photo: '/images/cucina-bella/cocktails.jpg' },
          { name: 'Irish Coffee / Baileys & Coffee', desc: 'Hot coffee with whiskey or Baileys', price: '', photo: '/images/cucina-bella/cocktails.jpg' },
          { name: 'Liqueurs', desc: 'Limoncello \u00b7 Frangelico \u00b7 Disaronno \u00b7 Kahlua \u00b7 White Sambuca \u00b7 Baileys \u00b7 Grand Marnier', price: '', photo: '/images/cucina-bella/cocktails.jpg' },
        ],
      },
      {
        label: 'Catering',
        items: [
          { name: 'Catering Menu', desc: 'Trays for parties, holidays, family events. Erin coordinates events. Call (847) 456-1012 to plan.', price: 'Call', photo: '/images/cucina-bella/food7.jpg' },
        ],
      },
    ],
  },

  about: {
    hero: {
      title: 'About Cucina Bella',
      intro:
        'Family-run Italian on Main Street, Algonquin \u2014 rooted in a Sannicandro kitchen, raised on red sauce, and built around a table that keeps growing.',
      leftPhoto: '/images/cucina-bella/food9.jpg',
      leftAlt: 'Cucina Bella brick-walled dining room with families eating',
      rightPhoto: '/images/cucina-bella/wine-bar.jpg',
      rightAlt: 'Italian bar with wine bottles and warm Edison bulbs',
    },
    manifesto: {
      heading: 'From Sannicandro to Algonquin',
      body: [
        'Cucina Bella began with a family in Sannicandro, Italy \u2014 a town where Tony\u2019s parents started a family of eight children and a kitchen that never stopped cooking. That kitchen is the inspiration behind the food on Main Street in Algonquin today.',
        'The room is small on purpose. Brick walls, warm wood, white tablecloths, and a bar where regulars sit. The menu is built for company \u2014 ten antipasti, a build-your-own pasta with ten house sauces, full chicken and veal selections, fresh fish, dessert martinis, and Nonna\u2019s meat lasagna (Tony\u2019s favorite).',
      ],
    },
    owners: {
      name: 'Tony & the Sannicandro Family',
      bio:
        'The Cucina Bella family runs three restaurants across northern Illinois \u2014 the Algonquin location, Cucina Bella in Galena, and Bella\u2019s Woodfire Pizza next door in Algonquin. All three share the same Sannicandro recipes and the same idea about what dinner is for.',
      bio2:
        'The promise is simple: a family meal at a fair price, in a room that has been quietly running for years.',
      cta: { label: 'Reserve a Table', href: toastReservationUrl },
    },
  },

  contact: {
    heroTitle: 'Visit Us',
    heroSubtitle:
      'Dinner only. Reservations are handled on Toast Tables. Catering is handled by phone. The kitchen is on Main Street, with parking on the block.',
    heroPhoto: '/images/cucina-bella/food9.jpg',
    heroPhotoAlt: 'Cucina Bella brick dining room',
    formHeading: 'Get in touch',
    formSubheading:
      'For reservations, please use Toast Tables. For catering, call Erin at (847) 456-1012. For everything else, email or call below.',
    formFields: {
      nameLabel: 'Your name',
      emailLabel: 'Email address',
      subjectLabel: 'Subject',
      messageLabel: 'Message',
      submitLabel: 'Send message',
    },
    infoHeading: 'Find us',
    mapCaption: 'Downtown Algonquin, on South Main near the river.',
  },
};
