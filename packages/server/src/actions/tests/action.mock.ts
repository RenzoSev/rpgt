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
  buyItem: async () => itemMock,
};
