'use client';

import Link from 'next/link';
import { content } from '../content.example';

// Thin sticky top header with wordmark left, nav center, Order Now right.
// Sits over the spring-green hero section (transparent on top, but we give it
// an accent-green text color so it reads against the green bg).

export function StickyTopNav() {
  return (
    <header className="sticky top-0 z-40 bg-canvas-green/80 backdrop-blur-sm">
      <div className="mx-auto max-w-shell flex items-center justify-between px-6 md:px-10 py-5">
        <Link href="/" className="flex items-center gap-2 text-accent-green">
          <span className="h-8 w-8 rounded-full bg-accent-green grid place-items-center text-canvas-green font-display text-xl leading-none">S</span>
          <span className="font-display text-2xl text-accent-green leading-none">{content.brand.wordmark}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {content.nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-nav-label text-accent-green hover:text-accent-brown transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={content.nav.cta.href}
          className="inline-flex items-center rounded-button bg-accent-orange px-6 py-3 font-body text-button text-text-on-dark hover:bg-accent-orange-dark transition-colors"
        >
          {content.nav.cta.label}
        </Link>
      </div>
    </header>
  );
}
