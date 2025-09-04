import React, { useRef, useEffect } from 'react';
import { Message } from '../types';
import AgentMessage from './AgentMessage';
import UserMessage from './UserMessage';
import { FixedSizeList as List } from 'react-window';
import { Spin } from 'antd';

interface ConversationDisplayProps {
    messages: Message[];
    isLoading: boolean;
}

const ConversationDisplay: React.FC<ConversationDisplayProps> = ({ messages, isLoading }) => {
    const listRef = useRef<List>(null);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollToItem(messages.length - 1, "auto");
        }
    }, [messages]);

    const allMessages = [...messages];
    if (isLoading) {
        allMessages.push({
            id: 'loading',
            sender: 'agent',
            text: '',
            timestamp: Date.now(),
        });
    }

    const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
        const msg = allMessages[index];
        if (msg.id === 'loading') {
            return (
                <div style={{ ...style, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '10px', height: '70px' }}>
                    <Spin tip="Agent is typing..." />
                </div>
            );
        }
        return (
            <div style={style}>
                {msg.sender === 'user' ? (
                    <UserMessage message={msg.text} />
                ) : (
                    <AgentMessage message={msg.text} />
                )}
            </div>
        );
    };

    return (
        <List
            ref={listRef}
            height={500} 
            itemCount={allMessages.length}
            itemSize={80} 
            width="100%"
            className="conversation-list"
        >
            {Row}
        </List>
    );
};

export default ConversationDisplay;

