import { monsterMock } from '../../monsters/tests/monster.mock';
import { itemMock } from '../../items/tests/item.mock';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { GetPlayerDto } from '../dto/get-player.dto';
import { UpdateBoughtItemsDto } from '../dto/update-bought-items.dto';
import { UpdateLevelDto } from '../dto/update-level.dto';
import { Player } from '../player.schema';
import { UpdateEquippedItemDto } from '../dto/update-equipped-item-dto';

// TODO: change it. there is no reason why
const getName = (): Player['name'] => 'name';
const getClass = (): Player['class'] => 'mage';

export const getPlayerDtoMock: GetPlayerDto = { name: getName() };

export const createPlayerDtoMock: CreatePlayerDto = {
  name: getName(),
  class: getClass(),
};

export const updateBoughtItemsDtoMock: UpdateBoughtItemsDto = {
  playerName: getName(),
  items: [itemMock.name],
};

export const updateLevelDtoMock: UpdateLevelDto = {
  playerName: getName(),
  xp: monsterMock.status.xp,
};

export const playerMock: Player = {
  class: getClass(),
  name: getName(),
  status: { gold: 2000, level: 30, attack: 100, defense: 100 },
  inventory: { bought: ['attack-item'], equipped: ['456', '654'] },
};

export const updateEquippedItemDtoMock: UpdateEquippedItemDto = {
  itemName: itemMock.name,
  playerName: playerMock.name,
};

export const playerServiceMock = {
  get: async () => playerMock,
  create: async () => playerMock,
};

export const getPlayerErrorMessageForInvalidBody = [
  'name must be a string',
  'name must be longer than or equal to 4 characters',
  'name should not be empty',
];

export const createPlayerErrorMessageForInvalidBody = [
  'name must be a string',
  'name must be longer than or equal to 4 characters',
  'name should not be empty',
  'class must be a string',
  'class should not be empty',
];
