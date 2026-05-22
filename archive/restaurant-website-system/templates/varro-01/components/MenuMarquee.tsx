'use client';
// MenuMarquee — horizontal scrolling "OUR MENU · OUR MENU" marquee strip.
// Per audit §11 — **PROMOTE-NOW**. 3rd template using this pattern
// (after 1776 + bramble). Formal graduation to shared/.

import { content } from '../content.example';

export function MenuMarquee() {
  const { phrase, separator, repeatCount } = content.menuMarquee;
  const items = Array.from({ length: repeatCount }, (_, i) => i);

  return (
    <section
      id="menu"
      aria-label="Menu marquee"
      className="py-10 lg:py-14 border-y border-divider overflow-hidden"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {[0, 1].map((loop) => (
          <div key={loop} className="flex items-center shrink-0">
            {items.map((i) => (
              <span
                key={`${loop}-${i}`}
                className="flex items-center font-display text-section-h3 text-ink uppercase"
              >
                <span className="px-6">{phrase}</span>
                <span className="text-accent text-3xl">{separator}</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
