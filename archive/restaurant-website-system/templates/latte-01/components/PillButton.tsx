import Link from 'next/link';

/**
 * PillButton — solid black pill or outlined cream pill. The only CTA style in
 * the template. Audit §4 confirms pill radius ~24-28px; we use full pill.
 */

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'solid' | 'outline';
  className?: string;
};

export function PillButton({ href, children, variant = 'solid', className = '' }: Props) {
  const base =
    'inline-flex items-center justify-center rounded-button px-6 py-3 text-button transition-colors';
  const styles =
    variant === 'solid'
      ? 'bg-cta-bg text-cta-text hover:opacity-80'
      : 'border border-ink bg-transparent text-ink hover:bg-ink hover:text-cta-text';
  const isExternal = href.startsWith('http');
  if (isExternal) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
