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
import { IPlayer, Player as PlayerService } from '@/app/services/Player';
import {
  player as playerAtom,
  hasFetched as hasFetchedPlayerAtom,
} from '@/app/store/usePlayer';
import { Winner } from '@/app/services/Battle';
import AlertDialogWin from './alert-dialog-win';
import AlertDialogLose from './alert-dialog-lose';

export default function Battle() {
  const monstersService = new MonstersService();
  const playerService = new PlayerService();
  const battleService = new BattleService();

  const params = useParams();
  const {
    atom: player,
    setAtom: setPlayer,
    hasFetched: hasFetchedPlayer,
  } = useService<IPlayer>(playerService, playerAtom, hasFetchedPlayerAtom);
  const playerAttack = player.inventory.attack.status.attack;
  const playerDefense = player.inventory.defense.status.defense;

  const { atom: monsters, hasFetched: hasFetchedMonsters } = useService<
    Monster[]
  >(monstersService, monstersAtom, hasFetchedMonstersAtom);
  const monster = monsters.find(({ id }) => id === Number(params.id));
  const monsterAttack = Number(monster?.status.attack);
  const monsterDefense = Number(monster?.status.defense);

  const [battleHasStarted, setBattleHasStarted] = useState(false);
  const [turnCount, setTurnCount] = useState(0);
  const [openDialogWin, setOpenDialogWin] = useState(false);
  const [openDialogLose, setOpenDialogLose] = useState(false);

  const endBattle = async (winner: Winner, monster: Monster) => {
    const { gold, level } = await battleService.sendBattleResult(
      winner,
      monster.id
    );

    setPlayer((player) => ({
      ...player,
      status: { ...player.status, gold, level },
    }));

    if (winner === 'player') {
      setOpenDialogWin(true);
      return;
    }

    setOpenDialogLose(true);
  };

  const resetBattle = () => {
    setBattleHasStarted(false);
    setTurnCount(0);
    setOpenDialogWin(false);
    setOpenDialogLose(false);
  };

  const playerHealth = playerDefense - monsterAttack * turnCount;
  const monsterHealth = monsterDefense - playerAttack * turnCount;

  useEffect(() => {
    if (!battleHasStarted) return;

    if (playerHealth <= 0) {
      endBattle('monster', monster as Monster);
      return;
    }

    if (monsterHealth <= 0) {
      endBattle('player', monster as Monster);
      return;
    }
  }, [monsterHealth, playerHealth, battleHasStarted]);

  if (!monster || !player.id || !hasFetchedPlayer || !hasFetchedMonsters) {
    return <h1>Loading</h1>;
  }

  const attackMonster = () => {
    if (!battleHasStarted) setBattleHasStarted(true);
    setTurnCount((previousTurnCount) => previousTurnCount + 1);
  };

  return (
    <section className="h-full">
      <AlertDialogWin
        open={openDialogWin}
        onOpenChange={setOpenDialogWin}
        monsters={monsters}
        currentlyMonsterId={monster.id}
      />
      <AlertDialogLose
        open={openDialogLose}
        onOpenChange={setOpenDialogLose}
        handlePlayAgain={resetBattle}
      />

      <header className={classNames(header)}>
        <BackToTabs />
      </header>

      <div
        className={classNames(
          containerContent,
          'min-h-[calc(100vh-5rem)]',
          'flex flex-col justify-between items-center',
          'pb-0 pt-0 pl-0 pr-0'
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
                statusBattlePower={player.inventory.defense.status.defense}
                statusBattleKey="defense"
              />

              <StatusPower
                statusBattlePower={player.inventory.attack.status.attack}
                statusBattleKey="attack"
                paragraphClassName="text-ctp-red"
              />
            </div>

            <HealthProgress
              progress={playerHealth}
              totalProgress={player.inventory.defense.status.defense}
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
