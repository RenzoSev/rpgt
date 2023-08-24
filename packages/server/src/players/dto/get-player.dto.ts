import { IsNotEmpty, IsString } from 'class-validator';

export class GetPlayerDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
