import { type MouseEvent, useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';

import logo_quiz from '../../assets/logo-quiz.png';
import { pages, settings } from '../../ets';
import type { INavigation } from '../../interfaces';
import { NavigationItem } from './NavigationItem.tsx';

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            alt="logo-quiz"
            component="img"
            src={logo_quiz}
            sx={{
              display: { md: 'flex', xs: 'none' },
              height: '4em',
              pr: 1,
            }}
          />
          <Box sx={{ display: { md: 'none', xs: 'flex' }, flexGrow: 1 }}>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              onClick={handleOpenNavMenu}
              size="large"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                horizontal: 'left',
                vertical: 'bottom',
              }}
              id="menu-appbar"
              keepMounted
              onClose={handleCloseNavMenu}
              open={Boolean(anchorElNav)}
              sx={{ display: { md: 'none', xs: 'block' } }}
              transformOrigin={{
                horizontal: 'left',
                vertical: 'top',
              }}
            >
              {pages.map((page: INavigation, index: number) => (
                <MenuItem key={index}>
                  <NavigationItem
                    icon={page.icon}
                    link={page.link}
                    color="primary.main"
                    onClick={handleCloseNavMenu}
                  />
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { md: 'none', xs: 'flex' },
              flexGrow: 1,
            }}
          >
            <Box
              component="img"
              src={logo_quiz}
              alt="logo-quiz"
              sx={{
                height: '4em',
              }}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
            <Stack
              direction="row"
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '15%',
              }}
            >
              {pages.map((page: INavigation, index: number) => (
                <NavigationItem
                  key={index}
                  icon={page.icon}
                  link={page.link}
                  color="secondary.main"
                />
              ))}
            </Stack>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorElUser}
              anchorOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
              id="menu-appbar"
              keepMounted
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              sx={{ pt: '45px' }}
              transformOrigin={{
                horizontal: 'right',
                vertical: 'top',
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
