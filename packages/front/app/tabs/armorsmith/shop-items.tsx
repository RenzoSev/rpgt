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
import { Item } from '@/app/services/Items';
import { shopItems as shopItemsAtom } from '@/app/store/useShopItems';
import { catppuccin } from '@/app/styles/colors';
import { GiTwoCoins } from 'react-icons/gi';
import { AlertDialog, IAlertDialogTexts } from '@/app/components/alert-dialog';
import { TabGold } from '@/app/components/tabs/tab-gold';

export function ShopItems() {
  const shopItemsService = new ShopItemsService();
  const { atom: shopItems } = useService<Item[]>(
    shopItemsService,
    shopItemsAtom
  );

  const getTexts = (
    itemName: string,
    status: ITabCardStatusItem['status']
  ): IAlertDialogTexts => ({
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

  return (
    <>
      {shopItems.map(({ id, name, status }) => (
        <AlertDialog key={id} texts={getTexts(name, status)}>
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
      ))}
    </>
  );
}
