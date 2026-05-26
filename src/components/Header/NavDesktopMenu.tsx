import { Stack } from '@mui/material';

import { pages } from '../../constants';
import { AdaptiveBox } from '../Commons';
import { NavigationItem } from './NavigationItem.tsx';

export const NavDesktopMenu = () => {
  return (
    <AdaptiveBox flexGrow={1} variant="desktop">
      <Stack
        direction="row"
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {pages.map((page) => (
          <NavigationItem
            key={page.link}
            icon={page.icon}
            link={page.link}
            color="secondary.main"
          />
        ))}
      </Stack>
    </AdaptiveBox>
  );
};
