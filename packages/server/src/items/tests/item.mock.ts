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
