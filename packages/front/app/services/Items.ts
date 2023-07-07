type TypeItems = 'shield' | 'weapon';

interface StatusItem {
  level: number;
  type: TypeItems;
  equipped: boolean;
}

interface Shield extends StatusItem {
  defense: number;
  type: 'shield';
}

interface Weapon extends StatusItem {
  attack: number;
  type: 'weapon';
}

type Status = Weapon | Shield;

export interface Item {
  id: number;
  name: string;
  status: Status;
}

export class Items {
  async getAll(): Promise<Item[]> {
    const shields: Item[] = [
      {
        id: 1,
        name: 'wooden shield',
        status: {
          level: 1,
          type: 'shield',
          equipped: true,
          defense: 50,
        },
      },
      {
        id: 15,
        name: 'silver shield',
        status: {
          level: 50,
          type: 'shield',
          equipped: false,
          defense: 500,
        },
      },
    ];

    const weapons: Item[] = [
      {
        id: 2,
        name: 'stone sword',
        status: {
          type: 'weapon',
          equipped: true,
          attack: 75,
          level: 2,
        },
      },
      {
        id: 20,
        name: 'diamond sword',
        status: {
          type: 'weapon',
          equipped: false,
          attack: 750,
          level: 75,
        },
      },
    ];

    console.log('Starting request for items');

    return [...shields, ...weapons];
  }
}
