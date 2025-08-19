import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const themeToggle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  borderRadius: vars.borderRadius.full,
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  cursor: 'pointer',
  transition: `all ${vars.transition.fast}`,
  color: vars.color.text.secondary,
  
  ':hover': {
    backgroundColor: vars.color.neutral[100],
    borderColor: vars.color.neutral[300],
    color: vars.color.text.primary,
  },
  
  ':focus': {
    outline: `2px solid ${vars.color.primary[500]}`,
    outlineOffset: '2px',
  },
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: vars.color.neutral[800],
      borderColor: vars.color.neutral[700],
    },
    '[data-theme="dark"] &:hover': {
      backgroundColor: vars.color.neutral[700],
      borderColor: vars.color.neutral[600],
    },
  },
});

export const icon = style({
  width: '20px',
  height: '20px',
  transition: `transform ${vars.transition.fast}`,
});