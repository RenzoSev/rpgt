import { ValidationPipe } from '@nestjs/common';
import {
  genWord,
  getValidationPipeError,
  runValidationTransformBody,
} from '../../utils/tests';
import { GetMonsterDto } from '../dto/get-monster.dto';
import { createMonsterDtoMock, getMonsterDtoMock } from './monster.mock';
import { CreateMonsterDto } from '../dto/create-monster.dto';

describe('Monster Dto', () => {
  let validationPipe: ValidationPipe;

  beforeEach(() => {
    validationPipe = new ValidationPipe({
      transform: true,
      whitelist: true,
    });
  });

  describe('GetMonsterDto', () => {
    it('should pass validation with valid body', async () => {
      const result = await runValidationTransformBody(validationPipe, {
        Dto: GetMonsterDto,
        value: getMonsterDtoMock,
      });
      expect(result).toEqual(getMonsterDtoMock);
    });

    describe('name', () => {
      it('should throw an error when length < 4', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: GetMonsterDto,
          value: { name: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'name must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: GetMonsterDto,
          value: { name: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'name must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: GetMonsterDto,
          value: { name: Number() },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'name must be a string',
            'name must be longer than or equal to 4 characters',
          ]),
        );
      });
    });
  });

  describe('CreateMonsterDto', () => {
    it('should pass validation with valid body', async () => {
      const result = await runValidationTransformBody(validationPipe, {
        Dto: CreateMonsterDto,
        value: createMonsterDtoMock,
      });
      expect(result).toEqual(createMonsterDtoMock);
    });

    describe('name', () => {
      it('should throw an error when length < 4', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: CreateMonsterDto,
          value: { ...createMonsterDtoMock, name: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'name must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: CreateMonsterDto,
          value: { ...createMonsterDtoMock, name: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'name must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: CreateMonsterDto,
          value: { ...createMonsterDtoMock, name: Number() },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'name must be a string',
            'name must be longer than or equal to 4 characters',
          ]),
        );
      });
    });

    describe('status', () => {
      describe('attack', () => {
        it('should throw an error when < 1', async () => {
          const result = await runValidationTransformBody(validationPipe, {
            Dto: CreateMonsterDto,
            value: {
              ...createMonsterDtoMock,
              status: { ...createMonsterDtoMock.status, attack: 0 },
            },
          });
          expect(result).toEqual(
            getValidationPipeError(['status.attack must not be less than 1']),
          );
        });

        it('should throw an error when > 999', async () => {
          const result = await runValidationTransformBody(validationPipe, {
            Dto: CreateMonsterDto,
            value: {
              ...createMonsterDtoMock,
              status: { ...createMonsterDtoMock.status, attack: 1000 },
            },
          });
          expect(result).toEqual(
            getValidationPipeError([
              'status.attack must not be greater than 999',
            ]),
          );
        });

        it('should throw an error when it is not number', async () => {
          const result = await runValidationTransformBody(validationPipe, {
            Dto: CreateMonsterDto,
            value: {
              ...createMonsterDtoMock,
              status: { ...createMonsterDtoMock.status, attack: String() },
            },
          });
          expect(result).toEqual(
            getValidationPipeError([
              'status.attack must not be greater than 999',
              'status.attack must not be less than 1',
              'status.attack must be a number conforming to the specified constraints',
              'status.attack should not be empty',
            ]),
          );
        });
      });

      describe('defense', () => {
        it('should throw an error when < 1', async () => {
          const result = await runValidationTransformBody(validationPipe, {
            Dto: CreateMonsterDto,
            value: {
              ...createMonsterDtoMock,
              status: { ...createMonsterDtoMock.status, defense: 0 },
            },
          });
          expect(result).toEqual(
            getValidationPipeError(['status.defense must not be less than 1']),
          );
        });

        it('should throw an error when > 999', async () => {
          const result = await runValidationTransformBody(validationPipe, {
            Dto: CreateMonsterDto,
            value: {
              ...createMonsterDtoMock,
              status: {
                ...createMonsterDtoMock.status,
                defense: 1000,
              },
            },
          });
          expect(result).toEqual(
            getValidationPipeError([
              'status.defense must not be greater than 999',
            ]),
          );
        });

        it('should throw an error when it is not number', async () => {
          const result = await runValidationTransformBody(validationPipe, {
            Dto: CreateMonsterDto,
            value: {
              ...createMonsterDtoMock,
              status: {
                ...createMonsterDtoMock.status,
                defense: String(),
              },
            },
          });
          expect(result).toEqual(
            getValidationPipeError([
              'status.defense must not be greater than 999',
              'status.defense must not be less than 1',
              'status.defense must be a number conforming to the specified constraints',
              'status.defense should not be empty',
            ]),
          );
        });
      });

      describe('level', () => {
        it('should throw an error when < 1', async () => {
          const result = await runValidationTransformBody(validationPipe, {
            Dto: CreateMonsterDto,
            value: {
              ...createMonsterDtoMock,
              status: { ...createMonsterDtoMock.status, level: 0 },
            },
          });
          expect(result).toEqual(
            getValidationPipeError(['status.level must not be less than 1']),
          );
        });

        it('should throw an error when > 999', async () => {
          const result = await runValidationTransformBody(validationPipe, {
            Dto: CreateMonsterDto,
            value: {
              ...createMonsterDtoMock,
              status: {
                ...createMonsterDtoMock.status,
                level: 1000,
              },
            },
          });
          expect(result).toEqual(
            getValidationPipeError([
              'status.level must not be greater than 999',
            ]),
          );
        });

        it('should throw an error when it is not number', async () => {
          const result = await runValidationTransformBody(validationPipe, {
            Dto: CreateMonsterDto,
            value: {
              ...createMonsterDtoMock,
              status: {
                ...createMonsterDtoMock.status,
                level: String(),
              },
            },
          });
          expect(result).toEqual(
            getValidationPipeError([
              'status.level must not be greater than 999',
              'status.level must not be less than 1',
              'status.level must be a number conforming to the specified constraints',
              'status.level should not be empty',
            ]),
          );
        });
      });

      describe('xp', () => {
        it('should throw an error when < 1', async () => {
          const result = await runValidationTransformBody(validationPipe, {
            Dto: CreateMonsterDto,
            value: {
              ...createMonsterDtoMock,
              status: { ...createMonsterDtoMock.status, xp: 0 },
            },
          });
          expect(result).toEqual(
            getValidationPipeError(['status.xp must not be less than 1']),
          );
        });

        it('should throw an error when > 999', async () => {
          const result = await runValidationTransformBody(validationPipe, {
            Dto: CreateMonsterDto,
            value: {
              ...createMonsterDtoMock,
              status: {
                ...createMonsterDtoMock.status,
                xp: 1000,
              },
            },
          });
          expect(result).toEqual(
            getValidationPipeError(['status.xp must not be greater than 999']),
          );
        });

        it('should throw an error when it is not number', async () => {
          const result = await runValidationTransformBody(validationPipe, {
            Dto: CreateMonsterDto,
            value: {
              ...createMonsterDtoMock,
              status: {
                ...createMonsterDtoMock.status,
                xp: String(),
              },
            },
          });
          expect(result).toEqual(
            getValidationPipeError([
              'status.xp must not be greater than 999',
              'status.xp must not be less than 1',
              'status.xp must be a number conforming to the specified constraints',
              'status.xp should not be empty',
            ]),
          );
        });
      });
    });
  });
});
