import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { RequiredProp } from '../decorators/RequiredProp.decorator';
import { HydratedDocument } from 'mongoose';
import { getRequiredProp } from '../utils';

export type MonsterDocument = HydratedDocument<Monster>;

export interface Status {
  attack: number;
  defense: number;
  level: number;
  xp: number;
}

@Schema()
export class Monster {
  @RequiredProp()
  name: string;

  @Prop(
    raw({
      attack: getRequiredProp({ type: Number }),
      defense: getRequiredProp({ type: Number }),
      level: getRequiredProp({ type: Number }),
      xp: getRequiredProp({ type: Number }),
    }),
  )
  status: Status;
}

export const MonsterSchema = SchemaFactory.createForClass(Monster);
