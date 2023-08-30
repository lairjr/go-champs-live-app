"use client";

import useSocket from "../hooks/useSocket";
import BoxScore from "./BoxScore";

export default function Score() {
  const [gameState, { incTeamAwayScore, incTeamHomeScore }] = useSocket();
  console.log(gameState);
  return (
    <div>
      <p>Box Score</p>

      <BoxScore
        players={gameState.homePlayers}
        playerStats={gameState.playerStats}
        team={gameState.homeTeam}
        incScore={incTeamHomeScore}
      />
      <BoxScore
        players={gameState.awayPlayers}
        playerStats={gameState.playerStats}
        team={gameState.awayTeam}
        incScore={incTeamAwayScore}
      />
    </div>
  );
}
