import type { Metadata } from 'next';
import { Cherry_Bomb_One, Gabarito } from 'next/font/google';
import { content } from '../content.example';
import './globals.css';

// Cherry Bomb One — bubble-letter display, brand-moment-only (wordmark + footer brand).
// Single weight 400 per Google Fonts. Per audit §12.4, expanding this across H1/H2
// makes the page cartoonish — keep it wordmark-only.
const cherryBomb = Cherry_Bomb_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cherry-bomb',
  display: 'swap',
});

// Gabarito — heavy geometric sans for everything else. Headlines use weight 800
// per audit §4. Includes 400 for body and 800 for headlines.
const gabarito = Gabarito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-gabarito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cherryBomb.variable} ${gabarito.variable}`}>
      <body className="font-body bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
