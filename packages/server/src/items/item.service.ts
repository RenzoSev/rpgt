import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Item } from './item.schema';
import { Model } from 'mongoose';
import { GetItemDto } from './dto/get-item.dto';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemService {
  constructor(@InjectModel(Item.name) private itemModel: Model<Item>) {}

  async get(getItemDto: GetItemDto): Promise<Item> {
    const item = await this.itemModel.findOne(getItemDto).exec();
    return item;
  }

  async getAll(): Promise<Item[]> {
    const item = await this.itemModel.find().exec();
    return item;
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const item = await this.itemModel.create(createItemDto);
    return item;
  }
}
