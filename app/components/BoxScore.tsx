"use client";

import { Player, TeamState } from "../hooks/useSocket";

interface Props {
  players: Player[];
  team: TeamState;
  incScore: () => void;
}

interface PlayerProps {
  player: Player;
}

function Player({ player }: PlayerProps) {
  return (
    <tr>
      <td>{player.name}</td>
    </tr>
  );
}

export default function BoxScore({ players, team, incScore }: Props) {
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
            <Player key={p.id} player={p} />
          ))}
        </tbody>
      </table>

      <button onClick={incScore}>Inc score</button>
    </div>
  );
}
