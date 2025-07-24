import React from 'react';

export default function ChatInput(){
    return(
        <div className="chat-input">
            <input type="text" placeholder="Type your message here..." />
            <button type="submit">Send</button>
        </div>
    )
}