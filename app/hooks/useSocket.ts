import { useContext, useEffect, useState } from "react";
import WsContext from "../providers/wscontext";

interface TeamState {
  name: string;
  score: number;
}

interface GameState {
  id: string;
  awayTeam: TeamState;
  homeTeam: TeamState;
}

const INITIAL_GAME_STATE: GameState = {
  id: "",
  awayTeam: {
    name: "",
    score: 0,
  },
  homeTeam: {
    name: "",
    score: 0,
  },
};

const useSocket = () => {
  const socket = useContext(WsContext);
  const [game, setGame] = useState(INITIAL_GAME_STATE);

  useEffect(() => {
    socket.addEventListener("open", (data) => {
      socket.send(JSON.stringify({ type: "init_game" }));
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

  const incTeamScore = (team: "away" | "home") => {
    if (team === "away") {
      socket.send(JSON.stringify({ type: "inc_away_team_score" }));
    } else {
      socket.send(JSON.stringify({ type: "inc_home_team_score" }));
    }
  };

  return [game, incTeamScore];
};

export default useSocket;
