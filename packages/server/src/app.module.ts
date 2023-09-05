import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './players/player.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemModule } from './items/item.module';
import { MonsterModule } from './monsters/monster.module';
import { ActionModule } from './actions/action.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mydb'),
    PlayerModule,
    ItemModule,
    MonsterModule,
    ActionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
