"use client";

import useSocket from "../hooks/useSocket";

interface Props {
  type: "home" | "away";
}

export default function Score({ type }: Props) {
  const [game, { incTeamScore }] = useSocket();

  console.log(game);
  const handleClick = () => {
    incTeamScore(type);
  };

  return (
    <div>
      <span>
        Time {type === "away" ? game.awayTeam.name : game.homeTeam.name}:
      </span>
      <span>{type === "away" ? game.awayTeam.score : game.homeTeam.score}</span>
      {"    "}
      <br />
      <button onClick={handleClick}>Send message</button>
    </div>
  );
}
