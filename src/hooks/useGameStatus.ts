/**
 * @file useGameStatus 自定义 Hook 文件
 * @module useGameStatus
 * @description 定义用于管理游戏状态（进行中、结束）的自定义 Hook
 */

// 管理游戏状态（进行中、结束）
import { useState } from 'react';

/**
 * 自定义 Hook，用于管理游戏状态
 * @function
 * @returns {Object} 返回包含游戏状态和控制游戏状态的函数的对象
 */
export const useGameStatus = () => {
  const [isGameOver, setGameOver] = useState(false);

  /**
   * 重置游戏状态为进行中
   * @function
   * @returns {void}
   */
  const resetGame = () => setGameOver(false);

  /**
   * 结束游戏
   * @function
   * @returns {void}
   */
  const endGame = () => setGameOver(true);

  return { isGameOver, resetGame, endGame };
};
