'use client';

import Link from 'next/link';
import { content } from '../content';

export function MinimalTextNav() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 pt-6 md:pt-10 flex items-start justify-between gap-4">
        <div className="flex min-w-0 flex-col gap-1">
          <Link href="/" className="vs-link whitespace-nowrap text-[18px] leading-none md:text-[15px] tracking-normal">
            {content.brand.name}
          </Link>
          <p className="hidden md:inline-flex text-[11px] lowercase text-ink/60">
            {content.brand.statusLine}
          </p>
        </div>
        <nav aria-label="Primary" className="flex max-w-[58vw] flex-wrap items-center justify-end gap-x-3 gap-y-2 md:max-w-none md:gap-x-6">
          {content.nav.links.map((link) => {
            const isExternal = 'external' in link && link.external;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="vs-link text-[12px] leading-none md:text-[14px] lowercase"
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
