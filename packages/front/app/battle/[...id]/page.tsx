'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useService } from '../../hooks/useService';
import { Monster, Monsters as MonstersService } from '../../services/Monsters';
import {
  monsters as monstersAtom,
  hasFetched as hasFetchedMonstersAtom,
} from '../../store/useMonsters';
import classNames from 'classnames';
import { containerContent, header } from '@/app/styles/classes';
import BackToTabs from './back-to-tabs';
import HealthProgress from '@/app/components/health-progress';
import { StatusPower } from '@/app/components/status-power';
import { IProfile, Profile as ProfileService } from '@/app/services/Profile';
import {
  profile as profileAtom,
  hasFetched as hasFetchedProfileAtom,
} from '@/app/store/useProfile';

export default function Battle() {
  const monstersService = new MonstersService();
  const profileService = new ProfileService();

  const params = useParams();
  const { atom: profile } = useService<IProfile>(
    profileService,
    profileAtom,
    hasFetchedProfileAtom
  );
  const { atom: monsters } = useService<Monster[]>(
    monstersService,
    monstersAtom,
    hasFetchedMonstersAtom
  );

  const monster = monsters.find(({ id }) => id === Number(params.id));
  const [monsterHealth, setMonsterHealth] = useState(
    monster?.status.defense ?? 0
  );
  const [playerHealth, setPlayerHealth] = useState(
    profile.inventory.defense.status.defense ?? 0
  );

  useEffect(() => {
    setMonsterHealth(monster?.status.defense ?? 0);
  }, [monster]);

  useEffect(() => {
    setPlayerHealth(profile.inventory.defense.status.defense);
  }, [profile]);

  if (!monster) {
    return <h1>Monster not found</h1>;
  }

  const attackMonster = () => {
    const attackPlayer = profile.inventory.attack.status.attack;
    const attackMonster = monster.status.attack;

    setMonsterHealth((prevMonsterHealth) => prevMonsterHealth - attackPlayer);
    setPlayerHealth((prevPlayerHealth) => prevPlayerHealth - attackMonster);
  };

  return (
    <section className="h-full">
      <header className={classNames(header)}>
        <BackToTabs />
      </header>

      <div
        className={classNames(
          containerContent,
          'min-h-[calc(100vh-5rem)]',
          'flex flex-col justify-around items-center'
        )}
      >
        <h1 className="text-4xl font-bold capitalize text-ctp-subtext1 tracking-wide">
          {monster.name}
        </h1>

        <div className="flex flex-col gap-4">
          <div className="flex gap-6 justify-center">
            <StatusPower
              statusBattlePower={monster.status.attack}
              statusBattleKey="attack"
            />
            <StatusPower
              statusBattlePower={monster.status.defense}
              statusBattleKey="defense"
            />
            <StatusPower
              statusBattlePower={monster.status.level}
              statusBattleKey="xp"
            />
          </div>

          <HealthProgress
            progress={monsterHealth}
            totalProgress={monster.status.defense}
          />
        </div>

        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col items-center gap-0.5">
            <StatusPower
              statusBattlePower={profile.inventory.defense.status.defense}
              statusBattleKey="defense"
            />

            <HealthProgress
              progress={playerHealth}
              totalProgress={profile.inventory.defense.status.defense}
              size="small"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={attackMonster}
              className="flex items-end justify-around w-40 bg-ctp-lavender active:bg-ctp-mauve text-ctp-crust text-2xl font-bold px-2 py-4 rounded shadow-md transition-transform duration-200 transform-gpu active:scale-95"
            >
              Attack
              <StatusPower
                statusBattlePower={profile.inventory.attack.status.attack}
                statusBattleKey="attack"
                paragraphClassName="text-ctp-red"
                containerClassName="items-stretch"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
