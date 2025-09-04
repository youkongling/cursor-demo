import React from 'react';
import { ConfigProvider, Layout } from 'antd';
import ConversationDisplay from './components/ConversationDisplay';
import MessageInput from './components/MessageInput';
import { useConversation } from './hooks/useConversation';
import './index.css';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
    const { messages, sendMessage, isLoading } = useConversation();

    return (
        <ConfigProvider>
            <Layout className="app-container">
                <Header style={{ background: '#fff', padding: '0 20px', borderBottom: '1px solid #f0f0f0' }}>
                    <h1 style={{ textAlign: 'center', margin: 0, lineHeight: '64px' }}>Agent Chat</h1>
                </Header>
                <Content className="conversation-display">
                    <ConversationDisplay messages={messages} isLoading={isLoading} />
                </Content>
                <Footer style={{ padding: 0 }}>
                    <MessageInput onSendMessage={sendMessage} />
                </Footer>
            </Layout>
        </ConfigProvider>
    );
};

export default App;

