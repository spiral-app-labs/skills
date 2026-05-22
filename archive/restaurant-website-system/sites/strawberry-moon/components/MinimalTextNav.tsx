'use client';

import Link from 'next/link';
import { content } from '../content';

export function MinimalTextNav() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-shell px-5 md:px-10 pt-6 md:pt-10 flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div className="flex min-w-0 flex-col gap-1">
          <Link href="/" className="vs-link whitespace-nowrap text-[20px] leading-none md:text-[15px] tracking-normal">
            {content.brand.name}
          </Link>
          <p className="hidden md:inline-flex text-[11px] lowercase text-ink">
            {content.brand.statusLine}
          </p>
        </div>
        <nav aria-label="Primary" className="flex w-full flex-wrap items-center justify-start gap-x-4 gap-y-2 sm:w-auto sm:justify-end md:gap-x-6">
          {content.nav.links.map((link) => {
            const isExternal = 'external' in link && link.external;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="vs-link rounded-full border border-ink/20 px-3 py-2 text-[13px] leading-none lowercase md:border-0 md:px-0 md:py-0 md:text-[14px]"
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
