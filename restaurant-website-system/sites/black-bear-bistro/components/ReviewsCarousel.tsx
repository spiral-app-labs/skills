import { content } from '../content.example';

export function ReviewsCarousel() {
  const reviews = content.reviews.items;
  const doubled = [...reviews, ...reviews];

  return (
    <section id="reviews" className="bg-canvas py-16 md:py-24" aria-labelledby="reviews-heading">
      <div className="max-w-plate mx-auto px-5 md:px-10">
        <div className="mb-8 max-w-[760px]">
          <div className="text-eyebrow text-accent">{content.reviews.eyebrow}</div>
          <h2
            id="reviews-heading"
            className="mt-3 text-section-h2 font-medium leading-none text-ink"
          >
            {content.reviews.heading}
          </h2>
        </div>
      </div>

      <div className="review-marquee relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-canvas to-transparent md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-canvas to-transparent md:block" />

        <div className="review-marquee-scroll overflow-x-auto px-5 pb-2 md:overflow-hidden md:px-0">
          <div className="review-marquee-track flex w-max gap-4 md:gap-5">
            {doubled.map((review, index) => (
              <article
                key={`${review.label}-${index}`}
                className="review-card w-[300px] shrink-0 snap-start rounded-card border border-divider bg-white/70 p-5 shadow-[0_18px_45px_rgba(30,30,28,0.06)] md:w-[360px]"
              >
                <div className="mb-4 flex items-center gap-1 text-accent" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      width="15"
                      height="15"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 1.5l2.63 5.33 5.87.85-4.25 4.14 1 5.84L10 14.9l-5.25 2.76 1-5.84L1.5 7.68l5.87-.85L10 1.5z"
                        fill="currentColor"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-body text-ink">{review.quote}</p>
                <p className="mt-5 text-body-sm font-semibold text-accent">
                  {review.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
