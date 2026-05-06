// MenuStickyTestimonial — on /menu, the left column holds a full-height photo
// with a testimonial-overlay card that stays visually anchored (CSS sticky)
// while the right column scrolls through dish rows. Template-signature layout.
'use client';

import Image from 'next/image';
import { MenuDishRow } from './MenuDishRow';
import { StarRating } from './StarRating';
import { content } from '../content';

export function MenuStickyTestimonial() {
  const m = content.menu;

  return (
    <section className="mx-auto w-full max-w-shell px-4 pt-4 md:px-6 md:pt-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        {/* STICKY LEFT — photo + testimonial overlay */}
        <div className="md:col-span-5">
          <div className="md:sticky md:top-24">
            <div className="relative aspect-[4/5] overflow-hidden rounded-card">
              <Image
                src={m.hero.photo}
                alt={m.hero.photoAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="gusto-overlay-card absolute left-5 bottom-5 right-5 rounded-card p-6 md:left-6 md:bottom-6 md:p-7">
                <blockquote className="font-display italic text-hero-quote text-ink">
                  &ldquo;{m.hero.testimonial.quote}&rdquo;
                </blockquote>
                <p className="mt-4 font-body text-body-sm text-ink-muted">
                  {m.hero.testimonial.body}
                </p>
                <div className="mt-5 border-t border-divider pt-4">
                  <StarRating
                    proofLabel={m.hero.testimonial.proofLabel}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — menu list (page title + sections) */}
        <div className="md:col-span-7">
          <h1 className="mb-10 font-display text-page-title text-ink">Menu</h1>

          {m.sections.map((section) => (
            <div key={section.label} className="mb-12">
              <p className="mb-2 font-body text-menu-section uppercase tracking-wide text-ink-muted">
                {section.label}
              </p>
              <div>
                {section.items.map((item) => (
                  <MenuDishRow
                    key={item.name}
                    name={item.name}
                    desc={item.desc}
                    price={item.price}
                    photo={(item as { photo?: string }).photo}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
