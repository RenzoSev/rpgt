import { ValidationPipe } from '@nestjs/common';
import { GetPlayerDto } from '../dto/get-player.dto';
import { createPlayerDtoMock, getPlayerDtoMock } from './player.mocks';
import {
  genWord,
  getValidationPipeError,
  runValidationTransformBody,
} from '../../utils/tests';
import { CreatePlayerDto } from '../dto/create-player.dto';

describe('Player Dto', () => {
  let validationPipe: ValidationPipe;

  beforeEach(() => {
    validationPipe = new ValidationPipe({
      transform: true,
      whitelist: true,
    });
  });

  describe('GetPlayerDto', () => {
    it('should pass validation with valid body', async () => {
      const result = await runValidationTransformBody(validationPipe, {
        Dto: GetPlayerDto,
        value: getPlayerDtoMock,
      });
      expect(result).toEqual(getPlayerDtoMock);
    });

    describe('name', () => {
      it('should throw an error when length < 4', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: GetPlayerDto,
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
          Dto: GetPlayerDto,
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
          Dto: GetPlayerDto,
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

  describe('CreatePlayerDto', () => {
    it('should pass validation with valid body', async () => {
      const result = await runValidationTransformBody(validationPipe, {
        Dto: CreatePlayerDto,
        value: createPlayerDtoMock,
      });
      expect(result).toEqual(createPlayerDtoMock);
    });

    describe('name', () => {
      it('should throw an error when length < 4', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: GetPlayerDto,
          value: { ...createPlayerDtoMock, name: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'name must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: GetPlayerDto,
          value: { ...createPlayerDtoMock, name: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'name must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: GetPlayerDto,
          value: { ...createPlayerDtoMock, name: Number() },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'name must be a string',
            'name must be longer than or equal to 4 characters',
          ]),
        );
      });
    });

    describe('class', () => {
      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: CreatePlayerDto,
          value: { ...createPlayerDtoMock, name: genWord(4), class: Number() },
        });
        expect(result).toEqual(
          getValidationPipeError(['class must be a string']),
        );
      });
    });
  });
});
