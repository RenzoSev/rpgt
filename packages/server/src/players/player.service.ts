import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Player } from './player.schema';
import { Model } from 'mongoose';
import { GetPlayerDto } from './dto/get-player.dto';
import { CreatePlayerDto } from './dto/create-player.dto';
import { createNewInventory, createNewStatus } from './utils';
import {
  removeIdFromCreateMethod,
  removeIdFromFindMethod,
} from '../utils/services';

@Injectable()
export class PlayerService {
  constructor(@InjectModel(Player.name) private playerModel: Model<Player>) {}

  async get(getPlayerDto: GetPlayerDto): Promise<Player> {
    const player = await this.playerModel
      .findOne(getPlayerDto, removeIdFromFindMethod)
      .exec();
    return player;
  }

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const player = await this.playerModel.create({
      ...createPlayerDto,
      inventory: createNewInventory(),
      status: createNewStatus(),
    });
    return removeIdFromCreateMethod(player);
  }
}
