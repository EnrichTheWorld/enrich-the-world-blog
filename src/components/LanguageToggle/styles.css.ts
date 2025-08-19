import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const languageToggle = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.spacing[2],
  padding: `${vars.spacing[2]} ${vars.spacing[3]}`,
  borderRadius: vars.borderRadius.md,
  backgroundColor: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  cursor: 'pointer',
  transition: `all ${vars.transition.fast}`,
  color: vars.color.text.secondary,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  
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

export const flag = style({
  width: '20px',
  height: '15px',
  borderRadius: vars.borderRadius.sm,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: vars.color.neutral[200],
  fontSize: '12px',
});