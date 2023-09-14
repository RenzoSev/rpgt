import { IconType } from 'react-icons';
import { PowerItems, TypeItems } from '../../services/Items';
import { GiBroadsword, GiTemplarShield } from 'react-icons/gi';
import { catppuccin } from '../../styles/colors';

export interface ITabCardStatusItem {
  children?: React.ReactNode;
  status: {
    level: number;
    type: TypeItems;
    gold: number;
    attack?: number;
    defense?: number;
  };
}

export function TabCardStatusItem({ children, status }: ITabCardStatusItem) {
  const weaponsIcons: Record<TypeItems, IconType> = {
    weapon: GiBroadsword,
    shield: GiTemplarShield,
  };

  const statusPowerKey: PowerItems =
    status.type === 'shield' ? 'defense' : 'attack';
  const statusPower = status[statusPowerKey];
  const iconColorKey = status.type === 'shield' ? 'green' : 'red';
  const Icon = weaponsIcons[status.type];

  return (
    <span className="flex gap-4">
      <span className="flex items-center gap-1">
        <span className="text-lg font-bold text-ctp-subtext0">{statusPower}</span>
        <Icon color={catppuccin.mocha[iconColorKey]} />
      </span>

      {children}
    </span>
  );
}
