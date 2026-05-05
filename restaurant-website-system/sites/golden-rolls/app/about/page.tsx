import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbf5ea] text-[#132018]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5"><Link href="/" className="font-display text-2xl">Golden Rolls</Link><Link href="/menu" className="rounded-full bg-[#f59f3a] px-4 py-2 text-sm font-semibold">Menu</Link></nav>
      <section className="bg-[#071510] px-5 py-16 text-white"><div className="mx-auto max-w-6xl"><p className="text-sm uppercase tracking-[0.24em] text-[#f59f3a]">Bamzi route · casual sushi bistro</p><h1 className="mt-3 font-display text-5xl md:text-7xl">A hidden-gem story, not omakase theater.</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">Golden Rolls has the right proof for a moody sushi-bistro site: fresh generous rolls, a surprisingly nice interior, friendly service, and practical dine-in/takeout/delivery conversion.</p></div></section>
      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-14 md:grid-cols-4">
        {[
          ['4.6', 'Google rating at capture'],
          ['348', 'Google reviews visible'],
          ['4.7', 'Restaurantji rating'],
          ['Bamzi', 'Selected archetype'],
        ].map(([stat,label]) => <div key={label} className="rounded-3xl bg-white p-7 text-center shadow-sm"><div className="font-display text-4xl text-[#b56a19]">{stat}</div><p className="mt-2 text-sm text-[#536054]">{label}</p></div>)}
      </section>
      <section className="mx-auto max-w-4xl px-5 pb-16"><div className="rounded-[2rem] bg-white p-8 shadow-sm"><h2 className="font-display text-4xl">Build guardrails</h2><ul className="mt-6 space-y-4 leading-7 text-[#536054]"><li>• Keep the language truthful: polished local Japanese bistro, not luxury omakase.</li><li>• Sell the hidden-gem interior and big-roll review proof above the fold.</li><li>• Preserve real phone, address, hours, website, Facebook, dine-in, takeout, and delivery handoffs.</li><li>• Use review themes safely: freshness, generous portions, creative rolls, kind service, and reliable takeout.</li></ul></div></section>
    </main>
  );
}
