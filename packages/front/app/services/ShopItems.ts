import {
  IItem,
  Items as ItemsService,
  shields,
  shieldsShop,
  weapons,
  weaponsShop,
} from './Items';
import { IProfile, profile as profileMock } from './Player';
import { Service } from './Service';

export class ShopItems implements Service {
  async getAll(): Promise<IItem[]> {
    console.log('Starting request for shop items');

    const itemsService = new ItemsService();
    const items = await itemsService.getAll();

    return items;
  }

  async buyItem(
    profile: IProfile,
    item: IItem
  ): Promise<{ profile: IProfile; items: IItem[] }> {
    const updatedProfile = {
      ...profileMock,
      status: {
        ...profile.status,
        gold: profile.status.gold - item.status.gold,
      },
    };

    return {
      profile: updatedProfile,
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
