import type { ILanguage } from '../interfaces';

export const LANGUAGE = {
  en: 'en',
  ua: 'ua',
} as const;

export const LANGUAGE_LABEL = {
  english: 'English',
  ukrainian: 'Ukrainian',
} as const;

export const languages: ILanguage[] = [
  {
    label: LANGUAGE_LABEL.english,
    value: LANGUAGE.en,
  },
  {
    label: LANGUAGE_LABEL.ukrainian,
    value: LANGUAGE.ua,
  },
];
