import { Injectable } from '@nestjs/common';
import { ItemService } from '../items/item.service';
import { MonsterService } from '../monsters/monster.service';
import { PlayerService } from '../players/player.service';
import { BuyItemDto } from './dto/buy-item.dto';
import { Item } from 'src/items/item.schema';
import { PlayerAnalyzer } from '../players/player.analyzer';
import { BadRequestResponse, buildBadRequestResponse } from '../utils';

@Injectable()
export class ActionService {
  constructor(
    private readonly playerService: PlayerService,
    private readonly itemService: ItemService,
    private readonly monsterService: MonsterService,
    private readonly playerAnalyzer: PlayerAnalyzer,
  ) {}

  async buyItem({
    itemName,
    playerName,
  }: BuyItemDto): Promise<Item | BadRequestResponse<string[]>> {
    const [player, item] = await Promise.all([
      this.playerService.get({ name: playerName }),
      this.itemService.get({ name: itemName }),
    ]);

    const checkResult = this.playerAnalyzer.playerBuyItem(player, item);

    if (checkResult.length) return buildBadRequestResponse(checkResult);
    return item;
  }
}
