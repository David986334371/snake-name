/**
 * @file Bomb 组件文件
 * @module Bomb
 * @description 定义炸弹组件，用于在游戏中展示炸弹位置
 */

import React from 'react';

/**
 * 炸弹组件的属性接口
 * @typedef {Object} BombProps
 * @property {{x: number, y: number}} position - 炸弹的位置，包含 x 和 y 坐标
 */
interface BombProps {
  position: { x: number; y: number };
}

/**
 * Bomb 组件
 * @class
 * @description 用于渲染炸弹位置的 React 组件
 * @param {BombProps} props - 组件的属性，包含炸弹的位置
 * @returns {React.ReactElement} 返回炸弹的 JSX 元素
 */
const Bomb: React.FC<BombProps> = ({ position }) => {
  return (
    <div
      className="bomb"
      style={{
        left: `${position.x * 20}px`,
        top: `${position.y * 20}px`,
      }}
    />
  );
};

export default Bomb;
