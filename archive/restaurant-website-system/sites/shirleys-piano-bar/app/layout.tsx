import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import { content } from '../content.example';
import './globals.css';

// Inter Tight — the only typeface. Weight locked at 500 everywhere.
// Sub-500 reads too fragile against the dark canvas; 600+ breaks the modernist
// restraint and smudges the hierarchy. See theme.ts + audit §4.
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter-tight',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(content.brand.url),
  title: `${content.brand.name} | Live Music & Cocktails in Barrington, IL`,
  description: content.brand.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${content.brand.name} | Live Music & Cocktails`,
    description: content.brand.description,
    url: content.brand.url,
    siteName: content.brand.name,
    type: 'website',
  },
};

const openingHoursSpecification = [
  { dayOfWeek: 'Sunday', opens: '16:00', closes: '00:00' },
  { dayOfWeek: 'Tuesday', opens: '18:00', closes: '01:00' },
  { dayOfWeek: 'Wednesday', opens: '18:00', closes: '01:00' },
  { dayOfWeek: 'Thursday', opens: '18:00', closes: '01:00' },
  { dayOfWeek: 'Friday', opens: '18:00', closes: '02:00' },
  { dayOfWeek: 'Saturday', opens: '18:00', closes: '02:00' },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['BarOrPub', 'MusicVenue', 'EventVenue'],
      '@id': `${content.brand.url}#venue`,
      name: content.brand.name,
      url: content.brand.url,
      description: content.brand.description,
      telephone: content.brand.phone,
      email: content.brand.email,
      image: content.home.heroImage.src,
      address: {
        '@type': 'PostalAddress',
        streetAddress: content.brand.address.line1,
        addressLocality: 'Barrington',
        addressRegion: 'IL',
        postalCode: '60010',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: content.brand.geo.lat,
        longitude: content.brand.geo.lng,
      },
      openingHoursSpecification,
      hasMenu: `${content.brand.url}menu`,
      sameAs: content.contact.socials.links.map((link) => link.href),
      event: content.liveMusic.events.slice(0, 5).map((event) => ({
        '@type': 'MusicEvent',
        name: event.title,
        description: event.desc,
        startDate: event.startDate,
        location: {
          '@id': `${content.brand.url}#venue`,
        },
      })),
    },
    {
      '@type': 'WebSite',
      '@id': `${content.brand.url}#website`,
      name: content.brand.name,
      url: content.brand.url,
      publisher: {
        '@id': `${content.brand.url}#venue`,
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className="font-sans bg-canvas text-ink antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
