import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';
import { NAME_MAX_LENGTH, NAME_MIN_LENGTH } from '../utils/constants';

export class StatusDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(999)
  attack: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(999)
  defense: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(999)
  level: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(999)
  xp: number;
}

export class CreateMonsterDto {
  @IsNotEmpty()
  @IsString()
  @Length(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  readonly name: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => StatusDto)
  readonly status: StatusDto;
}
