// TopNavBar — full-width dark top nav. Wordmark-left, links-center/left, small
// circular icon right. Contrast with qitchen/1776's floating pills; gusto's
// traditional top bar leaves the hero to carry the visual weight.
'use client';

import Link from 'next/link';
import { content } from '../content.example';

export function TopNavBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-divider bg-canvas">
      <nav className="mx-auto max-w-shell px-4 py-4 md:px-8">
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
            href={content.brand.reservationUrl}
            aria-label="Call Da Baffone"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-divider text-nav-label text-ink transition-colors hover:border-ink/40"
          >
            CL
          </Link>
        </div>
        <ul className="mt-4 flex items-center justify-between gap-4 md:hidden">
          {content.nav.primary
            .filter((item) => item.label !== 'Call to Reserve')
            .map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-nav-label text-accent/90 transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          <li>
            <Link
              href="/cinematic"
              className="text-nav-label text-ink-muted transition-colors hover:text-ink"
            >
              Alt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
