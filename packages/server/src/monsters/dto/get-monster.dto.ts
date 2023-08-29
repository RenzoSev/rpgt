import { IsNotEmpty, IsString, Length } from 'class-validator';
import { NAME_MAX_LENGTH, NAME_MIN_LENGTH } from '../utils/constants';

export class GetMonsterDto {
  @IsNotEmpty()
  @IsString()
  @Length(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  readonly name: string;
}
