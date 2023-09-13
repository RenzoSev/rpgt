import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MonsterService } from './monster.service';
import { GetMonsterDto } from './dto/get-monster.dto';
import { Monster } from './monster.schema';
import { CreateMonsterDto } from './dto/create-monster.dto';
import { BadRequestResponse, buildBadRequestResponse } from '../utils';
import { MESSAGES } from '../utils/constants';

@Controller()
export class MonsterController {
  constructor(private readonly monsterService: MonsterService) {}

  @Get('monster/:name')
  @UsePipes(ValidationPipe)
  async get(@Param() getMonsterDto: GetMonsterDto): Promise<Monster> {
    const monster = await this.monsterService.get(getMonsterDto);
    return monster;
  }

  @Get('monsters')
  async getAll(): Promise<Monster[]> {
    const monster = await this.monsterService.getAll();
    return monster;
  }

  @Post('monster')
  @UsePipes(ValidationPipe)
  async create(
    @Body() createMonsterDto: CreateMonsterDto,
  ): Promise<
    Monster | BadRequestResponse<MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME>
  > {
    const monster = await this.monsterService.create(createMonsterDto);
    if (typeof monster === 'string') return buildBadRequestResponse(monster);
    return monster;
  }
}
