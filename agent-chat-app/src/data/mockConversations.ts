import { Message } from '../types';

export const mockConversations: Message[] = [
    {
        id: '1',
        sender: 'user',
        text: '你好，Agent！',
        timestamp: Date.now() - 60000,
    },
    {
        id: '2',
        sender: 'agent',
        text: '您好！有什么我可以帮助您的吗？',
        timestamp: Date.now() - 50000,
    },
    {
        id: '3',
        sender: 'user',
        text: '我想了解一下最新的天气情况。',
        timestamp: Date.now() - 30000,
    },
    {
        id: '4',
        sender: 'agent',
        text: '请问您想查询哪个城市的天气？',
        timestamp: Date.now() - 20000,
    },
];
