// BookATableButton — primary reservation CTA with small calendar glyph.
// Cream-filled, dark text, pill. Lives in the hero sidebar on home.

import Link from 'next/link';

type Props = {
  label: string;
  href: string;
  className?: string;
  variant?: 'primary' | 'ghost';
};

export function BookATableButton({
  label,
  href,
  className = '',
  variant = 'primary',
}: Props) {
  const base =
    'inline-flex w-full items-center justify-between gap-3 rounded-button px-5 py-3 font-body text-button font-medium transition-opacity';
  const styles =
    variant === 'primary'
      ? 'bg-ink text-canvas hover:opacity-90'
      : 'border border-ink/25 bg-transparent text-ink hover:border-ink/60';

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      <span>{label}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <rect x="3" y="4.5" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" strokeLinecap="round" />
      </svg>
    </Link>
  );
}
