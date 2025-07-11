import { useState } from 'react';
import axios from 'axios';
import logo from '../assets/logo.png'; // adjust path if needed


const Chatbot = () => {
    const [showChat, setShowChat] = useState(false);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { text: "Hi! I'm the Consultixs Assistant. Ask me anything about our services!", sender: "bot" }
    ]);

    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMsg = { text: input, sender: 'user' };
        setMessages([...messages, userMsg]);
        setInput('');

        try {
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/chat`, { message: input });
            setMessages(prev => [...prev, { text: res.data.reply, sender: 'bot' }]);
        } catch (err) {
            setMessages(prev => [...prev, { text: 'Sorry, something went wrong.', sender: 'bot' }]);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={() => setShowChat(!showChat)}
                className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
            >
                💬
            </button>

            {showChat && (
                <div className="w-80 h-96 bg-white rounded-lg shadow-lg mt-4 flex flex-col">
                    {/* Header with Logo */}
                    <div className="p-3 bg-blue-600 text-white text-sm font-bold rounded-t-lg flex items-center gap-2">
                        <img
                            src={logo}
                            alt="Consultixs Logo"
                            className="h-8 w-18 object-cover object-left rounded bg-white"
                        />

                        Consultixs Chatbot
                    </div>

                    <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
                        {messages.map((msg, i) => (
                            <div key={i} className={`text-${msg.sender === 'bot' ? 'left' : 'right'}`}>
                                <div className={`inline-block p-2 rounded-lg ${msg.sender === 'bot' ? 'bg-gray-200' : 'bg-blue-500 text-white'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex p-2 border-t">
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && sendMessage()}
                            placeholder="Ask a question..."
                            className="flex-1 border p-1 rounded text-sm"
                        />
                        <button onClick={sendMessage} className="ml-2 text-blue-600 font-semibold">Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
