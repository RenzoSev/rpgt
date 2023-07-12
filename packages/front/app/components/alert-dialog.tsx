import React from 'react';
import * as RadixAlertDialog from '@radix-ui/react-alert-dialog';

export interface IAlertDialogTexts {
  titleMessage: string | React.ReactNode;
  descriptionMessage: string | React.ReactNode;
  confirmActionMessage: string | React.ReactNode;
  cancelActionMessage: string;
}

export interface IAlertDialog {
  children: React.ReactNode;
  texts: IAlertDialogTexts;
}

export function AlertDialog({
  children,
  texts: {
    cancelActionMessage,
    confirmActionMessage: ConfirmActionMessage,
    descriptionMessage: DescriptionMessage,
    titleMessage,
  },
}: IAlertDialog) {
  return (
    <RadixAlertDialog.Root>
      <RadixAlertDialog.Trigger asChild>
        <button>{children}</button>
      </RadixAlertDialog.Trigger>

      <RadixAlertDialog.Portal>
        <RadixAlertDialog.Overlay className="backdrop-blur-sm data-[state=open]:animate-overlayShow fixed inset-0" />

        <RadixAlertDialog.Content className="border border-ctp-lavender data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-ctp-base p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <RadixAlertDialog.Title className="text-ctp-lavender m-0 text-[17px] font-medium capitalize">
            {titleMessage}
          </RadixAlertDialog.Title>

          <RadixAlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
            {DescriptionMessage}
          </RadixAlertDialog.Description>

          <div className="flex justify-end gap-[25px]">
            <RadixAlertDialog.Cancel asChild>
              <button className="text-ctp-crust bg-ctp-red hover:opacity-70 focus:shadow-ctp-lavender inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                {cancelActionMessage}
              </button>
            </RadixAlertDialog.Cancel>

            <RadixAlertDialog.Action asChild>
              <button className="text-ctp-crust bg-ctp-green hover:opacity-60 focus:shadow-ctp-lavender inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                {ConfirmActionMessage}
              </button>
            </RadixAlertDialog.Action>
          </div>
        </RadixAlertDialog.Content>
      </RadixAlertDialog.Portal>
    </RadixAlertDialog.Root>
  );
}
