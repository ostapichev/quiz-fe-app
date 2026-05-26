import type { ILanguage } from '../interfaces';

export const LANGUAGE = {
  en: 'en',
  ua: 'ua',
} as const;

export const languages: ILanguage[] = [
  {
    label: 'English',
    value: LANGUAGE.en,
  },
  {
    label: 'Ukrainian',
    value: LANGUAGE.ua,
  },
];
