import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Monster, MonsterSchema } from './monster.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Monster.name, schema: MonsterSchema }]),
  ],
  controllers: [],
  providers: [],
})
export class MonsterModule {}
