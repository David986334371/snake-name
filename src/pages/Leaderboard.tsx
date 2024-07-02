// 排行榜页面
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Leaderboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>排行榜</h2>
      <button onClick={() => navigate('/difficulty')}>Back</button>
      {/* Add leaderboard display logic here */}
    </div>
  );
};

export default Leaderboard;
