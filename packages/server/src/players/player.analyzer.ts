import { Injectable } from '@nestjs/common';
import { Item } from '../items/item.schema';
import { Player } from './player.schema';
import { ERRORS, turnsToKill, whoShouldWin } from './utils/analyze';
import { Monster } from 'src/monsters/monster.schema';

interface Checker {
  condition: boolean;
  error: `${ERRORS}`;
}

type Checkers = Record<string, Checker>;

@Injectable()
export class PlayerAnalyzer {
  constructor() {}

  private check(checkers: Checkers) {
    return Object.values(checkers).flatMap(({ condition, error }) =>
      condition ? error : [],
    );
  }

  playerBuyItem(player: Player, item: Item) {
    const checkers: Checkers = {
      level: {
        condition: player.status.level < item.level,
        error: ERRORS.NOT_ENOUGH_LEVEL,
      },

      gold: {
        condition: player.status.gold < item.gold,
        error: ERRORS.NOT_ENOUGH_GOLD,
      },
    };
    const errors = this.check(checkers);
    return errors;
  }

  playerFightMonster(player: Player, monster: Monster) {
    const playerTurnsToKill = turnsToKill(
      monster.status.defense,
      player.status.attack,
    );
    const monsterTurnsToKill = turnsToKill(
      player.status.defense,
      monster.status.attack,
    );
    const winner = whoShouldWin(playerTurnsToKill, monsterTurnsToKill);
    console.log({
      winner,
      playerTurnsToKill,
      monsterTurnsToKill,
      monsterAttack: monster.status.attack,
    });

    const checkers = {
      level: {
        condition: player.status.level < monster.status.level,
        error: ERRORS.NOT_ENOUGH_LEVEL,
      },

      fight: {
        condition: winner === 'monster',
        error: ERRORS.NOT_WIN_FIGHT,
      },
    };
    const errors = this.check(checkers);
    return errors;
  }
}
