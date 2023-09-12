import { Client, Request } from './Client';
import { IPlayer } from './Player';
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

export class Items implements Service {
  private request: Request;

  constructor() {
    const client = new Client();
    this.request = client.create();
  }

  async getAll(): Promise<IItem[]> {
    const { data } = await this.request.get('/items');
    return data;
  }

  async equipItem(
    itemName: IItem['name'],
    playerName: IPlayer['name']
  ): Promise<IItem[]> {
    const { data } = await this.request.patch('/actions/equip-item', {
      itemName,
      playerName,
    });
    return data;
  }
}
