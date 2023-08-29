import { Test, TestingModule } from '@nestjs/testing';
import { MonsterController } from '../monster.controller';
import { MonsterService } from '../monster.service';
import { Monster } from '../monster.schema';
import {
  createMonsterDtoMock,
  getMonsterDtoMock,
  monsterMock,
} from './monster.mock';
import { getModelToken } from '@nestjs/mongoose';

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

  describe('create', () => {
    it('should create monster', async () => {
      jest.spyOn(monsterService, 'create').mockResolvedValue(monsterMock);
      const result = await monsterController.create(createMonsterDtoMock);
      expect(result).toStrictEqual(monsterMock);
    });
  });
});
