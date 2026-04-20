import Link from 'next/link';
import { content } from '../content.example';

// BlogGuide3Up — 3 cards with tag chip + photo + title + date.
// Audit §11 — UNIFY with latte's BlogPreviewGrid into a single shared primitive.

export function BlogGuide3Up() {
  const { blogGuide } = content;
  return (
    <section className="bg-canvas py-20 md:py-28">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <h2 className="font-display text-section-h2 text-accent-brown max-w-2xl">{blogGuide.heading}</h2>
            <p className="mt-3 text-body text-text-muted">{blogGuide.sub}</p>
          </div>
          <Link href="#" className="font-body text-button text-accent-green underline-offset-4 hover:underline">
            View all guides →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {blogGuide.posts.map((p) => (
            <Link key={p.title} href={p.href} className="block group">
              <div className="aspect-[4/3] rounded-card overflow-hidden mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <span className="inline-block mb-2 px-3 py-1 rounded-pill bg-canvas-green text-accent-green text-body-sm">{p.tag}</span>
              <h3 className="font-display text-2xl text-accent-brown leading-tight group-hover:text-accent-green transition-colors">
                {p.title}
              </h3>
              <p className="mt-2 text-body-sm text-text-muted">{p.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
