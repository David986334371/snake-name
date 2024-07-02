// 管理蛇的状态和移动逻辑
import { useState } from 'react';

export const useSnake = () => {
  const [snake, setSnake] = useState([{ x: 0, y: 0 }]);

  const moveSnake = (direction: string) => {
    // Add logic to move snake
  };

  return { snake, moveSnake };
};
