import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Monster } from './monster.schema';
import { Model } from 'mongoose';
import { GetMonsterDto } from './dto/get-monster.dto';
import { CreateMonsterDto } from './dto/create-monster.dto';

@Injectable()
export class MonsterService {
  constructor(
    @InjectModel(Monster.name) private monsterModel: Model<Monster>,
  ) {}

  async get(getMonsterDto: GetMonsterDto): Promise<Monster> {
    const monster = await this.monsterModel.findOne(getMonsterDto).exec();
    return monster;
  }

  async create(createMonsterDto: CreateMonsterDto): Promise<Monster> {
    const monster = await this.monsterModel.create(createMonsterDto);
    return monster;
  }
}
