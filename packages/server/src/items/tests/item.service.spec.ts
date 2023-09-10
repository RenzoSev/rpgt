import { Test, TestingModule } from '@nestjs/testing';
import { ItemService } from '../item.service';
import {
  createItemDtoMock,
  getItemDtoMock,
  itemMock,
  itemsMock,
} from './item.mock';
import { getModelToken } from '@nestjs/mongoose';
import { Item } from '../item.schema';
import { MESSAGES } from '../../utils/constants';
import { removeIdFromFindMethod } from '../../utils/services';

describe('ItemService', () => {
  let itemService: ItemService;
  let itemModel;

  beforeEach(async () => {
    itemModel = {
      find: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
    };

    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        ItemService,
        { provide: getModelToken(Item.name), useValue: itemModel },
      ],
    }).compile();
    itemService = moduleRef.get<ItemService>(ItemService);
  });

  describe('get', () => {
    it('should return get item', async () => {
      itemModel.findOne.mockReturnValue({
        exec: jest.fn().mockResolvedValue(itemMock),
      });
      const result = await itemService.get(getItemDtoMock);
      expect(itemModel.findOne).toBeCalledWith(
        getItemDtoMock,
        removeIdFromFindMethod,
      );
      expect(result).toStrictEqual(itemMock);
    });
  });

  describe('getAll', () => {
    beforeEach(async () => {
      itemModel = {
        find: jest.fn(),
        create: jest.fn(),
      };

      const moduleRef: TestingModule = await Test.createTestingModule({
        providers: [
          ItemService,
          { provide: getModelToken(Item.name), useValue: itemModel },
        ],
      }).compile();
      itemService = moduleRef.get<ItemService>(ItemService);
    });

    it('should return get all items', async () => {
      itemModel.find.mockReturnValue({
        exec: jest.fn().mockResolvedValue(itemsMock),
      });
      const result = await itemService.getAll();
      expect(itemModel.find).toBeCalledWith({}, removeIdFromFindMethod);
      expect(result).toStrictEqual(itemsMock);
    });
  });

  describe('create', () => {
    it('should create item', async () => {
      itemModel.findOne.mockReturnValue({
        exec: jest.fn().mockResolvedValue(null),
      });
      itemModel.create.mockResolvedValue({
        toObject: jest.fn().mockReturnValue(itemMock),
      });
      const result = await itemService.create(createItemDtoMock);
      expect(itemModel.findOne).toBeCalledWith({
        name: createItemDtoMock.name,
      });
      expect(itemModel.create).toBeCalledWith(createItemDtoMock);
      expect(result).toStrictEqual(itemMock);
    });

    it('should return message when item with same name already exists', async () => {
      itemModel.findOne.mockReturnValue({
        exec: jest.fn().mockResolvedValue(itemMock),
      });
      const result = await itemService.create(createItemDtoMock);
      expect(itemModel.findOne).toBeCalledWith({
        name: createItemDtoMock.name,
      });
      expect(result).toStrictEqual(MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME);
    });
  });
});
