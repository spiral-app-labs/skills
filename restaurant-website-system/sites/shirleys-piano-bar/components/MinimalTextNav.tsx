'use client';

import Link from 'next/link';
import { content } from '../content.example';
import { LiveOpenStatus } from './LiveOpenStatus';

// MinimalTextNav
// — small wordmark top-left + lowercase text links top-right.
// — NOT sticky (scrolls out of view, per audit §3).
// — No book CTA, no logo mark — just type. "Others" marketplace dropdown removed.
//
// Aliveness retrofit (2026-04-20): LiveOpenStatus "text" variant ONLY (no dot,
// no pill) beneath the wordmark — preserves the no-accent / serif-free
// discipline. Evening-only status ("open · last call in 45m") is a natural
// fit for the cocktail-bar register per aliveness-patterns.md §1.1.
export function MinimalTextNav() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 pt-8 md:pt-10 flex items-start justify-between gap-6">
        <div className="flex flex-col gap-1">
          <Link href="/" className="vs-link text-nav md:text-[15px] tracking-normal">
            {content.brand.name}
          </Link>
          <LiveOpenStatus
            hours={{
              timezone: content.brand.hoursConfig.timezone,
              ranges: [...content.brand.hoursConfig.ranges],
              closures: [...content.brand.hoursConfig.closures],
            }}
            variant="text"
            className="hidden md:inline-flex text-[11px] lowercase text-ink/60"
          />
        </div>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-4 md:gap-6">
          {content.nav.links.map((link) => (
            <Link key={link.href} href={link.href} className="vs-link text-nav md:text-[14px] lowercase">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
