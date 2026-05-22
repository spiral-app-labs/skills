// PepperWordmark — Cherry Bomb One bubble-letter brand treatment.
// Template-specific; per audit §11 do NOT promote to shared.

import { content } from '../content';

type Props = {
  color?: 'accent' | 'on-brand' | 'ink';
  size?: 'sm' | 'md' | 'lg';
};

export function PepperWordmark({ color = 'accent', size = 'md' }: Props) {
  const colorClass =
    color === 'on-brand' ? 'text-text-on-brand'
    : color === 'ink' ? 'text-ink'
    : 'text-accent';

  const sizeClass =
    size === 'sm' ? 'text-[24px] leading-[28px]'
    : size === 'lg' ? 'text-[44px] leading-[52px]'
    : 'text-[36px] leading-[43px]';

  return (
    <span className={`font-wordmark inline-block ${colorClass} ${sizeClass}`}>
      {content.brand.name}
    </span>
  );
}
