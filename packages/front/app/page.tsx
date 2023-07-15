import { Avatar } from './components/avatar';
import { PlayButton } from './play-button';
import { AVATAR_PICTURE } from './utils/constants';

export default function Home() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col justify-between min-h-[calc(100vh-2rem)]">
        <h1 className="text-center text-4xl font-black text-ctp-lavender">
          RPGT
        </h1>

        <PlayButton />

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
