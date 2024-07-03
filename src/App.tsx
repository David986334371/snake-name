/**
 * @file App 组件文件
 * @module App
 * @description 定义应用的路由配置和主组件
 */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DifficultySelection from './pages/DifficultySelection';
import GameBoard from './pages/GameBoard';

/**
 * 应用的主组件
 * @class
 * @description 定义应用的路由配置和主组件，包含难度选择页面和游戏主界面
 * @returns {React.ReactElement} 返回应用的路由配置和主组件的 JSX 元素
 */
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 路由配置，根路径显示 DifficultySelection 组件 */}
        <Route path="/" element={<DifficultySelection />} />
        {/* 路由配置，/game 路径显示 GameBoard 组件 */}
        <Route path="/game" element={<GameBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
