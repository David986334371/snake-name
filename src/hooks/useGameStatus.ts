// 管理游戏状态（进行中、结束）
import { useState } from 'react';

export const useGameStatus = () => {
  const [isGameOver, setGameOver] = useState(false);

  const resetGame = () => setGameOver(false);
  const endGame = () => setGameOver(true);

  return { isGameOver, resetGame, endGame };
};
