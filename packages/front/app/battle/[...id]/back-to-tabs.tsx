import { catppuccin } from '@/app/styles/colors';
import { headerIcon } from '@/app/styles/sizes';
import Link from 'next/link';
import { AiOutlineRollback } from 'react-icons/ai';

export default function BackToTabs() {
  return (
    <div className="h-[24px] w-[24px]">
      <Link href={'/tabs'} className="w-full h-full">
        <AiOutlineRollback
          className="cursor-pointer"
          color={catppuccin.mocha.mauve}
          size={headerIcon}
        />
      </Link>
    </div>
  );
}
