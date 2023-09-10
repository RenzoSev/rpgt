import { CreateItemDto } from '../dto/create-item.dto';
import { GetItemDto } from '../dto/get-item.dto';
import { Item } from '../item.schema';

const attack = 1;
const defense = 1;
const gold = 1;
const level = 1;
const attackName = 'attack-item';
const attackType = 'weapon';

export const createItemDtoMock: CreateItemDto = {
  attack: attack,
  gold: gold,
  level: level,
  name: attackName,
  type: attackType,
};

export const getItemDtoMock: GetItemDto = {
  name: 'item',
};

export const itemMock: Item = {
  attack: attack,
  gold: gold,
  level: level,
  name: attackName,
  type: attackType,
};

export const itemsMock: Item[] = [
  {
    attack: attack,
    gold: gold,
    level: level,
    name: attackName,
    type: attackType,
  },
  {
    defense: defense,
    gold: gold,
    level: level,
    name: attackName,
    type: attackType,
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
