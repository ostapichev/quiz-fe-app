import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone';
import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

import type { INavigation } from '../interfaces';
import { PageLinks } from './page-links.ts';

export const HOST = import.meta.env.VITE_HOST;
export const PORT = import.meta.env.VITE_PORT;

export const pages: INavigation[] = [
  {
    icon: CottageTwoToneIcon,
    link: PageLinks.HOME,
  },
  {
    icon: Groups2TwoToneIcon,
    link: PageLinks.USERS,
  },
  {
    icon: BusinessTwoToneIcon,
    link: PageLinks.COMPANIES,
  },
  {
    icon: InfoTwoToneIcon,
    link: PageLinks.ABOUT,
  },
];

export const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
