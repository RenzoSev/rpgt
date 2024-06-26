import { Test, TestingModule } from '@nestjs/testing';
import { PlayerController } from '../player.controller';
import { PlayerService } from '../player.service';
import {
  createPlayerDtoMock,
  getPlayerDtoMock,
  playerMock,
} from './player.mocks';
import { getModelToken } from '@nestjs/mongoose';
import { Player } from '../player.schema';
import { MESSAGES } from '../../utils/constants';
import { buildBadRequestResponse } from '../../utils';

describe('PlayerController', () => {
  let playerController: PlayerController;
  let playerService: PlayerService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [PlayerController],
      providers: [
        PlayerService,
        { provide: getModelToken(Player.name), useValue: playerMock },
      ],
    }).compile();

    playerController = moduleRef.get<PlayerController>(PlayerController);
    playerService = moduleRef.get<PlayerService>(PlayerService);
  });

  describe('get', () => {
    it('should return get player', async () => {
      jest.spyOn(playerService, 'get').mockResolvedValue(playerMock);
      const result = await playerController.get(getPlayerDtoMock);
      expect(result).toStrictEqual(playerMock);
    });
  });

  describe('create', () => {
    it('should create player', async () => {
      jest.spyOn(playerService, 'create').mockResolvedValue(playerMock);
      const result = await playerController.create(createPlayerDtoMock);
      expect(result).toStrictEqual(playerMock);
    });

    it('should return bad request when player with same name already exists', async () => {
      jest
        .spyOn(playerService, 'create')
        .mockResolvedValue(MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME);
      const result = await playerController.create(createPlayerDtoMock);
      expect(result).toStrictEqual(
        buildBadRequestResponse(MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME),
      );
    });
  });
});
