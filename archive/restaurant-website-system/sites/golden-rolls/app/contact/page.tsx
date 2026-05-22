import { SiteFooter, SiteHeader } from '../../components/SiteChrome';

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-[#fbf5ea] text-[#132018]">
        <section className="bg-[#071510] px-5 py-16 text-white">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm uppercase tracking-[0.24em] text-[#f59f3a]">Visit · call · directions</p>
            <h1 className="mt-3 font-display text-5xl md:text-7xl">Visit Golden Rolls.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">790 S Eastwood Dr, Woodstock, IL 60098. Call for current dine-in, takeout, delivery, and specials.</p>
          </div>
        </section>
        <section className="mx-auto grid max-w-6xl gap-6 px-5 py-14 md:grid-cols-3">
          <a href="tel:+18153085099" className="min-w-0 rounded-[2rem] bg-white p-6 shadow-sm sm:p-7"><p className="text-sm uppercase tracking-[0.24em] text-[#b56a19]">Phone</p><h2 className="mt-3 break-words font-display text-2xl sm:text-3xl">(815) 308-5099</h2></a>
          <a href="https://www.google.com/maps/search/Golden+Rolls+790+S+Eastwood+Dr+Woodstock+IL" className="min-w-0 rounded-[2rem] bg-white p-6 shadow-sm sm:p-7"><p className="text-sm uppercase tracking-[0.24em] text-[#b56a19]">Address</p><h2 className="mt-3 break-words font-display text-2xl sm:text-3xl">790 S Eastwood Dr</h2><p className="mt-2 text-[#536054]">Woodstock, IL 60098</p></a>
          <a href="https://goldenrollssushi.com/" className="min-w-0 rounded-[2rem] bg-white p-6 shadow-sm sm:p-7"><p className="text-sm uppercase tracking-[0.24em] text-[#b56a19]">Official site</p><h2 className="mt-3 break-words font-body text-lg font-semibold leading-tight tracking-tight text-[#132018] sm:text-xl">goldenrollssushi.com</h2></a>
        </section>
        <section className="px-5 pb-16">
          <div className="mx-auto grid max-w-6xl gap-6 rounded-[2rem] bg-white p-7 shadow-sm md:grid-cols-[1fr_1.2fr] md:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-[#b56a19]">Find us</p>
              <h2 className="mt-3 font-display text-4xl">Eastwood Drive in Woodstock.</h2>
              <p className="mt-4 leading-7 text-[#536054]">Golden Rolls sits at 790 S Eastwood Dr. Use the directions button for live routing, then call ahead for current dine-in, takeout, or delivery timing.</p>
              <a href="https://www.google.com/maps/search/Golden+Rolls+790+S+Eastwood+Dr+Woodstock+IL" className="mt-6 inline-block rounded-full bg-[#f59f3a] px-6 py-3 font-semibold text-[#071510]">Open Google Maps</a>
            </div>
            <div className="rounded-[1.5rem] bg-[#10251a] p-6 text-white">
              <p className="text-sm uppercase tracking-[0.24em] text-[#f59f3a]">Quick details</p>
              <dl className="mt-6 space-y-5">
                <div><dt className="text-white/55">Address</dt><dd className="mt-1 break-words text-lg sm:text-xl">790 S Eastwood Dr, Woodstock, IL 60098</dd></div>
                <div><dt className="text-white/55">Phone</dt><dd className="mt-1 break-words text-lg sm:text-xl">(815) 308-5099</dd></div>
                <div><dt className="text-white/55">Service</dt><dd className="mt-1 break-words text-lg sm:text-xl">Dine-in, takeout, and delivery</dd></div>
              </dl>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
