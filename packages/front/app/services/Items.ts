import { Client, ClientRequest } from './Client';
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

export type StatusType = Weapon | Shield;

export type Status<T = StatusType> = T;

export interface IItem<T = StatusType> {
  id: number;
  name: string;
  status: Status<T>;
}

export class Items implements Service {
  private request: ClientRequest;

  constructor() {
    const client = new Client();
    this.request = client.create();
  }

  async get(name: string): Promise<IItem> {
    const { data } = await this.request.get<IItem>(`/item/${name}`);
    return data;
  }

  async getAll(): Promise<IItem[]> {
    const { data } = await this.request.get<IItem[]>('/items');
    return data;
  }
}
