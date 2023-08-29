import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Monster, MonsterSchema } from './monster.schema';
import { MonsterController } from './monster.controller';
import { MonsterService } from './monster.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Monster.name, schema: MonsterSchema }]),
  ],
  controllers: [MonsterController],
  providers: [MonsterService],
})
export class MonsterModule {}
