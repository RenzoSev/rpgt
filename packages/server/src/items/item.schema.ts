import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RequiredProp } from '../decorators/RequiredProp.decorator';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;
export type ItemTypes = 'weapon' | 'shield';

@Schema()
export class Item {
  @RequiredProp()
  name: string;

  @RequiredProp()
  type: ItemTypes;

  @RequiredProp()
  level: number;

  @RequiredProp()
  gold: number;

  @Prop()
  attack?: number;

  @Prop()
  defense?: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
