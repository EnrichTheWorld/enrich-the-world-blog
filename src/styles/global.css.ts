import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  height: '100%',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  backgroundColor: vars.color.background,
  color: vars.color.text.primary,
  transition: `background-color ${vars.transition.base}, color ${vars.transition.base}`,
  fontSize: vars.fontSize.base,
  lineHeight: vars.lineHeight.normal,
});

globalStyle('#__next', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

globalStyle('h1, h2, h3, h4, h5, h6', {
  margin: 0,
  fontWeight: vars.fontWeight.bold,
  lineHeight: vars.lineHeight.tight,
  color: vars.color.text.primary,
});

globalStyle('h1', {
  fontSize: vars.fontSize['4xl'],
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.fontSize['5xl'],
    },
    'screen and (min-width: 1024px)': {
      fontSize: vars.fontSize['6xl'],
    },
  },
});

globalStyle('h2', {
  fontSize: vars.fontSize['2xl'],
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.fontSize['3xl'],
    },
    'screen and (min-width: 1024px)': {
      fontSize: vars.fontSize['4xl'],
    },
  },
});

globalStyle('h3', {
  fontSize: vars.fontSize.xl,
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.fontSize['2xl'],
    },
    'screen and (min-width: 1024px)': {
      fontSize: vars.fontSize['3xl'],
    },
  },
});

globalStyle('h4', {
  fontSize: vars.fontSize.lg,
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.fontSize.xl,
    },
    'screen and (min-width: 1024px)': {
      fontSize: vars.fontSize['2xl'],
    },
  },
});

globalStyle('h5', {
  fontSize: vars.fontSize.base,
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.fontSize.lg,
    },
    'screen and (min-width: 1024px)': {
      fontSize: vars.fontSize.xl,
    },
  },
});

globalStyle('h6', {
  fontSize: vars.fontSize.sm,
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.fontSize.base,
    },
    'screen and (min-width: 1024px)': {
      fontSize: vars.fontSize.lg,
    },
  },
});

globalStyle('p', {
  margin: 0,
  marginBottom: vars.spacing[4],
  color: vars.color.text.secondary,
  lineHeight: vars.lineHeight.relaxed,
});

globalStyle('a', {
  color: vars.color.primary[600],
  textDecoration: 'none',
  transition: `color ${vars.transition.fast}`,
});

globalStyle('a:hover', {
  color: vars.color.primary[700],
  textDecoration: 'underline',
});

globalStyle('a:focus', {
  outline: `2px solid ${vars.color.primary[500]}`,
  outlineOffset: '2px',
});

globalStyle('button', {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  margin: 0,
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'pointer',
  color: 'inherit',
});

globalStyle('button:disabled', {
  cursor: 'not-allowed',
  opacity: 0.5,
});

globalStyle('img', {
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
});

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
  paddingLeft: vars.spacing[6],
});

globalStyle('li', {
  marginBottom: vars.spacing[2],
  color: vars.color.text.secondary,
  lineHeight: vars.lineHeight.relaxed,
});

globalStyle('blockquote', {
  margin: 0,
  padding: vars.spacing[4],
  paddingLeft: vars.spacing[6],
  borderLeft: `4px solid ${vars.color.primary[500]}`,
  backgroundColor: vars.color.neutral[50],
  fontStyle: 'italic',
  color: vars.color.text.secondary,
});

globalStyle('code', {
  fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Monaco, Inconsolata, "Liberation Mono", "Courier New", monospace',
  fontSize: '0.875em',
  backgroundColor: vars.color.neutral[100],
  padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
  borderRadius: vars.borderRadius.sm,
  color: vars.color.text.primary,
});

globalStyle('pre', {
  margin: 0,
  padding: vars.spacing[4],
  backgroundColor: vars.color.neutral[900],
  color: vars.color.neutral[100],
  borderRadius: vars.borderRadius.md,
  overflow: 'auto',
  fontSize: vars.fontSize.sm,
  lineHeight: vars.lineHeight.relaxed,
});

globalStyle('pre code', {
  backgroundColor: 'transparent',
  padding: 0,
  color: 'inherit',
});

globalStyle('hr', {
  margin: `${vars.spacing[8]} 0`,
  border: 'none',
  height: '1px',
  backgroundColor: vars.color.divider,
});

globalStyle('table', {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: vars.spacing[6],
});

globalStyle('th, td', {
  padding: vars.spacing[3],
  textAlign: 'left',
  borderBottom: `1px solid ${vars.color.border}`,
});

globalStyle('th', {
  fontWeight: vars.fontWeight.semibold,
  backgroundColor: vars.color.neutral[50],
  color: vars.color.text.primary,
});

globalStyle('td', {
  color: vars.color.text.secondary,
});

// Focus styles for accessibility
globalStyle(':focus-visible', {
  outline: `2px solid ${vars.color.primary[500]}`,
  outlineOffset: '2px',
});

// Print styles
globalStyle('*', {
  '@media': {
    'print': {
      color: '#000 !important',
      backgroundColor: '#fff !important',
    },
  },
});