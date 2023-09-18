import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';
import { NAME_MAX_LENGTH, NAME_MIN_LENGTH } from '../utils/constants';

export class UpdateEquippedItemDto {
  @IsNotEmpty()
  @Length(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  @IsString()
  readonly playerName: string;

  @IsNotEmpty()
  @Length(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  @IsString()
  readonly itemName: string;

  @IsNotEmpty()
  @IsNumber()
  readonly powerValue: number;
}
