/**
 * GreekKeyDivider — subtle Greek-meander rule used as a section divider and
 * as a flanking element on the hero wordmark. Per audit Block 5 register-risk:
 * use as DIVIDER ONLY, never as decoration. Single-color SVG that inherits
 * `currentColor`, repeated horizontally via `pattern`.
 */

type Props = {
  className?: string;
  mirrored?: boolean;
};

export function GreekKeyDivider({ className = '', mirrored = false }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 16"
      preserveAspectRatio="none"
      role="img"
      aria-hidden
      style={mirrored ? { transform: 'scaleX(-1)' } : undefined}
    >
      <defs>
        <pattern
          id={`greek-key-${mirrored ? 'r' : 'l'}`}
          x="0"
          y="0"
          width="20"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M0 14 H14 V4 H6 V10 H10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="square"
          />
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill={`url(#greek-key-${mirrored ? 'r' : 'l'})`}
      />
    </svg>
  );
}
