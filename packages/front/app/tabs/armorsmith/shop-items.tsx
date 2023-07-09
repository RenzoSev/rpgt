'use client';

import { TabCard } from '@/app/components/tabs/tab-card';
import { TabCardLevel } from '@/app/components/tabs/tab-card-level';
import { TabCardName } from '@/app/components/tabs/tab-card-name';
import { TabCardStatusItem } from '@/app/components/tabs/tab-card-status-item';
import { useService } from '@/app/hooks/useService';
import { ShopItems as ShopItemsService } from '@/app/services/ShopItems';
import { Item } from '@/app/services/Items';
import { shopItems as shopItemsAtom } from '@/app/store/useShopItems';
import { catppuccin } from '@/app/styles/colors';
import { GiTwoCoins } from 'react-icons/gi';

export function ShopItems() {
  const shopItemsService = new ShopItemsService();
  const { atom: shopItems } = useService<Item>(shopItemsService, shopItemsAtom);

  return (
    <>
      {shopItems.map(({ id, name, status }) => (
        <TabCard key={id}>
          <div className="flex flex-col items-start">
            <TabCardName name={name} />

            <TabCardStatusItem status={status}>
              <div className="flex items-center gap-1">
                <GiTwoCoins color={catppuccin.mocha.yellow} />
                <p className="text-lg font-bold text-ctp-subtext0">
                  {status.gold}
                </p>
              </div>
            </TabCardStatusItem>
          </div>

          <TabCardLevel level={status.level} />
        </TabCard>
      ))}
    </>
  );
}
