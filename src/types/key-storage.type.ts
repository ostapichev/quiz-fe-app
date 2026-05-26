import { STORAGE_KEY } from '../constants';

export type TKeyStorage = (typeof STORAGE_KEY)[keyof typeof STORAGE_KEY];
