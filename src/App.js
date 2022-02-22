import React from 'react';
import './App.css'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="37d7bcd9-646e-4af5-8477-46e46bed029a"
            userName="sabbir_ahmed"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;