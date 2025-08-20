import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

// Additional dark mode styles for better compatibility
globalStyle('html.dark', {
  colorScheme: 'dark',
});

globalStyle('html.light', {
  colorScheme: 'light',
});

// Ensure dark mode styles work with both selectors
globalStyle('.dark', {
  backgroundColor: vars.color.background,
  color: vars.color.text.primary,
});

globalStyle('.light', {
  backgroundColor: vars.color.background,
  color: vars.color.text.primary,
});

// Force recalculation of CSS custom properties
globalStyle('[data-theme="dark"]', {
  colorScheme: 'dark',
});

globalStyle('[data-theme="light"]', {
  colorScheme: 'light',
});