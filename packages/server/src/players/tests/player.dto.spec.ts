import { ValidationPipe } from '@nestjs/common';
import { GetPlayerDto } from '../dto/get-player.dto';
import {
  createPlayerDtoMock,
  getPlayerDtoMock,
  updateBoughtItemsDtoMock,
  updateEquippedItemDtoMock,
  updateGoldDtoMock,
  updateIncStatusDtoMock,
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
import { UpdateGoldDto } from '../dto/update-gold.dto';
import { VALIDATE_GOLD_ACTION_TYPE_MESSAGE } from '../utils/constants';
import { UpdateIncStatusDto } from '../dto/update-inc-status.dto';

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

    describe('gold', () => {
      it('should throw an error when < 1', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateBoughtItemsDto,
          value: {
            ...updateBoughtItemsDtoMock,
            gold: 0,
          },
        });
        expect(result).toEqual(
          getValidationPipeError(['gold must not be less than 1']),
        );
      });

      it('should throw an error when > 99999', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateBoughtItemsDto,
          value: {
            ...updateBoughtItemsDtoMock,
            gold: 100000,
          },
        });
        expect(result).toEqual(
          getValidationPipeError(['gold must not be greater than 99999']),
        );
      });

      it('should throw an error when it is not number', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateBoughtItemsDto,
          value: {
            ...updateBoughtItemsDtoMock,
            gold: String(),
          },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'gold must not be greater than 99999',
            'gold must not be less than 1',
            'gold must be a number conforming to the specified constraints',
            'gold should not be empty',
          ]),
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

  describe('UpdateIncStatusDto', () => {
    it('should pass validation with valid body', async () => {
      const result = await runValidationTransformBody(validationPipe, {
        Dto: UpdateIncStatusDto,
        value: updateIncStatusDtoMock,
      });
      expect(result).toEqual(updateIncStatusDtoMock);
    });

    describe('playerName', () => {
      it('should throw an error when length < 4', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateIncStatusDto,
          value: { ...updateIncStatusDtoMock, playerName: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateIncStatusDto,
          value: { ...updateIncStatusDtoMock, playerName: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateIncStatusDto,
          value: { ...updateIncStatusDtoMock, playerName: Number() },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be a string',
            'playerName must be longer than or equal to 4 characters',
          ]),
        );
      });
    });

    describe('level', () => {
      it('should throw an error when < 1', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateIncStatusDto,
          value: {
            ...updateIncStatusDtoMock,
            level: 0,
          },
        });
        expect(result).toEqual(
          getValidationPipeError(['level must not be less than 1']),
        );
      });

      it('should throw an error when > 999', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateIncStatusDto,
          value: {
            ...updateIncStatusDtoMock,
            level: 1000,
          },
        });
        expect(result).toEqual(
          getValidationPipeError(['level must not be greater than 999']),
        );
      });

      it('should throw an error when it is not number', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateIncStatusDto,
          value: {
            ...updateIncStatusDtoMock,
            level: String(),
          },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'level must not be greater than 999',
            'level must not be less than 1',
            'level must be a number conforming to the specified constraints',
          ]),
        );
      });
    });

    describe('gold', () => {
      it('should throw an error when < 1', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateIncStatusDto,
          value: {
            ...updateIncStatusDtoMock,
            gold: 0,
          },
        });
        expect(result).toEqual(
          getValidationPipeError(['gold must not be less than 1']),
        );
      });

      it('should throw an error when > 99999', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateIncStatusDto,
          value: {
            ...updateIncStatusDtoMock,
            gold: 100000,
          },
        });
        expect(result).toEqual(
          getValidationPipeError(['gold must not be greater than 99999']),
        );
      });

      it('should throw an error when it is not number', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateIncStatusDto,
          value: {
            ...updateIncStatusDtoMock,
            gold: String(),
          },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'gold must not be greater than 99999',
            'gold must not be less than 1',
            'gold must be a number conforming to the specified constraints',
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

    describe('powerValue', () => {
      it('should throw an error when not defined', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateEquippedItemDto,
          value: { ...updateEquippedItemDtoMock, powerValue: undefined },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'powerValue must be a number conforming to the specified constraints',
            'powerValue should not be empty',
          ]),
        );
      });

      it('should throw an error when not number', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateEquippedItemDto,
          value: { ...updateEquippedItemDtoMock, powerValue: String() },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'powerValue must be a number conforming to the specified constraints',
            'powerValue should not be empty',
          ]),
        );
      });
    });
  });

  describe('UpdateGoldDto', () => {
    it('should pass validation with valid body', async () => {
      const resultForAddAction = await runValidationTransformBody(
        validationPipe,
        {
          Dto: UpdateGoldDto,
          value: updateGoldDtoMock,
        },
      );
      expect(resultForAddAction).toEqual(updateGoldDtoMock);

      const resultForRemoveAction = await runValidationTransformBody(
        validationPipe,
        {
          Dto: UpdateGoldDto,
          value: { ...updateGoldDtoMock, action: 'remove' },
        },
      );
      expect(resultForRemoveAction).toEqual({
        ...updateGoldDtoMock,
        action: 'remove',
      });
    });

    describe('playerName', () => {
      it('should throw an error when length < 4', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateGoldDto,
          value: { ...updateGoldDtoMock, playerName: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateGoldDto,
          value: { ...updateGoldDtoMock, playerName: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateGoldDto,
          value: { ...updateGoldDtoMock, playerName: Number() },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be a string',
            'playerName must be longer than or equal to 4 characters',
          ]),
        );
      });
    });

    describe('gold', () => {
      it('should throw an error when < 1', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateGoldDto,
          value: {
            ...updateGoldDtoMock,
            gold: 0,
          },
        });
        expect(result).toEqual(
          getValidationPipeError(['gold must not be less than 1']),
        );
      });

      it('should throw an error when > 99999', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateGoldDto,
          value: {
            ...updateGoldDtoMock,
            gold: 100000,
          },
        });
        expect(result).toEqual(
          getValidationPipeError(['gold must not be greater than 99999']),
        );
      });

      it('should throw an error when it is not number', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateGoldDto,
          value: {
            ...updateGoldDtoMock,
            gold: String(),
          },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'gold must not be greater than 99999',
            'gold must not be less than 1',
            'gold must be a number conforming to the specified constraints',
            'gold should not be empty',
          ]),
        );
      });
    });

    describe('action', () => {
      it('should throw an error when action is not in action types', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: UpdateGoldDto,
          value: {
            ...updateGoldDtoMock,
            action: 'error',
          },
        });
        expect(result).toEqual(
          getValidationPipeError([VALIDATE_GOLD_ACTION_TYPE_MESSAGE]),
        );
      });
    });
  });
});
