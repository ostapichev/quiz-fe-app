import type { IDevice, IDisplayStyle } from '../interfaces';

export const DEVICE = {
  desktop: 'desktop',
  mobile: 'mobile',
} satisfies IDevice;

export const MOBILE_DISPLAY = {
  xs: 'flex',
  md: 'none',
} satisfies IDisplayStyle;

export const DESKTOP_DISPLAY = {
  xs: 'none',
  md: 'flex',
} satisfies IDisplayStyle;
