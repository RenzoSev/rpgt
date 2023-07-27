'use client';

import { Dialog } from './components/dialog';
import { FormAccount } from './form-account';
import { usePages } from './hooks/usePages';

export function PlayButton() {
  const { pushToTabs } = usePages();

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
