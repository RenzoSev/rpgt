import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { RequiredProp } from '../decorators/RequiredProp.decorator';
import { HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;
export type AttackItemDocument = HydratedDocument<AttackItem>;
export type DefenseItemDocument = HydratedDocument<DefenseItem>;

@Schema()
export class Item {
  @RequiredProp()
  name: string;

  @RequiredProp()
  type: string;

  @RequiredProp()
  level: number;

  @RequiredProp()
  gold: number;
}

@Schema()
export class AttackItem extends Item {
  @RequiredProp()
  attack: number;
}

@Schema()
export class DefenseItem extends Item {
  @RequiredProp()
  defense: number;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
