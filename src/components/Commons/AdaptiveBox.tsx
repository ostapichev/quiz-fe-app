import type { ReactNode } from 'react';

import { Box } from '@mui/material';

import { DESKTOP_DISPLAY, DEVICE, MOBILE_DISPLAY } from '../../constants';
import type { TDevice } from '../../types';

interface IProps {
  children: ReactNode;
  variant: TDevice;
  flexGrow?: number;
}

export const AdaptiveBox = ({ children, variant, flexGrow = 0 }: IProps) => {
  return (
    <Box
      sx={{
        display: variant === DEVICE.mobile ? MOBILE_DISPLAY : DESKTOP_DISPLAY,
        flexGrow,
        justifyContent: 'flex-start',
      }}
    >
      {children}
    </Box>
  );
};
