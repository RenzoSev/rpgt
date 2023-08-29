import { Test, TestingModule } from '@nestjs/testing';
import { PlayerService } from '../player.service';
import {
  createPlayerDtoMock,
  getPlayerDtoMock,
  playerMock,
} from './player.mocks';
import { getModelToken } from '@nestjs/mongoose';
import { Player } from '../player.schema';

describe('PlayerService', () => {
  let playerService: PlayerService;
  let playerModel;

  beforeEach(async () => {
    playerModel = {
      findOne: jest.fn(),
      create: jest.fn(),
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
      expect(result).toStrictEqual(playerMock);
    });
  });

  describe('create', () => {
    it('should create player', async () => {
      playerModel.create.mockResolvedValue({
        toObject: jest.fn().mockReturnValue(playerMock),
      });
      const result = await playerService.create(createPlayerDtoMock);
      expect(result).toStrictEqual(playerMock);
    });
  });
});
