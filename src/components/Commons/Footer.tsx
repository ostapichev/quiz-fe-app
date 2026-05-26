import { AppBar, Stack, Toolbar } from '@mui/material';

import { HOST, PORT } from '../../ets';
import { CustomTypography } from '../Customs';

export const Footer = () => {
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
          <CustomTypography align="left" variant="subtitle2" sx={{ p: 1 }}>
            {`Host: ${HOST}`}
          </CustomTypography>
          <CustomTypography align="left" variant="subtitle2" sx={{ p: 1 }}>
            {`Port: ${PORT}`}
          </CustomTypography>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
