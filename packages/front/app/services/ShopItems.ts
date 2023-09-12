import {
  IItem,
  Items as ItemsService,
  shields,
  shieldsShop,
  weapons,
  weaponsShop,
} from './Items';
import { IPlayer, player as playerMock } from './Player';
import { Service } from './Service';

export class ShopItems implements Service {
  async getAll(): Promise<IItem[]> {
    console.log('Starting request for shop items');

    const itemsService = new ItemsService();
    const items = await itemsService.getAll();

    return items;
  }

  async buyItem(
    player: IPlayer,
    item: IItem
  ): Promise<{ player: IPlayer; items: IItem[] }> {
    const updatedPlayer = {
      ...playerMock,
      status: {
        ...player.status,
        gold: player.status.gold - item.status.gold,
      },
    };

    return {
      player: updatedPlayer,
      items: [
        ...shields,
        ...weapons,
        ...weaponsShop.map((w) => ({
          ...w,
          status: { ...w.status, bought: true },
        })),
        ...shieldsShop.map((w) => ({
          ...w,
          status: { ...w.status, bought: true },
        })),
      ],
    };
  }
}
