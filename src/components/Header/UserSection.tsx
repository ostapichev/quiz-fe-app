import { Stack } from '@mui/material';

import { DEVICE } from '../../constants';
import { AdaptiveBox } from '../Commons';
import { HeaderLangSelect } from './HeaderLangSelect.tsx';
import { HeaderUserMenu } from './HeaderUserMenu.tsx';
import { NavMobileMenu } from './NavMobileMenu.tsx';

export const UserSection = () => {
  return (
    <Stack direction="row" sx={{ alignItems: 'center' }}>
      <NavMobileMenu />

      <AdaptiveBox variant={DEVICE.desktop}>
        <HeaderLangSelect />
      </AdaptiveBox>

      <HeaderUserMenu />
    </Stack>
  );
};
