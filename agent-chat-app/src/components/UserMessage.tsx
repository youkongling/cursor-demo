import React from 'react';

interface UserMessageProps {
    message: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ message }) => {
    return (
        <div className="user-message">
            <p>{message}</p>
        </div>
    );
};

export default UserMessage;

