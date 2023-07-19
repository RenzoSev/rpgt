import {
  AlertDialog,
  IAlertDialogTexts,
  IRootProps,
} from '@/app/components/alert-dialog';

interface IAlertDialogWin {
  open: IRootProps['open'];
  onOpenChange: IRootProps['onOpenChange'];
}

export default function AlertDialogWin({
  open,
  onOpenChange,
}: IAlertDialogWin) {
  const texts: IAlertDialogTexts = {
    titleMessage: 'Triumphant Victory!',
    descriptionMessage:
      'Congratulations, brave adventurer! You fearlessly faced the dungeon monster and emerged victorious!',
    confirmActionMessage: 'Ready for the next battle?',
    cancelActionMessage: 'Return to the surface as an acclaimed hero',
  };

  return <AlertDialog rootProps={{ open, onOpenChange }} texts={texts} />;
}
