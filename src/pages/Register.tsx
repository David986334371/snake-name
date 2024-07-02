// 注册页面
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; 

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/');
  };

  return (
    <div className="register-container">
      <img src="/src/assets/WelcomeRegist.png" alt="欢迎注册" className="welcome-image" />
      <div className="input-group">
        <img src="/src/assets/Username.png" alt="用户名图标" />
        <input
          type="text"
          placeholder="输入你的用户名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="input-group">
        <img src="/src/assets/PassWord.png" alt="密码图标" />
        <input
          type="password"
          placeholder="输入你的密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-group">
        <button onClick={() => navigate('/')}>
          <img src="/src/assets/Exit.png" alt="退出" />
        </button>
        <button onClick={handleRegister}>
          <img src="/src/assets/Regist.png" alt="注册" />
        </button>
      </div>
    </div>
  );
};

export default Register;
