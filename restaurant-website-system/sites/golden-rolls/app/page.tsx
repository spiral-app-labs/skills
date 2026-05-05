import Link from 'next/link';
import { content } from '../content.example';
import { SiteFooter, SiteHeader } from '../components/SiteChrome';

const c = content;

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-[#fbf5ea] text-[#132018]">
        <section className="bg-[#071510] px-5 py-16 text-white md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.28em] text-[#f59f3a]">Woodstock sushi · dine-in · takeout · delivery</p>
              <h1 className="font-display text-5xl leading-[0.95] md:text-7xl">The hidden sushi room on Eastwood Drive.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">Guests keep saying the same thing: do not let the outside fool you. Inside Golden Rolls is fresh generous sushi, creative rolls, calm white-tablecloth energy, and attentive service.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:+18153085099" className="rounded-full bg-[#f59f3a] px-6 py-3 font-semibold text-[#071510]">Call (815) 308-5099</a>
                <Link href="/menu" className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white">View menu</Link>
              </div>
              <div className="mt-8 grid max-w-xl gap-3 text-center text-sm sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><b className="block text-2xl text-[#f59f3a]">4.6</b>Google rating</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><b className="block text-2xl text-[#f59f3a]">348</b>reviews</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><b className="block text-2xl text-[#f59f3a]">Easy</b>dine-in, takeout, delivery</div>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl">
              <img className="aspect-[4/5] w-full rounded-[1.5rem] object-cover" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80" alt="Fresh sushi rolls plated for dinner" />
            </div>
          </div>
        </section>

        <section className="px-5 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#b56a19]">Why guests come back</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl md:text-5xl">Fresh sushi, a calm room, and ordering that finally feels easy.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                ['Hidden-gem interior', 'Reviews repeatedly say the outside does not match the clean, calm, surprisingly nice dining room inside.'],
                ['Fresh generous sushi', 'Guests call out big rolls, more fish than rice, fresh ingredients, salmon nigiri, Godzilla, crab cakes, and gyoza.'],
                ['One-tap calls', 'Phone, directions, hours, dine-in, takeout, and delivery information stay easy to find on every screen.'],
              ].map(([title, body]) => <div key={title} className="rounded-3xl bg-white p-7 shadow-sm"><h3 className="font-display text-2xl">{title}</h3><p className="mt-3 leading-7 text-[#536054]">{body}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-[#10251a] px-5 py-16 text-white">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
            {c.featured.map((section) => (
              <div key={section.eyebrow} className="rounded-[2rem] bg-white/[0.06] p-7 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-[#f59f3a]">{section.eyebrow}</p>
                <div className="mt-5 space-y-5">
                  {section.items.map((item) => <div key={item.name} className="border-b border-white/10 pb-4"><div className="flex justify-between gap-4"><h3 className="font-display text-2xl">{item.name}</h3><span className="text-[#f59f3a]">{item.price}</span></div><p className="mt-2 text-white/70">{item.desc}</p></div>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 py-16">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-sm md:p-12">
            <p className="text-sm uppercase tracking-[0.24em] text-[#b56a19]">What guests say</p>
            <blockquote className="mt-4 font-display text-3xl leading-tight md:text-5xl">“Do not let the outside scare you away. The inside was extremely nice and the food and service was perfect.”</blockquote>
            <p className="mt-5 text-[#536054]">— Brian D., Google review</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
