import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

// Animations
const fadeInUp = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(20px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const progressFill = keyframes({
  '0%': {
    width: '0%',
  },
  '100%': {
    width: 'var(--progress-width)',
  },
});

const pulse = keyframes({
  '0%, 100%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.8,
  },
});

const scaleIn = keyframes({
  '0%': {
    transform: 'scale(0.95)',
    opacity: 0,
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1,
  },
});

const celebrate = keyframes({
  '0%, 100%': {
    transform: 'scale(1)',
  },
  '50%': {
    transform: 'scale(1.05)',
  },
});

// Container styles
export const quizContainer = style({
  maxWidth: '48rem',
  margin: '0 auto',
  animation: `${fadeInUp} 0.6s ease-out`,
});

export const completionContainer = style({
  maxWidth: '32rem',
  margin: '0 auto',
  textAlign: 'center',
  padding: vars.spacing[6],
  animation: `${scaleIn} 0.5s ease-out`,
});

// Progress bar styles
export const progressSection = style({
  marginBottom: vars.spacing[8],
});

export const progressHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.spacing[2],
});

export const progressText = style({
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  color: vars.color.text.secondary,
});

export const progressPercentage = style({
  fontSize: vars.fontSize.sm,
  color: vars.color.text.tertiary,
});

export const progressBarContainer = style({
  width: '100%',
  height: '8px',
  backgroundColor: vars.color.neutral[200],
  borderRadius: vars.borderRadius.full,
  overflow: 'hidden',
  position: 'relative',
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: vars.color.neutral[700],
    },
  },
});

export const progressBar = style({
  height: '100%',
  background: `linear-gradient(90deg, ${vars.color.primary[500]}, ${vars.color.primary[400]})`,
  borderRadius: vars.borderRadius.full,
  transition: `width ${vars.transition.slow} cubic-bezier(0.4, 0, 0.2, 1)`,
  position: 'relative',
  
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
    animation: `${pulse} 2s ease-in-out infinite`,
  },
});

// Question card styles
export const questionCard = style({
  backgroundColor: vars.color.surface,
  borderRadius: vars.borderRadius.xl,
  boxShadow: vars.shadow.lg,
  padding: vars.spacing[6],
  marginBottom: vars.spacing[6],
  border: `1px solid ${vars.color.border}`,
  backdropFilter: 'blur(8px)',
  position: 'relative',
  overflow: 'hidden',
  transition: `all ${vars.transition.base}`,
  
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${vars.color.primary[500]}, ${vars.color.secondary[500]})`,
  },
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgba(23, 23, 23, 0.8)',
      borderColor: vars.color.neutral[700],
    },
  },
});

// Category badge styles
export const categorySection = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: vars.spacing[4],
  gap: vars.spacing[2],
});

export const categoryBadge = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: `${vars.spacing[1]} ${vars.spacing[3]}`,
  borderRadius: vars.borderRadius.full,
  fontSize: vars.fontSize.sm,
  fontWeight: vars.fontWeight.medium,
  border: '2px solid',
  background: 'transparent',
  backdropFilter: 'blur(4px)',
  transition: `all ${vars.transition.fast}`,
});

export const technologyBadge = style([categoryBadge, {
  background: `linear-gradient(135deg, ${vars.color.primary[50]}, ${vars.color.primary[100]})`,
  borderColor: vars.color.primary[200],
  color: vars.color.primary[700],
  
  selectors: {
    '[data-theme="dark"] &': {
      background: `linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(14, 165, 233, 0.2))`,
      borderColor: vars.color.primary[700],
      color: vars.color.primary[300],
    },
  },
}]);

export const sustainabilityBadge = style([categoryBadge, {
  background: `linear-gradient(135deg, #ecfdf5, #d1fae5)`,
  borderColor: '#a7f3d0',
  color: '#065f46',
  
  selectors: {
    '[data-theme="dark"] &': {
      background: `linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.2))`,
      borderColor: '#065f46',
      color: '#86efac',
    },
  },
}]);

