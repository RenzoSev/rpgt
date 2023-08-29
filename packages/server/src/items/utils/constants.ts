import { ItemTypes } from '../item.schema';

export const VALIDATE_PROPERTIES_MESSAGE =
  'At least one of the properties (attack or defense) is required.';

export const VALIDATE_TYPE_MESSAGE =
  'The type must be either weapon or shield.';

export const ITEM_TYPES: ItemTypes[] = ['weapon', 'shield'];
