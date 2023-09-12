'use client';

import React from 'react';
import * as RadixAvatar from '@radix-ui/react-avatar';

interface IAvatar {
  src: string;
}

export function Avatar({ src }: IAvatar) {
  return (
    <RadixAvatar.Root className="bg-blackA3 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
      <RadixAvatar.Image
        className="h-8 w-8 rounded-[inherit] object-cover"
        src={src}
        alt="My player picture which redirect for my GitHub"
      />
      <RadixAvatar.Fallback
        className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
        delayMs={600}
      >
        Renzo Sevilha
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
}
