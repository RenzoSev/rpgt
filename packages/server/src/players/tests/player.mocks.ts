import { CreatePlayerDto } from '../dto/create-player.dto';
import { GetPlayerDto } from '../dto/get-player.dto';
import { Player } from '../player.schema';

const getName = (): Player['name'] => 'name';
const getClass = (): Player['class'] => 'mage';

export const getPlayerDtoMock: GetPlayerDto = { name: getName() };

export const createPlayerDtoMock: CreatePlayerDto = {
  name: getName(),
  class: getClass(),
};

export const playerMock: Player = {
  class: getClass(),
  name: getName(),
  status: { gold: 2000, level: 30 },
  inventory: { bought: ['123', '321'], equipped: ['456', '654'] },
};

export const playerServiceMock = {
  get: async () => playerMock,
  create: async () => playerMock,
};
