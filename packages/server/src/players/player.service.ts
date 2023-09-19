import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Player } from './player.schema';
import { Model } from 'mongoose';
import { GetPlayerDto } from './dto/get-player.dto';
import { CreatePlayerDto } from './dto/create-player.dto';
import { createNewInventory, createNewStatus } from './utils/database';
import {
  removeIdFromCreateMethod,
  removeIdFromFindMethod,
} from '../utils/services';
import { UpdateBoughtItemsDto } from './dto/update-bought-items.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { UpdateEquippedItemDto } from './dto/update-equipped-item-dto';
import { MESSAGES } from '../utils/constants';
import { UpdateGoldDto } from './dto/update-gold.dto';
import { UpdateIncStatusDto } from './dto/update-inc-status.dto';

@Injectable()
export class PlayerService {
  constructor(@InjectModel(Player.name) private playerModel: Model<Player>) {}

  async get(getPlayerDto: GetPlayerDto): Promise<Player> {
    const player = await this.playerModel
      .findOne(getPlayerDto, removeIdFromFindMethod)
      .exec();
    return player;
  }

  async create(
    createPlayerDto: CreatePlayerDto,
  ): Promise<Player | MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME> {
    const hasPlayer = await this.playerModel
      .findOne({
        name: createPlayerDto.name,
      })
      .exec();
    if (hasPlayer) return MESSAGES.HAS_DOCUMENT_WITH_SAME_NAME;

    const player = await this.playerModel.create({
      ...createPlayerDto,
      inventory: createNewInventory(),
      status: createNewStatus(),
    });
    return removeIdFromCreateMethod(player);
  }

  async updateBoughtItems({
    playerName,
    items,
    gold,
  }: UpdateBoughtItemsDto): Promise<Player> {
    const player = await this.playerModel.findOneAndUpdate(
      {
        name: playerName,
      },
      {
        $push: {
          'inventory.bought': {
            $each: items,
          },
        },

        $inc: {
          'status.gold': -gold,
        },
      },
      { new: true, projection: { _id: 0 } },
    );
    return player;
  }

  async updateLevel({ playerName, xp }: UpdateLevelDto): Promise<Player> {
    const player = await this.playerModel.findOneAndUpdate(
      {
        name: playerName,
      },
      {
        $inc: {
          'status.level': xp,
        },
      },
      { new: true, projection: { _id: 0 } },
    );

    return player;
  }

  async updateGold({
    playerName,
    gold,
    action,
  }: UpdateGoldDto): Promise<Player> {
    const player = await this.playerModel.findOneAndUpdate(
      {
        name: playerName,
      },
      {
        $inc: {
          'status.gold': action === 'add' ? gold : -gold,
        },
      },
      { new: true, projection: { _id: 0 } },
    );

    return player;
  }

  async updateIncStatus({
    level,
    gold,
    playerName,
  }: UpdateIncStatusDto): Promise<Player> {
    const getStatusModelKey = (status: string) => `status.${status}`;
    const statusToInc = {};
    for (const [statusKey, statusValue] of Object.entries({ level, gold })) {
      if (typeof statusValue === 'number') {
        statusToInc[getStatusModelKey(statusKey)] = statusValue;
      }
    }

    const player = await this.playerModel.findOneAndUpdate(
      {
        name: playerName,
      },
      {
        $inc: { ...statusToInc },
      },
      { new: true, projection: { _id: 0 } },
    );

    return player;
  }

  async updateAttackEquippedItem({
    playerName,
    itemName,
    powerValue,
  }: UpdateEquippedItemDto): Promise<Player> {
    const player = await this.playerModel.findOneAndUpdate(
      {
        name: playerName,
      },
      {
        $set: {
          'inventory.equipped.0': itemName,
          'status.attack': powerValue,
        },
      },
      { new: true, projection: { _id: 0 } },
    );
    return player;
  }

  async updateDefenseEquippedItem({
    playerName,
    itemName,
    powerValue,
  }: UpdateEquippedItemDto): Promise<Player> {
    const player = await this.playerModel.findOneAndUpdate(
      {
        name: playerName,
      },
      {
        $set: {
          'inventory.equipped.1': itemName,
          'status.defense': powerValue,
        },
      },
      { new: true, projection: { _id: 0 } },
    );
    return player;
  }
}
