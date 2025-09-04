import React from 'react';
import { Message } from '../types';
import AgentMessage from './AgentMessage';
import UserMessage from './UserMessage';

interface ConversationDisplayProps {
    messages: Message[];
}

const ConversationDisplay: React.FC<ConversationDisplayProps> = ({ messages }) => {
    return (
        <div className="conversation-display">
            {messages.map((msg, index) => (
                msg.sender === 'user' ? (
                    <UserMessage key={index} message={msg.text} />
                ) : (
                    <AgentMessage key={index} message={msg.text} />
                )
            ))}
        </div>
    );
};

export default ConversationDisplay;
