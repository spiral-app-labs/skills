import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Imbue, La_Belle_Aurore, Inter } from 'next/font/google';
import { content } from '../content.example';
import { MotionProvider } from '../components/MotionProvider';
import { AiConcierge } from '../components/AiConcierge';
import './globals.css';

// Imbue — variable-axis serif, the primary type system. weight 400 carries
// display; weight 900 carries the tracked-uppercase wordmark/eyebrow label.
// Variable axes: opsz (10-100) + wght (100-900). We load the variable version.
const imbue = Imbue({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['normal'],
  variable: '--font-imbue',
  display: 'swap',
});

// La Belle Aurore — a small handwritten note accent for the heritage captions.
// Single weight (400) only.
const labelle = La_Belle_Aurore({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-labelle',
  display: 'swap',
});

// Inter — substitute for Geist (Geist is not available on Google Fonts).
// Only used for form inputs + small utility UI. Not a visual accent.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} - ${content.brand.tagline}`,
  description: content.brand.description,
  metadataBase: new URL(content.brand.url),
  alternates: {
    canonical: content.brand.url,
  },
  openGraph: {
    title: `${content.brand.name} - ${content.brand.tagline}`,
    description: content.brand.description,
    url: content.brand.url,
    siteName: content.brand.legalName,
    images: [{ url: content.images.hero, width: 1860, height: 1116, alt: content.hero.photoAlt }],
  },
};

const restaurantJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: content.brand.legalName,
  alternateName: content.brand.name,
  url: content.brand.url,
  image: [content.images.hero, content.images.docksideWide, content.images.privateTopside],
  telephone: '+1-847-658-5441',
  email: content.brand.email,
  priceRange: '$$$',
  servesCuisine: ['Seafood', 'American', 'Steakhouse', 'Brunch'],
  acceptsReservations: true,
  hasMenu: content.brand.menuUrl,
  sameAs: content.jsonLd.sameAs,
  address: {
    '@type': 'PostalAddress',
    streetAddress: content.brand.address.street,
    addressLocality: content.brand.address.locality,
    addressRegion: content.brand.address.region,
    postalCode: content.brand.address.postalCode,
    addressCountry: content.brand.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: content.brand.geo.lat,
    longitude: content.brand.geo.lng,
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'], opens: '15:00', closes: '22:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '15:00', closes: '23:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '11:00', closes: '23:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '09:30', closes: '22:00' },
  ],
  potentialAction: [
    {
      '@type': 'OrderAction',
      target: content.brand.orderUrl,
      deliveryMethod: 'http://purl.org/goodrelations/v1#DeliveryModePickUp',
    },
    {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: content.brand.phoneHref,
        actionPlatform: ['http://schema.org/DesktopWebPlatform', 'http://schema.org/MobileWebPlatform'],
      },
    },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${imbue.variable} ${labelle.variable} ${inter.variable}`}
    >
      <body className="font-body bg-canvas text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <MotionProvider>
          {children}
          <AiConcierge />
        </MotionProvider>
      </body>
    </html>
  );
}
