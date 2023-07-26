"use client";

import { useState } from "react";
import useSocket from "../hooks/useSocket";

interface Props {
  teamName: string;
  type: "home" | "away";
}

export default function Score({ teamName, type }: Props) {
  const [game, incTeamScore] = useSocket();

  console.log(game);
  const handleClick = () => {
    incTeamScore(type);
  };

  return (
    <div>
      <span>Time {teamName}:</span>
      <span>{type === "away" ? game.awayTeam.score : game.homeTeam.score}</span>
      {"    "}
      <button onClick={() => setScoreRafa(scoreRafa + 1)}>Up</button>
      <br />
      <br />
      <button onClick={handleClick}>Send message</button>
    </div>
  );
}
