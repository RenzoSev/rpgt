import { Test, TestingModule } from '@nestjs/testing';
import { MonsterController } from '../monster.controller';
import { MonsterService } from '../monster.service';
import { Monster } from '../monster.schema';
import {
  createMonsterDtoMock,
  getMonsterDtoMock,
  monsterMock,
  monstersMock,
} from './monster.mock';
import { getModelToken } from '@nestjs/mongoose';
import { MESSAGES } from '../../utils/constants';
import { buildBadRequestResponse } from '../../utils';

describe('MonsterController', () => {
  let monsterController: MonsterController;
  let monsterService: MonsterService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [MonsterController],
      providers: [
        MonsterService,
        { provide: getModelToken(Monster.name), useValue: monsterMock },
      ],
    }).compile();

    monsterController = moduleRef.get<MonsterController>(MonsterController);
    monsterService = moduleRef.get<MonsterService>(MonsterService);
  });

  describe('get', () => {
    it('should return get monster', async () => {
      jest.spyOn(monsterService, 'get').mockResolvedValue(monsterMock);
      const result = await monsterController.get(getMonsterDtoMock);
      expect(result).toStrictEqual(monsterMock);
    });
  });

  describe('getAll', () => {
    beforeEach(async () => {
      const moduleRef: TestingModule = await Test.createTestingModule({
        controllers: [MonsterController],
        providers: [
          MonsterService,
          { provide: getModelToken(Monster.name), useValue: monstersMock },
        ],
      }).compile();

      monsterController = moduleRef.get<MonsterController>(MonsterController);
      monsterService = moduleRef.get<MonsterService>(MonsterService);
    });

    it('should return get all items', async () => {
      jest.spyOn(monsterService, 'getAll').mockResolvedValue(monstersMock);
      const result = await monsterController.getAll();
      expect(result).toStrictEqual(monstersMock);
    });
  });

  describe('create', () => {
    it('should create monster', async () => {
      jest.spyOn(monsterService, 'create').mockResolvedValue(monsterMock);
      const result = await monsterController.create(createMonsterDtoMock);
      expect(result).toStrictEqual(monsterMock);
    });

    it('should return bad request when monster with same name already exists', async () => {
      jest
        .spyOn(monsterService, 'create')
        .mockResolvedValue(MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME);
      const result = await monsterController.create(createMonsterDtoMock);
      expect(result).toStrictEqual(
        buildBadRequestResponse(MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME),
      );
    });
  });
});
