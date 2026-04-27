import { content } from '../content.example';

// WordmarkFooter — SHARED CANDIDATE (second appearance after velvet-shaker).
// Massive lowercase wordmark as brand-memory moment + thin info strip below.
// Live text (not SVG) with Urbanist 700 + negative tracking to approximate
// the source's display-cut weight. Scales responsively via clamp() in
// globals.css (.wordmark-footer).
export function WordmarkFooter() {
  const { wordmark, footer, brand } = content;
  return (
    <footer className="bg-canvas pt-16 md:pt-24 pb-10">
      <div className="overflow-hidden px-2 md:px-4">
        <div className="wordmark-footer">{wordmark}</div>
      </div>

      <div className="max-w-plate mx-auto px-5 md:px-10 mt-10 md:mt-14 grid md:grid-cols-[1fr_auto] gap-8">
        <div className="text-body text-ink-muted max-w-[32ch]">{footer.tagline}</div>
        <div className="grid sm:grid-cols-3 gap-8 md:gap-12">
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-eyebrow text-ink mb-3">{col.heading}</h4>
              <ul className="space-y-1">
                {col.lines.map((line) => (
                  <li key={line} className="text-body-sm text-ink-muted">{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-plate mx-auto px-5 md:px-10 mt-10 pt-6 border-t border-divider flex flex-wrap items-center justify-between gap-4">
        <div className="text-body-sm text-ink-muted">{footer.copyright}</div>
        <div className="flex items-center gap-5">
          {brand.social.map((s) => (
            <a key={s.label} href={s.href} className="text-body-sm text-ink-muted hover:text-accent transition-colors" target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
