import { Test, TestingModule } from '@nestjs/testing';
import { ItemService } from '../../items/item.service';
import { MonsterService } from '../../monsters/monster.service';
import { PlayerService } from '../../players/player.service';
import { ActionService } from '../action.service';
import {
  playerMock,
  updateEquippedItemDtoMock,
} from '../../players/tests/player.mocks';
import { itemMock } from '../../items/tests/item.mock';
import { monsterMock } from '../../monsters/tests/monster.mock';
import { buyItemDtoMock, fightMonsterDtoMock } from './action.mock';
import { PlayerAnalyzer } from '../../players/player.analyzer';
import { getModelToken } from '@nestjs/mongoose';
import { Player } from '../../players/player.schema';
import { Item } from '../../items/item.schema';
import { Monster } from '../../monsters/monster.schema';
import { ERRORS } from '../../players/utils/analyze';

describe('ActionService', () => {
  let actionService: ActionService;
  let playerService: PlayerService;
  let monsterService: MonsterService;
  let itemService: ItemService;
  let playerAnalyzer: PlayerAnalyzer;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        ActionService,
        PlayerService,
        ItemService,
        MonsterService,
        PlayerAnalyzer,
        { provide: getModelToken(Player.name), useValue: playerMock },
        { provide: getModelToken(Item.name), useValue: itemMock },
        { provide: getModelToken(Monster.name), useValue: monsterMock },
      ],
    }).compile();

    actionService = moduleRef.get<ActionService>(ActionService);
    playerService = moduleRef.get<PlayerService>(PlayerService);
    monsterService = moduleRef.get<MonsterService>(MonsterService);
    itemService = moduleRef.get<ItemService>(ItemService);
    playerAnalyzer = moduleRef.get<PlayerAnalyzer>(PlayerAnalyzer);

    jest.spyOn(playerService, 'get').mockResolvedValue(playerMock);
    jest.spyOn(itemService, 'get').mockResolvedValue(itemMock);
    jest.spyOn(monsterService, 'get').mockResolvedValue(monsterMock);
  });

  describe('buyItem', () => {
    it('should return player when buy is valid', async () => {
      jest
        .spyOn(playerService, 'updateBoughtItems')
        .mockResolvedValue(playerMock);
      jest.spyOn(playerAnalyzer, 'playerBuyItem').mockReturnValue([]);

      const result = await actionService.buyItem(buyItemDtoMock);
      expect(result).toStrictEqual(playerMock);
    });

    it('should return errors when buy is not valid', async () => {
      jest
        .spyOn(playerService, 'updateBoughtItems')
        .mockResolvedValue(playerMock);
      jest
        .spyOn(playerAnalyzer, 'playerBuyItem')
        .mockReturnValue([ERRORS.NOT_ENOUGH_LEVEL]);

      const result = await actionService.buyItem(buyItemDtoMock);
      expect(result).toStrictEqual({
        statusError: 400,
        error: 'Bad Request',
        message: [ERRORS.NOT_ENOUGH_LEVEL],
      });
    });
  });

  describe('fightMonster', () => {
    it('should return player when fight is valid', async () => {
      jest.spyOn(playerAnalyzer, 'playerFightMonster').mockReturnValue([]);
      jest.spyOn(playerService, 'updateLevel').mockResolvedValue(playerMock);

      const result = await actionService.fightMonster(fightMonsterDtoMock);
      expect(result).toStrictEqual(playerMock);
    });

    it('should return errors when fight is not valid', async () => {
      jest
        .spyOn(playerAnalyzer, 'playerFightMonster')
        .mockReturnValue([ERRORS.NOT_WIN_FIGHT]);
      jest.spyOn(playerService, 'updateLevel').mockResolvedValue(playerMock);

      const result = await actionService.fightMonster(fightMonsterDtoMock);
      expect(result).toStrictEqual({
        statusError: 400,
        error: 'Bad Request',
        message: [ERRORS.NOT_WIN_FIGHT],
      });
    });
  });

  describe('equipItem', () => {
    it('should return player when equip attack is valid', async () => {
      jest.spyOn(playerAnalyzer, 'playerEquipItem').mockReturnValue([]);
      jest
        .spyOn(playerService, 'updateAttackEquippedItem')
        .mockResolvedValue(playerMock);

      const result = await actionService.equipItem({
        playerName: playerMock.name,
        itemName: itemMock.name,
      });
      expect(result).toStrictEqual(playerMock);
    });

    it('should return player when equip defense is valid', async () => {
      jest.spyOn(playerAnalyzer, 'playerEquipItem').mockReturnValue([]);
      jest
        .spyOn(itemService, 'get')
        .mockResolvedValue({ ...itemMock, type: 'shield' });
      jest
        .spyOn(playerService, 'updateDefenseEquippedItem')
        .mockResolvedValue(playerMock);

      const result = await actionService.equipItem(updateEquippedItemDtoMock);
      expect(result).toStrictEqual(playerMock);
    });

    it('should return errors when equip item is not valid', async () => {
      jest
        .spyOn(playerAnalyzer, 'playerEquipItem')
        .mockReturnValue([ERRORS.NOT_ON_INVENTORY]);
      jest
        .spyOn(playerService, 'updateAttackEquippedItem')
        .mockResolvedValue(playerMock);

      const result = await actionService.equipItem(updateEquippedItemDtoMock);
      expect(result).toStrictEqual({
        statusError: 400,
        error: 'Bad Request',
        message: [ERRORS.NOT_ON_INVENTORY],
      });
    });
  });
});
