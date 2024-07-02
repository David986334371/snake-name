// 游戏主页面
import React, { useState } from 'react';
import Snake from '../components/Snake';  
import Food from '../components/Food';    
import Score from '../components/Score';  

const GameBoard: React.FC = () => {
  const [score, setScore] = useState(0);

  const increaseScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="game-board">
      <Snake />
      <Food position={{ x: 10, y: 10 }} />
      <Score score={score} />
    </div>
  );
};

export default GameBoard;

