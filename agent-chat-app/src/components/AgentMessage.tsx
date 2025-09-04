import React from 'react';
import { Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface AgentMessageProps {
    message: string;
}

const AgentMessage: React.FC<AgentMessageProps> = ({ message }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '10px', height: '70px' }}>
            <Avatar icon={<UserOutlined />} style={{ marginRight: '10px' }} />
            <Card style={{ backgroundColor: '#e6f7ff', borderRadius: '10px 10px 10px 0', maxWidth: '70%', flexShrink: 1 }}>
                {message}
            </Card>
        </div>
    );
};

export default AgentMessage;

