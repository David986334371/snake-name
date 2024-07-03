/**
 * @file useFood 自定义 Hook 文件
 * @module useFood
 * @description 定义用于管理食物状态和生成逻辑的自定义 Hook
 */

// 管理食物状态和生成逻辑
import { useState } from 'react';

/**
 * 自定义 Hook，用于管理游戏中的食物状态
 * @function
 * @returns {Object} 返回包含食物位置和生成新食物函数的对象
 */
export const useFood = () => {
  const [food, setFood] = useState({ x: 10, y: 10 });

  /**
   * 生成新的食物位置
   * @function
   * @returns {void}
   */
  const createFood = () => {
    const newFood = {
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100)
    };
    setFood(newFood);
  };

  return { food, createFood };
};
