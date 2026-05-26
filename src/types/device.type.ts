import { DEVICE } from '../constants';

export type TDevice = (typeof DEVICE)[keyof typeof DEVICE];
