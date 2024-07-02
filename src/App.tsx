import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DifficultySelection from './pages/DifficultySelection';
import GameBoard from './pages/GameBoard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DifficultySelection />} />
        <Route path="/game" element={<GameBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
