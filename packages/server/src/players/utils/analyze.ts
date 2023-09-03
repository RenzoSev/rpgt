export enum ERRORS {
  NOT_ENOUGH_GOLD = 'NOT_ENOUGH_GOLD',
  NOT_ENOUGH_LEVEL = 'NOT_ENOUGH_LEVEL',
  NOT_WIN_FIGHT = 'NOT_WIN_FIGHT',
}

export enum FIGHTERS {
  PLAYER = 'player',
  MONSTER = 'monster',
}

export type Fighter = `${FIGHTERS}`;

export const turnsToKill = (defense: number, attack: number) =>
  defense / attack;

export const whoShouldWin = (
  playerTurnsToKill: number,
  monsterTurnsToKill: number,
): Fighter => {
  const bothInstantKillEachOther =
    monsterTurnsToKill < 1 && playerTurnsToKill < 1;
  if (bothInstantKillEachOther) return FIGHTERS.PLAYER;

  const playerKillsFirst = playerTurnsToKill < monsterTurnsToKill;
  return playerKillsFirst ? FIGHTERS.PLAYER : FIGHTERS.MONSTER;
};
