// 难度选择页面
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DifficultySelection: React.FC = () => {
  const navigate = useNavigate();

  const handleDifficultySelect = (level: number) => {
    navigate('/game');
  };

  return (
    <div className="container">
      <h2>选择难度</h2>
      <button onClick={() => handleDifficultySelect(1)}>难度 1</button>
      <button onClick={() => handleDifficultySelect(2)}>难度 2</button>
      <button onClick={() => handleDifficultySelect(3)}>难度 3</button>
      <button onClick={() => handleDifficultySelect(4)}>难度 4</button>
      <button onClick={() => handleDifficultySelect(5)}>难度 5</button>
    </div>
  );
};

export default DifficultySelection;
