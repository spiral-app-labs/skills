'use client';

// PillTabFilter — category toggle with active-border.
// Audit §11 — promote if 2nd consumer uses it.

interface Props {
  categories: readonly string[];
  active: string;
  onChange: (c: string) => void;
}

export function PillTabFilter({ categories, active, onChange }: Props) {
  return (
    <div className="inline-flex items-center rounded-pill bg-canvas-cream p-1.5 gap-1">
      {categories.map((c) => {
        const isActive = c === active;
        return (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            className={
              isActive
                ? 'rounded-pill px-5 py-2 font-body text-button bg-canvas border-2 border-accent-orange text-accent-brown'
                : 'rounded-pill px-5 py-2 font-body text-button text-accent-brown/70 hover:text-accent-brown transition-colors'
            }
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}
