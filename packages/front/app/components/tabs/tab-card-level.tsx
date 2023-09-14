import { catppuccin } from '@/app/styles/colors';
import { SiExpertsexchange } from 'react-icons/si';

export function TabCardLevel({ level }: { level: number }) {
  return (
    <span className="flex gap-1 items-center">
      <span className="text-lg text-ctp-subtext0 font-bold">{level}</span>

      <SiExpertsexchange color={catppuccin.mocha.mauve} />
    </span>
  );
}
