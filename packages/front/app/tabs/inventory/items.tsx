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
import { TabCardName } from '@/app/components/tabs/tab-card-name';
import { TabCardLevel } from '@/app/components/tabs/tab-card-level';
import { TabCardStatusItem } from '@/app/components/tabs/tab-card-status-item';

export default function Items() {
  const itemsService = new ItemsService();
  const { atom: items } = useService(itemsService, itemsAtom);

  return (
    <>
      {items.map(({ id, name, status }) => (
        <div
          key={id}
          className="cursor-pointer bg-ctp-base ctp-macchiato border border-ctp-lavender rounded-lg shadow-lg flex justify-between p-3"
        >
          <div className="flex flex-col items-start">
            <TabCardName name={name} />

            <TabCardStatusItem status={status}>
              <div className="flex items-center gap-1">
                <span
                  className={classNames('h-3 w-3 rounded-full', {
                    'bg-ctp-red': status.equipped,
                    'bg-ctp-green': !status.equipped,
                  })}
                ></span>
                <p className="text-lg font-bold text-ctp-subtext0">Equipped</p>
              </div>
            </TabCardStatusItem>
          </div>

          <TabCardLevel level={status.level} />
        </div>
      ))}
    </>
  );
}
