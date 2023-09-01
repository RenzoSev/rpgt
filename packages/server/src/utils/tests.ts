import { ArgumentMetadata, ValidationPipe } from '@nestjs/common';

export const genWord = (length: number) =>
  Array.from({ length }, () => 'a').join('');

export const getValidationPipeError = (error: string[]) => ({
  error: 'Bad Request',
  message: error,
  statusCode: 400,
});

export const runValidationTransform = async (
  validationPipe: ValidationPipe,
  {
    Dto,
    value,
    type,
  }: {
    Dto: ArgumentMetadata['metatype'];
    value: any;
    type: ArgumentMetadata['type'];
  },
) => {
  try {
    const args: [any, ArgumentMetadata] = [value, { type, metatype: Dto }];
    const result = await validationPipe.transform(...args);
    return result;
  } catch (e) {
    return e.getResponse();
  }
};

export const runValidationTransformBody = (
  validationPipe: ValidationPipe,
  {
    Dto,
    value,
  }: {
    Dto: ArgumentMetadata['metatype'];
    value: any;
  },
) => runValidationTransform(validationPipe, { Dto, value, type: 'body' });
