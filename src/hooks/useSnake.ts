/**
 * @file useSnake 自定义 Hook 文件
 * @module useSnake
 * @description 定义用于管理蛇的状态和移动逻辑的自定义 Hook
 */

// 管理蛇的状态和移动逻辑
import { useState, useCallback } from 'react';

const boardWidth = 33;
const boardHeight = 30;

/**
 * 自定义 Hook，用于管理游戏中的蛇状态和移动逻辑
 * @function
 * @param {Array<{x: number, y: number}>} initialSnake - 蛇的初始位置数组
 * @returns {Object} 返回包含蛇状态、移动函数和方向控制函数的对象
 */
export const useSnake = (initialSnake: { x: number; y: number }[]) => {
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState('RIGHT');

  /**
   * 移动蛇的函数
   * @function
   * @returns {void}
   */
  const moveSnake = useCallback(() => {
    const newSnake = [...snake];
    const head = { ...newSnake[0] };

    switch (direction) {
      case 'UP':
        head.y -= 1;
        break;
      case 'DOWN':
        head.y += 1;
        break;
      case 'LEFT':
        head.x -= 1;
        break;
      case 'RIGHT':
        head.x += 1;
        break;
    }

    if (head.x < 0) {
      head.x = boardWidth - 1;
    } else if (head.x >= boardWidth) {
      head.x = 0;
    } else if (head.y < 0) {
      head.y = boardHeight - 1;
    } else if (head.y >= boardHeight) {
      head.y = 0;
    }

    newSnake.unshift(head);
    newSnake.pop();
    setSnake(newSnake);
  }, [snake, direction]);

  /**
   * 改变蛇移动方向的函数
   * @function
   * @param {string} newDirection - 新的移动方向
   * @returns {void}
   */
  const changeDirection = useCallback((newDirection: string) => {
    if ((direction === 'UP' && newDirection !== 'DOWN') ||
        (direction === 'DOWN' && newDirection !== 'UP') ||
        (direction === 'LEFT' && newDirection !== 'RIGHT') ||
        (direction === 'RIGHT' && newDirection !== 'LEFT')) {
      setDirection(newDirection);
    }
  }, [direction]);

  return { snake, moveSnake, changeDirection, setSnake, direction };
};
