'use client';

import { useEffect } from 'react';

// Keep /menu as a truthful shortcut to the full menu section on the homepage.
// Server redirect('/#menu') returned a 307 shell without a Location header in local QA,
// so use a client redirect with a visible fallback link instead.
export default function MenuPage() {
  useEffect(() => {
    window.location.replace('/#menu');
  }, []);

  return (
    <main className="min-h-screen bg-canvas px-5 py-24 text-ink md:px-10">
      <section className="mx-auto max-w-2xl rounded-[2rem] border border-divider bg-canvas-alt p-8 text-center shadow-soft">
        <p className="text-eyebrow text-accent">The Chef Grill menu</p>
        <h1 className="mt-3 font-display text-4xl font-medium">Opening the menu section…</h1>
        <p className="mt-4 text-body text-ink-muted">
          The menu lives on the homepage so guests can see signature dishes, ordering links, phone, and directions in one flow.
        </p>
        <a className="mt-8 inline-flex rounded-button bg-accent px-6 py-3 text-button font-medium text-white" href="/#menu">
          View menu
        </a>
      </section>
    </main>
  );
}
