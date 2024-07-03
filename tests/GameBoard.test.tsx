import React from 'react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import GameBoard from '../src/pages/GameBoard';

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

vi.mock('../src/hooks/useBombs', () => ({
  useBombs: () => ({
    bombs: [
      { x: 5, y: 5 },
      { x: 6, y: 6 },
    ],
    generateBombs: vi.fn(),
  }),
}));

vi.mock('../src/utils/gameUtils', () => ({
  getRandomPosition: () => ({ x: 1, y: 1 }),
  checkCollision: (a, b) => a.x === b.x && a.y === b.y,
}));

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

describe('GameBoard Component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('renders without crashing and shows initial elements', () => {
    renderWithRouter(<GameBoard />);

    expect(screen.getByAltText('当前积分')).toBeInTheDocument();
    expect(screen.getByAltText('历史最高分')).toBeInTheDocument();
    expect(screen.getByAltText('当前速度')).toBeInTheDocument();
  });

  it('handles pausing and resuming the game', () => {
    renderWithRouter(<GameBoard />);

    const pauseButton = screen.getByAltText('暂停游戏');
    fireEvent.click(pauseButton);
    expect(screen.getByAltText('继续游戏')).toBeInTheDocument();

    fireEvent.click(screen.getByAltText('继续游戏'));
    expect(screen.getByAltText('暂停游戏')).toBeInTheDocument();
  });

  it('handles restarting the game', () => {
    renderWithRouter(<GameBoard />);

    const restartButton = screen.getByAltText('重新开始');
    fireEvent.click(restartButton);

    expect(screen.getByAltText('当前积分')).toHaveTextContent('0');
    expect(screen.getByAltText('历史最高分')).toHaveTextContent('0');
  });

  it('handles keydown events', async () => {
    renderWithRouter(<GameBoard />);

    fireEvent.keyDown(window, { key: 'ArrowUp' });
    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    fireEvent.keyDown(window, { key: 'ArrowDown' });
    fireEvent.keyDown(window, { key: 'ArrowRight' });

  });

  it('handles game over scenario', async () => {
    renderWithRouter(<GameBoard />);

    fireEvent.keyDown(window, { key: 'ArrowUp' });

    fireEvent.keyDown(window, { key: 'ArrowUp' });

    await waitFor(() => {
      expect(screen.getByAltText('Game Over')).toBeInTheDocument();
    });
  });
});