export const socialImpactBadge = style([categoryBadge, {
  background: `linear-gradient(135deg, ${vars.color.secondary[50]}, ${vars.color.secondary[100]})`,
  borderColor: vars.color.secondary[200],
  color: vars.color.secondary[700],
  
  selectors: {
    '[data-theme="dark"] &': {
      background: `linear-gradient(135deg, rgba(217, 70, 239, 0.1), rgba(217, 70, 239, 0.2))`,
      borderColor: vars.color.secondary[700],
      color: vars.color.secondary[300],
    },
  },
}]);

export const difficultyBadge = style({
  padding: `${vars.spacing[1]} ${vars.spacing[2]}`,
  borderRadius: vars.borderRadius.base,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.medium,
});

export const easyDifficulty = style([difficultyBadge, {
  backgroundColor: '#dcfce7',
  color: '#166534',
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgba(34, 197, 94, 0.2)',
      color: '#86efac',
    },
  },
}]);

export const mediumDifficulty = style([difficultyBadge, {
  backgroundColor: '#fef3c7',
  color: '#92400e',
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgba(245, 158, 11, 0.2)',
      color: '#fcd34d',
    },
  },
}]);

export const hardDifficulty = style([difficultyBadge, {
  backgroundColor: '#fee2e2',
  color: '#991b1b',
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
      color: '#fca5a5',
    },
  },
}]);

// Question text styles
export const questionText = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[6],
  lineHeight: vars.lineHeight.relaxed,
  
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.fontSize['2xl'],
    },
  },
});

// Answer options styles
export const answerOptions = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[3],
});

export const answerButton = style({
  width: '100%',
  padding: vars.spacing[4],
  textAlign: 'left',
  borderRadius: vars.borderRadius.lg,
  border: '2px solid',
  borderColor: vars.color.border,
  backgroundColor: vars.color.surface,
  color: vars.color.text.primary,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  cursor: 'pointer',
  transition: `all ${vars.transition.fast}`,
  position: 'relative',
  overflow: 'hidden',
  
  ':hover': {
    borderColor: vars.color.neutral[300],
    backgroundColor: vars.color.neutral[50],
    transform: 'translateY(-1px)',
    boxShadow: vars.shadow.md,
  },
  
  ':focus': {
    outline: 'none',
    borderColor: vars.color.primary[500],
    boxShadow: `0 0 0 3px ${vars.color.primary[200]}`,
  },
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: vars.color.neutral[800],
      borderColor: vars.color.neutral[600],
    },
    '[data-theme="dark"] &:hover': {
      borderColor: vars.color.neutral[500],
      backgroundColor: vars.color.neutral[700],
    },
    '[data-theme="dark"] &:focus': {
      borderColor: vars.color.primary[400],
      boxShadow: `0 0 0 3px rgba(14, 165, 233, 0.3)`,
    },
  },
});

export const answerButtonSelected = style([answerButton, {
  borderColor: vars.color.primary[500],
  backgroundColor: vars.color.primary[50],
  
  selectors: {
    '[data-theme="dark"] &': {
      borderColor: vars.color.primary[400],
      backgroundColor: 'rgba(14, 165, 233, 0.1)',
    },
  },
}]);

export const answerButtonCorrect = style([answerButton, {
  borderColor: '#10b981',
  backgroundColor: '#ecfdf5',
  color: '#065f46',
  
  selectors: {
    '[data-theme="dark"] &': {
      borderColor: '#34d399',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      color: '#a7f3d0',
    },
  },
}]);

export const answerButtonIncorrect = style([answerButton, {
  borderColor: '#ef4444',
  backgroundColor: '#fef2f2',
  color: '#991b1b',
  
  selectors: {
    '[data-theme="dark"] &': {
      borderColor: '#f87171',
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      color: '#fca5a5',
    },
  },
}]);

export const answerButtonDisabled = style({
  cursor: 'default',
  
  ':hover': {
    transform: 'none',
    boxShadow: 'none',
  },
});

export const answerIcon = style({
  fontSize: '1.5rem',
  marginRight: vars.spacing[3],
});

export const answerLabel = style({
  fontWeight: vars.fontWeight.bold,
  marginRight: vars.spacing[3],
  color: vars.color.text.secondary,
});

// Explanation styles
export const explanationCard = style({
  marginTop: vars.spacing[6],
  padding: vars.spacing[4],
  borderRadius: vars.borderRadius.lg,
  borderLeft: '4px solid',
  animation: `${fadeInUp} 0.3s ease-out`,
});

