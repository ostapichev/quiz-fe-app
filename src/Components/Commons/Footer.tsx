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
          <CustomTypography
            padding={1}
            textAlign="left"
            text={`Host: ${HOST}`}
            variant="subtitle2"
          />

          <CustomTypography
            padding={1}
            textAlign="left"
            text={`Port: ${PORT}`}
            variant="subtitle2"
          />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
