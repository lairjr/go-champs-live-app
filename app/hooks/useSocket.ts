import { useContext, useEffect, useState } from "react";
import WsContext from "../providers/wscontext";

export interface Player {
  id: string;
  name: string;
}

export interface TeamState {
  name: string;
  score: number;
}

export interface GameState {
  id: string;
  awayTeam: TeamState;
  awayPlayers: Player[];
  homeTeam: TeamState;
  homePlayers: Player[];
}

const INITIAL_GAME_STATE: GameState = {
  id: "",
  awayTeam: {
    name: "",
    score: 0,
  },
  awayPlayers: [],
  homeTeam: {
    name: "",
    score: 0,
  },
  homePlayers: [],
};

const useSocket = () => {
  const socket = useContext(WsContext);
  const [game, setGame] = useState(INITIAL_GAME_STATE);

  useEffect(() => {
    socket.addEventListener("open", (data) => {
      socket.send(JSON.stringify({ type: "load_game" }));
    });

    socket.addEventListener("message", (msg) => {
      const messageData = JSON.parse(msg.data);

      if (messageData.type === "update_game") {
        const gameState = messageData.payload as GameState;
        setGame(gameState);
      }
    });
    socket.addEventListener("error", (err) => {
      console.log("error", err);
    });
    return () => {
      socket.close();
    };
  }, []);

  const incTeamAwayScore = () => {
    socket.send(JSON.stringify({ type: "inc_away_team_score" }));
  };

  const incTeamHomeScore = () => {
    socket.send(JSON.stringify({ type: "inc_home_team_score" }));
  };

  const initGame = () => {
    socket.send(JSON.stringify({ type: "init_game" }));
  };

  return [game, { incTeamAwayScore, incTeamHomeScore, initGame }];
};

export default useSocket;
