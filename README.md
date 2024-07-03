### 贪吃蛇游戏项目说明文档

#### 项目基本信息

**项目名称**: 贪吃蛇游戏  
**技术栈**: React, TypeScript

### 1. 需要实现的功能点

1. **游戏逻辑实现**
   - **蛇的移动**: 通过键盘控制蛇的上下左右移动。
   - **碰撞检测**: 检测蛇是否碰撞到自身或边界。
   - **食物生成**: 随机生成食物，蛇吃到食物后变长。
   - **游戏结束**: 蛇碰撞到自身或炸弹时游戏结束。
3. **游戏玩法多样性**
   - **多难度模式**: 提供不同难度的游戏模式（如简单、普通、困难）。
   - **炸弹出现**: 不同难度下，炸弹与食物的比例会发生改变。每吃到两个食物，炸弹会重新生成。
5. **积分功能**
   - **实时积分**: 游戏过程中实时显示当前分数。
   - **历史最高分**: 记录并显示历史最高分。

### 2. 项目结构

```plaintext
snake-game/
├── public/
│   ├── index.html                  # 主要 HTML 入口文件
├── src/
│   ├── assets/                     # 存储静态资源，如图片和音频文件
│   ├── components/                 # 组件
│   │   ├── Food.tsx                # 食物组件
│   │   ├── Snake.tsx               # 蛇组件
│   │   ├── Bomb.tsx                # 炸弹组件
│   ├── hooks/                      # 自定义 Hooks
│   │   ├── useBomb.ts              # 管理炸弹状态和生成逻辑
│   │   ├── useFood.ts              # 管理食物状态和生成逻辑
│   │   ├── useGameStatus.ts        # 管理游戏状态（进行中、结束）
│   │   ├── useSnake.ts             # 管理蛇的状态和移动逻辑
│   ├── pages/                       # 页面组件
│   │   ├── DifficultySelection.tsx  # 难度选择页面
│   │   ├── DifficultySelection.css  # 难度选择页面样式
│   │   ├── GameBoard.tsx            # 游戏主页面
│   │   ├── GameBoard.css            # 游戏主页面样式
│   ├── types/                      # TypeScript 类型定义
│   │   ├── index.d.ts                # 声明文件，用于声明 @testing-library/jest-dom 模块
│   │   ├── custom.d.ts               # 声明文件，用于声明各种图片格式模块
│   ├── utils/                      # 工具函数
│   │   ├── gameUtils.ts            # 游戏工具函数（生成随机位置、检测碰撞等）
│   ├── App.tsx                     # 主应用组件
│   ├── index.tsx                   # 应用入口文件
│   ├── styles.css                  # 全局样式文件
├── tests/                          # 测试文件
│   ├── GameBoard.test.ts           # 游戏主板组件测试
│   ├── setup.ts                    # 测试设置文件
├── vite.config.ts                  # Vite 配置文件
├── vitest.config.ts                # Vitest 配置文件
├── tsconfig.json                   # TypeScript 配置文件
├── package.json                    # npm 配置文件，包含依赖项和脚本
├── README.md                       # 项目说明文档
```

### 3. 功能点的实现思路

1. **蛇的移动**:
   - 使用 `useState` 管理蛇的状态和位置。
   - 使用 `useEffect` 监听键盘事件，更新蛇的移动方向。
   - 在每次移动时更新蛇的位置，并检查是否发生碰撞。
2. **碰撞检测**:
   - 在 `useEffect` 中检查蛇是否与自身或边界发生碰撞。
   - 如果发生碰撞，更新游戏状态为结束。
3. **食物生成**:
   - 使用 `useState` 管理食物的状态和位置。
   - 使用 `Math.random` 生成随机位置，并确保位置不与蛇重叠。
4. **游戏结束**:
   - 在蛇碰撞到自身或炸弹时，更新游戏状态为结束。
6. **多难度模式**:
   - 提供简单、普通、困难等多种游戏模式，设置不同的速度和炸弹比例。
   - 随着游戏难度增加，增加炸弹数量和速度。
9. **积分功能**:
   - 使用 `useState` 管理当前分数。
   - 在吃到食物时增加分数，并更新历史最高分。

### 4. 项目的启动方法

1. 克隆项目仓库：

```bash
git clone <仓库地址>
cd snake-game
```

2. 安装依赖项：

```bash
npm install
```

3. 启动开发服务器：

```bash
npm run dev
```

4. 运行单元测试：

```bash
npm run test
```

