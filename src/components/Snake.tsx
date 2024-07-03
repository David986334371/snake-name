/**
 * @file Snake 组件文件
 * @module Snake
 * @description 定义蛇组件，用于在游戏中展示蛇的位置和移动
 */

import React from 'react';

/**
 * 蛇组件的属性接口
 * @typedef {Object} SnakeProps
 * @property {{x: number, y: number}[]} segments - 蛇的各个段的位置数组，每个段包含 x 和 y 坐标
 */
interface SnakeProps {
  segments: { x: number; y: number }[];
}

/**
 * Snake 组件
 * @class
 * @description 用于渲染蛇位置的 React 组件
 * @param {SnakeProps} props - 组件的属性，包含蛇的各个段的位置
 * @returns {React.ReactElement} 返回蛇的 JSX 元素
 */
const Snake: React.FC<SnakeProps> = ({ segments }) => {
  return (
    <>
      {segments.map((segment, index) => (
        <div
          key={index}
          className={`snake-segment ${index === 0 ? 'snake-head' : 'snake-body'}`}
          style={{
            left: `${segment.x * 20}px`,
            top: `${segment.y * 20}px`,
          }}
        />
      ))}
    </>
  );
};

export default Snake;
