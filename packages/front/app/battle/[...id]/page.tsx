'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useService } from '../../hooks/useService';
import { Monster, Monsters as MonstersService } from '@/app/services/Monsters';
import { Battle as BattleService } from '@/app/services/Battle';
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
import { Winner } from '@/app/services/Battle';

export default function Battle() {
  const monstersService = new MonstersService();
  const profileService = new ProfileService();
  const battleService = new BattleService();

  const params = useParams();
  const { atom: profile, setAtom: setProfile } = useService<IProfile>(
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

  useEffect(() => {
    if (playerHealth <= 0) {
      endBattle('player');
      return;
    }

    if (monsterHealth <= 0) {
      endBattle('monster');
      return;
    }
  }, [monsterHealth, playerHealth]);

  if (!monster) {
    return <h1>Monster not found</h1>;
  }

  const endBattle = async (winner: Winner) => {
    const { gold, level } = await battleService.sendBattleResult(
      winner,
      monster.id
    );

    setProfile((profile) => ({
      ...profile,
      status: { ...profile.status, gold, level },
    }));
    // anunciar, por meio do toast/ alert dialog, o resultado da batalha
    // redirecionar para a tela de dungeon ou para o próximo monstro
  };

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
          'flex flex-col justify-between items-center',
          'p-0'
        )}
      >
        <div className="pt-4 flex flex-col gap-4">
          <h1 className="text-4xl font-bold capitalize text-ctp-subtext1 tracking-wide">
            {monster.name}
          </h1>

          <div className="flex flex-col gap-2">
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
        </div>

        <div className="flex flex-col w-full items-center gap-5">
          <div className="flex flex-col items-center gap-2 w-full px-4">
            <div className="flex gap-3">
              <StatusPower
                statusBattlePower={profile.inventory.defense.status.defense}
                statusBattleKey="defense"
              />

              <StatusPower
                statusBattlePower={profile.inventory.attack.status.attack}
                statusBattleKey="attack"
                paragraphClassName="text-ctp-red"
              />
            </div>

            <HealthProgress
              progress={playerHealth}
              totalProgress={profile.inventory.defense.status.defense}
              containerClassName="w-[300px] h-[20px]"
            />
          </div>

          <button
            onClick={attackMonster}
            className={classNames(
              'flex items-end justify-around',
              'w-full px-2 py-8',
              'bg-ctp-red shadow-md rounded-b',
              'active:bg-ctp-mauve transition-transform duration-200 transform-gpu active:scale-95',
              'text-ctp-crust text-2xl font-bold'
            )}
          >
            Attack
          </button>
        </div>
      </div>
    </section>
  );
}
