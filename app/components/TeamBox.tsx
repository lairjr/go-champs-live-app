import { Team, TeamStat } from "@/types";

interface Props {
  team: Team;
  teamStats: TeamStat[];
}

function TeamBox({ team, teamStats }: Props) {
  return (
    <div style={{ backgroundColor: "aliceblue" }}>
      <p>{team.name}</p>

      <p>Stats</p>
      {teamStats.map((teamStat) => (
        <p key={teamStat.id}>
          {teamStat.title}: {team.stats[teamStat.id]}
        </p>
      ))}
    </div>
  );
}

export default TeamBox;
