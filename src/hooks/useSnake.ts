// 管理蛇的状态和移动逻辑
import { useState, useCallback } from 'react';

const boardWidth = 33;
const boardHeight = 30;

export const useSnake = (initialSnake: { x: number; y: number }[]) => {
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState('RIGHT');

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