export const explanationCorrect = style([explanationCard, {
  borderLeftColor: '#10b981',
  backgroundColor: '#ecfdf5',
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
    },
  },
}]);

export const explanationIncorrect = style([explanationCard, {
  borderLeftColor: '#ef4444',
  backgroundColor: '#fef2f2',
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
    },
  },
}]);

export const explanationHeader = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: vars.spacing[2],
});

export const explanationIcon = style({
  fontSize: '1.25rem',
  marginRight: vars.spacing[2],
});

export const explanationTitle = style({
  fontWeight: vars.fontWeight.bold,
});

export const explanationTitleCorrect = style([explanationTitle, {
  color: '#065f46',
  
  selectors: {
    '[data-theme="dark"] &': {
      color: '#a7f3d0',
    },
  },
}]);

export const explanationTitleIncorrect = style([explanationTitle, {
  color: '#991b1b',
  
  selectors: {
    '[data-theme="dark"] &': {
      color: '#fca5a5',
    },
  },
}]);

export const explanationText = style({
  color: vars.color.text.secondary,
  lineHeight: vars.lineHeight.relaxed,
});

// Next button styles
export const nextButtonContainer = style({
  marginTop: vars.spacing[6],
  textAlign: 'center',
});

export const nextButton = style({
  padding: `${vars.spacing[3]} ${vars.spacing[8]}`,
  backgroundColor: vars.color.primary[600],
  color: '#ffffff',
  borderRadius: vars.borderRadius.lg,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  border: 'none',
  cursor: 'pointer',
  transition: `all ${vars.transition.fast}`,
  boxShadow: vars.shadow.md,
  
  ':hover': {
    backgroundColor: vars.color.primary[700],
    transform: 'translateY(-1px)',
    boxShadow: vars.shadow.lg,
  },
  
  ':active': {
    transform: 'translateY(0)',
  },
  
  ':focus': {
    outline: 'none',
    boxShadow: `${vars.shadow.lg}, 0 0 0 3px ${vars.color.primary[200]}`,
  },
});

// Completion styles
export const completionTitle = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[6],
  animation: `${celebrate} 0.6s ease-in-out`,
  
  '@media': {
    'screen and (min-width: 768px)': {
      fontSize: vars.fontSize['4xl'],
    },
  },
});

export const completionMessage = style({
  backgroundColor: vars.color.surface,
  borderRadius: vars.borderRadius.lg,
  padding: vars.spacing[6],
  marginBottom: vars.spacing[6],
  boxShadow: vars.shadow.lg,
  border: `1px solid ${vars.color.border}`,
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: vars.color.neutral[800],
      borderColor: vars.color.neutral[700],
    },
  },
});

export const completionMessageTitle = style({
  fontSize: vars.fontSize.xl,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[4],
});

export const completionMessageText = style({
  color: vars.color.text.secondary,
  lineHeight: vars.lineHeight.relaxed,
});

export const actionButtons = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.spacing[4],
  justifyContent: 'center',
  
  '@media': {
    'screen and (min-width: 640px)': {
      flexDirection: 'row',
    },
  },
});

export const actionButton = style({
  padding: `${vars.spacing[3]} ${vars.spacing[6]}`,
  borderRadius: vars.borderRadius.lg,
  fontSize: vars.fontSize.base,
  fontWeight: vars.fontWeight.medium,
  textDecoration: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  border: 'none',
  transition: `all ${vars.transition.fast}`,
  boxShadow: vars.shadow.md,
  
  ':hover': {
    transform: 'translateY(-1px)',
    boxShadow: vars.shadow.lg,
  },
  
  ':active': {
    transform: 'translateY(0)',
  },
});

export const primaryActionButton = style([actionButton, {
  backgroundColor: vars.color.primary[600],
  color: '#ffffff',
  
  ':hover': {
    backgroundColor: vars.color.primary[700],
  },
}]);

export const secondaryActionButton = style([actionButton, {
  backgroundColor: '#10b981',
  color: '#ffffff',
  
  ':hover': {
    backgroundColor: '#059669',
  },
}]);