import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import {
  NAME_MAX_LENGTH,
  NAME_MIN_LENGTH,
  UPDATE_GOLD_ACTION_TYPES,
  VALIDATE_GOLD_ACTION_TYPE_MESSAGE,
} from '../utils/constants';

type Action = 'add' | 'remove';

export class UpdateGoldDto {
  @IsNotEmpty()
  @Length(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  @IsString()
  readonly playerName: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(99999)
  readonly gold: number;

  @IsIn(UPDATE_GOLD_ACTION_TYPES, {
    message: VALIDATE_GOLD_ACTION_TYPE_MESSAGE,
  })
  readonly action: Action;
}
