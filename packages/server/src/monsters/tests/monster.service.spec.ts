import { Test, TestingModule } from '@nestjs/testing';
import { MonsterService } from '../monster.service';
import {
  createMonsterDtoMock,
  getMonsterDtoMock,
  monsterMock,
  monstersMock,
} from './monster.mock';
import { getModelToken } from '@nestjs/mongoose';
import { Monster } from '../monster.schema';
import { MESSAGES } from '../../utils/constants';
import { removeIdFromFindMethod } from '../../utils/services';

describe('MonsterService', () => {
  let monsterService: MonsterService;
  let monsterModel;

  beforeEach(async () => {
    monsterModel = {
      findOne: jest.fn(),
      create: jest.fn(),
    };

    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        MonsterService,
        { provide: getModelToken(Monster.name), useValue: monsterModel },
      ],
    }).compile();
    monsterService = moduleRef.get<MonsterService>(MonsterService);
  });

  describe('get', () => {
    it('should return get monster', async () => {
      monsterModel.findOne.mockReturnValue({
        exec: jest.fn().mockResolvedValue(monsterMock),
      });
      const result = await monsterService.get(getMonsterDtoMock);
      expect(monsterModel.findOne).toBeCalledWith(
        getMonsterDtoMock,
        removeIdFromFindMethod,
      );
      expect(result).toStrictEqual(monsterMock);
    });
  });

  describe('getAll', () => {
    beforeEach(async () => {
      monsterModel = {
        find: jest.fn(),
        create: jest.fn(),
      };

      const moduleRef: TestingModule = await Test.createTestingModule({
        providers: [
          MonsterService,
          { provide: getModelToken(Monster.name), useValue: monsterModel },
        ],
      }).compile();
      monsterService = moduleRef.get<MonsterService>(MonsterService);
    });

    it('should return get all items', async () => {
      monsterModel.find.mockReturnValue({
        exec: jest.fn().mockResolvedValue(monstersMock),
      });
      const result = await monsterService.getAll();
      expect(monsterModel.find).toBeCalledWith({}, removeIdFromFindMethod);
      expect(result).toStrictEqual(monstersMock);
    });
  });

  describe('create', () => {
    it('should create monster', async () => {
      monsterModel.findOne.mockReturnValue({
        exec: jest.fn().mockResolvedValue(null),
      });
      monsterModel.create.mockResolvedValue({
        toObject: jest.fn().mockReturnValue(monsterMock),
      });
      const result = await monsterService.create(createMonsterDtoMock);
      expect(monsterModel.findOne).toBeCalledWith({
        name: createMonsterDtoMock.name,
      });
      expect(monsterModel.create).toBeCalledWith(createMonsterDtoMock);
      expect(result).toStrictEqual(monsterMock);
    });

    it('should return message when monster with same name already exists', async () => {
      monsterModel.findOne.mockReturnValue({
        exec: jest.fn().mockResolvedValue(monsterMock),
      });
      const result = await monsterService.create(createMonsterDtoMock);
      expect(monsterModel.findOne).toBeCalledWith({
        name: createMonsterDtoMock.name,
      });
      expect(result).toStrictEqual(MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME);
    });
  });
});
