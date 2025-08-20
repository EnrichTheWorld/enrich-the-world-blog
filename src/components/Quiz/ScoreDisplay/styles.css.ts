import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

// Animations
const scoreCountUp = keyframes({
  '0%': {
    transform: 'scale(0.8)',
    opacity: 0,
  },
  '50%': {
    transform: 'scale(1.1)',
    opacity: 0.8,
  },
  '100%': {
    transform: 'scale(1)',
    opacity: 1,
  },
});

const gradeReveal = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(10px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const shimmer = keyframes({
  '0%': {
    backgroundPosition: '-200% center',
  },
  '100%': {
    backgroundPosition: '200% center',
  },
});

const pulse = keyframes({
  '0%, 100%': {
    boxShadow: `0 0 0 0 rgba(14, 165, 233, 0.4)`,
  },
  '50%': {
    boxShadow: `0 0 0 10px rgba(14, 165, 233, 0)`,
  },
});

// Base container styles
export const scoreContainer = style({
  borderRadius: vars.borderRadius.xl,
  border: '2px solid',
  position: 'relative',
  overflow: 'hidden',
  transition: `all ${vars.transition.base}`,
  backdropFilter: 'blur(8px)',
});

export const smallContainer = style([scoreContainer, {
  padding: vars.spacing[4],
}]);

export const mediumContainer = style([scoreContainer, {
  padding: vars.spacing[6],
}]);

export const largeContainer = style([scoreContainer, {
  padding: vars.spacing[8],
}]);

// Color variations
export const excellentScore = style({
  borderColor: '#10b981',
  background: 'linear-gradient(135deg, #ecfdf5, #d1fae5)',
  color: '#065f46',
  animation: `${pulse} 2s infinite`,
  
  selectors: {
    '[data-theme="dark"] &': {
      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.2))',
      borderColor: '#34d399',
      color: '#a7f3d0',
    },
  },
});

export const greatScore = style({
  borderColor: vars.color.primary[500],
  background: `linear-gradient(135deg, ${vars.color.primary[50]}, ${vars.color.primary[100]})`,
  color: vars.color.primary[700],
  
  selectors: {
    '[data-theme="dark"] &': {
      background: `linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(14, 165, 233, 0.2))`,
      borderColor: vars.color.primary[400],
      color: vars.color.primary[300],
    },
  },
});

export const goodScore = style({
  borderColor: '#f59e0b',
  background: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
  color: '#92400e',
  
  selectors: {
    '[data-theme="dark"] &': {
      background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.2))',
      borderColor: '#fbbf24',
      color: '#fcd34d',
    },
  },
});

export const fairScore = style({
  borderColor: '#f97316',
  background: 'linear-gradient(135deg, #fff7ed, #fed7aa)',
  color: '#9a3412',
  
  selectors: {
    '[data-theme="dark"] &': {
      background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(249, 115, 22, 0.2))',
      borderColor: '#fb923c',
      color: '#fdba74',
    },
  },
});

export const needsImprovementScore = style({
  borderColor: '#ef4444',
  background: 'linear-gradient(135deg, #fef2f2, #fecaca)',
  color: '#991b1b',
  
  selectors: {
    '[data-theme="dark"] &': {
      background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.2))',
      borderColor: '#f87171',
      color: '#fca5a5',
    },
  },
});

// Score display styles
export const scoreContent = style({
  textAlign: 'center',
  position: 'relative',
  zIndex: 1,
});

export const scoreNumbers = style({
  fontWeight: vars.fontWeight.bold,
  marginBottom: vars.spacing[2],
  animation: `${scoreCountUp} 0.8s ease-out`,
  fontFeatureSettings: '"tnum"',
});

export const smallScore = style([scoreNumbers, {
  fontSize: vars.fontSize.lg,
}]);

export const mediumScore = style([scoreNumbers, {
  fontSize: vars.fontSize['2xl'],
}]);

export const largeScore = style([scoreNumbers, {
  fontSize: vars.fontSize['4xl'],
}]);

export const percentage = style({
  fontWeight: vars.fontWeight.bold,
  marginBottom: vars.spacing[2],
  animation: `${scoreCountUp} 0.8s ease-out 0.2s both`,
  fontFeatureSettings: '"tnum"',
});

export const smallPercentage = style([percentage, {
  fontSize: vars.fontSize.lg,
}]);

export const mediumPercentage = style([percentage, {
  fontSize: vars.fontSize['2xl'],
}]);

export const largePercentage = style([percentage, {
  fontSize: vars.fontSize['4xl'],
}]);

export const grade = style({
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.medium,
  animation: `${gradeReveal} 0.6s ease-out 0.4s both`,
  opacity: 0,
});

// Decorative elements
export const shimmerOverlay = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
  backgroundSize: '200% 100%',
  animation: `${shimmer} 2s ease-in-out infinite`,
  pointerEvents: 'none',
});

export const celebrationIcon = style({
  position: 'absolute',
  top: vars.spacing[2],
  right: vars.spacing[2],
  fontSize: '1.5rem',
  opacity: 0.6,
  animation: `${scoreCountUp} 0.6s ease-out 0.6s both`,
});

// Progress ring (for future enhancement)
export const progressRing = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '120px',
  height: '120px',
  opacity: 0.1,
  pointerEvents: 'none',
});

// Responsive adjustments
export const responsiveContainer = style({
  '@media': {
    'screen and (max-width: 640px)': {
      padding: vars.spacing[4],
    },
  },
});

// Score breakdown (for detailed view)
export const scoreBreakdown = style({
  marginTop: vars.spacing[4],
  padding: vars.spacing[3],
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  borderRadius: vars.borderRadius.md,
  fontSize: vars.fontSize.sm,
  
  selectors: {
    '[data-theme="dark"] &': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
  },
});

export const breakdownItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: vars.spacing[1],
  
  ':last-child': {
    marginBottom: 0,
  },
});

export const breakdownLabel = style({
  fontWeight: vars.fontWeight.medium,
  color: 'inherit',
});

export const breakdownValue = style({
  fontWeight: vars.fontWeight.bold,
  fontFeatureSettings: '"tnum"',
});