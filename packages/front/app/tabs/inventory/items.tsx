'use client';

import {
  items as itemsAtom,
  hasFetched as hasFetchedAtom,
} from '../../store/useItems';
import { IItem, Items as ItemsService } from '../../services/Items';
import { useService } from '@/app/hooks/useService';
import classNames from 'classnames';
import { player as playerAtom } from '@/app/store/usePlayer';
import { TabCardName } from '@/app/components/tabs/tab-card-name';
import { TabCardLevel } from '@/app/components/tabs/tab-card-level';
import {
  ITabCardStatusItem,
  TabCardStatusItem,
} from '@/app/components/tabs/tab-card-status-item';
import { TabCard } from '@/app/components/tabs/tab-card';
import {
  AlertDialog,
  AlertDialogTextsProps,
} from '@/app/components/alert-dialog';
import { useAtom } from 'jotai';
import {
  playerHasBoughtItem,
  playerHasEquippedItem,
} from '@/app/utils/analyzer';
import { IPlayer } from '@/app/services/Player';

export default function Items() {
  const itemsService = new ItemsService();
  const { atom: items } = useService(itemsService, itemsAtom, hasFetchedAtom);
  const [player] = useAtom(playerAtom);

  const getTexts = (
    itemName: string,
    status: ITabCardStatusItem['status']
  ): AlertDialogTextsProps => ({
    cancelActionMessage: 'Cancel',
    confirmActionMessage: 'Equip',
    titleMessage: itemName,
    descriptionMessage: (
      <span className="flex gap-4">
        <TabCardStatusItem status={status} />
        <TabCardLevel level={status.level} />
      </span>
    ),
  });

  const handleEquipItem = async (
    itemName: IItem['name'],
    playerName: IPlayer['name']
  ) => {
    await itemsService.equipItem(itemName, playerName);
  };

  return (
    <>
      {items.map(
        ({ id, name, status }) =>
          playerHasBoughtItem(name, player.inventory.bought) && (
            <AlertDialog
              key={id}
              texts={getTexts(name, status)}
              handleConfirmAction={() => handleEquipItem(name, player.name)}
            >
              <TabCard>
                <div className="flex flex-col items-start">
                  <TabCardName name={name} />

                  <TabCardStatusItem status={status}>
                    <div className="flex items-center gap-1">
                      <span
                        className={classNames('h-3 w-3 rounded-full', {
                          'bg-ctp-red': playerHasEquippedItem(
                            name,
                            player.inventory.equipped
                          ),
                          'bg-ctp-green': !playerHasEquippedItem(
                            name,
                            player.inventory.equipped
                          ),
                        })}
                      ></span>
                      <p className="text-lg font-bold text-ctp-subtext0">
                        Equipped
                      </p>
                    </div>
                  </TabCardStatusItem>
                </div>

                <TabCardLevel level={status.level} />
              </TabCard>
            </AlertDialog>
          )
      )}
    </>
  );
}
