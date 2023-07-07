'use client';

import { GiBroadsword, GiTemplarShield } from 'react-icons/gi';
import { monsters as monstersAtom } from '../../store/useMonsters';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { Monsters as MonstersService } from '../../services/Monsters';
import { catppuccin } from '../../styles/colors';

export default function Monsters() {
  const [monsters, setMonsters] = useAtom(monstersAtom);

  useEffect(() => {
    if (monsters.length) return;

    const fetchMonsters = async () => {
      const monstersService = new MonstersService();
      const monstersData = await monstersService.getMonsters();

      setMonsters(monstersData);
    };

    fetchMonsters();
  }, [monsters.length, setMonsters]);

  return (
    <>
      {monsters.map(({ id, name, status: { attack, health, level } }) => (
        <div
          key={id}
          className="cursor-pointer bg-ctp-base ctp-macchiato border border-ctp-lavender rounded-lg shadow-lg flex justify-between p-3"
        >
          <div className="flex flex-col items-start">
            <p className="text-xl text-ctp-subtext1 font-bold capitalize">
              {name}
            </p>

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

          <div className="flex flex-col justify-center">
            <p className="text-lg text-ctp-subtext0 font-bold">{level}</p>
          </div>
        </div>
      ))}
    </>
  );
}
