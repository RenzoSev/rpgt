import TabsMenu from './tabs';

export default function Home() {
  return (
    <section className="flex flex-col gap-6 h-full">
      <h1 className="text-center text-4xl font-black text-ctp-lavender">
        RPGT
      </h1>

      <TabsMenu />
    </section>
  );
}
