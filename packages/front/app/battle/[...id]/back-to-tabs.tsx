import { usePages } from '@/app/hooks/usePages';
import { catppuccin } from '@/app/styles/colors';
import { headerIcon } from '@/app/styles/sizes';
import Link from 'next/link';
import { AiOutlineRollback } from 'react-icons/ai';

export default function BackToTabs() {
  const { tabsPage } = usePages();

  return (
    <div className="h-[24px] w-[24px]">
      <Link href={tabsPage} className="w-full h-full" prefetch={false}>
        <AiOutlineRollback
          className="cursor-pointer"
          color={catppuccin.mocha.mauve}
          size={headerIcon}
        />
      </Link>
    </div>
  );
}
