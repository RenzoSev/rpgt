import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from '../player.service';
import {
  createPlayerDtoMock,
  getPlayerDtoMock,
  playerMock,
  updateBoughtItemsDtoMock,
  updateEquippedItemDtoMock,
  updateGoldDtoMock,
  updateIncStatusDtoMock,
  updateLevelDtoMock,
} from './player.mocks';
import { getModelToken } from '@nestjs/mongoose';
import { Player } from '../player.schema';
import { createNewInventory, createNewStatus } from '../utils/database';
import { removeIdFromFindMethod } from '../../utils/services';
import { MESSAGES } from '../../utils/constants';

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
      expect(playerModel.findOne).toBeCalledWith(
        getPlayerDtoMock,
        removeIdFromFindMethod,
      );
      expect(result).toStrictEqual(playerMock);
    });
  });

  describe('create', () => {
    it('should create player', async () => {
      playerModel.findOne.mockReturnValue({
        exec: jest.fn().mockResolvedValue(null),
      });
      playerModel.create.mockResolvedValue({
        toObject: jest.fn().mockReturnValue(playerMock),
      });
      const result = await playerService.create(createPlayerDtoMock);
      expect(playerModel.findOne).toBeCalledWith({
        name: createPlayerDtoMock.name,
      });
      expect(playerModel.create).toBeCalledWith({
        ...createPlayerDtoMock,
        inventory: createNewInventory(),
        status: createNewStatus(),
      });
      expect(result).toStrictEqual(playerMock);
    });

    it('should return message when player with same name already exists', async () => {
      playerModel.findOne.mockReturnValue({
        exec: jest.fn().mockResolvedValue(playerMock),
      });
      const result = await playerService.create(createPlayerDtoMock);
      expect(playerModel.findOne).toBeCalledWith({
        name: createPlayerDtoMock.name,
      });
      expect(result).toStrictEqual(MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME);
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
          $inc: {
            'status.gold': -updateBoughtItemsDtoMock.gold,
          },
        },
        { new: true, projection: { _id: 0 } },
      );
      expect(result).toStrictEqual(playerMock);
    });
  });

  describe('updateLevel', () => {
    it('should update player level', async () => {
      playerModel.findOneAndUpdate.mockResolvedValue(playerMock);
      const result = await playerService.updateLevel(updateLevelDtoMock);
      expect(playerModel.findOneAndUpdate).toBeCalledWith(
        {
          name: updateLevelDtoMock.playerName,
        },
        {
          $inc: {
            'status.level': updateLevelDtoMock.xp,
          },
        },
        { new: true, projection: { _id: 0 } },
      );
      expect(result).toStrictEqual(playerMock);
    });
  });

  describe('updateGold', () => {
    it('should update player gold - add', async () => {
      playerModel.findOneAndUpdate.mockResolvedValue(playerMock);
      const result = await playerService.updateGold(updateGoldDtoMock);
      expect(playerModel.findOneAndUpdate).toBeCalledWith(
        {
          name: updateGoldDtoMock.playerName,
        },
        {
          $inc: {
            'status.gold': updateGoldDtoMock.gold,
          },
        },
        { new: true, projection: { _id: 0 } },
      );
      expect(result).toStrictEqual(playerMock);
    });
    it('should update player gold - remove', async () => {
      playerModel.findOneAndUpdate.mockResolvedValue(playerMock);
      const result = await playerService.updateGold({
        ...updateGoldDtoMock,
        action: 'remove',
      });
      expect(playerModel.findOneAndUpdate).toBeCalledWith(
        {
          name: updateGoldDtoMock.playerName,
        },
        {
          $inc: {
            'status.gold': -updateGoldDtoMock.gold,
          },
        },
        { new: true, projection: { _id: 0 } },
      );
      expect(result).toStrictEqual(playerMock);
    });
  });

  describe('updateAttackEquippedItem', () => {
    it('should update player attack equipped item', async () => {
      playerModel.findOneAndUpdate.mockResolvedValue(playerMock);
      const result = await playerService.updateAttackEquippedItem(
        updateEquippedItemDtoMock,
      );
      expect(playerModel.findOneAndUpdate).toBeCalledWith(
        {
          name: updateEquippedItemDtoMock.playerName,
        },
        {
          $set: {
            'inventory.equipped.0': updateEquippedItemDtoMock.itemName,
            'status.attack': updateEquippedItemDtoMock.powerValue,
          },
        },
        { new: true, projection: { _id: 0 } },
      );
      expect(result).toStrictEqual(playerMock);
    });
  });

  describe('updateDefenseEquippedItem', () => {
    it('should update player defense equipped item', async () => {
      playerModel.findOneAndUpdate.mockResolvedValue(playerMock);
      const result = await playerService.updateDefenseEquippedItem(
        updateEquippedItemDtoMock,
      );
      expect(playerModel.findOneAndUpdate).toBeCalledWith(
        {
          name: updateEquippedItemDtoMock.playerName,
        },
        {
          $set: {
            'inventory.equipped.1': updateEquippedItemDtoMock.itemName,
            'status.defense': updateEquippedItemDtoMock.powerValue,
          },
        },
        { new: true, projection: { _id: 0 } },
      );
      expect(result).toStrictEqual(playerMock);
    });
  });

  describe('updateIncStatus', () => {
    it('should update player level and gold', async () => {
      playerModel.findOneAndUpdate.mockResolvedValue(playerMock);
      const result = await playerService.updateIncStatus(
        updateIncStatusDtoMock,
      );
      expect(playerModel.findOneAndUpdate).toBeCalledWith(
        {
          name: updateIncStatusDtoMock.playerName,
        },
        {
          $inc: {
            'status.level': updateIncStatusDtoMock.level,
            'status.gold': updateIncStatusDtoMock.gold,
          },
        },
        { new: true, projection: { _id: 0 } },
      );
      expect(result).toStrictEqual(playerMock);
    });

    it('should update player level', async () => {
      playerModel.findOneAndUpdate.mockResolvedValue(playerMock);
      const result = await playerService.updateIncStatus({
        ...updateIncStatusDtoMock,
        gold: undefined,
      });
      expect(playerModel.findOneAndUpdate).toBeCalledWith(
        {
          name: updateIncStatusDtoMock.playerName,
        },
        {
          $inc: {
            'status.level': updateIncStatusDtoMock.level,
          },
        },
        { new: true, projection: { _id: 0 } },
      );
      expect(result).toStrictEqual(playerMock);
    });

    it('should update player gold', async () => {
      playerModel.findOneAndUpdate.mockResolvedValue(playerMock);
      const result = await playerService.updateIncStatus({
        ...updateIncStatusDtoMock,
        level: undefined,
      });
      expect(playerModel.findOneAndUpdate).toBeCalledWith(
        {
          name: updateIncStatusDtoMock.playerName,
        },
        {
          $inc: {
            'status.gold': updateIncStatusDtoMock.gold,
          },
        },
        { new: true, projection: { _id: 0 } },
      );
      expect(result).toStrictEqual(playerMock);
    });
  });
});
