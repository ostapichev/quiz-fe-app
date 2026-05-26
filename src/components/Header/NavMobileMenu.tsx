import { type MouseEvent, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem } from '@mui/material';

import { AdaptiveBox } from '../Commons';
import { pages } from '../../constants';
import { NavigationItem } from './NavigationItem.tsx';

export const NavMobileMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AdaptiveBox flexGrow={1} variant="mobile">
      {
        <>
          <IconButton
            aria-controls="menu-appbar"
            aria-haspopup="true"
            aria-label="account of current user"
            onClick={handleOpenNavMenu}
            size="large"
          >
            <MenuIcon sx={{ color: 'background.paper' }} />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{
              horizontal: 'left',
              vertical: 'bottom',
            }}
            id="nav-menu"
            keepMounted
            onClose={handleCloseNavMenu}
            open={Boolean(anchorElNav)}
            sx={{ display: { md: 'none', xs: 'block' } }}
            transformOrigin={{
              horizontal: 'left',
              vertical: 'top',
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.link}>
                <NavigationItem
                  icon={page.icon}
                  link={page.link}
                  onClick={handleCloseNavMenu}
                  color="primary.main"
                />
              </MenuItem>
            ))}
          </Menu>
        </>
      }
    </AdaptiveBox>
  );
};
