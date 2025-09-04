import { useState, useEffect } from 'react';
import { Message } from '../types';
import { mockConversations } from '../data/mockConversations';

export const useConversation = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        // Simulate loading initial messages
        setMessages(mockConversations);
    }, []);

    const sendMessage = (text: string) => {
        const newUserMessage: Message = {
            id: String(messages.length + 1),
            sender: 'user',
            text,
            timestamp: Date.now(),
        };
        setMessages((prevMessages) => [...prevMessages, newUserMessage]);

        // Simulate agent response
        setTimeout(() => {
            const newAgentMessage: Message = {
                id: String(messages.length + 2),
                sender: 'agent',
                text: `Agent 收到您的消息: "${text}"`, // Simple echo for now
                timestamp: Date.now(),
            };
            setMessages((prevMessages) => [...prevMessages, newAgentMessage]);
        }, 1000);
    };

    return { messages, sendMessage };
};

