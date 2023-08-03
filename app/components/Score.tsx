"use client";

import useSocket, { TeamState } from "../hooks/useSocket";
import BoxScore from "./BoxScore";

export default function Score() {
  const [game, { incTeamAwayScore, incTeamHomeScore }] = useSocket();

  return (
    <div>
      <p>Box Score</p>

      <BoxScore team={game.homeTeam} incScore={incTeamHomeScore} />
      <BoxScore team={game.awayTeam} incScore={incTeamAwayScore} />
    </div>
  );
}
