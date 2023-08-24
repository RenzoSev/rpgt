import { PropOptions } from '@nestjs/mongoose';
import { Schema } from 'mongoose';

export const getRelationManyProp = (ref: string): PropOptions => ({
  type: Schema.Types.ObjectId,
  ref,
  required: true,
});

export const getRequiredProp = (options: PropOptions): PropOptions => ({
  ...(options as object),
  required: true,
});
