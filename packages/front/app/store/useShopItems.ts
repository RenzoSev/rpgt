import { atom } from 'jotai';
import { Item } from '../services/Items';

export const shopItems = atom<Item[]>([]);
