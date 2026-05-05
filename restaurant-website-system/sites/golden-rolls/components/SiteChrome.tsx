import Link from 'next/link';

const phoneHref = 'tel:+18153085099';
const directionsHref = 'https://www.google.com/maps/search/Golden+Rolls+790+S+Eastwood+Dr+Woodstock+IL';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071510]/95 text-white backdrop-blur">
      <nav className="mx-auto max-w-6xl px-5 py-4">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="font-display text-2xl leading-none">Golden Rolls</Link>
          <a href={phoneHref} className="rounded-full bg-[#f59f3a] px-4 py-2 text-sm font-semibold text-[#071510]">Call to order</a>
        </div>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/78 md:mt-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
          <Link href="/menu" className="hover:text-[#f59f3a]">Menu</Link>
          <Link href="/about" className="hover:text-[#f59f3a]">About</Link>
          <Link href="/contact" className="hover:text-[#f59f3a]">Contact</Link>
          <a href={directionsHref} className="hover:text-[#f59f3a]">Directions</a>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#071510] px-5 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="font-display text-2xl">Golden Rolls</div>
          <p className="mt-2 max-w-sm text-sm leading-6 text-white/70">Fresh sushi, generous rolls, and a calm Woodstock dining room at 790 S Eastwood Dr.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={phoneHref} className="rounded-full bg-[#f59f3a] px-4 py-2 text-sm font-semibold text-[#071510]">Call now</a>
            <a href={directionsHref} className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white">Directions</a>
          </div>
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.22em] text-[#f59f3a]">Visit</div>
          <p className="mt-2 text-white/80">790 S Eastwood Dr<br />Woodstock, IL 60098</p>
        </div>
        <div>
          <div className="text-sm uppercase tracking-[0.22em] text-[#f59f3a]">Call</div>
          <a className="mt-2 block text-white/80" href={phoneHref}>(815) 308-5099</a>
          <a className="mt-2 block text-white/60" href="https://goldenrollssushi.com/">goldenrollssushi.com</a>
        </div>
      </div>
    </footer>
  );
}
