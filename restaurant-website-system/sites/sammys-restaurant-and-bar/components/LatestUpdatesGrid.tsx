'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { content } from '../content.example';
import { theme } from '../theme';

// 3-up blog/news preview strip. Audit §7 warns: don't ship this if there is
// no real blog cadence (stale 2024 posts are worse than no blog block).
export function LatestUpdatesGrid() {
  const { heading, posts } = content.blog;
  return (
    <section className="max-w-plate mx-auto px-5 md:px-10 py-16 md:py-24">
      <div className="flex items-end justify-between mb-8 md:mb-10">
        <h2 className="font-display text-section-h2 font-medium text-ink">{heading}</h2>
        <Link href="#" className="text-button text-accent hover:text-accent-dark">
          View all →
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {posts.map((post, i) => (
          <motion.a
            key={post.title}
            href={post.href}
            className="group block"
            initial={{ opacity: 0, y: theme.motion.revealLift }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: theme.motion.revealDuration,
              delay: i * theme.motion.revealStagger,
              ease: theme.motion.easing,
            }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-card bg-canvas-alt">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
            <div className="mt-4 text-eyebrow text-ink-muted">
              {post.category} · {post.date}
            </div>
            <h3 className="mt-2 text-[20px] font-medium text-ink group-hover:text-accent transition-colors">
              {post.title}
            </h3>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
