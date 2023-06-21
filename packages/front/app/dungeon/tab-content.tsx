import Monsters from './monsters';

export default function DungeonTabContent() {
  return (
    <>
      <h2 className="text-2xl font-black text-ctp-lavender tracking-wider">
        Choose a monster
      </h2>

      <section>
        <Monsters />
      </section>
    </>
  );
}
