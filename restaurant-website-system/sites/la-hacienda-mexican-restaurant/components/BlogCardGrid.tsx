import Image from 'next/image';
import Link from 'next/link';
import { EyebrowDotLabel } from './EyebrowDotLabel';
import { content } from '../content.example';

type Post = (typeof content.blog.posts)[number];

/**
 * BlogCardGrid — 3×N date/title/excerpt card grid for news & insights.
 */
export function BlogCardGrid({
  title = content.blog.title,
  eyebrow = content.blog.eyebrow,
  posts = content.blog.posts.slice(0, 3),
  background = 'cream',
}: {
  title?: string;
  eyebrow?: string;
  posts?: Post[];
  background?: 'cream' | 'white';
}) {
  const bg = background === 'white' ? 'bg-bg-white' : 'bg-bg-cream';
  return (
    <section className={`${bg} py-24 px-6`}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <EyebrowDotLabel className="mb-3">{eyebrow}</EyebrowDotLabel>
          <h2 className="font-display text-section-h3 text-text-dark">{title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link key={p.id} href={p.href} className="group bg-bg-white rounded-card overflow-hidden border border-border-light hover:shadow-md transition">
              <div className="relative hidden aspect-[4/3] bg-bg-dark md:block">
                <Image src={p.image} alt={p.title} fill sizes="(min-width: 768px) 380px, 100vw" className="object-contain transition group-hover:scale-[1.02]" />
              </div>
              <div className="p-5">
                <div className="text-eyebrow text-accent mb-2">{p.date}</div>
                <h3 className="font-display text-[20px] text-text-dark leading-snug">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
