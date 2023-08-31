import { CreateMonsterDto } from '../dto/create-monster.dto';
import { GetMonsterDto } from '../dto/get-monster.dto';
import { Monster } from '../monster.schema';

const getName = (): Monster['name'] => 'monster';
const getStatus = (): Monster['status'] => ({
  attack: 1,
  defense: 1,
  level: 1,
  xp: 1,
});

export const createMonsterDtoMock: CreateMonsterDto = {
  name: getName(),
  status: getStatus(),
};

export const getMonsterDtoMock: GetMonsterDto = {
  name: getName(),
};

export const monsterMock: Monster = {
  name: getName(),
  status: getStatus(),
};

export const monsterServiceMock = {
  get: async () => monsterMock,
  create: async () => monsterMock,
};
