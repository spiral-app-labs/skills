import Link from 'next/link';
import { content } from '../content.example';

/**
 * ContactStripFooter — dark footer with "Timeless recipes..." headline + address/phone/email row + copyright.
 */
export function ContactStripFooter() {
  const b = content.brand;
  return (
    <footer className="bg-bg-dark text-text-white pt-20 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-10 items-start pb-12 border-b border-border-dark">
          <h3 className="font-display text-[44px] md:text-[56px] leading-tight text-text-white max-w-md">
            {content.timelessFooter.title}
          </h3>
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-text-white text-sm" aria-hidden>📍</span>
            <div>
              <div className="text-eyebrow text-text-muted-dark mb-1">Location</div>
              <div className="text-body-sm text-text-white">{b.address}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-text-white text-sm" aria-hidden>☎</span>
            <div>
              <div className="text-eyebrow text-text-muted-dark mb-1">Contact</div>
              <div className="text-body-sm text-text-white">{b.email}</div>
              <div className="text-body-sm text-text-white">{b.phone}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6">
          <div className="text-body-sm text-text-muted-dark">
            Copyright &amp; design by <span className="text-text-white">@FramerDevs</span>
          </div>
          <Link href="/" className="flex items-center gap-2">
            <span className="inline-block h-[22px] w-[22px] rounded-full bg-accent" aria-hidden />
            <span className="font-display text-[20px]">{b.name}</span>
          </Link>
          <div className="flex items-center gap-5 text-body-sm text-text-muted-dark">
            <Link href="#" className="hover:text-accent">Privacy</Link>
            <Link href="/contact" className="hover:text-accent">Contact</Link>
            <Link href="#" className="hover:text-accent">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
