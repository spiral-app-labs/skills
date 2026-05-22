import { SiteFooter, SiteHeader } from '../../components/SiteChrome';

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#fbf5ea] text-[#132018]">
        <section className="bg-[#071510] px-5 py-16 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#f59f3a]">Woodstock Japanese bistro</p>
            <h1 className="mt-3 font-display text-5xl md:text-7xl">A calm sushi room hiding in plain sight.</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">Golden Rolls is the kind of local place guests tell friends not to judge from the outside. Step in for generous sushi rolls, hot Japanese entrées, attentive service, and a quieter dining room than the storefront suggests.</p>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl gap-5 px-5 py-14 md:grid-cols-4">
          {[
            ['4.6', 'Google rating'],
            ['348', 'Google reviews'],
            ['4.7', 'Restaurantji rating'],
            ['790', 'S Eastwood Dr'],
          ].map(([stat, label]) => <div key={label} className="rounded-3xl bg-white p-7 text-center shadow-sm"><div className="font-display text-4xl text-[#b56a19]">{stat}</div><p className="mt-2 text-sm text-[#536054]">{label}</p></div>)}
        </section>
        <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 md:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-[#b56a19]">Why guests come back</p>
            <h2 className="mt-3 font-display text-4xl">Fresh rolls, generous plates, and a room that surprises people.</h2>
            <p className="mt-5 leading-7 text-[#536054]">Reviewers repeatedly call out fresh fish, more fish than rice, big rolls, clean surroundings, and service that feels kind and attentive. The site now leads with those real reasons instead of making guests hunt through a dense menu first.</p>
          </div>
          <div className="rounded-[2rem] bg-[#10251a] p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.24em] text-[#f59f3a]">Good for</p>
            <ul className="mt-6 space-y-4 leading-7 text-white/78">
              <li>• Creative rolls like Godzilla, Mini Godzilla, Rainbow, and Crab Rangoon Roll.</li>
              <li>• Hot appetizers and non-raw options including gyoza, crab cakes, teriyaki, tempura, noodles, and fried rice.</li>
              <li>• Dine-in, takeout, and delivery questions handled fastest by phone.</li>
            </ul>
          </div>
        </section>
        <section className="px-5 pb-16">
          <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-8 text-center shadow-sm md:p-12">
            <p className="text-sm uppercase tracking-[0.24em] text-[#b56a19]">Guest language</p>
            <blockquote className="mt-4 font-display text-3xl leading-tight md:text-5xl">“Excellent service, spotless, and very nice inside.”</blockquote>
            <p className="mt-5 text-[#536054]">Review theme from the captured Google packet</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
