import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Player, PlayerSchema } from '../players/player.schema';
import { PlayerService } from '../players/player.service';
import { MonsterService } from '../monsters/monster.service';
import { ItemService } from '../items/item.service';
import { Monster, MonsterSchema } from '../monsters/monster.schema';
import { Item, ItemSchema } from '../items/item.schema';
import { ActionController } from './action.controller';
import { PlayerAnalyzer } from '../players/player.analyzer';
import { ActionService } from './action.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Player.name, schema: PlayerSchema },
      { name: Monster.name, schema: MonsterSchema },
      { name: Item.name, schema: ItemSchema },
    ]),
  ],
  controllers: [ActionController],
  providers: [
    ActionService,
    PlayerService,
    MonsterService,
    ItemService,
    PlayerAnalyzer,
  ],
})
export class ActionModule {}
