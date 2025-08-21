import { style, keyframes } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

// Keyframe animations
const float = keyframes({
  '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
  '50%': { transform: 'translateY(-20px) rotate(180deg)' },
});

const floatReverse = keyframes({
  '0%, 100%': { transform: 'translateY(-10px) rotate(0deg)' },
  '50%': { transform: 'translateY(10px) rotate(-180deg)' },
});

const morph = keyframes({
  '0%, 100%': { 
    borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
    transform: 'scale(1) rotate(0deg)'
  },
  '50%': { 
    borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
    transform: 'scale(1.1) rotate(180deg)'
  },
});

const shimmer = keyframes({
  '0%': { transform: 'translateX(-100%)' },
  '100%': { transform: 'translateX(100%)' },
});

const fadeInUp = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(60px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
});

const particleFloat = keyframes({
  '0%': { 
    transform: 'translateY(100vh) rotate(0deg)',
    opacity: 0,
  },
  '10%': { opacity: 1 },
  '90%': { opacity: 1 },
  '100%': { 
    transform: 'translateY(-100px) rotate(360deg)',
    opacity: 0,
  },
});

const pulse = keyframes({
  '0%, 100%': { opacity: 0.4 },
  '50%': { opacity: 0.8 },
});

// Base container
export const container = style({
  position: 'relative',
  minHeight: '100vh',
  overflow: 'hidden',
  background: `linear-gradient(135deg, 
    ${vars.color.primary[50]} 0%, 
    ${vars.color.secondary[50]} 25%, 
    ${vars.color.primary[100]} 50%, 
    ${vars.color.secondary[100]} 75%, 
    ${vars.color.primary[50]} 100%)`,
  
  '@media': {
    '(prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },

  selectors: {
    '[data-theme="dark"] &': {
      background: `linear-gradient(135deg, 
        ${vars.color.neutral[900]} 0%, 
        ${vars.color.primary[900]} 25%, 
        ${vars.color.secondary[900]} 50%, 
        ${vars.color.primary[800]} 75%, 
        ${vars.color.neutral[800]} 100%)`,
    },
  },
});

// Background elements
export const backgroundElements = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
  zIndex: 1,
});

export const floatingShape1 = style({
  position: 'absolute',
  top: '10%',
  right: '10%',
  width: '300px',
  height: '300px',
  background: `linear-gradient(45deg, 
    rgba(20, 184, 166, 0.1), 
    rgba(139, 92, 246, 0.1))`,
  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
  animation: `${morph} 20s ease-in-out infinite, ${float} 15s ease-in-out infinite`,
  filter: 'blur(2px)',
  
  '@media': {
    'screen and (max-width: 768px)': {
      width: '200px',
      height: '200px',
      right: '5%',
    },
  },
});

export const floatingShape2 = style({
  position: 'absolute',
  bottom: '20%',
  left: '5%',
  width: '250px',
  height: '250px',
  background: `linear-gradient(135deg, 
    rgba(6, 182, 212, 0.15), 
    rgba(251, 191, 36, 0.1))`,
  borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
  animation: `${morph} 18s ease-in-out infinite reverse, ${floatReverse} 12s ease-in-out infinite`,
  filter: 'blur(3px)',
  
  '@media': {
    'screen and (max-width: 768px)': {
      width: '150px',
      height: '150px',
      left: '2%',
    },
  },
});

export const floatingShape3 = style({
  position: 'absolute',
  top: '50%',
  right: '30%',
  width: '400px',
  height: '200px',
  background: `linear-gradient(60deg, 
    rgba(236, 72, 153, 0.08), 
    rgba(249, 115, 22, 0.12))`,
  borderRadius: '80% 20% 60% 40% / 30% 80% 20% 70%',
  animation: `${morph} 25s ease-in-out infinite, ${float} 20s ease-in-out infinite`,
  filter: 'blur(4px)',
  
  '@media': {
    'screen and (max-width: 768px)': {
      width: '250px',
      height: '125px',
      right: '10%',
    },
  },
});

export const particleField = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

export const particle = style({
  position: 'absolute',
  width: '4px',
  height: '4px',
  background: `radial-gradient(circle, 
    rgba(20, 184, 166, 0.8) 0%, 
    rgba(20, 184, 166, 0.2) 70%, 
    transparent 100%)`,
  borderRadius: '50%',
  animation: `${particleFloat} linear infinite`,
  
  selectors: {
    '&:nth-child(2n)': {
      background: `radial-gradient(circle, 
        rgba(139, 92, 246, 0.6) 0%, 
        rgba(139, 92, 246, 0.1) 70%, 
        transparent 100%)`,
      width: '3px',
      height: '3px',
    },
    '&:nth-child(3n)': {
      background: `radial-gradient(circle, 
        rgba(251, 191, 36, 0.7) 0%, 
        rgba(251, 191, 36, 0.15) 70%, 
        transparent 100%)`,
      width: '2px',
      height: '2px',
    },
  },
});

