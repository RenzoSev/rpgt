import { Item } from './Items';
import { Service } from './Service';

export class ShopItems implements Service {
  async getAll(): Promise<Item[]> {
    const shields: Item[] = [
      {
        id: 1,
        name: 'wooden shield',
        status: {
          level: 1,
          type: 'shield',
          equipped: false,
          defense: 50,
          gold: 1,
          bought: false,
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
          gold: 1,
          bought: false,
        },
      },
    ];

    const weapons: Item[] = [
      {
        id: 2,
        name: 'stone sword',
        status: {
          type: 'weapon',
          equipped: false,
          attack: 75,
          level: 2,
          gold: 1,
          bought: false,
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
          gold: 1,
          bought: false,
        },
      },
    ];

    console.log('Starting request for shop items');

    return [...shields, ...weapons];
  }
}
