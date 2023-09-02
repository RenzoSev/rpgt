import { Test, TestingModule } from '@nestjs/testing';
import { PlayerAnalyzer } from '../player.analyzer';
import { Player } from '../player.schema';
import { Item } from '../../items/item.schema';
import { playerMock } from './player.mocks';
import { itemMock } from '../../items/tests/item.mock';
import { ERRORS } from '../utils/analyze';

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
      const item: Item = itemMock;
      const result = playerAnalyzer.playerBuyItem(player, item);
      expect(result).toStrictEqual([]);
    });

    it('should return error when player.gold is not enough to buy item', () => {
      const player: Player = playerMock;
      const item: Item = { ...itemMock, gold: 100000 };
      const result = playerAnalyzer.playerBuyItem(player, item);
      expect(result).toStrictEqual([ERRORS.NOT_ENOUGH_GOLD]);
    });

    it('should return error when player.gold is not enough to buy item', () => {
      const player: Player = playerMock;
      const item: Item = { ...itemMock, level: 100000 };
      const result = playerAnalyzer.playerBuyItem(player, item);
      expect(result).toStrictEqual([ERRORS.NOT_ENOUGH_LEVEL]);
    });

    it('should return errors sorted on', () => {
      const player: Player = playerMock;
      const item: Item = { ...itemMock, level: 100000, gold: 100000 };
      const result = playerAnalyzer.playerBuyItem(player, item);
      expect(result).toStrictEqual([
        ERRORS.NOT_ENOUGH_LEVEL,
        ERRORS.NOT_ENOUGH_GOLD,
      ]);
    });
  });
});
