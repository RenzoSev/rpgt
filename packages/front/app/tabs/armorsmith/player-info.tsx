'use client';

import TabTitle from '@/app/components/tabs/tab-title';
import { catppuccin } from '@/app/styles/colors';
import { GiTwoCoins } from 'react-icons/gi';
import { Player as PlayerService } from '@/app/services/Player';
import { useService } from '@/app/hooks/useService';
import {
  player as playerAtoms,
  hasFetched as hasFetchedAtom,
} from '@/app/store/usePlayer';

export function PlayerInfo() {
  const playerService = new PlayerService();
  const { atom: player } = useService(
    playerService,
    playerAtoms,
    hasFetchedAtom,
    'get',
    'admin'
  );
  const {
    status: { gold },
  } = player;

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
