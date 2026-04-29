// TrustStrip — 4-stat horizontal band beneath the hero, surfacing the review
// count + heritage + ranking + party capacity. Counters §3.1/§3.2 violations
// from the audit (HIDDEN reviews + MISSED "since YYYY").

import { content } from '../content.example';
import { StatCounter } from './StatCounter';

export function TrustStrip() {
  const items = content.trustStrip.items;
  return (
    <section className="bg-ink text-text-on-dark">
      <div className="max-w-content mx-auto px-5 md:px-10 py-8 md:py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <StatCounter
                value={item.stat}
                className="block text-[24px] md:text-[36px] leading-[1.1] font-extrabold text-accent"
              />
              <div className="mt-1 text-body-sm opacity-85">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
