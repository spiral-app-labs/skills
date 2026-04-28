import type { Metadata } from 'next';
import { Sorts_Mill_Goudy, Figtree } from 'next/font/google';
import { content } from '../content.example';
import { Concierge } from '../components/Concierge';
import { MobileCallBar } from '../components/MobileCallBar';
import './globals.css';

// Type lock from gusto-01 \u2014 italic Sorts Mill Goudy display + Figtree body.
// Cucina Bella keeps the lock; register softening happens in copy/photo/
// composition only. See sites/cucina-bella/audit.md.
const sortsMillGoudy = Sorts_Mill_Goudy({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-sorts-mill-goudy',
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cucinabellaalgonquin.com'),
  title: `${content.brand.legalName} \u2014 ${content.brand.tagline}`,
  description: content.brand.description,
  openGraph: {
    title: `${content.brand.legalName} \u2014 ${content.brand.tagline}`,
    description: content.brand.description,
    type: 'website',
    images: [
      {
        url: content.photos.diningRoomBrick,
        width: 1000,
        height: 500,
        alt: 'Cucina Bella brick dining room',
      },
    ],
  },
};

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Restaurant JSON-LD addresses the audit's D5 leak (no structured local
// schema on current site). aggregateRating uses Tripadvisor 4.5 / 428 (per
// research/lead-qualification/next-3-deep-research-audits-2026-04-27.md);
// hours verified from the live cucinabellaalgonquin.com /site-config.json
// on 2026-04-28. Re-verify before pitch.

// Price string helper \u2014 keep prices stable as numbers when possible. Items
// with empty price (desserts/drinks) get omitted from the schema; items
// with "Market" / "Call" stay as strings.
function priceForSchema(p: string): string | undefined {
  if (!p) return undefined;
  const n = parseFloat(p.replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) && n > 0 ? n.toFixed(2) : p;
}

// Menu JSON-LD \u2014 a `Menu` graph attached to the Restaurant via `hasMenu`.
// Each menu section becomes a MenuSection; each item a MenuItem with name +
// description + offers (price + currency). Closes the discovery & conversion
// audit's #5: makes our menu legible to Google Rich Results, AI/LLM scrapers,
// and structured-data consumers \u2014 the current site loses this entirely
// because the menu HTML is JS-loaded.
const menuSectionsLd = content.menu.sections.map((section) => ({
  '@type': 'MenuSection',
  name: section.label,
  hasMenuItem: section.items.map((item) => {
    const price = priceForSchema(item.price);
    return {
      '@type': 'MenuItem',
      name: item.name,
      ...(item.desc ? { description: item.desc } : {}),
      ...(price
        ? {
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              ...(typeof price === 'string' && /^\d/.test(price)
                ? { price }
                : { priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'USD', valueAddedTaxIncluded: false }, description: price }),
            },
          }
        : {}),
    };
  }),
}));

const menuJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Menu',
  '@id': 'https://cucinabellaalgonquin.com/menu#menu',
  name: `${content.brand.name} Menu`,
  inLanguage: 'en-US',
  hasMenuSection: menuSectionsLd,
};

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: content.brand.legalName,
  servesCuisine: ['Italian', 'Italian-American'],
  url: 'https://cucinabellaalgonquin.com/',
  telephone: content.brand.phoneDisplay,
  email: content.brand.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: content.brand.address.line1,
    addressLocality: 'Algonquin',
    addressRegion: 'IL',
    postalCode: '60102',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: content.brand.geo.lat,
    longitude: content.brand.geo.lng,
  },
  hasMenu: { '@id': 'https://cucinabellaalgonquin.com/menu#menu' },
  priceRange: '$$',
  acceptsReservations: true,
  openingHoursSpecification: content.brand.hoursConfig.ranges.map((range) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: dayNames[range.day],
    opens: range.open,
    closes: range.close,
  })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 4.5,
    reviewCount: 428,
    bestRating: 5,
    worstRating: 1,
  },
  sameAs: [
    ...content.brand.social.map((s) => s.href),
    ...content.brand.sisterVenues.map((v) => v.url),
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sortsMillGoudy.variable} ${figtree.variable}`}>
      <body className="bg-canvas pb-20 font-body text-ink antialiased md:pb-0">
        {children}
        <MobileCallBar />
        <Concierge />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(menuJsonLd) }}
        />
      </body>
    </html>
  );
}
