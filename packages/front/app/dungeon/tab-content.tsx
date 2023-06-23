import Monsters from './monsters';

export default function DungeonTabContent() {
  return (
    <>
      <h2 className="text-2xl font-black text-ctp-lavender tracking-wider">
        Choose a monster
      </h2>

      <section className="overflow-y-scroll h-[calc(100vh-15rem)] flex flex-col gap-5">
          <Monsters />
      </section>
    </>
  );
}
