import { scrollable } from '@/app/styles/scrollable';
import TabTitle from '../../components/tabs/tab-title';
import Items from './items';
import { TabContainer } from '@/app/components/tabs/tab-container';

export default function InventoryTabContent() {
  return (
    <>
      <TabTitle title="Choose your items" />

      <TabContainer>
        <Items />
      </TabContainer>
    </>
  );
}
