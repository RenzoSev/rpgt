import { PropOptions } from '@nestjs/mongoose';
import { Schema } from 'mongoose';

export interface BadRequestResponse<T = any> {
  message: T;
  error: 'Bad Request';
  statusError: 400;
}

export const getRelationManyProp = (ref: string): PropOptions => ({
  type: Schema.Types.String,
  ref,
  required: true,
});

export const getRequiredProp = (options: PropOptions): PropOptions => ({
  ...(options as object),
  required: true,
});

export const buildBadRequestResponse = <T = any>(
  message: T,
): BadRequestResponse<T> => ({
  error: 'Bad Request',
  message,
  statusError: 400,
});
