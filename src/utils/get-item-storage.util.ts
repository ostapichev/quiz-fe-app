import type { TKeyStorage } from '../types';

export const getItemStorage = (key: TKeyStorage) => localStorage.getItem(key);
