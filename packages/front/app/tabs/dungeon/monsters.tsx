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
import Link from 'next/link';
import { usePages } from '@/app/hooks/usePages';

export default function Monsters() {
  const monstersService = new MonstersService();
  const { atom: monsters } = useService<Monster[]>(
    monstersService,
    monstersAtom,
    hasFetchedAtom
  );
  const { getBattleMonsterPage } = usePages();

  return (
    <>
      {monsters.map(({ name, status: { attack, defense, level } }) => (
        <Link href={getBattleMonsterPage(name)} key={name}>
          <TabCard>
            <div className="flex flex-col items-start">
              <TabCardName name={name} />

              <div className="flex gap-4">
                <div className="flex items-center gap-1">
                  <p className="text-lg font-bold text-ctp-subtext0">
                    {attack}
                  </p>
                  <GiBroadsword color={catppuccin.mocha.red} />
                </div>

                <div className="flex items-center gap-1">
                  <p className="text-lg font-bold text-ctp-subtext0">
                    {defense}
                  </p>
                  <GiTemplarShield color={catppuccin.mocha.green} />
                </div>
              </div>
            </div>

            <TabCardLevel level={level} />
          </TabCard>
        </Link>
      ))}
    </>
  );
}
