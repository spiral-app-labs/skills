import { content } from '../content';
import { GreekKeyDivider } from './GreekKeyDivider';

/**
 * LovedGrid — "Five things on every Sunday-morning short list." Replaces the
 * latte template's BlogPreviewGrid slot with a review-derived grid of the
 * 5 secret-sauce items the audit surfaced (3/4-lb cinnamon roll, Greek
 * skillet, Wednesday pasticio, Caitlyn-the-waitress, the corner & patio).
 *
 * No photos by design — pure copy + Greek-key dividers — so it ships even
 * before the owner sends a curated photo grid (audit Block 5 photo gate).
 */
export function LovedGrid() {
  const l = content.loved;
  return (
    <section id="loved" className="w-full bg-canvas py-16 md:py-24">
      <div className="max-w-page mx-auto px-5 md:px-10">
        <div className="mb-10 md:mb-14 text-center flex flex-col items-center gap-3">
          <p className="text-eyebrow-sm text-ink-muted uppercase tracking-[0.18em]">
            {l.eyebrow}
          </p>
          <h2 className="font-display text-section-h2 text-ink max-w-3xl">
            {l.heading}
          </h2>
          <GreekKeyDivider className="h-3 w-32 text-accent mt-1" />
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
          {l.items.map((item, i) => (
            <li
              key={item.title}
              className="bg-card rounded-card p-6 border border-divider/50 flex flex-col gap-3"
            >
              <span className="text-eyebrow-sm text-accent font-medium tracking-wider">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-h3 text-ink leading-tight">
                {item.title}
              </h3>
              <p className="text-body text-ink-muted">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
