import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { RelationManyProp } from '../decorators/RelationManyProp.decorator';
import { RequiredProp } from '../decorators/RequiredProp.decorator';
import { HydratedDocument } from 'mongoose';

export type PlayerDocument = HydratedDocument<Player>;

@Schema()
export class Player {
  @RequiredProp()
  name: string;

  @RequiredProp()
  class: string;

  @RequiredProp()
  status: {
    gold: number;
    level: number;
  };

  @RequiredProp()
  inventory: Inventory;
}

@Schema()
export class Inventory {
  @RelationManyProp('Item')
  equipped: [string, string];

  @RelationManyProp('Item')
  bought: string[];
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
