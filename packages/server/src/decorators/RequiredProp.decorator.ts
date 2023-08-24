import { Prop, PropOptions } from '@nestjs/mongoose';

export const RequiredProp = (options?: PropOptions): PropertyDecorator => {
  return Prop({ required: true, ...(options as object) });
};
