import type { TKeyStorage } from '../types';

export const setItemStorage = (key: TKeyStorage, item: string) => {
  localStorage.setItem(key, item);
};
