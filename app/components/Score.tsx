"use client";

import { useEffect, useState } from "react";

interface Props {
  teamName: string;
}

export default function Score({ teamName }: Props) {
  const [scoreRafa, setScoreRafa] = useState(0);
  let socket: WebSocket;

  useEffect(() => {
    // Create WebSocket connection.
    socket = new WebSocket("ws://localhost:3000");

    // Connection opened
    socket.addEventListener("open", (event) => {
      //   console.log(event);
      socket.send("Hello Server!");
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      console.log("Message from server ", event.data);
    });

    // Clean up the WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, []);

  const sendMsg = () => {
    socket.send("Minha mensagem");
  };

  return (
    <div>
      <span>Time {teamName}:</span>
      <span>{scoreRafa}</span>
      {"    "}
      <button onClick={() => setScoreRafa(scoreRafa + 1)}>Up</button>
      <br />
      <br />
      <button onClick={sendMsg}>Send message</button>
    </div>
  );
}
