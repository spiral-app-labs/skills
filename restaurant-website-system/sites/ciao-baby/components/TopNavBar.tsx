// TopNavBar — full-width dark top nav. Wordmark-left, links-center/left, small
// circular icon right. Contrast with qitchen/1776's floating pills; gusto's
// traditional top bar leaves the hero to carry the visual weight.
'use client';

import Link from 'next/link';
import { content } from '../content';

export function TopNavBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-divider bg-canvas/85 backdrop-blur-card">
      <nav className="mx-auto max-w-shell px-4 py-3 md:px-8 md:py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-[22px] leading-none text-ink tracking-tight"
          >
            {content.brand.name}
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {content.nav.primary.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-nav-label text-accent/90 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={`tel:${content.brand.phone}`}
            aria-label="Call Ciao Baby"
            className="flex h-9 min-w-9 items-center justify-center rounded-full border border-divider px-3 text-nav-label text-ink transition-colors hover:border-ink/40"
          >
            Call
          </Link>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 md:hidden">
          <Link href="/menu" className="rounded-full border border-divider px-3 py-2 text-center text-nav-label text-ink-muted">
            Menu
          </Link>
          <Link href={content.brand.mapLink} className="rounded-full border border-divider px-3 py-2 text-center text-nav-label text-ink-muted">
            Directions
          </Link>
          <Link href="/contact" className="rounded-full border border-divider px-3 py-2 text-center text-nav-label text-ink-muted">
            Parties
          </Link>
        </div>
      </nav>
    </header>
  );
}
