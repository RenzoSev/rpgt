import { Client, ClientRequest } from './Client';
import { Service } from './Service';

export type TypeItems = 'shield' | 'weapon';

export type PowerItems = 'attack' | 'defense';

export interface Shield extends IItem {
  defense: number;
  type: 'shield';
}

export interface Weapon extends IItem {
  attack: number;
  type: 'weapon';
}

export interface IItem {
  id: number;
  name: string;
  level: number;
  type: TypeItems;
  gold: number;
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
