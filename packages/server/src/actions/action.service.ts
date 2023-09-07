import { Injectable } from '@nestjs/common';
import { ItemService } from '../items/item.service';
import { MonsterService } from '../monsters/monster.service';
import { PlayerService } from '../players/player.service';
import { BuyItemDto } from './dto/buy-item.dto';
import { PlayerAnalyzer } from '../players/player.analyzer';
import { BadRequestResponse, buildBadRequestResponse } from '../utils';
import { FightMonsterDto } from './dto/fight-monster.dto';
import { Player } from 'src/players/player.schema';

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
  }: BuyItemDto): Promise<Player | BadRequestResponse<string[]>> {
    const [player, item] = await Promise.all([
      this.playerService.get({ name: playerName }),
      this.itemService.get({ name: itemName }),
    ]);

    const checkResult = this.playerAnalyzer.playerBuyItem(player, item);
    if (checkResult.length) return buildBadRequestResponse(checkResult);

    // TODO: CANT BUY THE SAME ITEM TWICE
    const playerUpdated = await this.playerService.updateBoughtItems({
      items: [itemName],
      playerName: player.name,
    });

    return playerUpdated;
  }

  async fightMonster({
    playerName,
    monsterName,
  }: FightMonsterDto): Promise<Player | BadRequestResponse<string[]>> {
    const [player, monster] = await Promise.all([
      this.playerService.get({ name: playerName }),
      this.monsterService.get({ name: monsterName }),
    ]);

    const checkResult = this.playerAnalyzer.playerFightMonster(player, monster);
    if (checkResult.length) return buildBadRequestResponse(checkResult);

    const playerUpdated = await this.playerService.updateLevel({
      xp: monster.status.xp,
      playerName: player.name,
    });

    return playerUpdated;
  }
}
