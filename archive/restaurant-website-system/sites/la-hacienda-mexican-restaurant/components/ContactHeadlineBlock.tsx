import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

/**
 * ContactHeadlineBlock — "Watch on here" eyebrow + centered play button + headline.
 */
export function ContactHeadlineBlock() {
  const h = content.contactPage.headline;
  return (
    <section className="bg-bg-white py-20 px-6 text-center">
      <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent text-text-white text-xl">
        ☎
      </div>
      <EyebrowDotLabel className="mb-3">{h.eyebrow}</EyebrowDotLabel>
      <h2 className="font-display text-section-h3 text-text-dark max-w-2xl mx-auto">{h.title}</h2>
    </section>
  );
}
