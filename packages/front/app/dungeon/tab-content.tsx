export default function DungeonTabContent() {
  const renderMonsters = () => {};

  return (
    <>
      <h2 className="text-2xl font-black text-ctp-lavender tracking-wider">
        Choose a monster
      </h2>

      <section>
        <div className="bg-ctp-base ctp-macchiato border border-ctp-lavender rounded-lg shadow-lg flex justify-between px-2 py-1">
          <div className="flex flex-col">
            <p className="text-xl text-ctp-subtext1 font-bold">Spider</p>

            <div className="flex gap-4">
              <p className="text-lg text-ctp-red font-bold">5</p>
              <p className="text-lg text-ctp-green font-bold">10</p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-lg text-ctp-subtext0 font-bold">1</p>
          </div>
        </div>
      </section>
    </>
  );
}
