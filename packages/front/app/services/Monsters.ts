import { Client, ClientRequest } from './Client';
import { Service } from './Service';

export interface StatusMonster {
  attack: number;
  defense: number;
  level: number;
  xp: number;
}

export interface Monster {
  id: number;
  name: string;
  status: StatusMonster;
}

export class Monsters implements Service {
  private request: ClientRequest;

  constructor() {
    const client = new Client();
    this.request = client.create();
  }

  async getAll(): Promise<Monster[]> {
    const { data } = await this.request.get<Monster[]>('/monsters');
    return data;
  }

  async get(name: string): Promise<Monster> {
    const { data } = await this.request.get<Monster>(`/monster/${name}`);
    return data;
  }

  static getNextMonsterByASC(currentlyMonsterId: number, monsters: Monster[]) {
    const currentlyMonsterIndex = monsters.findIndex(
      ({ id }) => id === currentlyMonsterId
    );

    return monsters[currentlyMonsterIndex + 1];
  }
}
