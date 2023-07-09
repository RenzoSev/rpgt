import { TabContainer } from '@/app/components/tabs/tab-container';
import TabTitle from '@/app/components/tabs/tab-title';
import { ShopItems } from './shop-items';

export default function ArmorSmithTabContent() {
  return (
    <>
      <TabTitle title="Buy items" />

      <TabContainer>
        <ShopItems />
      </TabContainer>
    </>
  );
}
