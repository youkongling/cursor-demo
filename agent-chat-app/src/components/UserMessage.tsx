import React from 'react';
import { Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface UserMessageProps {
    message: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ message }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px', height: '70px' }}>
            <Card style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '10px 10px 0 10px', maxWidth: '70%', flexShrink: 1 }}>
                {message}
            </Card>
            <Avatar icon={<UserOutlined />} style={{ marginLeft: '10px' }} />
        </div>
    );
};

export default UserMessage;

