import { Monster } from './Monsters';

export type Winner = 'player' | 'monster';

interface Stats {
  gold: number;
  level: number;
}

export class Battle {
  async sendBattleResult(
    winner: Winner,
    monsterId: Monster['id']
  ): Promise<Stats> {
    return {
      gold: 20,
      level: 30,
    };
  }
}
