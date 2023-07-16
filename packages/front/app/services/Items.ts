import { Service } from './Service';

export type TypeItems = 'shield' | 'weapon';

export type PowerItems = 'attack' | 'defense';

export interface StatusItem {
  level: number;
  type: TypeItems;
  equipped: boolean;
  bought: boolean;
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

export interface Item {
  id: number;
  name: string;
  status: Status;
}

export const shields: Item[] = [
  {
    id: 1,
    name: 'wooden shield',
    status: {
      level: 1,
      type: 'shield',
      equipped: true,
      defense: 50,
      gold: 1,
      bought: true,
    },
  },
  {
    id: 15,
    name: 'silver shield',
    status: {
      level: 50,
      type: 'shield',
      equipped: false,
      defense: 500,
      gold: 1,
      bought: true,
    },
  },
];
export const weapons: Item[] = [
  {
    id: 2133123,
    name: 'stone sword',
    status: {
      type: 'weapon',
      equipped: true,
      attack: 75,
      level: 2,
      gold: 1,
      bought: true,
    },
  },
  {
    id: 43433443,
    name: 'diamond sword',
    status: {
      type: 'weapon',
      equipped: false,
      attack: 750,
      level: 75,
      gold: 1,
      bought: true,
    },
  },
];

export const shieldsShop: Item[] = [
  {
    id: 121211,
    name: 'broken shield',
    status: {
      level: 1,
      type: 'shield',
      equipped: false,
      defense: 50,
      gold: 1,
      bought: false,
    },
  },
  {
    id: 132434,
    name: 'lava shield',
    status: {
      level: 50,
      type: 'shield',
      equipped: false,
      defense: 500,
      gold: 1,
      bought: false,
    },
  },
];
export const weaponsShop: Item[] = [
  {
    id: 2,
    name: 'broken sword',
    status: {
      type: 'weapon',
      equipped: false,
      attack: 75,
      level: 2,
      gold: 1,
      bought: false,
    },
  },
  {
    id: 20,
    name: 'lava sword',
    status: {
      type: 'weapon',
      equipped: false,
      attack: 750,
      level: 75,
      gold: 1,
      bought: false,
    },
  },
];

export class Items implements Service {
  async getAll(): Promise<Item[]> {
    console.log('Starting request for items');

    return [...shields, ...weapons, ...shieldsShop, ...weaponsShop];
  }
}
