import { Test, TestingModule } from '@nestjs/testing';
import { PlayerAnalyzer } from '../player.analyzer';
import { Player } from '../player.schema';
import { Item } from '../../items/item.schema';
import { playerMock } from './player.mocks';
import { itemMock } from '../../items/tests/item.mock';
import { ERRORS } from '../utils/analyze';
import { monsterMock } from '../../monsters/tests/monster.mock';
import { Monster } from '../../monsters/monster.schema';

describe('PlayerAnalyzer', () => {
  let playerAnalyzer: PlayerAnalyzer;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [PlayerAnalyzer],
    }).compile();

    playerAnalyzer = moduleRef.get<PlayerAnalyzer>(PlayerAnalyzer);
  });

  describe('playerBuyItem', () => {
    it('should pass without errors', () => {
      const player: Player = playerMock;
      const item: Item = { ...itemMock, name: 'item' };
      const result = playerAnalyzer.playerBuyItem(player, item);
      expect(result).toStrictEqual([]);
    });

    it('should return error when player.gold is not enough to buy item', () => {
      const player: Player = playerMock;
      const item: Item = { ...itemMock, name: 'item', gold: 100000 };
      const result = playerAnalyzer.playerBuyItem(player, item);
      expect(result).toStrictEqual([ERRORS.NOT_ENOUGH_GOLD]);
    });

    it('should return error when player.level is not enough to buy item', () => {
      const player: Player = playerMock;
      const item: Item = { ...itemMock, name: 'item', level: 100000 };
      const result = playerAnalyzer.playerBuyItem(player, item);
      expect(result).toStrictEqual([ERRORS.NOT_ENOUGH_LEVEL]);
    });

    it('should return error when player.inventory has already the item', () => {
      const player: Player = playerMock;
      const item: Item = itemMock;
      const result = playerAnalyzer.playerBuyItem(player, item);
      expect(result).toStrictEqual([ERRORS.HAS_ON_INVENTORY]);
    });

    it('should return errors sorted on', () => {
      const player: Player = playerMock;
      const item: Item = { ...itemMock, level: 100000, gold: 100000 };
      const result = playerAnalyzer.playerBuyItem(player, item);
      expect(result).toStrictEqual([
        ERRORS.NOT_ENOUGH_LEVEL,
        ERRORS.NOT_ENOUGH_GOLD,
        ERRORS.HAS_ON_INVENTORY,
      ]);
    });
  });

  describe('playerFightMonster', () => {
    it('should pass without errors', () => {
      const player: Player = playerMock;
      const monster: Monster = monsterMock;
      const result = playerAnalyzer.playerFightMonster(player, monster);
      expect(result).toStrictEqual([]);
    });

    it('should return error when player.level is not enough to fight monster', () => {
      const player: Player = playerMock;
      const monster: Monster = {
        ...monsterMock,
        status: { ...monsterMock.status, level: 100 },
      };
      const result = playerAnalyzer.playerFightMonster(player, monster);
      expect(result).toStrictEqual([ERRORS.NOT_ENOUGH_LEVEL]);
    });

    describe('who should win', () => {
      it('should pass when player has 100/100 against 1000/1', () => {
        const player: Player = playerMock;
        const monster: Monster = {
          ...monsterMock,
          status: { ...monsterMock.status, attack: 1000 },
        };
        const result = playerAnalyzer.playerFightMonster(player, monster);
        expect(result).toStrictEqual([]);
      });

      it('should return error when player has 100/100 against 1000/1000', () => {
        const player: Player = playerMock;
        const monster: Monster = {
          ...monsterMock,
          status: { ...monsterMock.status, attack: 1000, defense: 1000 },
        };
        const result = playerAnalyzer.playerFightMonster(player, monster);
        expect(result).toStrictEqual([ERRORS.NOT_WIN_FIGHT]);
      });
    });
  });

  describe('playerEquipItem', () => {
    it('should pass without errors', () => {
      const player: Player = playerMock;
      const item: Item = itemMock;
      const result = playerAnalyzer.playerEquipItem(player, item);
      expect(result).toStrictEqual([]);
    });

    it('should return error when player.inventory.bought has not the item to equip', () => {
      const player: Player = playerMock;
      const item: Item = { ...itemMock, name: 'no-bought' };
      const result = playerAnalyzer.playerEquipItem(player, item);
      expect(result).toStrictEqual([ERRORS.NOT_ON_INVENTORY]);
    });
  });
});
