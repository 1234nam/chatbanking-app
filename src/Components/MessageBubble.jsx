import React from 'react'

const MessageBubble = ({sender,text}) => {
    const isUser = sender === 'user';
  return (
    <div
    style={{
        textAlign: isUser ? 'right' : 'left',   
        margin: '10px',
    }}
    >
        <span
        style={{
            display: 'inline-block',
            backgroundColor: isUser ? "#cce5ff" : "#e2e2e2",
            padding:'10px',
            borderRadius: '8px',
            maxWidth: '70%',
        }}
        >
            {text}

        </span>
        
        </div>
  )
}

export default MessageBubble