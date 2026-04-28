// HeritageStamp — "© Since 1997 · Prague" mini-mark. Small cream-text in the
// hero-corner or under the fold. Shared promotion candidate (audit §11).
//
// Audit §1 / §5 flagged that the source template never shows the city anywhere
// load-bearing — address + city must be surfaced. This stamp adds city inline.

import { content } from '../content.example';

type Props = {
  className?: string;
  withCity?: boolean;
};

export function HeritageStamp({ className = '', withCity = true }: Props) {
  // Cucina Bella deviation: founding year not on current site; render city-only
  // until owner confirms. Keeps the watermark editorial without printing
  // "Since · Algonquin" with a missing year.
  const since = content.brand.since;
  return (
    <span
      className={`font-body text-stamp uppercase text-ink-quiet ${className}`}
    >
      <span aria-hidden="true">&copy;</span>{' '}
      {since ? <>Since {since}</> : <>{content.brand.name}</>}
      {withCity && (
        <>
          <span className="mx-2 text-ink-quiet/60">·</span>
          {content.brand.city}
        </>
      )}
    </span>
  );
}
