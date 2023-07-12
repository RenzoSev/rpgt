import { Avatar } from './components/avatar';
import { AVATAR_PICTURE } from './utils/constants';

export default function Home() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col justify-between min-h-[calc(100vh-2rem)]">
        <h1 className="text-center text-4xl font-black text-ctp-lavender">
          RPGT
        </h1>

        <button className="text-ctp-crust bg-ctp-green hover:opacity-60 focus:shadow-ctp-lavender inline-flex h-14 items-center justify-center rounded-[4px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
          PLAY
        </button>

        <div className="flex justify-center">
          <p className="text-ctp-lavender text-lg font-bold">
            created by{' '}
            <a href="https://github.com/RenzoSev" target="_blank">
              <Avatar src={AVATAR_PICTURE} />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
