import React from 'react';

interface BombProps {
  position: { x: number; y: number };
}

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
