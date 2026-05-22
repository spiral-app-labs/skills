'use client';

import { useEffect, useState } from 'react';
import { content } from '../content.example';

const STORAGE_KEY = 'alinea-campaign-dismissed';

/**
 * CampaignModal — dismissable branded overlay for time-sensitive campaigns.
 *
 * OPT-IN per audit §12.3. Set content.campaignModal.enabled = true to activate.
 * Dismissal persists per-session via sessionStorage (not localStorage — the user
 * should see it again in a new visit, not forever).
 */
export function CampaignModal() {
  const m = content.campaignModal;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!m.enabled) return;
    if (typeof window === 'undefined') return;
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) setOpen(true);
  }, [m.enabled]);

  if (!m.enabled || !open) return null;

  const close = () => {
    setOpen(false);
    try { sessionStorage.setItem(STORAGE_KEY, '1'); } catch {}
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="campaign-modal-title"
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4 py-8"
      onClick={close}
    >
      <div
        className="relative grid grid-cols-1 md:grid-cols-[420px_420px] max-w-[840px] w-full bg-canvas overflow-hidden shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={close}
          className="absolute top-3 right-3 h-10 w-10 flex items-center justify-center text-text hover:bg-divider/50 rounded-full z-10"
        >
          ✕
        </button>
        {/* Left poster panel */}
        <div className="hidden md:flex flex-col justify-between bg-text text-text-strip p-10 aspect-square">
          <div className="text-eyebrow tracking-widest text-center">{m.posterLabel}</div>
          <div className="flex items-baseline justify-center">
            <span className="font-display italic text-[180px] leading-none">{m.posterYear}</span>
            <span className="font-display italic text-[44px] leading-none ml-1">{m.posterOrdinal}</span>
          </div>
          <div className="text-eyebrow tracking-widest text-center">{m.posterFooter}</div>
        </div>
        {/* Right content panel */}
        <div className="p-8 md:p-10 flex flex-col">
          <h2 id="campaign-modal-title" className="font-display text-section-h3 text-text">{m.title}</h2>
          <p className="mt-5 text-body-sm text-text">{m.body}</p>
          <p className="mt-4 font-semibold text-body-sm text-text">{m.strong}</p>
          <p className="mt-2 text-body-sm text-text-muted">{m.subcopy}</p>
          <a
            href={m.cta.href}
            className="mt-6 inline-block bg-text text-text-strip px-6 py-3 rounded-input text-button w-fit hover:opacity-80 transition-opacity"
          >
            {m.cta.label}
          </a>
        </div>
      </div>
    </div>
  );
}
