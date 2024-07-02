import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import DifficultySelection from './pages/DifficultySelection';
import GameBoard from './pages/GameBoard';
import Leaderboard from './pages/Leaderboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/difficulty" element={<DifficultySelection />} />
        <Route path="/game" element={<GameBoard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
};

export default App;
