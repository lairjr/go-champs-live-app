export enum Actions {
  InitGame = "init_game",
  LoadGame = "load_game",
  NoAction = "no_action",
  IncAwayTeamScore = "inc_away_team_score",
  IncHomeTeamScore = "inc_home_team_score",
}

export interface GameMessage {
  type: Actions;
  payload?: Object;
}

export interface Player {
  id: string;
  name: string;
  stats: { [key: string]: string };
}

export interface PlayerStat {
  id: string;
  title: string;
}

export interface Team {
  name: string;
  score: number;
  stats: { [key: string]: string };
}

export interface TeamStat {
  id: string;
  title: string;
}

export interface GameState {
  id: string;
  awayTeam: Team;
  awayPlayers: Player[];
  homeTeam: Team;
  homePlayers: Player[];
  playerStats: PlayerStat[];
  teamStats: TeamStat[];
}
