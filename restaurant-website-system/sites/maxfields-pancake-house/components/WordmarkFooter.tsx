import { content } from '../content';

export function WordmarkFooter() {
  const { wordmark, footer, brand } = content;
  return (
    <footer className="bg-canvas pt-12 md:pt-24 pb-10">
      <div className="overflow-hidden px-2 md:px-4">
        <div className="wordmark-footer">{wordmark}</div>
      </div>

      <div className="max-w-plate mx-auto px-5 md:px-10 mt-10 md:mt-14 grid md:grid-cols-[1fr_auto] gap-8">
        <div className="text-body text-ink-muted max-w-[32ch]">{footer.tagline}</div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
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
        {brand.social.length > 0 ? (
          <div className="flex items-center gap-5">
            {brand.social.map((s) => (
              <a key={s.label} href={s.href} className="text-body-sm text-ink-muted hover:text-accent transition-colors">
                {s.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}
