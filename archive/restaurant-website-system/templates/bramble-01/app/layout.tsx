import type { Metadata } from 'next';
import { Crimson_Pro, Inter } from 'next/font/google';
import { content } from '../content.example';
import './globals.css';

// Crimson Pro — weight 300 is the signature. Keep this weight; bold destroys the character.
const crimson = Crimson_Pro({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-crimson',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${crimson.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
