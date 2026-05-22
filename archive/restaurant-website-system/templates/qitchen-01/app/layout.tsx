import type { Metadata } from 'next';
import { Forum } from 'next/font/google';
import { content } from '../content.example';
import './globals.css';

// Display font: Forum (Google Fonts). Single weight 400 — qitchen uses one weight everywhere.
const forum = Forum({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-forum',
  display: 'swap',
});

export const metadata: Metadata = {
  title: `${content.brand.name} — ${content.brand.tagline}`,
  description: content.brand.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={forum.variable}>
      <head>
        {/* Body font: Satoshi via Fontshare CDN.
            Forks may want to self-host these woff2 files — see README. */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
