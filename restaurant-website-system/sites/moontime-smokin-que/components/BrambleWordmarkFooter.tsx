import Link from 'next/link';
import { content } from '../content.example';

/**
 * BrambleWordmarkFooter — light wordmark signoff adapted for Moontime.
 */
export function BrambleWordmarkFooter() {
  return (
    <footer className="bg-bg-cream px-6 pt-10 pb-8 text-text-dark">
      <h2 className="text-center font-display text-page-title mt-4" style={{ fontWeight: 300 }}>
        {content.footer.wordmark}
      </h2>
      <p className="mx-auto mt-5 max-w-xl text-center text-body text-text-muted">{content.footer.note}</p>
      <p className="text-center mt-6 text-address text-text-muted">{content.footer.credit}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-button">
        {content.footer.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sauce-red transition-colors hover:text-text-dark"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
