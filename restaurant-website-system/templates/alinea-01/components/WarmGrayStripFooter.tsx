import { content } from '../content.example';

/**
 * WarmGrayStripFooter — paired footer strip with wordmark + address + email + social.
 * Deliberately minimal: no nav, no copyright bloat. Just attribution.
 */
export function WarmGrayStripFooter() {
  return (
    <footer className="bg-strip-warm text-text-strip py-14 px-6">
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-[1fr_auto_auto] gap-10 items-start">
        <div>
          <div className="font-display text-[32px] leading-none italic mb-5">{content.brand.name}</div>
          <div className="text-body-sm text-text-strip/90">{content.brand.address.line1}</div>
          <div className="text-body-sm text-text-strip/90">{content.brand.address.line2}</div>
          <a href={`mailto:${content.brand.email}`} className="mt-3 inline-block text-body-sm text-text-strip underline-offset-4 hover:underline">
            {content.brand.email}
          </a>
        </div>
        <div />
        <div className="flex items-center gap-4">
          {content.brand.social.map((s) => (
            <a key={s.label} href={s.href} aria-label={s.label} className="hover:opacity-70 transition-opacity">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                {s.icon === 'facebook' ? (
                  <path d="M13 22v-8h3l.5-4H13V7.5c0-1.2.3-2 2-2h2.2V2.1C16.8 2 15.5 2 14.2 2 11.5 2 9.7 3.7 9.7 6.7V10H6v4h3.7v8H13z" />
                ) : (
                  <path d="M12 2.2c3.2 0 3.6 0 4.8.07 1.2.06 2 .27 2.5.45.6.25 1.1.55 1.5 1 .4.4.7.9 1 1.5.18.5.4 1.3.45 2.5.06 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.06 1.2-.27 2-.45 2.5-.25.6-.55 1.1-1 1.5-.4.4-.9.7-1.5 1-.5.18-1.3.4-2.5.45-1.2.06-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.06-2-.27-2.5-.45a4 4 0 0 1-1.5-1 4 4 0 0 1-1-1.5c-.18-.5-.4-1.3-.45-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.06-1.2.27-2 .45-2.5.25-.6.55-1.1 1-1.5.4-.4.9-.7 1.5-1 .5-.18 1.3-.4 2.5-.45C8.4 2.2 8.8 2.2 12 2.2zm0 3.4a4.4 4.4 0 1 1 0 8.8 4.4 4.4 0 0 1 0-8.8zm0 2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8z" />
                )}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
