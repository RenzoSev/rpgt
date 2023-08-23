import { Prop, PropOptions } from '@nestjs/mongoose';

export const RequiredProp = (options?: PropOptions) => {
  return Prop({ required: true, ...(options as object) });
};
