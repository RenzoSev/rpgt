import { IItem } from '../services/Items';
import { IPlayer } from '../services/Player';

export const playerHasBoughtItem = (
  itemName: IItem['name'],
  bought: IPlayer['inventory']['bought']
) => bought.includes(itemName);

export const playerHasEquippedItem = (
  itemName: IItem['name'],
  equipped: IPlayer['inventory']['equipped']
) => equipped.includes(itemName);
