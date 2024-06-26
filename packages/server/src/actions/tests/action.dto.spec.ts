import { ValidationPipe } from '@nestjs/common';
import {
  genWord,
  getValidationPipeError,
  runValidationTransformBody,
} from '../../utils/tests';
import { BuyItemDto } from '../dto/buy-item.dto';
import {
  buyItemDtoMock,
  equipItemDto,
  fightMonsterDtoMock,
} from './action.mock';
import { FightMonsterDto } from '../dto/fight-monster.dto';
import { EquipItemDto } from '../dto/equip-item-dto';

describe('Player Dto', () => {
  let validationPipe: ValidationPipe;

  beforeEach(() => {
    validationPipe = new ValidationPipe({
      transform: true,
      whitelist: true,
    });
  });

  describe('BuyItemDto', () => {
    it('should pass validation with valid body', async () => {
      const result = await runValidationTransformBody(validationPipe, {
        Dto: BuyItemDto,
        value: buyItemDtoMock,
      });
      expect(result).toEqual(buyItemDtoMock);
    });

    describe('playerName', () => {
      it('should throw an error when length < 4', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: BuyItemDto,
          value: { ...buyItemDtoMock, playerName: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: BuyItemDto,
          value: { ...buyItemDtoMock, playerName: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: BuyItemDto,
          value: { ...buyItemDtoMock, playerName: Number() },
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
          Dto: BuyItemDto,
          value: { ...buyItemDtoMock, itemName: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'itemName must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: BuyItemDto,
          value: { ...buyItemDtoMock, itemName: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'itemName must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: BuyItemDto,
          value: { ...buyItemDtoMock, itemName: Number() },
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

  describe('FightMonsterDto', () => {
    it('should pass validation with valid body', async () => {
      const result = await runValidationTransformBody(validationPipe, {
        Dto: FightMonsterDto,
        value: fightMonsterDtoMock,
      });
      expect(result).toEqual(fightMonsterDtoMock);
    });

    describe('playerName', () => {
      it('should throw an error when length < 4', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: FightMonsterDto,
          value: { ...fightMonsterDtoMock, playerName: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: FightMonsterDto,
          value: { ...fightMonsterDtoMock, playerName: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: FightMonsterDto,
          value: { ...fightMonsterDtoMock, playerName: Number() },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be a string',
            'playerName must be longer than or equal to 4 characters',
          ]),
        );
      });
    });

    describe('monsterName', () => {
      it('should throw an error when length < 4', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: FightMonsterDto,
          value: { ...fightMonsterDtoMock, monsterName: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'monsterName must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: FightMonsterDto,
          value: { ...fightMonsterDtoMock, monsterName: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'monsterName must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: FightMonsterDto,
          value: { ...fightMonsterDtoMock, monsterName: Number() },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'monsterName must be a string',
            'monsterName must be longer than or equal to 4 characters',
          ]),
        );
      });
    });
  });

  describe('EquipItemDto', () => {
    it('should pass validation with valid body', async () => {
      const result = await runValidationTransformBody(validationPipe, {
        Dto: EquipItemDto,
        value: equipItemDto,
      });
      expect(result).toEqual(equipItemDto);
    });

    describe('playerName', () => {
      it('should throw an error when length < 4', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: EquipItemDto,
          value: { ...equipItemDto, playerName: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: EquipItemDto,
          value: { ...equipItemDto, playerName: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'playerName must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: EquipItemDto,
          value: { ...equipItemDto, playerName: Number() },
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
          Dto: EquipItemDto,
          value: { ...equipItemDto, itemName: genWord(3) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'itemName must be longer than or equal to 4 characters',
          ]),
        );
      });

      it('should throw an error when length > 20', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: EquipItemDto,
          value: { ...equipItemDto, itemName: genWord(21) },
        });
        expect(result).toEqual(
          getValidationPipeError([
            'itemName must be shorter than or equal to 20 characters',
          ]),
        );
      });

      it('should throw an error when not string', async () => {
        const result = await runValidationTransformBody(validationPipe, {
          Dto: EquipItemDto,
          value: { ...equipItemDto, itemName: Number() },
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
