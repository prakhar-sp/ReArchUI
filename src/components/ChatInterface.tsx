import React, { useState } from 'react';

const ChatInterface: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, input]);
            setInput('');
        }
    };

    return (
        <div className="chat-interface">
            <div className="chat-window">
                {messages.map((msg, index) => (
                    <div key={index} className="chat-message">
                        {msg}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question about the document..."
                />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default ChatInterface;