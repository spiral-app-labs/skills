import type { Metadata } from 'next';
import { Imbue, La_Belle_Aurore, Inter } from 'next/font/google';
import { content } from '../content.example';
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

// La Belle Aurore — French vignette captions + "Bienvenue!" script accent.
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
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${imbue.variable} ${labelle.variable} ${inter.variable}`}
    >
      <body className="font-body bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
