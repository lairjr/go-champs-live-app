"use client";

import { Player, PlayerStat, Team } from "../../types";

interface Props {
  players: Player[];
  playerStats: PlayerStat[];
  team: Team;
  incScore: () => void;
}

interface PlayerProps {
  player: Player;
  playerStats: PlayerStat[];
}

function Player({ player, playerStats }: PlayerProps) {
  return (
    <tr>
      <td>{player.name}</td>
      {playerStats.map((playerStat) => (
        <td key={playerStat.id}>{player.stats[playerStat.id]}</td>
      ))}
    </tr>
  );
}

export default function BoxScore({
  players,
  playerStats,
  incScore,
  team,
}: Props) {
  return (
    <div>
      <p>Box score: {team.name}</p>

      <table style={{ backgroundColor: "GrayText" }}>
        <thead>
          <tr>
            <td>Name</td>
            {playerStats.map((playerStat) => (
              <td key={playerStat.id}>{playerStat.title}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <Player key={p.id} player={p} playerStats={playerStats} />
          ))}
        </tbody>
      </table>

      <button onClick={incScore}>Inc score</button>
    </div>
  );
}
