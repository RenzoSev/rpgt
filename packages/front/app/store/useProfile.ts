'use client';

import { atom } from 'jotai';
import { IProfile } from '../services/Profile';

export const profile = atom<IProfile>({
  id: '',
  nickname: '',
  class: '',
  status: {
    gold: 0,
  },
});
export const hasFetched = atom<boolean>(false);
