import { ElementType, ReactNode } from 'react';

/**
 * DisplayHeading — 1776's signature italic-on-serif emphasis pattern.
 *
 * Pairs an UPRIGHT serif word/phrase with an ITALIC serif word/phrase.
 * Used 7+ times across the original 1776 site:
 *   "Signature *Selections*"
 *   "More than a *meal.*"
 *   "Voices of *Experience*"
 *   "Reserve Your *Table* Tonight"
 *   ...
 *
 * THE highest-leverage cross-template reusable observed in the catalog.
 * Strong shared-promotion candidate.
 *
 * Props:
 *   upright           — first word(s), rendered upright
 *   italic            — emphasized word(s), rendered italic (often the noun)
 *   trailingUpright   — optional third word(s) AFTER the italic (e.g., "Tonight" in "Reserve Your *Table* Tonight")
 *   layout            — 'inline' (default) or 'stacked'
 *   as                — heading element (h1/h2/h3) — defaults to h2
 *   size              — 'page' | 'section-h1' | 'section-h2' (maps to type tokens)
 *   align             — 'left' | 'center'
 *   italicColor       — CSS color for the italic emphasis (defaults to text — 1776 uses cream for most, accent-amber sparingly)
 */
export function DisplayHeading({
  upright,
  italic,
  trailingUpright,
  layout = 'inline',
  as: Tag = 'h2',
  size = 'section-h1',
  align = 'left',
  italicColor,
  className = '',
}: {
  upright: string;
  italic: string;
  trailingUpright?: string;
  layout?: 'inline' | 'stacked';
  as?: ElementType;
  size?: 'page' | 'page-md' | 'section-h1' | 'section-h2';
  align?: 'left' | 'center';
  italicColor?: string;
  className?: string;
}) {
  const sizeClass = {
    'page':       'text-[52px] leading-[48px] tracking-[1.2px] sm:text-page-title',
    'page-md':    'text-[48px] leading-[46px] tracking-[1.2px] sm:text-page-title-md',
    'section-h1': 'text-[36px] leading-[40px] tracking-[0.8px] sm:text-section-h1',
    'section-h2': 'text-[30px] leading-[34px] tracking-[0.7px] sm:text-section-h2',
  }[size];

  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <Tag className={`font-display text-text ${sizeClass} ${alignClass} ${className}`}>
      <span>{upright}</span>
      {layout === 'stacked' ? <br /> : ' '}
      <em
        className="not-italic font-display"
        style={{ fontStyle: 'italic', color: italicColor }}
      >
        {italic}
      </em>
      {trailingUpright && <span>{trailingUpright}</span>}
    </Tag>
  );
}

type DHProps =
  | (Parameters<typeof DisplayHeading>[0] & { content?: undefined })
  | (Omit<Parameters<typeof DisplayHeading>[0], 'upright' | 'italic'> & {
      content: { upright: string; italic: string; layout?: 'inline' | 'stacked' };
    });

/** Convenience: unwraps the content schema's DisplayHeadingContent shape. */
export function DH(props: DHProps): ReactNode {
  if ('content' in props && props.content) {
    const { content, ...rest } = props;
    return <DisplayHeading {...rest} {...content} />;
  }
  return <DisplayHeading {...(props as Parameters<typeof DisplayHeading>[0])} />;
}
