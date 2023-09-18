import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './item.schema';
import { Model } from 'mongoose';
import { GetItemDto } from './dto/get-item.dto';
import { CreateItemDto } from './dto/create-item.dto';
import {
  removeIdFromCreateMethod,
  removeIdFromFindMethod,
} from '../utils/services';
import { MESSAGES } from '../utils/constants';

@Injectable()
export class ItemService {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}

  async get(getItemDto: GetItemDto): Promise<Item> {
    const item = await this.itemModel
      .findOne(getItemDto, removeIdFromFindMethod)
      .exec();
    return item;
  }

  async getAll(): Promise<Item[]> {
    const item = await this.itemModel.find({}, removeIdFromFindMethod).exec();
    return item;
  }

  async create(
    createItemDto: CreateItemDto,
  ): Promise<Item | MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME> {
    const hasItem = await this.itemModel
      .findOne({
        name: createItemDto.name,
      })
      .exec();
    if (hasItem) return MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME;

    const item = await this.itemModel.create(createItemDto);
    return removeIdFromCreateMethod(item);
  }
}
