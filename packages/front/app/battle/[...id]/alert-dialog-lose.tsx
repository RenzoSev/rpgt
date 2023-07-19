import {
  AlertDialog,
  IAlertDialogTexts,
  IRootProps,
} from '@/app/components/alert-dialog';

interface IAlertDialogLose {
  open: IRootProps['open'];
  onOpenChange: IRootProps['onOpenChange'];
}

export default function AlertDialogLose({
  open,
  onOpenChange,
}: IAlertDialogLose) {
  const texts: IAlertDialogTexts = {
    titleMessage: 'Challenging Defeat...',
    descriptionMessage:
      'The battle was tough, and you were overcome. But remember, each defeat paves the way for an even more glorious victory!',
    confirmActionMessage: 'Success awaits your persistence!',
    cancelActionMessage:
      'Return to the surface, recover, and continue your journey!',
  };

  return <AlertDialog rootProps={{ open, onOpenChange }} texts={texts} />;
}
