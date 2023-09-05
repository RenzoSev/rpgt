import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BuyItemDto } from './dto/buy-item.dto';
import { ActionService } from './action.service';
import { BadRequestResponse } from '../utils';
import { Player } from 'src/players/player.schema';
import { FightMonsterDto } from './dto/fight-monster.dto';

@Controller()
export class ActionController {
  constructor(private readonly actionService: ActionService) {}

  @Post('/actions/buy-item')
  @UsePipes(ValidationPipe)
  async buyItem(
    @Body() buyItemDto: BuyItemDto,
  ): Promise<Player | BadRequestResponse<string[]>> {
    const action = await this.actionService.buyItem(buyItemDto);
    return action;
  }

  @Post('/actions/fight-monster')
  @UsePipes(ValidationPipe)
  async fightMonster(
    @Body() fightMonsterDto: FightMonsterDto,
  ): Promise<Player | BadRequestResponse<string[]>> {
    const action = await this.actionService.fightMonster(fightMonsterDto);
    return action;
  }
}
