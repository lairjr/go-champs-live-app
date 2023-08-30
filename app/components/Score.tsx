"use client";

import useSocket from "../hooks/useSocket";
import BoxScore from "./BoxScore";
import TeamBox from "./TeamBox";

export default function Score() {
  const [gameState, { incTeamAwayScore, incTeamHomeScore }] = useSocket();
  return (
    <div>
      <TeamBox team={gameState.homeTeam} teamStats={gameState.teamStats} />
      <TeamBox team={gameState.awayTeam} teamStats={gameState.teamStats} />

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
