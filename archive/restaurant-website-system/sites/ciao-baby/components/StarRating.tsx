// StarRating — inline star glyph + optional sourced proof label.
// For Ciao Baby we avoid publishing an unsourced aggregate rating/count; the
// label points to source-backed public review themes instead.

type Props = {
  rating?: number;
  reviewCount?: number;
  proofLabel?: string;
  className?: string;
};

export function StarRating({
  rating,
  reviewCount,
  proofLabel,
  className = '',
}: Props) {
  const displayRating = typeof rating === 'number' ? rating : 5;
  const full = Math.floor(displayRating);
  const hasHalf = displayRating - full >= 0.4;
  const totalStars = 5;

  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${className}`}>
      {typeof rating === 'number' && (
        <span className="font-body text-[15px] font-medium text-ink">
          {rating.toFixed(1)}
        </span>
      )}
      <span className="flex items-center gap-0.5">
        {Array.from({ length: totalStars }).map((_, i) => {
          const filled = i < full;
          const half = !filled && i === full && hasHalf;
          return (
            <svg
              key={i}
              width="14"
              height="14"
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="text-accent-warm"
            >
              <defs>
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="currentColor" />
                  <stop offset="50%" stopColor="currentColor" stopOpacity="0.25" />
                </linearGradient>
              </defs>
              <path
                d="M10 1.5l2.63 5.33 5.87.85-4.25 4.14 1 5.84L10 14.9l-5.25 2.76 1-5.84L1.5 7.68l5.87-.85L10 1.5z"
                fill={half ? `url(#half-${i})` : filled ? 'currentColor' : 'currentColor'}
                opacity={filled || half ? 1 : 0.25}
              />
            </svg>
          );
        })}
      </span>
      <span className="font-body text-body-sm text-ink-muted">
        {proofLabel ?? (typeof reviewCount === 'number' ? `(${reviewCount.toLocaleString()} Reviews)` : 'Customer praise')}
      </span>
    </div>
  );
}
