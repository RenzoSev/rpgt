import { playerMock } from '../../players/tests/player.mocks';
import { BuyItemDto } from '../dto/buy-item.dto';
import { itemMock } from '../../items/tests/item.mock';

export const buyItemDtoMock: BuyItemDto = {
  itemName: itemMock.name,
  playerName: playerMock.name,
};

export const actionServiceMock = {
  buyItem: async () => itemMock,
};
