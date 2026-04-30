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
    <span className="flex items-center gap-10 px-5 text-text/40">
      {items.map((label, i) => (
        <span key={i} className="flex items-center gap-10 font-display italic" style={{ fontSize: '36px' }}>
          {label}
          <span className="text-accent/40 not-italic font-body" style={{ fontSize: '14px' }}>
            {separator}
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="overflow-hidden border-y border-border/30 py-8">
      <div className="flex w-max animate-marquee">
        {segment}
        {segment}
      </div>
    </div>
  );
}
