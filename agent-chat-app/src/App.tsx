import React from 'react';
import ConversationDisplay from './components/ConversationDisplay';
import MessageInput from './components/MessageInput';
import { useConversation } from './hooks/useConversation';
import './index.css';

const App: React.FC = () => {
    const { messages, sendMessage } = useConversation();

    return (
        <div className="app-container">
            <h1>Agent Chat</h1>
            <ConversationDisplay messages={messages} />
            <MessageInput onSendMessage={sendMessage} />
        </div>
    );
};

export default App;
