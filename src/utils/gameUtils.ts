// 游戏工具函数（生成随机位置、检测碰撞等）
export const getRandomPosition = () => {
    return {
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100)
    };
  };
  
  export const checkCollision = (pos1: { x: number; y: number }, pos2: { x: number; y: number }) => {
    return pos1.x === pos2.x && pos1.y === pos2.y;
  };
  