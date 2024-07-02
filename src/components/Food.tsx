// 食物组件
import React from 'react';

const Food: React.FC<{ position: { x: number, y: number } }> = ({ position }) => {
  const style = {
    left: `${position.x}%`,
    top: `${position.y}%`
  };
  return <div className="food" style={style}></div>;
};

export default Food;
