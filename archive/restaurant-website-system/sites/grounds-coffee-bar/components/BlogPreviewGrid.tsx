import Image from 'next/image';
import Link from 'next/link';
import { content } from '../content.example';

/**
 * BlogPreviewGrid — PROMOTE-NOW shared candidate (audit §11). First
 * content-marketing surface in the catalog. 3-up photo + date + title +
 * implicit read-more affordance.
 *
 * Variant axes: card-count 2/3/4, with/without date, with/without read-more.
 */
export function BlogPreviewGrid() {
  const b = content.blog;
  return (
    <section id="news" className="w-full bg-canvas py-16 md:py-24">
      <div className="max-w-page mx-auto px-5 md:px-10">
        <div className="mb-10 md:mb-14">
          <p className="text-eyebrow-sm text-ink-muted mb-2">{b.eyebrow}</p>
          <h2 className="font-sans text-section-h2 text-ink">{b.heading}</h2>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {b.posts.map((p) => (
            <li key={p.title}>
              <Link href={p.href} className="block group">
                <div className="relative aspect-[4/3] rounded-photo overflow-hidden mb-4">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                <p className="text-eyebrow-sm text-ink-muted mb-2">{p.date}</p>
                <h3 className="text-h3 text-ink group-hover:opacity-70 transition-opacity">
                  {p.title}
                </h3>
                <span className="inline-block mt-3 text-body text-ink underline underline-offset-4 decoration-1">
                  {'cta' in p ? p.cta : 'Read more'}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
