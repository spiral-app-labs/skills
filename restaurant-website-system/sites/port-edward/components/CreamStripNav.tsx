'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { content } from '../content.example';

function SmartLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}) {
  const external = href.startsWith('http');
  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function CreamStripNav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-hairline bg-canvas/95 backdrop-blur">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-4 px-4 py-4 md:px-12">
        <Link href="/" className="label-wordmark text-ink transition-opacity hover:opacity-70" onClick={() => setMobileOpen(false)}>
          {content.brand.name}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {content.nav.primary.map((item) => (
            <SmartLink
              key={item.label}
              href={item.href}
              className="font-display text-nav-label text-ink transition-opacity hover:opacity-60"
            >
              {item.label}
            </SmartLink>
          ))}
          <SmartLink
            href={content.brand.orderUrl}
            className="border border-accent px-4 py-2 text-button text-accent transition-colors hover:bg-accent hover:text-ink-on-dark"
          >
            Order
          </SmartLink>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex items-center border border-hairline px-4 py-2 text-button text-ink transition-colors hover:border-ink md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((open) => !open)}
          >
            Menu
          </button>
          <a
            href={content.nav.cta.href}
            className="inline-flex items-center border border-ink px-4 py-2 text-button text-ink transition-colors hover:bg-ink hover:text-ink-on-dark"
            aria-label={`Call ${content.brand.legalName}`}
          >
            {content.nav.cta.label}
          </a>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-nav"
            className="border-t border-hairline bg-canvas px-4 pb-4 md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
          >
            <div className="grid gap-2 pt-3">
              {content.nav.primary.map((item) => (
                <SmartLink
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="border border-hairline bg-canvas-alt/45 px-4 py-3 font-display text-[22px] leading-7 text-ink transition-colors hover:border-accent"
                >
                  {item.label}
                </SmartLink>
              ))}
              <SmartLink
                href={content.brand.orderUrl}
                onClick={() => setMobileOpen(false)}
                className="border border-accent bg-canvas px-4 py-3 font-display text-[22px] leading-7 text-accent transition-colors hover:bg-accent hover:text-ink-on-dark"
              >
                Order Online via Toast
              </SmartLink>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
