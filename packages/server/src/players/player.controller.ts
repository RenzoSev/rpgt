import {
  Body,
  Param,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PlayerService } from './player.service';
import { GetPlayerDto } from './dto/get-player.dto';
import { Player } from './player.schema';
import { CreatePlayerDto } from './dto/create-player.dto';
import { BadRequestResponse, buildBadRequestResponse } from '../utils';
import { MESSAGES } from '../utils/constants';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get(':name')
  @UsePipes(ValidationPipe)
  async get(@Param() getPlayerDto: GetPlayerDto): Promise<Player> {
    const player = await this.playerService.get(getPlayerDto);
    return player;
  }

  @Post()
  @UsePipes(ValidationPipe)
  async create(
    @Body() createPlayerDto: CreatePlayerDto,
  ): Promise<
    Player | BadRequestResponse<MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME>
  > {
    const player = await this.playerService.create(createPlayerDto);
    if (typeof player === 'string') return buildBadRequestResponse(player);
    return player;
  }
}
