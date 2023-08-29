import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemService } from './item.service';
import { GetItemDto } from './dto/get-item.dto';
import { Item } from './item.schema';
import { CreateItemDto } from './dto/create-item.dto';

@Controller()
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get('/item')
  async get(@Body() getItemDto: GetItemDto): Promise<Item> {
    const item = await this.itemService.get(getItemDto);
    return item;
  }

  @Get('/items')
  async getAll(): Promise<Item[]> {
    const item = await this.itemService.getAll();
    return item;
  }

  @Post('/item')
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    const item = await this.itemService.create(createItemDto);
    return item;
  }
}