import type { ReactNode } from 'react';

// StickyColumn — wraps a column of content (typically an image or thumbnail
// stack) with position:sticky so it stays pinned while sibling content scrolls
// past. Mirrors Framer source's data-framer-name="Widget Wrap" pattern (5
// instances on the home page, all sticky containers for image groups).
//
// Use inside a multi-column grid where the OTHER column is taller. Sticky has
// no effect if the parent isn't tall enough — that's the desired no-op.

type Props = {
  children: ReactNode;
  className?: string;
  /** top offset in px. Default 80 (clears the non-sticky nav area). */
  top?: number;
};

export function StickyColumn({ children, className, top = 80 }: Props) {
  return (
    <div
      className={className}
      style={{ position: 'sticky', top }}
    >
      {children}
    </div>
  );
}
