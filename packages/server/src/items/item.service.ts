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

  // TODO: should not create an item with the same name
  async create(createItemDto: CreateItemDto): Promise<Item> {
    const item = await this.itemModel.create(createItemDto);
    return removeIdFromCreateMethod(item);
  }
}
