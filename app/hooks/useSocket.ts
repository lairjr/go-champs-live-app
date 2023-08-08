import { useContext, useEffect, useState } from "react";
import WsContext from "../providers/wscontext";
import { GameState, Actions } from "../../types";

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
      socket.send(JSON.stringify({ type: Actions.LoadGame }));
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
    socket.send(JSON.stringify({ type: Actions.IncAwayTeamScore }));
  };

  const incTeamHomeScore = () => {
    socket.send(JSON.stringify({ type: Actions.IncHomeTeamScore }));
  };

  const initGame = () => {
    socket.send(JSON.stringify({ type: Actions.InitGame }));
  };

  return [game, { incTeamAwayScore, incTeamHomeScore, initGame }];
};

export default useSocket;
