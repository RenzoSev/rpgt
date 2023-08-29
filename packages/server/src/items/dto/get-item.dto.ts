import { IsNotEmpty, IsString } from 'class-validator';

export class GetItemDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;
}
