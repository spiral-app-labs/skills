import type { Metadata } from 'next';
import { Prata, Inter } from 'next/font/google';
import { content } from '../content.example';
import './globals.css';

// Prata — single weight 400 is the only option on Google Fonts. That's the discipline.
const prata = Prata({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-prata',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${prata.variable} ${inter.variable}`}>
      <body className="font-body bg-bg-white text-text-dark antialiased">{children}</body>
    </html>
  );
}
