import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from '../../players/player.service';
import { ActionController } from '../action.controller';
import { ActionService } from '../action.service';
import { ItemService } from '../../items/item.service';
import { MonsterService } from '../../monsters/monster.service';
import { getModelToken } from '@nestjs/mongoose';
import { Player } from '../../players/player.schema';
import { playerMock } from '../../players/tests/player.mocks';
import { itemMock } from '../../items/tests/item.mock';
import { monsterMock } from '../../monsters/tests/monster.mock';
import { Item } from '../../items/item.schema';
import { Monster } from '../../monsters/monster.schema';
import { buyItemDtoMock } from './action.mock';
import { PlayerAnalyzer } from '../../players/player.analyzer';

describe('PlayerController', () => {
  let actionController: ActionController;

  let actionService: ActionService;
  let playerService: PlayerService;
  let itemService: ItemService;
  let monsterService: MonsterService;
  let playerAnalyzer: PlayerAnalyzer;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ActionController],
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

    actionController = moduleRef.get<ActionController>(ActionController);

    actionService = moduleRef.get<ActionService>(ActionService);
    playerService = moduleRef.get<PlayerService>(PlayerService);
    itemService = moduleRef.get<ItemService>(ItemService);
    monsterService = moduleRef.get<MonsterService>(MonsterService);
    playerAnalyzer = moduleRef.get<PlayerAnalyzer>(PlayerAnalyzer);
  });

  describe('buyItem', () => {
    it('should  buy item', async () => {
      jest.spyOn(actionService, 'buyItem').mockResolvedValue(itemMock);
      jest.spyOn(playerService, 'get').mockResolvedValue(playerMock);
      jest.spyOn(itemService, 'get').mockResolvedValue(itemMock);
      jest.spyOn(monsterService, 'get').mockResolvedValue(monsterMock);
      jest.spyOn(playerAnalyzer, 'playerBuyItem').mockReturnValue([]);

      const result = await actionController.buyItem(buyItemDtoMock);
      expect(result).toStrictEqual(itemMock);
    });
  });
});
