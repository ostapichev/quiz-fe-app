import { LANGUAGE } from '../constants';

export type TLanguage = (typeof LANGUAGE)[keyof typeof LANGUAGE];
