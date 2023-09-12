import { TabContainer } from '@/app/components/tabs/tab-container';
import { ShopItems } from './shop-items';
import { PlayerInfo } from './player-info';

export default function ArmorSmithTabContent() {
  return (
    <>
      <PlayerInfo />

      <TabContainer>
        <ShopItems />
      </TabContainer>
    </>
  );
}
