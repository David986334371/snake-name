/**
 * @file useBombs 自定义 Hook 文件
 * @module useBombs
 * @description 定义用于处理炸弹位置和生成逻辑的自定义 Hook
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { getRandomPosition, checkCollision } from '../utils/gameUtils';

const bombCounts = [0, 0, 3, 4, 5];

/**
 * 位置接口
 * @typedef {Object} Position
 * @property {number} x - 水平方向的位置
 * @property {number} y - 垂直方向的位置
 */
interface Position {
  x: number;
  y: number;
}

/**
 * 获取当前位置周围的所有位置
 * @function
 * @param {Position} position - 当前的位置
 * @returns {Position[]} 返回周围位置的数组
 */
const getSurroundingPositions = (position: Position): Position[] => {
  const { x, y } = position;
  return [
    { x: x - 1, y },
    { x: x + 1, y },
    { x, y: y - 1 },
    { x, y: y + 1 },
    { x: x - 1, y: y - 1 },
    { x: x + 1, y: y - 1 },
    { x: x - 1, y: y + 1 },
    { x: x + 1, y: y + 1 },
  ];
};

/**
 * 自定义 Hook，用于管理游戏中的炸弹
 * @function
 * @param {number} difficulty - 游戏难度
 * @param {Position[]} snake - 当前蛇的位置数组
 * @param {Position} food - 当前食物的位置
 * @param {number} foodEaten - 已吃食物的数量
 * @returns {Object} 返回包含炸弹位置和生成炸弹函数的对象
 */
export const useBombs = (difficulty: number, snake: Position[], food: Position, foodEaten: number) => {
  const [bombs, setBombs] = useState<Position[]>([]);
  
  const prevSnakeRef = useRef<Position[]>(snake);
  const prevFoodRef = useRef<Position>(food);

  /**
   * 生成新的炸弹位置
   * @function
   * @returns {void}
   */
  const generateBombs = useCallback(() => {
    const newBombs = [];
    const head = prevSnakeRef.current[0];
    const surroundingPositions = getSurroundingPositions(prevFoodRef.current);

    while (newBombs.length < bombCounts[difficulty - 1]) {
      const newBomb = getRandomPosition();
      
      const isSameRowOrColumnAsHead = newBomb.x === head.x || newBomb.y === head.y;
      const surroundingBombsCount = surroundingPositions.filter((pos) => checkCollision(pos, newBomb)).length;

      const isValidPosition = !isSameRowOrColumnAsHead &&
        !checkCollision(newBomb, prevFoodRef.current) &&
        !prevSnakeRef.current.some((segment) => checkCollision(newBomb, segment)) &&
        newBombs.filter(bomb => surroundingPositions.some(pos => checkCollision(pos, bomb))).length < 2 &&
        surroundingBombsCount < 2;

      if (isValidPosition) {
        newBombs.push(newBomb);
      }
    }
    setBombs(newBombs);
  }, [difficulty]);

  useEffect(() => {
    prevSnakeRef.current = snake;
    prevFoodRef.current = food;
  }, [snake, food]);

  useEffect(() => {
    if (difficulty >= 3) {
      generateBombs();
    }
  }, [difficulty, generateBombs]);

  useEffect(() => {
    if (foodEaten > 0 && foodEaten % 2 === 0) {
      generateBombs();
    }
  }, [foodEaten, generateBombs]);

  return { bombs, generateBombs };
};
