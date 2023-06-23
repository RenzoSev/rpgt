export interface StatusMonster {
  attack: number;
  health: number;
}

export interface Monster {
  id: string;
  name: string;
  status: StatusMonster;
}

export class Monsters {
  async getMonsters(): Promise<Monster[]> {
    const spider: Monster = {
      id: 'ads298209382902',
      name: 'spider',
      status: {
        attack: 5,
        health: 10,
      },
    };

    console.log('Starting request for monsters');

    return [...Array.from({ length: 30 }, () => spider)];
  }
}
