import { Item, Shield, Weapon } from "./Items";
import { Service } from "./Service";

export interface IPlayerInventory {
  bought: number[];
  equipped: [number, number];
}

export interface IPlayerStatus {
  gold: number;
  level: number;
}

export interface IPlayer {
  id: string;
  nickname: string;
  class: string;
  inventory: IPlayerInventory;
  status: IPlayerStatus;
}

export const player: IPlayer = {
  id: "ads:298209382902",
  nickname: "alexstrasza",
  class: "mage",
  status: {
    gold: 30000,
    level: 10,
  },
  inventory: {
    attack: {
      id: 2133123,
      name: "stone sword",
      status: {
        type: "weapon",
        equipped: true,
        attack: 2,
        level: 2,
        gold: 1,
        bought: true,
      },
    },
    defense: {
      id: 1,
      name: "wooden shield",
      status: {
        level: 1,
        type: "shield",
        equipped: true,
        defense: 50,
        gold: 1,
        bought: true,
      },
    },
  },
};

export class Player implements Service {
  async getAll(): Promise<IPlayer> {
    console.log("Starting request for player");

    return player;
  }
}
