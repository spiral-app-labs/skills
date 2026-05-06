/**
 * HorizontalMarquee — repeated-phrase horizontal scrolling strip.
 *
 * Variant of 1776's diamond-bullet marquee — this one just repeats the phrase
 * with no separator, producing a more rhythmic than punctuated feel.
 *
 * Cream-section variant (dark text on cream bg) used in bramble.
 */
export function HorizontalMarquee({
  text = 'Opening Times',
  repeat = 8,
  variant = 'dark-on-cream',
  className = '',
}: {
  text?: string;
  repeat?: number;
  variant?: 'dark-on-cream' | 'cream-on-dark';
  className?: string;
}) {
  const bg    = variant === 'cream-on-dark' ? 'bg-bg-dark' : 'bg-bg-cream';
  const color = variant === 'cream-on-dark' ? 'text-text-cream' : 'text-text-dark';

  return (
    <div className={`py-7 ${bg} ${className}`}>
      <p className={`px-6 text-center ${color} font-display text-[clamp(34px,7vw,82px)] uppercase tracking-[0.12em]`} style={{ fontWeight: 300 }}>
        {text}
      </p>
    </div>
  );
}
