import { CreateMonsterDto } from '../dto/create-monster.dto';
import { GetMonsterDto } from '../dto/get-monster.dto';
import { Monster } from '../monster.schema';

const name = 'monster';
const getStatus = (): Monster['status'] => ({
  attack: 1,
  defense: 1,
  level: 1,
  xp: 1,
});

export const createMonsterDtoMock: CreateMonsterDto = {
  name: name,
  status: getStatus(),
};

export const getMonsterDtoMock: GetMonsterDto = {
  name: name,
};

export const monsterMock: Monster = {
  name: name,
  status: getStatus(),
};

export const monsterServiceMock = {
  get: async () => monsterMock,
  create: async () => monsterMock,
};

export const getMonsterErrorMessageForInvalidBody = [
  'name must be a string',
  'name must be longer than or equal to 4 characters',
  'name should not be empty',
];

export const createMonsterErrorMessageForInvalidBody = [
  'name must be a string',
  'name must be longer than or equal to 4 characters',
  'name should not be empty',
  'status should not be empty',
];
