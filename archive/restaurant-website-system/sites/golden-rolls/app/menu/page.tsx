import { content } from '../../content.example';
import { SiteFooter, SiteHeader } from '../../components/SiteChrome';

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function MenuPage() {
  const categories = content.menuPage.categories;
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#fbf5ea] text-[#132018]">
        <section className="bg-[#071510] px-5 py-16 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#f59f3a]">Fresh sushi · special rolls · entrées</p>
            <h1 className="mt-3 font-display text-5xl md:text-7xl">Golden Rolls menu</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">Explore creative rolls, hot appetizers, teriyaki, tempura, steak, seafood, noodles, fried rice, nigiri, and sashimi.</p>
          </div>
        </section>
        <section className="border-b border-[#e7d8bd] bg-white/70 px-5 py-4">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-3">
            {categories.map((cat) => (
              <a key={cat.title} href={`#${slugify(cat.title)}`} className="rounded-full border border-[#e7d8bd] bg-[#fbf5ea] px-4 py-2 text-sm font-semibold text-[#132018]">
                {cat.title}
              </a>
            ))}
          </div>
        </section>
        <section className="px-5 pt-12">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-white p-7 shadow-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-[#b56a19]">Review-backed picks</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                ['Godzilla / Mini Godzilla', 'A house-favorite roll family with tempura shrimp, avocado, crunch, spicy mayo, and sauces.'],
                ['Gyoza, crab cakes, tempura', 'Hot starters and non-raw options for the whole table.'],
                ['Nigiri and sashimi cuts', 'Fresh fish, generous cuts, and simple classics for sushi nights.'],
              ].map(([title, body]) => <div key={title} className="rounded-2xl bg-[#fbf5ea] p-5"><h2 className="font-display text-2xl">{title}</h2><p className="mt-2 leading-7 text-[#536054]">{body}</p></div>)}
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 md:grid-cols-2">
          {categories.map((cat) => (
            <div id={slugify(cat.title)} key={cat.title} className="scroll-mt-32 rounded-[2rem] bg-white p-7 shadow-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-[#b56a19]">{cat.eyebrow}</p>
              <h2 className="mt-2 font-display text-3xl">{cat.title}</h2>
              <div className="mt-6 space-y-5">
                {cat.items.map((item) => (
                  <div key={item.name} className="border-b border-[#e7d8bd] pb-4">
                    <div className="flex justify-between gap-4"><h3 className="font-display text-xl">{item.name}</h3><span className="font-semibold text-[#b56a19]">{item.price}</span></div>
                    <p className="mt-2 text-base leading-7 text-[#536054]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
        <section className="px-5 pb-16">
          <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#10251a] p-8 text-white">
            <h2 className="font-display text-3xl">Need current prices, specials, or delivery availability?</h2>
            <p className="mt-3 text-white/70">Call the restaurant directly; menu prices, hours, specials, and delivery options can change.</p>
            <a href="tel:+18153085099" className="mt-6 inline-block rounded-full bg-[#f59f3a] px-6 py-3 font-semibold text-[#071510]">Call (815) 308-5099</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
