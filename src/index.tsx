/**
 * @file 应用入口文件
 * @module AppEntry
 * @description 应用程序的入口文件，初始化并渲染根组件
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

/**
 * 获取根元素并渲染应用根组件
 * @function
 * @returns {void}
 */
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
