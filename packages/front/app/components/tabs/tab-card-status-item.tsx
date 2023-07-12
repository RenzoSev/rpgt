import { IconType } from 'react-icons';
import { PowerItems, Status, TypeItems } from '../../services/Items';
import { GiBroadsword, GiTemplarShield } from 'react-icons/gi';
import { catppuccin } from '../../styles/colors';

export interface ITabCardStatusItem {
  children?: React.ReactNode;
  status: Status;
}

export function TabCardStatusItem({ children, status }: ITabCardStatusItem) {
  const weaponsIcons: Record<TypeItems, IconType> = {
    weapon: GiBroadsword,
    shield: GiTemplarShield,
  };

  const statusPowerKey: PowerItems =
    status.type === 'shield' ? 'defense' : 'attack';
  const statusPower = status[statusPowerKey as keyof Status];
  const iconColorKey = status.type === 'shield' ? 'green' : 'red';
  const Icon = weaponsIcons[status.type];

  return (
    <div className="flex gap-4">
      <div className="flex items-center gap-1">
        <p className="text-lg font-bold text-ctp-subtext0">{statusPower}</p>
        <Icon color={catppuccin.mocha[iconColorKey]} />
      </div>

      {children}
    </div>
  );
}
