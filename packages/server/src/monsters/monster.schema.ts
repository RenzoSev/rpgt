import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { RequiredProp } from '../decorators/RequiredProp.decorator';
import { HydratedDocument } from 'mongoose';

export type MonsterDocument = HydratedDocument<Monster>;

@Schema()
export class Monster {
  @RequiredProp()
  name: string;

  @RequiredProp()
  status: {
    attack: number;
    defense: number;
    level: number;
    xp: number;
  };
}

export const MonsterSchema = SchemaFactory.createForClass(Monster);
