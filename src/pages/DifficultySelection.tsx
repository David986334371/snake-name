// 难度选择页面
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DifficultySelection.css';

const DifficultySelection: React.FC = () => {
  const [difficulty, setDifficulty] = useState(1);
  const navigate = useNavigate();

  const increaseDifficulty = () => {
    setDifficulty((prevDifficulty) => (prevDifficulty < 5 ? prevDifficulty + 1 : 5));
  };

  const handleDifficultySelect = () => {
    navigate('/game');
  };

  return (
    <div className="difficulty-container">
      <div className="difficulty-header">
        <img src="/src/assets/DifficultyLevel.png" alt="难度等级" className="difficulty-icon" />
        <span className="difficulty-level">{difficulty}</span> 
      </div>
      <div className="difficulty-buttons">
        <button onClick={increaseDifficulty}>
          <img src="/src/assets/IncreaseDifficulty.png" alt="增加难度" />
        </button>
        <button onClick={handleDifficultySelect}>
          <img src="/src/assets/OK.png" alt="确定" />
        </button>
      </div>
    </div>
  );
};

export default DifficultySelection;
