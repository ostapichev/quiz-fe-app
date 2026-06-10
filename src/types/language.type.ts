import { LANGUAGE, LANGUAGE_LABEL } from '../constants';
import type { ValueOf } from './value-of.type.ts';

export type TLanguage = ValueOf<typeof LANGUAGE>;
export type TLanguageLabel = ValueOf<typeof LANGUAGE_LABEL>;
