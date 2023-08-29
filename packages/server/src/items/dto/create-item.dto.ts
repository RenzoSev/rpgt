import {
  IsDefined,
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
  ValidateIf,
} from 'class-validator';
import {
  ITEM_TYPES,
  VALIDATE_PROPERTIES_MESSAGE,
  VALIDATE_TYPE_MESSAGE,
} from '../utils/constants';
import { ItemTypes } from '../item.schema';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsIn(ITEM_TYPES, { message: VALIDATE_TYPE_MESSAGE })
  readonly type: ItemTypes;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(999)
  level: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(99999)
  gold: number;

  @ValidateIf((item: CreateItemDto) => item.defense === undefined)
  @IsDefined({ message: VALIDATE_PROPERTIES_MESSAGE })
  attack?: number;

  @ValidateIf((item: CreateItemDto) => item.attack === undefined)
  @IsDefined({ message: VALIDATE_PROPERTIES_MESSAGE })
  defense?: number;
}
