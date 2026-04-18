import { content } from '../content.example';

/**
 * MinimalFooter — single-line attribution footer.
 *
 * Qitchen's footer is intentionally minimal — no address/hours/social repeat.
 * The editorial discipline assumes the page itself has surfaced what's needed.
 *
 * RISK: for restaurants where address/hours visibility matters (most
 * neighborhood spots), swap this for a fuller footer in your fork.
 */
export function MinimalFooter() {
  return (
    <footer className="px-6 py-6 text-center">
      <p className="text-ui-label text-text-muted/70">{content.footer.text}</p>
    </footer>
  );
}
