import { ArrayMinSize, IsNotEmpty, IsString, Length } from 'class-validator';
import { NAME_MAX_LENGTH, NAME_MIN_LENGTH } from '../utils/constants';

export class UpdateBoughtItemsDto {
  @IsNotEmpty()
  @Length(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  @IsString()
  readonly playerName: string;

  @IsString({ each: true })
  @ArrayMinSize(1)
  readonly items: string[];
}