// Animation classes
export const animatedSection = style({
  opacity: 0,
  transform: 'translateY(60px)',
  transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
});

export const visible = style({
  opacity: 1,
  transform: 'translateY(0)',
});

// Hero section
export const hero = style({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  padding: `0 ${vars.spacing[4]}`,
  
  '@media': {
    'screen and (min-width: 768px)': {
      padding: `0 ${vars.spacing[8]}`,
    },
  },
});

export const heroContent = style({
  position: 'relative',
  textAlign: 'center',
  zIndex: 3,
});

export const heroGradient = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `radial-gradient(ellipse at center, 
    rgba(255, 255, 255, 0.1) 0%, 
    transparent 70%)`,
  
  selectors: {
    '[data-theme="dark"] &': {
      background: `radial-gradient(ellipse at center, 
        rgba(255, 255, 255, 0.05) 0%, 
        transparent 70%)`,
    },
  },
});

export const heroText = style({
  position: 'relative',
  '::before': {
    content: '""',
    position: 'absolute',
    top: '-50px',
    left: '-50px',
    right: '-50px',
    bottom: '-50px',
    background: `linear-gradient(45deg, 
      rgba(255, 255, 255, 0.1), 
      rgba(255, 255, 255, 0.05))`,
    borderRadius: '30px',
    backdropFilter: 'blur(20px)',
    zIndex: -1,
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
});

export const heroTitle = style({
  fontSize: vars.fontSize['5xl'],
  fontWeight: vars.fontWeight.extrabold,
  lineHeight: vars.lineHeight.tight,
  marginBottom: vars.spacing[6],
  background: `linear-gradient(135deg, 
    ${vars.color.primary[600]}, 
    ${vars.color.secondary[500]}, 
    ${vars.color.primary[500]})`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  position: 'relative',
  
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, 
      ${vars.color.primary[600]}, 
      ${vars.color.secondary[500]}, 
      ${vars.color.primary[500]})`,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    animation: `${shimmer} 3s ease-in-out infinite`,
    opacity: 0.3,
  },
  
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: vars.fontSize['3xl'],
    },
    'screen and (max-width: 480px)': {
      fontSize: vars.fontSize['2xl'],
    },
  },
});

export const titleLine1 = style({
  display: 'block',
  animation: `${fadeInUp} 1s ease-out 0.2s both`,
});

export const titleLine2 = style({
  display: 'block',
  animation: `${fadeInUp} 1s ease-out 0.4s both`,
});

export const heroDescription = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
  maxWidth: '600px',
  margin: '0 auto',
  animation: `${fadeInUp} 1s ease-out 0.6s both`,
  
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: vars.fontSize.lg,
    },
  },
});

// Sections
export const section = style({
  position: 'relative',
  padding: `${vars.spacing[20]} ${vars.spacing[4]}`,
  zIndex: 2,
  
  '@media': {
    'screen and (min-width: 768px)': {
      padding: `${vars.spacing[24]} ${vars.spacing[8]}`,
    },
  },
});

export const sectionContent = style({
  maxWidth: vars.breakpoint.wide,
  margin: '0 auto',
});

export const sectionTitle = style({
  fontSize: vars.fontSize['3xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  textAlign: 'center',
  marginBottom: vars.spacing[12],
  position: 'relative',
  
  '::after': {
    content: '""',
    position: 'absolute',
    bottom: '-20px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '4px',
    background: `linear-gradient(90deg, 
      ${vars.color.primary[500]}, 
      ${vars.color.secondary[500]})`,
    borderRadius: '2px',
  },
  
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: vars.fontSize['2xl'],
    },
  },
});

// Story section
export const storyGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: vars.spacing[8],
  marginTop: vars.spacing[8],
});

export const storyCard = style({
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: vars.borderRadius.xl,
  padding: vars.spacing[6],
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.1), 
      transparent)`,
    transition: 'left 0.6s ease',
  },
  
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
  },
  
  selectors: {
    '&:hover::before': {
      left: '100%',
    },
    '[data-theme="dark"] &': {
      background: 'rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
  },
});

export const storyText = style({
  fontSize: vars.fontSize.lg,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.text.secondary,
});

