// 登录页面
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/difficulty');
  };

  return (
    <div className="login-container">
      <img src="/src/assets/WelcomeLogin.png" alt="欢迎登录" className="welcome-image" />
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
        <button onClick={() => navigate('/try')}>
          <img src="/src/assets/Try.png" alt="试玩" />
        </button>
        <button onClick={() => navigate('/register')}>
          <img src="/src/assets/Regist.png" alt="注册" />
        </button>
        <button onClick={handleLogin}>
          <img src="/src/assets/Login.png" alt="登录" />
        </button>
      </div>
    </div>
  );
};

export default Login;
