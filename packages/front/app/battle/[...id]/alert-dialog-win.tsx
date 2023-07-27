import {
  AlertDialog,
  AlertDialogTextsProps,
  RootProps,
} from '@/app/components/alert-dialog';
import { usePages } from '@/app/hooks/usePages';
import { Monsters as MonstersService, Monster } from '@/app/services/Monsters';

interface IAlertDialogWin {
  open: RootProps['open'];
  onOpenChange: RootProps['onOpenChange'];
  monsters: Monster[];
  currentlyMonsterId: number;
}

export default function AlertDialogWin({
  open,
  onOpenChange,
  monsters,
  currentlyMonsterId,
}: IAlertDialogWin) {
  const { pushToTabs, pushToBattle } = usePages();

  const texts: AlertDialogTextsProps = {
    titleMessage: 'Triumphant Victory!',
    descriptionMessage:
      'Congratulations, brave adventurer! You fearlessly faced the dungeon monster and emerged victorious!',
    confirmActionMessage: 'Ready for the next battle?',
    cancelActionMessage: 'Return to the surface as an acclaimed hero',
  };

  const handleNextBattle = () => {
    const { id } = MonstersService.getNextMonsterByASC(
      currentlyMonsterId,
      monsters
    );

    pushToBattle(id);
  };
  const handleReturnToTabs = () => pushToTabs();

  return (
    <AlertDialog
      rootProps={{ open, onOpenChange }}
      texts={texts}
      handleConfirmAction={handleNextBattle}
      handleCancelAction={handleReturnToTabs}
      size="responsiveWidth"
    />
  );
}
