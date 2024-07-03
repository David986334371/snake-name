import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DifficultySelection.css';

import Difficulty1 from '../assets/Difficulty1.png';
import Difficulty2 from '../assets/Difficulty2.png';
import Difficulty3 from '../assets/Difficulty3.png';
import Difficulty4 from '../assets/Difficulty4.png';
import Difficulty5 from '../assets/Difficulty5.png';
import DifficultyLevelIcon from '../assets/DifficultyLevel.png';
import IncreaseDifficultyIcon from '../assets/IncreaseDifficulty.png';
import OkIcon from '../assets/OK.png';

const DifficultySelection: React.FC = () => {
  const [difficulty, setDifficulty] = useState(1);
  const navigate = useNavigate();

  const increaseDifficulty = () => {
    setDifficulty((prevDifficulty) => (prevDifficulty < 5 ? prevDifficulty + 1 : 1));
  };

  const handleDifficultySelect = () => {
    navigate('/game', { state: { difficulty } });
  };

  const difficultyImages = [Difficulty1, Difficulty2, Difficulty3, Difficulty4, Difficulty5];

  return (
    <div className="difficulty-container">
      <div className="difficulty-header">
        <img src={DifficultyLevelIcon} alt="难度等级" className="difficulty-icon" />
        <img src={difficultyImages[difficulty - 1]} alt={`难度 ${difficulty}`} className="difficulty-level-image" />
      </div>
      <div className="difficulty-buttons">
        <button onClick={increaseDifficulty}>
          <img src={IncreaseDifficultyIcon} alt="增加难度" />
        </button>
        <button onClick={handleDifficultySelect}>
          <img src={OkIcon} alt="确定" />
        </button>
      </div>
    </div>
  );
};

export default DifficultySelection;
