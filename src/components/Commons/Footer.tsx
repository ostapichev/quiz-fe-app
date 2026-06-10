import { Fragment } from 'react';

import { AppBar, Stack, Toolbar } from '@mui/material';

import { HOST, PORT } from '../../ets';
import { CustomTypography } from '../Customs';

export const Footer = () => {
  const subtitles = [
    <CustomTypography align="left" variant="subtitle2" sx={{ p: 1 }}>
      {`Host: ${HOST}`}
    </CustomTypography>,

    <CustomTypography align="left" variant="subtitle2" sx={{ p: 1 }}>
      {`Port: ${PORT}`}
    </CustomTypography>,
  ];

  return (
    <AppBar
      component="footer"
      position="fixed"
      sx={{
        bgcolor: 'secondary.main',
        bottom: 0,
        top: 'auto',
      }}
    >
      <Toolbar>
        <Stack direction="column">
          {subtitles.map((subtitle, index) => (
            <Fragment key={index}>{subtitle}</Fragment>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
