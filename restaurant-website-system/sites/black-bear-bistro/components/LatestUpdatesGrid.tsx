'use client';

import Link from 'next/link';
import { content } from '../content.example';

// 3-up blog/news preview strip. Audit §7 warns: don't ship this if there is
// no real blog cadence (stale 2024 posts are worse than no blog block).
export function LatestUpdatesGrid() {
  const { heading, posts, cta } = content.blog;
  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 py-16 md:py-24">
      <div className="flex items-end justify-between mb-8 md:mb-10">
        <h2 className="font-display text-section-h2 font-medium text-ink">{heading}</h2>
        <Link href={cta.href} className="hidden sm:inline text-button text-accent hover:text-accent-dark">
          {cta.label}
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {posts.map((post, i) => (
          <a
            key={post.title}
            href={post.href}
            className="group block rounded-card border border-divider/70 bg-white/80 p-3 shadow-[0_18px_50px_rgba(30,30,28,0.06)]"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-card bg-canvas-alt">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="mt-4 px-1 text-eyebrow text-ink-muted">
              {post.category} / {post.date}
            </div>
            <h3 className="mt-2 px-1 text-[20px] font-medium text-ink group-hover:text-accent transition-colors">
              {post.title}
            </h3>
            <p className="mt-2 px-1 pb-2 text-body-sm text-ink-muted">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
