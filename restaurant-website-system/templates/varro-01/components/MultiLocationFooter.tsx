// MultiLocationFooter — 3-column rich footer with multi-location contact column.
// Variant of 1776's RichFooter. Per audit §11.

import Link from 'next/link';
import { content } from '../content.example';

export function MultiLocationFooter() {
  const { footer, contact } = content;

  return (
    <footer className="border-t border-divider px-5 lg:px-12 pt-16 pb-8">
      <div className="mx-auto max-w-page">
        <div className="flex items-center gap-2 mb-12">
          <span className="font-display text-3xl lowercase text-ink">✦ {footer.wordmark.toLowerCase()}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h4 className="text-eyebrow text-accent mb-5">{footer.sitemap.heading}</h4>
            <ul className="space-y-3">
              {footer.sitemap.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-body text-ink-muted hover:text-ink transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-eyebrow text-accent mb-5">{footer.socials.heading}</h4>
            <ul className="space-y-3">
              {footer.socials.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-body text-ink-muted hover:text-ink transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="text-eyebrow text-accent mb-5">Contact</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {contact.locations.map((loc) => (
                <div key={loc.name}>
                  <p className="font-display text-xl uppercase text-ink mb-2">{loc.name}</p>
                  <p className="text-body text-ink-muted mb-1">{loc.address}</p>
                  <p className="text-body text-ink-muted">{loc.phone}</p>
                  <p className="text-body text-ink-muted">{loc.email}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-6 border-t border-divider text-body text-ink-muted">
          <span>{footer.bottomBar.copyright}</span>
          <span>{footer.bottomBar.credit}</span>
        </div>
      </div>
    </footer>
  );
}
