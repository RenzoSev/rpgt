'use client';

import { items as itemsAtom } from '../../store/useItems';
import {
  Items as ItemsService,
  PowerItems,
  Status,
  TypeItems,
} from '../../services/Items';
import { useService } from '@/app/hooks/useService';
import { GiBroadsword, GiTemplarShield } from 'react-icons/gi';
import { IconType } from 'react-icons';
import { catppuccin } from '@/app/styles/colors';
import classNames from 'classnames';

export default function Items() {
  const itemsService = new ItemsService();
  const { atom: items } = useService(itemsService, itemsAtom);

  const weaponsIcons: Record<TypeItems, IconType> = {
    weapon: GiBroadsword,
    shield: GiTemplarShield,
  };

  const renderStatusByItemType = (status: Status) => {
    const statusPowerKey: PowerItems =
      status.type === 'shield' ? 'defense' : 'attack';
    const statusPower = status[statusPowerKey as keyof Status];
    const iconColorKey = status.type === 'shield' ? 'green' : 'red';
    const Icon = weaponsIcons[status.type];

    return (
      <div className="flex items-center gap-1">
        <p className="text-lg font-bold text-ctp-subtext0">{statusPower}</p>
        <Icon color={catppuccin.mocha[iconColorKey]} />
      </div>
    );
  };

  return (
    <>
      {items.map(({ id, name, status }) => (
        <div
          key={id}
          className="cursor-pointer bg-ctp-base ctp-macchiato border border-ctp-lavender rounded-lg shadow-lg flex justify-between p-3"
        >
          <div className="flex flex-col items-start">
            <p className="text-xl text-ctp-subtext1 font-bold capitalize">
              {name}
            </p>

            <div className="flex gap-4">
              {renderStatusByItemType(status)}

              <div className="flex items-center gap-1">
                <span
                  className={classNames('h-3 w-3 rounded-full', {
                    'bg-ctp-red': status.equipped,
                    'bg-ctp-green': !status.equipped,
                  })}
                ></span>
                <p className="text-lg font-bold text-ctp-subtext0">Equipped</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg text-ctp-subtext0 font-bold">
              {status.level}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
