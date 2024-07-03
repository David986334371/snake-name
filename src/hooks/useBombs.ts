import { useState, useEffect, useCallback, useRef } from 'react';
import { getRandomPosition, checkCollision } from '../utils/gameUtils';

const bombCounts = [0, 0, 3, 4, 5];

interface Position {
  x: number;
  y: number;
}

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

export const useBombs = (difficulty: number, snake: Position[], food: Position, foodEaten: number) => {
  const [bombs, setBombs] = useState<Position[]>([]);
  
  const prevSnakeRef = useRef<Position[]>(snake);
  const prevFoodRef = useRef<Position>(food);

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
