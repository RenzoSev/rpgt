import { IconType } from 'react-icons';
import { GiBroadsword, GiTemplarShield } from 'react-icons/gi';
import { catppuccin } from '@/app/styles/colors';
import classNames from 'classnames';
import { SiExpertsexchange } from 'react-icons/si';

type Status = 'attack' | 'defense' | 'xp';

export interface IStatusPower {
  statusBattlePower: number;
  statusBattleKey: Status;
  size?: 'small' | 'large';
  containerClassName?: string;
  paragraphClassName?: string;
  dark?: boolean;
}

export function StatusPower({
  statusBattlePower,
  statusBattleKey,
  containerClassName = '',
  paragraphClassName = '',
  size = 'large',
  dark = false,
}: IStatusPower) {
  const StatusPowerIcons: Record<Status, IconType> = {
    attack: GiBroadsword,
    defense: GiTemplarShield,
    xp: SiExpertsexchange,
  };

  const iconColors: Record<Status, 'red' | 'green' | 'mauve'> = {
    attack: 'red',
    defense: 'green',
    xp: 'mauve',
  };
  const iconColorKey = iconColors[statusBattleKey];
  const Icon = StatusPowerIcons[statusBattleKey];

  return (
    <div
      className={classNames('flex items-center gap-1', {
        [containerClassName]: containerClassName,
      })}
    >
      <p
        className={classNames('font-bold', {
          'text-ctp-crust': dark,
          'text-ctp-subtext0': !dark,
          'text-lg': size === 'large',
          'text-sm': size === 'small',
          [paragraphClassName]: paragraphClassName,
        })}
      >
        {statusBattlePower}
      </p>
      <Icon color={catppuccin.mocha[iconColorKey]} />
    </div>
  );
}
