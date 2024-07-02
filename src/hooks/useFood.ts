// 管理食物状态和生成逻辑
import { useState } from 'react';

export const useFood = () => {
  const [food, setFood] = useState({ x: 10, y: 10 });

  const createFood = () => {
    const newFood = {
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100)
    };
    setFood(newFood);
  };

  return { food, createFood };
};
