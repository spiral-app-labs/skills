import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * ContactHeadlineBlock — "Watch on here" eyebrow + centered play button + headline.
 */
export function ContactHeadlineBlock() {
  const h = content.contactPage.headline;
  return (
    <section className="bg-bg-white px-6 py-10 text-center md:py-16">
      <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-xl text-text-white md:mb-6 md:h-16 md:w-16">
        +
      </div>
      <EyebrowDotLabel className="mb-3">{h.eyebrow}</EyebrowDotLabel>
      <h2 className="font-display text-section-h3 text-text-dark max-w-2xl mx-auto">{h.title}</h2>
    </section>
  );
}
