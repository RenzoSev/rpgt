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
  playerMock,
  playerServiceMock,
} from '../src/players/tests/player.mocks';
import { MonsterService } from '../src/monsters/monster.service';
import { ItemService } from '../src/items/item.service';
import { monsterServiceMock } from '../src/monsters/tests/monster.mock';
import { itemServiceMock } from '../src/items/tests/item.mock';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let mongod: MongoMemoryServer;

  beforeAll((done) => {
    done();
  });

  beforeEach(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot(uri),
        PlayerModule,
        ItemModule,
        MonsterModule,
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
    it('should /player (GET) without errors', () => {
      return request(app.getHttpServer())
        .get('/player')
        .expect(200)
        .expect(playerMock);
    });

    it('should /players (POST) without errors', () => {
      return request(app.getHttpServer())
        .post('/player')
        .expect(200)
        .expect(playerMock);
    });
  });
});
