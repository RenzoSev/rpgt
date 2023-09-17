import {
  ArrayMinSize,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { NAME_MAX_LENGTH, NAME_MIN_LENGTH } from '../utils/constants';

export class UpdateBoughtItemsDto {
  @IsNotEmpty()
  @Length(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  @IsString()
  readonly playerName: string;

  @IsString({ each: true })
  @ArrayMinSize(1)
  readonly items: string[];

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(99999)
  readonly gold: number;
}
