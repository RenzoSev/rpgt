import { IsString } from 'class-validator';

export class GetPlayerDto {
  @IsString()
  readonly name: string;
}
