import Link from 'next/link';
import type { ReactNode } from 'react';
import { content } from '../content.example';

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  const className = 'text-body-sm transition-opacity hover:opacity-70';
  if (href.startsWith('http') || href.startsWith('tel:')) {
    return (
      <a href={href} className={className} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export function CreamFooter() {
  return (
    <footer className="w-full bg-canvas-dark text-ink-on-dark">
      <div className="mx-auto max-w-shell px-4 py-14 md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="label-wordmark mb-5">{content.brand.name}</p>
            <p className="max-w-md text-body text-ink-on-dark/78">{content.brand.description}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={content.brand.phoneHref}
                className="inline-flex items-center justify-center bg-ink-on-dark px-5 py-3 text-button text-ink transition-opacity hover:opacity-90"
              >
                {content.brand.phone}
              </a>
              <a
                href={content.brand.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-ink-on-dark/45 px-5 py-3 text-button text-ink-on-dark transition-colors hover:bg-ink-on-dark hover:text-ink"
              >
                Toast Order
              </a>
            </div>
          </div>

          <div>
            <p className="label-eyebrow mb-4 text-ink-on-dark/60">Visit</p>
            <p className="text-body-sm leading-relaxed">
              {content.brand.address.line1}<br />
              {content.brand.address.line2}
            </p>
            <p className="mt-4 text-body-sm">{content.brand.email}</p>
          </div>

          <div>
            <p className="label-eyebrow mb-4 text-ink-on-dark/60">Explore</p>
            <ul className="space-y-2">
              {content.nav.primary.map((n) => (
                <li key={n.label}>
                  <FooterLink href={n.href}>{n.label}</FooterLink>
                </li>
              ))}
              <li><FooterLink href={content.brand.giftCardUrl}>Gift Cards</FooterLink></li>
              <li><FooterLink href={content.brand.loyaltyUrl}>Loyalty Rewards</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-ink-on-dark/20 pt-7 text-body-sm text-ink-on-dark/60 md:flex-row">
          <p>© {new Date().getFullYear()} {content.brand.legalName}. Prospect rebuild.</p>
          <div className="flex flex-wrap gap-4">
            {content.brand.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-100">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
