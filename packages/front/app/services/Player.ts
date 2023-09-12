import { IItem, Shield, Weapon } from './Items';
import { Service } from './Service';

export interface IPlayerInventory {
  bought: string[];
  equipped: [string, string];
}

export interface IPlayerStatus {
  gold: number;
  level: number;
}

export interface IPlayer {
  id: string;
  name: string;
  class: string;
  inventory: IPlayerInventory;
  status: IPlayerStatus;
}

export const player: IPlayer = {
  id: 'ads:298209382902',
  name: 'alexstrasza',
  class: 'mage',
  status: {
    gold: 30000,
    level: 10,
  },
  inventory: {
    attack: {
      id: 2133123,
      name: 'stone sword',
      status: {
        type: 'weapon',
        equipped: true,
        attack: 2,
        level: 2,
        gold: 1,
        bought: true,
      },
    },
    defense: {
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
  },
};

export class Player implements Service {
  // TODO: SHOULD NOT BE GETALL. SHOULD BE GET.
  async getAll(): Promise<IPlayer> {
    console.log('Starting request for player');

    return player;
  }
}
