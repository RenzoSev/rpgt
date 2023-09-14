import { Client, ClientRequest } from './Client';
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
  name: string;
  class: string;
  inventory: IPlayerInventory;
  status: IPlayerStatus;
}

export class Player implements Service {
  private request: ClientRequest;

  constructor() {
    const client = new Client();
    this.request = client.create();
  }

  async getAll(): Promise<IPlayer[]> {
    console.log('Starting request for player');

    const { data } = await this.request.get<IPlayer[]>('/players');
    return data;
  }

  async get(name: string): Promise<IPlayer> {
    console.log('Starting request for player');

    const { data } = await this.request.get<IPlayer>(`/player/${name}`);
    return data;
  }

  // TODO IMPLEMENT ENTIRE ITEM ON INVENTORY IN CLIENT SIDE
  getAttack(
    equipped: IPlayer['inventory']['equipped'],
    items: IItem[]
  ): Weapon['attack'] {
    const weapon = items.find(({ name }) => equipped[0] === name) as Weapon | undefined;
    return weapon ? weapon.attack : 0;
  }

  getDefense(
    equipped: IPlayer['inventory']['equipped'],
    items: IItem[]
  ): Shield['defense'] {
    const shield = items.find(({ name }) => equipped[0] === name) as Shield | undefined;
    return shield ? shield.defense : 0;
  }
}
