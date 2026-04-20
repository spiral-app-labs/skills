import type { Metadata } from 'next';
import { Passion_One, Bricolage_Grotesque } from 'next/font/google';
import { content } from '../content.example';
import './globals.css';

// Passion One — chunky rounded bold display. Single weight 400 is how the
// font is drawn; reads visually bold by design. Used for every H1/H2/H3.
const passionOne = Passion_One({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-passion-one',
  display: 'swap',
});

// Bricolage Grotesque — variable humanist sans for body + UI. Weight 700
// for button labels (audit §4 observed). Body weight 400.
const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-bricolage',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${passionOne.variable} ${bricolage.variable}`}>
      <body className="font-body bg-canvas text-text antialiased">{children}</body>
    </html>
  );
}
