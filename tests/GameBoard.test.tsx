/**
 * @file GameBoard 测试文件
 * @module GameBoardTests
 * @description 使用 Vitest 和 React Testing Library 对 GameBoard 组件进行单元测试
 */

import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import GameBoard from '../src/pages/GameBoard';
import { mockCheckCollision } from './setup';

/**
 * 帮助函数：渲染带有路由的组件
 * @function
 * @param {React.ReactElement} ui - 需要渲染的组件
 * @param {Object} options - 渲染选项，包含路由路径
 * @param {string} [options.route='/'] - 路由路径
 * @returns {RenderResult} 返回渲染结果
 */
const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('GameBoard Component', () => {
  // 每个测试用例运行前清空 localStorage
  beforeEach(() => {
    localStorage.clear();
    mockCheckCollision.mockReset();
  });

  // 测试用例：渲染组件并检查初始元素是否存在
  it('renders without crashing and shows initial elements', () => {
    renderWithRouter(<GameBoard />);

    // 检查页面上是否存在带有特定 alt 属性的图片元素
    expect(screen.getByAltText('当前积分')).toBeInTheDocument();
    expect(screen.getByAltText('历史最高分')).toBeInTheDocument();
    expect(screen.getByAltText('当前速度')).toBeInTheDocument();
  });

  // 测试用例：暂停和恢复游戏功能
  it('handles pausing and resuming the game', () => {
    renderWithRouter(<GameBoard />);

    // 获取并点击暂停按钮，然后检查按钮状态变化
    const pauseButton = screen.getByAltText('暂停游戏');
    fireEvent.click(pauseButton);
    expect(screen.getByAltText('继续游戏')).toBeInTheDocument();

    // 点击继续按钮，然后检查按钮状态变化
    fireEvent.click(screen.getByAltText('继续游戏'));
    expect(screen.getByAltText('暂停游戏')).toBeInTheDocument();
  });

  // 测试用例：处理键盘事件
  it('handles keydown events', async () => {
    renderWithRouter(<GameBoard />);

    // 模拟按下不同的方向键
    fireEvent.keyDown(window, { key: 'ArrowUp' });
    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    fireEvent.keyDown(window, { key: 'ArrowDown' });
    fireEvent.keyDown(window, { key: 'ArrowRight' });
  });

  // 测试用例：模拟蛇头触碰到蛇身，触发游戏结束
  it('triggers game over when snake head collides with its body', async () => {
    renderWithRouter(<GameBoard />);

    // 模拟蛇头与蛇身碰撞
    mockCheckCollision.mockImplementation((a, b) => a.x === 10 && a.y === 10 && b.x === 9 && b.y === 10);

    // 移动蛇头使其与蛇身碰撞
    fireEvent.keyDown(window, { key: 'ArrowLeft' });

    await waitFor(() => {
      expect(screen.getByAltText('Game Over')).toBeInTheDocument();
    });
  });

  // 测试用例：模拟蛇头触碰到炸弹，触发游戏结束
  it('triggers game over when snake head collides with a bomb', async () => {
    renderWithRouter(<GameBoard />);

    // 模拟蛇头与炸弹碰撞
    mockCheckCollision.mockImplementation((a, b) => a.x === 10 && a.y === 10 && b.x === 5 && b.y === 5);

    // 移动蛇头使其与炸弹碰撞
    fireEvent.keyDown(window, { key: 'ArrowRight' });

    await waitFor(() => {
      expect(screen.getByAltText('Game Over')).toBeInTheDocument();
    });
  });
});
