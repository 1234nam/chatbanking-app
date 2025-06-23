import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MessageBubble from './MessageBubble';
import VoiceInput from './VoiceInput'; // Adjust path if needed

const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Welcome to ChatBanking! How can I help you today?" },
  ]);
  const navigate = useNavigate();

  const getBotResponse = (msg) => {
    const lower = msg.toLowerCase();

    if (lower.includes('balance')) {
      return "Your Current Balance is ₹12,000.";
    }
    if (lower.includes('credit')) {
      setTimeout(() => {
        navigate('/credit-card-statement');
      }, 1000);
      return "Opening your credit card statement...";
    }
    if (lower.includes('loan')) {
      setTimeout(() => {
        navigate('/loan-emi');
      }, 1000);
      return "Opening your Loan EMI details...";
    }
    return "Please ask about balance, credit card, or loan services.";
  };

  const handleSend = (input) => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];

    const reply = getBotResponse(input);

    newMessages.push({ sender: 'bot', text: reply });

    setMessages(newMessages);
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((m, i) => (
          <MessageBubble key={i} sender={m.sender} text={m.text} />
        ))}
      </div>

      {/* Pass handleSend to VoiceInput */}
      <VoiceInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
