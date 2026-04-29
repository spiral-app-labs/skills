import Link from 'next/link';
import { content } from '../content.example';

/**
 * BrambleWordmarkFooter — stacked-vinyl decoration + wordmark + credit.
 *
 * Light footer, NOT the same rich-multi-column pattern as 1776. Bramble's
 * info (hours, address, social) lives inline on the page, not in the footer.
 */
export function BrambleWordmarkFooter() {
  const b = content.brand;
  return (
    <footer className="bg-bg-cream px-6 pt-10 pb-8 text-text-dark">
      <div className="mx-auto h-px max-w-3xl bg-text-dark/20" />
      <h2 className="text-center font-display text-page-title mt-4" style={{ fontWeight: 300 }}>
        {content.footer.wordmark}
      </h2>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-address">
        <Link href={b.reservationUrl} target="_blank" rel="noreferrer" className="vp-link-rail hover:text-text-muted">Reserve</Link>
        <Link href={b.orderUrl} target="_blank" rel="noreferrer" className="vp-link-rail hover:text-text-muted">Toast Order</Link>
        <Link href={b.giftCardUrl} target="_blank" rel="noreferrer" className="vp-link-rail hover:text-text-muted">Gift Cards</Link>
        <Link href={b.instagramUrl} target="_blank" rel="noreferrer" className="vp-link-rail hover:text-text-muted">Instagram</Link>
      </div>
      <p className="text-center mt-6 text-address text-text-muted">{content.footer.credit}</p>
    </footer>
  );
}
