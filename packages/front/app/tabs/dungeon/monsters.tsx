'use client';

import { GiBroadsword, GiTemplarShield } from 'react-icons/gi';
import {
  monsters as monstersAtom,
  hasFetched as hasFetchedAtom,
} from '../../store/useMonsters';
import { Monster, Monsters as MonstersService } from '../../services/Monsters';
import { catppuccin } from '../../styles/colors';
import { useService } from '@/app/hooks/useService';
import { TabCard } from '@/app/components/tabs/tab-card';
import { TabCardLevel } from '@/app/components/tabs/tab-card-level';
import { TabCardName } from '@/app/components/tabs/tab-card-name';

export default function Monsters() {
  const monstersService = new MonstersService();
  const { atom: monsters } = useService<Monster[]>(
    monstersService,
    monstersAtom,
    hasFetchedAtom
  );

  return (
    <>
      {monsters.map(({ id, name, status: { attack, health, level } }) => (
        <TabCard key={id}>
          <div className="flex flex-col items-start">
            <TabCardName name={name} />

            <div className="flex gap-4">
              <div className="flex items-center gap-1">
                <p className="text-lg font-bold text-ctp-subtext0">{attack}</p>
                <GiBroadsword color={catppuccin.mocha.red} />
              </div>

              <div className="flex items-center gap-1">
                <p className="text-lg font-bold text-ctp-subtext0">{health}</p>
                <GiTemplarShield color={catppuccin.mocha.green} />
              </div>
            </div>
          </div>

          <TabCardLevel level={level} />
        </TabCard>
      ))}
    </>
  );
}
