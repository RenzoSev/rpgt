import { IsNotEmpty, IsString, Length } from 'class-validator';
import { NAME_MAX_LENGTH, NAME_MIN_LENGTH } from '../utils/constants';

export class FightMonsterDto {
  @IsNotEmpty()
  @Length(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  @IsString()
  readonly playerName: string;

  @IsNotEmpty()
  @Length(NAME_MIN_LENGTH, NAME_MAX_LENGTH)
  @IsString()
  readonly monsterName: string;
}
