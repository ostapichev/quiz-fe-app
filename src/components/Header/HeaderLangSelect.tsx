import LanguageIcon from '@mui/icons-material/Language';
import { Stack } from '@mui/material';

import { LanguageSelect } from './LanguageSelect.tsx';

export const HeaderLangSelect = () => {
  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexGrow: 1,
        minWidth: 100,
      }}
    >
      <LanguageIcon sx={{ color: 'background.paper' }} />
      <LanguageSelect />
    </Stack>
  );
};
