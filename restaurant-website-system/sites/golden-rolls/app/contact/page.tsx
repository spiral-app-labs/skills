import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fbf5ea] text-[#132018]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5"><Link href="/" className="font-display text-2xl">Golden Rolls</Link><Link href="/menu" className="rounded-full bg-[#f59f3a] px-4 py-2 text-sm font-semibold">Menu</Link></nav>
      <section className="bg-[#071510] px-5 py-16 text-white"><div className="mx-auto max-w-6xl"><p className="text-sm uppercase tracking-[0.24em] text-[#f59f3a]">Visit · call · directions</p><h1 className="mt-3 font-display text-5xl md:text-7xl">Visit Golden Rolls.</h1><p className="mt-5 max-w-2xl text-white/75">790 S Eastwood Dr, Woodstock, IL 60098. Call for current dine-in, takeout, delivery, and specials.</p></div></section>
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 md:grid-cols-3">
        <a href="tel:+18153085099" className="rounded-[2rem] bg-white p-7 shadow-sm"><p className="text-sm uppercase tracking-[0.24em] text-[#b56a19]">Phone</p><h2 className="mt-3 font-display text-3xl">(815) 308-5099</h2></a>
        <a href="https://www.google.com/maps/search/Golden+Rolls+790+S+Eastwood+Dr+Woodstock+IL" className="rounded-[2rem] bg-white p-7 shadow-sm"><p className="text-sm uppercase tracking-[0.24em] text-[#b56a19]">Address</p><h2 className="mt-3 font-display text-3xl">790 S Eastwood Dr</h2><p className="mt-2 text-[#536054]">Woodstock, IL 60098</p></a>
        <a href="https://goldenrollssushi.com/" className="rounded-[2rem] bg-white p-7 shadow-sm"><p className="text-sm uppercase tracking-[0.24em] text-[#b56a19]">Official site</p><h2 className="mt-3 font-display text-3xl">goldenrollssushi.com</h2></a>
      </section>
      <section className="px-5 pb-16"><div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-sm"><iframe title="Golden Rolls map" src="https://www.google.com/maps?q=Golden%20Rolls%20790%20S%20Eastwood%20Dr%20Woodstock%20IL&output=embed" className="h-[420px] w-full border-0" loading="lazy" /></div></section>
    </main>
  );
}
