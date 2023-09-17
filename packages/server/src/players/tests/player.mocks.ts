import { monsterMock } from '../../monsters/tests/monster.mock';
import { itemMock } from '../../items/tests/item.mock';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { GetPlayerDto } from '../dto/get-player.dto';
import { UpdateBoughtItemsDto } from '../dto/update-bought-items.dto';
import { UpdateLevelDto } from '../dto/update-level.dto';
import { Player } from '../player.schema';
import { UpdateEquippedItemDto } from '../dto/update-equipped-item-dto';
import { UpdateGoldDto } from '../dto/update-gold.dto';

const name = 'name';
const className = 'mage';
const gold = 1000;

export const getPlayerDtoMock: GetPlayerDto = { name: name };

export const createPlayerDtoMock: CreatePlayerDto = {
  name: name,
  class: className,
};

export const updateBoughtItemsDtoMock: UpdateBoughtItemsDto = {
  playerName: name,
  items: [itemMock.name],
  gold,
};

export const updateLevelDtoMock: UpdateLevelDto = {
  playerName: name,
  xp: monsterMock.status.xp,
};

export const updateGoldDtoMock: UpdateGoldDto = {
  playerName: name,
  gold,
  action: 'add',
};

export const playerMock: Player = {
  class: className,
  name: name,
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
  'name must be longer than or equal to 4 characters',
];

export const createPlayerErrorMessageForInvalidBody = [
  'name must be a string',
  'name must be longer than or equal to 4 characters',
  'name should not be empty',
  'class must be a string',
  'class should not be empty',
];
