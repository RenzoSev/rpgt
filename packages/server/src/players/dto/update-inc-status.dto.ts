import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { NAME_MAX_LENGTH, NAME_MIN_LENGTH } from '../utils/constants';

export class UpdateIncStatusDto {
  @IsNotEmpty()
  @Length(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  @IsString()
  readonly playerName: string;

  @IsNumber()
  @Min(1)
  @Max(99999)
  readonly gold?: number;

  @IsNumber()
  @Min(1)
  @Max(999)
  readonly level?: number;
}
