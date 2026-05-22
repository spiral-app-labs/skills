import { StackedVinylDecor } from './StackedVinylDecor';
import { content } from '../content';

/**
 * BrambleWordmarkFooter — stacked-vinyl decoration + wordmark + credit.
 *
 * Light footer, NOT the same rich-multi-column pattern as 1776. Bramble's
 * info (hours, address, social) lives inline on the page, not in the footer.
 */
export function BrambleWordmarkFooter() {
  return (
    <footer className="bg-bg-cream px-6 pt-10 pb-8 text-text-dark">
      <StackedVinylDecor />
      <h2 className="text-center font-display text-page-title mt-4" style={{ fontWeight: 300 }}>
        {content.footer.wordmark}
      </h2>
      <p className="text-center mt-6 text-address text-text-muted">{content.footer.credit}</p>
    </footer>
  );
}
