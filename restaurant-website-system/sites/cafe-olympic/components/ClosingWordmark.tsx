import { content } from '../content';
import { BrandWordmark } from './BrandWordmark';

/**
 * ClosingWordmark — small-logo + tagline-h2 bookend (audit §3). Narrative
 * close that mirrors the hero. Removing either end breaks the bookend symmetry
 * (audit §12.4).
 */
export function ClosingWordmark() {
  const c = content.closing;
  return (
    <section className="w-full bg-canvas py-16 md:py-24">
      <div className="max-w-page mx-auto px-5 md:px-10 flex flex-col items-center text-center gap-6">
        <BrandWordmark size="sm" />
        <h2 className="font-sans text-section-h2 text-ink max-w-2xl">{c.tagline}</h2>
      </div>
    </section>
  );
}
