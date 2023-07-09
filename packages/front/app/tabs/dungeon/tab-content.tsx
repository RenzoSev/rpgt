import { TabContainer } from '@/app/components/tabs/tab-container';
import TabTitle from '../../components/tabs/tab-title';
import Monsters from './monsters';

export default function DungeonTabContent() {
  return (
    <>
      <TabTitle title="Choose a monster" />

      <TabContainer>
        <Monsters />
      </TabContainer>
    </>
  );
}
