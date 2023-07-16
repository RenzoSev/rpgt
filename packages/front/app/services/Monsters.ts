import { Service } from './Service';

export interface StatusMonster {
  attack: number;
  health: number;
  level: number;
}

export interface Monster {
  id: number;
  name: string;
  status: StatusMonster;
}

export class Monsters implements Service {
  async getAll(): Promise<Monster[]> {
    const spider: Monster = {
      id: 1,
      name: 'spider',
      status: {
        attack: 5,
        health: 10,
        level: 1,
      },
    };
    const wolf: Monster = {
      id: 2,
      name: 'wolf',
      status: {
        attack: 10,
        health: 15,
        level: 2,
      },
    };

    console.log('Starting request for monsters');

    return [spider, wolf];
  }
}
