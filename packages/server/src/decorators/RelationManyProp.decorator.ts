import { Prop, PropOptions } from '@nestjs/mongoose';
import { Schema } from 'mongoose';

export const RelationManyProp = (ref: string, options?: PropOptions) => {
  return Prop({
    required: true,
    type: [{ type: Schema.Types.ObjectId, ref }],
    ...(options as object),
  });
};
