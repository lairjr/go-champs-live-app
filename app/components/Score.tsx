"use client";

import useSocket from "../hooks/useSocket";
import BoxScore from "./BoxScore";

export default function Score() {
  const [game, { incTeamAwayScore, incTeamHomeScore }] = useSocket();

  return (
    <div>
      <p>Box Score</p>

      <BoxScore
        players={game.homePlayers}
        team={game.homeTeam}
        incScore={incTeamHomeScore}
      />
      <BoxScore
        players={game.awayPlayers}
        team={game.awayTeam}
        incScore={incTeamAwayScore}
      />
    </div>
  );
}
