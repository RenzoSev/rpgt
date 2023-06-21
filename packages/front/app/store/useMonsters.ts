import { atom } from 'jotai';
import { Monster } from '../services/Monsters';

export const monsters = atom<Monster[]>([]);
