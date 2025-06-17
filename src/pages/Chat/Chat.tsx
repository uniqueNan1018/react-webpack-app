import React, { useState } from "react";
import { Input, Button, Avatar } from '@mui/material';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: 'User', content: input };
        setMessages(prev => [...prev, userMessage]);

        const res = await fetch('http://localhost:5000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: input })
        });

        const data = await res.json();

        const aiReply = { role: 'AI', content: data.reply };
        setMessages(prev => [...prev, aiReply]);

        setInput('');
    };
    return (
        <div className="chat-container">
            <div
                className="msgs-wrapper"
            >
                {
                    messages.map((msg, i) => {
                        const { role, content } = msg;
                        return role === "User" ? (
                            <div
                                key={i}
                                className="msg-item msg-item-user">
                                <div className="bubble">
                                    {content}
                                </div>
                                <Avatar
                                    className="avater"
                                    sx={{
                                        bgcolor: "#ff5722",
                                        width: 34,
                                        height: 34,
                                        fontSize: "16px"
                                    }}>
                                    {role}
                                </Avatar>
                            </div>
                        ) : (
                            <div
                                className="msg-item msg-item-ai"
                                key={i}>

                                <Avatar
                                    className="avater"
                                    sx={{
                                        bgcolor: "#673ab7",
                                        width: 34,
                                        height: 34,
                                        fontSize: "14px"
                                    }}>
                                    {role}
                                </Avatar>
                                <div className="bubble">
                                    {content}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="msg-send">
                <Input
                    value={input}
                    rows={1}
                    className="chat-input"
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && sendMessage()}
                />
                <Button
                    variant="contained"
                    className="send-button"
                    onClick={sendMessage}>
                    送信
                </Button>
            </div>
        </div>
    )
};
export default Chat;