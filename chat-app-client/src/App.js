import React, { useState } from "react";
import "./App.css"
import "./index.css";
import useChat from './useChat';

const Chat = () => {
  const { messages, sendMessage } = useChat();
  const [newMessage, setNewMessage] = useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="chat-room-container">
      <div className="messages-container">
        <ol className="messages-list">
          {messages.map((message, i) => (
            <li
              key={i}
            >
              <span
                className={`message-item ${message.ownedByCurrentUser ? "my-message" : "received-message"
                  }`}
              >{`${message.senderName}: `}</span>
              <span>{message.body}</span>
            </li>
          ))}
        </ol>
      </div>
      <textarea
        value={newMessage}
        onChange={handleNewMessageChange}
        className="new-message-input-field"
        placeholder="what would you like to say?"
      />
      <button onClick={handleSendMessage} className="send-message-button">
        Send
      </button>
    </div>
  );
};

function App() {
  return (
    <Chat />
  );
}

export default App;
