import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { RelationManyProp } from '../decorators/RelationManyProp.decorator';
import { RequiredProp } from '../decorators/RequiredProp.decorator';
import { HydratedDocument } from 'mongoose';
import { ArrayOrEmpty, CountedArrayOrEmpty } from 'src/types';

export type PlayerDocument = HydratedDocument<Player>;

@Schema()
export class Status {
  @RequiredProp()
  gold: number;

  @RequiredProp()
  level: number;
}

@Schema()
export class Inventory {
  @RelationManyProp('Item')
  equipped: CountedArrayOrEmpty<string>;

  @RelationManyProp('Item')
  bought: ArrayOrEmpty<string>;
}

@Schema()
export class Player {
  @RequiredProp()
  name: string;

  @RequiredProp()
  class: string;

  @RequiredProp()
  status: Status;

  @RequiredProp()
  inventory: Inventory;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
