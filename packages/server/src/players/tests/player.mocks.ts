import { CreatePlayerDto } from '../dto/create-player.dto';
import { GetPlayerDto } from '../dto/get-player.dto';
import { Player } from '../player.schema';

const name = 'name';
const playerClass = 'mage';

export const getPlayerDtoMock: GetPlayerDto = { name };

export const createPlayerDtoMock: CreatePlayerDto = {
  name,
  class: playerClass,
};

export const playerMock: Player = {
  class: 'mage',
  name,
  status: { gold: 2000, level: 30 },
  inventory: { bought: ['123', '321'], equipped: ['456', '654'] },
};
