import CottageTwoToneIcon from '@mui/icons-material/CottageTwoTone';
import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';

import type { INavigation } from '../interfaces';

export const PAGE_LINK = {
  home: '/home',
  users: '/users',
  companies: '/companies',
  about: '/about',
  errors: '/errors',
} as const;

export const pages: INavigation[] = [
  {
    icon: CottageTwoToneIcon,
    link: PAGE_LINK.home,
  },
  {
    icon: Groups2TwoToneIcon,
    link: PAGE_LINK.users,
  },
  {
    icon: BusinessTwoToneIcon,
    link: PAGE_LINK.companies,
  },
  {
    icon: InfoTwoToneIcon,
    link: PAGE_LINK.about,
  },
];
