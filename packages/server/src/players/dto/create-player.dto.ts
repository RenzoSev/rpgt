import { IsString } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly class: string;
}
