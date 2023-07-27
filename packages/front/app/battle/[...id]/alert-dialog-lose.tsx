import {
  AlertDialog,
  AlertDialogTextsProps,
  RootProps,
} from '@/app/components/alert-dialog';
import { usePages } from '@/app/hooks/usePages';

interface IAlertDialogLose {
  open: RootProps['open'];
  onOpenChange: RootProps['onOpenChange'];
  handlePlayAgain: () => void;
}

export default function AlertDialogLose({
  open,
  onOpenChange,
  handlePlayAgain,
}: IAlertDialogLose) {
  const { pushToTabs } = usePages();

  const texts: AlertDialogTextsProps = {
    titleMessage: 'Challenging Defeat...',
    descriptionMessage:
      'The battle was tough, and you were overcome. But remember, each defeat paves the way for an even more glorious victory!',
    confirmActionMessage: 'Success awaits your persistence!',
    cancelActionMessage:
      'Return to the surface, recover, and continue your journey!',
  };

  const handleReturnToTabs = () => pushToTabs();

  return (
    <AlertDialog
      rootProps={{ open, onOpenChange }}
      texts={texts}
      handleConfirmAction={handlePlayAgain}
      handleCancelAction={handleReturnToTabs}
      size="responsiveWidth"
    />
  );
}
