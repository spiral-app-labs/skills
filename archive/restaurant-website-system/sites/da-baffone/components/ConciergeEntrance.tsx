'use client';

import { useEffect } from 'react';
import { CONCIERGE_CONFIG, getSurface } from '../lib/concierge-config';
import {
  buildClientContext,
  trackConciergeEvent,
  type ConciergeTrackingContext,
} from '../lib/concierge-analytics';

export type ConciergeOpenDetail = ConciergeTrackingContext & {
  promptId?: string;
  promptText?: string;
};

export const CONCIERGE_OPEN_EVENT = 'concierge:open';

export function openConcierge(detail: ConciergeOpenDetail) {
  window.dispatchEvent(new CustomEvent<ConciergeOpenDetail>(CONCIERGE_OPEN_EVENT, { detail }));
}

type ConciergeEntranceProps = {
  surfaceId: 'home_ribbon' | 'menu_card' | 'visit_card';
  variant?: 'ribbon' | 'card';
};

export function ConciergeEntrance({ surfaceId, variant = 'card' }: ConciergeEntranceProps) {
  const surface = getSurface(surfaceId);

  useEffect(() => {
    const context = buildClientContext({
      surfaceId: surface.id,
      pageType: surface.pageType,
    });
    trackConciergeEvent({
      eventName: 'entry_impression',
      context,
      properties: { label: surface.label },
    });
    for (const prompt of surface.prompts) {
      trackConciergeEvent({
        eventName: 'starter_prompt_impression',
        context: { ...context, promptId: prompt.id, promptText: prompt.text },
      });
    }
  }, [surface]);

  function handleOpen(prompt?: { id: string; text: string }) {
    const context = buildClientContext({
      surfaceId: surface.id,
      pageType: surface.pageType,
      promptId: prompt?.id,
      promptText: prompt?.text,
    });
    trackConciergeEvent({
      eventName: prompt ? 'starter_prompt_click' : 'entry_click',
      context,
      properties: { label: surface.label },
    });
    openConcierge(context);
  }

  const shellClasses =
    variant === 'ribbon'
      ? 'border-y border-divider bg-surface px-5 py-5 md:px-8'
      : 'mx-auto my-10 max-w-shell border-y border-divider bg-surface px-5 py-6 md:px-8';

  return (
    <section className={shellClasses} data-concierge-surface={surface.id}>
      <div className="mx-auto flex max-w-shell flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-2 font-body text-stamp uppercase tracking-[0.18em] text-accent-warm">
            {surface.eyebrow}
          </div>
          <h2 className="font-display text-[30px] leading-none text-ink md:text-[38px]">
            {surface.title}
          </h2>
          <p className="mt-2 max-w-2xl font-body text-body-sm text-ink-muted">
            {surface.body}
          </p>
          <p className="mt-2 font-body text-[11px] leading-tight text-ink-quiet">
            {CONCIERGE_CONFIG.privacyNotice}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 md:max-w-[460px] md:justify-end">
          {surface.prompts.map((prompt) => (
            <button
              key={prompt.id}
              type="button"
              onClick={() => handleOpen(prompt)}
              className="rounded-pill border border-divider bg-canvas px-3 py-1.5 font-body text-body-sm text-ink-muted transition-colors hover:border-accent-warm hover:text-accent-warm"
            >
              {prompt.text}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleOpen()}
            className="rounded-pill bg-accent-warm px-4 py-2 font-body text-button font-medium text-canvas hover:brightness-110"
          >
            {surface.label}
          </button>
        </div>
      </div>
    </section>
  );
}
