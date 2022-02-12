import React from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";

function Chat() {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <h1>You are in {roomId} room</h1>
    </div>
  );
}

export default Chat;
