import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayerModule } from '../src/players/player.module';
import { ItemModule } from '../src/items/item.module';
import { MonsterModule } from '../src/monsters/monster.module';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';
import { PlayerService } from '../src/players/player.service';
import {
  createPlayerDtoMock,
  createPlayerErrorMessageForInvalidBody,
  getPlayerErrorMessageForInvalidBody,
  playerMock,
  playerServiceMock,
} from '../src/players/tests/player.mocks';
import { MonsterService } from '../src/monsters/monster.service';
import { ItemService } from '../src/items/item.service';
import {
  createMonsterDtoMock,
  createMonsterErrorMessageForInvalidBody,
  getMonsterErrorMessageForInvalidBody,
  monsterMock,
  monsterServiceMock,
} from '../src/monsters/tests/monster.mock';
import {
  createItemDtoMock,
  createItemErrorMessageForInvalidBody,
  itemMock,
  itemServiceMock,
  itemsMock,
} from '../src/items/tests/item.mock';
import { getValidationPipeError } from '../src/utils/tests';
import { ActionModule } from '../src/actions/action.module';
import { ActionService } from '../src/actions/action.service';
import {
  actionServiceMock,
  buyItemDtoMock,
  buyItemErrorMessageForInvalidBody,
  equipItemDtoMock,
  equipItemErrorMessageForInvalidBody,
  fightMonsterDtoMock,
  fightMonsterErrorMessageForInvalidBody,
} from '../src/actions/tests/action.mock';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let mongod: MongoMemoryServer;

  beforeEach(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(uri),
        PlayerModule,
        ItemModule,
        MonsterModule,
        ActionModule,
      ],
      controllers: [AppController],
      providers: [AppService],
    })
      .overrideProvider(PlayerService)
      .useValue(playerServiceMock)
      .overrideProvider(MonsterService)
      .useValue(monsterServiceMock)
      .overrideProvider(ItemService)
      .useValue(itemServiceMock)
      .overrideProvider(ActionService)
      .useValue(actionServiceMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
    await mongod.stop();
  });

  describe('App', () => {
    it('should / (GET) without errors', () => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Hello World!');
    });
  });

  describe('Player', () => {
    describe('OK', () => {
      it('should /player (GET) without errors', () => {
        return request(app.getHttpServer())
          .get('/player/playerName')
          .expect(200)
          .expect(playerMock);
      });

      it('should /player (POST) without errors', () => {
        return request(app.getHttpServer())
          .post('/player')
          .send(createPlayerDtoMock)
          .expect(201)
          .expect(playerMock);
      });
    });

    describe('ERROR', () => {
      it('should /player (GET) with error when param route is invalid', () => {
        return request(app.getHttpServer())
          .get('/player/1')
          .expect(400)
          .expect(getValidationPipeError(getPlayerErrorMessageForInvalidBody));
      });

      it('should /player (POST) with error when body is invalid', () => {
        return request(app.getHttpServer())
          .post('/player')
          .expect(400)
          .expect(
            getValidationPipeError(createPlayerErrorMessageForInvalidBody),
          );
      });
    });
  });

  describe('Monster', () => {
    describe('OK', () => {
      it('should /monster (GET) without errors', () => {
        return request(app.getHttpServer())
          .get('/monster/monsterName')
          .expect(200)
          .expect(monsterMock);
      });

      it('should /monster (POST) without errors', () => {
        return request(app.getHttpServer())
          .post('/monster')
          .send(createMonsterDtoMock)
          .expect(201)
          .expect(monsterMock);
      });
    });

    describe('ERROR', () => {
      it('should /monster (GET) with error when body is invalid', () => {
        return request(app.getHttpServer())
          .get('/monster/a')
          .expect(400)
          .expect(getValidationPipeError(getMonsterErrorMessageForInvalidBody));
      });

      it('should /monster (POST) with error when body is invalid', () => {
        return request(app.getHttpServer())
          .post('/monster')
          .expect(400)
          .expect(
            getValidationPipeError(createMonsterErrorMessageForInvalidBody),
          );
      });
    });
  });

  describe('Item', () => {
    describe('OK', () => {
      it('should /item (GET) without errors', () => {
        return request(app.getHttpServer())
          .get('/item/itemName')
          .expect(200)
          .expect(itemMock);
      });

      it('should /items (GET) without errors', () => {
        return request(app.getHttpServer())
          .get('/items')
          .expect(200)
          .expect(itemsMock);
      });

      it('should /item (POST) without errors', () => {
        return request(app.getHttpServer())
          .post('/item')
          .send(createItemDtoMock)
          .expect(201)
          .expect(itemMock);
      });
    });

    describe('ERROR', () => {
      it('should / (POST) with error when body is invalid', () => {
        return request(app.getHttpServer())
          .post('/item')
          .expect(400)
          .expect(getValidationPipeError(createItemErrorMessageForInvalidBody));
      });
    });
  });

  describe('Action', () => {
    describe('OK', () => {
      it('should /actions/buy-item (PATCH) without errors', () => {
        return request(app.getHttpServer())
          .patch('/actions/buy-item')
          .send(buyItemDtoMock)
          .expect(200)
          .expect(playerMock);
      });

      it('should /actions/fight-monster (PATCH) without errors', () => {
        return request(app.getHttpServer())
          .patch('/actions/fight-monster')
          .send(fightMonsterDtoMock)
          .expect(200)
          .expect(playerMock);
      });

      it('should /actions/equip-item (PATCH) without errors', () => {
        return request(app.getHttpServer())
          .patch('/actions/equip-item')
          .send(equipItemDtoMock)
          .expect(200)
          .expect(playerMock);
      });
    });

    describe('ERROR', () => {
      it('should /actions/buy-item (PATCH) with error when body is invalid', () => {
        return request(app.getHttpServer())
          .patch('/actions/buy-item')
          .send({})
          .expect(400)
          .expect(getValidationPipeError(buyItemErrorMessageForInvalidBody));
      });

      it('should /actions/fight-monster (PATCH) with error when body is invalid', () => {
        return request(app.getHttpServer())
          .patch('/actions/fight-monster')
          .send({})
          .expect(400)
          .expect(
            getValidationPipeError(fightMonsterErrorMessageForInvalidBody),
          );
      });

      it('should /actions/equip-item (PATCH) with error when body is invalid', () => {
        return request(app.getHttpServer())
          .patch('/actions/equip-item')
          .send({})
          .expect(400)
          .expect(getValidationPipeError(equipItemErrorMessageForInvalidBody));
      });
    });
  });
});
