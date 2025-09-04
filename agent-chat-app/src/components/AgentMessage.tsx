import React from 'react';

interface AgentMessageProps {
    message: string;
}

const AgentMessage: React.FC<AgentMessageProps> = ({ message }) => {
    return (
        <div className="agent-message">
            <p>{message}</p>
        </div>
    );
};

export default AgentMessage;

