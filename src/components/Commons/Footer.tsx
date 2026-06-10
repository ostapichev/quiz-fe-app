import { AppBar, Stack, Toolbar } from '@mui/material';

import { HOST, PORT } from '../../ets';
import { CustomTypography } from '../Customs';

const footerItems = [`Host: ${HOST}`, `Port: ${PORT}`];

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
        <Stack spacing={1}>
          {footerItems.map((item) => (
            <CustomTypography key={item} align="left" variant="subtitle2">
              {item}
            </CustomTypography>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
