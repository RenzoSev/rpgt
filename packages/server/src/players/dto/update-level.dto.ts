import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { NAME_MAX_LENGTH, NAME_MIN_LENGTH } from '../utils/constants';

export class UpdateLevelDto {
  @IsNotEmpty()
  @Length(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  @IsString()
  readonly playerName: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(999)
  readonly xp: number;
}
