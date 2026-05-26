import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { MenuItem, Select, type SelectChangeEvent } from '@mui/material';

import { LANGUAGE, languages, STORAGE_KEY } from '../../constants';

import type { TLanguage } from '../../types';
import { getItemStorage, setItemStorage } from '../../utils';

const { en, ua } = LANGUAGE;
const { language } = STORAGE_KEY;

export const LanguageSelect = () => {
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    const selectedLang = event.target.value as TLanguage;

    i18n.changeLanguage(selectedLang);
    setItemStorage(language, selectedLang);
  };

  useEffect(() => {
    const storedLang = getItemStorage(language);
    const currentLang =
      storedLang === en || storedLang === ua ? storedLang : en;

    i18n.changeLanguage(currentLang);
  }, [i18n]);

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      variant="standard"
      inputProps={{
        'aria-label': 'language select',
      }}
      sx={{
        color: 'text.secondary',
      }}
    >
      {languages.map((lang) => (
        <MenuItem key={lang.label} value={lang.value}>
          {lang.value.toUpperCase()}
        </MenuItem>
      ))}
    </Select>
  );
};
