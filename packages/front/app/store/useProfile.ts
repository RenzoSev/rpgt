'use client';

import { atom } from 'jotai';
import { IProfile } from '../services/Player';

export const profile = atom<IProfile>({
  id: String(),
  nickname: String(),
  class: String(),
  status: {
    gold: Number(),
  },
  inventory: {
    attack: {
      id: Number(),
      name: String(),
      status: {
        type: 'weapon',
        equipped: Boolean(),
        attack: Number(),
        level: Number(),
        gold: Number(),
        bought: Boolean(),
      },
    },
    defense: {
      id: Number(),
      name: String(),
      status: {
        level: Number(),
        type: 'shield',
        equipped: Boolean(),
        defense: Number(),
        gold: Number(),
        bought: Boolean(),
      },
    },
  },
});
export const hasFetched = atom<boolean>(false);
