import { Prop, PropOptions } from '@nestjs/mongoose';
import { getRelationManyProp } from '../utils';

export const RelationManyProp = (ref: string, options?: PropOptions) => {
  return Prop({
    required: true,
    type: [getRelationManyProp(ref)],
    ...(options as object),
  });
};
