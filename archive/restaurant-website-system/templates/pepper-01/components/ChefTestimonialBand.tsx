// ChefTestimonialBand — full-bleed dark-bg 2-col (copy left, photo right) with
// pull-quote. Template-specific; audit §11 flags this as a weak fit for the
// casual register — forks often remove. Kept in pepper for parity.

import { content } from '../content.example';

export function ChefTestimonialBand() {
  const t = content.testimonial;
  return (
    <section className="bg-bg-dark text-text-on-dark">
      <div className="max-w-content mx-auto px-5 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="flex items-center gap-1 text-accent">
              {'★★★★★'.split('').map((s, i) => (
                <span key={i} className="text-[18px]">
                  {s}
                </span>
              ))}
              <span className="ml-2 text-body-sm tracking-widest font-bold">{t.eyebrow}</span>
            </div>
            <h2 className="mt-4 text-section-h2 font-extrabold">{t.heading}</h2>
            <p className="mt-4 text-body opacity-80">{t.body}</p>
            <figure className="mt-8 border-t border-white/15 pt-6">
              <blockquote className="text-body italic opacity-95">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-body-sm font-bold">{t.name}</figcaption>
            </figure>
          </div>
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={t.photo}
              alt={t.photoAlt}
              className="w-full h-full max-h-[520px] object-cover rounded-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
