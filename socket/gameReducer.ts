import { GameMessage, GameState, Actions } from "../types";

export const NoAction: GameMessage = {
  type: Actions.NoAction,
};

export const INITIAL_STATE: GameState = {
  id: "",
  awayTeam: {
    name: "Away Team",
    score: 0,
  },
  awayPlayers: [
    {
      id: "first-player",
      name: "First player",
    },
  ],
  homeTeam: {
    name: "Home Team",
    score: 0,
  },
  homePlayers: [
    {
      id: "home-player",
      name: "Home player",
    },
  ],
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
  [Actions.IncAwayTeamScore]: incAwayTeamScoreAction,
  [Actions.IncHomeTeamScore]: incHomeTeamScoreAction,
  [Actions.InitGame]: initGameAction,
  [Actions.NoAction]: noGameAction,
  [Actions.LoadGame]: noGameAction,
};

const reduce = (state: GameState, message: GameMessage) => {
  return REGISTRY_ACTIONS[message.type](state, message);
};

export default reduce;
