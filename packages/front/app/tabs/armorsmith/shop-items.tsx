'use client';

import { TabCard } from '@/app/components/tabs/tab-card';
import { TabCardLevel } from '@/app/components/tabs/tab-card-level';
import { TabCardName } from '@/app/components/tabs/tab-card-name';
import {
  ITabCardStatusItem,
  TabCardStatusItem,
} from '@/app/components/tabs/tab-card-status-item';
import { useService } from '@/app/hooks/useService';
import { ShopItems as ShopItemsService } from '@/app/services/ShopItems';
import { IItem } from '@/app/services/Items';
import {
  items as itemsAtom,
  hasFetched as hasFetchedAtom,
} from '@/app/store/useItems';
import {
  AlertDialog,
  AlertDialogTextsProps,
} from '@/app/components/alert-dialog';
import { TabGold } from '@/app/components/tabs/tab-gold';
import { player as playerAtom } from '@/app/store/usePlayer';
import { useAtom } from 'jotai';
import { playerHasBoughtItem } from '@/app/utils/analyzer';

export function ShopItems() {
  const shopItemsService = new ShopItemsService();
  const { atom: items, setAtom: setItems } = useService(
    shopItemsService,
    itemsAtom,
    hasFetchedAtom
  );
  const [player, setPlayer] = useAtom(playerAtom);

  const getTexts = (
    itemName: string,
    status: ITabCardStatusItem['status']
  ): AlertDialogTextsProps => ({
    cancelActionMessage: 'Cancel',
    confirmActionMessage: (
      <span className="flex gap-1 items-center">
        Buy
        <TabGold gold={status.gold} textColor="dark" />
      </span>
    ),
    titleMessage: itemName,
    descriptionMessage: (
      <span className="flex gap-4">
        <TabCardStatusItem status={status} />
        <TabCardLevel level={status.level} />
      </span>
    ),
  });

  const handleBuyItem = async (item: IItem) => {
    const data = await shopItemsService.buyItem(player, item);
    setPlayer(data.player);
    setItems(data.items);
  };

  return (
    <>
      {items.map(
        ({ id, name, status }) =>
          !playerHasBoughtItem(name, player.inventory.bought) && (
            <AlertDialog
              key={id}
              texts={getTexts(name, status)}
              handleConfirmAction={() => handleBuyItem({ id, name, status })}
            >
              <TabCard>
                <div className="flex flex-col items-start">
                  <TabCardName name={name} />

                  <TabCardStatusItem status={status}>
                    <TabGold gold={status.gold} />
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
