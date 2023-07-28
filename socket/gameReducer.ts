interface Team {
  name: string;
  score: number;
}

export interface GameState {
  id: string;
  awayTeam: Team;
  homeTeam: Team;
}

const INIT_GAME_MESSAGE = "init_game";
const LOAD_GAME_MESSAGE = "load_game";
const INC_AWAY_SCORE_GAME_MESSAGE = "inc_away_team_score";
const INC_HOME_SCORE_GAME_MESSAGE = "inc_home_team_score";
const NO_ACTION_MESSAGE = "no_action";

export interface GameMessage {
  type:
    | "init_game"
    | "load_game"
    | "no_action"
    | "inc_away_team_score"
    | "inc_home_team_score";
  payload?: Object;
}

export const NoAction: GameMessage = {
  type: "no_action",
};

export const INITIAL_STATE: GameState = {
  id: "",
  awayTeam: {
    name: "Away Team",
    score: 0,
  },
  homeTeam: {
    name: "Home Team",
    score: 0,
  },
};

type Action = (state: GameState, message: GameMessage) => GameState;

const noGameAction: Action = (state = INITIAL_STATE, message) => state;

const incAwayTeamScoreAction: Action = (state = INITIAL_STATE, message) => ({
  ...state,
  awayTeam: {
    ...state.awayTeam,
    score: state.awayTeam.score + 1,
  },
});

const incHomeTeamScoreAction: Action = (state = INITIAL_STATE, message) => ({
  ...state,
  homeTeam: {
    ...state.homeTeam,
    score: state.homeTeam.score + 1,
  },
});

const initGameAction: Action = (state = INITIAL_STATE, message) =>
  INITIAL_STATE;

export const REGISTRY_ACTIONS = {
  [INC_AWAY_SCORE_GAME_MESSAGE]: incAwayTeamScoreAction,
  [INC_HOME_SCORE_GAME_MESSAGE]: incHomeTeamScoreAction,
  [INIT_GAME_MESSAGE]: initGameAction,
  [NO_ACTION_MESSAGE]: noGameAction,
  [LOAD_GAME_MESSAGE]: noGameAction,
};

const reduce = (state: GameState, message: GameMessage) => {
  return REGISTRY_ACTIONS[message.type](state, message);
};

export default reduce;
