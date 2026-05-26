import { AppBar, Container, Toolbar } from '@mui/material';

import { AdaptiveBox } from '../Commons';
import { HeaderLogo } from './HeaderLogo.tsx';
import { HeaderLangSelect } from './HeaderLangSelect.tsx';
import { NavDesktopMenu } from './NavDesktopMenu.tsx';
import { UserSection } from './UserSection.tsx';

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdaptiveBox flexGrow={1} variant="mobile">
            <HeaderLangSelect />
          </AdaptiveBox>

          <AdaptiveBox flexGrow={1} variant="mobile">
            <HeaderLogo />
          </AdaptiveBox>

          <AdaptiveBox variant="desktop">
            <HeaderLogo />
          </AdaptiveBox>

          <NavDesktopMenu />
          <UserSection />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
