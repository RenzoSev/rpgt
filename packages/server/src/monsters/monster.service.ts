import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Monster } from './monster.schema';
import { Model } from 'mongoose';
import { GetMonsterDto } from './dto/get-monster.dto';
import { CreateMonsterDto } from './dto/create-monster.dto';
import {
  removeIdFromCreateMethod,
  removeIdFromFindMethod,
} from '../utils/services';
import { MESSAGES } from '../utils/constants';

@Injectable()
export class MonsterService {
  constructor(
    @InjectModel(Monster.name) private monsterModel: Model<Monster>,
  ) {}

  async get(getMonsterDto: GetMonsterDto): Promise<Monster> {
    const monster = await this.monsterModel
      .findOne(getMonsterDto, removeIdFromFindMethod)
      .exec();
    return monster;
  }

  async getAll(): Promise<Monster[]> {
    const item = await this.monsterModel
      .find({}, removeIdFromFindMethod)
      .exec();
    return item;
  }

  async create(
    createMonsterDto: CreateMonsterDto,
  ): Promise<Monster | MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME> {
    const hasMonster = await this.monsterModel
      .findOne({
        name: createMonsterDto.name,
      })
      .exec();
    if (hasMonster) return MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME;

    const monster = await this.monsterModel.create(createMonsterDto);
    return removeIdFromCreateMethod(monster);
  }
}
