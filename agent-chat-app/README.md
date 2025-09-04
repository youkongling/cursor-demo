# Agent Chat App

这是一个模拟 Agent 对话的前端交互应用，使用 React 和 TypeScript 构建。

## 目录结构

```
agent-chat-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AgentMessage.tsx
│   │   ├── ConversationDisplay.tsx
│   │   ├── MessageInput.tsx
│   │   └── UserMessage.tsx
│   ├── data/
│   │   └── mockConversations.ts
│   ├── hooks/
│   │   └── useConversation.ts
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   └── types.ts
└── package.json
```

## 运行项目

1.  进入项目目录:
    ```bash
    cd agent-chat-app
    ```
2.  安装依赖:
    ```bash
    npm install
    # 或者 yarn install
    ```
3.  启动开发服务器:
    ```bash
    npm start
    # 或者 yarn start
    ```

## 功能

-   显示模拟的对话消息（用户和Agent）。
-   用户可以输入消息并发送。
-   模拟Agent的自动回复。

## 技术栈

-   React
-   TypeScript
-   Vite (作为开发服务器和打包工具)
-   CSS (基础样式)
