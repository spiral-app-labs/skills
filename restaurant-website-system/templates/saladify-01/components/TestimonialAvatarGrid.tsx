import { content } from '../content.example';

// TestimonialAvatarGrid — 4-card community-testimonial grid with avatar + name +
// star rating + quote. Audit §7 notes: for storefront forks, replace content
// with Google/Yelp review screenshots; the structure stays.

export function TestimonialAvatarGrid() {
  const { testimonials } = content;
  return (
    <section className="bg-canvas-cream py-20 md:py-28">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="font-display text-section-h2 text-accent-brown">{testimonials.heading}</h2>
          <p className="mt-4 text-body text-text-muted">{testimonials.sub}</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.items.map((t) => (
            <div key={t.name} className="bg-canvas rounded-card p-6 shadow-[0_4px_18px_rgba(51,22,18,0.05)]">
              <div className="flex items-center gap-3 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.avatar} alt="" className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="font-body font-semibold text-accent-brown text-body-sm leading-tight">{t.name}</p>
                  <p className="text-body-sm text-text-muted leading-tight">{t.handle}</p>
                </div>
              </div>
              <div className="mb-3 text-accent-orange" aria-label={`${t.rating} out of 5 stars`}>
                {'★'.repeat(t.rating)}
              </div>
              <p className="text-body-sm text-text leading-relaxed">“{t.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
