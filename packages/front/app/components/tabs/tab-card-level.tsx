import { catppuccin } from '@/app/styles/colors';
import { SiExpertsexchange } from 'react-icons/si';

export function TabCardLevel({ level }: { level: number }) {
  return (
    <div className="flex gap-1 items-center">
      <p className="text-lg text-ctp-subtext0 font-bold">{level}</p>

      <SiExpertsexchange color={catppuccin.mocha.mauve} />
    </div>
  );
}
