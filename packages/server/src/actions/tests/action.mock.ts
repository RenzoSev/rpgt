import { playerMock } from '../../players/tests/player.mocks';
import { BuyItemDto } from '../dto/buy-item.dto';
import { itemMock } from '../../items/tests/item.mock';
import { FightMonsterDto } from '../dto/fight-monster.dto';
import { monsterMock } from '../../monsters/tests/monster.mock';
import { EquipItemDto } from '../dto/equip-item-dto';

export const buyItemDtoMock: BuyItemDto = {
  itemName: itemMock.name,
  playerName: playerMock.name,
};

export const equipItemDto: EquipItemDto = {
  itemName: itemMock.name,
  playerName: playerMock.name,
};

export const fightMonsterDtoMock: FightMonsterDto = {
  monsterName: monsterMock.name,
  playerName: playerMock.name,
};

export const equipItemDtoMock: EquipItemDto = {
  itemName: itemMock.name,
  playerName: playerMock.name,
};

export const actionServiceMock = {
  buyItem: async () => playerMock,
  equipItem: async () => playerMock,
  fightMonster: async () => playerMock,
};

export const buyItemErrorMessageForInvalidBody = [
  'playerName must be a string',
  'playerName must be longer than or equal to 4 characters',
  'playerName should not be empty',
  'itemName must be a string',
  'itemName must be longer than or equal to 4 characters',
  'itemName should not be empty',
];

export const fightMonsterErrorMessageForInvalidBody = [
  'playerName must be a string',
  'playerName must be longer than or equal to 4 characters',
  'playerName should not be empty',
  'monsterName must be a string',
  'monsterName must be longer than or equal to 4 characters',
  'monsterName should not be empty',
];

export const equipItemErrorMessageForInvalidBody = [
  'playerName must be a string',
  'playerName must be longer than or equal to 4 characters',
  'playerName should not be empty',
  'itemName must be a string',
  'itemName must be longer than or equal to 4 characters',
  'itemName should not be empty',
];
