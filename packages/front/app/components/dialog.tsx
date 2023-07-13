'use client';

import React from 'react';
import * as RadixDialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

interface IDialogTexts {
  textShowDialog: string;
  textTitleDialog: string;
  textDescriptionDialog: string;
  textConfirmAction: string;
  secondTextConfirmAction: string;
}

interface IDialog {
  texts: IDialogTexts;
  children: React.ReactNode;
}

export function Dialog({
  children,
  texts: {
    textShowDialog,
    textTitleDialog,
    textDescriptionDialog,
    textConfirmAction,
    secondTextConfirmAction,
  },
}: IDialog) {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>
        <button className="text-ctp-crust bg-ctp-green hover:opacity-60 focus:shadow-ctp-lavender inline-flex h-14 items-center justify-center rounded-[4px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
          {textShowDialog}
        </button>
      </RadixDialog.Trigger>

      <RadixDialog.Portal>
        <RadixDialog.Overlay className="backdrop-blur-sm bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />

        <RadixDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-ctp-crust border border-ctp-lavender p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <RadixDialog.Title className="text-ctp-subtext1 m-0 text-[17px] font-medium">
            {textTitleDialog}
          </RadixDialog.Title>

          <RadixDialog.Description className="text-ctp-subtext0 mt-[10px] mb-5 text-[15px] leading-normal">
            {textDescriptionDialog}
          </RadixDialog.Description>

          {children}

          <div className="mt-[25px] flex gap-4 justify-end">
            <RadixDialog.Close asChild>
              <button className="bg-ctp-green text-ctp-crust hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                {textConfirmAction}
              </button>
            </RadixDialog.Close>

            <RadixDialog.Close asChild>
              <button className="bg-ctp-green text-ctp-crust hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                {secondTextConfirmAction}
              </button>
            </RadixDialog.Close>
          </div>

          <RadixDialog.Close asChild>
            <button
              className="text-ctp-lavender hover:bg-ctp-lavender focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </RadixDialog.Close>
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
