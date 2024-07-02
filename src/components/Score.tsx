// 积分组件
import React from 'react';

interface ScoreProps {
  score: number;
}

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className="score-container">
      <h3>当前积分: {score}</h3>
    </div>
  );
};

export default Score;
