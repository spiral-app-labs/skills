// AboutHeritageSplit — /about page asymmetric split. Left: Tuscan-terrace
// heritage photograph. Right: "About" h1 + intro paragraph + owner photograph.
// Followed by a manifesto block + named-owners block.

import Image from 'next/image';
import Link from 'next/link';
import { content } from '../content.example';

export function AboutHeritageSplit() {
  const a = content.about;

  return (
    <section className="mx-auto w-full max-w-shell px-4 pt-4 md:px-6 md:pt-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        {/* LEFT — heritage dining-room photo with manifesto card overlay */}
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card md:min-h-[640px]">
            <Image
              src={a.hero.leftPhoto}
              alt={a.hero.leftAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="gusto-overlay-card absolute left-6 bottom-6 right-6 rounded-card p-7 md:left-8 md:bottom-8 md:p-9">
              <h2 className="font-display text-manifesto text-ink">
                {a.manifesto.heading}
              </h2>
              <p className="mt-5 font-body text-body text-ink-muted">
                {a.manifesto.body[0]}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={content.brand.reservationUrl}
                  className="inline-flex items-center justify-center rounded-button bg-ink px-5 py-3 font-body text-button font-medium text-canvas transition-opacity hover:opacity-90"
                >
                  Call to Reserve
                </Link>
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center rounded-button border border-ink/25 bg-transparent px-5 py-3 font-body text-button font-medium text-ink transition-colors hover:border-ink/60"
                >
                  View Menu
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — about h1 + intro + owner photo + owners block */}
        <div className="md:col-span-6 flex flex-col gap-6">
          <div>
            <h1 className="font-display text-page-title text-ink">
              {a.hero.title}
            </h1>
            <p className="mt-5 font-body text-body text-ink-muted">
              {a.hero.intro}
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-card">
            <Image
              src={a.hero.rightPhoto}
              alt={a.hero.rightAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="rounded-card bg-surface p-6 md:p-8">
            <h3 className="font-display text-owner-name text-ink">
              {a.owners.name}
            </h3>
            <p className="mt-4 font-body text-body-sm text-ink-muted">
              {a.owners.bio}
            </p>
            <p className="mt-3 font-body text-body-sm text-ink-muted">
              {a.owners.bio2}
            </p>
            <Link
              href={a.owners.cta.href}
              className="mt-5 inline-flex items-center justify-center rounded-button border border-ink/25 px-4 py-2.5 font-body text-button font-medium text-ink transition-colors hover:border-ink/60"
            >
              {a.owners.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
