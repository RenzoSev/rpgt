import { Body, Controller, Get, Post } from '@nestjs/common';
import { MonsterService } from './monster.service';
import { GetMonsterDto } from './dto/get-monster.dto';
import { Monster } from './monster.schema';
import { CreateMonsterDto } from './dto/create-monster.dto';

@Controller()
export class MonsterController {
  constructor(private readonly monsterService: MonsterService) {}

  @Get('/monster')
  async get(@Body() getMonsterDto: GetMonsterDto): Promise<Monster> {
    const monster = await this.monsterService.get(getMonsterDto);
    return monster;
  }

  @Post('/monster')
  async create(@Body() createMonsterDto: CreateMonsterDto): Promise<Monster> {
    const monster = await this.monsterService.create(createMonsterDto);
    return monster;
  }
}
