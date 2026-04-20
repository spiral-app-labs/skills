// PageHeroBanner — deep-red-brown banner used as H1 band on /menu, /about,
// /contact. Echoes the /menu source H1 treatment.

interface Props {
  title: string;
  sub?: string;
  accent?: 'brown' | 'green' | 'cream';
}

export function PageHeroBanner({ title, sub, accent = 'cream' }: Props) {
  const bg =
    accent === 'brown' ? 'bg-accent-brown text-text-on-dark'
    : accent === 'green' ? 'bg-accent-green text-text-on-green'
    : 'bg-canvas-cream text-accent-brown';
  return (
    <section className={`${bg} py-20 md:py-28`}>
      <div className="mx-auto max-w-shell px-6 md:px-10 text-center">
        <h1 className="font-display text-page-title max-w-3xl mx-auto">{title}</h1>
        {sub && <p className="mt-6 max-w-2xl mx-auto text-body opacity-80">{sub}</p>}
      </div>
    </section>
  );
}
