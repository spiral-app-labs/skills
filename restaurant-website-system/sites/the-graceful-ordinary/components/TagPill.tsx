/**
 * TagPill — small dark-elevated rounded-pill label in tracked-out caps.
 * Used for: dish category tags (ENTREE / SIDE / FEATURE), dietary callouts,
 * footer credibility badges. Highest reusable atom in the system.
 */
export function TagPill({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-pill bg-surface/85 border border-border/60 text-micro text-text/80 ${className}`}
    >
      {children}
    </span>
  );
}
