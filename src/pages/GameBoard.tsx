import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Snake from '../components/Snake';
import Food from '../components/Food';
import Bomb from '../components/Bomb';
import GameOverImage from '../assets/GameOver.png'; 
import PauseGameImage from '../assets/PauseGame.png';
import GoImage from '../assets/Go.png'; 
import './GameBoard.css';
import { getRandomPosition, checkCollision } from '../utils/gameUtils';
import { useSnake } from '../hooks/useSnake';
import { useBombs } from '../hooks/useBombs';

const speeds = [1, 1.5, 2, 2.5, 3];
const directionCooldown = 100; 

interface Position {
  x: number;
  y: number;
}

const GameBoard: React.FC = () => {
  const location = useLocation();
  const difficulty = location.state?.difficulty || 1;
  const [score, setScore] = useState(0);
  const [foodEaten, setFoodEaten] = useState(0); 
  const speed = speeds[difficulty - 1];
  const [highScore, setHighScore] = useState(Number(localStorage.getItem(`highScore_${difficulty}`)) || 0);
  const [food, setFood] = useState<Position>(getRandomPosition());
  const { snake, moveSnake, changeDirection, setSnake } = useSnake([
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ]);
  const [isPaused, setIsPaused] = useState(false);
  const [lastMoveTime, setLastMoveTime] = useState(Date.now());
  const [isGameOver, setIsGameOver] = useState(false); 
  const { bombs, generateBombs } = useBombs(difficulty, snake, food, foodEaten);
  const navigate = useNavigate();

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const now = Date.now();
    if (now - lastMoveTime < directionCooldown) return;

    switch (e.key) {
      case 'w':
      case 'ArrowUp':
        changeDirection('UP');
        break;
      case 'a':
      case 'ArrowLeft':
        changeDirection('LEFT');
        break;
      case 's':
      case 'ArrowDown':
        changeDirection('DOWN');
        break;
      case 'd':
      case 'ArrowRight':
        changeDirection('RIGHT');
        break;
      case ' ':
        handlePause();
        break;
    }

    setLastMoveTime(now);
  }, [lastMoveTime, changeDirection]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (isPaused || isGameOver) return; 

    const moveSnakeAndCheckCollisions = () => {
      moveSnake();
      const newSnake = [...snake];
      const head = newSnake[0];

      if (checkCollision(head, food)) {
        setScore(score + 1);
        let newFood: Position;
        do {
          newFood = getRandomPosition();
        } while (checkCollision(newFood, head) || newSnake.some(segment => checkCollision(newFood, segment)));
        setFood(newFood);
        newSnake.push(newSnake[newSnake.length - 1]);
        setSnake(newSnake);
        setFoodEaten(foodEaten + 1);
      }

      for (let i = 1; i < newSnake.length; i++) {
        if (checkCollision(head, newSnake[i]) || bombs.some((bomb) => checkCollision(head, bomb))) {
          if (score > highScore) {
            setHighScore(score);
            localStorage.setItem(`highScore_${difficulty}`, score.toString());
          }
          setIsGameOver(true); 
          setIsPaused(true);
          return;
        }
      }
    };

    const interval = setInterval(moveSnakeAndCheckCollisions, 200 / speed);

    return () => clearInterval(interval);
  }, [snake, moveSnake, food, score, speed, isPaused, isGameOver, highScore, difficulty, bombs, setSnake, foodEaten]);

  const handlePause = () => {
    setIsPaused(prevIsPaused => !prevIsPaused);
  };

  const handleRestart = () => {
    const initialSnake = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];
    setSnake(initialSnake);
    setScore(0);
    setFoodEaten(0);
    setIsPaused(false);
    setIsGameOver(false); 

    let newFood: Position;
    do {
      newFood = getRandomPosition();
    } while (initialSnake.some(segment => checkCollision(newFood, segment)));
    setFood(newFood);

    generateBombs();
  };

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="game-container">
      {isGameOver && (
        <div className="game-over">
          <img src={GameOverImage} alt="Game Over" />
        </div>
      )}
      <div className="game-board">
        <Snake segments={snake} />
        <Food position={food} />
        {bombs.map((bomb, index) => (
          <Bomb key={index} position={bomb} />
        ))}
      </div>
      <div className="sidebar">
        <div className="sidebar-item high-score">
          <img src="/src/assets/HighScore.png" alt="历史最高分" />
          <div className="high-score-number">{highScore}</div>
        </div>
        <div className="sidebar-item score-container">
          <img src="/src/assets/GameScore.png" alt="当前积分" />
          <div className="score-number">{score}</div>
        </div>
        <div className="sidebar-item current-speed">
          <img src="/src/assets/CurrentSpeed.png" alt="当前速度" />
          <span>x{speed}</span>
        </div>
        <button onClick={handlePause} className="sidebar-button sidebar-item">
          <img src={isPaused ? GoImage : PauseGameImage} alt={isPaused ? "继续游戏" : "暂停游戏"} />
        </button>
        <button onClick={handleRestart} className="sidebar-button sidebar-item">
          <img src="/src/assets/Restart.png" alt="重新开始" />
        </button>
        <button onClick={handleExit} className="sidebar-button sidebar-item">
          <img src="/src/assets/ExitGame.png" alt="退出游戏" />
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
