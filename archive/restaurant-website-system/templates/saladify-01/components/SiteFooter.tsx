'use client';

import Link from 'next/link';
import { content } from '../content.example';
import { PhotoStripFooter } from './PhotoStripFooter';

// SiteFooter — deep-red-brown bg with photo strip above + newsletter row +
// 3-column (Hours / Address / Info) columns + social + bottom meta.

export function SiteFooter() {
  return (
    <footer className="bg-accent-brown text-text-on-dark">
      <PhotoStripFooter />

      <div className="mx-auto max-w-shell px-6 md:px-10 pt-16 pb-12">
        {/* Top: wordmark + newsletter */}
        <div className="grid md:grid-cols-2 gap-10 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-10 w-10 rounded-full bg-canvas-green text-accent-green grid place-items-center font-display text-2xl">S</span>
              <span className="font-display text-3xl">{content.brand.wordmark}</span>
            </div>
            <p className="text-body text-text-on-dark/70 max-w-sm">{content.brand.description}</p>
          </div>
          <div>
            <h4 className="font-display text-2xl text-text-on-dark">{content.newsletter.heading}</h4>
            <p className="mt-2 text-body-sm text-text-on-dark/70">{content.newsletter.body}</p>
            <form className="mt-5 flex gap-3 flex-wrap">
              <input
                type="email"
                placeholder={content.newsletter.placeholder}
                className="flex-1 min-w-[200px] rounded-input bg-white/10 border border-white/20 px-4 py-3 text-body text-text-on-dark placeholder:text-text-on-dark/50 focus:outline-none focus:border-canvas-green"
              />
              <button
                type="submit"
                className="rounded-button bg-accent-orange px-6 py-3 font-body text-button text-text-on-dark hover:bg-accent-orange-dark transition-colors"
              >
                {content.newsletter.cta}
              </button>
            </form>
          </div>
        </div>

        {/* Columns */}
        <div className="grid md:grid-cols-4 gap-10 py-12">
          <div>
            <h5 className="font-display text-xl mb-4">Opening Hours</h5>
            <ul className="space-y-1 text-body-sm text-text-on-dark/80">
              {content.brand.hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span>{h.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-display text-xl mb-4">Address</h5>
            <p className="text-body-sm text-text-on-dark/80">
              {content.brand.address.line1}<br />
              {content.brand.address.line2}<br />
              {content.brand.phone}
            </p>
          </div>
          <div>
            <h5 className="font-display text-xl mb-4">Information</h5>
            <ul className="space-y-1 text-body-sm text-text-on-dark/80">
              {content.nav.primary.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-canvas-green transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-display text-xl mb-4">Follow</h5>
            <ul className="space-y-1 text-body-sm text-text-on-dark/80">
              {content.brand.social.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="hover:text-canvas-green transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-body-sm text-text-on-dark/50 flex items-center justify-between flex-wrap gap-3">
          <span>© {new Date().getFullYear()} {content.brand.name}. All rights reserved.</span>
          <span>Made with fresh greens.</span>
        </div>
      </div>
    </footer>
  );
}
