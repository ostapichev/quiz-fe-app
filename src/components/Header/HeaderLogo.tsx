import { Box } from '@mui/material';

import logo_quiz from '../../assets/logo-quiz.png';

export const HeaderLogo = () => {
  return (
    <Box
      component="img"
      src={logo_quiz}
      alt="logo-quiz"
      sx={{ height: '4rem' }}
    />
  );
};
