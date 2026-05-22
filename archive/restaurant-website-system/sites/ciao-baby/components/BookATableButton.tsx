// BookATableButton — template CTA pill. For Ciao Baby the primary action is a
// phone handoff, not a fake reservation widget, so tel: links render a phone.

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
      {isPhone ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            d="M7.5 4.5l2.1 4.2-2 1.4c1.3 2.6 3.7 5 6.3 6.3l1.4-2 4.2 2.1-1 3.1c-.3.8-1.1 1.3-2 1.1C9.6 19.5 4.5 14.4 3.3 7.5c-.2-.9.3-1.7 1.1-2l3.1-1z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
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
      )}
    </Link>
  );
}
