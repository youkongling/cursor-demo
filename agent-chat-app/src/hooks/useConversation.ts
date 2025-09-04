import { useState, useEffect } from 'react';
import { Message } from '../types';
import { mockConversations } from '../data/mockConversations';

export const useConversation = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
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
        setIsLoading(true);

        setTimeout(() => {
            const newAgentMessage: Message = {
                id: String(messages.length + 2),
                sender: 'agent',
                text: `Agent 收到您的消息: "${text}"`, 
                timestamp: Date.now(),
            };
            setMessages((prevMessages) => [...prevMessages, newAgentMessage]);
            setIsLoading(false);
        }, 1000);
    };

    return { messages, sendMessage, isLoading };
};

