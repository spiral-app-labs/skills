import type { Metadata } from 'next';
import { content } from '../content';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(content.brand.officialSite),
  title: `${content.brand.fullName} — ${content.brand.tagline}`,
  description: `${content.brand.description} Visit at ${content.brand.address.line1}, ${content.brand.address.line2}. Rated 4.5 on Google with 250+ reviews.`,
  openGraph: {
    title: `${content.brand.fullName} — Thin crust, pasta, and beer in Lake in the Hills`,
    description:
      'A call-first Dino’s Pizza & Pasta experience with Miller Rd directions, 4.5 Google rating context, 250+ reviews, and official menu paths.',
    url: content.brand.officialSite,
    siteName: content.brand.fullName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: "Dino's Pizza & Pasta — 6 Miller Rd, Lake in the Hills — 4.5 Google rating, 250+ reviews",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${content.brand.fullName} — Lake in the Hills pizza`,
    description:
      'Dino’s Pizza & Pasta: 6 Miller Rd, call-first menu path, 4.5 Google rating context, and 250+ Google reviews.',
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
