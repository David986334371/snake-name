/**
 * @file 游戏工具函数文件
 * @module gameUtils
 * @description 定义游戏中的工具函数，包括生成随机位置和检测碰撞
 */

/**
 * 生成随机位置的函数
 * @function
 * @returns {Object} 返回包含随机 x 和 y 坐标的位置对象
 */
export const getRandomPosition = () => {
  return {
    x: Math.floor(Math.random() * 30),
    y: Math.floor(Math.random() * 30)
  };
};

/**
 * 检测两个位置是否发生碰撞的函数
 * @function
 * @param {Object} pos1 - 位置对象1，包含 x 和 y 坐标
 * @param {Object} pos2 - 位置对象2，包含 x 和 y 坐标
 * @returns {boolean} 返回两个位置是否相同，表示是否发生碰撞
 */
export const checkCollision = (pos1: { x: number; y: number }, pos2: { x: number; y: number }) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};
