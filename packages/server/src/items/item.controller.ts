import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { GetItemDto } from './dto/get-item.dto';
import { Item } from './item.schema';
import { CreateItemDto } from './dto/create-item.dto';
import { BadRequestResponse, buildBadRequestResponse } from '../utils';
import { MESSAGES } from '../utils/constants';

@Controller('')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get('/item/:name')
  @UsePipes(ValidationPipe)
  async get(@Param() getItemDto: GetItemDto): Promise<Item> {
    const item = await this.itemService.get(getItemDto);
    return item;
  }

  @Get('/items')
  async getAll(): Promise<Item[]> {
    const item = await this.itemService.getAll();
    return item;
  }

  @Post('/item')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createItemDto: CreateItemDto,
  ): Promise<Item | BadRequestResponse<MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME>> {
    const item = await this.itemService.create(createItemDto);
    if (typeof item === 'string') return buildBadRequestResponse(item);
    return item;
  }
}
