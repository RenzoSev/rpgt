import { Test, TestingModule } from '@nestjs/testing';
import { MonsterService } from '../monster.service';
import {
  createMonsterDtoMock,
  getMonsterDtoMock,
  monsterMock,
} from './monster.mock';
import { getModelToken } from '@nestjs/mongoose';
import { Monster } from '../monster.schema';

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
    createMonsterDtoMock;
    it('should return get monster', async () => {
      monsterModel.findOne.mockReturnValue({
        exec: jest.fn().mockResolvedValue(monsterMock),
      });
      const result = await monsterService.get(getMonsterDtoMock);
      expect(result).toBe(monsterMock);
    });
  });

  describe('create', () => {
    it('should create monster', async () => {
      monsterModel.create.mockReturnValue(monsterMock);
      const result = await monsterService.create(createMonsterDtoMock);
      expect(result).toBe(monsterMock);
    });
  });
});
