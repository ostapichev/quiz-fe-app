import { type MouseEvent, useState } from 'react';

import { Avatar, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';

import { settings } from '../../ets';
import { CustomTypography } from '../Customs';

export const HeaderUserMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="User" />
        </IconButton>
      </Tooltip>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        sx={{ mt: '45px' }}
        keepMounted
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <CustomTypography sx={{ textAlign: 'center' }}>
              {setting}
            </CustomTypography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
