export interface StatusMonster {
  attack: number;
  health: number;
  level: number;
}

export interface Monster {
  id: string;
  name: string;
  status: StatusMonster;
}

export class Monsters implements Service {
  async getAll(): Promise<Monster[]> {
    const spider: Monster = {
      id: 'ads298209382902',
      name: 'spider',
      status: {
        attack: 5,
        health: 10,
        level: 1,
      },
    };

    console.log('Starting request for monsters');

    return [...Array.from({ length: 30 }, () => spider)];
  }
}
