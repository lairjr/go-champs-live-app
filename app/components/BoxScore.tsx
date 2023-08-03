"use client";

import { TeamState } from "../hooks/useSocket";

interface Props {
  team: TeamState;
  incScore: () => void;
}

export default function BoxScore({ team, incScore }: Props) {
  return (
    <div>
      <span>Time {team.name}:</span>
      <span>{team.score}</span>
      {"    "}
      <br />
      <button onClick={incScore}>Inc score</button>
    </div>
  );
}
