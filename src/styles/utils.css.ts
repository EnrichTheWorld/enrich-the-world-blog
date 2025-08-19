import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles';
import { vars } from './theme.css';

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { '@media': 'screen and (min-width: 768px)' },
    desktop: { '@media': 'screen and (min-width: 1024px)' },
    wide: { '@media': 'screen and (min-width: 1280px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'inline-block', 'grid'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    marginTop: vars.spacing,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeight,
    fontWeight: vars.fontWeight,
    textAlign: ['left', 'center', 'right'],
    gap: vars.spacing,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: {
      primary: vars.color.text.primary,
      secondary: vars.color.text.secondary,
      tertiary: vars.color.text.tertiary,
    },
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

export type Sprinkles = Parameters<typeof sprinkles>[0];

// Utility classes
export const container = {
  mobile: {
    maxWidth: '100%',
    paddingLeft: vars.spacing[4],
    paddingRight: vars.spacing[4],
  },
  tablet: {
    '@media': `screen and (min-width: ${vars.breakpoint.tablet})`,
    maxWidth: vars.breakpoint.tablet,
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: vars.spacing[6],
    paddingRight: vars.spacing[6],
  },
  desktop: {
    '@media': `screen and (min-width: ${vars.breakpoint.desktop})`,
    maxWidth: vars.breakpoint.desktop,
    paddingLeft: vars.spacing[8],
    paddingRight: vars.spacing[8],
  },
  wide: {
    '@media': `screen and (min-width: ${vars.breakpoint.wide})`,
    maxWidth: vars.breakpoint.wide,
  },
};

export const flexCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const flexBetween = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const flexColumn = {
  display: 'flex',
  flexDirection: 'column',
};

export const grid = {
  display: 'grid',
  gap: vars.spacing[6],
  gridTemplateColumns: {
    mobile: '1fr',
    tablet: 'repeat(2, 1fr)',
    desktop: 'repeat(3, 1fr)',
  },
};

export const visuallyHidden = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: '0',
};