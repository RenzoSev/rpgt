'use client';

import { useRouter } from 'next/navigation';
import { Dialog } from './components/dialog';
import { FormAccount } from './form-account';

export function PlayButton() {
  const { push } = useRouter();

  const pushToTabs = () => {
    push('/tabs');
  };

  const handleSignUp = () => {
    pushToTabs();
  };
  const handleLogin = () => {
    pushToTabs();
  };

  return (
    <Dialog
      handleConfirmAction={handleSignUp}
      handleSecondConfirmAction={handleLogin}
      texts={{
        textShowDialog: 'PLAY',
        textTitleDialog: 'Account',
        textDescriptionDialog: 'Login or Sign up',
        textConfirmAction: 'Create account',
        secondTextConfirmAction: 'Login',
      }}
    >
      <FormAccount />
    </Dialog>
  );
}
