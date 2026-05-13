import { NavLink } from 'react-router-dom';

import type { SvgIconComponent } from '@mui/icons-material';
import { Button, MenuItem } from '@mui/material';

import type { TPageLinks } from '../../types';

interface IProps {
  icon: SvgIconComponent;
  link: TPageLinks;
  onClick?: () => void;
  withMenuItem?: boolean;
}

export const NavigationItem = ({
  icon,
  link,
  onClick,
  withMenuItem = false,
}: IProps) => {
  const Icon = icon;
  const content = (
    <Button
      component={NavLink}
      onClick={onClick}
      to={link}
      sx={{
        color: withMenuItem ? 'primary.main' : 'secondary.main',
        '& svg': {
          transition: 'transform 0.2s ease, color 0.2s ease',
        },
        '&.active svg': {
          color: 'action.disabled',
          transform: 'scale(1.3)',
        },
      }}
    >
      <Icon fontSize="large" />
    </Button>
  );
  return withMenuItem ? <MenuItem>{content}</MenuItem> : content;
};
