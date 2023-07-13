import { Avatar } from './components/avatar';
import { Dialog } from './components/dialog';
import { AVATAR_PICTURE } from './utils/constants';

export default function Home() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col justify-between min-h-[calc(100vh-2rem)]">
        <h1 className="text-center text-4xl font-black text-ctp-lavender">
          RPGT
        </h1>

        <Dialog
          texts={{
            textShowDialog: 'PLAY',
            textTitleDialog: 'Account',
            textDescriptionDialog: 'Login or Sign up',
            textConfirmAction: 'Create account',
            secondTextConfirmAction: 'Login',
          }}
        >
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-ctp-mauve w-[90px] text-right text-[15px]"
              htmlFor="name"
            >
              Name
            </label>

            <input
              className="text-ctp-crust shadow-ctp-lavender focus:shadow-ctp-lavender inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="name"
              defaultValue="Leeroy Jenkins"
            />
          </fieldset>

          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-ctp-lavender w-[90px] text-right text-[15px]"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="text-ctp-lavender shadow-ctp-lavender focus:shadow-ctp-lavender inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="password"
              defaultValue="@ljenkins"
            />
          </fieldset>
        </Dialog>

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
