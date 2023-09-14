export const getHealthOnTurn = ({
  defense,
  attack,
  turnCount,
}: {
  defense: number;
  attack: number;
  turnCount: number;
}) => defense - attack * turnCount;

export const zeroThreshold = (num: number) => (num < 0 ? 0 : num);
