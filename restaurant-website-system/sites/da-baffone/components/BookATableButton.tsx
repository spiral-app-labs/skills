// BookATableButton — primary reservation CTA. For Da Baffone v1 this is
// phone-first, so tel: links render a phone glyph instead of a calendar.
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
  const isPhone = href.startsWith('tel:');
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
        {isPhone ? (
          <path
            d="M7.4 3.8l2.1 4.1-1.6 1.5c.9 1.8 2.3 3.2 4.1 4.1l1.5-1.6 4.1 2.1-.7 3.3c-.2.9-1 1.5-1.9 1.5C9.6 18.8 5.2 14.4 5.2 9c0-.9.6-1.7 1.5-1.9l.7-3.3z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <>
            <rect x="3" y="4.5" width="18" height="16" rx="2" />
            <path d="M3 9h18M8 2v4M16 2v4" strokeLinecap="round" />
          </>
        )}
      </svg>
    </Link>
  );
}
