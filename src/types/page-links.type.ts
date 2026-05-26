import { PAGE_LINK } from '../constants';

export type TPageLinks = (typeof PAGE_LINK)[keyof typeof PAGE_LINK];
