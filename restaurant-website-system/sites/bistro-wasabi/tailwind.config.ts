import type { Config } from 'tailwindcss';
import { theme as t } from './theme';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas:       t.color.canvas,
        surface:      t.color.surface,
        'surface-hover': t.color.surfaceHover,
        border:       t.color.border,
        text:         t.color.text,
        'text-muted': t.color.textMuted,
      },
      fontFamily: {
        display: ['var(--font-forum)', 'Georgia', 'serif'],
        body: ['Satoshi', 'Satoshi Placeholder', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        // Maps directly to theme.type entries — see theme.ts
        'page-title':    [`${t.type.pageTitle.size}px`,    { lineHeight: `${t.type.pageTitle.lineHeight}px`,    letterSpacing: `${t.type.pageTitle.tracking}px` }],
        'section-title': [`${t.type.sectionTitle.size}px`, { lineHeight: `${t.type.sectionTitle.lineHeight}px`, letterSpacing: `${t.type.sectionTitle.tracking}px` }],
        'section-h2':    [`${t.type.sectionH2.size}px`,    { lineHeight: `${t.type.sectionH2.lineHeight}px`,    letterSpacing: `${t.type.sectionH2.tracking}px` }],
        'item-name':     [`${t.type.itemName.size}px`,     { lineHeight: `${t.type.itemName.lineHeight}px`,     letterSpacing: `${t.type.itemName.tracking}px` }],
        'ui-label':      [`${t.type.uiLabel.size}px`,      { lineHeight: `${t.type.uiLabel.lineHeight}px`,      letterSpacing: `${t.type.uiLabel.tracking}px` }],
        'body':          [`${t.type.body.size}px`,         { lineHeight: `${t.type.body.lineHeight}px` }],
      },
      borderRadius: {
        pill: `${t.radius.pill}px`,
        card: `${t.radius.card}px`,
        field: `${t.radius.field}px`,
      },
    },
  },
  plugins: [],
};

export default config;
