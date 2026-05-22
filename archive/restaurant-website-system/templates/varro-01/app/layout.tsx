import type { Metadata } from 'next';
import { Belleza, Inter } from 'next/font/google';
import { content } from '../content.example';
import './globals.css';

// Belleza — display serif with elongated caps + subtle flare.
// Single weight 400 is the only available weight on Google Fonts.
// Per audit §4 — carries hero, section H2/H3, eyebrow.
const belleza = Belleza({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-belleza',
  display: 'swap',
});

// Inter — neutral humanist body sans.
// Meta.buttonAny reports only "sans-serif" fallback; audit §4 defaults to
// Inter/Söhne as the safe fork. Used for tiny nav links, buttons, body copy.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${belleza.variable} ${inter.variable}`}>
      <body className="font-body bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
