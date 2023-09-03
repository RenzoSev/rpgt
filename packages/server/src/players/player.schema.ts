import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { RequiredProp } from '../decorators/RequiredProp.decorator';
import { HydratedDocument } from 'mongoose';
import { ArrayOrEmpty, CountedArrayOrEmpty } from '../types';
import { getRelationManyProp, getRequiredProp } from '../utils';

export type PlayerDocument = HydratedDocument<Player>;

export interface Status {
  gold: number;
  level: number;
  attack: number;
  defense: number;
}

export interface Inventory {
  equipped: CountedArrayOrEmpty<string>;
  bought: ArrayOrEmpty<string>;
}

@Schema()
export class Player {
  @RequiredProp()
  name: string;

  @RequiredProp()
  class: string;

  @Prop(
    raw({
      gold: getRequiredProp({ type: Number }),
      level: getRequiredProp({ type: Number }),
      attack: getRequiredProp({ type: Number }),
      defense: getRequiredProp({ type: Number }),
    }),
  )
  status: Status;

  @Prop(
    raw({
      bought: [getRelationManyProp('Item')],
      equipped: [getRelationManyProp('Item')],
    }),
  )
  inventory: Inventory;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
