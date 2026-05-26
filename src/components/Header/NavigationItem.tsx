import { NavLink } from 'react-router-dom';

import type { SvgIconComponent } from '@mui/icons-material';
import { Button } from '@mui/material';

import type { TPageLinks } from '../../types';

interface IProps {
  color: string;
  icon: SvgIconComponent;
  link: TPageLinks;
  onClick?: () => void;
}

export const NavigationItem = ({ color, icon, link, onClick }: IProps) => {
  const Icon = icon;

  return (
    <Button
      component={NavLink}
      onClick={onClick}
      to={link}
      sx={{
        color,
        '& svg': {
          transition: 'transform 0.2s ease, color 0.2s ease',
        },
        '&.active svg': {
          color: 'action.active',
          transform: 'scale(1.2)',
        },
      }}
    >
      <Icon fontSize="large" />
    </Button>
  );
};
