import { content } from '../content.example';

function Stars() {
  return (
    <span className="flex gap-1 text-[15px] leading-none text-accent" aria-label="Five star review excerpt">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">
          ★
        </span>
      ))}
    </span>
  );
}

export function GoogleReviewProof() {
  const { reviews } = content;
  const reviewLoop = [reviews.items, reviews.items];

  return (
    <section id="reviews" className="w-full scroll-mt-24 bg-canvas-alt py-16 md:py-24">
      <div className="mx-auto max-w-shell px-4 md:px-12">
        <div className="mb-8 grid gap-6 md:mb-12 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="label-eyebrow mb-3 text-accent">{reviews.eyebrow}</p>
            <h2 className="font-display text-[42px] leading-[46px] text-ink md:text-section-h2">
              {reviews.heading}
            </h2>
          </div>
          <p className="text-body text-ink-muted md:col-span-5">{reviews.intro}</p>
        </div>

        <div className="mb-5 grid border border-hairline bg-canvas md:grid-cols-[1fr_2fr]">
          <div className="border-b border-hairline p-6 md:border-b-0 md:border-r md:p-8">
            <p className="label-eyebrow mb-4 text-accent">{reviews.aggregate.source}</p>
            <p className="font-display text-[70px] leading-none text-ink md:text-[96px]">
              {reviews.aggregate.rating}
            </p>
            <p className="mt-3 text-body text-ink-muted">
              {reviews.aggregate.count} Google reviews, including {reviews.aggregate.fiveStar} five-star reviews.
            </p>
          </div>
          <div className="p-6 md:p-8">
            <p className="label-eyebrow mb-4 text-accent">What Google topics repeat</p>
            <div className="flex flex-wrap gap-2">
              {reviews.topics.map((topic) => (
                <span key={topic} className="border border-hairline bg-canvas-alt px-3 py-2 text-body-sm text-ink">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="review-carousel relative overflow-hidden border-y border-hairline py-4"
          aria-label="Anonymous Google review excerpts carousel"
        >
          <div className="review-carousel-track flex w-max">
            {reviewLoop.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="flex gap-4 pr-4"
                aria-hidden={groupIndex === 1}
              >
                {group.map((item) => (
                  <article
                    key={`${groupIndex}-${item.theme}`}
                    className="flex min-h-[310px] w-[82vw] max-w-[360px] shrink-0 flex-col border border-hairline bg-canvas p-5 md:w-[340px] md:p-6"
                  >
                    <div className="mb-7 flex items-center justify-between gap-4">
                      <Stars />
                      <span className="label-eyebrow text-ink-muted">Google</span>
                    </div>
                    <blockquote className="font-display text-[32px] leading-9 text-ink">
                      “{item.quote}”
                    </blockquote>
                    <div className="mt-auto pt-8">
                      <p className="label-eyebrow mb-3 text-accent">{item.theme}</p>
                      <p className="text-body-sm text-ink-muted">{item.body}</p>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
