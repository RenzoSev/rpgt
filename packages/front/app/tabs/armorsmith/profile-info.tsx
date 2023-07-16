'use client';

import TabTitle from '@/app/components/tabs/tab-title';
import { catppuccin } from '@/app/styles/colors';
import { GiTwoCoins } from 'react-icons/gi';
import { Profile as ProfileService } from '@/app/services/Profile';
import { useService } from '@/app/hooks/useService';
import {
  profile as profileAtoms,
  hasFetched as hasFetchedAtom,
} from '@/app/store/useProfile';

export function ProfileInfo() {
  const profileService = new ProfileService();
  const { atom: profile } = useService(
    profileService,
    profileAtoms,
    hasFetchedAtom
  );
  const {
    status: { gold },
  } = profile;

  return (
    <div className="flex justify-around items-center">
      <TabTitle title="Buy items" />

      <div className="flex gap-2 items-center">
        <GiTwoCoins color={catppuccin.mocha.yellow} size={22} />
        <p className="text-lg text-ctp-subtext0 font-bold">{gold}</p>
      </div>
    </div>
  );
}
