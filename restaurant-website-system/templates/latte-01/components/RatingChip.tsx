/**
 * RatingChip — PROMOTE-NOW candidate (audit §11). Outlined cream pill with
 * provider + stars + numeric score. Used above hero h1 as eyebrow trust signal.
 *
 * Variant axes (future shared): provider (Google/Yelp/Tripadvisor), stars 3-5,
 * with/without numeric score.
 */

type Props = {
  provider?: string;
  stars?: number;
  score?: string;
};

export function RatingChip({
  provider = 'Google',
  stars = 5,
  score = '4.9',
}: Props) {
  const filled = Math.round(stars);
  return (
    <div
      className="inline-flex items-center gap-2 rounded-chip border border-chip-border bg-card px-4 py-2 text-eyebrow-sm text-ink"
      role="img"
      aria-label={`${provider} ${score} out of 5 stars`}
    >
      <span className="font-medium">{provider}</span>
      <span className="flex items-center" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="12"
            height="12"
            viewBox="0 0 20 20"
            fill={i < filled ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-star"
          >
            <path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.8 4.8 17.5l1-5.8L1.6 7.6l5.8-.8L10 1.5z" />
          </svg>
        ))}
      </span>
      <span className="text-ink-muted">({score})</span>
    </div>
  );
}
