import type { Theme } from '@emotion/react';

import { createTheme } from '@mui/material/styles';

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#55aaff',
      light: '#d6d6d6',
      dark: '#5a5a5a',
    },

    secondary: {
      main: '#d9d9d9',
      light: '#f1f1f1',
      dark: '#5a5a5a',
    },

    background: {
      default: '#f1f1f1',
      paper: '#f8f8f8',
    },

    action: {
      hover: '#bbbbbb',
      active: '#cac4ca',
      disabled: '#bbbbbb',
    },

    text: {
      primary: '#555555',
      secondary: '#fffafa',
      disabled: '#bbbbbb',
    },
  },
});
