"use client";

import { useEffect, useState } from "react";
import io from "Socket.IO-client";
let socket: any;

const Home = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const socketInitializer = async () => {
      await fetch("/api/socket");
      socket = io();

      socket.on("connect", () => {
        console.log("connected");
      });

      socket.on("update-input", (msg: string) => {
        setInput(msg);
      });
    };

    socketInitializer();
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    socket.emit("input-change", e.target.value);
  };

  return (
    <input
      placeholder="Type something"
      value={input}
      onChange={onChangeHandler}
    />
  );
};

export default Home;
