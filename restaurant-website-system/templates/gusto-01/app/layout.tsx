import type { Metadata } from 'next';
import { Sorts_Mill_Goudy, Figtree } from 'next/font/google';
import { content } from '../content.example';
import './globals.css';

// Sorts Mill Goudy — only weight 400 available on Google Fonts; italic is
// load-bearing (see audit §4). Going outside this cut breaks the heritage voice.
const sortsMillGoudy = Sorts_Mill_Goudy({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-sorts-mill-goudy',
  display: 'swap',
});

// Figtree — humanist sans workhorse. 400 body + 500 for small UI affordances.
const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-figtree',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sortsMillGoudy.variable} ${figtree.variable}`}>
      <body className="font-body bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