// Problem and Solution sections
export const problemSection = style({
  textAlign: 'center',
  padding: vars.spacing[8],
  background: 'rgba(239, 68, 68, 0.05)',
  borderRadius: vars.borderRadius['2xl'],
  border: '1px solid rgba(239, 68, 68, 0.1)',
  backdropFilter: 'blur(10px)',
  
  selectors: {
    '[data-theme="dark"] &': {
      background: 'rgba(239, 68, 68, 0.1)',
    },
  },
});

export const problemText = style({
  fontSize: vars.fontSize.xl,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.text.secondary,
  maxWidth: '800px',
  margin: '0 auto',
});

export const solutionSection = style({
  textAlign: 'center',
  padding: vars.spacing[8],
  background: 'rgba(34, 197, 94, 0.05)',
  borderRadius: vars.borderRadius['2xl'],
  border: '1px solid rgba(34, 197, 94, 0.1)',
  backdropFilter: 'blur(10px)',
  
  selectors: {
    '[data-theme="dark"] &': {
      background: 'rgba(34, 197, 94, 0.1)',
    },
  },
});

export const solutionText = style({
  fontSize: vars.fontSize.xl,
  lineHeight: vars.lineHeight.relaxed,
  color: vars.color.text.secondary,
  maxWidth: '800px',
  margin: '0 auto',
});

// Statistics section
export const statsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: vars.spacing[6],
  marginTop: vars.spacing[8],
});

export const statCard = style({
  textAlign: 'center',
  padding: vars.spacing[8],
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: vars.borderRadius.xl,
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: `linear-gradient(90deg, 
      ${vars.color.primary[500]}, 
      ${vars.color.secondary[500]})`,
  },
  
  ':hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
  },
  
  selectors: {
    '[data-theme="dark"] &': {
      background: 'rgba(0, 0, 0, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    },
  },
});

export const statNumber = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.extrabold,
  color: vars.color.primary[600],
  marginBottom: vars.spacing[2],
  animation: `${pulse} 2s ease-in-out infinite`,
  
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: vars.fontSize['3xl'],
    },
  },
});

export const statLabel = style({
  fontSize: vars.fontSize.base,
  color: vars.color.text.secondary,
  fontWeight: vars.fontWeight.medium,
});

// Call to Action section
export const ctaSection = style({
  position: 'relative',
  padding: `${vars.spacing[20]} ${vars.spacing[4]}`,
  zIndex: 2,
  textAlign: 'center',
  
  '@media': {
    'screen and (min-width: 768px)': {
      padding: `${vars.spacing[24]} ${vars.spacing[8]}`,
    },
  },
});

export const ctaContent = style({
  position: 'relative',
  zIndex: 3,
});

export const ctaGradient = style({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: `radial-gradient(ellipse at center, 
    rgba(20, 184, 166, 0.1) 0%, 
    transparent 70%)`,
  
  selectors: {
    '[data-theme="dark"] &': {
      background: `radial-gradient(ellipse at center, 
        rgba(20, 184, 166, 0.05) 0%, 
        transparent 70%)`,
    },
  },
});

export const ctaTitle = style({
  fontSize: vars.fontSize['4xl'],
  fontWeight: vars.fontWeight.bold,
  color: vars.color.text.primary,
  marginBottom: vars.spacing[6],
  
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: vars.fontSize['2xl'],
    },
  },
});

export const ctaDescription = style({
  fontSize: vars.fontSize.xl,
  color: vars.color.text.secondary,
  marginBottom: vars.spacing[8],
  maxWidth: '600px',
  margin: `0 auto ${vars.spacing[8]}`,
  
  '@media': {
    'screen and (max-width: 768px)': {
      fontSize: vars.fontSize.lg,
    },
  },
});

export const ctaButton = style({
  display: 'inline-block',
  padding: `${vars.spacing[4]} ${vars.spacing[8]}`,
  fontSize: vars.fontSize.lg,
  fontWeight: vars.fontWeight.semibold,
  color: 'white',
  background: `linear-gradient(135deg, 
    ${vars.color.primary[500]}, 
    ${vars.color.secondary[500]})`,
  borderRadius: vars.borderRadius.full,
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
  
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: `linear-gradient(90deg, 
      transparent, 
      rgba(255, 255, 255, 0.2), 
      transparent)`,
    transition: 'left 0.6s ease',
  },
  
  ':hover': {
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.3)',
  },
  
  ':active': {
    transform: 'translateY(-1px) scale(1.02)',
  },
  
  selectors: {
    '&:hover::before': {
      left: '100%',
    },
  },
  
  '@media': {
    'screen and (max-width: 768px)': {
      padding: `${vars.spacing[3]} ${vars.spacing[6]}`,
      fontSize: vars.fontSize.base,
    },
  },
});