import { content } from '../content.example';

export function ProofStrip() {
  return (
    <section className="bg-bg-dark px-5 py-7 text-text-cream md:px-6 md:py-9">
      <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-card border border-brass/25 bg-brass/25 sm:grid-cols-2 lg:grid-cols-4">
        {content.proof.map((item) => (
          <div key={item.label} className="bg-bg-dark px-5 py-5 text-center">
            <p className="text-address text-brass">{item.label}</p>
            <p className="mt-2 text-body text-text-cream">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
