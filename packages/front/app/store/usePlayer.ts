'use client';

import { atom } from 'jotai';
import { IPlayer } from '../services/Player';

export const player = atom<IPlayer>({
  id: String(),
  name: String(),
  class: String(),
  status: {
    gold: Number(),
    level: Number(),
  },
  inventory: {
    bought: [String()],
    equipped: [String(), String()],
  },
} as IPlayer);
export const hasFetched = atom<boolean>(false);
