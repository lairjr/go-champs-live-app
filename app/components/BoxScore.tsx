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
  team,
  incScore,
}: Props) {
  return (
    <div>
      <span>Time {team.name}:</span>
      <span>{team.score}</span>
      {"    "}
      <br />

      <p>Box score</p>

      <table>
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
