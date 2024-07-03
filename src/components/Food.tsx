/**
 * @file Food 组件文件
 * @module Food
 * @description 定义食物组件，用于在游戏中展示食物位置
 */

import React from 'react';

/**
 * 食物组件的属性接口
 * @typedef {Object} FoodProps
 * @property {{x: number, y: number}} position - 食物的位置，包含 x 和 y 坐标
 */
interface FoodProps {
  position: { x: number; y: number };
}

/**
 * Food 组件
 * @class
 * @description 用于渲染食物位置的 React 组件
 * @param {FoodProps} props - 组件的属性，包含食物的位置
 * @returns {React.ReactElement} 返回食物的 JSX 元素
 */
const Food: React.FC<FoodProps> = ({ position }) => {
  return (
    <div
      className="food"
      style={{
        left: `${position.x * 20}px`,
        top: `${position.y * 20}px`,
      }}
    />
  );
};

export default Food;
