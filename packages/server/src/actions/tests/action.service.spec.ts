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
  let actionService;
  let playerService;
  let monsterService;
  let itemService;
  let playerAnalyzer;

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

    playerService.get = jest
      .spyOn(playerService, 'get')
      .mockResolvedValue(playerMock);
    itemService.get = jest
      .spyOn(itemService, 'get')
      .mockResolvedValue(itemMock);
    monsterService.get = jest
      .spyOn(monsterService, 'get')
      .mockResolvedValue(monsterMock);
  });

  afterEach(() => {
    actionService = {};
    playerService = {};
    monsterService = {};
    itemService = {};
    playerAnalyzer = {};
  });

  describe('buyItem', () => {
    it('should return player when buy is valid', async () => {
      playerAnalyzer.playerBuyItem = jest
        .spyOn(playerAnalyzer, 'playerBuyItem')
        .mockReturnValue([]);
      playerService.updateBoughtItems = jest
        .spyOn(playerService, 'updateBoughtItems')
        .mockResolvedValue(playerMock);

      const result = await actionService.buyItem(buyItemDtoMock);

      expect(playerAnalyzer.playerBuyItem).toBeCalledWith(playerMock, itemMock);
      expect(playerService.updateBoughtItems).toBeCalledWith({
        items: [itemMock.name],
        playerName: playerMock.name,
        gold: itemMock.gold,
      });
      expect(result).toStrictEqual(playerMock);
    });

    it('should return errors when buy is not valid', async () => {
      playerAnalyzer.playerBuyItem = jest
        .spyOn(playerAnalyzer, 'playerBuyItem')
        .mockReturnValue([ERRORS.NOT_ENOUGH_LEVEL]);

      const result = await actionService.buyItem(buyItemDtoMock);

      expect(playerAnalyzer.playerBuyItem).toBeCalledWith(playerMock, itemMock);
      expect(result).toStrictEqual({
        statusError: 400,
        error: 'Bad Request',
        message: [ERRORS.NOT_ENOUGH_LEVEL],
      });
    });
  });

  describe('fightMonster', () => {
    it('should return player when fight is valid', async () => {
      playerAnalyzer.playerFightMonster = jest
        .spyOn(playerAnalyzer, 'playerFightMonster')
        .mockReturnValue([]);
      playerService.updateIncStatus = jest
        .spyOn(playerService, 'updateIncStatus')
        .mockResolvedValue(playerMock);

      const result = await actionService.fightMonster(fightMonsterDtoMock);

      expect(playerAnalyzer.playerFightMonster).toBeCalledWith(
        playerMock,
        monsterMock,
      );
      expect(playerService.updateIncStatus).toBeCalledWith({
        gold: monsterMock.status.gold,
        level: monsterMock.status.xp,
        playerName: playerMock.name,
      });
      expect(result).toStrictEqual(playerMock);
    });

    it('should return errors when fight is not valid', async () => {
      playerAnalyzer.playerFightMonster = jest
        .spyOn(playerAnalyzer, 'playerFightMonster')
        .mockReturnValue([ERRORS.NOT_WIN_FIGHT]);

      const result = await actionService.fightMonster(fightMonsterDtoMock);

      expect(playerAnalyzer.playerFightMonster).toBeCalledWith(
        playerMock,
        monsterMock,
      );
      expect(result).toStrictEqual({
        statusError: 400,
        error: 'Bad Request',
        message: [ERRORS.NOT_WIN_FIGHT],
      });
    });
  });

  describe('equipItem', () => {
    it('should return player when equip attack is valid', async () => {
      playerAnalyzer.playerEquipItem = jest
        .spyOn(playerAnalyzer, 'playerEquipItem')
        .mockReturnValue([]);
      playerService.updateAttackEquippedItem = jest
        .spyOn(playerService, 'updateAttackEquippedItem')
        .mockResolvedValue(playerMock);

      const result = await actionService.equipItem({
        playerName: playerMock.name,
        itemName: itemMock.name,
      });

      expect(playerAnalyzer.playerEquipItem).toBeCalledWith(
        playerMock,
        itemMock,
      );
      expect(playerService.updateAttackEquippedItem).toBeCalledWith({
        playerName: playerMock.name,
        itemName: itemMock.name,
        powerValue: itemMock.attack,
      });
      expect(result).toStrictEqual(playerMock);
    });

    it('should return player when equip defense is valid', async () => {
      playerAnalyzer.playerEquipItem = jest
        .spyOn(playerAnalyzer, 'playerEquipItem')
        .mockReturnValue([]);
      itemService.get = jest
        .spyOn(itemService, 'get')
        .mockResolvedValue({ ...itemMock, type: 'shield' });
      playerService.updateDefenseEquippedItem = jest
        .spyOn(playerService, 'updateDefenseEquippedItem')
        .mockResolvedValue(playerMock);

      const result = await actionService.equipItem(updateEquippedItemDtoMock);

      expect(playerAnalyzer.playerEquipItem).toBeCalledWith(playerMock, {
        ...itemMock,
        type: 'shield',
      });
      expect(playerService.updateDefenseEquippedItem).toBeCalledWith({
        playerName: playerMock.name,
        itemName: itemMock.name,
        powerValue: itemMock.defense,
      });
      expect(result).toStrictEqual(playerMock);
    });

    it('should return errors when equip item is not valid', async () => {
      playerAnalyzer.playerEquipItem = jest
        .spyOn(playerAnalyzer, 'playerEquipItem')
        .mockReturnValue([ERRORS.NOT_ON_INVENTORY]);

      const result = await actionService.equipItem(updateEquippedItemDtoMock);

      expect(playerAnalyzer.playerEquipItem).toHaveBeenCalledWith(
        playerMock,
        itemMock,
      );
      expect(result).toStrictEqual({
        statusError: 400,
        error: 'Bad Request',
        message: [ERRORS.NOT_ON_INVENTORY],
      });
    });
  });
});
