import { Service } from './Service';

export type TypeItems = 'shield' | 'weapon';

export type PowerItems = 'attack' | 'defense';

export interface StatusItem {
  level: number;
  type: TypeItems;
  gold: number;
}

export interface Shield extends StatusItem {
  defense: number;
  type: 'shield';
}

export interface Weapon extends StatusItem {
  attack: number;
  type: 'weapon';
}

export type Status = Weapon | Shield;

export interface IItem {
  id: number;
  name: string;
  status: Status;
}

const changeEquippedItem = (item: IItem): IItem => ({
  ...item,
  status: { ...item.status, equipped: !item.status.equipped },
});

export const shields: IItem[] = [
  {
    id: 1,
    name: 'wooden shield',
    status: {
      level: 1,
      type: 'shield',
      defense: 50,
      gold: 1,
    },
  },
  {
    id: 15,
    name: 'silver shield',
    status: {
      level: 50,
      type: 'shield',
      defense: 500,
      gold: 1,
    },
  },
];
export const weapons: IItem[] = [
  {
    id: 2133123,
    name: 'stone sword',
    status: {
      type: 'weapon',
      attack: 75,
      level: 2,
      gold: 1,
    },
  },
  {
    id: 43433443,
    name: 'diamond sword',
    status: {
      type: 'weapon',
      attack: 750,
      level: 75,
      gold: 1,
    },
  },
];

export const changedEquippedShields: IItem[] = shields.map(changeEquippedItem);
export const changedEquippedWeapons: IItem[] = weapons.map(changeEquippedItem);

export const shieldsShop: IItem[] = [
  {
    id: 121211,
    name: 'broken shield',
    status: {
      level: 1,
      type: 'shield',
      defense: 50,
      gold: 1,
    },
  },
  {
    id: 132434,
    name: 'lava shield',
    status: {
      level: 50,
      type: 'shield',
      defense: 500,
      gold: 1,
    },
  },
];
export const weaponsShop: IItem[] = [
  {
    id: 2,
    name: 'broken sword',
    status: {
      type: 'weapon',
      attack: 75,
      level: 2,
      gold: 1,
    },
  },
  {
    id: 20,
    name: 'lava sword',
    status: {
      type: 'weapon',
      attack: 750,
      level: 75,
      gold: 1,
    },
  },
];

export class Items implements Service {
  async getAll(): Promise<IItem[]> {
    console.log('Starting request for items');

    return [...shields, ...weapons, ...shieldsShop, ...weaponsShop];
  }

  async equipItem(id: number, type: IItem['status']['type']): Promise<IItem[]> {
    console.log('Starting request for equip items');

    return [
      ...changedEquippedShields,
      ...changedEquippedWeapons,
      ...shieldsShop,
      ...weaponsShop,
    ];
  }
}
