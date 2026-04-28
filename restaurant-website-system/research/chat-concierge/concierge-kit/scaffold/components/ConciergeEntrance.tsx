'use client';

import { useEffect } from 'react';
import { CONCIERGE_CONFIG, getSurface } from '../lib/concierge-config';
import {
  buildClientContext,
  trackConciergeEvent,
  type ConciergeTrackingContext,
} from '../lib/concierge-analytics';
import { THEME } from './concierge-theme';

export type ConciergeOpenDetail = ConciergeTrackingContext & {
  promptId?: string;
  promptText?: string;
};

export const CONCIERGE_OPEN_EVENT = 'concierge:open';

export function openConcierge(detail: ConciergeOpenDetail) {
  window.dispatchEvent(new CustomEvent<ConciergeOpenDetail>(CONCIERGE_OPEN_EVENT, { detail }));
}

export function ConciergeEntrance({ surfaceId }: { surfaceId: string }) {
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

  return (
    <section className={THEME.entrance.shellClasses} data-concierge-surface={surface.id}>
      <div className={THEME.entrance.eyebrowClasses}>{surface.eyebrow}</div>
      <div className={THEME.entrance.titleClasses}>{surface.title}</div>
      <p className={THEME.entrance.bodyClasses}>{surface.body}</p>
      <div className={THEME.entrance.promptWrapperClasses}>
        {surface.prompts.map((prompt) => (
          <button
            key={prompt.id}
            type="button"
            onClick={() => handleOpen(prompt)}
            className={THEME.entrance.promptButtonClasses}
          >
            {prompt.text}
          </button>
        ))}
        <button
          type="button"
          onClick={() => handleOpen()}
          className={THEME.entrance.primaryButtonClasses}
        >
          {CONCIERGE_CONFIG.surfaces[surface.id]?.label ?? 'Ask'}
        </button>
      </div>
    </section>
  );
}
