// HeritageStamp — Ciao Baby-specific mini-mark.
// Avoids an unverified "Since" claim while still surfacing the downtown
// Barrington / family-run register that the audit and reviews support.

import { content } from '../content';

type Props = {
  className?: string;
  withCity?: boolean;
};

export function HeritageStamp({ className = '', withCity = true }: Props) {
  return (
    <span
      className={`font-body text-stamp uppercase text-ink-quiet ${className}`}
    >
      <span aria-hidden="true">&copy;</span>{' '}
      Family-run Italian
      {withCity && (
        <>
          <span className="mx-2 text-ink-quiet/60">·</span>
          {content.brand.city}
        </>
      )}
    </span>
  );
}
