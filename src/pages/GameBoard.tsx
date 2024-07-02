import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Snake from '../components/Snake';
import Food from '../components/Food';
import './GameBoard.css';

const GameBoard: React.FC = () => {
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(1);
  const [highScore, setHighScore] = useState(100);
  const [snake, setSnake] = useState([
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 },
  ]);
  const [food, setFood] = useState({ x: 5, y: 5 });

  const navigate = useNavigate();

  const increaseScore = () => {
    setScore(score + 1);
  };

  const handlePause = () => {
    // 暂停游戏逻辑
  };

  const handleRestart = () => {
    // 重启游戏逻辑
  };

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className="game-container">
      <div className="game-board">
        <Snake segments={snake} />
        <Food position={food} />
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
          <img src="/src/assets/PauseGame.png" alt="暂停游戏" />
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
