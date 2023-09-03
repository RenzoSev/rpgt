import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BuyItemDto } from './dto/buy-item.dto';
import { ActionService } from './action.service';
import { Item } from '../items/item.schema';
import { BadRequestResponse } from '../utils';

@Controller()
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Post('/actions/buy-item')
  @UsePipes(ValidationPipe)
  async buyItem(
    @Body() buyItemDto: BuyItemDto,
  ): Promise<Item | BadRequestResponse<string[]>> {
    const action = await this.actionService.buyItem(buyItemDto);
    return action;
  }
}
