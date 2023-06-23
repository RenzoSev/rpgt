import TabTitle from '../components/tab-title';
import { scrollable } from '../styles/scrollable';
import Monsters from './monsters';

export default function DungeonTabContent() {
  return (
    <>
      <TabTitle title="Choose a monster" />

      <section className={scrollable('flex flex-col gap-5')}>
        <Monsters />
      </section>
    </>
  );
}
