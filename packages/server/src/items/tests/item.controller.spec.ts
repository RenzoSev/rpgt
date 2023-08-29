import { Test, TestingModule } from '@nestjs/testing';
import { ItemController } from '../item.controller';
import { ItemService } from '../item.service';
import { Item } from '../item.schema';
import {
  createItemDtoMock,
  getItemDtoMock,
  itemMock,
  itemsMock,
} from './item.mock';
import { getModelToken } from '@nestjs/mongoose';

describe('ItemController', () => {
  let itemController: ItemController;
  let itemService: ItemService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ItemController],
      providers: [
        ItemService,
        { provide: getModelToken(Item.name), useValue: itemMock },
      ],
    }).compile();

    itemController = moduleRef.get<ItemController>(ItemController);
    itemService = moduleRef.get<ItemService>(ItemService);
  });

  describe('get', () => {
    it('should return get item', async () => {
      jest.spyOn(itemService, 'get').mockResolvedValue(itemMock);
      const result = await itemController.get(getItemDtoMock);
      expect(result).toStrictEqual(itemMock);
    });
  });

  describe('getAll', () => {
    beforeEach(async () => {
      const moduleRef: TestingModule = await Test.createTestingModule({
        controllers: [ItemController],
        providers: [
          ItemService,
          { provide: getModelToken(Item.name), useValue: itemsMock },
        ],
      }).compile();

      itemController = moduleRef.get<ItemController>(ItemController);
      itemService = moduleRef.get<ItemService>(ItemService);
    });

    it('should return get all items', async () => {
      jest.spyOn(itemService, 'getAll').mockResolvedValue(itemsMock);
      const result = await itemController.getAll();
      expect(result).toStrictEqual(itemsMock);
    });
  });

  describe('create', () => {
    it('should create item', async () => {
      jest.spyOn(itemService, 'create').mockResolvedValue(itemMock);
      const result = await itemController.create(createItemDtoMock);
      expect(result).toStrictEqual(itemMock);
    });
  });
});
