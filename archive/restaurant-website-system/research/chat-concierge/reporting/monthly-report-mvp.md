# Monthly AI Concierge Report MVP

The recurring product is the owner-facing insight memo. The chat UI captures
diner intent, but the report turns that intent into changes the restaurant can
understand, approve, and pay us to implement.

## Report Sections

1. **Executive memo**
   - One paragraph on what diners tried to learn this month.
   - Three to seven recommended actions, each tagged as `quick_fix`,
     `content_update`, `menu_ops_insight`, or `paid_improvement_opportunity`.

2. **Concierge usage and entrance performance**
   - Entry impressions, entry clicks, ask rate, starter-prompt click rate.
   - Compare home ribbon, menu card, contact card, and floating re-entry pill.

3. **Top diner questions**
   - Top user question clusters, sample redacted queries, pages where they came from.
   - Separate exploratory questions from ready-to-act questions.

4. **Unanswered or low-confidence demand**
   - Questions that triggered call/handoff, unknown answers, or repeated clarifiers.
   - Each cluster gets a recommended site/content/menu fix.

5. **Revenue and operations signals**
   - Reservation, order, call, directions, catering, private-event, and large-party intent.
   - Highlight signals that the restaurant is missing revenue or creating confusion.

6. **Transcript appendix**
   - Redacted examples only.
   - Use raw text only during the short retention window for debugging.

## Default Retention Policy

- Raw conversation text: 90 days.
- Redacted text and summaries: 24 months.
- Aggregated metrics and monthly report snapshots: retained indefinitely.
- Email/phone capture: only for explicit follow-up, catering, private-event,
  transcript, or quote requests. Never at entry.

## Pricing Notes

This report supports dynamic pricing because the value depends on the
restaurant. Adjust based on traffic, locations, private-event fit, reservation
volume, report depth, and whether monthly implementation work is included.

Offer structure:

- Website build: one-time base project.
- Base maintenance: optional monthly website care.
- Concierge setup: fixed implementation fee for voice, knowledge, entrances,
  analytics, privacy copy, and first report setup.
- Concierge monthly: AI usage, logging, report generation, prompt tuning, and
  recommendations.
- Paid improvement opportunities: menu page updates, FAQ/content updates,
  private-event intake, SEO/content work, and conversion experiments.
