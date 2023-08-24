import { Inventory, Status } from '../player.schema';

export function createNewInventory(): Inventory {
  return {
    bought: [],
    equipped: [],
  };
}

export function createNewStatus(): Status {
  return {
    gold: 0,
    level: 0,
  };
}
