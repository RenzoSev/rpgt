import { Injectable } from '@nestjs/common';
import { Item } from '../items/item.schema';
import { Player } from './player.schema';
import { ERRORS } from './utils/analyze';

@Injectable()
export class PlayerAnalyzer {
  constructor() {}

  playerBuyItem(player: Player, item: Item) {
    const checkers: Record<string, { condition: boolean; error: string }> = {
      level: {
        condition: player.status.level < item.level,
        error: ERRORS.NOT_ENOUGH_LEVEL,
      },

      gold: {
        condition: player.status.gold < item.gold,
        error: ERRORS.NOT_ENOUGH_GOLD,
      },
    };
    const checkersValues = Object.values(checkers);

    const errors = checkersValues.flatMap(({ condition, error }) =>
      condition ? error : [],
    );

    return errors;
  }
}
