import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine
            height="100vh"
            projectID="2529853d-c68f-407e-8aae-05bdbe8d0b2b"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}


        />
    );
}

export default App;
