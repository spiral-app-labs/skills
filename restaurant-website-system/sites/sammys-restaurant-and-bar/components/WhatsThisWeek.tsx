'use client';

import { content } from '../content.example';

// Repeat-visit programming surface (Tuesday karaoke + Friday fish fry +
// Saturday live bands + breakfast-all-day). Surfaces the rituals that
// the audit's Block 2 Secret-Sauce + Block 3 Principle 5.5 require to
// live on the owned home page.

export function WhatsThisWeek() {
  const { eyebrow, heading, sub, items } = content.whatsOn;

  return (
    <section
      id="whats-on"
      className="max-w-plate mx-auto px-5 md:px-10 py-16 md:py-24 border-t border-divider"
    >
      <div className="max-w-[68ch] mb-10 md:mb-14">
        <p className="text-eyebrow uppercase tracking-[0.16em] text-accent font-medium mb-4">
          {eyebrow}
        </p>
        <h2 className="font-display text-section-h2 font-medium text-ink">{heading}</h2>
        <p className="mt-4 text-body text-ink-muted">{sub}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
        {items.map((it) => (
          <div
            key={it.day + it.title}
            className="rounded-card bg-canvas-alt p-6 border border-divider hover:-translate-y-1 hover:shadow-md transition-transform duration-300"
          >
            <p className="text-eyebrow uppercase tracking-[0.16em] text-accent font-medium">
              {it.day}
            </p>
            <h3 className="mt-3 font-display text-section-h3 font-medium text-ink">
              {it.title}
            </h3>
            <p className="mt-2 text-body-sm text-ink-muted leading-snug">{it.body}</p>
            <p className="mt-4 text-body-sm font-medium text-ink">{it.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
