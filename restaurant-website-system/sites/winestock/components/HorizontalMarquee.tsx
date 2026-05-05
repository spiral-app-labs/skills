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

  // Doubled so the loop is seamless (translateX(-50%) lands on the duplicate's start)
  const segment = (
    <span className={`flex items-center gap-14 px-7 ${color} font-display text-marquee-item`} style={{ fontWeight: 300 }}>
      {Array.from({ length: repeat }).map((_, i) => (
        <span key={i}>{text}</span>
      ))}
    </span>
  );

  return (
    <div className={`overflow-hidden py-6 ${bg} ${className}`}>
      <p className={`md:hidden px-6 text-center ${color} font-display text-3xl uppercase tracking-[0.12em]`} style={{ fontWeight: 300 }}>
        {text}
      </p>
      <div className="hidden md:flex w-max animate-marquee">
        {segment}
        {segment}
      </div>
    </div>
  );
}
