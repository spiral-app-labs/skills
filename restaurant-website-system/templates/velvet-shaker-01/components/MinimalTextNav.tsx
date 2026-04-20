'use client';

import Link from 'next/link';
import { content } from '../content.example';

// MinimalTextNav
// — small wordmark top-left + lowercase text links top-right.
// — NOT sticky (scrolls out of view, per audit §3).
// — No book CTA, no logo mark — just type. "Others" marketplace dropdown removed.
export function MinimalTextNav() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 pt-8 md:pt-10 flex items-start justify-between gap-6">
        <Link href="/" className="vs-link text-nav md:text-[15px] tracking-normal">
          {content.brand.name}
        </Link>
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
