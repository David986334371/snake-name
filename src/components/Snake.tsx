import React from 'react';

interface SnakeProps {
  segments: { x: number; y: number }[];
}

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
