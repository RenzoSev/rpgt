import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from '../player.service';
import {
  createPlayerDtoMock,
  getPlayerDtoMock,
  playerMock,
  updateBoughtItemsDtoMock,
} from './player.mocks';
import { getModelToken } from '@nestjs/mongoose';
import { Player } from '../player.schema';
import { createNewInventory, createNewStatus } from '../utils/database';
import { removeIdFromFindMethod } from '../../utils/services';

describe('PlayerService', () => {
  let playerService: PlayerService;
  let playerModel;

  beforeEach(async () => {
    playerModel = {
      findOne: jest.fn(),
      create: jest.fn(),
      findOneAndUpdate: jest.fn(),
    };

    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        PlayerService,
        { provide: getModelToken(Player.name), useValue: playerModel },
      ],
    }).compile();
    playerService = moduleRef.get<PlayerService>(PlayerService);
  });

  describe('get', () => {
    it('should return get player', async () => {
      playerModel.findOne.mockReturnValue({
        exec: jest.fn().mockResolvedValue(playerMock),
      });
      const result = await playerService.get(getPlayerDtoMock);
      expect(playerModel.findOne).toHaveBeenCalledWith(
        getPlayerDtoMock,
        removeIdFromFindMethod,
      );
      expect(result).toStrictEqual(playerMock);
    });
  });

  describe('create', () => {
    it('should create player', async () => {
      playerModel.create.mockResolvedValue({
        toObject: jest.fn().mockReturnValue(playerMock),
      });
      const result = await playerService.create(createPlayerDtoMock);
      expect(playerModel.create).toHaveBeenCalledWith({
        ...createPlayerDtoMock,
        inventory: createNewInventory(),
        status: createNewStatus(),
      });
      expect(result).toStrictEqual(playerMock);
    });
  });

  describe('updateBoughtItems', () => {
    it('should update player bought items', async () => {
      playerModel.findOneAndUpdate.mockResolvedValue(playerMock);
      const result = await playerService.updateBoughtItems(
        updateBoughtItemsDtoMock,
      );
      expect(playerModel.findOneAndUpdate).toBeCalledWith(
        {
          name: updateBoughtItemsDtoMock.playerName,
        },
        {
          $push: {
            'inventory.bought': {
              $each: updateBoughtItemsDtoMock.items,
            },
          },
        },
        { new: true },
      );
      expect(result).toStrictEqual(playerMock);
    });
  });
});
