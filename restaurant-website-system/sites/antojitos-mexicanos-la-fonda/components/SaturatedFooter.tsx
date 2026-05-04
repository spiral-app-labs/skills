// SaturatedFooter — full-bleed brand-red footer with wordmark + info + link
// columns. Counterpart to bramble's cream + 1776's dark footer. Promotion
// candidate per audit §11 for any "loud brand" template.

import { PepperWordmark } from './PepperWordmark';
import { content } from '../content';

export function SaturatedFooter() {
  return (
    <footer className="bg-accent text-text-on-brand">
      <div className="max-w-content mx-auto px-5 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          <div className="md:col-span-1">
            <PepperWordmark color="on-brand" size="lg" />
            <address className="mt-4 not-italic text-body-sm opacity-95">
              <div>{content.brand.address.line1}</div>
              <div>{content.brand.address.line2}</div>
            </address>
            <div className="mt-4 text-body-sm opacity-95">
              <div>
                <a href={content.brand.phoneHref} className="hover:underline">
                  {content.brand.phone}
                </a>
              </div>
              {content.brand.email ? (
                <div>
                  <a href={`mailto:${content.brand.email}`} className="hover:underline">
                    {content.brand.email}
                  </a>
                </div>
              ) : null}
            </div>
            <div className="mt-4 text-body-sm opacity-95">
              {content.brand.hours.map((h) => (
                <div key={h.days}>
                  <span className="font-bold">{h.days}:</span> {h.time}
                </div>
              ))}
            </div>
          </div>

          {content.footer.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-body font-extrabold">{col.heading}</h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-body-sm opacity-95 hover:opacity-100 hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-body-sm opacity-90">
          <div>{content.footer.copy}</div>
        </div>
      </div>
    </footer>
  );
}
