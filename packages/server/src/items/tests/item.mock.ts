import { CreateItemDto } from '../dto/create-item.dto';
import { GetItemDto } from '../dto/get-item.dto';
import { Item } from '../item.schema';

const getAttack = (): Item['attack'] => 1;
const getDefense = (): Item['defense'] => 1;
const getGold = (): Item['gold'] => 1;
const getLevel = (): Item['level'] => 1;
const getAttackName = (): Item['name'] => 'attack-item';
const getAttackType = (type: Item['type'] = 'weapon'): Item['type'] => type;

export const createItemDtoMock: CreateItemDto = {
  attack: getAttack(),
  gold: getGold(),
  level: getLevel(),
  name: getAttackName(),
  type: getAttackType(),
};

export const getItemDtoMock: GetItemDto = {
  name: 'attack-item',
};

export const itemMock: Item = {
  attack: getAttack(),
  gold: getGold(),
  level: getLevel(),
  name: getAttackName(),
  type: getAttackType(),
};

export const itemsMock: Item[] = [
  {
    attack: getAttack(),
    gold: getGold(),
    level: getLevel(),
    name: getAttackName(),
    type: getAttackType(),
  },
  {
    defense: getDefense(),
    gold: getGold(),
    level: getLevel(),
    name: getAttackName(),
    type: getAttackType('shield'),
  },
];

export const itemServiceMock = {
  get: async () => itemMock,
  getAll: async () => itemsMock,
  create: async () => itemMock,
};

export const getItemErrorMessageForInvalidBody = [
  'name must be a string',
  'name should not be empty',
];

export const createItemErrorMessageForInvalidBody = [
  'name must be a string',
  'name should not be empty',
  'The type must be either weapon or shield.',
  'level must not be greater than 999',
  'level must not be less than 1',
  'level must be a number conforming to the specified constraints',
  'level should not be empty',
  'gold must not be greater than 99999',
  'gold must not be less than 1',
  'gold must be a number conforming to the specified constraints',
  'gold should not be empty',
  'At least one of the properties (attack or defense) is required.',
  'At least one of the properties (attack or defense) is required.',
];
