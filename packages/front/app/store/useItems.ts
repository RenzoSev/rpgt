import { atom } from 'jotai';
import { IItem } from '../services/Items';

export const items = atom<IItem[]>([]);
export const hasFetched = atom<boolean>(false);
