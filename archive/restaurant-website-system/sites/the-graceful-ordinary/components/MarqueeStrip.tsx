/**
 * MarqueeStrip — horizontally scrolling positioning strip with diamond bullets.
 *
 * "Gluten Free ◆ Fine Dining ◆ Crystal Lake ◆ Farm to Table"
 *
 * Solves "what to say in one line about ourselves" elegantly.
 * Strong shared candidate after 2nd template uses it.
 *
 * Implementation: doubled content + CSS keyframe translateX(0) → translateX(-50%).
 * Hardware-accelerated transform, no JS scroll.
 */
import { content } from '../content.example';

export function MarqueeStrip({
  items = content.marquee.items as readonly string[],
  separator = content.marquee.separator,
}: {
  items?: readonly string[];
  separator?: string;
} = {}) {
  // Doubled so the loop is seamless (translateX(-50%) lands on the duplicate's start)
  const segment = (
    <span className="flex items-center gap-6 px-4 text-text/50 md:gap-10 md:px-5 md:text-text/40">
      {items.map((label, i) => (
        <span key={i} className="flex items-center gap-6 font-display italic md:gap-10" style={{ fontSize: 'clamp(22px, 7vw, 36px)', letterSpacing: '1.5px' }}>
          {label}
          <span className="text-accent/40 not-italic font-body" style={{ fontSize: '14px' }}>
            {separator}
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="border-y border-border/30 py-5 md:overflow-hidden md:py-8">
      <div className="flex flex-wrap justify-center gap-2 px-5 md:hidden">
        {items.map((label) => (
          <span
            key={label}
            className="rounded-pill border border-border/50 bg-surface px-3 py-1.5 font-display text-[17px] italic tracking-[1px] text-text/70"
          >
            {label}
          </span>
        ))}
      </div>
      <div className="hidden w-max animate-marquee md:flex">
        {segment}
        {segment}
      </div>
    </div>
  );
}
