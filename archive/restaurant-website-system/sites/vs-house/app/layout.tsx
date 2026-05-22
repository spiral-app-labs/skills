import type { Metadata } from 'next';
import { Prata, Inter } from 'next/font/google';
import { content } from '../content';
import { TopNavBar } from '../components/TopNavBar';
import { MobileCallBar } from '../components/MobileCallBar';
import { AskConcierge } from '../components/AskConcierge';
import './globals.css';

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
  title: `${content.brand.name} — Bar · Sushi · Pho · North Richland Hills`,
  description:
    "A Vu family kitchen since 1982. Pho hand-made over 24 hours, an upscale-Vietnamese room designed by Hatsumi Kuzuu, and an 18-cocktail bar program. Reserve a table at V's House on Bedford-Euless Road.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${prata.variable} ${inter.variable}`}>
      <body className="font-body bg-bg-darker text-text-dark antialiased">
        <TopNavBar />
        {children}
        <MobileCallBar />
        <AskConcierge restaurantName={content.brand.name} />
      </body>
    </html>
  );
}
