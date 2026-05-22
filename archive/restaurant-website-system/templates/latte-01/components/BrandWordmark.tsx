/**
 * BrandWordmark — hand-drawn-feel "Latte Haven" wordmark stand-in.
 *
 * Audit §4 / §12.4 notes the original is a custom hand-lettered SVG asset. We
 * substitute with Poppins italic + slight rotation + stacked "Latte / Haven"
 * to approximate the scribbly script feel without shipping an SVG we don't own.
 * Real fork: replace with custom SVG logo.
 */

import { content } from '../content.example';

type Size = 'sm' | 'md' | 'lg';

const sizeMap: Record<Size, string> = {
  sm: 'text-[22px]',
  md: 'text-[32px]',
  lg: 'text-[54px]',
};

export function BrandWordmark({ size = 'sm' }: { size?: Size }) {
  const parts = content.brand.name.split(' ');
  const line1 = parts[0];
  const line2 = parts.slice(1).join(' ');
  return (
    <span
      className={`wordmark-script text-ink ${sizeMap[size]}`}
      aria-label={content.brand.name}
    >
      <span>{line1}</span>
      {line2 ? <span className="wordmark-line-2">{line2}</span> : null}
    </span>
  );
}
