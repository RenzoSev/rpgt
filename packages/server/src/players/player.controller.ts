import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayerService } from './player.service';
import { GetPlayerDto } from './dto/get-player.dto';
import { Player } from './player.schema';
import { CreatePlayerDto } from './dto/create-player.dto';

@Controller()
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get('/player')
  async get(@Body() getPlayerDto: GetPlayerDto): Promise<Player> {
    const player = await this.playerService.get(getPlayerDto);
    return player;
  }

  @Post('/player')
  async create(@Body() createPlayerDto: CreatePlayerDto): Promise<Player> {
    const player = await this.playerService.create(createPlayerDto);
    return player;
  }
}
