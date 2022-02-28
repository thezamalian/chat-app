import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('sabbir_ahmed');
    const [password, setPassword] = useState('123456');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const authObject = { 'Project-ID': "37d7bcd9-646e-4af5-8477-46e46bed029a", "User-Name": username, 'User-Secret': password }

        try {
            // username | password => chatEngine --> give messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            // works out --> logged in
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            // error --> try with new username
            setError('Oops, incorrect credentials');
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        // value="sabbir_ahmed"
                        onChange={(e) => setUsername(e.target.value)}
                        className="input"
                        placeholder="Username"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        // value="123456"
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        placeholder="Password"
                        required
                    />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;