import { TabContainer } from '@/app/components/tabs/tab-container';
import { ShopItems } from './shop-items';
import { ProfileInfo } from './profile-info';

export default function ArmorSmithTabContent() {
  return (
    <>
      <ProfileInfo />

      <TabContainer>
        <ShopItems />
      </TabContainer>
    </>
  );
}
