import { ValidationPipe } from '@nestjs/common';
import { GetPlayerDto } from '../dto/get-player.dto';
import {
  createPlayerDtoMock,
  getPlayerDtoMock,
  updateBoughtItemsDtoMock,
  updateEquippedItemDtoMock,
  updateLevelDtoMock,
} from './player.mocks';
import {
  genWord,
  getValidationPipeError,
  runValidationTransformBody,
} from '../../utils/tests';
import { CreatePlayerDto } from '../dto/create-player.dto';
import { UpdateBoughtItemsDto } from '../dto/update-bought-items.dto';
import { UpdateLevelDto } from '../dto/update-level.dto';
import { UpdateEquippedItemDto } from '../dto/update-equipped-item-dto';

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

  describe('UpdateBoughtItemsDto', () => {
    it('should pass validation with valid body', async () => {
      const result = await runValidationTransformBody(validationPipe, {
        Dto: UpdateBoughtItemsDto,
        value: updateBoughtItemsDtoMock,
      });
      expect(result).toEqual(updateBoughtItemsDtoMock);
    });

    describe('playerName', () => {
      it('should throw an error when length < 4', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateBoughtItemsDto,
          value: { ...updateBoughtItemsDtoMock, playerName: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateBoughtItemsDto,
          value: { ...updateBoughtItemsDtoMock, playerName: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateBoughtItemsDto,
          value: { ...updateBoughtItemsDtoMock, playerName: Number() },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be a string',
            'playerName must be longer than or equal to 4 characters',
          ]),
        );
      });
    });

    describe('items', () => {
      it('should throw an error when there are items not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateBoughtItemsDto,
          value: { ...updateBoughtItemsDtoMock, items: [Number()] },
        });
        expect(result).toEqual(
          getValidationPipeError(['each value in items must be a string']),
        );
      });

      it('should throw an error when there are not items on array', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateBoughtItemsDto,
          value: { ...updateBoughtItemsDtoMock, items: [] },
        });
        expect(result).toEqual(
          getValidationPipeError(['items must contain at least 1 elements']),
        );
      });
    });
  });

  describe('UpdateLevelDto', () => {
    it('should pass validation with valid body', async () => {
      const result = await runValidationTransformBody(validationPipe, {
        Dto: UpdateLevelDto,
        value: updateLevelDtoMock,
      });
      expect(result).toEqual(updateLevelDtoMock);
    });

    describe('playerName', () => {
      it('should throw an error when length < 4', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateLevelDto,
          value: { ...updateLevelDtoMock, playerName: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateLevelDto,
          value: { ...updateLevelDtoMock, playerName: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateLevelDto,
          value: { ...updateLevelDtoMock, playerName: Number() },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be a string',
            'playerName must be longer than or equal to 4 characters',
          ]),
        );
      });
    });

    describe('xp', () => {
      it('should throw an error when < 1', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateLevelDto,
          value: {
            ...updateLevelDtoMock,
            xp: 0,
          },
        });
        expect(result).toEqual(
          getValidationPipeError(['xp must not be less than 1']),
        );
      });

      it('should throw an error when > 999', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateLevelDto,
          value: {
            ...updateLevelDtoMock,
            xp: 1000,
          },
        });
        expect(result).toEqual(
          getValidationPipeError(['xp must not be greater than 999']),
        );
      });

      it('should throw an error when it is not number', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateLevelDto,
          value: {
            ...updateLevelDtoMock,
            xp: String(),
          },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'xp must not be greater than 999',
            'xp must not be less than 1',
            'xp must be a number conforming to the specified constraints',
            'xp should not be empty',
          ]),
        );
      });
    });
  });

  describe('UpdateEquippedItemDto', () => {
    it('should pass validation with valid body', async () => {
      const result = await runValidationTransformBody(validationPipe, {
        Dto: UpdateEquippedItemDto,
        value: updateEquippedItemDtoMock,
      });
      expect(result).toEqual(updateEquippedItemDtoMock);
    });

    describe('playerName', () => {
      it('should throw an error when length < 4', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateEquippedItemDto,
          value: { ...updateEquippedItemDtoMock, playerName: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateEquippedItemDto,
          value: { ...updateEquippedItemDtoMock, playerName: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateEquippedItemDto,
          value: { ...updateEquippedItemDtoMock, playerName: Number() },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be a string',
            'playerName must be longer than or equal to 4 characters',
          ]),
        );
      });
    });

    describe('itemName', () => {
      it('should throw an error when length < 4', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateEquippedItemDto,
          value: { ...updateEquippedItemDtoMock, itemName: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'itemName must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateEquippedItemDto,
          value: { ...updateEquippedItemDtoMock, itemName: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'itemName must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateEquippedItemDto,
          value: { ...updateEquippedItemDtoMock, itemName: Number() },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'itemName must be a string',
            'itemName must be longer than or equal to 4 characters',
          ]),
        );
      });
    });
  });
});
