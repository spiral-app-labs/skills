// StarRating — inline 5-star glyph + numeric rating + review count.
// Used inside HeroTestimonialCard. Uses the warm-ochre accent so stars read
// against varied photography (lavender would disappear).

type Props = {
  rating: number;
  reviewCount: number;
  className?: string;
};

export function StarRating({ rating, reviewCount, className = '' }: Props) {
  const full = Math.floor(rating);
  const hasHalf = rating - full >= 0.4;
  const totalStars = 5;

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="font-body text-[15px] font-medium text-ink">
        {rating.toFixed(1)}
      </span>
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
        ({reviewCount.toLocaleString()} Reviews)
      </span>
    </div>
  );
}
