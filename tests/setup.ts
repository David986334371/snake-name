/**
 * @file 测试设置文件
 * @module TestSetup
 * @description 配置测试环境并 mock 必要的模块和函数
 */

import '@testing-library/jest-dom';
import { vi } from 'vitest';

// 定义和 mock 所有必要的模块和函数
const mockCheckCollision = vi.fn();

/**
 * Mock useSnake hook
 * @module useSnake
 * @description Mock useSnake hook，返回固定的蛇初始位置和空函数
 */
vi.mock('../src/hooks/useSnake', () => ({
  useSnake: () => ({
    snake: [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ],
    moveSnake: vi.fn(),
    changeDirection: vi.fn(),
    setSnake: vi.fn(),
  }),
}));

/**
 * Mock useBombs hook
 * @module useBombs
 * @description Mock useBombs hook，返回固定的炸弹位置和空函数
 */
vi.mock('../src/hooks/useBombs', () => ({
  useBombs: () => ({
    bombs: [
      { x: 5, y: 5 },
      { x: 6, y: 6 },
    ],
    generateBombs: vi.fn(),
  }),
}));

/**
 * Mock gameUtils 工具函数
 * @module gameUtils
 * @description Mock gameUtils 工具函数，返回固定的位置和碰撞检测结果
 */
vi.mock('../src/utils/gameUtils', () => ({
  getRandomPosition: () => ({ x: 1, y: 1 }),
  checkCollision: mockCheckCollision,
}));

// 将 mockCheckCollision 导出，供测试文件中使用
export { mockCheckCollision };
