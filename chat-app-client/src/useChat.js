import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals
} from "unique-names-generator";

const CHAT_EVENT = "chat_message_event";
const SOCKET_SERVER_URL = "http://localhost:4000";

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState(null)
  const socketRef = useRef();

  const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals]
  });
  
  useEffect(() => {
    setName(randomName)
    socketRef.current = io(SOCKET_SERVER_URL);

    socketRef.current.on(CHAT_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    return () => {
      socketRef.current.disconnect();
    };

  }, []);

  const sendMessage = (messageBody) => {
    socketRef.current.emit(CHAT_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
      senderName: name,
    });
  };

  return { messages, sendMessage };
};

export default useChat;