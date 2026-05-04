import type { ReactNode } from 'react';

export type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  rotate?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
  ease?: unknown;
  as?: 'div' | 'section' | 'article' | 'aside' | 'span' | 'li';
  className?: string;
};

export function ScrollReveal({ children, as = 'div', className }: ScrollRevealProps) {
  const Tag = as as keyof JSX.IntrinsicElements;
  return <Tag className={className}>{children}</Tag>;
}

export const ScrollRevealSubtle = (props: ScrollRevealProps) => <ScrollReveal {...props} />;
export const ScrollRevealStandard = (props: ScrollRevealProps) => <ScrollReveal {...props} />;
export const ScrollRevealScrapbook = (props: ScrollRevealProps) => <ScrollReveal {...props} />;
