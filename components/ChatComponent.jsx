import React, { useState, useRef, useEffect } from 'react';

const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: "bot" },
    { id: 2, text: "Hi there! I have a question about React.", sender: "user" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: "user"
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInputValue('');
      
      // Simulate bot response after a short delay
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thanks for your message! This is an automated response.",
          sender: "bot"
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>Chat</h3>
      </div>
      
      <div className="messages-container">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
          >
            <div className="message-content">
              {message.text}
            </div>
          </div>
        ))}
        {/* This div is used as the scroll target */}
        <div ref={messagesEndRef} />
      </div>
      
      <form onSubmit={handleSendMessage} className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="message-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
      
      <style jsx>{`
        .chat-container {
          display: flex;
          flex-direction: column;
          height: 500px;
          width: 400px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background: white;
          font-family: Arial, sans-serif;
        }
        
        .chat-header {
          padding: 15px;
          background: #f5f5f5;
          border-bottom: 1px solid #ddd;
          border-radius: 8px 8px 0 0;
        }
        
        .chat-header h3 {
          margin: 0;
          color: #333;
        }
        
        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .message {
          display: flex;
          margin-bottom: 10px;
        }
        
        .user-message {
          justify-content: flex-end;
        }
        
        .bot-message {
          justify-content: flex-start;
        }
        
        .message-content {
          max-width: 70%;
          padding: 10px 15px;
          border-radius: 18px;
          word-wrap: break-word;
        }
        
        .user-message .message-content {
          background: #007bff;
          color: white;
        }
        
        .bot-message .message-content {
          background: #f1f1f1;
          color: #333;
        }
        
        .input-container {
          display: flex;
          padding: 15px;
          border-top: 1px solid #ddd;
          gap: 10px;
        }
        
        .message-input {
          flex: 1;
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 20px;
          outline: none;
          font-size: 14px;
        }
        
        .message-input:focus {
          border-color: #007bff;
        }
        
        .send-button {
          padding: 10px 20px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          font-size: 14px;
        }
        
        .send-button:hover {
          background: #0056b3;
        }
        
        .send-button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default ChatComponent;
