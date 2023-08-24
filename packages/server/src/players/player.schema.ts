import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { RequiredProp } from '../decorators/RequiredProp.decorator';
import { HydratedDocument } from 'mongoose';
import { ArrayOrEmpty, CountedArrayOrEmpty } from 'src/types';
import { getRelationManyProp, getRequiredProp } from 'src/utils';

export type PlayerDocument = HydratedDocument<Player>;

export interface Status {
  gold: number;
  level: number;
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
    }),
  )
  status: Status;

  @Prop(
    raw({
      equipped: [getRelationManyProp('Item')],
      bought: [getRelationManyProp('Item')],
    }),
  )
  inventory: Inventory;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);
