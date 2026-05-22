/**
 * EyebrowDotLabel — orange-dot + uppercase tracked-out label.
 * Unifying micro-pattern across every section. Strong shared candidate.
 *
 * Usage: <EyebrowDotLabel>Popular Category</EyebrowDotLabel>
 */
export function EyebrowDotLabel({
  children,
  tone = 'dark',
  className = '',
}: {
  children: React.ReactNode;
  tone?: 'dark' | 'light';
  className?: string;
}) {
  const text = tone === 'light' ? 'text-text-white' : 'text-text-dark';
  return (
    <span className={`inline-flex items-center gap-2 text-eyebrow font-body font-semibold ${text} ${className}`}>
      <span className="inline-block h-[8px] w-[8px] rounded-full bg-accent" aria-hidden />
      <span>{children}</span>
    </span>
  );
}
