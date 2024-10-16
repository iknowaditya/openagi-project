import React, { useState } from 'react';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { type: 'user', content: input }]);
            // TODO: Implement AI response logic
            setInput('');
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex-grow overflow-y-auto p-4">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'
                            }`}
                    >
                        <div
                            className={`inline-block p-2 rounded-lg ${message.type === 'user'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200'
                                }`}
                        >
                            {message.content}
                        </div>
                    </div>
                ))}
            </div>
            <div className="border-t p-4">
                <div className="flex">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-grow mr-2 p-2 border rounded"
                        placeholder="Ask the AI Assistant anything..."
                    />
                    <button
                        onClick={handleSend}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;