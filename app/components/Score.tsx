"use client";

import { useState } from "react";
import useSocket from "../hooks/useSocket";

interface Props {
  teamName: string;
}

export default function Score({ teamName }: Props) {
  const [scoreRafa, setScoreRafa] = useState(0);
  const [sendMsg] = useSocket();

  const handleClick = () => {
    sendMsg("click score");
  };

  return (
    <div>
      <span>Time {teamName}:</span>
      <span>{scoreRafa}</span>
      {"    "}
      <button onClick={() => setScoreRafa(scoreRafa + 1)}>Up</button>
      <br />
      <br />
      <button onClick={handleClick}>Send message</button>
    </div>
  );
}
