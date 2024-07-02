import React from 'react';

interface FoodProps {
  position: { x: number; y: number };
}

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
